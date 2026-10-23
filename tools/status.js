// Where the wiki stands: a rough maturity score for every entry, the shelves by status, and the
// priorities that fall out of them (weak pages many others link to; drafts closest to ready).
// Writes status.json into the site's static folder for the /admin page, and prints a summary.
// Rerunnable; the build runs it. Usage: node tools/status.js [static-dir]
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { openStore } from '../packages/knowledge/index.js'

const out = process.argv[2] || 'packages/site/static'
const store = await openStore('data')
const today = new Date().toLocaleDateString('sv')

// Prose tells per file, from tools/tells.js (written to a file: a piped 64 KB of JSON can be cut short).
const tmp = path.join(out, '.tells.json')
execFileSync('sh', ['-c', `node tools/tells.js --json > "${tmp}"`])
const tells = Object.fromEntries(JSON.parse(fs.readFileSync(tmp, 'utf8')).perFile.map((f) => [f.file.replace(/^data\//, '').replace(/(\/index)?\.md$/, ''), f]))
fs.rmSync(tmp)

// Links in: relations from other entries plus links written in their bodies.
const inbound = new Map()
const add = (to, from) => { if (to !== from) (inbound.get(to) || inbound.set(to, new Set()).get(to)).add(from) }
for (const e of store.all) {
  for (const r of e.relations || []) add(r.target, e.id)
  for (const m of (e.content || '').matchAll(/\]\(\/([^)#\s]*?)\/?(?:#[^)]*)?\)/g)) add(m[1], e.id)
}

const days = (d) => (d ? Math.round((Date.parse(today) - Date.parse(String(d).slice(0, 10))) / 864e5) : null)
const rows = []
for (const e of store.all) {
  if (e.redirect || 'section' in e || e.domain !== undefined) continue
  const p = e.provenance || {}, status = p.status || 'draft'
  // Read by a person: written by one, or a reviewed_by that starts with a person's name (Anselm, or a named contributor), not Claude's notes that merely mention him.
  const human = p.origin === 'human' || /^(?!claude|machine)[A-Z][a-z]+ [A-Z]?/i.test(String(p.reviewed_by || '')) && !/claude|machine|not yet/i.test(String(p.reviewed_by || ''))
  const sources = (p.sources || []).length
  const words = (e.content || '').split(/\s+/).filter(Boolean).length
  const desc = e.about?.description || ''
  const pic = !!e.about?.depiction
  const t = tells[e.id], per100 = t ? t.per100 : 0
  const links = inbound.get(e.id)?.size || 0
  const age = days(p.reviewed || p.updated || p.created)
  const score = (status === 'public' ? 35 : status === 'proposed' ? 20 : 0) + (human ? 15 : 0) + (sources >= 3 ? 12 : sources ? 8 : 0)
    + (words >= 200 ? 12 : words >= 60 ? 6 : 0) + (desc.length >= 40 && desc.length <= 200 ? 6 : 0) + (pic ? 5 : 0) + (per100 <= 10 ? 10 : per100 <= 25 ? 5 : 0) + (links ? 5 : 0)
  const issues = []
  if (status !== 'public') issues.push(human ? `${status}, written or read by a person` : `${status}, not yet read by a person`)
  if (!sources && p.origin !== 'human') issues.push('no sources listed')
  if (words < 60) issues.push(`thin (${words} words)`)
  if (!desc) issues.push('no description'); else if (desc.length > 200) issues.push(`description ${desc.length} chars`)
  if (per100 > 25) issues.push(`prose tells ${per100} per 100 sentences`)
  if (age != null && age > 180) issues.push(`last read ${age} days ago`)
  if (!links) issues.push('nothing links here')
  rows.push({ id: e.id, url: `/${e.id}/`, label: e.about?.label || e.id, shelf: e.id.split('/')[0], status, origin: p.origin || '', score, links, words, sources, tells: per100, issues })
}

const shelves = {}
for (const r of rows) { const s = (shelves[r.shelf] ||= { shelf: r.shelf, label: store.byId.get(r.shelf)?.about?.label || r.shelf, entries: 0, public: 0, proposed: 0, draft: 0, score: 0 }); s.entries++; s[r.status] = (s[r.status] || 0) + 1; s.score += r.score }
for (const s of Object.values(shelves)) s.score = Math.round(s.score / s.entries)

const open = rows.filter((r) => r.status !== 'public')
const result = {
  generated: today,
  totals: { entries: rows.length, public: rows.filter((r) => r.status === 'public').length, proposed: rows.filter((r) => r.status === 'proposed').length, draft: rows.filter((r) => r.status === 'draft').length, score: Math.round(rows.reduce((a, r) => a + r.score, 0) / rows.length) },
  shelves: Object.values(shelves).sort((a, b) => b.entries - a.entries),
  // Weak pages that many others point to: improving one helps every page that links to it.
  needs: [...open].sort((a, b) => (b.links + 1) * (100 - b.score) - (a.links + 1) * (100 - a.score)).slice(0, 30),
  // Not yet public but nearly there: the quickest promotions.
  ready: [...open].sort((a, b) => b.score - a.score || b.links - a.links).slice(0, 30),
  mature: [...rows].sort((a, b) => b.score - a.score || b.links - a.links).slice(0, 20),
  orphans: rows.filter((r) => !r.links).map((r) => ({ url: r.url, label: r.label })).slice(0, 60),
  orphanCount: rows.filter((r) => !r.links).length
}
fs.writeFileSync(path.join(out, 'status.json'), JSON.stringify(result))
const T = result.totals
console.log(`status: ${T.entries} entries (${T.public} public, ${T.proposed} proposed, ${T.draft} draft), mean maturity ${T.score}/100, ${result.orphanCount} with nothing linking to them`)
