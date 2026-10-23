// Run after changing entries: the corpus check, then for each changed entry its prose tells and how it
// will look as a shared card. With no arguments it takes the entries git sees as changed or new under data/.
// Usage: node tools/after-edit.js [data/shelf/entry.md ...]
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'

const run = (cmd, args) => { try { return execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }) } catch (e) { return (e.stdout || '') + (e.stderr || '') } }
let files = process.argv.slice(2)
if (!files.length) files = run('git', ['status', '--porcelain', '--untracked-files=all', '--', 'data']).split('\n').map((l) => l.slice(3).trim()).filter((f) => f.endsWith('.md') && fs.existsSync(f))

console.log(run('node', ['packages/knowledge/cli.js', 'check', 'data']).trim().split('\n').slice(0, 20).join('\n'))
if (!files.length) { console.log('after-edit: no changed entries under data/'); process.exit(0) }

// The card limits match tools/share.js: titles over about 60 characters and descriptions over about 200 are cut.
const field = (txt, key) => { const m = txt.match(new RegExp(`^\\s*${key}:\\s*(?:>-?\\s*\\n((?:\\s{4,}.*\\n?)+)|['"]?(.*?)['"]?\\s*$)`, 'm')); return m ? (m[1] || m[2] || '').replace(/\s+/g, ' ').trim() : '' }
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8'); const label = field(txt, 'label'), desc = field(txt, 'description')
  const notes = []
  if (!desc) notes.push('no description: the card and search results will have nothing under the title')
  else if (desc.length > 200) notes.push(`description is ${desc.length} characters; search results and cards cut at about 200`)
  if (label.length > 70) notes.push(`title is ${label.length} characters; the card shows about 70`)
  if (!/^\s*depiction:/m.test(txt)) notes.push('no picture: the card is text only')
  const body = txt.split(/^---$/m).slice(2).join('---'), paras = body.split(/\n\s*\n/).filter((x) => x.trim() && !/^\s*(#|!\[|\|)/.test(x))
  const cited = paras.filter((x) => /\[\^\d/.test(x)).length
  if (/^\s*sources:/m.test(txt) && cited < paras.length) notes.push(`inline citations in ${cited} of ${paras.length} paragraphs`)
  const tells = run('node', ['tools/tells.js', '--file', f]).trim()
  console.log(`\n${f}\n  card: ${notes.length ? notes.join('; ') : 'fine'}\n  tells: ${tells ? tells.split('\n').map((l) => l.match(/\.md\s+\[([a-z-]+)\]/)?.[1]).filter(Boolean).join(', ') : 'none'}`)
}
console.log('\nafter-edit: for the sentences behind each tell, node tools/tells.js --file <entry>')
