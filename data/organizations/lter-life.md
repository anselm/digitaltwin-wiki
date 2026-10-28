---
about:
  label: LTER-LIFE
  description: >-
    Dutch research infrastructure, founded in 2023, that gathers ecological
    data, models and tools for the Wadden Sea and the Veluwe into virtual
    labs for building digital twins of ecosystems.
  tags:
    - ecology
    - long-term monitoring
    - virtual lab
    - FAIR data
    - Wadden Sea
    - Veluwe
    - Netherlands
organization:
  form: research infrastructure
  homepage: 'https://lter-life.nl/en'
  country: Netherlands
domains:
  - ecology
  - water
relations:
  - predicate: built_on
    target: engines/naavre
provenance:
  origin: agent
  sources:
    - title: LTER-LIFE
      url: 'https://lter-life.nl/en'
    - title: Who are behind LTER-LIFE
      url: 'https://lter-life.nl/en/about-lter-life'
    - title: Project description - LTER-LIFE
      url: 'https://lter-life.nl/en/large-scale-research-infrastructure'
    - title: LTER-LIFE Experience
      url: 'https://lter-life.nl/en/lter-life-experience'
    - title: NatureDataCube - STAC API for Dutch Nature Areas
      url: 'https://naturedatacube.wur.nl/'
    - title: 'LTER-LIFE (GitHub organisation and the NatureDataCube README)'
      url: 'https://github.com/LTER-LIFE'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
LTER-LIFE is a Dutch scientific infrastructure for shared, integrated ecological research, working towards digital twins of ecosystems.[^1] It was founded in August 2023 with a ten-year grant from NWO, the Dutch Research Council.[^1,7] The grant (184.036.014) comes from NWO's Large-Scale Research Infrastructures programme.[^7] It starts with two of the most extensive and best-studied ecosystems in the Netherlands, one aquatic and one on land: the Wadden Sea and the Veluwe.[^1]

The work is done by researchers and software developers at NIOO-KNAW, NIOZ, the University of Amsterdam, Wageningen University and RIVM, supported by teams at LifeWatch VLIC, Wageningen Research, the Netherlands eScience Center and DANS-KNAW.[^2] Marcel Visser of NIOO-KNAW chairs the steering board, and Geerten Hengeveld of NIOO-KNAW is executive manager; each site has a community coordinator.[^2] It builds on three national infrastructures. LTER-NL runs long-term ecosystem monitoring at two sites and is part of LTER-Europe. NemNet runs national monitoring of soil, water and air. LifeWatch develops virtual laboratories.[^2]

It works in three ways: bringing together the researchers who study different parts of the same ecosystem, a portal to find data, models and tools for those communities (including old datasets), and a virtual research environment where they can be reused and connected.[^1] Inside that environment, a virtual lab gathers the data, models and analysis tools for one ecosystem, and a twin is assembled in the lab, updated with measurements from the real place, and used for experiments and scenarios on the computer.[^3] The models can be process-based, written from how the system works, or data-driven, from statistics or machine learning; both are to be made findable, accessible, interoperable and reusable (FAIR).[^3] LTER-LIFE is to be an open-source infrastructure: users can run its assets on their own machines or in the cloud through its partner SURF, and workflows and data used in projects get a persistent identifier and are stored by DANS-KNAW and SURF.[^3] The lab environment it uses is [NaaVRE](/engines/naavre/), which it is developing further for building twins.[^4]

LTER-LIFE is building its services step by step, and several can already be tried, some at an early stage.[^4]
- **NatureDataCube**, geodata for Dutch nature areas through one API (below).[^4]
- **NaaVRE**, the virtual lab environment.[^4]
- **The LTER Data Registry**, to register and find ecological data collected on the Veluwe and IJsselmeer LTSER platforms (long-term research sites).[^4]
- **The Waddenregister**, Datahuis Wadden's search engine for Wadden Sea data and metadata.[^4]
- **A prototype twin** that calculates the primary productivity of the Wadden Sea, the growth of its algae, at chosen moments, built to learn what a full twin would need.[^4]
- **A metadata template** for data used in ecosystem twins, a checklist (FAIR+SET) that suggests how to share a dataset better, and a hands-on guide to FAIR ecological data.[^4]

Its code is on GitHub. It includes a NaaVRE virtual lab for a forest landscape model of the Veluwe, setups of 3D GETM-BFM models of the Dutch Wadden Sea, a browser viewer that compares coastal-sea model output with observations, and a metadata harvester that uses large language models.[^6]

NatureDataCube, made by Wageningen Environmental Research as an initiative of LTER-LIFE, serves geodata for Dutch nature areas through a STAC API (STAC is an open standard for catalogues of maps and satellite images, readable by QGIS, ArcGIS Pro and Python tools).[^5]

Its collections are:[^5]
- vegetation index (NDVI) and colour images from Sentinel-2
- terrain and object heights from AHN, the national elevation survey
- the boundaries of 34 Dutch long-term research sites and about 264,000 nature management parcels
- ammonia, nitrogen oxide and total nitrogen deposition from RIVM, which are modelled, not measured
- land use from LGN and the Dutch soil map, both at 5 m

Weather and groundwater are in development.[^5] A free token is needed, and the data are under CC BY-NC-SA, free for non-commercial use.[^5] An R package and a Shiny interface for it are on GitHub.[^6]

The group's view of what a twin of an ecosystem is, and how to build one, is set out in [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/), whose authors all belong to LTER-LIFE.[^7] For someone modelling a place in the Netherlands, NatureDataCube is a ready source of site-level data. Outside the Netherlands, the FAIR checklist and the hands-on guide to FAIR ecological data apply to any ecological dataset.[^4]
