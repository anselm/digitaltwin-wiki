// The site's one door into the knowledge store. SHOW=public builds the production site; default shows everything with drafts marked.
import { openStore } from '@twins/knowledge'
import { marked } from 'marked'
import path from 'node:path'

const statuses = (process.env.SHOW || 'draft,proposed,public').split(',')
export const store = await openStore(path.resolve('../../data'), { statuses })
export const show = statuses
// Inline citations: [^3] or [^2,5] in a body points at the entry's provenance.sources by number (from 1),
// and renders as a superscript link to that source in the list at the foot of the page.
const cite = (md) => md.replace(/\[\^(\d+(?:\s*,\s*\d+)*)\]/g, (_, ns) => '<sup class="cite">' + ns.split(/\s*,\s*/).map((n) => `<a href="#source-${n}">${n}</a>`).join(',') + '</sup>')
export const html = (md) => (md ? marked.parse(cite(md)) : '')

/** Which view an entity asks for; kind components supply a default when it says nothing. */
export function viewOf(e) {
  if (e.about?.view) return e.about.view
  if ('domain' in e) return 'domain'
  if ('flow' in e) return 'flow'
  return 'prose'
}

export const card = (e) => store.card(e)
export const domainCards = () => store.find({ kind: 'domain', sort: 'order' }).map((d) => ({ ...card(d), colour: d.domain.colour, symbol: d.domain.symbol, order: d.domain.order, short: d.id.split('/').pop() }))
