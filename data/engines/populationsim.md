---
about:
  label: PopulationSim
  description: >-
    Open-source population synthesiser in the ActivitySim family that builds
    household and person tables for a region from a census sample and local
    control totals, as input to travel models.
  tags:
    - synthetic population
    - census
    - travel demand
    - activity-based model
    - Python
tool:
  form: open-source Python package with a command-line tool
  group: People and populations
  homepage: 'https://activitysim.github.io/populationsim/'
  licence: BSD-3-Clause
  cost: free
domains:
  - people
  - mobility
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: BSD-3-Clause
relations:
  - predicate: alternative_to
    target: engines/simpop
  - predicate: built_on
    target: engines/activitysim
provenance:
  origin: agent
  sources:
    - title: 'ActivitySim/populationsim (README)'
      url: 'https://github.com/ActivitySim/populationsim'
    - title: 'PopulationSim documentation'
      url: 'https://activitysim.github.io/populationsim/'
    - title: 'ActivitySim/populationsim LICENSE.txt'
      url: 'https://github.com/ActivitySim/populationsim/blob/master/LICENSE.txt'
    - title: 'ActivitySim/activitysim (README)'
      url: 'https://github.com/ActivitySim/activitysim'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A travel model often needs a list of every household in a region and the people in it, with their ages, incomes and jobs. Real lists of that kind are private. PopulationSim builds a synthetic one: an invented population that matches the published counts for each small area, so a model can hold "everyone" without holding anyone's records. It began with the Oregon Department of Transportation, which wanted a shared, open tool for statewide, regional and city transport planning. It is built on ActivitySim, the open activity-based travel model run by a consortium of metropolitan planning organisations and other transport agencies.

It needs two things. The first is a seed sample: real but anonymised household and person records, usually the US Census Public Use Microdata Sample (PUMS) or a travel survey, each with a starting weight. The second is a set of controls: totals from the census or from forecasts, such as households by size or people by age, for areas like block groups, traffic analysis zones or counties. PopulationSim adjusts the weights of the seed households until they add up to the controls at every level of geography at once, changing the starting weights as little as possible. It then turns the weights into whole numbers and copies each sample household that many times. The output is a household table and a person table for the region.

The same machinery can reweight a household travel survey to match control totals, produce cross-tabulated counts for older four-step travel models, or adjust an existing regional population for a smaller study area. It runs from the command line with a folder of configuration files and a folder of data, and the documentation includes a page on checking the results against the controls.

The result is only as good as its controls. Attributes that are not controlled are carried along from the sample households and are not matched to anything local. The code is BSD-3-Clause and active; the latest GitHub release is v0.10.0 from November 2025, while the documentation site still describes version 0.5.1.
