// Import the OpenAI catalogue mined from Anselm's LinkedIn posts (2026-10-17) as draft entities.
// Usage: node tools/import-linkedin.js <outputs-dir> [--dry]
// Reads <outputs-dir>/catalog.json. Writes data/<folder>/<slug>.md with status draft and an
// `import` component that keeps the catalogue's own ids, so a rerun overwrites what it wrote
// and nothing else. The catalogue itself is not committed: it quotes other people's posts.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const [dir, ...flags] = process.argv.slice(2)
if (!dir) { console.error('usage: node tools/import-linkedin.js <outputs-dir> [--dry]'); process.exit(2) }
const dry = flags.includes('--dry')
const cat = JSON.parse(fs.readFileSync(path.join(dir, 'catalog.json'), 'utf8'))
const SOURCE = 'openai-linkedin-scrape 2026-10-17'

// Catalogue kind -> our kind component and folder. Anything else is an engine.
const kindMap = [
  [/twin/, 'twin', 'twins'],
  [/^(concept|knowledge_concept|research_agenda|communication_method|governance_method|spatial_communication)$/, 'term', 'terms'],
  [/initiative|governance_platform/, 'organization', 'organizations'],
  [/^(survey|research_call|benchmark)$/, 'article', 'articles'],
  [/dataset|data_platform|data_model|enabling_data|data_application|data_integration/, 'datasource', 'data-sources'],
  [/story/, 'story', 'stories'],
]
const kindOf = (k) => kindMap.find(([re]) => re.test(k))?.slice(1) || ['tool', 'engines']

// Catalogue application domains -> the wiki's ten domains. Unlisted tags map to nothing.
const domainMap = {
  places: ['urban', 'planning', 'land_use', 'housing', 'heritage', 'buildings', 'infrastructure', 'geospatial', 'gis', 'urban_area', 'civic', 'navigation', 'spatial_computing'],
  ecology: ['ecology', 'biodiversity', 'wildlife', 'forest', 'forestry', 'coral', 'marine', 'habitat', 'conservation', 'restoration', 'whales', 'marine_conservation', 'ecological_networks', 'microbial_ecology', 'urban_forest', 'mountain_ecology', 'plant_physiology', 'amazon', 'wetland', 'mangrove', 'multispecies_justice'],
  water: ['water', 'flood', 'hydrology', 'coastal', 'ocean', 'watershed', 'drought', 'precipitation', 'sediment', 'underwater', 'blue_carbon', 'cryosphere'],
  fire: ['wildfire', 'fire'],
  climate: ['climate', 'heat', 'weather', 'climate_adaptation', 'earth_system', 'emissions', 'methane', 'meteorology', 'air_quality', 'disaster', 'landslide', 'debris_flow'],
  energy: ['energy'],
  mobility: ['transport', 'autonomous_driving', 'maritime_network'],
  food: ['agriculture', 'agroecology', 'food'],
  people: ['public_health', 'health', 'population', 'governance', 'participation', 'community_science', 'law', 'policy', 'institutions', 'public_engagement', 'bioregional_governance', 'data_sovereignty', 'indigenous_territories', 'social_systems'],
  sensory: ['computer_vision', 'sensors', '3d_reconstruction', 'imaging', 'xr', 'robotics', 'physical_ai', 'telepresence'],
}
const domainOf = (tags) => [...new Set((tags || []).flatMap((t) => Object.entries(domainMap).filter(([, v]) => v.includes(t)).map(([d]) => d)))]

// Catalogue relationship predicates -> declared predicates. Unlisted ones are kept only as notes.
const predMap = { component_of: 'part_of', uses_component: 'built_on', uses_solver: 'built_on', uses_simulator: 'built_on', visualizes_with: 'built_on', supports_backend: 'built_on', uses_scene_standard: 'built_on', uses_dataset: 'needs', uses_data: 'needs', integrates_data_from: 'needs', joins_data_from: 'needs', imports_forecasts_from: 'needs', application_of: 'example_of', evaluates: 'about', discussed_in: 'about' }

const slug = (s) => { const t = s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').replace(/-+/g, '-'); return t.length <= 60 ? t : t.slice(0, 60).replace(/-[^-]*$/, '') }
// Catalogue records that are hand-written entries already: the import component and any new
// sources are added to the existing entry, nothing else is touched. DT071 is this wiki itself.
const merge = { DT004: 'engines/urbanly-citycompass', DT015: 'engines/alphaearth-prithvi', DT017: 'engines/weathernext-nvidia-earth-2', DT086: 'engines/world-labs-atlas' }
const skip = new Set(['DT071'])
const human = (s) => s.replace(/_/g, ' ')
const existing = new Set()
const walk = (d, p = '') => { for (const n of fs.readdirSync(d)) { const f = path.join(d, n); const st = fs.statSync(f); if (st.isDirectory()) walk(f, p ? `${p}/${n}` : n); else if (n.endsWith('.md')) existing.add(n === 'index.md' ? p : (p ? `${p}/` : '') + n.slice(0, -3)) } }
walk('data')

// Ids: folder/slug, and the catalogue id for the relationships pass.
const ids = new Map()
for (const x of cat.entities) { const [, folder] = kindOf(x.kind); ids.set(x.entity_id, merge[x.entity_id] || `${folder}/${slug(x.name)}`) }
const posts = new Map((cat.posts || []).map((p) => [p.post_id, p]))

let written = 0, merged = 0, collided = []
for (const x of cat.entities) {
  if (skip.has(x.entity_id)) continue
  const [kind] = kindOf(x.kind)
  const id = ids.get(x.entity_id)
  const file = fs.existsSync(`data/${id}/index.md`) ? `data/${id}/index.md` : `data/${id}.md`
  const prior = fs.existsSync(file) ? matter(fs.readFileSync(file, 'utf8')) : null
  if (prior && prior.data.import?.source !== SOURCE && !merge[x.entity_id]) { collided.push([x.entity_id, id]); continue }

  const posters = [...new Set((x.attribution_by_post || []).flatMap((a) => a.visible_posters || []))]
  const sources = []
  for (const v of x.verification || []) sources.push({ title: `${x.name}: ${human(v.method || 'primary source')}`, url: v.url })
  for (const l of x.unverified_direct_leads || []) sources.push({ title: `${x.name}: lead seen in the post, not yet opened`, url: l.url })
  for (const u of x.raw_source_urls_post_scope || []) sources.push({ title: 'Link in the LinkedIn post (short link, unresolved)', url: u })
  // The catalogue keeps bare domains as they appeared in posts; give them a scheme so they link.
  for (const s of sources) if (s.url && !/^[a-z]+:/i.test(s.url)) s.url = `https://${s.url}`
  const seen = new Set(); const uniq = sources.filter((s) => s.url && !seen.has(s.url) && seen.add(s.url))
  const imp = { source: SOURCE, id: x.entity_id, kind: x.kind, family: x.record_family, priority: x.priority, verified: x.verification_status === 'primary_source_identified_with_scoped_support', posts: x.source_post_ids || [], posters }

  if (merge[x.entity_id]) {
    if (!prior) { collided.push([x.entity_id, `${id} (missing)`]); continue }
    const d = prior.data
    d.import = imp
    d.provenance ||= {}
    const have = new Set((d.provenance.sources || []).map((s) => s.url))
    d.provenance.sources = [...(d.provenance.sources || []), ...uniq.filter((s) => !have.has(s.url))]
    merged++
    if (dry) { console.log(`${x.entity_id} merge        ${id}`); continue }
    fs.writeFileSync(file, matter.stringify(prior.content, d))
    continue
  }

  const e = {
    about: { label: x.name, description: (x.annotation || '').trim() },
    [kind]: {},
    provenance: { origin: 'import', sources: uniq, created: '2026-10-17', reviewed_by: 'OpenAI catalogue of Anselm\'s LinkedIn posts, 2026-10-17; not yet rechecked by a person', status: 'draft' },
    import: imp,
  }
  if (kind === 'tool' || kind === 'twin') { if (x.canonical_links?.[0] && e.import.verified) e[kind].homepage = x.canonical_links[0] }
  if (kind === 'tool') e.tool.form = human(x.kind)
  if (kind === 'twin') e.twin.operational = /implemented/.test(x.twin_status || '') ? 'claimed, unverified' : 'candidate'
  if (kind === 'datasource') { e.datasource.coverage = (x.spatial_scales || []).map(human).join(', ') || undefined; if (x.canonical_links?.[0] && e.import.verified) e.datasource.homepage = x.canonical_links[0] }
  for (const k of Object.keys(e[kind])) if (e[kind][k] === undefined) delete e[kind][k]
  const domains = domainOf(x.application_domains); if (domains.length) e.domains = domains
  const tags = [...new Set([...(x.application_domains || []), ...(x.spatial_scales || [])])].map(human); if (tags.length) e.about.tags = tags

  const rel = []
  for (const r of cat.relationships || []) {
    if (r.subject_id !== x.entity_id) continue
    const target = ids.get(r.object_id); if (!target) continue
    if (r.predicate === 'discussed_in') { continue } // reverse direction; handled from the other side below
    const p = predMap[r.predicate]
    if (p) rel.push({ predicate: p, target, note: `${human(r.predicate)} (${r.evidence_status || 'source claim'})` })
  }
  for (const r of cat.relationships || []) if (r.predicate === 'discussed_in' && r.object_id === x.entity_id && ids.get(r.subject_id)) rel.push({ predicate: 'about', target: ids.get(r.subject_id), note: 'discusses it' })
  if (rel.length) e.relations = rel

  const body = []
  if (x.uncertainty) body.push(`**Caveats.** ${x.uncertainty.trim()}`)
  if (x.maturity_assessment) body.push(`**Maturity, as the catalogue judged it.** ${x.maturity_assessment.trim()}`)
  if (x.twin_status && kind !== 'twin') body.push(`**Twin status.** ${x.twin_status.trim()}`)
  if (posters.length) body.push(`Seen on LinkedIn in ${posters.length === 1 ? 'a post' : 'posts'} by ${posters.join(', ')}.`)
  const text = body.join('\n\n') + '\n'
  written++
  if (dry) { console.log(`${x.entity_id} ${kind.padEnd(12)} ${id}${domains.length ? '  [' + domains.join(', ') + ']' : ''}`); continue }
  fs.mkdirSync(path.dirname(`data/${id}.md`), { recursive: true })
  fs.writeFileSync(`data/${id}.md`, matter.stringify(text, e))
}
console.error(`${dry ? 'would write' : 'wrote'} ${written} entities, merged ${merged} into existing ones; ${collided.length} collide with hand-written entries and were skipped:`)
for (const [a, b] of collided) console.error(`  ${a} -> ${b}`)
