// Build-time charts for the Vitals view from data/vitals/<id>.json (written by tools/fetch-vitals.js).
// Every past year faint, the baseline in ink, this year in the accent, preliminary days dashed.
// Only SVG path strings reach the page; the raw arrays stay here.
import fs from 'node:fs'
import path from 'node:path'

export const W = 720, H = 240, P = { l: 48, r: 10, t: 8, b: 22 }
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
const GAP = { co2: 14 }  // connect across gaps up to this many days; weekly CO₂ needs more than daily series
const SHORT = { ohc: 'Ocean heat', gmst: 'Since pre-industrial', gmsl: 'Sea level', nino34: 'Niño 3.4', sst: 'Global SST', t2m: 'Global air temp', co2: 'CO₂ Mauna Loa', 'ice-n': 'Arctic ice', 'ice-s': 'Antarctic ice' }
const DIR = path.resolve('../../data/vitals')  // relative to packages/site, where the build runs

function pathOf(arr, x, y, maxGap = 6) {
  let d = '', last = -1e9
  for (let i = 0; i < arr.length; i++) { const v = arr[i]; if (v == null) continue; d += (i - last <= maxGap ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1); last = i }
  return d
}

function chart(v) {
  const years = Object.keys(v.years).sort(); const cur = years.at(-1)
  const all = years.flatMap((y) => v.years[y]).filter((n) => n != null)
  let lo = Math.min(...all), hi = Math.max(...all); const pad = (hi - lo) * 0.05; lo -= pad; hi += pad
  const x = (i) => P.l + (i / 365) * (W - P.l - P.r), y = (val) => P.t + (1 - (val - lo) / (hi - lo)) * (H - P.t - P.b)
  const g = GAP[v.id] ?? 6
  const past = years.filter((yy) => yy !== cur).map((yy, k, a) => ({ year: yy, d: pathOf(v.years[yy], x, y, g), alpha: 0.1 + 0.4 * (k / Math.max(1, a.length - 1)) }))
  const ticksY = [0, 1, 2, 3, 4].map((k) => { const val = lo + pad + (k / 4) * (hi - lo - 2 * pad); return { y: y(val), label: val.toFixed(v.unit === 'ppm' ? 0 : 1) } })
  const ticksX = MONTHS.map((m, i) => ({ x: x(Math.round(i * 30.42) + 15), label: m }))
  const date = (year, doy) => new Date(Date.UTC(year, 0, doy)).toISOString().slice(0, 10)
  return {
    id: v.id, title: v.title, short: SHORT[v.id] || v.title, unit: v.unit, source: v.source, url: v.url, licence: v.licence, citation: v.citation, note: v.note || '', fetched: v.fetched,
    baselineName: v.baseline?.name, firstYear: v.firstYear, curYear: cur,
    latest: v.latest ? { ...v.latest, date: date(v.latest.year, v.latest.doy) } : null,
    preliminary: v.preliminary ? { ...v.preliminary, date: date(+cur, v.preliminary.doy) } : null,
    paths: { past, baseline: v.baseline?.data ? pathOf(v.baseline.data, x, y, g) : '', current: pathOf(v.years[cur], x, y, g), prelim: v.prelim ? pathOf(v.prelim, x, y, g) : '' },
    ticksY, ticksX
  }
}

// A long-term series on a time axis: the main line in the accent, an optional coarser record faint behind it,
// and the baseline (where the series has one) as a level line in ink.
function timeline(v) {
  const all = [...v.points, ...(v.context || [])]
  const t0 = Math.floor(Math.min(...all.map((p) => p[0]))), t1 = Math.max(...all.map((p) => p[0]))
  const vals = all.map((p) => p[1]).concat(v.baseline ? [v.baseline.value] : [])
  let lo = Math.min(...vals), hi = Math.max(...vals); const pad = (hi - lo) * 0.05; lo -= pad; hi += pad
  const x = (t) => P.l + ((t - t0) / (t1 - t0)) * (W - P.l - P.r), y = (val) => P.t + (1 - (val - lo) / (hi - lo)) * (H - P.t - P.b)
  const line = (pts) => pts.map(([t, val], i) => (i ? 'L' : 'M') + x(t).toFixed(1) + ',' + y(val).toFixed(1)).join('')
  const step = t1 - t0 > 100 ? 25 : t1 - t0 > 40 ? 10 : 5
  const ticksX = []; for (let t = Math.ceil(t0 / step) * step; t <= t1; t += step) ticksX.push({ x: x(t), label: String(t) })
  const ticksY = [0, 1, 2, 3, 4].map((k) => { const val = lo + pad + (k / 4) * (hi - lo - 2 * pad); return { y: y(val), label: val.toFixed(Math.abs(hi - lo) < 10 ? 1 : 0) } })
  const at = v.latest.t, yr = Math.floor(at), mon = Math.min(12, Math.floor((at - yr) * 12) + 1)
  return {
    kind: 'timeline', id: v.id, title: v.title, short: SHORT[v.id] || v.title, unit: v.unit, source: v.source, url: v.url, licence: v.licence, citation: v.citation, note: v.note || '', fetched: v.fetched,
    baselineName: v.baseline?.name, firstYear: t0, curYear: yr,
    latest: { value: v.latest.value, date: `${yr}-${String(mon).padStart(2, '0')}`, anomaly: v.baseline ? +(v.latest.value - v.baseline.value).toFixed(2) : null },
    paths: { context: v.context ? line(v.context) : '', current: line(v.points), baseline: v.baseline ? `M${P.l},${y(v.baseline.value).toFixed(1)}H${W - P.r}` : '' },
    ticksY, ticksX
  }
}

/** Charts in the order the entity asks for; series it does not name follow alphabetically. */
export function charts(order = [], dir = DIR) {
  if (!fs.existsSync(dir)) return []
  const all = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')))
  const rank = (v) => { const i = order.indexOf(v.id); return i < 0 ? order.length : i }
  return all.sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id)).map((v) => (v.kind === 'timeline' ? timeline(v) : chart(v)))
}
