---
about:
  label: GAMA
  description: >-
    Open-source environment for building and running spatially explicit
    agent-based simulations; used for urban mobility, evacuation, epidemics,
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
GAMA is an open-source environment for writing and running agent-based simulations in which agents live in a geographic space. Models are written in GAML, an agent-oriented language that runs on Java and is meant to be usable by people who are not computer scientists; the platform ships with hundreds of example models and tutorials, and its developers have answered a mailing list since 2007. The reference paper is Taillandier et al., Geoinformatica 2019.

Its users build models for urban mobility, climate-change adaptation, epidemiology, evacuation planning and urban planning, both as scientific simulations and as scenario explorers, negotiation aids, serious games and communication tools. A model can load GIS data (shapefiles, OpenStreetMap, grids, images, CSV, 3D files) directly as the agents' environment, connect to databases and to R or Python, and run batch explorations and calibrations across its parameter space. Displays can be 2D or 3D with interactive panels, and plugins extend the platform.

Free software under GPL v3, downloaded as a desktop application or built from source on GitHub.

Maintained; the current version is labelled 2025-06, and a GAMA Days online meeting is scheduled for 23-25 November 2026.
