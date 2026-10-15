import { error } from '@sveltejs/kit'
import { store, html, viewOf, card, domainCards } from '$lib/store.server.js'

export const prerender = true
export const entries = () => store.entities.map((e) => ({ path: e.id }))

const kindLabel = (k) => ({ datasource: 'data source', usecase: 'use case' })[k] || k
const plural = (k) => ({ story: 'stories', 'data source': 'data sources' })[k] || `${k}s`

export function load({ params }) {
  const id = (params.path || '').replace(/\/$/, '')
  const e = store.get(id)
  if (!e) error(404, 'No such entry')
  if (e.redirect) return { view: 'redirect', to: `/${e.redirect.to}` }
  const view = viewOf(e)
  const base = { view, id, label: e.about.label, description: e.about.description || '', content: html(e.content), status: e.provenance?.status || 'draft', tags: e.about.tags || [] }
  const domains = domainCards()
  const chips = (e) => (e.domains || []).map((d) => domains.find((x) => x.short === d)).filter(Boolean)

  if (view === 'home') {
    return { ...base, aliases: e.about.aliases || [],
      pinned: store.find({ kind: 'article' }).filter((a) => a.about.pinned).sort((a, b) => a.about.pinned - b.about.pinned).map(card),
      recent: store.recent(6).filter((r) => r.id && !r.section && !('domain' in r)).map(card),
      sections: store.children('').filter((s) => s.section).sort((a, b) => a.section.order - b.section.order).map((s) => ({ ...card(s), count: store.descendants(s.id).length })),
      domains: domains.map((d) => ({ ...d, count: store.find({ domain: d.short }).length })) }
  }
  if (view === 'list') return { ...base, items: store.children(id).map((c) => ({ ...card(c), chips: chips(c) })) }
  if (view === 'recent') return { ...base, items: store.recent(50).filter((r) => r.id && !r.section && !('domain' in r)).map((c) => ({ ...card(c), chips: chips(c) })) }
  if (view === 'domains') return { ...base, domains: domains.map((d) => ({ ...d, count: store.find({ domain: d.short }).length })) }
  if (view === 'domain') {
    const short = id.split('/').pop()
    const items = store.find({ domain: short })
    const groups = {}
    for (const it of items) { const k = store.kindsOf(it)[0] || 'entry'; (groups[k] ||= []).push(card(it)) }
    return { ...base, colour: e.domain.colour, symbol: e.domain.symbol, credit: e.domain.credit, depiction: `/${e.dir}/${e.about.depiction}`, groups: Object.entries(groups).map(([k, items]) => ({ label: plural(kindLabel(k)), items })) }
  }
  // prose and flow: the entry itself, its kind fields, relations and provenance
  const kinds = store.kindsOf(e).map((k) => ({ label: kindLabel(k), fields: Object.entries(e[k] || {}).filter(([f, v]) => v !== undefined && v !== null && v !== '' && !['steps', 'start', 'end', 'order'].includes(f)).map(([f, v]) => ({ field: f.replace(/_/g, ' '), value: Array.isArray(v) ? v.join(', ') : String(v), url: /^https?:/.test(String(v)) ? String(v) : null })) }))
  return { ...base, kinds, chips: chips(e), related: store.related(id).map((g) => ({ label: g.label, items: g.items.map((i) => ({ ...card(i.entity), note: i.note })) })),
    provenance: e.provenance || {}, flow: e.flow || null, depiction: e.about.depiction ? (/^https?:/.test(e.about.depiction) ? e.about.depiction : `/${e.dir ? e.dir + '/' : ''}${e.about.depiction}`) : null }
}
