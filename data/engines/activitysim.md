---
about:
  label: ActivitySim
  description: >-
    Open-source Python software for activity-based travel models, run by a
    consortium of US metropolitan planning organisations and other transport
    agencies; it simulates where each person in a region goes, how and when,
    over a typical day.
  tags:
    - activity-based model
    - travel demand
    - transport planning
    - synthetic population
    - Python
tool:
  form: open-source Python framework
  group: People and populations
  homepage: 'https://activitysim.github.io/activitysim/v1.6.0/'
  licence: BSD-3-Clause
  cost: free; a regional model needs a large workstation or server
domains:
  - people
  - mobility
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: BSD-3-Clause
  note: Several member agencies have open-sourced their own regional implementations.
relations:
  - predicate: answers
    target: questions/after-a-closure
provenance:
  origin: agent
  sources:
    - title: 'ActivitySim/activitysim (README)'
      url: 'https://github.com/ActivitySim/activitysim'
    - title: 'ActivitySim 1.6.0 documentation'
      url: 'https://activitysim.github.io/activitysim/v1.6.0/'
    - title: 'Users Guide (ActivitySim 1.6.0)'
      url: 'https://activitysim.github.io/activitysim/v1.6.0/users-guide/index.html'
    - title: 'Model Setup (ActivitySim 1.6.0)'
      url: 'https://activitysim.github.io/activitysim/v1.6.0/users-guide/modelsetup.html'
    - title: 'Anatomy of a Model (ActivitySim 1.6.0)'
      url: 'https://activitysim.github.io/activitysim/v1.6.0/users-guide/model_anatomy.html'
    - title: 'Example Models (ActivitySim 1.6.0)'
      url: 'https://activitysim.github.io/activitysim/v1.6.0/users-guide/example_models.html'
    - title: 'Release v1.6.0 (ActivitySim on GitHub)'
      url: 'https://github.com/ActivitySim/activitysim/releases/tag/v1.6.0'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
ActivitySim is travel-forecasting software built by a consortium of US regional planning agencies.[^1,2] An activity-based model takes a list of households and the people in them and decides what each person does in a day. It chooses whether they go to work or school, what other outings they make, in what order, how they travel and when.[^6] The outings are grouped into tours, and each tour is broken into trips.[^5,6]

A consortium of transport agencies leads the project, sets its priorities and provides the resources for development.[^1] Most are metropolitan planning organisations, the bodies that plan transport for a US city region.[^1] The aim, in the consortium's words, is software "for distribution at no charge to the public."[^1] Member agencies that have published their own implementations include the Puget Sound Regional Commission (Seattle), the Atlanta Regional Commission, the Metropolitan Council (Minneapolis-St. Paul) and the Oregon Modeling Statewide Collaborative.[^2] These are not necessarily complete or calibrated tools.[^2] Version 1.6.0 was released in September 2026 and the code is under active development.[^1,7]

A model needs three kinds of input. The first is the households and persons to simulate, created by a population synthesis program such as PopulationSim.[^6] The second is land use by zone, such as population and jobs.[^5] The third is skims, tables of travel time and cost between every pair of zones by mode and time of day.[^4,5] ActivitySim is one part of a larger system. Other software builds the networks and skims and assigns the resulting trips to roads and transit, which ActivitySim does not do.[^3] The behaviour is set in configuration files of expressions and coefficients, which an agency can re-estimate in the software's estimation mode.[^3,5] The key output is a single HDF5 file holding each data table.[^5]

It is heavy. The main worked example, based on the San Francisco Bay Area's travel model, has 2.7 million households, 7.5 million people and 1,475 zones, and takes between an hour and a day to run depending on the machine.[^4] One agency's guidance asks for at least 8 cores and 128 GB of memory and recommends 12 or more cores and 256 GB.[^4] Sampling a subset of households makes test runs faster.[^4]

For a model of a place, ActivitySim answers who travels where and when if a road closes, a transit line opens or land use changes, at the level of individual people rather than averages. It is a planning tool for agencies with modelling staff, not something to run casually. For simulating every traveller on a road network in detail, see [MATSim](/engines/matsim/). The code is BSD-3-Clause.[^1]
