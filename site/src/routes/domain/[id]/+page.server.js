import { error } from '@sveltejs/kit'
import { corpus, card } from '$lib/corpus.server.js'

export const entries = () => corpus.domains.map((d) => ({ id: d.id }))

export function load({ params }) {
  const d = corpus.domains.find((x) => x.id === params.id)
  if (!d) error(404, 'No such domain')
  const all = corpus.filter({ domain: d.id })
  const of = (k) => all.filter((m) => m.kind === k).map(card)
  return { d, stories: of('stories'), questions: of('questions'), instruments: [...of('catalogue'), ...of('data')] }
}
