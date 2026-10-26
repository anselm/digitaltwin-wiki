---
about:
  label: Hector
  description: >-
    Open-source simple climate and carbon-cycle model that projects global
    temperature from emissions in moments; GCAM's climate component, run
    from R, the command line or a web app.
  aliases:
    - Hector simple climate model
  tags:
    - climate model
    - emulator
    - carbon cycle
    - global temperature
    - R
tool:
  form: open-source research model (C++ with an R package)
  group: Weather and climate
  homepage: 'https://jgcri.github.io/hector/'
  licence: GPL-3.0
  cost: free
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: GPL-3.0
domains:
  - climate
relations:
  - predicate: alternative_to
    target: engines/fair-climate-model
  - predicate: alternative_to
    target: engines/magicc
  - predicate: part_of
    target: engines/gcam
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'The Hector Simple Climate Model (documentation)'
      url: 'https://jgcri.github.io/hector/'
    - title: 'JGCRI/hector (README)'
      url: 'https://github.com/JGCRI/hector'
    - title: 'Hector general summary'
      url: 'https://jgcri.github.io/hector/articles/HectorSummary.html'
    - title: 'Hector in the Wider World'
      url: 'https://jgcri.github.io/hector/articles/Hector-Wider-World.html'
    - title: 'Building Hector'
      url: 'https://jgcri.github.io/hector/articles/BuildHector.html'
    - title: 'A simple object-oriented and open-source model for scientific and policy analyses of the global climate system – Hector v1.0 (Crossref record)'
      url: 'https://api.crossref.org/works/10.5194/gmd-8-939-2015'
    - title: 'JGCRI/hector releases'
      url: 'https://github.com/JGCRI/hector/releases'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; the 2015 paper was read as its abstract only'
  status: draft
---
Hector is an open-source simple climate model, also called a reduced-complexity model: it represents only the most important global processes of the Earth system, coarsely in space and time, so it runs very quickly.[^1,3] It takes emissions of carbon dioxide and other gases such as methane and nitrous oxide, converts them to concentrations where needed, and calculates global radiative forcing (the extra energy the gases trap) and the change in global mean temperature.[^4] Such models can be coupled to other models, used to design scenarios, made to imitate larger climate models, and run many times over to study uncertainty.[^1]

It is the default carbon-cycle module of the integrated assessment model [GCAM](/engines/gcam/), whose code sits beside it in the JGCRI organisation on GitHub.[^1,3] The documentation credits support from the US Department of Energy's Office of Science and names Pacific Northwest National Laboratory, which the Department runs through Battelle.[^1] Kalyn Dorheim maintains it with Ben Bond-Lamberty.[^1]

The model has one well-mixed atmosphere and land made of vegetation, detritus and soil.[^3] Its ocean has four boxes: cold high-latitude surface water, warm low-latitude surface water, an intermediate layer and the deep ocean.[^3] Its land carbon cycle can be split into any set of regions, such as biomes or countries.[^6] It solves the chemistry of carbon in the surface ocean, so it also gives ocean pH.[^6] Its basic time step is one year.[^3] Version 2 added a heat-diffusion ocean and a global sea-level module.[^3,4] Version 3.2.0, described in Geoscientific Model Development in 2024, uses the radiative forcing calculations of the IPCC's Sixth Assessment Report and adds permafrost thaw and a way to track where carbon goes.[^4] The first version was described by Hartin and co-authors in the same journal in 2015, which found that it reproduced historical trends in carbon dioxide, forcing and temperature.[^4,6]

The code is C++ with Boost as its only outside dependency, and it ships as an R package installed from GitHub; it can also be built as a command-line program.[^1,5] Outside collaborators maintain pyhector, a Python interface, and HectorUI is a web app for running it without C++ or R.[^1,4] Probabilistic analyses with it can be run through Matilda, an R package.[^4] It is under GPL-3.0, and version 3.5.5 was released in September 2026.[^1,7]

Like [FaIR](/engines/fair-climate-model/) and [MAGICC](/engines/magicc/), Hector says how much the whole world warms under a given emissions path.[^4] A local study of heat, flooding or crops can try out the global consequences of different scenarios in HectorUI before choosing which to carry into regional projections.[^4] See [Weather and climate](/questions/weather-and-climate/).
