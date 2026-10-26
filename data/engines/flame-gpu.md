---
about:
  label: FLAME GPU 2
  description: >-
    University of Sheffield library that runs very large agent-based models
    on NVIDIA graphics processors, from C++ or Python; AGPL-3.0, or a
    commercial licence.
  tags:
    - agent-based
    - GPU
    - CUDA
    - Python
    - large-scale simulation
tool:
  form: open-source C++ and Python library
  group: Agents and system dynamics
  homepage: 'https://flamegpu.com/'
  licence: AGPL-3.0 or commercial
  cost: free under AGPL-3.0; commercial licence by negotiation
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: AGPL-3.0
domains:
  - people
  - places
relations:
  - predicate: alternative_to
    target: engines/repast-hpc
  - predicate: alternative_to
    target: engines/agents-jl
  - predicate: answers
    target: questions/crowds-and-evacuation
provenance:
  origin: agent
  sources:
    - title: 'FLAME GPU'
      url: 'https://flamegpu.com/'
    - title: 'About FLAME GPU'
      url: 'https://flamegpu.com/about/'
    - title: 'FLAMEGPU/FLAMEGPU2 (README)'
      url: 'https://github.com/FLAMEGPU/FLAMEGPU2'
    - title: 'FLAME GPU license'
      url: 'https://flamegpu.com/download/license/'
    - title: 'FLAME GPU models'
      url: 'https://flamegpu.com/models/'
    - title: 'FLAMEGPU/FLAMEGPU2 releases'
      url: 'https://github.com/FLAMEGPU/FLAMEGPU2/releases'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
FLAME GPU, the Flexible Large-scale Agent Modelling Environment for GPUs, is a simulator for agent-based models, in which many individuals interact, that puts the parallelism of graphics cards to work.[^1,2,3] The modeller describes what each kind of agent does and how agents communicate, are born and die, and FLAME GPU maps that onto optimised CUDA code for NVIDIA GPUs, so the modeller need not know GPU programming.[^1,3] Because the agents' data is already on the graphics card, large populations can be shown moving in real time.[^1,3] It is developed by Paul Richmond and colleagues at the University of Sheffield.[^1,2]

Version 2 is a complete rewrite with C++ and Python interfaces.[^1,3] It can run ensembles, the same model many times with different settings or random seeds, spread over several GPUs on one computer, and supports reusable sub-models.[^2] It needs an NVIDIA GPU and CUDA 12 or later.[^3] Python users can install pre-built packages with pip; the C++ library is built from source.[^3]

FLAME GPU 2 is still a release candidate, so its interface may change before a stable release, and writing agent functions in Python syntax is experimental.[^3] The latest release candidate, 2.0.0-rc.5, came out in October 2026.[^6] Current versions are available under the AGPL-3.0 licence, which requires that a model distributed to others comes with its source code, or under a commercial licence with a fee negotiated by use; earlier versions were MIT-licensed.[^4] The software to cite is Richmond, Chisholm, Heywood, Leach and Kabiri Chimeh, FLAME GPU, Zenodo, 2021.[^2]

Among the project's case studies is a road network model of vehicles and junctions, built with Fujitsu Research Europe as a digital twin of the Isle of Wight.[^5] Others model infectious disease spreading inside buildings, and how train door width and carriage layout affect passengers boarding at the platform.[^5] Those show the use for a place: traffic, crowds or an epidemic simulated individual by individual at large scale, fast enough to run many scenarios. [Repast HPC](/engines/repast-hpc/) reaches similar sizes on supercomputers instead of graphics cards.
