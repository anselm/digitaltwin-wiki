# digitaltwin-wiki (folder: twin-compendium)

Project-specific orientation only. House policy (devlog, git, UX, writing,
deploy) comes from the harness and is not repeated here.

## What this is

A free, open reference for people who build digital twins of places (cities,
watersheds, regions): a catalogue of tools and techniques, a playbook for
building one, worked cases and reusable material, readable by people and by
their LLMs. Intended as a civic good for practitioners, not a sales site.
Seeded from Anselm's survey draft at
https://digital-twins-survey.anselm52491.chatgpt.site. Staging at
https://digitaltwins.wiki; the plan of record is `devlog/20261015-do-over-plan.md`.

Three things Anselm said on 2026-10-18 that shape every choice here:

1. It is an evergreen site of real resources real people can use to build
   models of their own issues; some readers are not technical. It showcases
   best practices and illuminates the space; it does not try to cover every
   mention.
2. The space is too big for a person to track, so external news (the
   scanner, the inbox) is fuel for the wiki, not the product.
3. "Digital twin" is his shorthand for models and simulations of places in
   general. Do not fixate on the phrase in web copy, labels or searches.

## Where things are

- Code: this folder. Repo: `anselm/digitaltwin-wiki` (renamed from twin-compendium on 2026-10-18; the local folder keeps the old name).
- Principles, the bar an entry must clear, and how to write one:
  `devlog/20261015-principles.md`. Who the site is for, as stories:
  `devlog/20261018-patrons.md`. The data model:
  `devlog/20261015-data-design.md`. Read them before writing or promoting
  anything. There is no `meta/` folder; thinking goes in dated devlog
  entries, revised in place.
- Devlog: `devlog/` (dated entries; read the tail first).
- Deploy: see `project.toml`.

## Tools, and when to run them

Policy (Anselm, 2026-10-23): the site keeps a set of rerunnable tools, and
anyone changing it, person or agent, uses them rather than doing the chore
by hand. After changing or adding entries, run `npm run after` (the corpus
check, then each changed entry's prose tells and how it will look as a
shared card) and fix what it raises before committing. Every tool is in
`tools/` with its usage in the first lines:

- `npm run check`: the corpus check (frontmatter, relations, links that go nowhere).
- `npm run after [files]`: the after-edit pass above.
- `node tools/tells.js [--file f]`: machine-prose tells, site-wide or for one entry.
- `npm run share`: preview cards for every page and Vitals series, sitemap.xml, robots.txt; reports pages that will share poorly (`SHARE_REPORT=1` lists them). The build runs it.
- `npm run vitals`: refetch the Vitals series. The deploy runs it.
- `node tools/fetch-depictions.js`: a picture for entries without one, from the maker's own page.
- `node tools/coverage.js`: someone else's list against our entries.
- `node tools/scan.js`: new items from known sources into `inbox/`.
- `deploy/deploy.sh`: builds from the last commit only, so uncommitted drafts never go live.

Status and priorities are shown at `/todo/` (in the New group of the
navigation, kept out of search); open items live in `todo.md`, which
that page also shows.

## Project-specific facts

- No redirects (Anselm, 2026-10-24: "its ok to hard switch over still -
  lets get it right before it is popular"). When an entry or shelf moves,
  move it and rewrite the links; do not leave a stub at the old address.
- The site is non-commercial forever (Anselm, 2026-10-26: "digitaltwins.wiki is non commercial forever - we can use images"). Non-commercial licences such as CC BY-NC are fine for pictures and data; carry the attribution in `about.depiction_credit`, which renders under the picture.
- The Sensory landscape domain (`sensory`) is what people sense in a place:
  sound, noise, light, air. It is not sensors, machine vision, 3D capture
  or scene formats; those are `places` (or the domain of what they look at).
  The 2026-10-17 LinkedIn import read it as "sensing" and misfiled sixteen
  entries, corrected 2026-10-24.

(APIs, credentials locations, quirks, anything a fresh session must know that
is not derivable from the code)
