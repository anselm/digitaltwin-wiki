# Things Anselm wants to model, and three scales

Anselm, 2026-10-20, handed over his list of simulations he wants to build,
with the question of what to do with it. His own options: log it (this
entry); turn the items with clear citations into question pages; or write
a post about recent issues that look modellable. He also noticed that the
topics sort into three scales: local (a city's traffic or zoning),
bioregional (the Strait of Hormuz, debatably), and macro or planetary
(CO2). The wiki has nothing that carries that axis today.

Nothing below has been read from its page in this session. The one-line
notes are Anselm's; the scale and the "lands as" column are Claude's
guesses from the link and the note, to be redone when each page is read.
The X links are posts, not sources; each needs the page behind it before
it can be cited.

## The list, as given

Simulations he has built or started:

- hormuz.exe.xyz, "quickly built out, needs work"; related news he filed:
  dw.com on Houthi attacks and Red Sea islands (a/79263838).
- colorado.exe.xyz, on the site as the story "Who Drinks the River?".
- Rio Grande, as a sibling of the Colorado piece (colorado.exe.xyz/essay.html).
- His own essay, youtube.com/watch?v=ibgt7Mbw2tE.

Issues he wants to simulate:

- Freshwater mussels dying across America
  (scientificamerican.com, "the baffling ecological disaster...").
- The Great Lakes as a non-renewable resource (earth.com).
- Alberta strychnine.
- New World screwworm (meatinstitute.org).
- England's water crisis (x.com/gaurav_kochar, 2093986548966686934).
- A power plant simulation seen on X (x.com/wang_seaver, 2096345469236736150).
- Weather simulations on X (x.com/tom_r_andersson, 2095541364838580435).
- "Rhetoric versus reality" (x.com/Electroversenet, 2094153183262384508).
- Two land-conservation cases via spacedaily.com: Ted Turner's Flying D
  ranch in Montana (cattle and fencing removed), and a former Patagonia
  chief executive's Argentine land handed to the state with a 99-year
  protection clause.

Marked "orbital essay", meaning a piece for the implementation side:

- Rio Grande: sfreporter.com, "the clock is ticking for New Mexico to cut
  Rio Grande water", and x.com/marconeats 2082966973529370716.
- Hartman, Colorado, a town abandoned over water
  (theguardian.com, 2026-08-01).
- Gibraltar (x.com/LiseSantolini 2083131620542775616).
- The Jones Act (x.com/cremieuxrecueil 2082967890798547408).
- Tariffs, sanctions and trade deals (x.com/yumahey 2081473121953911112);
  US tariffs on aluminium as self-penalty (x.com/Microinteracti1
  2080542899393941869).
- Hormuz side effect: idle ships as nurseries for invasive marine species
  (x.com/GeoffreyLean 2080338107363176705; timesofindia.indiatimes.com
  articleshow/132576193; x.com/shanaka86 2079209378931179709), and from
  there food security in Bangladesh and elsewhere (x.com/yohaniddawela
  2074802316054593856).
- A PNAS paper, doi 10.1073/pnas.2528622123 (subject not noted).
- Floating solar panels on a Chilean island (ecoportal.net, 28686).
- Restoring Ross Island to curb bacterial blooms in the Willamette
  (streetroots.org, 2026-07-08).
- Digital Reefs (digitalreefs.org), now an engine entry on the site.
- Collapse of the Amazon soy pact (x.com/yourvoiz_org 2078417316170137794).
- Israel's early-1900s pine planting and the native habitats lost under it
  (timesofindia.indiatimes.com articleshow/132157145).

## Three scales

The axis Anselm noticed, applied to the list by guess:

| Scale | Items |
|---|---|
| Local: a town, a river reach, an island | Hartman; Ross Island; Chilean floating solar; Gibraltar; the Flying D; the Argentine reserve; Israel's pine hills; a power plant |
| Bioregional: a basin, a sea, a strait, a herd range | Colorado; Rio Grande; Great Lakes; England's water; Hormuz and its shipping; the invasive-species side effect; screwworm; mussels; Alberta strychnine; Amazon soy |
| Macro: trade, climate, planet | Jones Act; tariffs and sanctions; weather models; rhetoric versus reality; Bangladesh food security |

Observations on the axis:

- The site's `scale` field on twins already takes words like city and
  region; the three-scale vocabulary could become its values, and
  questions and stories could carry it too. That is a schema change and
  is Anselm's to decide. It would give the home page a second door beside
  domains: "my street, my watershed, the planet".
- The interesting items sit on the seams. Hormuz is a strait (bioregional)
  whose closure is a trade event (macro) with a biological side effect
  (invasive species, bioregional again) and a food-security tail (macro).
  A single model does not do that; a chain of models with hand-offs does,
  which is the "no one tool" guide's point.
- Most of the "orbital essay" items are macro, and the wiki's engines
  shelf is thinnest exactly there: trade, sanctions, shipping. System
  dynamics and agent-based tools cover it in principle (En-ROADS,
  Mesa-type engines), and no entry on the site says so.

## Where each would land on the wiki

By the rules in `20261015-principles.md` and the patrons entry:

- **Question pages** for the ones that are a question someone brings to a
  model and that have a page to cite: water in the Colorado and Rio
  Grande (one basin-allocation question, two cases), England's water,
  the Great Lakes, mussels, screwworm, the Hormuz chain. Each page
  splits the question, names the engine kind, the data, and what to do
  without a model. Mussels and screwworm would be the site's first
  ecology-of-disease questions and have no engine on the shelves yet.
- **Stories** only where a model let someone see something: Colorado is
  already one. Hormuz becomes one once hormuz.exe.xyz is in a state to
  be cited. The rest are events, not stories.
- **A post** of the kind Anselm suggested, "recent issues that can be
  modelled", is legitimate as an article if each item is a citation and
  the article's claim is only that a model of this kind would apply.
  That keeps the alarm one layer down, the rule arrived at on the 20th
  (see the reading-list entry). It is cheaper than seven question pages
  and could be written first, then mined for them.
- **orbital** keeps the essays. A built simulation comes back here as a
  twin entry and a story.

## What was done the same day

Anselm chose the post. Fourteen of the links had a readable page (the PNAS
paper through its Crossref abstract; the Meat Institute page through the
PDF it links). One agent per page extracted what the page states, with
the question and model kind marked as its own judgment; a second agent
refetched the page and refuted the extraction. Every one of the fourteen
came back with corrections, mostly hedges the first reader had dropped
("may have replaced", "could rise", "Haag estimates"), which is the same
lesson as the reading-list run. The article is
`data/articles/places-with-a-question.md`, twelve items (the Hormuz ships,
the Red Sea islands and Harvest2Market fold into one chain), arranged by
the three scales above, draft.

Dropped: the X posts with no page behind them (Gibraltar, the Jones Act,
aluminium tariffs, EU biomass, England's water, the Rio Grande wetlands
reply), and the Amazon soy pact, whose phys.org page refuses non-browser
fetches. The X posts that pointed at tools were already on the site
(WeatherNext) or wait for a maker page (Power Network Tycoon, Portolan),
and one, the Bangladesh thread, led to NASA Harvest's Harvest2Market
page, which could be a tool entry on its own.

## Next

- Anselm decides whether the three-scale axis becomes a field, and which
  of the twelve become question pages.
- Before either, each link above is read from its page, and the X posts
  are traced to a page or dropped. The reading-list pipeline of the 19th
  (draft from the page, refute against it) applies unchanged.
