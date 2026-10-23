---
about:
  depiction: engines/frigis.jpg
  label: friGIS
  description: >-
    Tropocen's browser-based GIS for urban heat adaptation, with a 3D model of a
    city district, PALM-4U microclimate simulation and a planning editor for
    comparing cooling measures.
  tags:
    - urban heat
    - microclimate
    - climate adaptation
    - 3d city model
    - germany
    - planning
tool:
  group: Weather and climate
  homepage: 'https://frigis.eu/'
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: 'friGIS, Beratung & Software für hitzegerechte Städte'
      url: 'https://frigis.eu/'
    - title: Tropocen | Urbane Klimaanpassung & friGIS
      url: 'https://tropocen.com/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT005
  kind: twin_candidate
  family: twins_and_candidates
  priority: high
  verified: true
  posts:
    - P022
    - P043
  posters:
    - Gustav Trost
domains:
  - places
  - climate
---
friGIS is made by Tropocen. Tropocen's co-founders are Julius Dickmann, Gustav Trost and Sebastian Sändig.[^2] The software joins three steps that are usually separate:[^1]

- a 3D model of a city district as it stands, with buildings, vegetation, water and sealed surfaces, exportable to QGIS and ArcGIS[^1]
- an interface to the PALM-4U urban climate model, computing air and surface temperature, wind and the comfort indices PET and UTCI (measures of how hot conditions feel to a person) at building resolution, by day and night[^1]
- a 3D editor in which planners place measures such as individual trees, green areas, surface changes, water features and fountains[^1]

Simulation results are laid over the district model to show heat hotspots, gaps in cold-air supply and wind patterns.[^1] A measure database gives quick-look parameters for each measure: category, size and heat resistance.[^1] Scenario comparison draws difference maps marking where a measure cools, has no effect or makes the microclimate worse.[^1]

Tropocen names cities, planning offices, property managers and researchers as the intended users and says no GIS expertise is needed.[^1] The company also offers consulting around the software.[^2]

friGIS is hosted, with a login at app.frigis.eu.[^1] Pricing is not published.[^1,2]
