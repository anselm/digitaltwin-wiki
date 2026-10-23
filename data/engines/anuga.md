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
  group: Water and flooding
  homepage: 'https://anuga.readthedocs.io/en/latest/'
  licence: Apache 2.0
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: 'Apache 2.0'
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
    - title: Background — ANUGA documentation
      url: 'https://anuga.readthedocs.io/en/latest/background.html'
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
ANUGA solves the two-dimensional shallow water equations, which describe water flowing over ground when its depth is small next to its spread.[^4,5] It works on a mesh of triangular cells.[^5] The project began as a collaboration between Geoscience Australia and the Mathematical Sciences Institute at the Australian National University. A community of volunteers now maintains it, and Stephen Roberts at ANU leads development.[^1,2] ANUGA is a Python 3 package with C and Cython extensions.[^1]

Hydrata is a hydraulic-model verification service in Sydney, founded by David Kennewell.[^4] It runs unmodified ANUGA as its engine and cites validation against more than thirty benchmarks and over a hundred peer-reviewed papers.[^4]

A run is a Python script. It creates a mesh domain, sets initial conditions, boundaries, rainfall, operators and river walls, then steps the evolve loop.[^1,5] A scenario written in TOML, a plain configuration format, can be run from the command line instead.[^1] ANUGA installs from conda-forge or in GitHub Codespaces.[^2] It supports OpenMP threading on one machine and MPI distribution across several.[^1] A GPU build using OpenMP target offloading was developed with C-DAC in India and NCI in Australia.[^1,2]
