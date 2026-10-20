# To do

One list for the project, kept current. Decisions and reasoning live in
`devlog/`; this is only what is open and who it waits on. Cited from
`README.md`.

## Anselm's

- Read the ten use-case pages and nine guides for the first patron's ear;
  promote or send back.
- Promote entries by section: engines first, then data sources, books,
  twins.
- Write the four bylined articles (seeds in the survey's appendices D to G,
  `archive/v1/seed/Digital-Twins-Industry-Survey.md`): what is a digital
  twin; are there whole systems models yet; the limits of reason; the
  ecological frontier.
- Decide the chrome: the site name, the twins label, the home text.
- Decide whether to drop noindex and the staging badge on digitaltwins.wiki.
- Ambassadors: real people to stand for a patron path, if any.
- Export the ChatGPT guide site (sign-in only) before deleting it, if there
  is anything in it beyond the survey.

## Agent work, when asked

- Mary's tools from their own pages: i-Tree, ENVI-met, PALM-4U, UMEP; and
  A/B Street for Ben.
- The "there is no one tool" guide.
- Ontologies shelf: more papers and observations on how models cut up a
  place (Anselm, 2026-10-19, expects to add them); each from a page read,
  bar as in `devlog/20261018-patrons.md`. Whether engines get a `layer`
  field, and whether twins name their four parts, is in
  `devlog/20261019-stack.md`.
- ontology.monster is drawing itself an SVG icon (Anselm, 2026-10-19); when it
  exists, fetch it beside the entry as `depiction`. Cards without an image
  now show an empty box so lists align.
- Reading list of 2026-10-19 (`inbox/2026-10-19-reading-list.md`):
  retry OpenGridWorks and the IOP wildfire paper with a headless browser;
  the fourteen X-only items need a maker page before they can be entries.
- Things Anselm wants to model (`devlog/20261020-things-to-model.md`): the
  post is written (`articles/places-with-a-question`). His call whether
  local / bioregional / macro becomes a field, and which of the twelve get
  a question page. Harvest2Market (NASA Harvest) could be a tool entry;
  the Amazon soy pact page (phys.org) needs a browser fetch.
- Forests 2030 (`articles/forests-2030`, `devlog/20261020-forests-and-destine.md`):
  the PDF is a local copy because LinkedIn's link expires; when Wild
  Heritage publishes it, point `article.url` at their address. PRIMA, the
  mapping app the post promises, has no page yet. forestregimemap.net was
  unreachable; retry for a data source entry. The Rogers et al. 2022 paper
  on ecosystem integrity could be its own article entry.
- Organizations (Anselm, 2026-10-20): only nine entries, but 122 distinct
  maker sites stand behind the tools, data sources and twins. The `made_by`
  predicate exists and is unused. His call on a landscape view of makers
  sized by the entries behind them; see the devlog entry above.
- Inbox `inbox/2026-10-20-links.md`: Google and Working Trees silvopasture
  in Brazil, read as fuel for the land-use-change use case, not an entry.
- kepler.gl: the home page is a script shell; find a readable page (docs or
  the repository README) and rewrite the body.
- Retry the eight YouTube channel feeds on a quiet day.
- Move `tools/import-linkedin.js` and `tools/fetch-vitals.js` onto `store.put`.
- Prune or extend the search vocabulary in `data/sites/index.md`.
- Scan-only cron, and a daily vitals refetch and redeploy.
- Fuel for later, noted by Anselm 2026-10-18: a great many people are
  trying to explain digital twins with layered pictures, which is what
  inspired the Bay Layers scene on the home page. An image search for
  "several layers digital twin" shows the genre:
  https://www.google.com/search?udm=2&q=several+layers+digital+twin
  Possible uses: a terminology entry on the layered-diagram convention, or
  credited examples beside the Bay Layers entry.

## Done

See the tail of `devlog/`.

## Prose (2026-10-20, from the adversarial reading; devlog/20261020-prose-tells.md)

- Anselm's call: a site-wide rewrite pass, template residue first (status stamps, shelf-filing closers, absence sentences), then read-then-refute per entry with `node tools/tells.js --file` as the brief.
- Gate every new draft on `tools/tells.js` and the heckler inside the drafting workflow.
- Site: the page prints the description as a dek and 42 bodies open by repeating it; either the dek goes or the opener must start where the dek stopped.
- Unopened technical terms in 164 files: no regex; needs a reader pass with the non-technical patron in mind.
