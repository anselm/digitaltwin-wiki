---
about:
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
friGIS is planning software for heat adaptation made by Tropocen, whose co-founders are Julius Dickmann, Gustav Trost and Sebastian Sändig. It joins three steps that are usually separate: a 3D model of a city district as it stands (buildings, vegetation, water and sealed surfaces, exportable to QGIS and ArcGIS), an interface to the PALM-4U urban climate model that computes air and surface temperature, wind and the PET and UTCI comfort indices at building resolution for day and night, and a 3D editor in which planners place measures such as individual trees, green areas, surface changes, water features and fountains.

Simulation results are laid over the district model to show heat hotspots, gaps in cold-air supply and wind patterns. A measure database gives quick-look parameters (category, size, heat resistance), and scenario comparison shows difference maps marking where a measure cools, has no effect or makes the microclimate worse. Tropocen names cities, planning offices, property managers and researchers as the intended users and says no GIS expertise is needed; Tropocen also offers consulting around the software.

It is hosted, with a login at app.frigis.eu. Pricing, licence, named deployments and the company's location are not stated on the pages read.
