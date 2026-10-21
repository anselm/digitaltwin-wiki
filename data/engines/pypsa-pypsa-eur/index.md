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
The framework holds no data. Users build networks of buses (the nodes where lines meet), loads, generators, storage and links, then solve dispatch, power-flow and investment problems over those networks. The name stands for Python for Power System Analysis, and the Department of Digital Transformation in Energy Systems at Technische Universität Berlin maintains the code.

PyPSA-Eur is one of several models built with PyPSA. It represents the European energy system at transmission-network level across the whole ENTSO-E area, the territory of the European association of grid operators. A sector-coupled extension adds transport, heating, biomass, industry and carbon management. Sister models are PyPSA-DE for Germany, PyPSA-USA for the United States and PyPSA-Earth for the world.

The framework handles economic dispatch (choosing which plants run, at least cost), linear and security-constrained optimal power flow, and capacity expansion. Multi-period pathway planning, rolling-horizon and stochastic optimisation, and policy constraints such as CO2 limits are also covered. PyPSA-Eur is used for operational studies and for generation and transmission expansion planning. One of the project's showcases is a study of a possible European hydrogen network, published in Joule in 2023.

Both are free under the MIT licence for academic and commercial use. PyPSA-Eur uses only freely available data, and an automated workflow assembles the model from the original datasets. It is tested on Linux, macOS and Windows (WSL). Open-source solvers such as HiGHS work, though the project recommends commercial solvers for very large problems. Several consultancies sell support.

The PyPSA-Eur documentation warns that the model has known limitations and is under active development. The community held a user meeting in June 2026.

![European electricity infrastructure as represented in PyPSA-Eur: transmission links and generation technologies.](/engines/pypsa-pypsa-eur/power.png)

*European electricity infrastructure in PyPSA-Eur (2022): the network on which energy scenarios are calculated. Credit: Fabian Hofmann, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:European_power_system_infrastructure.png).*
