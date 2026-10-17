// @twins/knowledge: a folder tree of entities, loaded into memory, queried
// through plain functions. The loader is the only code that reads files;
// anything that can produce the same entity objects (a database, a server)
// can stand behind the same API. Design: meta/data-design.md.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import base from './schemas/base.json' with { type: 'json' }
import predicatesJson from './schemas/predicates.json' with { type: 'json' }
import twins from './schemas/twins.json' with { type: 'json' }

export { base }
export const predicates = predicatesJson.predicates

/**
 * Walk a folder tree and yield every entity file.
 * `x/index.md` and `x.md` both mean the entity `x`; a folder's own index.md is the folder's entity.
 */
function* walk(root, rel = '') {
  const dir = path.join(root, rel)
  for (const name of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (name.name.startsWith('.') || name.name === 'node_modules') continue
    const r = rel ? `${rel}/${name.name}` : name.name
    if (name.isDirectory()) yield* walk(root, r)
    else if (name.name.endsWith('.md')) yield r
  }
}

const idOf = (rel) => rel.replace(/(^|\/)index\.md$/, '').replace(/\.md$/, '')

function readEntity(root, rel) {
  const file = path.join(root, rel)
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  const id = idOf(rel)
  const dir = rel.endsWith('index.md') ? path.dirname(rel) : null
  return { id, file: rel, dir, ...data, content: content.trim() }
}

/** Open a store over a folder. `statuses` limits what is visible; default is everything. `schemas` adds kind-component maps beyond the bundled twins set. */
export async function openStore(root, { statuses = null, schemas = [] } = {}) {
  root = path.resolve(root)
  const kinds = Object.assign({}, twins.components, ...schemas.map((s) => s.components || s))
  const all = []
  for (const rel of walk(root)) {
    try { all.push(readEntity(root, rel)) } catch (e) { all.push({ id: idOf(rel), file: rel, error: e.message }) }
  }
  return new Store(root, all, { statuses, kinds })
}

export class Store {
  constructor(root, all, { statuses, kinds }) {
    this.root = root
    this.kinds = kinds
    this.statuses = statuses
    this.all = all.filter((e) => !e.error)
    this.errors = all.filter((e) => e.error)
    this.byId = new Map(this.all.map((e) => [e.id, e]))
    this.entities = statuses ? this.all.filter((e) => statuses.includes(e.provenance?.status || 'draft')) : this.all
    this.visible = new Set(this.entities.map((e) => e.id))
    this.reverse = new Map() // target id -> [{predicate, source}]
    for (const e of this.all) for (const r of e.relations || []) {
      if (!this.reverse.has(r.target)) this.reverse.set(r.target, [])
      this.reverse.get(r.target).push({ predicate: r.predicate, source: e.id, note: r.note })
    }
  }

  /** The kind components an entity carries, in schema order. */
  kindsOf(e) { return Object.keys(this.kinds).filter((k) => k in e) }

  get(id) { const e = this.byId.get(id); return e && this.visible.has(e.id) ? e : undefined }

  /** Direct children of a path (the section listing). `''` gives the top-level sections. */
  children(id) {
    const prefix = id ? `${id}/` : ''
    return this.entities.filter((e) => e.id !== id && e.id.startsWith(prefix) && !e.id.slice(prefix.length).includes('/'))
  }

  /** Everything under a path, any depth. */
  descendants(id) { const prefix = id ? `${id}/` : ''; return this.entities.filter((e) => e.id !== id && e.id.startsWith(prefix)) }

  /** Filter visible entities. Every option is optional; `text` is a plain substring match over label, description, tags and content. */
  find({ kind, tag, domain, text, pinned, under, sort = 'label', limit = Infinity, offset = 0 } = {}) {
    let out = this.entities
    if (kind) out = out.filter((e) => kind in e)
    if (tag) out = out.filter((e) => (e.about?.tags || []).includes(tag))
    if (domain) out = out.filter((e) => (e.domains || []).includes(domain))
    if (pinned !== undefined) out = out.filter((e) => !!e.about?.pinned === pinned)
    if (under) out = out.filter((e) => e.id.startsWith(`${under}/`))
    if (text) { const t = text.toLowerCase(); out = out.filter((e) => hay(e).includes(t)) }
    out = [...out].sort(sorters[sort] || sorters.label)
    return out.slice(offset, offset + limit)
  }

  /** Most recently created or updated first. */
  recent(limit = 20) { return this.find({ sort: 'recent', limit }) }

  /** Forward and reverse relations of an entity, grouped by human label, visible targets only. */
  related(id) {
    const e = this.byId.get(id)
    const groups = new Map()
    const add = (label, other, note) => {
      const t = this.get(other)
      if (!t) return
      if (!groups.has(label)) groups.set(label, [])
      groups.get(label).push({ entity: t, note })
    }
    for (const r of e?.relations || []) add(predicates[r.predicate]?.means || r.predicate, r.target, r.note)
    for (const r of this.reverse.get(id) || []) add(predicates[r.predicate]?.reverse || `${r.predicate} (reverse)`, r.source, r.note)
    return [...groups].map(([label, items]) => ({ label, items }))
  }

  /** Problems across the whole tree (not only visible entities). Never throws. */
  validate() {
    const problems = []
    const p = (id, level, message) => problems.push({ id, level, message })
    for (const e of this.errors) p(e.id, 'error', `cannot parse: ${e.error}`)
    for (const e of this.all) {
      if (e.id !== '' && !/^[a-z0-9][a-z0-9-]*(\/[a-z0-9][a-z0-9-]*)*$/.test(e.id)) p(e.id, 'error', 'id must be lowercase words with hyphens and slashes')
      if (!e.about?.label) p(e.id, 'error', 'about.label is required')
      for (const key of Object.keys(e)) {
        if (['id', 'file', 'dir', 'content'].includes(key)) continue
        if (!(key in base.components) && !(key in this.kinds)) p(e.id, 'note', `unknown component "${key}"`)
      }
      const st = e.provenance?.status
      if (st && !base.statuses.includes(st)) p(e.id, 'error', `provenance.status "${st}" is not one of ${base.statuses.join(', ')}`)
      if (st === 'public' && !(e.provenance?.sources || []).length && !e.section && !e.about?.view) p(e.id, 'warn', 'public entity has no sources')
      for (const s of e.provenance?.sources || []) if (s.url && !/^https?:\/\//.test(s.url)) p(e.id, 'error', `source url "${s.url}" has no scheme; it would render as a page of this site`)
      if (e.about?.depiction && !/^https?:/.test(e.about.depiction) && e.dir !== null && !fs.existsSync(path.join(this.root, e.dir || '', e.about.depiction))) p(e.id, 'warn', `depiction "${e.about.depiction}" not found beside the entity`)
      for (const r of e.relations || []) {
        if (!predicates[r.predicate]) p(e.id, 'error', `undeclared predicate "${r.predicate}"`)
        if (!this.byId.has(r.target)) p(e.id, 'error', `relation target "${r.target}" does not exist`)
      }
      for (const d of e.domains || []) if (!this.byId.has(`domains/${d}`)) p(e.id, 'error', `domain "${d}" has no entity at domains/${d}`)
      if (e.redirect && !this.byId.has(e.redirect.to)) p(e.id, 'error', `redirect to missing entity "${e.redirect.to}"`)
    }
    return problems
  }

  /** Write the machine door: llms.txt, index.json, graph.json, one markdown file per visible entity, and copy assets beside entities. */
  exportMachine(outDir, { siteUrl = '' } = {}) {
    const m = path.join(outDir, 'm')
    fs.rmSync(m, { recursive: true, force: true })
    const index = this.entities.map((e) => this.card(e))
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(index, null, 1))
    const edges = []
    for (const e of this.entities) for (const r of e.relations || []) if (this.visible.has(r.target)) edges.push({ from: e.id, predicate: r.predicate, to: r.target })
    fs.writeFileSync(path.join(outDir, 'graph.json'), JSON.stringify({ nodes: index.map((c) => ({ id: c.id, label: c.label, kinds: c.kinds })), edges }, null, 1))
    const home = this.get('') || this.get('index')
    const lines = [`# ${home?.about?.label || 'Knowledge store'}`, '', home?.about?.description || '', '', `Every entry is available as markdown at ${siteUrl}/m/<id>.md and as JSON in ${siteUrl}/index.json. Relations are in ${siteUrl}/graph.json.`, '']
    for (const sec of this.children('')) {
      const kids = this.descendants(sec.id)
      if (!kids.length) continue
      lines.push(`## ${sec.about.label}`, '')
      for (const e of kids) lines.push(`- [${e.about.label}](${siteUrl}/m/${e.id}.md): ${e.about.description || ''}`)
      lines.push('')
    }
    fs.writeFileSync(path.join(outDir, 'llms.txt'), lines.join('\n'))
    for (const e of this.entities) {
      const f = path.join(m, `${e.id || 'index'}.md`)
      fs.mkdirSync(path.dirname(f), { recursive: true })
      const { content, file, dir, id, ...components } = e
      fs.writeFileSync(f, matter.stringify(content + '\n', { id, ...components }))
      if (dir !== null) for (const asset of fs.readdirSync(path.join(this.root, dir || ''))) {
        if (asset.endsWith('.md') || asset.startsWith('.')) continue
        const src = path.join(this.root, dir || '', asset)
        if (fs.statSync(src).isFile()) { const dst = path.join(outDir, dir || '', asset); fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst) }
      }
    }
    return { entities: this.entities.length, edges: edges.length }
  }

  /** A small serialisable summary of an entity, for lists and indexes. */
  card(e) {
    return {
      id: e.id, label: e.about?.label, description: e.about?.description || '', tags: e.about?.tags || [],
      kinds: this.kindsOf(e), domains: e.domains || [], pinned: !!e.about?.pinned, view: e.about?.view || null,
      depiction: e.about?.depiction ? (/^https?:/.test(e.about.depiction) ? e.about.depiction : `/${e.dir ? e.dir + '/' : ''}${e.about.depiction}`) : null,
      status: e.provenance?.status || 'draft', updated: stamp(e), url: e.id ? `/${e.id}/` : '/'
    }
  }
}

const day = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : '')
const stamp = (e) => day(e.provenance?.updated || e.provenance?.created || e.provenance?.reviewed)
const hay = (e) => [e.about?.label, e.about?.description, (e.about?.tags || []).join(' '), e.content].join(' ').toLowerCase()
const sorters = {
  label: (a, b) => (a.about?.label || '').localeCompare(b.about?.label || ''),
  recent: (a, b) => stamp(b).localeCompare(stamp(a)) || sorters.label(a, b),
  order: (a, b) => (orderOf(a) - orderOf(b)) || sorters.label(a, b)
}
const orderOf = (e) => { for (const k of Object.keys(e)) if (e[k] && typeof e[k] === 'object' && 'order' in e[k]) return e[k].order; return 1e9 }
