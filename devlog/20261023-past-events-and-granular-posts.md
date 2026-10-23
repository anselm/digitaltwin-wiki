# Past events, granular posts, and the engine again (2026-10-23)

## What Anselm said

- He is thinking "more aggressively" about building his own digital twin
  again. He had funding for it before and found it too hard; machine
  learning may make it easier now. Earlier work: orbital.foundation, left
  up as a legacy site. His guiding principles: simulate.world (2015),
  "a very old thesis but it articulates my hopes and desires for this
  space; specifically using digital twins for macro issues."
- Howard Silverman, formerly at Ecotrust in Portland, may contribute to
  the site. He sent the SFI link below. Not listed on about/contributors:
  names go there only with the person's consent, relayed by Anselm.
- Track past events as well as upcoming ones, and extract any marrow.
- "I like a granular decomposition of artifacts generally": a news story
  about an event is its own post, not a paragraph inside the event page.
- "Our ultimate goal is to contextualize digital twin knowledge,
  expertise, and so on with an eye towards building our own - or
  empowering others to build their own."
- We do not use branches or pull requests in this repo. The Global
  Ecosystems Atlas PR (#1) came from instructions written by a session
  without this context; it is merged.

## simulate.world, read for the engine

Read on 2026-10-23 (the essay is dated 24 June 2015). The principles it
states, compressed: open and free; many models by many authors, no single
answer; shared curated data like Wikipedia, pre-filled for novices;
assumptions, weights and uncertainty open to debate; early models may be
rough, their job is to test ideas and expose egregious claims; simple
interfaces per audience; computation on people's own machines; decisions
stay with regional stakeholders. The model it hopes for is a bioregion or
watershed (aquifers, rivers, snowmelt, fish, land use, farming, energy,
economics) run forward in time, "a real world version of SimCity",
likened to participatory budgeting.

That list reads as a requirements sheet for the engine, and several lines
map onto what the wiki already holds: "shared curated data" is the
data-sources shelf; "pre-filled for novices" is what the free 10 m
embeddings (TESSERA, AlphaEarth, OlmoEarth) and maps such as ForTy and the
Global Ecosystems Atlas now make cheap.

## Done

- Events gain `starts` and `ends` (ISO dates; `ends` is the last day or
  the deadline). The Events list splits into Upcoming (soonest first),
  Past (latest first) and Undated, at build time. The three existing
  events were dated from their own entries.
- `events/sfi-digital-twins-for-complex-systems-2026`: the closed SFI
  working group, 28 to 30 September 2026 (Willcox, Ghattas, van Bloemen
  Waanders), from SFI's event page.
- `posts/sfi-building-better-digital-twins`: SFI's story of 22 October
  2026, as its own entry, `about` the event.

The marrow, for a model of a place: the strict definition (a model that
keeps updating from the real thing, data both ways), trust and
validation as the gate to adoption, and "how much detail is enough". A
question page on that last one would serve non-technical readers; not
written yet.
