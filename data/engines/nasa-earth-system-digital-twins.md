---
about:
  label: NASA Earth System Digital Twins
  description: >-
    NASA's Earth Science Technology Office funds research prototypes of
    Earth system digital twins, linked models and observations that mirror
    part of the Earth, forecast it and run what-if scenarios; funded projects
    cover coastal flooding, farming, wildfire smoke and land hydrology.
  tags:
    - Earth system
    - United States
    - research funding
    - flooding
    - agriculture
    - wildfire smoke
    - hydrology
tool:
  form: Public research funding program
  group: Weather and climate
  homepage: 'https://esto.nasa.gov/earth-system-digital-twin/'
open:
  source: unknown
  data: unknown
  api: unknown
  participation: partly
domains:
  - climate
  - water
  - food
  - fire
  - places
relations:
  - predicate: answers
    target: questions/weather-and-climate
  - predicate: answers
    target: questions/flooding
  - predicate: answers
    target: questions/wildfire
provenance:
  origin: agent
  sources:
    - title: 'Earth System Digital Twins - NASA Earth Science and Technology Office'
      url: 'https://esto.nasa.gov/earth-system-digital-twin/'
    - title: 'Home - NASA Earth Science and Technology Office'
      url: 'https://esto.nasa.gov/'
    - title: 'Advanced Information Systems Technology - NASA Earth Science and Technology Office'
      url: 'https://esto.nasa.gov/aist/'
    - title: 'Advanced Modeling Technology - NASA Earth Science and Technology Office'
      url: 'https://esto.nasa.gov/amt/'
    - title: 'Project Selections for AIST-21 - NASA Earth Science and Technology Office'
      url: 'https://esto.nasa.gov/project-selections-for-aist-21/'
    - title: 'NASA Agricultural Digital Twin will help farmers improve crop yield forecasts - NASA Earth Science and Technology Office'
      url: >-
        https://esto.nasa.gov/nasa-agricultural-digital-twin-will-help-farmers-improve-crop-yield-forecasts/
    - title: 'About NASA''s Earth Science Technology Office'
      url: 'https://esto.nasa.gov/about-esto/'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Earth Science Technology Office (ESTO) is the technology program inside NASA's Earth Science Division, and it gives grants to universities, companies and other institutions through open, competitive solicitations. Earth System Digital Twins (ESDT) began as one of three lines of work in its Advanced Information Systems Technology (AIST) program. In 2024 ESTO added the Advanced Modeling Technology (AMT) program, and ESDT now sits there, with Laura Rogers as program manager.

AMT defines a twin as an "interactive and integrated multidomain, multiscale, digital replica of the state and temporal evolution of Earth systems." In plain terms, it is a model of some part of the Earth that keeps taking in fresh observations, runs alongside other models such as those of infrastructure, and lets users try hypothetical scenarios. ESTO describes three parts. A digital replica shows the current state of the system, kept accurate by data assimilation, the routine of blending live measurements into a running model. Forecasting predicts the next states in real or near-real time, using machine learning and surrogate models, which are fast stand-ins trained to imitate slower physics models. Impact assessment runs many simulated futures quickly to answer "what-if" questions, such as how one system affects another. Read together, these are what is happening now, what happens next, and what would happen if.

NASA announced the AIST-21 selections on 4 May 2022: ESTO evaluated 65 proposals and chose 28 for two-year awards totalling $31M. Several are twins of particular places or processes, described here as their proposals put them:

- Pixels for Public Health (Thomas Allen, Old Dominion University Research Foundation) addresses compound flooding from tides, rain and storm surge in Norfolk and the wider Hampton Roads region of Virginia. It links satellite imagery from the Virginia Open Data Cube with hydrodynamic flood models and a network of flood sensors on the ground. A "Digital Neighborhood" of social and health data from the Hampton Roads Biomedical Research Consortium joins them. A web hub is planned for flood forecasters, planners, health practitioners and emergency managers.
- Digital Twin Infrastructure Model for Agricultural Applications (Rajat Bindlish, NASA Goddard Space Flight Center) covers the continental United States. It couples NASA's Land Information System, a land and water model, with crop models including DSSAT. A neural network then predicts county-level yield from the Department of Agriculture's historical yield reports and the models' outputs.
- Towards a NU-WRF based Mega Wildfire Digital Twin (Milton Halem, University of Maryland Baltimore County) proposes a regional model finer than 1 km for wildfire smoke scenarios anywhere over North America. It adds a fire model to NASA Unified WRF, a weather model. Its scenarios cover smoke's effects on air quality and on heart and lung disease, and regional deforestation.
- TERRAHydro (Craig Pelissier, Science Systems and Applications, Inc.) proposes a Python framework for a land twin of water, energy and vegetation. It is built around machine-learning hydrology models, with ensemble forecasts and counterfactual experiments.
- DTAS, a prototype twin of air-sea interactions (Alison Gray, University of Washington), focuses on the Gulf Stream. It proposes a hybrid physics and machine-learning model, trained against estimates of air-sea exchange computed from measurements by Saildrones, autonomous ocean platforms.

ESTO's March 2025 article on the agricultural twin reports its framework complete and the team exploring case studies, giving the example of simulating how a corn variety in Iowa would fare in a drought. The team hopes to share the work through a web portal. The article credits ESTO's Information Systems Technology program with the funding. A further 13 AMT projects were selected under the 2023 AIST solicitation, and their award list is marked "Updates Pending." AIST co-organized an ESDT workshop with Earth Science Information Partners (ESIP) on 26 to 28 October 2022, and held a workshop on standards for interoperable twins on 18 September 2023.
