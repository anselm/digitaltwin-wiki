---
about:
  depiction: organizations/pik-potsdam.jpg
  depiction_credit: 'The former Astrophysical Observatory on the Telegrafenberg, Potsdam, which hosts PIK. H. Raab (User:Vesta), Wikimedia Commons, CC BY-SA 3.0.'
  label: Potsdam Institute for Climate Impact Research (PIK)
  description: >-
    German institute, founded in 1992, that studies climate risks and
    pathways; it builds the REMIND, MAgPIE, LPJmL and SWIM models and
    co-founded the ISIMIP impact model comparison.
  aliases:
    - PIK
    - Potsdam-Institut für Klimafolgenforschung
  tags:
    - climate impacts
    - integrated assessment
    - land use
    - hydrology
    - planetary boundaries
    - models
organization:
  form: non-profit research institute
  homepage: 'https://www.pik-potsdam.de/en'
  country: Germany
domains:
  - climate
  - water
  - food
  - energy
provenance:
  origin: agent
  sources:
    - title: About the Institute — Potsdam Institute for Climate Impact Research
      url: 'https://www.pik-potsdam.de/en/institute/about'
    - title: Potsdam Institute for Climate Impact Research - Wikipedia
      url: 'https://en.wikipedia.org/wiki/Potsdam_Institute_for_Climate_Impact_Research'
    - title: MAgPIE – Model of Agricultural Production and its Impact on the Environment
      url: 'https://www.pik-potsdam.de/en/institute/departments/activities/land-use-modelling/magpie'
    - title: LPJmL (Potsdam Institute for Climate Impact Research)
      url: 'https://www.pik-potsdam.de/en/institute/departments/activities/biosphere-water-modelling/lpjml'
    - title: SWIM (Potsdam Institute for Climate Impact Research)
      url: 'https://www.pik-potsdam.de/en/institute/departments/climate-resilience/models/swim'
    - title: About ISIMIP
      url: 'https://www.isimip.org/about/'
    - title: ISIMIP terms of use
      url: 'https://www.isimip.org/gettingstarted/terms-of-use/'
    - title: Planetary boundaries - Stockholm Resilience Centre
      url: 'https://www.stockholmresilience.org/research/planetary-boundaries.html'
    - title: 'Global Warming Has Accelerated Significantly (Crossref record, with author affiliations)'
      url: 'https://api.crossref.org/works/10.1029/2025GL118804'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; the founder and the 2018 change of directors are from Wikipedia only'
  status: draft
---
The Potsdam Institute for Climate Impact Research (PIK) was founded in 1992 and is a non-profit member of the Leibniz Association.[^1] Wikipedia names Hans Joachim Schellnhuber as its founder and first director, succeeded in 2018 by two joint directors, the climate economist Ottmar Edenhofer and the Earth scientist Johan Rockström, who had directed the [Stockholm Resilience Centre](/organizations/stockholm-resilience-centre/).[^2] Its basic funding comes from the state of Brandenburg, the federal government and the other German states; in 2025 that was about 17.1 million euros, with over 23.3 million euros more from outside projects.[^1] At the end of 2025 it had 493 employees, 305 of them scientists.[^1]

PIK's stated mission is to advance interdisciplinary research on climate impacts and to contribute solutions for a safe and just climate future. Its work joins the science of the Earth system with the assessment of climate risks and with policies and pathways, framed by planetary boundaries and global commons.[^1] Its main methods are integrated and complex systems analysis and data integration, and it runs its simulations on its own supercomputer. It also advises the German parliament and government.[^1] Since 2024 it has published a yearly Planetary Health Check, an assessment of the planetary boundaries.[^8] Its researchers include the climate scientist Stefan Rahmstorf, co-author of a 2026 paper on this site finding that [global warming has accelerated](/articles/global-warming-has-accelerated/).[^9]

Several of PIK's models are useful to someone modelling a place, at different scales:

- [REMIND](/engines/remind-model/) is its integrated assessment model of the world's economy and energy system under climate targets.
- MAgPIE allocates land use across the globe on a grid of half a degree, choosing patterns that meet food and bioenergy demand in ten world regions at least cost and stepping forward ten years at a time.[^3]
- LPJmL simulates vegetation and the flows of carbon and water for natural and farmed land, typically on about 67,000 half-degree cells, and supplies MAgPIE with potential crop yields and water limits. Its source code is published under the AGPLv3 licence at github.com/PIK-LPJmL/LPJmL.[^3,4]
- SWIM is closest to the scale of a single place. It models a river basin at a daily time step, splitting it into subbasins and then hydrotopes, and gives river flow, crop yields and nutrient loads from commonly available climate, land use and soil data. It was built to study climate and land-use change at the regional scale where adaptation happens, has been applied in Europe, Africa and Central Asia, and is maintained on PIK's GitLab with set-up through a GRASS GIS interface.[^5]

PIK and the International Institute for Applied Systems Analysis (IIASA) started ISIMIP, the Inter-Sectoral Impact Model Intercomparison Project, which has grown to over 100 modelling groups.[^6] ISIMIP prepares shared climate and socioeconomic input data and common protocols so that impact models of different sectors can be run on the same scenarios and compared, and it curates their output.[^6] Its publicly available data can be downloaded from the ISIMIP repository.[^7] The latest round, ISIMIP4b, started in August 2026, with an early release timed for the IPCC's seventh assessment.[^6] For a regional study, ISIMIP is a source of consistent climate inputs and of what many impact models already project for a sector such as water or crops.
