import { corpus, card, html } from '$lib/corpus.server.js'

// the seed topic leads every list
const waterFirst = (a, b) => (b.domain || []).includes('water') - (a.domain || []).includes('water')

export function load() {
  const kind = (k) => corpus.filter({ kind: k })
  const counts = Object.fromEntries(corpus.domains.map((d) => [d.id, corpus.filter({ domain: d.id }).length]))
  const questions = kind('questions').sort(waterFirst).map((q) => ({
    ...card(q),
    with: corpus.related(q.id).filter((r) => r.type === 'answers').map((r) => r.morsel.title)
  }))
  const hiddenBy = corpus.hidden.reduce((o, h) => ((o[h.kind] = (o[h.kind] || 0) + 1), o), {})
  return {
    stories: kind('stories').sort((a, b) => (a.order || 0) - (b.order || 0)).map((s) => ({ ...card(s), plain: html(s.plain), source: s.sources?.[0]?.title || '' })),
    flow: corpus.get('so-you-want-a-digital-twin'),
    domains: corpus.domains.map((d) => ({ ...d, count: counts[d.id] })),
    questions,
    instruments: [...kind('catalogue'), ...kind('data')].sort(waterFirst).map(card),
    index: corpus.morsels.filter((m) => !['flows', 'about'].includes(m.kind)).map((m) => ({ title: m.title, kind: m.kind, url: m.url, hay: [m.title, m.summary, m.plain, (m.domain || []).join(' ')].join(' ').toLowerCase() })),
    hiddenBy,
    hiddenTotal: corpus.hidden.length
  }
}
