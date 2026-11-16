// When each entry was first written and last changed, read from the git history of data/.
// Writes dates.json ({ "<entry id>": { created, changed } }) into the site's static folder; every
// page shows the two dates under its title. Follows renames, so a moved entry keeps its first date.
// Rerunnable; the build and the deploy run it. Where there is no git history (the deploy builds from
// an archive of the last commit), it leaves an existing dates.json alone.
// Usage: node tools/dates.js [static-dir] [--repo dir]
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const args = process.argv.slice(2)
const repoAt = args.indexOf('--repo')
const repo = repoAt >= 0 ? args.splice(repoAt, 2)[1] : '.'
const out = path.join(args[0] || 'packages/site/static', 'dates.json')

let log
try {
  log = execFileSync('git', ['-C', repo, 'log', '--format=@%as', '--name-status', '-M', '--diff-filter=AMR', '--', 'data'], { encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] })
} catch {
  console.log(fs.existsSync(out) ? 'dates: no git history here; kept the existing dates.json' : 'dates: no git history here and no dates.json; pages will show no dates')
  process.exit(0)
}

// The log runs newest first. A file's present name is followed back through its renames.
const now = new Map() // an older path -> the path the same file has today
const dates = {}
let day = ''
for (const line of log.split('\n')) {
  if (line.startsWith('@')) { day = line.slice(1); continue }
  const [status, a, b] = line.split('\t')
  if (!status || !a) continue
  const here = status.startsWith('R') ? b : a
  const today = now.get(here) || here
  if (status.startsWith('R')) now.set(a, today)
  if (!today.endsWith('.md')) continue
  const d = (dates[today] ||= { created: day, changed: day })
  d.created = day
}

// data/engines/aurora.md -> engines/aurora; data/twins/bay-layers/index.md -> twins/bay-layers; data/index.md -> ''
const id = (file) => file.replace(/^data\//, '').replace(/\.md$/, '').replace(/(^|\/)index$/, '')
const byId = {}
for (const [file, d] of Object.entries(dates)) if (fs.existsSync(path.join(repo, file))) byId[id(file)] = d
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, JSON.stringify(byId, null, 0))
console.log(`dates: ${Object.keys(byId).length} entries, from the git history of data/`)
