---
about:
  label: PyPSA / PyPSA-Eur
  description: >-
    PyPSA is an open-source Python framework from TU Berlin for optimising
    power and energy systems; PyPSA-Eur is the open model of the European
    energy system built on it, covering electricity, transport, heating and
    industry.
  tags:
    - energy system
    - optimisation
    - power grid
    - open source
tool:
  form: Open energy-system models
  group: Energy and utilities
  homepage: 'https://pypsa.org/'
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: 'MIT'
domains:
  - energy
relations:
  - predicate: answers
    target: questions/electrification
provenance:
  origin: agent
  sources:
    - title: 'PyPSA - Python for Power System Analysis'
      url: 'https://pypsa.org/'
    - title: 'Home - PyPSA-Eur'
      url: 'https://pypsa-eur.readthedocs.io/en/stable/index.html'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
PyPSA (Python for Power System Analysis) is an open-source Python framework for simulating and optimising power and energy systems, maintained by the Department of Digital Transformation in Energy Systems at Technische Universität Berlin. The framework itself holds no data; it is a toolbox for building networks of buses, loads, generators, storage and links and solving dispatch, power-flow and investment problems on them. PyPSA-Eur is one of several model implementations built with it: an open model of the European energy system at transmission-network level, covering the whole ENTSO-E area, with a sector-coupled extension for transport, heating, biomass, industry and carbon management. Sister models exist for Germany, the United States and the world (PyPSA-DE, PyPSA-USA, PyPSA-Earth).

The framework covers economic dispatch, linear and security-constrained optimal power flow, capacity expansion, multi-period pathway planning, rolling-horizon and stochastic optimisation, and policy constraints such as CO2 limits. PyPSA-Eur is used both for operational studies and for generation and transmission expansion planning; the project's own showcases include a study of a possible European hydrogen network published in Joule in 2023.

Both are free under the MIT licence for academic and commercial use. PyPSA-Eur restricts itself to freely available data and ships an automated workflow that assembles the model from the original datasets; it is tested on Linux, macOS and Windows (WSL). Open-source solvers such as HiGHS work, though the project recommends commercial solvers for very large problems. Paid support is available from several consultancies.

Status: in active development; the PyPSA-Eur documentation warns that the model has known limitations and is under active development, and the community held a user meeting in June 2026.

![European electricity infrastructure as represented in PyPSA-Eur: transmission links and generation technologies.](/engines/pypsa-pypsa-eur/power.png)

*European electricity infrastructure in PyPSA-Eur (2022): the network on which energy scenarios are calculated. Credit: Fabian Hofmann, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:European_power_system_infrastructure.png).*
