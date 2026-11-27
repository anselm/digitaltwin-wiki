---
about:
  label: PALM
  description: >-
    Free model of air flow, heat and pollution at street scale, from Leibniz
    University Hannover; its PALM-4U components add buildings, trees,
    radiation, chemistry and indoor climate.
  aliases:
    - PALM-4U
    - PALM model system
  tags:
    - urban climate
    - large-eddy simulation
    - heat
    - air quality
    - microclimate
tool:
  tier: 3
  form: open-source simulation code
  group: Weather and climate
  homepage: 'https://palm.muk.uni-hannover.de/trac'
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'GPL-3.0'
domains:
  - climate
  - sensory
relations:
  - predicate: answers
    target: questions/sensory-landscape
  - predicate: alternative_to
    target: engines/agents-and-system-dynamics/openfoam
  - predicate: alternative_to
    target: engines/sensory-landscape/gral
provenance:
  origin: agent
  sources:
    - title: 'The PALM model system (home page)'
      url: 'https://palm.muk.uni-hannover.de/trac'
    - title: 'PALM-4U components'
      url: 'https://palm.muk.uni-hannover.de/trac/wiki/palm4u'
    - title: 'PALM (model description)'
      url: 'https://palm.muk.uni-hannover.de/trac/wiki/palm'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the three project pages listed. The papers the project cites (Maronga and others, 2015 and 2020) were not read, and no page on hardware requirements or run times was read.'
  status: draft
---
PALM is a model of the lowest part of the atmosphere, developed at Leibniz University Hannover.[^1] It was written as a large-eddy simulation, a method that computes turbulent air motion directly on a fine three-dimensional grid, and it was designed for massively parallel computers.[^1] A cheaper mode that represents all turbulence by formula was added later.[^1] The project says the name is no longer an abbreviation.[^1]

## PALM-4U, the urban components

For someone modelling a town, the relevant part is PALM-4U, a set of components shipped with PALM for "practical city planning related to the urban microclimate and climate change".[^2] A run counts as PALM-4U once buildings are placed in the model and at least one of the components is in use.[^2] The components include:

- energy balance for building and paved surfaces, and heat transfer through walls, with solid wall, window and green facade treated separately;[^2]
- radiation among buildings, with shadows and reflections;[^2]
- trees as a three-dimensional canopy that slows the wind and has its own leaf temperature;[^2]
- a chemistry module for the transport and reaction of pollutants;[^2]
- an indoor climate module that predicts indoor temperature, each building's energy demand and the waste heat it gives off;[^2]
- a multi-agent system for residents, for studies of heat stress on people and of escape;[^2]
- nesting, so a fine grid over a few streets can sit inside a coarser one, and forcing from a regional weather model;[^2]
- a graphical interface.[^2]

The components were developed by a group of institutions under a German federal research programme, Urban Climate Under Change.[^2] The page notes that some were still changing when it was written.[^2]

## Using it

PALM is free software under the GNU General Public License version 3, and the project asks to be cited.[^1] It runs a foundation course, announced on its home page in October 2026.[^1]

This is a research code for people with training in atmospheric modelling and access to a cluster. It suits questions where the shape of streets, the materials and the trees decide the answer, such as what a row of trees or a change in building height does to heat on a given street on a hot afternoon. For a town without that capacity, a common arrangement is for a university or consultancy to compute a set of cases and for the town to publish the resulting maps.

[OpenFOAM](/engines/agents-and-system-dynamics/openfoam/) is a general flow solver used for similar street-scale work, and [GRAL](/engines/sensory-landscape/gral/) is a lighter model for pollutant dispersion.
