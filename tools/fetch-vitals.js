// Fetch the running planetary indicators shown on /vitals and write one JSON file per series
// into data/vitals/, beside the Vitals entry, so the machine export publishes them too.
// Usage: node tools/fetch-vitals.js [out-dir]     (default data/vitals; idempotent; run before a deploy)
// Each file carries the series by year as day-of-year arrays, the 1991–2020 baseline (the feed's own
// where it gives one, else the mean per day of year), the latest value with its anomaly, the feed's
// preliminary tail where it has one, and provenance: source, url, licence, citation, fetch date,
// sha256 of the raw download. A source that is down keeps its previous file and is reported.
import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'

const out = process.argv[2] || 'data/vitals'
fs.mkdirSync(out, { recursive: true })
const today = new Date().toLocaleDateString('sv')  // local date of the box that fetched, YYYY-MM-DD
const UA = { 'user-agent': 'digitaltwins-wiki-vitals/0.1 (https://digitaltwins.wiki/vitals)' }
const get = async (url) => { const r = await fetch(url, { headers: UA }); if (!r.ok) throw new Error(`${r.status} ${url}`); return r.text() }
const sha = (s) => createHash('sha256').update(s).digest('hex')
const doy = (y, m, d) => Math.round((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 1)) / 864e5)
const mean = (vs) => +(vs.reduce((s, v) => s + v, 0) / vs.length).toFixed(3)
// Baseline per day of year from the years 1991–2020, needing most of them present; `reach` lets weekly series look to neighbouring days.
const baselineOf = (years, reach = 0) => Array.from({ length: 366 }, (_, i) => {
  const vs = []
  for (let y = 1991; y <= 2020; y++) { const a = years[y]; if (!a) continue; for (let k = -reach; k <= reach; k++) { const v = a[i + k]; if (v != null) { vs.push(v); break } } }
  return vs.length >= 20 ? mean(vs) : null
})
const CR = { licence: 'CC BY 4.0', citation: `Climate Reanalyzer (n.d.). Daily Sea Surface Temperature / 2m Air Temperature. Climate Change Institute, University of Maine. Retrieved ${today}, from https://climatereanalyzer.org/` }

const log = []
let failures = 0
const attempt = async (id, fn) => { try { await fn() } catch (e) { failures++; log.push(`${id}: FAILED (${e.message}); previous ${out}/${id}.json kept`) } }

function write(o) {
  const { raw, ...rest } = o
  const yrs = Object.keys(rest.years).sort(); const cur = yrs.at(-1); const arr = rest.years[cur]
  let last = -1; for (let i = 0; i < arr.length; i++) if (arr[i] != null) last = i
  const latest = last >= 0 ? { year: +cur, doy: last + 1, value: arr[last], baseline: rest.baseline?.data?.[last] ?? null } : null
  if (latest && latest.baseline != null) latest.anomaly = +(latest.value - latest.baseline).toFixed(3)
  if (rest.prelim) { let pl = -1; for (let i = 0; i < rest.prelim.length; i++) if (rest.prelim[i] != null) pl = i; if (pl > last) rest.preliminary = { doy: pl + 1, value: rest.prelim[pl], anomaly: rest.baseline?.data?.[pl] != null ? +(rest.prelim[pl] - rest.baseline.data[pl]).toFixed(3) : null } }
  fs.writeFileSync(path.join(out, `${rest.id}.json`), JSON.stringify({ ...rest, fetched: today, sha256_raw: sha(raw), latest, firstYear: +yrs[0] }))
  log.push(`${rest.id}: ${yrs[0]}..${cur}, latest doy ${latest?.doy} = ${latest?.value} ${rest.unit} (anomaly ${latest?.anomaly ?? 'n/a'})`)
}

// Climate Reanalyzer day-of-year JSON: [{name:'1981',data:[366]}, ..., {name:'1991-2020',data:[...]}, {name:'Preliminary',...}]
async function reanalyzer(id, title, unit, url, dataset, note) {
  const raw = await get(url); const j = JSON.parse(raw)
  const years = {}; let baseline = null, prelim = null
  for (const s of j) { if (/^\d{4}$/.test(s.name)) years[s.name] = s.data; else if (s.name === '1991-2020') baseline = s.data; else if (s.name === 'Preliminary') prelim = s.data }
  write({ id, title, unit, source: 'Climate Reanalyzer, ' + dataset, url, ...CR, baseline: { name: '1991-2020', data: baseline }, years, prelim, raw, note })
}
await attempt('nino34', () => reanalyzer('nino34', 'Niño 3.4 sea surface temperature', '°C', 'https://climatereanalyzer.org/clim/sst_daily/json_2clim/oisst2.1_nino3.4_sst_day.json', 'NOAA OISST v2.1, Niño 3.4 region (5°S–5°N, 170°W–120°W)', 'The last two weeks of OISST are preliminary and revised.'))
await attempt('sst', () => reanalyzer('sst', 'Global sea surface temperature, 60°S–60°N', '°C', 'https://climatereanalyzer.org/clim/sst_daily/json_2clim/oisst2.1_world2_sst_day.json', 'NOAA OISST v2.1, world 60°S–60°N', 'The last two weeks of OISST are preliminary and revised.'))
await attempt('t2m', () => reanalyzer('t2m', 'Global 2 m air temperature', '°C', 'https://climatereanalyzer.org/clim/t2_daily/json/era5_world_t2_day.json', 'ECMWF ERA5 reanalysis, global mean 2 m temperature', 'ERA5 runs about five days behind real time.'))

// NOAA GML Mauna Loa weekly CO2: year,month,day,decimal,average,...; -999.99 is missing.
await attempt('co2', async () => {
  const url = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_weekly_mlo.csv'; const raw = await get(url)
  const years = {}
  for (const line of raw.split('\n')) {
    if (!line || line.startsWith('#') || line.startsWith('year')) continue
    const [y, m, d, , avg] = line.split(',').map(Number); if (!(avg > 0)) continue
    ;(years[y] ||= Array(366).fill(null))[doy(y, m, d)] = avg
  }
  write({ id: 'co2', title: 'Atmospheric CO₂ at Mauna Loa', unit: 'ppm', source: 'NOAA Global Monitoring Laboratory, weekly mean, Mauna Loa Observatory', url, licence: 'US public domain', citation: 'Lan, X., Tans, P. and K.W. Thoning: Trends in globally-averaged CO2 determined from NOAA Global Monitoring Laboratory measurements. https://gml.noaa.gov/ccgg/trends/', baseline: { name: '1991-2020', data: baselineOf(years, 3) }, years, raw, note: 'Weekly means; the baseline is the 1991–2020 mean for the same week.' })
})

// NSIDC Sea Ice Index v4 daily: Year, Month, Day, Extent, Missing, Source Data
for (const [id, hemi, title] of [['ice-n', 'north', 'Arctic sea ice extent'], ['ice-s', 'south', 'Antarctic sea ice extent']]) await attempt(id, async () => {
  const url = `https://noaadata.apps.nsidc.org/NOAA/G02135/${hemi}/daily/data/${hemi === 'north' ? 'N' : 'S'}_seaice_extent_daily_v4.0.csv`; const raw = await get(url)
  const years = {}
  for (const line of raw.split('\n').slice(2)) {
    const p = line.split(',').map((s) => s.trim()); if (p.length < 4) continue
    const [y, m, d, ext] = [+p[0], +p[1], +p[2], +p[3]]; if (!(ext >= 0)) continue
    ;(years[y] ||= Array(366).fill(null))[doy(y, m, d)] = ext
  }
  write({ id, title, unit: 'million km²', source: 'NSIDC Sea Ice Index, Version 4 (G02135), daily extent', url, licence: 'Freely available; cite the Sea Ice Index', citation: 'National Snow and Ice Data Center. Sea Ice Index, Version 4 (G02135). https://doi.org/10.7265/a98x-0f50', baseline: { name: '1991-2020', data: baselineOf(years) }, years, raw, note: 'Before 1988 the record is every other day; the baseline is the 1991–2020 mean per day of year.' })
})
// Long-term series are drawn on a time axis rather than by day of year: points are [decimal year, value].
// `context` is an optional fainter series behind the main one (a longer but coarser record of the same quantity).
function writeTimeline(o) {
  const { raw, ...rest } = o
  const [t, value] = rest.points.at(-1)
  fs.writeFileSync(path.join(out, `${rest.id}.json`), JSON.stringify({ kind: 'timeline', ...rest, fetched: today, sha256_raw: sha(raw), latest: { t, value } }))
  log.push(`${rest.id}: ${rest.points[0][0]}..${t} = ${value} ${rest.unit}`)
}
const NCEI_OHC = 'https://www.ncei.noaa.gov/data/oceans/woa/DATA_ANALYSIS/3M_HEAT_CONTENT/DATA/basin/'
const ohcRows = (txt) => txt.split('\n').slice(1).map((l) => l.trim().split(/\s+/).map(Number)).filter((r) => r.length >= 2 && Number.isFinite(r[0]) && Number.isFinite(r[1]))

// NOAA NCEI ocean heat content, World Ocean 0-2000 m, in 10^22 J: four 3-month files (2005 on) and a pentadal file (1955 on).
await attempt('ohc', async () => {
  const raws = []; const points = []
  for (const q of ['1-3', '4-6', '7-9', '10-12']) { const r = await get(`${NCEI_OHC}3month/h22-w0-2000m${q}.dat`); raws.push(r); for (const [t, v] of ohcRows(r)) points.push([t, +(v * 10).toFixed(1)]) }
  const pent = await get(`${NCEI_OHC}pentad/pent_h22-w0-2000m.dat`); raws.push(pent)
  points.sort((a, b) => a[0] - b[0])
  writeTimeline({ id: 'ohc', title: 'Ocean heat content, 0–2000 m', unit: 'ZJ', source: 'NOAA NCEI, World Ocean heat content anomaly, 0–2000 m, 3-month means (line) and pentadal means (faint)', url: 'https://www.ncei.noaa.gov/access/global-ocean-heat-content/basin_heat_data.html', licence: 'US public domain', citation: 'NOAA National Centers for Environmental Information, Global Ocean Heat and Salt Content: Heat Content Basin Time Series. https://www.ncei.noaa.gov/access/global-ocean-heat-content/', points, context: ohcRows(pent).map(([t, v]) => [t, +(v * 10).toFixed(1)]), raw: raws.join('\n'), note: 'Published in units of 10²² joules, shown here in zettajoules (10²¹ J); 3-month values from 2005, pentadal from 1955. Updated quarterly.' })
})

// NOAA NCEI Climate at a Glance, global land and ocean monthly anomaly vs 1901-2000, re-expressed against this series' own 1850-1900 mean and smoothed over 12 months.
await attempt('gmst', async () => {
  const url = 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/tavg/land_ocean/1/0/1850-' + new Date().getFullYear() + '/data.csv'; const raw = await get(url)
  const rows = raw.split('\n').filter((l) => /^\d{6},/.test(l)).map((l) => { const [d, v] = l.split(','); return [+d.slice(0, 4) + (+d.slice(4) - 0.5) / 12, +v] })
  const pre = mean(rows.filter(([t]) => t < 1901).map(([, v]) => v))
  const points = rows.map(([t], i) => i < 11 ? null : [+t.toFixed(3), +(mean(rows.slice(i - 11, i + 1).map(([, v]) => v)) - pre).toFixed(2)]).filter(Boolean)
  writeTimeline({ id: 'gmst', title: 'Global temperature since pre-industrial', unit: '°C', source: 'NOAA NCEI Climate at a Glance, global land and ocean monthly anomaly (NOAAGlobalTemp), 12-month running mean', url: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series', licence: 'US public domain', citation: `NOAA National Centers for Environmental Information, Climate at a Glance: Global Time Series. Retrieved ${today}, from https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series`, baseline: { name: '1850–1900', value: 0 }, points, raw, note: `NOAA publishes anomalies against 1901–2000; here they are re-expressed against the same series' 1850–1900 mean (${Math.abs(pre)} °C below the 1901–2000 mean) and averaged over the 12 months ending in each month.` })
})

// NOAA Laboratory for Satellite Altimetry, global mean sea level, seasonal signal removed, one column per satellite mission.
await attempt('gmsl', async () => {
  const url = 'https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_free_ref_90.csv'; const raw = await get(url)
  const points = []
  for (const l of raw.split('\n')) { if (!/^\d{4}\./.test(l)) continue; const c = l.split(','); const v = c.slice(1).map((x) => x.trim()).filter((x) => x !== '').map(Number).at(-1); if (Number.isFinite(v)) points.push([+(+c[0]).toFixed(3), v]) }
  writeTimeline({ id: 'gmsl', title: 'Global mean sea level', unit: 'mm', source: 'NOAA Laboratory for Satellite Altimetry, global mean sea level anomaly, seasonal signals removed (TOPEX/Poseidon, Jason-1, -2, -3, Sentinel-6MF)', url: 'https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/LSA_SLR_timeseries.php', licence: "US public domain; acknowledge 'Altimetry data are provided by NOAA Laboratory for Satellite Altimetry.'", citation: 'Altimetry data are provided by NOAA Laboratory for Satellite Altimetry. https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/', points, raw, note: 'Each satellite mission in turn; no glacial isostatic adjustment. NOAA has not extended this file past early 2025.' })
})
console.log(log.join('\n'))
if (failures) { console.error(`vitals: ${failures} source(s) failed; previous files kept`); process.exitCode = 0 }
