---
about:
  label: MAGICC
  description: >-
    Simple climate and carbon-cycle model that projects global temperature
    from emissions scenarios; used in IPCC assessments, runnable online, with
    an open-source rewrite on GitLab.
  aliases:
    - Model for the Assessment of Greenhouse Gas Induced Climate Change
  tags:
    - climate model
    - emulator
    - emissions scenarios
    - global temperature
    - carbon cycle
tool:
  form: research model, downloadable binary and web interface
  group: Weather and climate
  homepage: 'https://magicc.org/'
  licence: 'BSD-3-Clause with an extra clause (7.6 onward); CC BY 4.0 binary and CC BY-NC 4.0 probabilistic set (7.5.3)'
  cost: free
open:
  source: open
  data: partly
  api: unknown
  participation: partly
  licence: 'BSD-3-Clause with the MAGICC clause'
domains:
  - climate
relations:
  - predicate: alternative_to
    target: engines/fair-climate-model
  - predicate: alternative_to
    target: engines/hector-climate-model
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'MAGICC: The climate system in a nutshell'
      url: 'https://magicc.org/'
    - title: 'MAGICC 7.5.3 download | MAGICC'
      url: 'https://magicc.org/download/magicc7'
    - title: 'magicc/magicc (README)'
      url: 'https://gitlab.com/magicc/magicc'
    - title: 'magicc/magicc LICENCE'
      url: 'https://gitlab.com/magicc/magicc/-/blob/main/LICENCE'
    - title: 'Emulating coupled atmosphere-ocean and carbon cycle models with a simpler model, MAGICC6 – Part 1: Model description and calibration (Crossref record)'
      url: 'https://api.crossref.org/works/10.5194/acp-11-1417-2011'
    - title: 'Climate (MAGICC), message-ix-models documentation'
      url: 'https://docs.messageix.org/projects/models/en/latest/global/climate/index.html'
    - title: 'magicc/magicc tags'
      url: 'https://gitlab.com/magicc/magicc/-/tags'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the 2011 paper was read as its abstract
    only, and live.magicc.org could not be read without running its scripts
  status: draft
---
The Model for the Assessment of Greenhouse Gas Induced Climate Change (MAGICC) is a simple climate model, also called a reduced-complexity model.[^1,3] It joins a global carbon cycle to a climate model and works only at the scale of the globe and its hemispheres.[^1,6] It has been developed continually for more than 30 years.[^1] It has informed IPCC assessments; most recently, Working Group 3 of the Sixth Assessment Report used it to sort emissions scenarios by the warming they imply, and several integrated assessment modelling groups use it.[^3]

Given the emissions of a scenario, MAGICC calculates concentrations of greenhouse gases and other climate drivers such as air pollutants, the radiative forcing they cause (the extra energy they trap), global annual mean surface air temperature and the heat taken up by the ocean.[^6] It is an energy-balance model with an upwelling-diffusion ocean, and reports temperature for the globe and for each hemisphere.[^6] It can run once with one set of parameters, or in a probabilistic set-up that estimates the chance of staying below a temperature level for a given emissions path.[^6] Version 6 is described by Meinshausen, Raper and Wigley in Atmospheric Chemistry and Physics, 2011.[^5] They calibrated it against the larger ocean-atmosphere models of the IPCC's Fourth Assessment Report, and for the scenarios tested its average result came within 2.2% of theirs.[^5]

There are three ways in. Version 7.5.3, with the probabilistic parameter set used in the IPCC's Sixth Assessment Report, can be downloaded as a Windows or Linux program after registering.[^1,2] The program is under CC BY 4.0, and the probabilistic set is under CC BY-NC 4.0, which forbids commercial use.[^2] The makers also ask users who plan a paper or presentation to contact them at the start, not to pass copies on, and to discuss co-authorship when the model is central to the work.[^2] A web interface at live.magicc.org runs single or probabilistic runs without installing anything or writing code.[^1,2] Development from version 7.6 onward is open on GitLab.[^1,2]

The open code is under a 3-clause BSD licence with one added clause.[^3,4] Anyone who uses or redistributes a modified version must, within a month, register the fork by a pull request to the magicc-forks repository, with a link to its code and the parameter settings behind any results.[^4] Using the model unmodified carries only the BSD terms.[^3,4] The licence is issued by MAGICC7 Plus IP Co Ltd, and the website is maintained by Climate Resource.[^1,3] The rewrite is somewhere between an alpha and a beta release, with little documentation yet on how to contribute.[^3] The latest tags are alpha releases of 7.6.0 from December 2024.[^7]

MAGICC is also the climate component of IIASA's [MESSAGEix-GLOBIOM](/engines/messageix/) framework.[^6] Like [FaIR](/engines/fair-climate-model/) and [Hector](/engines/hector-climate-model/), it answers a global question: how much the world warms under a given emissions path.[^1,6] A study of one city or watershed can take that path and its range of outcomes as a starting point before turning to regional projections such as the [IPCC](/organizations/ipcc/)'s; see [Weather and climate](/questions/weather-and-climate/).
