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

## Voice and style (Anselm, 2026-11-11)

The public statement is `data/about/style.md` (/about/style/), with its
sources; the research and reasoning are in `devlog/20261111-voice-and-style.md`.
These rules apply to every sentence written into `data/`, by person or agent.
What prompted them: Anselm read "answered so the easy ones can be set aside
and the hard ones reached" and "One thing belongs before all of them, because
it is plainer than anything that follows" as patronising and editorialising.
"It's not the core point per se but the grandiloquence of the phrasing."

The voice: a reference written by people who use the tools. Dry, specific,
level with the reader, the same pitch for a flood as for a file format. The
reader is an equal and draws the conclusion. Entries describe and take no
side. The few position pages on the About shelf state the site's view once,
give evidence, and concede what is true in the opposing case.

Stays out:

1. Announcements: a sentence that says what the next will do ("A note on
   method.", "One thing belongs before", "Three replies.", "What follows").
   Delete it and say the thing.
2. Grades in advance: "the plain answer", "the honest form", "the hardest
   objection", "the real question", "the best test case".
3. Verdict words: notably, clearly, of course, essentially, ultimately,
   indeed, importantly, simply, really, actually, honest.
4. Directions to the reader: "note that", "it is worth", "we must", "let's".
   Guides may use the imperative for their steps.
5. Rhetorical questions, except the questions people bring on use-case pages.
6. Closing morals: no kicker fragment ("One dimension, done well."), no
   maxim, no sentence restating the paragraph. End on the last fact.
7. Foils: "X, not Y", "not just X but Y", "Y rather than X", "It is not X.
   It is Y." Say what the thing is. Keep a contrast only when a named party
   holds the other view.
8. The page describing itself or the site speaking as a character ("This
   page collects", "this site says so plainly", "what this wiki wants").
9. Rhythm for its own sake: em-dashes, triplets for cadence, runs of
   sentences opening on It/This/That, equal-length sentences.
10. Polemic: charged nouns for motives (oracle, shadows, power), telling the
    reader how to feel, a closing call to action.

Goes in:

11. A claim that could be false in every sentence. Negate it; if nobody
    would assert the opposite, cut it.
12. The figure, year, place and unit instead of an adjective.
13. Who says so: measured, modelled, claimed by the maker, or guessed.
    Unknown is written as unknown. Only sources that were opened are cited.
14. Uncertainty once, where it applies. No blanket hedging.
15. One argument, once. A reason is not the conclusion reworded.
16. Metaphor only with the literal claim beside it.

Sentences: subject then verb soon, the action in the verb; known
information first, the new fact last; short words; active voice; a
technical term explained at first use; nothing over 45 words.

When editing a page for voice, keep every fact, number, link, footnote and
source, and keep Anselm's positions and his specifics; cut the wrapping.
`node tools/tells.js --file <f>` counts these shapes; it is a census, and a
quoted example or a real list of three is not a fault.

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
