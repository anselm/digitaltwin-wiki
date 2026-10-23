// Make every page fit to be shared as a card: a 1200×630 preview image per entry (and per Vitals
// series, drawn from the chart), sitemap.xml and robots.txt, written into the site's static folder,
// then a report of pages that will share poorly (no description, a title or description that
// will be cut, no picture of their own). Rerunnable; the build runs it after the machine export.
// Usage: node tools/share.js [static-dir]     (default packages/site/static; reads its index.json)
import fs from 'node:fs'
import path from 'node:path'
import { Resvg } from '@resvg/resvg-js'
import { charts, W as CW, H as CH } from '../packages/site/src/lib/vitals.server.js'

export const SITE = 'https://digitaltwins.wiki'
const out = process.argv[2] || 'packages/site/static'
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const entries = JSON.parse(fs.readFileSync(path.join(out, 'index.json'), 'utf8'))
const W = 1200, H = 630, PAD = 64
const C = { paper: '#f8f4ec', ink: '#17333b', muted: '#45616a', line: '#d8d1c3', accent: '#256768' }
const fonts = { fontFiles: ['NotoSerif-Regular.ttf', 'NotoSans-Regular.ttf'].map((f) => path.join(root, 'tools/fonts', f)), loadSystemFonts: false, defaultFontFamily: 'Noto Sans' }
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Wrap by an estimated advance per character (no layout engine here); the last kept line gets an ellipsis.
function wrap(text, size, width, maxLines, em = 0.53) {
  const per = Math.floor(width / (size * em)); const words = String(text || '').split(/\s+/).filter(Boolean); const lines = []; let cur = ''
  for (const w of words) { if ((cur + ' ' + w).trim().length > per && cur) { lines.push(cur); cur = w } else cur = (cur + ' ' + w).trim() }
  if (cur) lines.push(cur)
  const cut = lines.length > maxLines; const kept = lines.slice(0, maxLines)
  if (cut) kept[maxLines - 1] = kept[maxLines - 1].replace(/[\s,;:.]*\S*$/, '') + '…'
  return { lines: kept, cut }
}
const text = (lines, x, y, size, lh, fill, family) => lines.map((l, i) => `<text x="${x}" y="${y + i * lh}" font-family="${family}" font-size="${size}" fill="${fill}">${esc(l)}</text>`).join('')

const png = (svg, file) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, new Resvg(svg, { font: fonts, fitTo: { mode: 'width', value: W } }).render().asPng()) }
const sections = Object.fromEntries(entries.filter((e) => e.kinds.includes('section')).map((e) => [e.id, e.label]))
const report = []

function entryCard(e) {
  const pic = e.depiction && /\.(jpe?g|png)$/i.test(e.depiction) && path.join(out, e.depiction)
  const img = pic && fs.existsSync(pic) ? `data:image/${/png$/i.test(pic) ? 'png' : 'jpeg'};base64,${fs.readFileSync(pic).toString('base64')}` : null
  const textW = (img ? 720 : W) - 2 * PAD
  const shelf = e.id ? sections[e.id.split('/')[0]] : ''
  const kicker = ['Digital Twins Wiki', shelf && shelf !== e.label ? shelf : ''].filter(Boolean).join(' · ')
  const t = wrap(e.label, 60, textW, 3, 0.5), d = wrap(e.description, 28, textW, t.lines.length > 2 ? 3 : 4, 0.52)
  const ty = 190, dy = ty + t.lines.length * 72 + 28
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="${C.paper}"/>
${img ? (e.square ? `<image href="${img}" x="780" y="${(H - 360) / 2}" width="360" height="360" preserveAspectRatio="xMidYMid meet"/>` : `<image href="${img}" x="720" y="0" width="480" height="${H}" preserveAspectRatio="xMidYMid slice"/>`) : ''}
<rect x="${PAD}" y="${PAD}" width="56" height="4" fill="${C.accent}"/>
${text([kicker], PAD, PAD + 50, 24, 30, C.accent, 'Noto Sans')}
${text(t.lines, PAD, ty, 60, 72, C.ink, 'Noto Serif')}
${text(d.lines, PAD, dy, 28, 40, C.muted, 'Noto Sans')}
${text(['digitaltwins.wiki' + (e.url === '/' ? '' : e.url.replace(/\/$/, ''))], PAD, H - PAD + 8, 22, 28, C.muted, 'Noto Sans')}
</svg>`
  png(svg, path.join(out, 'cards', `${e.id || 'index'}.png`))
  const issues = []
  if (!e.description) issues.push('no description')
  else if (d.cut) issues.push(`description cut on the card (${e.description.length} chars)`)
  if (t.cut) issues.push(`title cut on the card (${e.label.length} chars)`)
  if (e.description && e.description.length > 200) issues.push(`description over 200 chars, search results cut it`)
  if (!img) issues.push('no picture')
  if (issues.length) report.push([e.url, issues])
}

// A Vitals series as a card: its title, the latest reading and the same chart the page draws.
function vitalCard(v) {
  const r = v.preliminary || v.latest
  const head = r ? `${r.value} ${v.unit} · ${r.date}${v.preliminary ? ' (preliminary)' : ''}` + (r.anomaly != null ? ` · ${r.anomaly > 0 ? '+' : ''}${r.anomaly} ${v.unit} vs ${v.baselineName}` : '') : ''
  const p = v.paths
  const lines = v.kind === 'timeline'
    ? `${p.context ? `<path d="${p.context}" fill="none" stroke="${C.muted}" stroke-width="1.4" opacity=".45"/>` : ''}${p.baseline ? `<path d="${p.baseline}" fill="none" stroke="${C.ink}" stroke-width="1"/>` : ''}<path d="${p.current}" fill="none" stroke="${C.accent}" stroke-width="2"/>`
    : `${p.past.map((q) => `<path d="${q.d}" fill="none" stroke="${C.muted}" stroke-width=".7" opacity="${q.alpha}"/>`).join('')}<path d="${p.baseline}" fill="none" stroke="${C.ink}" stroke-width="1.6"/><path d="${p.current}" fill="none" stroke="${C.accent}" stroke-width="2.4"/>${p.prelim ? `<path d="${p.prelim}" fill="none" stroke="${C.accent}" stroke-width="2.4" stroke-dasharray="3 3"/>` : ''}`
  const ticks = v.ticksY.map((t) => `<line x1="48" x2="${CW - 10}" y1="${t.y}" y2="${t.y}" stroke="${C.line}" stroke-width=".6"/><text x="43" y="${t.y + 3}" text-anchor="end" font-family="Noto Sans" font-size="13" fill="${C.muted}">${esc(t.label)}</text>`).join('') + v.ticksX.map((t) => `<text x="${t.x}" y="${CH - 5}" text-anchor="middle" font-family="Noto Sans" font-size="13" fill="${C.muted}">${esc(t.label)}</text>`).join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="${C.paper}"/>
<rect x="${PAD}" y="48" width="56" height="4" fill="${C.accent}"/>
${text(['Digital Twins Wiki · Vitals'], PAD, 90, 22, 28, C.accent, 'Noto Sans')}
${text([v.title], PAD, 148, 44, 52, C.ink, 'Noto Serif')}
${text([head], PAD, 192, 26, 32, C.muted, 'Noto Sans')}
<svg x="${PAD - 20}" y="215" width="${W - 2 * PAD + 30}" height="350" viewBox="0 0 ${CW} ${CH}" preserveAspectRatio="none">${ticks}${lines}</svg>
${text([`${v.source.split(',')[0]} · digitaltwins.wiki/vitals/${v.id}`], PAD, H - 32, 20, 26, C.muted, 'Noto Sans')}
</svg>`
  png(svg, path.join(out, 'cards', 'vitals', `${v.id}.png`))
}

for (const e of entries) entryCard(e)
const vitals = charts([], path.join(root, 'data/vitals'))
for (const v of vitals) vitalCard(v)

// /todo/ is working notes, not reference, so it stays out of the sitemap.
const urls = [...entries.filter((e) => e.id !== 'todo').map((e) => [e.url, e.updated]), ...vitals.map((v) => [`/vitals/${v.id}/`, v.fetched])]
fs.writeFileSync(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([u, d]) => `  <url><loc>${SITE}${esc(u)}</loc>${/^\d{4}-\d{2}-\d{2}$/.test(d || '') ? `<lastmod>${d}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)

const count = (k) => report.filter(([, is]) => is.some((i) => i.startsWith(k))).length
console.log(`share: ${entries.length} entry cards, ${vitals.length} vitals cards, sitemap of ${urls.length} urls`)
console.log(`share: ${count('no description')} without a description, ${count('description cut')} with descriptions cut on the card, ${count('title cut')} with titles cut, ${count('description over')} over 200 chars, ${count('no picture')} without a picture of their own`)
if (process.env.SHARE_REPORT) for (const [u, is] of report.filter(([, is]) => is.some((i) => !i.startsWith('no picture')))) console.log(`  ${u}  ${is.filter((i) => i !== 'no picture').join('; ')}`)
