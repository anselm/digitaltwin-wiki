---
about:
  depiction: engines/urbanly-citycompass.jpg
  label: Urbanly CityCompass
  description: >-
    Urbanly's CityCompass simulates the households, firms and developers of a
    region on its real parcels, month by month in a browser, to compare
    housing, zoning and transport scenarios.
  tags:
    - land use
    - housing market
    - agent-based
    - zoning
    - browser
tool:
  form: Urban simulation application
  group: Land use and housing
  homepage: 'https://urbanly.org/'
open:
  source: closed
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
    - title: 'Urbanly — CityCompass'
      url: 'https://urbanly.org/'
    - title: 'Platform — Urbanly'
      url: 'https://urbanly.org/platform/'
    - title: 'About — Urbanly'
      url: 'https://urbanly.org/about/'
    - title: 'Urbanly: evidence and backcasts'
      url: 'https://urbanly.org/evidence/'
    - title: 'Urbanly: AI architecture'
      url: 'https://urbanly.org/ai/'
    - title: >-
        What If? Time Machines - looking closer at the proposal on Natural
        General Intelligence
      url: 'https://anselm.substack.com/p/what-if-time-machines-looking-closer'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT004
  kind: scenario_platform
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P098
    - P101
  posters:
    - Anselm Hook
    - URBANLY
---
Urbanly LLC is a group of software engineers, architects, geographers, economists and demographers.[^3] Its history runs from the open-source land-use simulation work at UC Berkeley's College of Environmental Design (2008) through UrbanSim Inc. (2016) to a new generation of models built in 2022 to run in a browser.[^3] The model reports what gets built each year, and the traffic, access, energy, water and livability that follow.[^2]

The population is synthetic: it is generated to match the region's census tables, and no record corresponds to a real person.[^2] Births, deaths, ageing, household formation and migration are simulated events, so housing demand comes from demography and not from a growth rate.[^2] Dwellings are sold at a monthly auction. Land goes to developers by second-price auction, where the highest bidder wins and pays the second-highest bid, and a rental market clears afterwards.[^2]

Developers are a catalogue of archetypes, each running a full proforma (a projection of a project's costs and returns). The archetypes are self-build, back-of-lot densification, subdivisions, cooperatives, build-to-rent, state housing and multifamily builders, and the mix is calibrated per region, with the Argentine set validated against Luján de Cuyo.[^2] Zoning changes and drawn masterplans are scenario edits that can be switched on and off.[^2]

Peak-hour traffic is assigned in the browser by static user equilibrium (a method in which each trip takes the quickest route given everyone else's choices), with feedback from congested times.[^2] An optional mesoscopic layer models queues.[^2] Urbanly calls these results sketch-planning grade, for comparing designs and not for publishing forecasts.[^2] An assistant reads a run, answers from its numbers and can write a validated experiment specification.[^2]

CityCompass runs in a browser tab, and the site has a pricing page.[^1] Urbanly says that when an engagement ends, the calibrated model, its data and the capacity to run them stay with the region.[^3]
