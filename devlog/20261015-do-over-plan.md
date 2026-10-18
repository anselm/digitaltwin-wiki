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

## 2026-10-17, late: the imported entries rewritten from their sources

Anselm: "the literal quotes are not useful - the goal is to build a digital
twins resource or wiki." The imported entries read as catalogue records:
post paraphrases, "Caveats", "as the catalogue judged it", "seen on
LinkedIn". So:

- `meta/curation.md` now says how an entry is written: what it is, who
  makes it, where it applies, how it runs, status; nothing about how we
  heard of it; only facts a listed source states; sources are pages
  actually read, titled as they title themselves.
- `tools/resolve-links.js` turned 85 of the 100 LinkedIn short links into
  their real targets (LinkedIn's interstitial page carries the
  destination); 15 would not resolve.
- Ten agents, one per batch of about twelve files, read every source and
  rewrote the entries to those rules, with the order never to invent a
  fact. Each returned a report. Result: 77 entries rewritten with real
  maker pages as sources; 21 had no readable source at all (nothing but
  a LinkedIn post, or a maker site that is an empty JS shell); 17 were
  rewritten but are plainly off-topic for twins of places and ecosystems
  (enterprise data-governance layers, robot motion retargeting, a plasma
  operator, a clinical sensor model, identity protocols, an AR drama).
- The 38 sourceless and off-topic entries were deleted; their catalogue
  ids are in the importer's skip list so a rerun does not bring them
  back, and they are recoverable from git (commit before this one). Two
  of them the catalogue had rated high priority: OSMosis (BVR's tool, no
  page found) and Cedar Vista (site is an empty shell). Worth a lead
  file if Anselm knows where they live.
- Nine entries moved to the folder and kind the sources support: Coastal
  Assembly and GLORIA to organizations; friGIS and Wildflow Coral to
  engines; the Planetary Berlin workshop and two calls for papers to
  events; GeoExpertQueries and GeoKTools to data sources. Relations were
  retargeted.
- Things the agents found that the catalogue had wrong or unsupported,
  now fixed: BoundlessNYC is now called Valdrada; Google's unnamed
  hydrological framework is OpenHydroNet; several claims (a Bouquet Fire
  example, a Colombia pilot, a "new GPU engine", Three.js pipelines,
  co-authors) appeared on no page and were dropped.
- Names of people who posted on LinkedIn remain only in the `import`
  component, not in the prose.

Counts after this pass: 176 entities. Engines 78, Data 15, Terminology 9,
Organizations 7, Articles 7, Digital twins 4, Events 3. All imports still
draft; promotion is Anselm's.

## 2026-10-17, later still: Books

Anselm: "can you find some books and fill out the books area". One agent,
briefed never to invent a title, author, publisher, year, ISBN or cover,
wrote twenty entries under `data/books/`, each verified on Google Books,
Open Library, Crossref or the publisher's page (MIT Press, OUP, Springer,
SAGE and others block fetching, so most rest on Google Books plus Open
Library). Threads: the origin (Mirror Worlds, 1991); city modelling
(Batty ×3, Forrester's Urban Dynamics); agent-based and geographical
simulation; system dynamics (World Dynamics, Limits to Growth, Thinking
in Systems); planetary modelling (Manual of Digital Earth, A Vast
Machine, The Weather Machine); recent edited volumes on urban digital
twins (2019, 2021, 2024, 2025); critical perspectives (Seeing Like a
State, The Smart Enough City). Thirteen have jackets from Open Library's
cover service; where Open Library only had a title-page scan the cover
was left out rather than faked. All draft.

## 2026-10-17, night: the figure blends in; no author on it

Anselm updated Bay Layers (interaction on by default in backdrop mode,
`bg=` page colour, `camera=` modes, a postMessage API) and asked that the
author be left off and the scene blend into the page instead of sitting
in a dark box. Now: the live scene mounts on every screen size (phones
too) unless reduced motion is set, with `bg=` set to the page colour for
the current theme (paper fafbf9, dark 0f1b1e); the prerendered still is a
pair of renders on those two colours chosen by a `picture` element; the
credit line names only the data sources; the Bay Layers entry has no
author field. On paper the scene reads as a translucent model, which is
what blending costs; dark is the scene's native look.

## 2026-10-17, late night: wiki feel

Anselm: names off the front-page links ("I wanted a wiki feel"); tags
back, colour coded; an off-white cream for light mode. Done: the one-line
entries show title, age, kind, domain chips in their domain colour, the
entry's own tags in a soft wash, and status; no byline anywhere on the
front page. Light paper is now cream (#f8f4ec, wash #efe9dc, line
#d8d1c3); the Bay Layers scene takes the same colour, so it blends. The
survey's original paper was #fafbf9.

## 2026-10-18, small hours: vitals

Anselm liked the vitals page on The Future Times (his
computational-journalism project, `scripts/etl-vitals.mjs` there) and
pointed at figure 1 of Ripple et al., "The 2026 state of the climate
report" (BioScience, 2026-10-14): sixteen planetary vital signs. The wiki
now has `/vitals`: the same six running series (CO₂ at Mauna Loa, global
2 m air temperature, global and Niño 3.4 sea surface temperature, Arctic
and Antarctic sea ice extent), drawn the same way (past years faint, the
1991–2020 mean in ink, this year in the accent, preliminary days dashed).

How it is built: `tools/fetch-vitals.js` is a port of the Future Times
ETL, writes `data/vitals/<id>.json` beside the Vitals entry, so the
machine export publishes the series at `/vitals/<id>.json` with source,
licence, citation, fetch date and sha256 of the raw download. The JSON is
committed (about 800 KB for six series) so a build never needs the
network; `deploy/deploy.sh` refetches before every build and keeps the
previous file when a feed is down. `packages/site/src/lib/vitals.server.js`
turns the arrays into SVG paths at build time; the view is
`views/Vitals.svelte`, chosen by `about.view: vitals`; a new base component
`vitals` carries the series order. The fetch date is the local date of the
box, not UTC, after a 2026-10-18 stamp showed up on the evening of the 17th.

Entries added, all draft: the BioScience report as an article (its
sixteen series listed from the figure; the figure itself stays with the
publisher), and three data sources it reads: Climate Reanalyzer, NOAA GML
Trends in CO2, NSIDC Sea Ice Index v4. The Vitals entry links to them with
`needs`.

Not done, Anselm's call: a cron that refetches and redeploys daily (today
the numbers move only when someone deploys), and a strip of the latest
values on the home page.

Also asked, not yet built: a page listing topics worth modelling, legacy
and new. The existing Questions section (`data/questions`, nav off, nine
entries) is the nearest thing; whether to grow it or start a Topics section
beside it is for him.

## 2026-10-18, small hours: sources and the scanner

Anselm, speculating: maintaining the wiki by hand (he notices a citation,
tells the session, the session writes the entry) will not scale; his
ontology.monster and matchmaker.monster scan media themselves. Two parts:
a collection of sources to scan, and the fetching of fuel. A cron cannot
spend interactive credits, so he is content to run an aggregator by hand
and have the interactive session do the reading and the writing. He also
asked for good sources, for a script that fetches them, whether to lean on
ontology-scraper, and for a database-like API over the file store.

Done:

- **Sources are entities.** A `website` entity in `data/sites/` that
  carries a `feed` component (`url`, `format`, `filter`, `match`, `terms`)
  is a source. Eighteen written, all draft: arXiv, OpenAlex, Zenodo and
  GitHub searches for "digital twin"; Hacker News and Google News searches;
  r/digitaltwin and #digitaltwin on Mastodon; Digital Twin Consortium,
  Digital Twin Hub, Living-in.EU, TU Delft 3D geoinformation, CityJSON,
  NVIDIA's Omniverse tag; GOV.UK, OGC, weeklyOSM and Smart Cities Dive with
  the topic filter. The Sites section is now in the nav (order 93) as
  "where news about digital twins comes from". Every feed was fetched and
  read before being written; probed and rejected: CDBB (feed ends 2022),
  Destination Earth (ends 2023), Bluesky search (403), Cesium, Bentley,
  Esri, Geospatial World, MDPI, Nature, Smart Cities World, GovTech, ECMWF
  (404 or bot wall), Semantic Scholar (429), a ScienceDirect journal feed
  that turned out not to be about twins. LinkedIn and X have no feeds;
  Anselm stays the sensor there.
- **`tools/scan.js`** polls every source (zero dependencies, its own
  tolerant RSS/Atom parser plus the JSON shapes of arXiv, OpenAlex, HN,
  GitHub, Zenodo), keeps etags and seen ids in `inbox/state.json`, and
  writes `inbox/<date>.md`: new items grouped by source, items that mention
  a place starred and first. `--all` ignores seen, `--only id` prints to
  stdout. It writes nothing into `data/`; the inbox is for a person or the
  interactive session to triage, which is the credit constraint Anselm
  described. First run: 18 sources, about 200 items in 30 days, a third
  starred. Noise is real: arXiv and GitHub twins of welding robots and
  shunt trajectories; the star is the first cut.
- **Write side of the store.** `store.put(id, {content, ...components})`
  and `store.patch(id, fn)` in `packages/knowledge`: the one write path,
  documented in `meta/data-design.md` under "Writing". The importer and
  the vitals fetcher still write files directly; moving them over is a
  chore for later.

On reusing ontology-scraper: its inhale layer is small (a feed-parser
dependency, Mongo, a worker, Readability extraction) and built for a
service with a database and LLM tiers. The wiki wants files, no daemon,
and a person in the loop, so the scanner was redone small here rather
than imported. ontology.monster could become a *source* for this wiki
later, if it exposes what it discovers as a feed; that is a cleaner
coupling than a shared library.

Not done, Anselm's call: promoting the sources; a `npm run scan` habit
before a session ("run the scan, then triage the inbox"); a cron that only
scans (no credits needed) so the inbox is ready when he sits down.

## 2026-10-18, small hours: rich media sources, and TimeLike

Anselm asked whether podcasts and video channels about digital twins and
large-scale modelling were being ignored. They were; the first eighteen
sources were all text. Every candidate below was fetched and its feed read;
dates are the newest item on 2026-10-17.

Added as draft sources, seven:

- **Digital Twin Hub on YouTube**: the weekly Gemini Call "Feature Focus"
  recordings (13 Oct 2026). The one steady spoken record of UK twin work.
- **ECMWF on YouTube** (13 Oct 2026), with the topic filter; busy with
  project deliverables, but DestinE items surface (sea-ice AI component).
- **Santa Fe Institute on YouTube** (31 Aug 2026), topic filter; the
  Complexity podcast itself ended December 2024.
- **The WeatherPod** (8 Sep 2026): Global Weather Enterprise Forum; its AI
  series has the DestinE episode with Irina Sandu.
- **The Flux by Epistemix** (11 Mar 2026): the only podcast found that is
  about agent-based modelling as such (Crooks, Epstein, Crabtree).
- **MapScaping** (1 Oct 2026) and **Geomob** (12 Oct 2026): weekly geo
  podcasts, each with its own `match` word list so only twin, 3D, city,
  flood and climate episodes come through. Geomob's Mike Batty episode on
  city modelling is exactly the kind of thing.

Podcast feed URLs came from Apple's directory search API
(`itunes.apple.com/search?media=podcast&term=`), which also returns the last
release date; that beats guessing hosts. YouTube channel ids came from the
`<link rel="canonical">` of the `@handle` page; the feed is
`youtube.com/feeds/videos.xml?channel_id=`. YouTube's feed endpoint answers
500 intermittently (the same URL gave 500, 200, 200, 500 within minutes), so
the scanner now retries once after four seconds. A second scan on the same
day now appends a "Later the same day" section instead of replacing the
morning's inbox file.

Looked at and left out, with reasons:

- YouTube feeds that answered 404 or 500 on three tries from here and once
  from another network although the channels exist and are active: Cesium,
  OGC, Destination Earth, Climate Change AI, FOSS4G, TUM GIS, Geo Week,
  Bentley. After about forty feed fetches in an hour YouTube began
  answering 404 for the feeds that had worked minutes earlier (DT Hub,
  ECMWF, SFI), so the endpoint rate-limits, and the eight above may only
  have been caught by that. Retry them on a quiet day before concluding
  anything. Digital Twin Consortium's and EUMETSAT's channel feeds answer
  200 with zero entries.
- Esri Events on YouTube: last upload November 2022.
- Smart City Expo World Congress on YouTube: live (Sep 2026) but promotion
  and interviews rather than talks; no.
- Connected Places (Connected Places Catapult podcast): last episode July
  2025. IOTICS Podcast: November 2024. Digital Twin Fan Club: three
  episodes, June 2024. buildingSMART podcast: November 2024.
- Future Digital Twin podcast (Sep 2026): live, but process-industry
  conference recordings (DEXPI, IDTA), not places.
- Digital Built Forum (Australia, Aug 2026), Project Geospatial (GEOINT
  interviews, Jul 2026), Geospatial FM (foundation models and equities,
  Oct 2026), Climate Reveal (general climate, May 2026), Earthly Machine
  Learning (NotebookLM-generated paper summaries, Sep 2026): adjacent, not
  added; the papers behind the last one arrive through arXiv anyway.
- ECMWF's "DestinE Digital Twin Dialogues" podcast: referred to on
  destine.ecmwf.int but no feed found in Apple's directory; the videos are
  on the ECMWF channel, which is covered.
- No dedicated digital-twin YouTuber or independent show was found; the
  field's spoken record is institutional (hubs, centres, congresses).

Also written, at Anselm's word ("Timelike.systems should be in this"):
`engines/timelike`, Steve Coy's event-driven simulation platform, from the
company's two sites, the Foresight bio and Anselm's 2026-10-16 essay on it.
The ResearchGate paper and the WIPO patent page are both behind bot walls;
the patent title is quoted from the company site, and neither is listed as
a source.

## 2026-10-18: "digital twin" is a synecdoche

Anselm, on the Sites section and the scanner: "too maniacally focused on
the word digital twins... It's just one term used to refer to models or
simulations. It creates alarm in the reader because it makes the reader
think we have an overly narrow focus and will not capture the general
domain well. I use the term digital twins as a synecdoche for a broader
topic."

He is right, and the labels were the loudest part: "arXiv: digital twin",
"GitHub: digital twin repositories" announce a keyword search. Changes:

- **A `vocabulary` component** on the Sites section entity
  (`data/sites/index.md`): nineteen phrases that stand behind the
  shorthand, from "urban simulation" and "agent-based model" to "earth
  system model", "flood model", "wildfire simulation", "land use model",
  "integrated assessment model", "participatory modelling", "geospatial
  foundation model". It is data: add a phrase there and every search
  widens.
- **Search feeds carry `{query}`** in their url and the scanner fills it
  with the vocabulary OR-combined in each API's syntax: `all:"…"` for
  arXiv, quoted phrases for OpenAlex, Zenodo, GitHub and Google News.
  GitHub allows five operators a query, so six phrases a request with a
  pause between; Algolia has no OR, so Hacker News gets one request a
  phrase. Google News ranks a nineteen-phrase OR query by relevance and
  reaches back to 2025, so it gets four phrases a request, which brought
  back NASA's new earth system model and a Seongnam city-model story that
  the single phrase never would have. Results are merged and deduplicated by url. All five APIs were
  tested with the combined query before the change.
- **The topic filter** for general feeds (GOV.UK, OGC, weeklyOSM, ECMWF
  and SFI on YouTube) is now built from the same vocabulary, loosely
  matched (hyphen or space, any ending), plus a few stems.
- Labels are now just "arXiv", "OpenAlex", "Zenodo", "GitHub
  repositories", "Hacker News", "Google News", with descriptions that say
  "matching the wiki's vocabulary". The Sites page says in prose what the
  shorthand stands for.

First run with the vocabulary over ten days: arXiv 43, OpenAlex 50,
Zenodo 25, GitHub 95 (SUMO, CESM, E3SM, the CliMA packages, a Vancouver
living atlas, a 3Di flood model of Hanoi). GitHub is now mostly student
traffic simulators; if that tires, `stars:>=3` in its url is the knob, and
it is data.

Memory: `digital-twin-is-a-synecdoche` (feedback) so no session narrows
the wiki to the phrase again.

## 2026-10-18: repos filtered for use, and the three principles

Anselm: "Let's filter much better on repos. Generally: 1) this site is
meant to be an evergreen site collecting real resources that real people
can use to build models of their own issues. Some of those visitors may be
technically ignorant. It's somewhat less that we want coverage of every
single thing and more that we want to showcase best practices, illuminate
the space. 2) because it is very hard for a human to track the space I feel
like consuming external news is helpful, provides fuel, and can help fill
out the wiki as a whole. 3) I happen to use the term digital twin, but we
don't want to fixate on that term on the web copy."

The three now sit in `CLAUDE.md` so every session starts from them.

Repositories were the noisiest source (ninety-odd in ten days, mostly
course work) and the one where "usable" is measurable. GitHub's search
accepts qualifiers alongside the OR phrases, tested: `stars:>=20
fork:false archived:false` with the six-phrase batch returns Mesa, SUMO,
legoESM, Valdrada; `created:>date stars:>=5` sorted by stars returns
tellux, Auto-ABM, Valdrada again. So two sources now:

- **GitHub: active projects**: twenty stars or more, not forks, not
  archived, most recently pushed first. The established tools as they move.
- **GitHub: new projects**: created in the last 120 days (`{since:120}`,
  a placeholder the scanner fills with the date), five stars or more,
  ordered by stars. What is new and already being used.

The scanner drops forks, archived and undescribed repositories regardless,
puts stars, licence, language, age and topics in the snippet, and orders
a source's items by stars when it has them. The inbox header now says what
triage is for: what a person could use to model their own issue, not every
mention.

Papers (arXiv, OpenAlex) stay wide; a new paper has no citation count to
filter on, and the star for place-related items is the only cut. If they
tire, OpenAlex can be limited to open-access articles in its url.

## 2026-10-18: patrons

Anselm: "Think about the big picture, imagine the typical guest, a student,
an employee at the city with a mandate, is the site useful for them? Or is
it completely overwhelming with noise and errata? We have to have a guiding
principle or rule that the site as a whole has specific kinds of patrons.
It is then easy to make decisions from that root understanding about what
is good enough or not."

Honest count of what a guest sees on staging today: 79 engines, of which
72 are drafts, most of them one-line imports from the LinkedIn catalogue;
26 feed sources in a nav section called Sites; 20 books, all draft; 10
guides, all draft, and they are the best thing on the site for the first
patron. Production (`SHOW=public,proposed`) would show about thirty
entries. So: staging is overwhelming and production is empty, and both are
the same fact, that promotion has not happened and the bar for it was never
written down.

`meta/patrons.md` now holds the rule: three patrons in order (the person
with a mandate, the builder, the practitioner keeping up), the bar an entry
of each kind must clear before it is promoted, and what follows (fewer,
better; plain words first; start by need, not by kind; everything cites).
`curation.md` and `CLAUDE.md` point at it. The Sites section is out of the
nav: it is the editors' plumbing, reachable but not a guest's business.

What this implies, for Anselm to decide:

- A promotion pass. I rewrite each draft that can meet its kind's bar from
  its sources, in batches by section, and he promotes; the ones that cannot
  stay draft or are deleted. Engines first, since that is where a builder
  lands; then data sources; then books. The guides and questions should be
  read by him for the first patron's ear before anything else is promoted,
  since they are the entry point.
- The home page's "Start here" becomes three doors by need rather than
  pinned entries by kind.
- The Engines list is grouped by what a guest is trying to do (model
  water, model traffic, model a city in 3D, run agents) rather than one
  alphabetical list of eighty. The `group` field exists for this.
- Production stays unpublished until the first door works end to end for
  the first patron: mandate, guide, question, a twin that did it, the
  engine it used, the data it needed.
