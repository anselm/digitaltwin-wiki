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
The model is used to analyse how land-use policies and infrastructure investments shape cities and regions. Its centre is the real-estate market and the transport system. Household and firm location, development and prices come from discrete choice models (statistical models of how people choose among options) at block, parcel or zone level.

The research behind the model ran for more than a decade, led by Paul Waddell, Professor of City and Regional Planning at the University of California, Berkeley. The National Science Foundation and US metropolitan planning organisations funded that work. UrbanSim Inc., in Seattle, now sells it as a product.

The main uses are forecasting land use 10 to 40 years ahead as input to a regional travel model, and testing the effects of transport investments, pricing, zoning changes, environmental constraints, macroeconomic shifts and major development projects. UrbanSim is in operational use in 21 regions: 17 in the US and four abroad. The list includes San Francisco, Seattle and Paris.

The core model code is open source in Python, on the Urban Data Science Toolkit GitHub page. UrbanSim Inc. also sells a hosted UrbanSim Cloud Platform, whose documentation is at version 3.13.1. The platform has the UrbanCanvas Modeler interface, scenario and simulation-run management, map and chart indicators, data uploads and travel-model integration.

The maker gives three caveats. Boundary effects with neighbouring regions are ignored. Land-use regulations are treated as binding. No single parcel-level prediction should be trusted, so results should be aggregated or run many times.
