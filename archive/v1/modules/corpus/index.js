// corpus: the only module that reads corpus/ and schema/.
// Interface: loadCorpus(root, {show}) -> { morsels, domains, site, edges, errors,
//   get, search, related, filter, hidden, report }
// A morsel is one markdown file: a header of facts and typed links, and a body
// with a "## Plain" layer and an optional "## Detail" layer.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const VISIBILITY = ['hidden', 'proposed', 'public']
const NEEDS_SOURCE = ['catalogue', 'data', 'stories', 'concepts']
const FACTS = ['cost', 'skill', 'try', 'bring', 'like', 'evidence']

function layers(body) {
  const parts = body.split(/^## (Plain|Detail)\s*$/m)
  if (parts.length === 1) return { plain: body.trim(), detail: '' }
  const out = { plain: '', detail: '' }
  for (let i = 1; i < parts.length; i += 2) out[parts[i].toLowerCase()] = parts[i + 1].trim()
  return out
}

export function loadCorpus(root, { show = ['public'] } = {}) {
  const json = (f) => JSON.parse(fs.readFileSync(path.join(root, 'schema', f), 'utf8'))
  const domains = json('domains.json').domains
  const site = json('site.json')
  const edgeSchema = json('edges.json')
  const edgeTypes = Object.keys(edgeSchema.edges)
  const domainIds = new Set(domains.map((d) => d.id))
  const errors = []
  const all = new Map()

  const dir = path.join(root, 'corpus')
  for (const kind of fs.readdirSync(dir).sort()) {
    const kdir = path.join(dir, kind)
    if (!fs.statSync(kdir).isDirectory()) continue
    for (const file of fs.readdirSync(kdir).filter((f) => f.endsWith('.md')).sort()) {
      const rel = `corpus/${kind}/${file}`
      const { data, content } = matter(fs.readFileSync(path.join(kdir, file), 'utf8'))
      const body = content.replace(/^\s*# .*\n/, '')
      const m = { ...data, ...layers(body), file: rel, url: `/${kind}/${data.id}/` }
      const bad = (msg) => errors.push(`${rel}: ${msg}`)
      if (data.id !== file.slice(0, -3)) bad(`id "${data.id}" does not match the filename`)
      if (data.kind !== kind) bad(`kind "${data.kind}" does not match the folder`)
      if (!data.title) bad('no title')
      if (!data.summary) bad('no summary')
      if (!VISIBILITY.includes(data.visibility)) bad(`visibility "${data.visibility}"`)
      if (!data.reviewed) bad('no reviewed date')
      if (NEEDS_SOURCE.includes(kind) && !(data.sources || []).length) bad('no source')
      for (const d of data.domain || []) if (!domainIds.has(d)) bad(`unknown domain "${d}"`)
      if (all.has(data.id)) bad(`id also used by ${all.get(data.id).file}`)
      all.set(data.id, m)
    }
  }

  // typed links, written once on the morsel that owns the claim
  const links = []
  for (const m of all.values()) {
    for (const type of edgeTypes) {
      for (const to of m[type] || []) {
        if (!all.has(to)) errors.push(`${m.file}: ${type} -> "${to}" does not exist`)
        else links.push({ from: m.id, type, to })
      }
    }
  }

  const shown = (m) => show.includes(m.visibility)
  const morsels = [...all.values()].filter(shown)
  const hidden = [...all.values()].filter((m) => !shown(m)).map(({ id, kind, title }) => ({ id, kind, title }))
  const visible = new Set(morsels.map((m) => m.id))
  const get = (id) => (visible.has(id) ? all.get(id) : undefined)

  // related(id): every visible morsel one link away, with the link's name read from this side
  function related(id) {
    const out = []
    for (const l of links) {
      if (l.from === id && visible.has(l.to)) out.push({ type: l.type, label: edgeSchema.edges[l.type], dir: 'out', morsel: all.get(l.to) })
      if (l.to === id && visible.has(l.from)) out.push({ type: l.type, label: edgeSchema.reverse[l.type], dir: 'in', morsel: all.get(l.from) })
    }
    return out
  }

  function filter(where = {}) {
    return morsels.filter((m) => Object.entries(where).every(([k, v]) =>
      Array.isArray(m[k]) ? m[k].includes(v) : m[k] === v))
  }

  function search(q) {
    const words = String(q).toLowerCase().split(/\s+/).filter(Boolean)
    return morsels
      .map((m) => {
        const hay = [m.title, m.summary, m.plain, (m.domain || []).join(' ')].join(' ').toLowerCase()
        const title = m.title.toLowerCase()
        const score = words.reduce((s, w) => s + (title.includes(w) ? 3 : hay.includes(w) ? 1 : -99), 0)
        return { m, score }
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.m)
  }

  function report() {
    const by = (list, key) => list.reduce((o, m) => ((o[m[key]] = (o[m[key]] || 0) + 1), o), {})
    const linked = new Set(links.flatMap((l) => [l.from, l.to]))
    const unknown = morsels.reduce((n, m) => n + FACTS.filter((f) => m[f] === 'unknown').length, 0)
    return {
      total: all.size,
      shown: morsels.length,
      shownByKind: by(morsels, 'kind'),
      hiddenByKind: by(hidden, 'kind'),
      links: links.length,
      unknownFactsShown: unknown,
      orphansShown: morsels.filter((m) => !linked.has(m.id) && ['catalogue', 'data', 'stories'].includes(m.kind)).map((m) => m.id),
      errors
    }
  }

  return { morsels, domains, site, edges: edgeSchema, links: links.filter((l) => visible.has(l.from) && visible.has(l.to)), hidden, errors, get, search, related, filter, report, FACTS }
}
