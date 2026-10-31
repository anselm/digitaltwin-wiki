---
about:
  label: Framework for Ecosystem Restoration Monitoring (FERM)
  description: >-
    FAO's free registry of ecosystem restoration initiatives, with their
    mapped areas, activities and indicators; the official monitor of the UN
    Decade on Ecosystem Restoration.
  aliases:
    - FERM
    - FERM Registry
  tags:
    - ecosystem restoration
    - restoration monitoring
    - UN Decade on Ecosystem Restoration
    - Target 2
    - registry
    - Earth Map
    - global
datasource:
  coverage: global, all ecosystems; initiatives that choose to register, plus records from connected partner platforms
  resolution: per initiative; areas given as administrative units or as drawn or uploaded polygons
  cadence: continuous as initiatives are registered; indicator values entered by year
  access: free to browse without an account; registering an initiative needs membership of an approved institution
  format: web registry, search engine and Earth Map viewer; map layers downloadable as PNG and GeoTIFF, zonal statistics and protected-area overlaps as tables
  homepage: 'https://ferm.fao.org/'
open:
  source: unknown
  data: partly
  api: unknown
  participation: partly
  licence: none stated; the November 2024 user guide says FERM has no data-sharing licence yet and is considering CC BY-NC 4.0
  note: >-
    The site's own search reads a JSON endpoint (/api/search/initiatives)
    that answered without a login on 30 October 2026; no documentation or
    terms for it were found.
domains:
  - ecology
relations:
  - predicate: built_on
    target: engines/google-earth-engine
    note: its geospatial tool is FAO's Earth Map, which runs on Google Earth Engine
  - predicate: needs
    target: data-sources/protected-planet
    note: Earth Map checks registered areas for overlap with protected areas from the WDPA
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: 'FERM: Framework for Ecosystem Restoration Monitoring (home page)'
      url: 'https://ferm.fao.org/'
    - title: 'Framework for Ecosystem Restoration Monitoring, FERM (FERM in brief, FAO 2025, CC BY 4.0)'
      url: 'https://openknowledge.fao.org/handle/20.500.14283/cd6696en'
    - title: 'Framework for Ecosystem Restoration Monitoring (FERM) user guide (version November 2024)'
      url: 'https://ferm.fao.org/docs/ferm_user_guide_draft.pdf'
    - title: 'Earth Map - Geospatial Environmental Monitoring Platform | FAO (FERM instance)'
      url: 'https://ferm.earthmap.org/'
    - title: 'Restoration progress report: Nature''s comeback – Scaling ecosystem restoration for people and planet (FAO, UNEP and SCBD 2026), Box 24 and Sections 2.4 and 2.6.3'
      url: 'https://doi.org/10.4060/ce2114en'
    - title: 'Data and reporting | GBF Target 2 Help Desk | Ecosystem Restoration Monitoring | FAO'
      url: 'https://www.fao.org/ecosystem-restoration-monitoring/target-2-help-desk/data-and-reporting/en'
    - title: 'FERM public initiative search (JSON), read 30 October 2026'
      url: 'https://ferm.fao.org/api/search/initiatives'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the user guide is a November 2024 draft and parts of its geospatial chapter describe an earlier version of the platform, so only its registry and Earth Map sections are relied on here'
  status: draft
---
The Framework for Ecosystem Restoration Monitoring (FERM) is a free platform from the Food and Agriculture Organization of the United Nations (FAO) for tracking and reporting ecosystem restoration.[^2] It is the official monitoring framework of the UN Decade on Ecosystem Restoration (2021 to 2030).[^1] It also supports countries in reporting the area under restoration for Target 2 of the [Kunming-Montreal Global Biodiversity Framework](/mandates/global-biodiversity-framework/), which aims to put 30 per cent of degraded ecosystems under restoration by 2030.[^1] FAO is the custodian of the Target 2 headline indicator, area under restoration, and built FERM to help countries report it.[^5] It was developed with the Decade's Task Force on Monitoring, which brings together 400 technical experts from more than 100 organisations.[^3]

It has three parts. The Registry is a database where an initiative records its details, its areas as GIS files, its activities and its indicators, and tracks them from planning through implementation to monitoring.[^2] The search engine brings together initiatives and good practices from several platforms, over 2,000 of them by FAO's 2025 count.[^2] The geospatial tool is FAO's Earth Map, a web platform built with Google on [Google Earth Engine](/engines/google-earth-engine/) for looking at satellite imagery and land, forest, water and climate layers without writing code.[^2,4]

What an initiative reports is set by the registry form. Each restoration area is entered as administrative units, drawn on a map, or uploaded as a shapefile, KML, KMZ or GeoJSON.[^3] Each area is classified by biome under the IUCN Global Ecosystem Typology and split by type of restoration activity and by overlap with protected areas and with Indigenous and traditional territories, the breakdowns Target 2 reporting asks for.[^3] Activities follow a glossary of restoration interventions from FAO's Economics of Ecosystem Restoration initiative.[^3] Indicators come from FAO and the World Resources Institute's 2019 guide The Road to Restoration, or are added by the initiative itself, with values entered year by year.[^3] An initiative's public page then shows its area under restoration against its target, its indicator charts, and satellite time series for its areas compared with a 2011 to 2020 reference period, from datasets including ESA's land cover maps, Global Forest Change and MODIS land cover.[^3] The good practices an initiative documents are reviewed before they appear in the search engine.[^3]

Who can add data is limited. Anyone can browse published records without an account.[^3] To register an initiative a person must belong to an institution in FERM, and FERM collects from national governments and partners of the UN Decade; others are pointed to Restor, which shares data from non-state actors with FERM.[^3] An institution's administrator checks each submitted initiative before publishing it.[^3] FERM's homepage figures are labelled as based on self-reported public data from the Registry.[^1]

As of April 2026 the Registry and the partner platforms connected to it held 1,015 restoration initiatives in 135 countries, covering about 30 million hectares, with mapped boundaries for 78 per cent of that area.[^5] All 35 UN World Restoration Flagships report to FERM.[^5] On 30 October 2026 the public search returned records from nine sources besides the Registry, including Ramsar, the Kelp Forest Alliance, the Restoration Resource Center and a Peruvian source labelled MEF-Peru.[^7]

Getting data out is mostly by hand. In Earth Map, some layers can be downloaded as PNG or GeoTIFF with a QGIS style file, time series of statistics for a chosen area can be downloaded, and protected areas overlapping a restoration area can be exported as CSV.[^3] No bulk download of the Registry was found. The November 2024 user guide says FERM has no data-sharing licence and is considering CC BY-NC 4.0; no later statement was found.[^3]

FERM is voluntary and reports at the level of initiatives, so what it holds depends on who registers.[^5] Most reporting is area-based, though FERM can carry outcomes such as beneficiaries, carbon and biodiversity.[^5] For marine and coastal ecosystems only four FERM initiatives gave a specific restoration area as of 2026, about 97,600 hectares, and freshwater work is often folded into wider initiatives without a separate area, so FAO's 2026 restoration report expects aquatic restoration to be undercounted.[^5] FAO's Target 2 help desk warns that the same restored area can appear in several systems, so figures from different sources cannot always be added together, and that its compiled default data do not replace a country's own validated figures.[^6]

For someone modelling a watershed, coast or landscape, FERM is a place to find who is already restoring what nearby: the outlines of their sites, the ecosystems and activities, how far along they are, and the indicators they say they track. Those can become a layer of interventions in a land-use or habitat model, or a list of people to ask for field data. The areas are reported, not verified on the ground, so they say where restoration work is recorded rather than where an ecosystem has recovered. FAO's 2026 report [Nature's comeback](/articles/natures-comeback-restoration-report/) drew on FERM for part of its global count.[^5]
