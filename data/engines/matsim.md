---
about:
  depiction: engines/matsim.jpg
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
MATSim stands for Multi-Agent Transport Simulation and is written in Java. In an agent-based model, each person is simulated as a separate actor with plans of their own. MATSim follows each person's whole day second by second, by car, transit, walking, cycling or demand-responsive services. Over repeated iterations every agent adjusts its plan in response to everyone else. The settled result is the model's estimate of travel behaviour.

Users named on the MATSim site:

- Swiss Federal Railways (SBB) have run a model of all of Switzerland for planning since around 2018.
- MOIA, Volkswagen's ride-pooling company, models shared mobility services.
- Arup builds models in the UK and a nationwide one for New Zealand.
- Berliner Verkehrsbetriebe (BVG) is listed among the showcases.

The code is open source on GitHub. MATSim is mostly a framework to configure and extend with your own Java code, starting from a Maven example project in a Java IDE. A basic GUI runs scenarios by editing configuration files. Users supply their own network and population inputs.

The MATSim User Meeting 2026 took place in Paris on 28 September, with 43 presentations.
