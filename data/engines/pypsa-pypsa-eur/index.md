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
    - title: 'Licenses - PyPSA-Eur'
      url: 'https://pypsa-eur.readthedocs.io/en/stable/licenses/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The framework holds no data.[^1] Users build networks of buses (the nodes where lines meet), loads, generators, storage and links, then solve dispatch, power-flow and investment problems over those networks.[^1] The name stands for Python for Power System Analysis, and the Department of Digital Transformation in Energy Systems at Technische Universität Berlin maintains the code.[^1]

PyPSA-Eur is one of several models built with PyPSA.[^1] It represents the European energy system at transmission-network level across the whole ENTSO-E area, the territory of the European association of grid operators.[^2] A sector-coupled extension adds transport, heating, biomass, industry and carbon management.[^2] Sister models are PyPSA-DE for Germany, PyPSA-USA for the United States and PyPSA-Earth for the world.[^1]

The framework handles economic dispatch (choosing which plants run, at least cost), linear and security-constrained optimal power flow, and capacity expansion, and it also covers multi-period pathway planning, rolling-horizon and stochastic optimisation, and policy constraints such as CO2 limits.[^1] PyPSA-Eur is described as suitable for operational studies and for generation and transmission expansion planning.[^2] One of the project's showcases is a study of a possible European hydrogen network, published in Joule in 2023.[^2]

Both are free under the MIT licence for academic and commercial use.[^1,3] PyPSA-Eur uses only freely available data, and an automated workflow assembles the model from the original datasets.[^2] It is tested on Linux, macOS and Windows (WSL), and open-source solvers such as HiGHS work, though the project recommends commercial solvers for very large problems.[^1,2] Several consultancies sell support.[^1]

The PyPSA-Eur documentation warns that the model has known limitations and is under active development.[^2] The community held a user meeting in June 2026.[^1]

![European electricity infrastructure as represented in PyPSA-Eur: transmission links and generation technologies.](/engines/pypsa-pypsa-eur/power.png)

*European electricity infrastructure in PyPSA-Eur (2022): the network on which energy scenarios are calculated. Credit: Fabian Hofmann, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:European_power_system_infrastructure.png).*
