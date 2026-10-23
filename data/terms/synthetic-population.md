---
about:
  label: Synthetic population
  description: >-
    A made-up set of households and people for a place, built so that its
    totals and mixes match the census, letting a model hold everyone without
    holding anyone's real records.
  tags:
    - population synthesis
    - census
    - agent-based models
    - privacy
term:
  aka:
    - population synthesis
    - synthetic microdata
    - virtual population
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'PopulationSim documentation'
      url: 'https://activitysim.github.io/populationsim/'
    - title: 'An open synthetic population of Canada (Scientific Data, 2023)'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10027812/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed and the entries linked here'
  status: draft
---
A census publishes tables: how many households of each size live in each area, how many people of each age, how many work, how many own a car. It does not publish the people. A synthetic population fills that gap with invented households and residents whose counts, added up area by area, match the tables. No one in it is real, but the place as a whole looks right.

The usual recipe starts from a small anonymised sample of real records, such as the census microdata sample or a travel survey, and copies and reweights those records until they match the totals for each area. [PopulationSim](/engines/populationsim/) and [simPop](/engines/simpop/) work this way. Some open populations come ready-made, such as the [synthetic population of Canada](/data-sources/synthetic-population-canada/) and the [Synthetic Population Catalyst](/engines/synthetic-population-catalyst/) for Great Britain.

A synthetic population is a starting point, not a model of behaviour. It says who lives where; something else has to say what they do. Travel models such as [ActivitySim](/engines/activitysim/) and [MATSim](/engines/matsim/), and epidemic models such as [Covasim](/engines/covasim-starsim/), take it as their input. It matches only the attributes it was fitted to, and it is as old as its census. [Synthetic people](/articles/synthetic-people/) describes the whole family.
