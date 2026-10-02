// The site's only door to the corpus module. Server side, at prerender time.
import path from 'node:path'
import { marked } from 'marked'
import { loadCorpus } from '../../../modules/corpus/index.js'

const root = path.resolve(process.cwd(), '..')
export const show = (process.env.SHOW || 'public').split(',')
export const corpus = loadCorpus(root, { show })
if (corpus.errors.length) throw new Error('corpus errors:\n' + corpus.errors.join('\n'))

export const html = (md) => (md ? marked.parse(md) : '')
const dom = Object.fromEntries(corpus.domains.map((d) => [d.id, d]))
// what a card or a list row needs, and nothing else
export const card = (m) => ({
  id: m.id, kind: m.kind, title: m.title, summary: m.summary, url: m.url, form: m.form || '',
  domains: (m.domain || []).map((d) => dom[d]),
  facts: Object.fromEntries(corpus.FACTS.filter((f) => m[f] !== undefined).map((f) => [f, m[f]]))
})
