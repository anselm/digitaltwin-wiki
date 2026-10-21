---
about:
  label: GAMA
  description: >-
    Open-source software for building and running agent-based simulations set
    in geographic space, used for urban mobility, evacuation, epidemics,
    climate adaptation and planning.
  tags:
    - agent-based
    - GIS
    - simulation
tool:
  form: Open modeling platform
  group: Agents and system dynamics
  homepage: 'https://gama-platform.org/'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: 'GPL-3.0'
domains:
  - people
relations:
  - predicate: answers
    target: questions/crowds-and-evacuation
provenance:
  origin: agent
  sources:
    - title: GAMA Platform
      url: 'https://gama-platform.org/'
    - title: GAMA
      url: 'https://gama-platform.org/wiki/Home'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
An agent-based model simulates many individual actors, each following its own rules, and shows the patterns that emerge from their interactions. In GAMA the agents move through a geographic space. Models are written in GAML, an agent-oriented language that runs on Java. GAML is meant for people who are not computer scientists. The software ships with hundreds of example models and tutorials, and its developers have answered a mailing list since 2007. The reference paper is Taillandier et al., Geoinformatica 2019.

Users build models for urban mobility, climate-change adaptation, epidemiology, evacuation planning and urban planning, as scientific simulations and also as scenario explorers, negotiation aids, serious games and communication tools. A model can load GIS data directly as the agents' environment: shapefiles, OpenStreetMap, grids, images, CSV and 3D files. Models can connect to databases and to R or Python, and run batch explorations and calibrations across their parameter space. Displays can be 2D or 3D with interactive panels, and plugins extend the software.

GAMA is free software under GPL v3, downloaded as a desktop application or built from source on GitHub. The current version is labelled 2025-06, and a GAMA Days online meeting is scheduled for 23-25 November 2026.
