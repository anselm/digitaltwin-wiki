---
about:
  depiction: engines/madingley.jpg
  depiction_credit: 'Schematic of the Madingley model: cohorts of animals in a grid cell, the structure that emerges, and grid cells linked by dispersal. Figure 1 of Harfoot et al. 2014, PLoS Biology, CC BY 4.0.'
  label: Madingley model
  description: >-
    Open research model of plant and animal life on land and at sea, from
    plankton to whales, built from how organisms eat, grow, breed, move and
    die; runs from one grid cell to the globe.
  aliases:
    - MadingleyR
  tags:
    - ecosystem model
    - biodiversity
    - food web
    - global
    - R package
tool:
  form: research model, C# and C++ code with an R package
  group: Ecosystems and land
  homepage: 'https://madingley.github.io/'
  licence: GPL-3.0-or-later (MadingleyR)
  cost: free
domains:
  - ecology
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: GPL-3.0-or-later (MadingleyR); no licence stated for the C# code
relations:
  - predicate: alternative_to
    target: engines/ecopath-with-ecosim
provenance:
  origin: agent
  sources:
    - title: 'Madingley Model | Home'
      url: 'https://madingley.github.io/'
    - title: 'Emergent Global Patterns of Ecosystem Structure and Function from a Mechanistic General Ecosystem Model (Harfoot et al. 2014, PLoS Biology 12, e1001841)'
      url: 'https://doi.org/10.1371/journal.pbio.1001841'
    - title: 'Madingley · GitHub'
      url: 'https://github.com/Madingley'
    - title: 'MadingleyR/MadingleyR (README)'
      url: 'https://github.com/MadingleyR/MadingleyR'
    - title: 'MadingleyR package DESCRIPTION'
      url: 'https://github.com/MadingleyR/MadingleyR/blob/master/Package/DESCRIPTION'
    - title: 'MadingleyR: An R package for mechanistic ecosystem modelling (Hoeks et al. 2021, Global Ecology and Biogeography 30, 1922-1933; abstract from OpenAlex)'
      url: 'https://doi.org/10.1111/geb.13354'
    - title: 'Digital twins as a tool for ecosystem research (Visser et al. 2026, Trends in Ecology & Evolution)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Madingley model is a general ecosystem model: one set of ecological rules meant to apply to any ecosystem, on land or at sea.[^2] It was first described in 2014 by Mike Harfoot, Tim Newbold, Derek Tittensor and colleagues at the UN Environment Programme World Conservation Monitoring Centre (UNEP-WCMC) and Microsoft Research in Cambridge.[^2] It was meant to do for life on land and in the sea what climate models do for the atmosphere, projecting what fishing, farming, climate change and other human pressures do to ecosystems.[^1]

Plants and phytoplankton are kept as stocks of total biomass.[^2] Animals that eat living things, herbivores, omnivores and carnivores from 10 micrograms to 150 tonnes, are modelled as cohorts: groups of identical individuals in the same grid cell, which stands in for simulating every individual.[^2] In the 2014 runs, each month the cohorts metabolise, eat, grow, reproduce, die and disperse to neighbouring cells, and food webs, trophic pyramids and body-size patterns emerge rather than being set.[^2] Inputs are environmental layers such as air and sea temperature, rainfall, soil water and ocean currents.[^2] The 2014 runs used single 1° cells and a 2° global grid, leaving out the poles beyond 65° and freshwater; seagrasses, mangroves, seaweeds and corals were not yet included.[^2]

The code is free to download, and anyone may use and modify it.[^1] The Madingley organisation on GitHub holds the C# version used by the UNEP-WCMC team, whose last change was in May 2018, and an archive repository for the 2014 paper.[^3] MadingleyR, an R package around a C++ version of the model, was published in 2021 so that users would not need to program in C++ and could change settings between runs.[^6] It installs with default input layers and a precompiled executable, is licensed GPL-3.0 or later, and its maintainer, Selwyn Hoeks, released v1.0.6 (C++ code v2.02) in June 2024.[^4,5]

For a place, the model can be run on a single region or country as well as the globe.[^1] The MadingleyR paper's case studies remove mega-herbivores to follow the knock-on effects through the food web, and restrict the plant biomass available for feeding to stand for more intensive land use.[^6] [Ecopath with Ecosim](/engines/ecopath-with-ecosim/) answers similar questions from a food web built for one ecosystem. The 2026 paper [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) cites the 2014 Madingley paper on the difficulty of scenario studies that use local data for a whole ecosystem.[^7]
