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
console.log(log.join('\n'))
if (failures) { console.error(`vitals: ${failures} source(s) failed; previous files kept`); process.exitCode = 0 }
