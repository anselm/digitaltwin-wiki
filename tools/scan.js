// Scan the sources the wiki knows about and write an inbox of items not seen before.
// Usage: node tools/scan.js [--days N] [--all] [--only id,id]
// --all ignores what has been seen; --only scans a few sources and prints to stdout without touching the inbox or state.
// A source is any entity carrying a `feed` component (see meta/data-design.md): the url to poll,
// its format, whether to filter general feeds by the topic words, and an optional `match` regex
// of its own. Nothing is written into data/: the inbox at inbox/<date>.md is for a person or an
// interactive session to read, and inbox/state.json remembers what has been seen and feed validators.
import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { openStore } from '../packages/knowledge/index.js'

const args = process.argv.slice(2)
const flag = (n, d) => { const i = args.indexOf(n); return i < 0 ? d : args[i + 1] }
const days = Number(flag('--days', 30)), all = args.includes('--all'), only = flag('--only', '')?.split(',').filter(Boolean)
const UA = { 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) digitaltwins-wiki-scan/0.1 (+https://digitaltwins.wiki)' }
// Words that make an item from a general feed worth a look. Topic-specific feeds skip this.
// Words that say the twin is of a place, which is this wiki's subject; such items are starred and listed first.
const PLACE = /\b(city|cities|urban|town|region|municipal|neighbou?rhood|campus|port|harbou?r|watershed|river|flood|coast|ocean|marine|reef|estuary|wetland|forest|wildfire|fire|climate|weather|earth|planet|ecosystem|ecolog|biodivers|habitat|land ?use|landscape|terrain|transport|traffic|mobility|infrastructure|grid|energy system|water system|agricultur|farm|crop|soil|air quality|heat|population|public health|geospatial|gis|3d city|satellite|remote sensing)\b/i
const TOPIC = /digital[ -]twin|\btwins?\b|simulat|geospatial|3d city|city ?model|cityjson|citygml|earth system|reanalysis|omniverse|agent[- ]based|flood model|urban model|what[- ]if|scenario/i

fs.mkdirSync('inbox', { recursive: true })
const stateFile = 'inbox/state.json'
const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, 'utf8')) : { seen: {}, validators: {} }
const today = new Date().toLocaleDateString('sv')
const since = Date.now() - days * 864e5
const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16)
const text = (s = '') => s.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(n)).replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/\s+/g, ' ').trim()
const tag = (block, name) => { const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i')); return m ? text(m[1]) : '' }

// Feed formats. Each returns [{title, url, date, snippet, by}].
const parse = {
  rss(body) {
    return [...body.matchAll(/<(item|entry)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi)].map(([, , b]) => {
      const href = (b.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/i) || b.match(/<link[^>]*href="([^"]+)"/i) || [])[1]
      const url = href || tag(b, 'link') || tag(b, 'guid') || (b.match(/<id>([^<]+)<\/id>/) || [])[1] || ''
      return { title: tag(b, 'title'), url: text(url), date: tag(b, 'pubDate') || tag(b, 'published') || tag(b, 'updated') || tag(b, 'dc:date'), snippet: (tag(b, 'description') || tag(b, 'summary') || tag(b, 'content') || tag(b, 'content:encoded')).slice(0, 240), by: tag(b, 'dc:creator') || tag(b, 'author') || tag(b, 'name') }
    })
  },
  arxiv(body) { return parse.rss(body).map((i) => ({ ...i, url: i.url.replace(/v\d+$/, '') })) },
  openalex(body) { return (JSON.parse(body).results || []).map((w) => ({ title: w.title || w.display_name, url: w.doi || w.primary_location?.landing_page_url || w.id, date: w.publication_date, snippet: [w.primary_location?.source?.display_name, w.open_access?.is_oa ? 'open access' : ''].filter(Boolean).join(', '), by: (w.authorships || []).slice(0, 3).map((a) => a.author?.display_name).filter(Boolean).join(', ') })) },
  hn(body) { return (JSON.parse(body).hits || []).map((h) => ({ title: h.title, url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`, date: h.created_at, snippet: `${h.points || 0} points, ${h.num_comments || 0} comments`, by: h.author })) },
  github(body) { return (JSON.parse(body).items || []).map((r) => ({ title: r.full_name, url: r.html_url, date: r.pushed_at || r.updated_at, snippet: `${r.description || ''} (${r.stargazers_count} stars, ${r.language || 'no language'})`, by: r.owner?.login })) },
  zenodo(body) { return (JSON.parse(body).hits?.hits || []).map((r) => ({ title: r.metadata?.title, url: r.links?.self_html || r.doi_url, date: r.created, snippet: `${r.metadata?.resource_type?.title || ''}; ${text(r.metadata?.description || '').slice(0, 160)}`, by: (r.metadata?.creators || []).slice(0, 3).map((c) => c.name).join(', ') })) },
}

const store = await openStore('data')
let sources = store.all.filter((e) => e.feed?.url).sort((a, b) => a.id.localeCompare(b.id))
if (only.length) sources = sources.filter((s) => only.includes(s.id) || only.includes(s.id.split('/').pop()))
const report = [], errors = []
let fresh = 0
async function scan(s) {
  const f = s.feed, v = state.validators[s.id] || {}
  const json = ['openalex', 'hn', 'github', 'zenodo'].includes(f.format)
  const headers = { ...UA, accept: json ? 'application/json' : 'application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.5' }
  if (!all && v.etag) headers['if-none-match'] = v.etag
  if (!all && v.lastModified) headers['if-modified-since'] = v.lastModified
  const res = await fetch(f.url, { headers, redirect: 'follow', signal: AbortSignal.timeout(25000) })
  if (res.status === 304) return { s, items: [], unchanged: true }
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  state.validators[s.id] = { etag: res.headers.get('etag') || '', lastModified: res.headers.get('last-modified') || '' }
  const body = await res.text()
  const fmt = parse[f.format] ? f.format : 'rss'
  const own = f.match ? new RegExp(f.match, 'i') : null
  const items = parse[fmt](body).filter((i) => i.title && i.url).map((i) => ({ ...i, id: sha(i.url) }))
    .filter((i) => !i.date || isNaN(new Date(i.date)) || new Date(i.date).getTime() >= since)
    .filter((i) => !(f.filter || own) || (own || TOPIC).test(`${i.title} ${i.snippet}`))
  return { s, items }
}
// A few at a time; one failure is reported, never fatal.
const queue = [...sources]; const results = []
await Promise.all(Array.from({ length: 6 }, async () => { while (queue.length) { const s = queue.shift(); try { results.push(await scan(s)) } catch (e) { errors.push(`${s.id}: ${e.message}`) } } }))
results.sort((a, b) => a.s.id.localeCompare(b.s.id))
for (const { s, items, unchanged } of results) {
  const news = items.filter((i) => all || !state.seen[i.id])
  for (const i of items) state.seen[i.id] ||= today
  if (unchanged) { report.push(`- ${s.about.label}: unchanged`); continue }
  if (!news.length) { report.push(`- ${s.about.label}: ${items.length} items, nothing new`); continue }
  fresh += news.length
  report.push(`\n## ${s.about.label} (${news.length} new of ${items.length})\n`)
  const place = (i) => PLACE.test(`${i.title} ${i.snippet}`) ? 1 : 0
  for (const i of news.sort((a, b) => place(b) - place(a) || new Date(b.date || 0) - new Date(a.date || 0))) report.push(`- ${place(i) ? '★ ' : ''}[${i.title}](${i.url})${i.date ? ` · ${new Date(i.date).toLocaleDateString('sv')}` : ''}${i.by ? ` · ${i.by}` : ''}${i.snippet ? `\n  ${i.snippet}` : ''}`)
}
const head = `# Scan ${today}\n\n${sources.length} sources, ${fresh} new items in the last ${days} days${errors.length ? `, ${errors.length} failed` : ''}.\nStarred items mention a place, this wiki's subject, and are listed first. Triage: open what looks like a tool, twin, data source, organization, event, book or paper worth an entry; write it from its own page under meta/curation.md; leave the rest.\n`
const body = [head, ...report, errors.length ? `\n## Failed\n\n${errors.map((e) => `- ${e}`).join('\n')}` : ''].join('\n') + '\n'
if (only.length) { console.log(body); process.exit(0) }
const outFile = `inbox/${today}.md`
fs.writeFileSync(outFile, body)
// Forget seen ids older than a year so the state file does not grow without bound.
const cutoff = new Date(Date.now() - 365 * 864e5).toLocaleDateString('sv')
for (const [k, d] of Object.entries(state.seen)) if (d < cutoff) delete state.seen[k]
fs.writeFileSync(stateFile, JSON.stringify(state))
console.log(`${sources.length} sources, ${fresh} new items → ${outFile}${errors.length ? `; ${errors.length} failed: ${errors.join('; ')}` : ''}`)
