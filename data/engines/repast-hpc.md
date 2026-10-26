---
about:
  label: Repast HPC
  description: >-
    Open-source C++ toolkit in Argonne's Repast Suite for agent-based
    models split across the processors of a cluster or supercomputer;
    Simphony (Java) and Repast4Py (Python) are its siblings.
  tags:
    - agent-based
    - supercomputing
    - C++
    - distributed simulation
    - Repast
tool:
  form: open-source C++ library
  group: Agents and system dynamics
  homepage: 'https://repast.github.io/repast_hpc.html'
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
    target: engines/flame-gpu
  - predicate: alternative_to
    target: engines/mesa
provenance:
  origin: agent
  sources:
    - title: 'Repast Suite Documentation (home)'
      url: 'https://repast.github.io/'
    - title: 'Repast for High Performance Computing (Repast Suite Documentation)'
      url: 'https://repast.github.io/repast_hpc.html'
    - title: 'Repast Suite Downloads'
      url: 'https://repast.github.io/download.html'
    - title: 'Repast-related Publications'
      url: 'https://repast.github.io/papers.html'
    - title: 'Repast Suite License'
      url: 'https://repast.github.io/license.html'
    - title: 'Repast/repast.hpc (README)'
      url: 'https://github.com/Repast/repast.hpc'
    - title: 'Repast/repast.hpc releases'
      url: 'https://github.com/Repast/repast.hpc/releases'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Repast HPC (Repast for High Performance Computing) is a system for agent-based models, simulations of many interacting individuals, on large-scale distributed computing platforms.[^1,2] One model runs on many processors at once, and they exchange data through the MPI message-passing standard.[^2,6] The toolkit is written in C++ and runs on macOS, Linux and Unix; models can be written in standard C++ or in a Logo-style C++.[^2] It is lean and aimed at experts.[^1,3]

Repast HPC carries the core ideas of Repast Simphony, the suite's Java toolkit, over to distributed computing.[^1,2] It has been tested for scalability on machines from the Top500 list of supercomputers, including Argonne National Laboratory's Mira and Theta.[^2] Building it needs the Boost, NetCDF and curl libraries and an MPI installation; the download is a tar archive with installation instructions, and there is a tutorial and a manual.[^3,6]

The current version, 2.3.1, was released on 21 October 2021, and there has been no release since.[^1,7] The suite is copyright Argonne National Laboratory and released under a New BSD style licence.[^5] The paper to cite is Collier and North, "Parallel Agent-Based Simulation with Repast for High Performance Computing", SIMULATION, 2013.[^4]

The Repast Suite has two other members.[^1] Repast Simphony is a Java toolkit for workstations and small clusters, described as interactive and easy to learn; version 2.12.0 came out on 23 October 2026.[^1] Repast4Py, version 1.3.1 from 22 October 2026, is a Python toolkit for distributed agent-based models, intended as an easier way in for researchers who want large-scale models.[^1]

Repast HPC is for a model of a place that has outgrown one computer, such as one with an agent for every resident of a region, and for a team that can write and build C++ on a cluster. For a first model, Repast Simphony, Repast4Py, [Mesa](/engines/mesa/) or [NetLogo](/engines/netlogo/) are easier starts; [FLAME GPU](/engines/flame-gpu/) reaches large populations on graphics cards instead.
