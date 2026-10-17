---
about:
  label: ANUGA
  description: >-
    Open-source shallow-water solver from Geoscience Australia and the
    Australian National University for simulating floods, tsunamis and storm
    surge.
  tags:
    - flood
    - tsunami
    - hydrodynamics
    - shallow water
    - python
tool:
  form: open-source hydrodynamic solver (Python with C extensions)
  homepage: 'https://anuga.readthedocs.io/en/latest/'
  licence: Apache 2.0
  cost: free
provenance:
  origin: agent
  sources:
    - title: ANUGA documentation
      url: 'https://anuga.readthedocs.io/en/latest/'
    - title: anuga-community/anuga_core
      url: 'https://github.com/anuga-community/anuga_core'
    - title: anuga_core/LICENSE.txt
      url: 'https://raw.githubusercontent.com/anuga-community/anuga_core/main/LICENSE.txt'
    - title: About Hydrata
      url: 'https://hydrata.com/about'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT026
  kind: enabling_simulator
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P117
  posters:
    - David Kennewell
domains:
  - water
---
ANUGA solves the two-dimensional shallow water equations on an unstructured mesh. It began as a collaboration between Geoscience Australia and the Mathematical Sciences Institute at the Australian National University and is now maintained by a community of volunteers; Stephen Roberts at ANU leads development. It is a Python 3 package with C and Cython extensions.

It is used to model floods, tsunamis and storm surges. Hydrata, a Sydney hydraulic-model verification platform founded by David Kennewell, runs unmodified ANUGA as its engine and cites validation against more than thirty benchmarks and over a hundred peer-reviewed papers.

A run is built in Python: create a mesh domain, set initial conditions, boundaries, rainfall, operators and river walls, then step the evolve loop; a TOML scenario can be run from the command line instead. It installs from conda-forge or in GitHub Codespaces. OpenMP threading and MPI distribution are supported, and the documentation describes a GPU build using OpenMP target offloading, developed with C-DAC in India and NCI in Australia.

Mature and maintained; licensed Apache 2.0.
