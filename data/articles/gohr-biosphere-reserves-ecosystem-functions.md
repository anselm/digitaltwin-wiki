---
about:
  label: Do biosphere reserves keep forests working?
  description: >-
    Satellite proxies for productivity, water, temperature and connectivity,
    compared inside and outside 119 UNESCO biosphere reserves: only 18 scored
    higher on all of them inside.
  tags:
    - protected areas
    - biosphere reserves
    - UNESCO
    - ecosystem functions
    - MODIS
    - Google Earth Engine
    - effectiveness
    - paper
article:
  tier: 3
  url: 'https://doi.org/10.1038/s43247-025-02081-y'
  published: '2025-02-04'
  publisher: Communications Earth & Environment
  authors:
    - Charlotte Gohr
    - Henrik von Wehrden
    - Sassan Saatchi
    - Nathalie Pettorelli
    - Pierre L. Ibisch
domains:
  - ecology
relations:
  - predicate: cites
    target: platforms/google-earth-engine
provenance:
  origin: agent
  sources:
    - title: 'Effectiveness of the world network of biosphere reserves in maintaining forest ecosystem functions (Gohr et al., Communications Earth & Environment 6, 4 February 2025, CC BY 4.0)'
      url: 'https://doi.org/10.1038/s43247-025-02081-y'
    - title: 'Data and code for the paper (figshare)'
      url: 'https://doi.org/10.6084/m9.figshare.25479736.v2'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the abstract, the methods passages on the proxies, and the data and code statements of the paper'
  status: draft
---
UNESCO's biosphere reserves are meant to be places where conservation and use are reconciled and ecosystems keep functioning. The authors test the second part of that claim from orbit, for forests, by comparing proxies of ecosystem function inside each reserve with the area around it.[^1]

The proxies are all standard satellite products. Vegetation vitality comes from MODIS Aqua gross and net primary productivity and the annual maxima of the NDVI and EVI vegetation indices. Water regulation comes from MODIS Terra evapotranspiration. Temperature regulation comes from land surface temperature on hot days. Ecosystem extent comes from forest patch connectivity, built with Thiessen polygons on the Global Forest Cover Change dataset at 30 m.[^1] Linear mixed-effect models then ask, reserve by reserve and biome by biome, whether the inside scores better than the outside.[^1]

Only 18 of 119 reserves scored higher inside on every proxy. Smaller reserves in fragmented forest landscapes were more affected by hot-day temperatures, and more forest cover went with better function across all biomes.[^1] The authors' conclusion is methodological as much as anything: assessments of protected areas should include outcome measures of function drawn from satellites, not only boundaries and management categories.[^1]

## For a model of a place

The method transfers to any bounded place with a surrounding to compare against: a reserve, a watershed under a restoration plan, a city's green belt. Every input is in the [Google Earth Engine](/platforms/google-earth-engine/) catalogue, and the processed data and the full analysis code are on figshare.[^1,2] The paper is open under CC BY 4.0.[^1]
