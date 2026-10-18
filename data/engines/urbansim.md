---
about:
  label: UrbanSim
  description: >-
    UrbanSim is a microsimulation land-use model from UrbanSim Inc., grown out
    of research led by Paul Waddell, that forecasts real-estate development,
    prices and household and firm location for regional transport planning.
  tags:
    - land use
    - microsimulation
    - real estate
    - MPO
    - travel model
tool:
  form: Urban modeling platform
  group: Land use and housing
  homepage: 'https://urbansim.com/'
open:
  source: partly
  data: unknown
  api: unknown
  participation: unknown
domains:
  - places
relations:
  - predicate: answers
    target: questions/housing-and-land-use
provenance:
  origin: agent
  sources:
    - title: 'UrbanSim Artificial Intelligence For Sustainable Development with AI'
      url: 'https://urbansim.com/'
    - title: 'UrbanSim — UrbanSim Cloud Platform 3.13.1 documentation'
      url: 'https://cloud.urbansim.com/docs/general/documentation/urbansim.html'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
UrbanSim is a microsimulation land-use model for analysing how land-use policies and infrastructure investments shape the development of cities and regions. It focuses on the real-estate market and the transport system, modelling household and firm location, development and prices with discrete choice models at block, parcel or zone level. It was developed over more than a decade of research led by Paul Waddell, Professor of City and Regional Planning at the University of California, Berkeley, funded by the National Science Foundation and by US metropolitan planning organisations; UrbanSim Inc., in Seattle, now carries it as a product.

Its intended uses are forecasting land use 10 to 40 years ahead as input to a regional travel model, and testing the effects of transport investments, pricing, zoning changes, environmental constraints, macroeconomic shifts and major development projects. The documentation lists operational use in Albuquerque, Austin, Boston, Chicago, Denver, Detroit, Eugene-Springfield, Honolulu, Kansas City, Minneapolis-St Paul, Nashville, Philadelphia, Phoenix, Salt Lake City, San Diego, San Francisco and Seattle, and abroad in Johannesburg, Melbourne, Paris and Vancouver.

The core model code is open source in Python, published on the Urban Data Science Toolkit GitHub page. UrbanSim Inc. sells a hosted UrbanSim Cloud Platform with the UrbanCanvas Modeler interface, scenario and simulation-run management, map and chart indicators, data uploads and travel-model integration. The maker's own caveats: boundary effects with neighbouring regions are ignored, land-use regulations are treated as binding, and no single parcel-level prediction should be trusted; results should be aggregated or run many times.

Status: operational; the cloud platform documentation is at version 3.13.1.
