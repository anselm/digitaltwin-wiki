---
about:
  label: MATSim
  description: >-
    Open-source framework for large-scale agent-based transport simulation,
    maintained by its contributors and the MATSim Association; simulates
    every traveller's day on a road and public-transport network.
  tags:
    - agent-based
    - transport demand
    - Java
tool:
  form: Open simulation framework
  group: Transport and crowds
  homepage: 'https://matsim.org/'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
domains:
  - mobility
relations:
  - predicate: answers
    target: questions/after-a-closure
provenance:
  origin: agent
  sources:
    - title: MATSim
      url: 'https://matsim.org/'
    - title: Install MATSim
      url: 'https://matsim.org/install/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
MATSim (Multi-Agent Transport Simulation) is an open-source Java framework for large-scale agent-based transport simulation, maintained by its contributors and the MATSim Association. It simulates each person's whole day second by second on a road and public-transport network, across car, transit, walking, cycling and demand-responsive modes; each agent adjusts its plan in response to everyone else over repeated iterations, and the settled result is the model's estimate of travel behaviour.

Uses named on the site: Swiss Federal Railways (SBB) have run a model of all of Switzerland for planning since around 2018; MOIA, Volkswagen's ride-pooling company, models shared mobility services; Arup builds models in the UK and a nationwide one for New Zealand; and Berliner Verkehrsbetriebe (BVG) is listed among its showcases.

Open source on GitHub. It is mostly a framework to be configured and extended with your own code from a Java IDE, starting from a Maven example project; a basic GUI runs scenarios by editing configuration files. Users supply their own network and population inputs.

Active; the MATSim User Meeting 2026 took place in Paris on 28 September with 43 presentations.
