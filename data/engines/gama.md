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
  tier: 2
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
    - title: Projects using GAMA
      url: 'https://gama-platform.org/wiki/Projects'
    - title: 'gama-platform/gama on GitHub (README, releases, licence and dates)'
      url: 'https://github.com/gama-platform/gama'
    - title: 'The gama-platform organisation on GitHub (its repositories and their READMEs)'
      url: 'https://github.com/gama-platform'
    - title: 'Running a GAMA headless server (documentation)'
      url: 'https://gama-platform.org/wiki/HeadlessServer'
    - title: 'GAMA changelog, 1.9.3 to 2025-06'
      url: 'https://gama-platform.org/wiki/Changelog'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the sources listed; the HoanKiemAir paper was not read, only the project page. GAMA was not installed or run for this entry. Anselm asked for a closer look at the GitHub organisation.'
  status: draft
---
An agent-based model simulates many individual actors, each following its own rules, and shows the patterns that emerge from their interactions. In GAMA the agents move through a geographic space.[^2] Models are written in GAML, an agent-oriented language that runs on Java.[^2] GAML is meant for people who are not computer scientists.[^2] The software ships with hundreds of example models and tutorials, and its developers have answered a mailing list since 2007.[^2] The reference paper is Taillandier et al., Geoinformatica 2019.[^2]

Users build models for urban mobility, climate-change adaptation, epidemiology, evacuation planning and urban planning, as scientific simulations and also as scenario explorers, negotiation aids, serious games and communication tools.[^2] A model can load GIS data directly as the agents' environment: shapefiles, OpenStreetMap, grids, images, CSV and 3D files.[^2] Models can connect to databases and to R or Python, and run batch explorations and calibrations across their parameter space.[^2] Displays can be 2D or 3D with interactive panels, and plugins extend the software.[^2]

The project's list of work done with GAMA includes HoanKiemAir, in Hanoi in 2019 and 2020. Its page says that closing streets to traffic is likely to push traffic into nearby neighbourhoods, and that because this "might appear counter-intuitive to most stakeholders" the team built an agent-based model of traffic and its air pollution to share the effects before the change was made.[^3] The paper's title calls it a tangible model.[^3] GAMA also runs agent-based modules for MIT's [CityScope](/communication/mit-cityscope/) tables.[^3]

GAMA is free software under GPL v3, downloaded as a desktop application or built from source on GitHub.[^2] The documented stable version is labelled 2025-06, and a GAMA Days online meeting is scheduled for 23-25 November 2026.[^1,2]

## The code and what surrounds it

The main repository holds the versions from 2025 on; the 1.x code is in a separate archived repository.[^5] The code is Java, built on Eclipse, and compiles for Java 25.[^4] It is worked on daily: the last change seen for this entry was on 16 November 2026, and alpha versions were published about once a month through the autumn of 2026.[^4] The README advises most users to download a release bundled with a Java runtime.[^4]

The desktop program is not the only way to run a model. GAMA has a headless mode, and in it a server, started with one command and a port number, that other programs talk to over a socket, receiving JSON replies for each command and any errors a simulation throws.[^6] Around that server the organisation keeps:[^5]

- client libraries in Python and JavaScript, so a web page or a script can load a model, step it and read its state;
- a Docker image of headless GAMA;
- wrappers that present a GAMA model as a Gymnasium or PettingZoo environment, the standard interfaces for reinforcement learning, so a learning algorithm can control agents in the simulation;
- a repository of models written in GAML with their data, and a plug-in for browsing shared models;
- an optional GitHub Copilot integration for the editor.

The 2025-06 release notes list a more robust server, updates to the built-in physics engine, which uses the Bullet library, and Box2D as a second engine for two-dimensional worlds.[^7]

## For someone choosing an agent platform

GAMA is general: the same language describes pedestrians, vehicles, households, animals or parcels of land, on real map data, with built-in displays. The server and clients mean a public web page can sit in front of a model that runs elsewhere, which is the arrangement a participatory tool needs. The costs are a language of its own to learn and a large Java desktop program to install. [Mesa](/engines/mesa/) and [Agents.jl](/engines/agents-jl/) are the choice for people who want to stay in Python or Julia, and [NetLogo](/engines/netlogo/) is simpler to start with.
