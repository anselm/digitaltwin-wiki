# Principles: the living meta entry

The one place the project's rules live. Started 2026-10-18, dated at the
do-over because that is when the current shape began, and revised in
place as principles arrive: Anselm back-injects new insight into earlier
entries so the devlog reads as a speedrun of the thinking, not a diary.
Each rule carries the date it was stated. The data model is its own entry,
`20261015-data-design.md`; the patrons are `20261018-patrons.md`.

## What the site is (2026-10-02, restated 2026-10-18)

A free, open, evergreen reference for people who build models and
simulations of places: cities, watersheds, regions. A catalogue of tools,
data and practice, worked cases, and guides, readable by people and by
their LLMs. A civic good, not a sales site. "Digital twin" is Anselm's
shorthand for the whole of it and is not leaned on in copy, labels or
searches.

## Three principles (Anselm, 2026-10-18)

1. It is an evergreen site of real resources real people can use to build
   models of their own issues; some readers are not technical. It
   showcases best practices and illuminates the space; it does not try to
   cover every mention.
2. The space is too big for a person to track, so external news (the
   scanner, the inbox) is fuel for the wiki, not the product.
3. "Digital twin" is shorthand. Do not fixate on the phrase.

## Actionable, evergreen, culled (2026-10-18)

A guest arrives with a problem and leaves able to do something about it;
the contrast is a curatorial, passive site. Evergreen means not today's
idea. Both mean noise is culled hard, and the measure of noise is the
patrons: which guest is this for, and what do they do next?

## The bar an entry must clear (2026-10-18)

Wikipedia's, not a per-kind test: factual and neutral; sourced from pages
actually read; written in the house voice, not under a byline; included
because a patron could use the thing or learn from it. Tags and domains
carry who it is for. Drafts are sketches and fine; production hides them.

## Writing an entry (2026-10-17)

Rules for anyone, person or agent, who writes or rewrites an entry in
`data/`.

**What an entry is for.** It describes a thing so that a reader can decide
in thirty seconds whether to look further: what it is, who makes it, where
it applies, what it does, and whether it runs. It is an entry in a
reference, not a review, not a news item, and not a record of how we heard
about it.

**The description.** One or two plain sentences, the kind a careful
colleague would say out loud. Name the maker if the thing is theirs. Say
what it does with a verb. Say the place or scale when the thing is about a
place. No adjectives about quality.

Good: "Open-source hydrodynamic model from Deltares for rivers, estuaries
and coasts; used for flood, sediment and water-quality studies."
Bad: "Procedural reconstruction joins municipal records with simulated
traffic, perception outputs and a CARLA-style interface."

**The body.** Short paragraphs, in this order, each only if there is
something to say: what it is and who makes it; what it is used for, with a
named example if a source gives one; how it runs (open or commercial,
hosted or installed, what data it needs); status (operational, pilot,
research, proposed, or unknown), with dates when a source gives them. Say
"unknown" or leave the paragraph out rather than guess. Never carry over
the sentences of a catalogue, a post or a press release.

**What stays out.** How the entry came to exist ("seen on LinkedIn", "the
catalogue judged"); that lineage lives in the `import` component and in
sources. Hedging about our own process ("not independently audited"); the
provenance status covers it. Marketing and superlatives, even from the
maker's own page. Anything not stated by a source in the entry's list.

**Fields.** Fill the kind's fields from the sources: `homepage` is the
maker's own page, not a news story. `place` and `scale` for twins. `form`
for engines in a few words: "open-source library", "hosted platform",
"research model". Tags are a handful of plain words a reader might search
for, not the vocabulary of whatever catalogue the entry came from.

**Sources.** Each source is a page that was actually read, titled as that
page titles itself, with its url. A short link, a search result or a page
that could not be opened is not a source. The maker's own page comes first.

**Provenance.** `origin: agent` or `human`; `reviewed` as the date read;
`reviewed_by` says who read the sources. Status stays `draft` until a
person promotes it.

## The record: three places, three readers (2026-10-20)

Three things record what happened to the site, and each has one reader.

- **`data/about/changes.md`** is for guests. One dated line per batch that
  changes what a guest can find: a new shelf, a run of entries, a page
  rewritten, a section moved. Written in the house voice, newest first,
  no process ("the refuter changed 27 files" belongs below), no entries
  that are still invisible on production. It is updated in the same
  commit as the change it records, so the two never drift.
- **`devlog/`** is for whoever works on the site next, person or agent:
  the reasoning, the misses, what is Anselm's to decide. Dated, revised
  in place while live.
- **git** is for the diff.

The Recent list on the home page and `/posts` is not a record; it is a
query over provenance dates and takes care of itself.

Vitals follow the same rule as the rest of the data: `deploy/deploy.sh`
refreshes the six series from their sources before every build and keeps
the previous series if a source fails, and each series shows the date of
its latest value on the page. There is no refresh between deploys, so the
page is as current as the last deploy.

## Machines propose, people promote (2026-10-02, house rule)

Agents write drafts from pages they read and say what they could not
find. Promotion to proposed or public is Anselm's, per entry or in batches.
Nothing invented: no fact, date, url, author or title that a source did not
state; "I guessed" when guessing.

## Where thinking goes (2026-10-18)

In dated `devlog/` entries, never in a `meta/`, `docs/` or capitalised root
file. Entries are revised in place to keep the story runnable; when one is
superseded, the new one names it.
