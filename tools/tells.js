// Shape tells of machine prose across the wiki's entries. The heckler (~/projects/2027/heckler) matches
// stock phrases; this looks for shapes: where a sentence ends, how a list closes, how consecutive
// sentences begin, how long a breath is. It is a census, not a verdict: a human reads the hits.
// Usage: node tools/tells.js                 census over data/**/*.md, worst files first
//        node tools/tells.js --file <path>   every hit in one file, with the sentence
//        node tools/tells.js --json          machine-readable census
//        node tools/tells.js --tell <name>   list every hit of one tell across the site
// No dependencies. Add a shape by adding a row to TELLS.
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const flag = (n) => { const i = args.indexOf(n); return i < 0 ? null : args[i + 1] }
const only = flag('--file'), json = args.includes('--json'), tellName = flag('--tell')

// Each tell: name, what it is, and a test over either one sentence (s), a sentence pair (prev, s),
// a paragraph (sentences[]), or the description line. A test returns true when the shape is present.
const POINTER = /\b(it|them|itself|there|one|its own)[.!?]?['")\]]*$/i
const TELLS = [
  { name: 'pointer-close', unit: 'sentence', why: 'the sentence loops back to its subject to feel finished ("...the networks that carry it")',
    test: (s) => POINTER.test(s) },
  { name: 'swell', unit: 'sentence', why: 'a noun run whose last item grows a verb: "a, b, c and the X that does Y", "and how a place is felt"',
    test: (s) => /\w+, \w+(?:, \w+)* and (?:the \w+ that|how|what|where|who|why|whether|the (?:ways?|kinds?|sorts?) )/i.test(s) },
  { name: 'pivot', unit: 'sentence', why: 'the empty pivot: not X but Y; not just X; rather than X',
    test: (s) => /\bnot (?:just|only|merely|simply)\b|\bis not [^,;]{3,60}, (?:it is|but)\b|\bnot (?:a |an |the )?\w+ but (?:a |an |the )?\w+/i.test(s) },
  { name: 'pointer-open', unit: 'pair', why: 'consecutive sentences opening on This, It, That, These',
    test: (prev, s) => /^(?:This|It|That|These|Those)\b/.test(prev) && /^(?:This|It|That|These|Those)\b/.test(s) },
  { name: 'triplet', unit: 'sentence', why: 'the rule of threes on autopilot: "x, y and z"',
    test: (s) => /\b\w+, \w+,? and \w+\b/.test(s) && !/\w+, \w+, \w+,? and/.test(s) },
  { name: 'semicolon-chain', unit: 'sentence', why: 'two or more semicolons: one sentence doing the work of three',
    test: (s) => (s.match(/;/g) || []).length >= 2 },
  { name: 'long-breath', unit: 'sentence', why: 'over 45 words: cannot be read aloud in one breath',
    test: (s) => s.split(/\s+/).length > 45 },
  { name: 'metronome', unit: 'paragraph', why: 'four or more sentences of nearly the same length',
    test: (ss) => { if (ss.length < 4) return false; const n = ss.map((x) => x.split(/\s+/).length); const m = n.reduce((a, b) => a + b) / n.length; const sd = Math.sqrt(n.reduce((a, b) => a + (b - m) ** 2, 0) / n.length); return sd / m < 0.22 } },
  { name: 'spatial-verb', unit: 'sentence', why: 'an abstraction given a body: sits on, lives in, carries, points at, stands behind, lands on',
    test: (s) => /\b(?:sits (?:on|at|in|under|beside)|lives (?:in|on|at)|carries|points at|stands behind|lands on|runs in \w+ parts|draws? a)\b/i.test(s) },
  { name: 'provenance-voice', unit: 'sentence', why: 'the sentence is about the source rather than the thing: "in its own words", "describes itself as", "is not stated"',
    test: (s) => /\bin (?:its|their|his|her) own words\b|\bdescribes (?:itself|themselves) as\b|\b(?:is|are) not (?:stated|given|named|published)\b|\bthe page (?:says|states|gives)\b|\baccording to (?:its|the) page\b|\bis careful to\b|\bthe authors? (?:note|notes|acknowledge)\b/i.test(s) },
  { name: 'for-a-reader', unit: 'sentence', why: 'house stock: "for a reader", "a question for a model", "useful as"',
    test: (s) => /\bfor a reader\b|\ba question for a model\b|\buseful as\b|\bworth (?:a look|reading|knowing)\b/i.test(s) },
  { name: 'em-dash', unit: 'sentence', why: 'an em-dash; Anselm writes none',
    test: (s) => /—/.test(s) },
  { name: 'desc-tail', unit: 'description', why: 'the description line closes on a clause instead of a noun',
    test: (d) => /\band (?:how|what|where|whether|the \w+ that)\b/i.test(d) || POINTER.test(d) },
]

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.md') ? [path.join(d, e.name)] : [])
const files = only ? [only] : walk('data')
const split = (text) => {
  const paras = text.split(/\n\s*\n/).map((p) => p.replace(/^#+ .*$/gm, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/^\s*[-*] /gm, '').replace(/\*\*/g, '').trim()).filter(Boolean)
  return paras.map((p) => p.replace(/\s+/g, ' ').split(/(?<=[.!?]['")\]]*)\s+(?=[A-Z"'(\[])/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length > 3))
}

const census = Object.fromEntries(TELLS.map((t) => [t.name, { files: new Set(), hits: 0 }]))
const perFile = [], hitsOut = []
let sentences = 0, descriptions = 0
for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8')
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) continue
  const desc = (m[1].match(/^\s*description:\s*(?:>-?\n((?:\s{4,}.*\n?)+)|["']?(.*?)["']?\s*$)/m) || [])
  const description = (desc[1] ? desc[1].replace(/\s+/g, ' ') : desc[2] || '').trim()
  const paras = split(m[2])
  const n = paras.reduce((a, p) => a + p.length, 0)
  sentences += n
  const counts = {}
  const hit = (t, text) => { counts[t.name] = (counts[t.name] || 0) + 1; census[t.name].hits++; census[t.name].files.add(f); if (only || tellName === t.name) hitsOut.push({ file: f, tell: t.name, text }) }
  for (const t of TELLS) {
    if (t.unit === 'description') { if (description) { descriptions++; if (t.test(description)) hit(t, description) } continue }
    for (const p of paras) {
      if (t.unit === 'paragraph') { if (t.test(p)) hit(t, p.join(' ').slice(0, 200) + '…'); continue }
      p.forEach((s, i) => {
        if (t.unit === 'sentence' && t.test(s)) hit(t, s)
        if (t.unit === 'pair' && i > 0 && t.test(p[i - 1], s)) hit(t, p[i - 1] + ' ' + s)
      })
    }
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  perFile.push({ file: f, sentences: n, hits: total, per100: n ? +(100 * total / n).toFixed(1) : 0, counts })
}

if (json) { console.log(JSON.stringify({ files: files.length, sentences, tells: Object.fromEntries(TELLS.map((t) => [t.name, { hits: census[t.name].hits, files: census[t.name].files.size, why: t.why }])), perFile }, null, 1)); process.exit(0) }
if (only || tellName) {
  for (const h of hitsOut) console.log(`${h.file}  [${h.tell}]\n    ${h.text}\n`)
  console.log(`${hitsOut.length} hits`)
  process.exit(0)
}
console.log(`${files.length} files, ${sentences} sentences, ${descriptions} descriptions\n`)
console.log('tell                 hits   files  per 1000 sentences')
for (const t of TELLS) {
  const c = census[t.name], denom = t.unit === 'description' ? descriptions : sentences
  console.log(`${t.name.padEnd(20)} ${String(c.hits).padStart(5)} ${String(c.files.size).padStart(7)}  ${(1000 * c.hits / Math.max(1, denom)).toFixed(0).padStart(6)}   ${t.why}`)
}
console.log('\nworst files by hits per 100 sentences (at least 8 sentences):')
for (const r of perFile.filter((r) => r.sentences >= 8).sort((a, b) => b.per100 - a.per100).slice(0, 15))
  console.log(`  ${String(r.per100).padStart(5)}  ${r.file}  ${Object.entries(r.counts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k}:${v}`).join(' ')}`)
