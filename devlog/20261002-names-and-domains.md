# 2026-10-02 — names and domains

Point-in-time entry, fifteenth of the day. Written by Claude. Anselm will
pick a name and buy the domain; then build, test, and deploy to exe.dev.

## Method

35 candidate domains checked on 2026-10-02 through RDAP (rdap.org) and a DNS
lookup. "Not found" means no registration record and no DNS. It does not
mean the registrar will sell it at the ordinary price: short names on
`.guide` and `.place` are often priced as premium, and some are reserved. I
did not check prices or trademarks. One web search for "Model Your Place" /
"modelyourplace" / "place twin" as an existing product or organisation name
returned nothing using those names.

## Results

Not found (likely available):
modelyourplace.org, modelyourplace.com, modelyour.place, modelmyplace.org,
modelaplace.org, twinsofplaces.org, placetwin.org, placetwins.org,
placetwins.com, twinguide.org, twinfieldguide.org, twins.guide, twin.guide,
digitaltwin.guide, placetwin.guide, twincommons.org, commontwin.org,
twincompendium.org, twinatlas.org, twinalmanac.org, placelens.org,
seeyourplace.org, placemodels.org, placemodel.org, howtotwin.org,
twinyourplace.org, mirrorplace.org.

Registered: civictwin.org (2026-05-01), civictwins.org (2025-12-23),
opentwins.org (2023-11-15), knowyourplace.org (2024-01-02),
livingmodels.org (2026-03-28), twins.wiki (2020-08-10), twin.wiki
(2026-08-16), placewise.org (2007-11-12).

## Shortlist and reasoning

1. **Model Your Place / modelyourplace.org.** My pick. It is the working
   title, it is an instruction, and it describes what the reader came to do
   in words a farmer would use. `.org` suits a civic resource. "Digital twin"
   is absent from the name, so the descriptor line and page titles must
   carry the search term.
2. **Place Twins / placetwins.org.** Keeps "twin" in the name and gives the
   guide a plain coinage for its subject: a place twin is a digital twin of
   a place. That is a term the site could come to own. Less of an invitation
   than the first.
3. **twin.guide** or **twins.guide.** Shortest, and says what it is. Likely
   premium-priced; unchecked. Reads as a guide to twins in general, which
   includes factory and product twins the guide does not cover.
4. **modelyour.place.** Clever and short. An unfamiliar ending is a small
   obstacle for a non-technical reader typing it from a flyer. Good as a
   redirect to the first if cheap.
5. **seeyourplace.org.** Closest to "helping people see better". Too vague
   alone; it could be a mapping or tourism site.

Set aside: anything with atlas or almanac (wrong promise), commons
(insider word), compendium (stiff), civictwin (taken, and a near-namesake
registered this year is worth a look before using "civic twin" as a phrase).

## Deploy

exe.dev, staging first, per the exe-dev-ops skill. Nothing is deployed and
nothing is pushed. A VM name is needed; the chosen site name would set it.
