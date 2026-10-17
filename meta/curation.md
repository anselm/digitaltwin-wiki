# Writing an entry

Rules for anyone, person or agent, who writes or rewrites an entry in `data/`.
The data model is in `data-design.md`; this is about the words.

## What an entry is for

An entry describes a thing in the digital-twins field so that a practitioner
can decide in thirty seconds whether to look further: what it is, who makes
it, where it applies, what it does, and whether it runs. It is an entry in a
reference, not a review, not a news item, and not a record of how we heard
about it.

## The description

One or two plain sentences, the kind a careful colleague would say out loud.
Name the maker if the thing is theirs. Say what it does with a verb. Say the
place or scale when the thing is about a place. No adjectives about quality.

Good: "Open-source hydrodynamic model from Deltares for rivers, estuaries and
coasts; used for flood, sediment and water-quality studies."
Bad: "Procedural reconstruction joins municipal records with simulated
traffic, perception outputs and a CARLA-style interface."

## The body

Short paragraphs, in this order, each only if there is something to say:

1. What it is and who makes it, in a little more depth than the description.
2. What it is used for, with a named example if a source gives one.
3. How it runs: open or commercial, hosted or installed, what data it needs.
4. Status: operational, pilot, research, proposed, or unknown. Dates when the
   source gives them.

Say "unknown" or leave the paragraph out rather than guess. Never carry over
the sentences of a catalogue, a post or a press release; say it in our words.

## What stays out

- How the entry came to exist: "seen on LinkedIn", "the catalogue judged",
  "posted by". That lineage lives in the `import` component and in sources.
- Hedging about our own process: "not independently audited", "not yet
  rechecked". The status line in provenance covers it.
- Marketing and superlatives, even from the maker's own page.
- Anything not stated by a source in the entry's sources list.

## Fields

Fill the kind's fields from the sources: `homepage` is the maker's own page
for the thing, not a news story about it. `place` and `scale` for twins.
`form` for engines in a few words: "open-source library", "hosted platform",
"research model". Tags are a handful of plain words a reader might search
for, not the vocabulary of whatever catalogue the entry came from.

## Sources

Each source is a page that was actually read, titled as that page titles
itself, with its url. A short link, a search result or a page that could not
be opened is not a source. Put the maker's own page first.

## Provenance

`origin: agent` or `human`; `reviewed` as the date read; `reviewed_by` says
who read the sources. Status stays `draft` until a person promotes it.
