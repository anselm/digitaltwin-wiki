// One-shot: turn the 2026-10-02 corpus (archive/v1/corpus) into data/ entities.
// Rerunnable; overwrites what it wrote before, never touches hand-written entities elsewhere.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const src = 'archive/v1/corpus'
const folders = { catalogue: 'tools', data: 'data-sources', questions: 'questions', playbook: 'guides', stories: 'stories', concepts: 'terms', flows: 'flows', about: 'about' }
const kindOf = { catalogue: 'tool', data: 'datasource', questions: 'question', playbook: 'guide', stories: 'story', concepts: 'term', flows: 'flow', about: null }
const newId = (kind, id) => `${folders[kind]}/${kind === 'playbook' ? id.replace(/^\d+-/, '') : id}`
const known = (v) => v !== undefined && v !== 'unknown' && v !== ''
const pick = (o, keys) => Object.fromEntries(keys.filter((k) => known(o[k])).map((k) => [k, o[k]]))

const old = []
for (const kind of Object.keys(folders)) for (const f of fs.readdirSync(path.join(src, kind))) {
  const { data, content } = matter(fs.readFileSync(path.join(src, kind, f), 'utf8'))
  old.push({ kind, data, content })
}
const idMap = new Map(old.map((o) => [o.data.id, newId(o.kind, o.data.id)]))
const body = (content) => {
  const m = content.match(/## Detail\s+([\s\S]*)$/)
  const text = (m ? m[1] : content.replace(/## Plain\s+/, '')).trim()
  return text
}
const linkFix = (to) => to.replace(/^\/catalogue\//, '/tools/').replace('/#stories', '/stories').replace('/in-development', '/guides')

let n = 0
for (const { kind, data: d, content } of old) {
  const id = idMap.get(d.id)
  const e = { about: { label: d.title, description: d.summary } }
  if (kindOf[kind]) e[kindOf[kind]] = {}
  const k = e[kindOf[kind]]
  if (kind === 'catalogue') Object.assign(k, pick(d, ['form', 'group', 'audiences', 'cost', 'skill', 'try', 'bring', 'like', 'evidence']), d.homepages?.[0]?.url ? { homepage: d.homepages[0].url } : {})
  if (kind === 'data') Object.assign(k, pick(d, ['cost', 'skill']), d.homepages?.[0]?.url ? { homepage: d.homepages[0].url } : {})
  if (kind === 'playbook') k.stage = d.order
  if (kind === 'stories') k.order = d.order
  if (kind === 'flows') Object.assign(k, { start: d.start, steps: d.steps.map((s) => ({ ...s, to: linkFix(s.to) })), end: { ...d.end, to: linkFix(d.end.to) } })
  if (d.domain?.length) e.domains = d.domain
  const rel = []
  for (const t of d.answers || []) rel.push({ predicate: 'answers', target: idMap.get(t) || `questions/${t}` })
  for (const t of d.tells || []) rel.push({ predicate: 'tells', target: idMap.get(t) || t })
  if (rel.length) e.relations = rel
  e.provenance = { origin: 'survey', ...(d.sources?.length ? { sources: d.sources } : {}), reviewed: String(d.reviewed), reviewed_by: d.reviewed_by, status: d.visibility === 'proposed' ? 'proposed' : 'draft' }
  if (kind === 'playbook' || kind === 'flows') e.provenance.origin = 'agent'
  const text = body(content)
  const out = path.join('data', `${id}.md`)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, matter.stringify(text === d.summary ? '' : text + '\n', e))
  n++
}
console.log(`migrated ${n} entities`)
