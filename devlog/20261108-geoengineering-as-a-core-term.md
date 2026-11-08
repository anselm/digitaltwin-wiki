# Geoengineering as a core term

2026-11-08. Claude (Opus 5.5 for the first entries, Fable 5.1 from the expansion on), session https://claude.ai/code/session_01QvbEMPfgTgBCEh7BrFsFv1, in the twin-compendium room.

## What Anselm asked

He sent two phone screenshots to index: Karl Burkart's One Earth page (CEO of the Nature Data Lab) and a Google result for GeoMIP. Then: "It turns out that geo engineering is a critical term for me." After the first three entries went up: "Think about how the term geoengineering seems like it is in some ways a real capture of the core of what I was trying to do. Should we include the term more often? ... very excited to discover this term. Also I switched to fable - you may want to rewrite or expand the recent articles." He pasted two Google AI overviews of the modelling stack (ESMs, GeoMIP, CDRMIP, large ensembles, LES, emulators, downscaling). Those were used as a list of things to verify, never as a source.

## The answer on the word

Geoengineering does capture the core move of this wiki: a change made in a world where it cannot be tried first, with the model as the only laboratory. It is the planetary limit of the what-if that every scenario page asks at the scale of a basin or a town. But the word is owned by the climate-intervention community and means, to them, solar radiation modification and carbon dioxide removal. The 2015 National Academies reports dropped it because it covers "many activities unrelated to climate", and the IPCC glossary has no entry for it. Using it for watershed restoration or zoning would misstate those things and would cost the site its credibility with the readers who know the field. So the term is not spread across the wiki. It is given a strong home and the method around it is built out as tools and data, which is what the wiki is for: the term, a use-case page, the engines that run it, the ensembles and intercomparisons that hold the output, and the stack from cloud-scale models to emulators to downscaling to impact models.

## What was built

- `terms/geoengineering` (agent-drafted from 17 sources, then expanded with a section on the rest of the stack from 24 more, every DOI checked on Crossref).
- `questions/cooling-the-planet`: the use-case page, in the shelf's form (what you are really asking, what model answers it, what you need, without a model, next).
- `data-sources/geomip`, `data-sources/glens-and-arise-sai`, `data-sources/cdrmip`: the shared experiments and ensembles, with the ESGF counts queried on the day.
- `engines/cesm` (with WACCM) and `engines/e3sm`.
- `organizations/nature-data-lab`, linked from the Global Safety Net entry as its maker.
- Cross-links: `questions/weather-and-climate` points at the new question; `data-sources/cmip6` names GeoMIP among the endorsed MIPs.

Four background agents did the source work (term draft; CESM and E3SM; GLENS, ARISE-SAI and CDRMIP; the modelling-stack research, saved at the session scratchpad as `geoeng-stack.md`). The main session wrote GeoMIP, the Nature Data Lab, the use-case page, the stack section and the cross-links, and checked each agent's claims against its report.

## Left open

- UNEP's *One Atmosphere* is cited from a library record; UNEP's site refuses scripted reads.
- E3SM's own stratospheric-aerosol runs: two DOE abstract pages returned 403, so none is claimed.
- No pictures on the term, CESM or E3SM; UCAR's image terms need permission and E3SM states none.
- The Degrees Initiative, the CarbonPlan downscaled dataset and CIDER could each carry an entry of their own.
- The Planet AI app entry rests on Planet's launch post and press; Reddit blocks reading the AMA it came from.
