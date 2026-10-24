// Shape tells of machine prose across the wiki's entries. The heckler (~/projects/2027/heckler) matches
// stock phrases; this looks for shapes: where a sentence ends, how a list closes, how consecutive
// sentences begin, what the first and last sentences of an entry do. It is a census, not a verdict:
// a human reads the hits. Most rows came from an adversarial reading of every entry on 2026-10-20
// (devlog/20261020-prose-tells.md): eight agents each with one lens, a merge, then one agent per
// candidate shape measuring it over data/ and judging whether it is a tell or ordinary English.
// Usage: node tools/tells.js                 census over data/**/*.md, worst files first
//        node tools/tells.js --file <path>   every hit in one file, with the sentence
//        node tools/tells.js --tell <name>   every hit of one tell across the site
//        node tools/tells.js --json          machine-readable census
// No dependencies. Add a shape by adding a row to TELLS.
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const flag = (n) => { const i = args.indexOf(n); return i < 0 ? null : args[i + 1] }
const only = flag('--file'), json = args.includes('--json'), tellName = flag('--tell')

// unit: sentence (s) | run (sentences[] of a paragraph, returns count of runs) | paragraph (sentences[])
//       first (first body sentence) | last (last body sentence) | description (the about.description line)
//       file ({description, first}) for cross-field checks
const POINTER = /\b(it|them|itself|there|one|its own)[.!?]?['")\]]*$/i
const TELLS = [
  // closings
  { name: 'status-stamp-close', unit: 'last', why: 'the entry ends on a form field read aloud: "Status: operational;", "Live;", "Operational."',
    test: (s) => /^(?:Status: |What is open: |Operational[.;:, ]|Live[;.]|Active(?:ly)?[ ;.]|Commercial[.;,]|Released[;.]|In alpha\.|In use[ ;.]|Mature and maintained|Maintained[;.]|Current release|Research release|Prototyp\w*[ ;.]|Version \d|\w+ is ongoing)/.test(s) },
  { name: 'shelf-filing-close', unit: 'sentence', why: 'the wiki files the entry in its own taxonomy: "In this wiki\'s stack it is a data layer"',
    test: (s) => /\b(?:In|For) this wiki(?:'s stack)?\b|\bOn this site it\b|\bon this shelf\b/i.test(s) },
  { name: 'pages-read-absence', unit: 'sentence', why: 'the sentence is about what the writer failed to find: "not stated on the pages read", "none is named"',
    test: (s) => /\b(?:the )?(?:pages?|sources?|datasets?) read\b|\bnot stated\b|\b(?:does|do) not (?:say|state|name|mention)\b|\bnone is named\b|\bnothing (?:is said|on the pages? says)\b|\bgives? no\b|\bnames no\b|\bno (?:\w+ ){1,3}(?:is|are) (?:stated|named|given|listed)\b|\bwhich was not read\b/i.test(s) },
  { name: 'for-the-builder-moral', unit: 'sentence', why: 'the book-report ending: "For a twin builder it is the deepest treatment of..."',
    test: (s) => /^(?:For (?:a|an|the|anyone|someone|the person who)[^,.:]{0,40}\b(?:builder|building|modell?ing|models a place|twin|work)\b[^.]{0,40}\b(?:it is|this is|it turns|the data gives|the (?:practical )?consequence|is useful|is a reason|this has|the report|the paper)\b|What a reader can take)/.test(s) || /\bfor a reader\b|\ba question for a model\b|\buseful as\b/i.test(s) },
  { name: 'unanchored-superlative', unit: 'sentence', why: 'a blurb adjective nothing is compared against: "the accessible account", "the deepest treatment"',
    test: (s) => /\b(?:is|are|makes it|remains) (?:also |still )?(?:the|a) (?:plain|plain-spoken|concrete|short, concrete|accessible|honest|usual|clearest|deepest|quickest|best|definitive|standard|canonical|most \w+) (?:account|treatment|guide|text|source|book|choice|way|introduction|reference|statement|snapshot|contribution|single \w+)\b/i.test(s) },
  { name: 'pointer-close', unit: 'sentence', why: 'the sentence loops back to its subject to feel finished ("...the networks that carry it")',
    test: (s) => POINTER.test(s) },
  { name: 'which-afterthought', unit: 'sentence', why: 'a finished sentence picks up ", which is what/where/why..." and ends on the moral',
    test: (s) => /, which (?:is (?:the|what|how|where|why|worth|a|an|one|part|not|exactly|precisely|about|also|roughly|more|less)|makes|made|means|matters|puts|explains|says|tells|shows|suggests|helps|keeps|leaves|sets|gives|turns)[^,.;()]*\.$/.test(s) },
  { name: 'so-that-benefit', unit: 'sentence', why: 'the vendor tail: "so that planners and the public can see..."',
    test: (s) => /\bso that (?:[a-z][^.;]{0,60}?)\b(?:can|could) (?:see|act|make|plan|decide|assess|understand|compare|explore|take|respond)\b/i.test(s) },
  { name: 'freshness-forensics', unit: 'sentence', why: 'page metadata as evidence of life: "the site was last modified in September 2026"',
    test: (s) => /\blast (?:updated?|commits?|release|modified|changed|edited|revised)\b|(?:was|were) (?:last )?updated (?:in|on)\b|(?:is|are|were|was) dated\b|\bposted (?:on )?\d{1,2} [A-Z][a-z]+ 20\d\d|showed a last update/i.test(s) },
  // openings
  { name: 'credits-opener', unit: 'first', why: 'the first sentence is a citation written out: "A paper in Nature (volume 651, pages...) by..."',
    test: (s) => /^(?:A|An|The) (?:paper|editorial|article|report|account|preprint|dataset|study|map|hosted feature layer)\b[^.]*\b(?:in|by|from|at)\b[^.]*\b(?:by|from|of|at)\b/.test(s) || /\((?:volume|vol\.?) \d+/i.test(s) },
  { name: 'description-echo', unit: 'file', why: 'the body opens by repeating the description, which the page already prints as a dek',
    test: ({ description, first }) => { const w = (t) => new Set(t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((x) => x.length > 3 && !STOP.has(x))); const a = w(description), b = w(first); if (a.size < 5) return false; let n = 0; for (const x of a) if (b.has(x)) n++; return n / a.size >= 0.4 } },
  { name: 'stated-aim', unit: 'sentence', why: 'what it does, relayed as someone\'s intention: "whose stated purpose is", "is designed to"',
    test: (s) => /\b(?:stated (?:purpose|aim|goal|target)|aim stated|its aim is|the aim is to|the pitch is|aims it at|is stated to|its own figures|presents itself as|is designed to)\b|(?:^|\. )(?:It|[A-Z][A-Za-z ]{0,30}) is meant (?:to|for)\b/.test(s) },
  { name: 'container-noun', unit: 'sentence', why: 'the genre noun is a vendor container: platform, capability, environment, infrastructure, initiative',
    test: (s) => /\b(?:is|as|was) (?:a|an|its|the) (?:[a-z-]+ ){0,3}(?:platform|capability|environment|infrastructure|initiative|ecosystem)\b/.test(s) },
  { name: 'turns-into', unit: 'sentence', why: 'the universal verb: "turns A, B, C and D into E"',
    test: (s) => /\bturns? (?!(?:them|this|it|these|those|into)\b)[^.]{0,120}?\binto\b/.test(s) },
  // the source as speaker
  { name: 'source-as-subject', unit: 'sentence', why: 'every fact arrives with a chaperone: "the licence page adds", "Odyssey describes it as", "in its own words"',
    test: (s) => /\b(?:the|its|whose) (?:\w+ )?(?:page|pages|site|README|notes|paper|report|post|abstract|portal|documentation|authors?|makers?|team|company|consortium|city|institute)(?:'s \w+)? (?:says?|states?|adds?|names?|lists?|describes?|claims?|recommends?|counts?|reports?|notes?|calls?|cites?|warns?|gives?|is careful)\b|\bin (?:its|their) own words\b|\bdescribes (?:itself|themselves|it) as\b|\baccording to (?:its|the) page\b/i.test(s) },
  { name: 'flat-inventory', unit: 'sentence', why: 'the source\'s tabs relayed with an attribution verb and five or more items: "the site lists its uses as a, b, c, d, e"',
    test: (s) => /\b(?:lists?|listed|groups?|grouped|organis(?:ed|es)|organiz(?:ed|es)|topics include|headings|categories|tabs|sections)\b[^.;:]{0,80}?(?:[^,.;:()]{2,40},\s){4,}/i.test(s) },
  { name: 'roll-call', unit: 'sentence', why: 'four or more capitalised names on commas with nothing said about any of them',
    test: (s) => /(?<!by )(?:(?:the |a |an )?[A-Z][\w.'’&-]*(?:[ -][A-Z][\w.'’&-]*)*,\s){4,}/.test(s) },
  { name: 'among-them', unit: 'sentence', why: 'the copied catalogue: "among them" plus a run of names, or a list closed by "and others"',
    test: (s) => /\bamong them\b(?: [^,.;]+,){2,}|(?:[^,.;]+,){2,}[^,.;]+ (?:and others|among others)\b/.test(s) },
  { name: 'passport-apposition', unit: 'sentence', why: 'a name arrives with a mini-biography of 35+ characters between subject and verb',
    test: (s) => /\b[A-Z][\w.'’-]*(?: [A-Z][\w.'’-]*)*, (?:an?|the) [^,.;]{35,}[,.;]/.test(s) },
  // lists and rhythm
  { name: 'swell', unit: 'sentence', why: 'a noun run whose last item grows a verb: "a, b, c and the X that does Y", "and how a place is felt"',
    test: (s) => /\w+, \w+(?:, \w+)* and (?:the \w+ that|how|what|where|who|why|whether|the (?:ways?|kinds?|sorts?) )/i.test(s) },
  { name: 'article-triplet', unit: 'sentence', why: 'generic examples each with an article, chosen for cadence: "a town, a lagoon or a hillside"',
    test: (s) => /\b(?:a|an) \w+(?: \w+)?, (?:a|an) \w+(?: \w+)?(?:, (?:a|an) \w+(?: \w+)?)*,? (?:or|and) (?:a|an) \w+/i.test(s) },
  { name: 'triplet', unit: 'sentence', why: 'the rule of threes on autopilot: "x, y and z"',
    test: (s) => /\b\w+, \w+,? and \w+\b/.test(s) && !/\w+, \w+, \w+,? and/.test(s) },
  { name: 'colon-inventory', unit: 'sentence', why: 'a counted lead and then the inventory: "has three parts: a, b and c"',
    test: (s) => /\b(?:two|three|four|five|six|seven|eight|nine|ten|\d+) \w+(?: \w+)?: /.test(s) },
  { name: 'semicolon-ledger', unit: 'sentence', why: 'three or more clauses stacked on semicolons: a table with the gridlines removed',
    test: (s) => /(?:[^.;:]{15,};\s){2,}[^.;]{15,}[.?!]/.test(s) },
  { name: 'bracketed-aside', unit: 'sentence', why: 'two or more items of one list each carrying their own bracket: a glossary disguised as a sentence',
    test: (s) => /\([^()]*\)[^.();:]*,[^.();:]*\([^()]*\)/.test(s) },
  { name: 'from-to-span', unit: 'sentence', why: 'a two-item list posing as a range: "from a single site to a whole city"',
    test: (s) => /(?:\bscales?|\branges?|\branging|\beverything|\banything|\bat scales|\bstages|,|:|;|\)) from (?:a |the |an |one )?[^,.;\d]{3,40}? (?:up )?to (?:a |the |an )?[^,.;\d]{3,40}?[.,;:]/.test(s) },
  { name: 'rather-than-pivot', unit: 'sentence', why: 'defined against an invented foil: "is a reason rather than a tool"',
    test: (s) => /\b(?:is|are|was|be|remains?|becomes?) (?:a|an|the|its|one) [^.;:]{0,70}?(?:, not|rather than) (?:a|an|the|one|its|as a)\b/.test(s) || /\bnot (?:just|only|merely|simply)\b/i.test(s) },
  { name: 'long-breath', unit: 'sentence', why: 'over 45 words: cannot be read aloud in one breath',
    test: (s) => s.split(/\s+/).length > 45 },
  { name: 'pronoun-run', unit: 'run', why: 'three or more consecutive sentences opening on It, Its, This, That, These',
    test: (ss) => { let runs = 0, n = 0; for (const s of ss) { n = /^(?:Its?|This|That|These|Those)\b/.test(s) ? n + 1 : 0; if (n === 3) runs++ } return runs } },
  { name: 'metronome', unit: 'paragraph', why: 'four or more sentences of nearly the same length',
    test: (ss) => { if (ss.length < 4) return false; const n = ss.map((x) => x.split(/\s+/).length); const m = n.reduce((a, b) => a + b) / n.length; const sd = Math.sqrt(n.reduce((a, b) => a + (b - m) ** 2, 0) / n.length); return sd / m < 0.22 } },
  // words
  { name: 'stage-set-verb', unit: 'sentence', why: 'an abstraction given furniture: "sits at the engine layer", "carries a copyright", "puts a model behind"',
    test: (s) => /\b(?:it|piece|entry|twin|question|model|ontology|decision|layer|forest) sits? (?:at|in|on|beside|inside|between|with)\b|\bsits? (?:at|in|on) (?:the|this) (?:\w+ )?(?:layer|shelf|end|seam)|\bcarr(?:ies|y) (?:a|an|its|the) (?:\w+ )?(?:copyright|date|disclaimer|provenance|open block)|\bputs? (?:a|an) [^.]{0,40} behind\b|\bstands behind\b|\blands on\b|\bruns in \w+ parts\b/i.test(s) },
  { name: 'sincerity-intensifier', unit: 'sentence', why: 'a nudge that something else was fake: really, actually, honest, actual',
    test: (s) => /\b(?:really|actually|honest(?:ly)?|genuinely|truly|simply|actual|real (?:decision|question|work|projects?))\b/i.test(s) },
  { name: 'em-dash', unit: 'sentence', why: 'an em-dash; Anselm writes none',
    test: (s) => /—/.test(s) },
  { name: 'bare-path', unit: 'sentence', why: 'an internal path written as text, which prints raw; use [Label](/shelf/id/)',
    test: (s) => /(?:^|[\s(])\/[a-z-]+\/[a-z0-9-]+\/(?=[\s).,;]|$)/.test(s.replace(/\]\([^)]*\)/g, '')) },
  // the description line
  { name: 'desc-tail', unit: 'description', why: 'the description closes on a clause instead of a noun',
    test: (d) => /\band (?:how|what|where|whether|the \w+ that)\b/i.test(d) || POINTER.test(d) },
]
const STOP = new Set(['that', 'from', 'with', 'this', 'which', 'their', 'into', 'about', 'open', 'source', 'data', 'model', 'models', 'place', 'tool', 'built', 'open-source', 'twin', 'digital'])

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.md') ? [path.join(d, e.name)] : [])
const files = only ? [only] : walk('data')
const split = (text) => {
  const paras = text.split(/\n\s*\n/).map((p) => p.replace(/\[\^[\d,\s]+\]/g, '').replace(/^#+ .*$/gm, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/^\s*[-*] /gm, '').replace(/\*\*/g, '').trim()).filter(Boolean)
  return paras.map((p) => p.replace(/\s+/g, ' ').split(/(?<=[.!?]['")\]]*)\s+(?=[A-Z"'(\[])/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length > 3)).filter((p) => p.length)
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
  const all = paras.flat()
  sentences += all.length
  if (description) descriptions++
  const counts = {}
  const hit = (t, text, k = 1) => { counts[t.name] = (counts[t.name] || 0) + k; census[t.name].hits += k; census[t.name].files.add(f); if (only || tellName === t.name) hitsOut.push({ file: f, tell: t.name, text }) }
  for (const t of TELLS) {
    if (t.unit === 'description') { if (description && t.test(description)) hit(t, description); continue }
    if (t.unit === 'first') { if (all[0] && t.test(all[0])) hit(t, all[0]); continue }
    if (t.unit === 'last') { if (all.length && t.test(all[all.length - 1])) hit(t, all[all.length - 1]); continue }
    if (t.unit === 'file') { if (description && all[0] && t.test({ description, first: all[0] })) hit(t, `${description} || ${all[0]}`); continue }
    for (const p of paras) {
      if (t.unit === 'paragraph') { if (t.test(p)) hit(t, p.join(' ').slice(0, 200) + '…'); continue }
      if (t.unit === 'run') { const k = t.test(p); if (k) hit(t, p.join(' ').slice(0, 200) + '…', k); continue }
      for (const s of p) if (t.test(s)) hit(t, s)
    }
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  perFile.push({ file: f, sentences: all.length, hits: total, per100: all.length ? +(100 * total / all.length).toFixed(1) : 0, counts })
}

if (json) { console.log(JSON.stringify({ files: files.length, sentences, tells: Object.fromEntries(TELLS.map((t) => [t.name, { hits: census[t.name].hits, files: census[t.name].files.size, why: t.why }])), perFile }, null, 1)); process.exit(0) }
if (only || tellName) {
  for (const h of hitsOut) console.log(`${h.file}  [${h.tell}]\n    ${h.text}\n`)
  console.log(`${hitsOut.length} hits`)
  process.exit(0)
}
console.log(`${files.length} files, ${sentences} sentences, ${descriptions} descriptions\n`)
console.log('tell                      hits  files  per 1000')
for (const t of TELLS) {
  const c = census[t.name], denom = ['description', 'first', 'last', 'file'].includes(t.unit) ? files.length : sentences
  console.log(`${t.name.padEnd(24)} ${String(c.hits).padStart(5)} ${String(c.files.size).padStart(6)}  ${(1000 * c.hits / Math.max(1, denom)).toFixed(0).padStart(6)}   ${t.why}`)
}
console.log('\n(per 1000 is per sentence for sentence tells, per file for first/last/description tells)')
console.log('\nworst files by hits per 100 sentences (at least 8 sentences):')
for (const r of perFile.filter((r) => r.sentences >= 8).sort((a, b) => b.per100 - a.per100).slice(0, 15))
  console.log(`  ${String(r.per100).padStart(5)}  ${r.file}  ${Object.entries(r.counts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k}:${v}`).join(' ')}`)
