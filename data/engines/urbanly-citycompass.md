---
about:
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
CityCompass is an urban simulation from Urbanly LLC, a group of software engineers, architects, geographers, economists and demographers whose history runs from the open-source land-use simulation work at UC Berkeley's College of Environmental Design (2008) through UrbanSim Inc. (2016) to a new generation of models built in 2022 to run in a browser. It simulates the people, households, firms and developers of a real region on its real parcels, one month at a time, and reports what they build and the traffic, access, energy, water and livability that follow, year by year.

The population is synthetic, generated to match the region's census tables without any record corresponding to a real person; births, deaths, ageing, household formation and migration are simulated events, so housing demand comes out of demography rather than a growth rate. Dwellings are sold at monthly auction and land is sold to developers by second-price auction; a rental market clears afterwards. Developers are a catalogue of archetypes (self-build, back-of-lot densification, subdivisions, cooperatives, build-to-rent, state housing, multifamily builders), each running a full proforma, and the mix is calibrated per region; the Argentine set was validated against Luján de Cuyo. Zoning changes and drawn masterplans are scenario edits that can be switched on and off. Peak-hour traffic is assigned in the browser by static user equilibrium with feedback from congested times, with an optional mesoscopic queue layer; the maker describes these results as sketch-planning grade, for comparing designs rather than publishing forecasts. An assistant reads a run, answers from its numbers and can write a validated experiment specification.

It runs in a browser tab; the site has a pricing page, which was not read. The company says that when an engagement ends the calibrated model, its data and the capacity to run them stay with the region.

Status: operational; the pages read give no release dates.
