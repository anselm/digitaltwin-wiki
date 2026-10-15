#!/usr/bin/env node
// corpus cli:  check            validate and print the report (exit 1 on errors)
//              machine <dir>    write the machine-readable outputs into <dir>
// SHOW=public,proposed chooses which visibilities count as shown (default: public).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadCorpus } from './index.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const show = (process.env.SHOW || 'public').split(',')
const c = loadCorpus(root, { show })
const [cmd, out] = process.argv.slice(2)

const head = (m) => ({ id: m.id, kind: m.kind, title: m.title, summary: m.summary, url: m.url, domain: m.domain || [], reviewed: m.reviewed })

function asMarkdown(m) {
  const facts = c.FACTS.filter((f) => m[f] !== undefined).map((f) => `- ${f}: ${m[f] === 'unknown' ? 'not yet reviewed' : m[f]}`)
  const rel = c.related(m.id).map((r) => `- ${r.label}: [${r.morsel.title}](/m${r.morsel.url.replace(/\/$/, '')}.md)`)
  const src = (m.sources || []).map((s) => `- [${s.title}](${s.url})`)
  return [
    `# ${m.title}`, '', `> ${m.summary}`, '',
    `kind: ${m.kind}` + ((m.domain || []).length ? ` · domain: ${m.domain.join(', ')}` : ''), '',
    m.plain, '',
    m.detail && `## Detail\n\n${m.detail}\n`,
    facts.length && `## Facts\n\n${facts.join('\n')}\n`,
    rel.length && `## Linked\n\n${rel.join('\n')}\n`,
    src.length && `## Sources\n\n${src.join('\n')}\n`,
    `Reviewed ${m.reviewed} (${m.reviewed_by || 'unstated'}). Page: ${m.url}`
  ].filter(Boolean).join('\n')
}

if (cmd === 'check') {
  const r = c.report()
  console.log(`showing: ${show.join(', ')}`)
  console.log(`morsels ${r.total} · shown ${r.shown} · links between shown ${c.links.length}`)
  console.log('shown by kind ', r.shownByKind)
  console.log('hidden by kind', r.hiddenByKind)
  console.log(`"not yet reviewed" facts on shown morsels: ${r.unknownFactsShown}`)
  if (r.orphansShown.length) console.log('shown but unlinked:', r.orphansShown.join(', '))
  if (r.errors.length) { console.error('\nERRORS\n' + r.errors.join('\n')); process.exit(1) }
  console.log('ok')
} else if (cmd === 'machine' && out) {
  const dir = path.resolve(root, out)
  const write = (rel, text) => { const p = path.join(dir, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, text) }
  for (const d of ['m', 'pack']) fs.rmSync(path.join(dir, d), { recursive: true, force: true })
  for (const m of c.morsels) write(`m/${m.kind}/${m.id}.md`, asMarkdown(m))
  // packs: a question with everything one link away, plain layers only
  for (const q of c.filter({ kind: 'questions' })) {
    const near = c.related(q.id).map((r) => `## ${r.morsel.title} (${r.label})\n\n${r.morsel.plain}\n\nFull entry: /m/${r.morsel.kind}/${r.morsel.id}.md`)
    write(`pack/${q.id}.md`, [`# ${q.summary}`, '', `Topic: ${q.title}.`, '', ...near].join('\n\n'))
  }
  write('index.json', JSON.stringify(c.morsels.map(head), null, 1))
  write('graph.json', JSON.stringify(c.links, null, 1))
  const kinds = [...new Set(c.morsels.map((m) => m.kind))]
  write('llms.txt', [
    `# ${c.site.name}`, '', `> ${c.site.label}. ${c.site.dek}`, '',
    'Every entry is one small markdown file. /index.json lists them all; /graph.json lists the typed links between them; /pack/<question>.md gathers everything one link from a question.', '',
    ...kinds.flatMap((k) => [`## ${k}`, '', ...c.filter({ kind: k }).map((m) => `- [${m.title}](/m/${m.kind}/${m.id}.md): ${m.summary}`), ''])
  ].join('\n'))
  fs.cpSync(path.join(root, 'media/themes'), path.join(dir, 'themes'), { recursive: true })
  console.log(`machine outputs for ${c.morsels.length} morsels -> ${out}`)
} else {
  console.error('usage: cli.js check | machine <dir>'); process.exit(2)
}
