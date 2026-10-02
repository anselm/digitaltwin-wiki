import { corpus } from '$lib/corpus.server.js'
export function load() {
  const groups = {}
  for (const h of corpus.hidden) (groups[h.kind] ||= []).push(h.title)
  return { groups: Object.entries(groups).map(([kind, titles]) => ({ kind, titles })) }
}
