# 2026-10-15 — do-over: plan and first build

Point-in-time entry, written by Claude in response to
`20261015-do-over-brief-from-anselm.md`. Where I decided something he left
open, it says so. Read with the brief beside it.

## What changes

The 2026-10-02 work (corpus of "morsels", the SvelteKit site, the mockup) is
archived under `archive/v1/`, not deleted: git has it anyway, and the mockup
and migration script are still useful to look at. Its 64 entries are the one
asset worth keeping, so they are migrated into the new store rather than
rewritten. The staging VM `twinguide` still serves v1 until he says to
redeploy.

What stays decided from before: the survey is the design canon (ten domains,
symbols, colours, palette, type; `20261002-the-survey-is-the-design-canon.md`);
the machine door (`llms.txt`, markdown per entry); provenance on everything.

## Shape (his point 1, 2, 3 and the UX section, in order)

```
meta/            data design: the ECS model written up, best practices, the
                 reserved component names. Prose, versioned, for humans and
                 contributors. (his "/meta or /data-design")
packages/
  knowledge/     the store. Loads a folder tree of entities, validates them,
                 answers questions through a plain imported JS API, and emits
                 the machine outputs. Knows nothing about digital twins.
  site/          SvelteKit (static adapter), Svelte 5, Tailwind 4. Routes on
                 what the artifact says, not on the URL.
data/            the artifacts. One folder tree; an entity's id is its path.
                 Domain-specific schemas live in packages/knowledge/schemas
                 as JSON, examples live in data/ itself.
tools/           migrations now; curation agents later.
archive/v1/      the 2026-10-02 effort.
```

Monorepo with npm workspaces. He asked whether `packages/` is the best way;
I kept it because it matches social-knowledge-service and the house
modular-architecture rule (each package extractable to npm later).

## The data model (my write-up of his ECS pattern; full text in meta/)

- An **entity** is a file: `data/<path>/index.md` or `data/<path>.md`. Its
  **id is the path** (`tools/matsim`), which is also its URL. The folder tree
  is the one directed acyclic path per artifact he asked for; tags cover
  every other grouping. Assets (images, data) sit beside `index.md`.
- Frontmatter keys are **components**. Body is the entity's content.
- Base components every entity may carry: `about` (label, description,
  depiction, tags, view, pinned), `provenance` (sources, author, origin,
  created, updated, reviewed, status), `location`, `time`, `relations`.
- **Kind is a component, not a field**: an entity is a tool because it has a
  `tool` component. The starter kinds for this use case: tool, datasource,
  person, organization, book, website, article, guide, term, usecase,
  question, event, story, flow. A kind component may be empty.
- **Relations** are `{predicate, target}` pairs on the entity, with the
  predicate vocabulary declared in `meta/`; reverse links are computed.
  Separate edge entities are allowed for relations that need their own
  provenance. This is the "relationships table or on the object" question
  from his DESIGN.md answered pragmatically: both, object form by default.
- `status` is the publish gate: draft, proposed, public. The production
  build shows public only.
- Storage is separate from the model: the loader is the only thing that
  reads files, so Mongo or a server can replace it behind the same API.

## The store API (packages/knowledge)

```js
import { openStore } from '@twins/knowledge'
const store = await openStore('data')
store.get('tools/matsim')
store.find({ kind: 'tool', tag: 'open', domain: 'water', text: 'flood', limit: 20 })
store.children('tools')          // the section listing
store.related('tools/matsim')    // forward and reverse, grouped by predicate
store.recent(20)
store.validate()                 // problems, never throws
store.exportMachine(dir)         // llms.txt, index.json, graph.json, m/<id>.md
```

## The site

- One catch-all route. The page loads the entity for the path, reads
  `about.view`, and composes the body from that view: `home`, `prose`
  (default), `list` (a section), `recent`, `domain`, with `map` and
  `timeline` as named but empty slots. Header and nav are small floating
  elements, per house UX.
- Home is `data/index.md` with his header, tagline, intro paragraph and
  pinned list, verbatim from the brief.
- The ten-domain key, symbols and colours carry over from v1.

## Decisions I made that are his to overturn

- Name on the page: "Digital Twins Wiki" with his tagline "Cities,
  infrastructure, populations and ecosystems", straight from the brief.
  "decision models for watersheds, cities, and bioregions" is kept in the
  data as an alternative.
- The five pinned titles exist as drafts with no body; nothing is invented.
- Tailwind this time (v1 skipped it).
- Contributors: a git flow first (fork, PR, or direct commit for Steve Coy),
  because it needs nothing built. attest.monster sign-up with edit grants is
  the second step and his call.

## First build, this entry's scope

meta/data-design.md; packages/knowledge with loader, validator, query and
machine export; the 64 v1 entries migrated by `tools/migrate-v1.js` into
`data/`; the site with home, section, entry, recent and domain views;
screenshots in both themes. Not done: agents, comments, map and timeline
views, any new research. Nothing deployed.

## Done, same day

Built and checked as scoped above. `npm run check` reports 98 entities, no
errors. `npm run build` prerenders 98 pages plus the machine door. Looked
at, not just fetched: home on phone in light and dark and on desktop, the
tools list, a tool entry, the water domain, the flow, recent. Screenshots in
`shots/` (ignored by git). Two things fixed on sight: domain symbols are
tinted their own colour and vanished on a same-colour tile, so tiles are now
page wash with a coloured bar; and the flow's yes-link ran into its note.

Not deployed. The deploy script now syncs `packages/site/dist` and takes
`SHOW=public` for a production build; the staging VM still serves v1 until
he says otherwise. The snap Chromium failed silently again; Playwright's
Chrome did the shots.

## 2026-10-17: his first review

Anselm: "This revision is feeling better." Changes he asked for, done:

- Table of contents floats at the left, open by default on wide screens
  and behind a button on phones, carrying the colophon; pages still never
  lay out around it. He wants the density of cyborganthropology.com: more
  directions to go from the first screen.
- Home intro replaced with his new text verbatim ("atlas of computational
  representations of the world").
- Pinned entries are one-line bylines: title, author, relative time, kind
  and status tags. No body text.
- Sections cut to the nine he listed plus Recent: Digital twins (real
  projects; folder `twins/`, kind `twin`), Engines (`engines/`, was
  `tools/`), Books, Events, Organizations, Articles, Guides, Data,
  Terminology. Questions, stories, people, sites, domains, flows and about
  are kept but out of the menu (`section.nav: false`). He wants things left
  a bit empty so others feel invited to contribute, through GitHub for now.
- Cards show a thumbnail when an entry has a depiction, for book jackets
  with real art.

Open: the repo is private, so the GitHub link in the sidebar 404s for
anyone else until he makes it public or invites them. Several entries under
Engines are twins, not engines (Virtual Singapore, Helsinki / Bologna) and
should move to `twins/` when they are rechecked.

## 2026-10-17, later: public repo, twins moved, art, welcome, recent lines

- Repo anselm/twin-compendium made public on his say. That publishes the
  devlog too, including his brief and the names in it.
- Virtual Singapore and Helsinki / Bologna moved from `engines/` to
  `twins/` with the `twin` component and the domains their own text names.
- Art: where an entry has no depiction of its own, cards show its first
  domain's symbol at 48px in the domain colour, following the survey's
  visual grammar. Real book jackets and project images still have to be
  found and credited one by one; nothing invented.
- "Welcome to the Digital Twins Wiki!" opens the home body, the pattern he
  likes from cyborganthropology.com.
- Recent is one-line wiki links like Start here, on the home page and on
  the Recent section; pinned entries are kept out of Recent.

## 2026-10-17, evening: Bay Layers backdrop, digitaltwins.wiki

- Anselm built https://github.com/anselm/bay-area-twin ("Bay Layers"), a
  Three.js portrait of San Francisco Bay as four layers on shared
  geography, with a `?backdrop=1` mode made for this wiki. It is now the
  home page's band: the title and subtitle sit over it in the scene's own
  colours. The band is data, not code: the home entity carries a
  `backdrop` component (src, entry, credit) and the scene has its own
  entry at `twins/bay-layers` (proposed) with a poster still taken from
  the live scene and the mapped-versus-illustrated caveat from his README.
- Weight: backdrop mode downloads about 7.5 MB of gzipped geometry plus
  Three.js, so the prerendered page carries only the poster; the live
  iframe is mounted after load on screens 768px and wider that do not ask
  for reduced motion. Phones get the still. Credit line under the band
  carries the OpenStreetMap attribution the ODbL requires, since backdrop
  mode hides the scene's own sources panel.
- He bought digitaltwins.wiki. Cloudflare holds the zone; CNAMEs for the
  apex and www now point at twinguide.exe.xyz, but the domain's
  nameservers had not propagated at the time of writing, so
  `exe.dev domain add` refused. Rerun
  `~/projects/2027/harness/bin/exe-domain twinguide digitaltwins.wiki`
  once `dig NS digitaltwins.wiki` answers.
- He asked OpenAI to mine his recent LinkedIn posts; the result is
  `~/openai-linkedin-scrape.tar.gz` on canada1: 120 catalogue records from
  150 feed blocks, 44 with primary-source verification, with posts,
  relationships and a source audit. Next: import it as drafts.

## 2026-10-17, night: digitaltwins.wiki live on staging; LinkedIn catalogue imported

- https://digitaltwins.wiki and www now serve the staging VM (twinguide):
  Cloudflare CNAMEs plus `exe.dev domain add`, done with the harness
  `exe-domain` tool once the registrar's nameservers propagated. Still
  noindex, still `SHOW=draft,proposed,public`.
- `tools/import-linkedin.js <outputs-dir>` turns the OpenAI catalogue into
  entities: 115 new drafts and 4 merges into hand-written entries
  (CityCompass, AlphaEarth, WeatherNext, World Labs Atlas), the catalogue's
  own record about this wiki skipped. Mapping: catalogue kind → our kind
  (twin, tool, datasource, term, organization, article, story); its
  application domains → our ten domains; its relationships → declared
  predicates where one fits; its evidence links, unopened leads and
  LinkedIn short links → sources, titled by how they were found. Every
  import carries an `import` component (catalogue id, family, priority,
  verified flag, post ids, visible posters) so a rerun overwrites only
  what it wrote. The catalogue itself and the LinkedIn export stay out of
  the repo: they quote other people's posts verbatim. The tarball is
  `~/openai-linkedin-scrape.tar.gz` on canada1.
- Status is draft throughout. Production (`SHOW=public,proposed`) shows
  none of it until a person promotes an entry; that is the review step.
  The 28 the catalogue marked high priority are the place to start.
- The checker now fails on a source url without a scheme, after a bare
  `goo.gle/...` token rendered as a page of this site and broke prerender.
