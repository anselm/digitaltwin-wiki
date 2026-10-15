#!/usr/bin/env node
// check <data>            validate the tree; exit 1 on errors
// machine <data> <out>    write llms.txt, index.json, graph.json, m/*.md and assets
import { openStore } from './index.js'
const [cmd, root = 'data', out] = process.argv.slice(2)
const statuses = process.env.SHOW ? process.env.SHOW.split(',') : null
const store = await openStore(root, { statuses })
if (cmd === 'check') {
  const problems = store.validate()
  for (const p of problems) console.log(`${p.level.padEnd(5)} ${p.id || '(root)'}: ${p.message}`)
  const n = (l) => problems.filter((p) => p.level === l).length
  console.log(`${store.all.length} entities, ${store.entities.length} visible; ${n('error')} errors, ${n('warn')} warnings, ${n('note')} notes`)
  process.exit(n('error') ? 1 : 0)
} else if (cmd === 'machine') {
  const r = store.exportMachine(out, { siteUrl: process.env.SITE_URL || '' })
  console.log(`wrote ${r.entities} entities and ${r.edges} edges to ${out}`)
} else {
  console.log('usage: cli.js check <data> | machine <data> <out>'); process.exit(2)
}
