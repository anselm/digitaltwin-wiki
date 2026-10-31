---
about:
  depiction: engines/agentpy.jpg
  depiction_credit: "Interactive simulation of Schelling's segregation model in a Jupyter notebook. Foramitti, Journal of Open Source Software (2021), CC BY 4.0."
  label: AgentPy
  description: >-
    Open-source Python library by Joël Foramitti for building agent-based
    models and running experiments on them in Jupyter; no longer actively
    developed, and its authors point new projects to Mesa.
  tags:
    - agent-based
    - Python
    - Jupyter
    - sensitivity analysis
    - simulation framework
tool:
  form: open-source Python library
  group: Agents and system dynamics
  homepage: 'https://agentpy.readthedocs.io/'
  licence: BSD-3-Clause
  cost: free
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: BSD-3-Clause
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/mesa
  - predicate: alternative_to
    target: engines/agents-jl
  - predicate: alternative_to
    target: engines/netlogo
provenance:
  origin: agent
  sources:
    - title: 'AgentPy - Agent-based modeling in Python — agentpy documentation'
      url: 'https://agentpy.readthedocs.io/en/latest/'
    - title: 'jofmi/agentpy (README and LICENSE)'
      url: 'https://github.com/jofmi/agentpy'
    - title: 'Overview — agentpy documentation'
      url: 'https://agentpy.readthedocs.io/en/latest/overview.html'
    - title: 'Comparison — agentpy documentation'
      url: 'https://agentpy.readthedocs.io/en/latest/comparison.html'
    - title: 'AgentPy: A package for agent-based modeling in Python (Journal of Open Source Software)'
      url: 'https://joss.theoj.org/papers/10.21105/joss.03065'
    - title: 'jofmi/agentpy releases'
      url: 'https://github.com/jofmi/agentpy/releases'
  created: '2026-10-31'
  reviewed: '2026-10-31'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
AgentPy is an open-source library for building and analysing agent-based models in Python, written by Joël Foramitti.[^1,5] An agent-based model simulates many individual agents, each acting on its own rules, to see what patterns emerge from their interaction.[^5] AgentPy keeps the whole job in one place: designing the model, watching it run interactively, running experiments over many runs, and analysing the output, all inside IPython or a Jupyter notebook.[^1]

A model has four levels.[^3] Agents are the building blocks. They live in environments: a grid of discrete positions, a continuous space or a network. A model holds the agents, environments, parameters and procedures, and an experiment runs a model many times with different parameter combinations.[^3] For that last step it provides parameter sampling (similar to BehaviorSpace in NetLogo), Monte Carlo experiments, random number control, parallel computing and Sobol sensitivity analysis, which measures how much each parameter drives the result.[^3,4] It is built to work with Python libraries such as NumPy, pandas, NetworkX, SALib and the [EMA Workbench](/engines/ema-workbench/).[^4,5] Its model library includes wealth transfer, virus spread, flocking, segregation and forest fire models.[^1]

It installs with pip and is under the BSD-3-Clause licence.[^2] The paper describing it appeared in the Journal of Open Source Software on 22 June 2021, with Foramitti at the Universitat Autònoma de Barcelona and the Vrije Universiteit Amsterdam.[^5] Version 0.1.5, of December 2021, is the latest release.[^6] AgentPy is no longer under active development, and its authors recommend [Mesa](/engines/mesa/) for new projects.[^2]

For someone modelling a place, AgentPy offers only abstract spaces: grids, continuous spaces and networks, with no map layer.[^3] It remains a readable way to learn agent-based modelling and to run experiments over a model's parameters. For new work tied to real geography, [Mesa](/engines/mesa/) with Mesa-Geo or [Agents.jl](/engines/agents-jl/) with its OpenStreetMap space are maintained alternatives.
