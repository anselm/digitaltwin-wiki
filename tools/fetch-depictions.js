// Fetch a depiction for entries that have none, from the maker's own page: the page's og:image
// (or twitter:image; for a GitHub page the owner's avatar), resized to fit a square and saved beside the entry as
// data/<section>/<slug>.jpg, with about.depiction set to '<section>/<slug>.jpg'.
// Only kinds whose homepage is the maker's own are touched (tool, datasource, twin, organization,
// book, podcast, video); articles are skipped because a news page's image is the story's photo,
// not the thing's. Nothing is fetched for an entry that already has a depiction.
// Usage: node tools/fetch-depictions.js [--only id,id] [--dry] [--limit N]
// Needs ImageMagick (convert). Idempotent: re-running skips entries that now have a depiction.
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { openStore } from '../packages/knowledge/index.js'

const args = process.argv.slice(2)
const flag = (n, d) => { const i = args.indexOf(n); return i < 0 ? d : args[i + 1] }
const only = flag('--only', '')?.split(',').filter(Boolean), dry = args.includes('--dry'), limit = Number(flag('--limit', Infinity))
const KINDS = ['tool', 'datasource', 'twin', 'organization', 'book', 'podcast', 'video']
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15'
const W = 192
// Hosts whose og:image is the platform's card, not the thing's own picture.
const SKIP_OWNERS = ['google', 'microsoft', 'nvidia', 'facebookresearch', 'meta']  // a bare company mark on many entries is noise
const SKIP = ['huggingface.co', 'arxiv.org', 'zenodo.org', 'doi.org', 'x.com', 'twitter.com', 'linkedin.com', 'youtube.com']

const store = await openStore('data')
const homepageOf = (e) => { for (const k of KINDS) if (e[k]?.homepage) return e[k].homepage; return null }
const todo = store.entities.filter((e) => e.dir === null && !e.about?.depiction && homepageOf(e) && (!only.length || only.includes(e.id))).slice(0, limit)
console.log(`${todo.length} entries without a depiction and with a maker's page`)

async function get(url, ms = 20000, binary = false) {
  const r = await fetch(url, { headers: { 'user-agent': UA, accept: binary ? 'image/*' : 'text/html, application/json' }, redirect: 'follow', signal: AbortSignal.timeout(ms) })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return binary ? Buffer.from(await r.arrayBuffer()) : await r.text()
}
const meta = (html, prop) => {
  const re = new RegExp(`<meta[^>]+(?:property|name)=["']${prop}["'][^>]*>`, 'i')
  const m = html.match(re); if (!m) return null
  const c = m[0].match(/content=["']([^"']+)["']/i); return c ? c[1] : null
}
const metaFirst = (html, prop) => {
  // content may come before property; try both orders
  const re = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${prop}["']`, 'i')
  const m = html.match(re); return m ? m[1] : meta(html, prop)
}

const results = []
let i = 0
async function one(e) {
  const url = homepageOf(e), slug = e.id.split('/').pop(), section = e.file.split('/')[0]
  const dst = path.join('data', section, `${slug}.jpg`)
  try {
    const host = new URL(url).hostname
    if (SKIP.some((h) => host.endsWith(h))) return results.push({ id: e.id, ok: false, why: `platform page (${host})` })
    let img
    const gh = url.match(/^https?:\/\/github\.com\/([^/?#]+)/)
    if (gh) {
      // The owner's avatar, square, rather than GitHub's generated repo card; only for organisations, since a
      // person's face is not a picture of their project, and not for owners whose logo says nothing about the tool.
      const who = JSON.parse(await get(`https://api.github.com/users/${gh[1]}`))
      if (who.type !== 'Organization') return results.push({ id: e.id, ok: false, why: 'GitHub page of a person, no avatar used' })
      if (SKIP_OWNERS.includes(gh[1].toLowerCase())) return results.push({ id: e.id, ok: false, why: `GitHub org ${gh[1]} skipped` })
      img = `https://github.com/${gh[1]}.png?size=192`
    }
    else {
      const html = await get(url)
      img = metaFirst(html, 'og:image') || metaFirst(html, 'og:image:url') || metaFirst(html, 'twitter:image')
      if (!img) return results.push({ id: e.id, ok: false, why: 'no og:image' })
      img = new URL(img.replace(/&amp;/g, '&'), url).href
    }
    const buf = await get(img, 20000, true)
    if (buf.length < 2000) return results.push({ id: e.id, ok: false, why: 'image under 2 KB' })
    if (dry) return results.push({ id: e.id, ok: true, img, dry: true })
    const tmp = path.join(process.env.TMPDIR || '/tmp', `dep-${slug}`)
    fs.writeFileSync(tmp, buf)
    const dims = execFileSync('identify', ['-format', '%w %h', `${tmp}[0]`]).toString().trim().split(' ').map(Number)
    if (dims[0] < 160 || dims[1] < 120) { fs.unlinkSync(tmp); return results.push({ id: e.id, ok: false, why: `too small ${dims.join('x')}` }) }
    execFileSync('convert', [`${tmp}[0]`, '-auto-orient', '-background', 'white', '-flatten', '-resize', `${W}x${W}>`, '-quality', '82', dst])  // fit inside a square, no crop; the card letterboxes it
    fs.unlinkSync(tmp)
    const src = fs.readFileSync(e.file.startsWith('data/') ? e.file : path.join('data', e.file), 'utf8')
    const out = src.replace(/^about:\n/m, `about:\n  depiction: ${section}/${slug}.jpg\n`)
    if (out === src) throw new Error('no about: block to edit')
    fs.writeFileSync(path.join('data', e.file), out)
    results.push({ id: e.id, ok: true, img, dims: dims.join('x') })
  } catch (err) { results.push({ id: e.id, ok: false, why: String(err.message || err).slice(0, 80) }) }
  finally { process.stdout.write(`\r${++i}/${todo.length}`) }
}
const queue = [...todo]
await Promise.all(Array.from({ length: 6 }, async () => { while (queue.length) await one(queue.shift()) }))
console.log()
const ok = results.filter((r) => r.ok)
console.log(`${ok.length} depictions written, ${results.length - ok.length} skipped`)
for (const r of results.filter((r) => !r.ok)) console.log(`  - ${r.id}: ${r.why}`)
fs.writeFileSync(path.join(process.env.TMPDIR || '/tmp', 'fetch-depictions.json'), JSON.stringify(results, null, 1))
