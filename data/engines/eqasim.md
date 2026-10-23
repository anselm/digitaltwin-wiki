---
about:
  label: eqasim (synthetic population of France)
  description: >-
    Open pipeline that builds a synthetic population of Île-de-France, or of
    other French regions, from public data: households, people and each
    person's day of activities and trips, ready for MATSim.
  tags:
    - synthetic population
    - travel demand
    - France
    - Paris
    - MATSim
    - Python
tool:
  form: open-source Python pipeline
  group: People and populations
  homepage: 'https://eqasim-org.github.io/eqasim-france'
  licence: GPL-2.0
  cost: free
domains:
  - people
  - mobility
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: GPL-2.0
relations:
  - predicate: alternative_to
    target: engines/populationsim
provenance:
  origin: agent
  sources:
    - title: 'eqasim-org/eqasim-france (README)'
      url: 'https://github.com/eqasim-org/eqasim-france'
    - title: 'Generating the Île-de-France population, Eqasim'
      url: 'https://eqasim-org.github.io/eqasim-france/population/population_summary.html'
    - title: 'Gathering the data, Eqasim'
      url: 'https://eqasim-org.github.io/eqasim-france/population/population_data.html'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
This pipeline produces an open synthetic population of the Paris region, Île-de-France, and by extension of other parts of France. Each synthetic person belongs to a household and has socio-demographic attributes close to those of the real region, and also a day: a sequence of activities such as work, school or shopping at particular places and times, joined by trips by a particular mode. That makes it a population and a travel diary at once.

The reference paper is Hörl and Balac (2021) in Transportation Research Part C, with a companion data paper in Data in Brief the same year. The code is kept by the eqasim project on GitHub and has been adapted for Toulouse and Occitanie, Lyon, Nantes and Loire-Atlantique, and Corsica, each with a documented case. The README says it has been adapted to many other regions and cities around the world.

You assemble the inputs yourself, all from public French sources. From INSEE come the 2022 census, population totals, the census tables of where people travel to work and school, municipal income tax data for 2021 and the 2025 census of services and facilities. The 2008 national household travel survey supplies the daily trips, with the 2019 mobility survey as an option. The pipeline then runs in Python and writes households, people and located activities as CSV and GeoPackage files. A second stage builds the inputs for a [MATSim](/shelf/matsim/) transport simulation, though the population itself does not depend on MATSim.

The makers name transport simulation, the spread of disease and the placing of services and facilities as uses. Each output records the exact code version that made it, so a population can be reproduced. The code is GPL, so adaptations must stay open. It is actively developed: v1.6.0 was released in October 2026.
