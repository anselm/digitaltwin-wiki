import { error } from '@sveltejs/kit'
import { store, html, viewOf, card, domainCards } from '$lib/store.server.js'
import { charts, W, H, P } from '$lib/vitals.server.js'

export const prerender = true
export const entries = () => store.entities.map((e) => ({ path: e.id }))

// Relative time at build time; the site is rebuilt on every deploy.
function ago(d) {
  if (!d) return ''
  const days = Math.round((Date.now() - new Date(d).getTime()) / 864e5)
  if (days < 1) return 'today'
  if (days < 14) return `${days} day${days === 1 ? '' : 's'} ago`
  if (days < 60) return `${Math.round(days / 7)} weeks ago`
  if (days < 365) return `${Math.round(days / 30)} months ago`
  return `${Math.round(days / 365)} years ago`
}
const kindLabel = (k) => ({ datasource: 'data source', twin: 'digital twin', video: 'video channel' })[k] || k
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
  const line = (e) => ({ ...card(e), chips: chips(e), ago: ago(e.provenance?.updated || e.provenance?.created) })

  if (view === 'home') {
    // The figure is an entry of its own; the home only borrows its still and links back to it.
    const b = e.figure && store.get(e.figure.entry)
    const figure = b ? { src: e.figure.src, full: e.figure.full || null, repo: e.figure.repo || null, posters: e.figure.posters || null, credit: e.figure.credit || '', url: card(b).url, label: b.about.label, poster: b.about.depiction ? `/${b.dir ? b.dir + '/' : ''}${b.about.depiction}` : null } : null
    return { ...base, aliases: e.about.aliases || [], figure,
      pinned: store.entities.filter((a) => a.about?.pinned).sort((a, b) => a.about.pinned - b.about.pinned).map(line),
      recent: store.recent(12).filter((r) => r.id && !r.section && !('domain' in r) && !r.about?.pinned).slice(0, 8).map(line),
      sections: store.children('').filter((s) => s.section && s.section.nav !== false).sort((a, b) => a.section.order - b.section.order).map((s) => ({ ...card(s), area: s.section.area || 'resources', count: store.descendants(s.id).length })),
      areas: [['new', 'New'], ['practice', 'Practice'], ['technologies', 'Technologies'], ['theory', 'Theory'], ['resources', 'Resources']],
      domains: domains.map((d) => ({ ...d, count: store.find({ domain: d.short }).length })) }
  }
  if (view === 'vitals') return { ...base, vitals: charts(e.vitals?.series || []), dims: { W, H, P } }
  if (view === 'list') {
    // Guides read in stage order; engines are shelved by the task a guest is trying to do (tool.group).
    const kids = store.children(id)
    const staged = kids.every((c) => c.guide?.stage !== undefined)
    const mixed = new Set(kids.map((c) => store.kindsOf(c)[0])).size > 1
    const items = (staged ? [...kids].sort((a, b) => a.guide.stage - b.guide.stage) : kids).map((c) => ({ ...card(c), chips: chips(c), group: c.tool?.group || (mixed ? plural(kindLabel(store.kindsOf(c)[0] || 'entry')).replace(/^./, (ch) => ch.toUpperCase()) : null) }))
    const grouped = items.length > 12 && items.filter((i) => i.group).length > items.length / 2
    const groups = grouped ? [...new Set(items.map((i) => i.group || 'Other'))].sort((a, b) => (a === 'Other') - (b === 'Other') || a.localeCompare(b)).map((g) => ({ label: g, items: items.filter((i) => (i.group || 'Other') === g) })) : null
    return { ...base, items, groups }
  }
  if (view === 'recent') return { ...base, items: store.recent(50).filter((r) => r.id && !r.section && !('domain' in r)).map(line) }
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
  return { ...base, kinds, chips: chips(e), open: e.open || null, related: store.related(id).map((g) => ({ label: g.label, items: g.items.map((i) => ({ ...card(i.entity), note: i.note })) })),
    provenance: e.provenance || {}, flow: e.flow || null, depiction: e.about.depiction ? (/^https?:/.test(e.about.depiction) ? e.about.depiction : `/${e.dir ? e.dir + '/' : ''}${e.about.depiction}`) : null }
}
