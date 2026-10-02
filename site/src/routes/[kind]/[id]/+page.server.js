import { error } from '@sveltejs/kit'
import { corpus, card, html } from '$lib/corpus.server.js'

export const entries = () => corpus.morsels.map((m) => ({ kind: m.kind, id: m.id }))

const FACT_LABEL = { cost: 'Cost', skill: 'Skill needed', try: 'Try it', bring: 'You bring', like: 'Used by', evidence: 'Evidence' }

export function load({ params }) {
  const m = corpus.get(params.id)
  if (!m || m.kind !== params.kind) error(404, 'Not in the guide')
  return {
    m: {
      ...card(m), plain: html(m.plain), detail: html(m.detail), homepages: m.homepages || [], sources: m.sources || [],
      reviewed: m.reviewed, reviewed_by: m.reviewed_by || '', file: m.file,
      factList: corpus.FACTS.filter((f) => m[f] !== undefined).map((f) => ({ label: FACT_LABEL[f], value: m[f] })),
      flow: m.kind === 'flows' ? m : null
    },
    linked: corpus.related(m.id).map((r) => ({ label: r.label, ...card(r.morsel) }))
  }
}
