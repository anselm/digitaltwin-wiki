---
about:
  label: GCAM
  description: >-
    Global Change Analysis Model from the Joint Global Change Research
    Institute; links energy, water, agriculture and land, the economy and
    climate in long-run global scenarios.
  tags:
    - integrated assessment
    - scenarios
    - emissions
tool:
  form: Integrated assessment model
  group: Ecosystems and land
  homepage: 'https://jgcri.github.io/gcam-doc/'
domains:
  - food
relations:
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: 'GCAM v8.2 Documentation: Global Change Analysis Model (GCAM)'
      url: 'https://jgcri.github.io/gcam-doc/'
    - title: 'GCAM v8.2 Documentation: GCAM Model Overview'
      url: 'https://jgcri.github.io/gcam-doc/overview.html'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
GCAM, the Global Change Analysis Model, is a global model maintained by the Joint Global Change Research Institute (JGCRI). It represents five interacting systems in one computation: the macro-economy, energy, agriculture and land use, water, and the physical climate, the last through the Hector emulator. It descends from the Edmonds-Reilly model begun in 1980, renamed MiniCAM in the 1990s and GCAM in the 2000s when the core was rewritten in C++.

It is used for what-if scenarios rather than prediction: given assumptions about population, economic growth, technology costs and policies, it solves market prices so that supply meets demand across regions and reports energy flows, land use, water use and emissions of 24 greenhouse gases and short-lived species. It has produced scenarios for assessments from the first IPCC scenarios in 1990 to the Shared Socioeconomic Pathways, and is coupled to downscaling tools and to an Earth system model. The release version runs 32 energy-economy regions, 396 land subregions and 235 water basins in five-year steps calibrated to 2015; GCAM-USA and GCAM-China add state and provincial detail.

A community model: free to download from GitHub, with a C++ core, an R data system that builds its XML inputs, and XML outputs. It runs on Windows, Linux, Mac and high-performance computing systems. Support is through GitHub issues and a listserv only; modified versions must be named GCAM-something.

Current release v8.2, under continuing development.
