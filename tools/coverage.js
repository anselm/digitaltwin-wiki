// What does someone else's list of tools have that this wiki does not? Reads a markdown list (a
// GitHub "awesome" README, say) and checks every linked item against the entries in data/, by URL
// first and then by name. Prints the gaps grouped under the list's own headings, for a human to
// triage. It never writes entries: a gap is a lead, and an entry is still written from the
// project's own pages (devlog/20261021-coverage.md).
// Usage: node tools/coverage.js <file.md | https://raw...README.md>   gaps, as markdown
//        node tools/coverage.js <src> --all                             also list what we have
//        node tools/coverage.js <src> --json
// No dependencies.
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const src = args.find((a) => !a.startsWith('--'))
const all = args.includes('--all'), json = args.includes('--json')
if (!src) { console.error('usage: node tools/coverage.js <file.md | url> [--all] [--json]'); process.exit(1) }

// a GitHub page URL is read as its raw README
const rawUrl = (u) => {
  const m = u.match(/^https:\/\/github\.com\/([^/]+)\/([^/#?]+)\/?$/)
  return m ? `https://raw.githubusercontent.com/${m[1]}/${m[2]}/HEAD/README.md` : u
}
const text = /^https?:/.test(src) ? await (await fetch(rawUrl(src))).text() : fs.readFileSync(src, 'utf8')

// URLs compare without scheme, www, query, fragment or trailing slash; a GitHub URL by owner/repo,
// an arXiv URL by paper id, a Hugging Face URL by owner/model
const normUrl = (u) => {
  let s = u.trim().replace(/^<|>$/g, '').replace(/^https?:\/\//i, '').replace(/^www\./i, '').replace(/[?#].*$/, '').replace(/\/+$/, '').toLowerCase()
  let m
  if ((m = s.match(/^github\.com\/([^/]+\/[^/]+)/))) return 'github.com/' + m[1].replace(/\.git$/, '')
  if ((m = s.match(/^(?:export\.)?arxiv\.org\/(?:abs|pdf|html)\/(\d{4}\.\d{4,5})/))) return 'arxiv.org/' + m[1]
  if ((m = s.match(/^huggingface\.co\/([^/]+\/[^/]+)/))) return 'huggingface.co/' + m[1]
  return s
}
const normName = (s) => s.toLowerCase().replace(/[`*_]/g, '').replace(/\([^)]*\)/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()

// the wiki's side: every URL anywhere in an entry, and its label
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.md') ? [path.join(d, e.name)] : [])
// names count only on shelves that hold things (a tool, a dataset, a paper), not on topics or themes
const NAMED = /^(engines|data-sources|presentation|ontologies|twins|organizations|articles|media|books)\//
const byUrl = new Map(), byName = new Map()
for (const f of walk('data')) {
  const t = fs.readFileSync(f, 'utf8')
  const id = path.relative('data', f).replace(/(\/index)?\.md$/, '')
  const label = (t.match(/^\s+label:\s*['"]?(.+?)['"]?\s*$/m) || [])[1]
  if (label && NAMED.test(id)) {
    byName.set(normName(label), id)
    for (const part of label.split(/\s*[\/,]\s*|\s+\(|\)/)) if (normName(part).length >= 4) byName.set(normName(part), id)
  }
  for (const u of t.match(/https?:\/\/[^\s'"<>)\]]+/g) || []) byUrl.set(normUrl(u), id)
}

// the list's side: each markdown link, under the nearest heading; one item per line, first link wins
const SKIP = /shields\.io|badge|img\.|\.(png|jpe?g|gif|svg)$|twitter\.com|x\.com\/|linkedin\.com|youtube\.com|^#/i
const items = []
let heading = ''
for (const line of text.split('\n')) {
  const h = line.match(/^#{1,6}\s+(.+)/)
  if (h) { heading = h[1].replace(/[*_`]|<[^>]+>/g, '').trim(); continue }
  const m = line.match(/\[([^\]]{2,200})\]\((https?:[^)\s]+)\)/)
  if (!m || SKIP.test(m[2])) continue
  const name = m[1].replace(/[*_`]/g, '').trim()
  if (/^(paper|code|link|project|website|pdf|arxiv|github|demo|data|here|\d+)$/i.test(name)) continue
  items.push({ heading, name, url: m[2], line: line.trim().slice(0, 240) })
}

// a match is by URL, or by name: the item's name equals one of ours, or its first word does
// ("Prithvi-EO-2.0" is the Prithvi entry). First words under five letters never match alone.
for (const it of items) {
  const u = normUrl(it.url)
  if (byUrl.has(u)) { it.have = byUrl.get(u); it.by = 'url'; continue }
  const n = normName(it.name), first = n.split(' ')[0]
  if (byName.has(n)) { it.have = byName.get(n); it.by = 'name'; continue }
  if (first.length >= 5 && byName.has(first)) { it.have = byName.get(first); it.by = 'first word' }
}

const seen = new Set(), uniq = items.filter((it) => !seen.has(normUrl(it.url)) && seen.add(normUrl(it.url)))
const gaps = uniq.filter((it) => !it.have), have = uniq.filter((it) => it.have)
if (json) { console.log(JSON.stringify({ source: src, items: uniq.length, have: have.length, gaps }, null, 2)); process.exit(0) }
console.log(`# Coverage against ${src}\n\n${uniq.length} linked items; ${have.length} already here, ${gaps.length} not.\n`)
let last = null
for (const it of gaps) {
  if (it.heading !== last) { console.log(`\n## ${it.heading || '(no heading)'}\n`); last = it.heading }
  console.log(`- [${it.name}](${it.url})`)
}
if (all) {
  console.log('\n## Already here\n')
  for (const it of have) console.log(`- ${it.name} → /${it.have}/ (${it.by})`)
}
