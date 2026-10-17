// Resolve LinkedIn short links (lnkd.in/...) in entity sources to their real targets.
// Usage: node tools/resolve-links.js [data-dir]
// LinkedIn answers a short link with an interstitial page whose "external_url_click" anchor
// carries the destination. The source url is replaced with that destination and the title
// with the destination page's own <title>, or its hostname when the page cannot be read.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.argv[2] || 'data'
const UA = 'Mozilla/5.0 (X11; Linux x86_64) twin-compendium/resolve-links'
const files = []
const walk = (d) => { for (const n of fs.readdirSync(d)) { const f = path.join(d, n); if (fs.statSync(f).isDirectory()) walk(f); else if (n.endsWith('.md')) files.push(f) } }
walk(root)

const cache = new Map()
async function target(short) {
  if (cache.has(short)) return cache.get(short)
  let out = null
  try {
    const html = await (await fetch(short, { headers: { 'user-agent': UA }, redirect: 'follow' })).text()
    const m = html.match(/data-tracking-control-name="external_url_click"[^>]*href="([^"]+)"/)
    if (m) out = m[1].replace(/&amp;/g, '&')
  } catch {}
  cache.set(short, out)
  return out
}
const titles = new Map()
async function titleOf(url) {
  if (titles.has(url)) return titles.get(url)
  let t = new URL(url).hostname.replace(/^www\./, '')
  try {
    const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), 12000)
    const res = await fetch(url, { headers: { 'user-agent': UA, accept: 'text/html' }, signal: ctl.signal })
    clearTimeout(timer)
    const html = (await res.text()).slice(0, 200000)
    const m = html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)
    if (m) t = m[1].replace(/\s+/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').trim() || t
  } catch {}
  titles.set(url, t)
  return t
}

let changed = 0, unresolved = 0
for (const f of files) {
  const doc = matter(fs.readFileSync(f, 'utf8'))
  const sources = doc.data.provenance?.sources
  if (!sources?.some((s) => /^https?:\/\/lnkd\.in\//.test(s.url || ''))) continue
  let touched = false
  for (const s of sources) {
    if (!/^https?:\/\/lnkd\.in\//.test(s.url || '')) continue
    const t = await target(s.url)
    if (!t) { unresolved++; s.title = 'Link in the LinkedIn post (short link, could not be resolved)'; touched = true; continue }
    s.url = t; s.title = await titleOf(t); touched = true
    console.log(`${f}: ${t}`)
  }
  // drop duplicates that resolution may have produced
  const seen = new Set()
  doc.data.provenance.sources = sources.filter((s) => !seen.has(s.url) && seen.add(s.url))
  if (touched) { fs.writeFileSync(f, matter.stringify(doc.content, doc.data)); changed++ }
}
console.error(`${changed} files updated, ${unresolved} short links could not be resolved`)
