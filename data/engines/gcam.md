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
open:
  source: open
  data: unknown
  api: unknown
  participation: open
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
GCAM descends from the Edmonds-Reilly model begun in 1980. That model was renamed MiniCAM in the 1990s and GCAM in the 2000s, when the core was rewritten in C++.[^2] It computes five interacting systems in one run: the macro-economy, energy, agriculture and land use, water, and the physical climate.[^2] The climate part runs through the Hector emulator, a simplified stand-in for a full climate model.[^2]

GCAM is a tool for what-if scenarios, not prediction.[^2] Given assumptions about population, economic growth, technology costs and policies, it solves for the market prices at which supply meets demand in each region.[^2] It reports energy flows, land use, water use and emissions of 24 greenhouse gases and short-lived species.[^2]

Its scenarios have fed assessments since the first IPCC scenarios in 1990, and more recently the Shared Socioeconomic Pathways, the standard storylines of future society used in climate research.[^2] GCAM is coupled to downscaling tools, which carry coarse results down to finer areas, and to an Earth system model.[^2] The release version runs 32 energy-economy regions, 396 land subregions and 235 water basins in five-year steps calibrated to 2015.[^2] GCAM-USA and GCAM-China add state and provincial detail.[^2]

GCAM is a community model, free to download from GitHub.[^2] The core is in C++, an R data system builds the XML inputs, and outputs are XML.[^2] It runs on Windows, Linux, Mac and high-performance computing systems.[^2] Support is through GitHub issues and a listserv only.[^2] Modified versions must be named GCAM-something.[^2] The current release is v8.2.[^1,2]
