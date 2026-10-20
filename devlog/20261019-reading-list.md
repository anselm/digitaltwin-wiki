# A reading list as fuel: thirty entries from saved links

Anselm, 2026-10-19, handed over a blob: 478 saved links from his Chrome
reading list and X bookmarks, catalogued by a separate tool with topic
tags, with the note that some of it is fodder, some unrelated, and some
of it digital-twin material that may extend the wiki. The house rule
applies: external news is fuel for the wiki, not the product, and an
entry is written from the maker's page, never from a post about it.

## What was done

Triage by hand first. Of the 478 records, 71 carried the "digital twins
and simulation" tag and about as many again were maps, data or
environment items. Five were already on the site (EDITO, AIFS,
WeatherNext, the Cornell tree map, HELICS/FMI). Fourteen had only an X
post behind them and no maker page in the list; with no searching
allowed they wait (`inbox/2026-10-19-reading-list.md`). Everything
about trading bots, agent-orchestration tutorials, hustles, health and
politics was left where it was. That left 31 candidates, each with the
page to read.

Then a two-stage fan-out, one agent per candidate: a drafting agent read
the maker's page and at most two more on the same site and wrote the
entry under the principles; a second, fresh agent refetched every source
in the file and tried to refute it, deleting or softening anything the
page did not say, rewriting any near-verbatim sentence, and removing
marketing or process lineage. The refuting agents changed something in
27 of 29 files: a WHOI "project" became "hosted at WHOI", "ecological
surveys" became "ecology", an exhaustive-sounding partner list got
"include", and so on. Eleven near-verbatim sentences were caught and
rewritten. Two candidates produced nothing: OpenGridWorks sits behind a
Vercel bot challenge and the IOP wildfire paper behind a captcha; both
are noted in the inbox for a retry with a real browser.

Twenty-nine entries, all drafts, all `reviewed_by` saying what was and
was not read. Two existing entries gained a paragraph from a new page
(AIFS: how to run it yourself; Odyssey: Agora-1).

## What landed where

- Ontologies (4): Google's Open Knowledge Format; City2Graph; the Earth
  Commission's safe and just boundaries; a 2019 smart-city ontology for
  Mediterranean cities. The shelf now has eight entries, from two
  yesterday.
- Engines (7): Digital Reefs, Mycosoft Earth Simulator, 3Dtrees.earth,
  Cool Cities Lab, MiroFish, Bmap, Extend3D.
- Presentation (2): forge3d, GeoLibre.
- Data (5): Global Nature Watch, Bioregioning Earth, STRATA-SCREAM, US
  Energy Data, CADI.
- Mandates (1): the Kunming-Montreal Global Biodiversity Framework,
  which the existing 30 by 30 entry is one target of.
- Articles (10): papers and explainers that give a reader something to
  use: a method for reading climate ensembles (Bevacqua and colleagues),
  Agrimate, the Thwaites ISSM calibration, WildCity, LLM-UTP, the North
  Carolina ghost-forest mapping, Ritchie on the Living Planet Index,
  Copernicus Marine on ocean forecasting, C3S on making charts, and the
  Climate Central attribution of extreme water levels.

Cool Cities Lab is the first tool on the site that answers Mary's
question directly (what would more tree cover do to heat); the
patrons entry should be re-read against it.

## Observations

- The refute stage earns its cost. The drafting agents were careful and
  still every file had something the page did not quite say. A single
  agent grading its own draft would not have found these.
- Bot walls are now the main source of missing entries, not thin pages:
  IOP, Science, the Lancet, phys.org, UNEP and Vercel-hosted sites all
  blocked curl. A headless-browser fetch step is the next tool.
- Three sites were single-page apps with no server-rendered text
  (3Dtrees.earth, Global Nature Watch, the Mycosoft simulator page); one
  agent rendered them headlessly and said so in `reviewed_by`.
- Papers now outnumber everything else among the day's additions. The
  bar from the patrons entry held: each gives a model, data, code or a
  method with a worked case.

## Open

- OpenGridWorks and the Canadian wildfire paper: retry with a browser.
- The fourteen X-only items: find the maker pages when Anselm points at
  them.
- Whether `data/articles/` should split papers from the site's own
  essays; it holds both now.
