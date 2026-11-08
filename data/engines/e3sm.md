---
about:
  label: E3SM
  description: >-
    The US Department of Energy's Earth system model, built by eight national
    laboratories for its supercomputers, BSD-licensed, with a C++
    cloud-resolving atmosphere, SCREAM.
  aliases:
    - Energy Exascale Earth System Model
    - SCREAM
    - EAMxx
  tags:
    - climate model
    - Earth system model
    - exascale
    - cloud-resolving
    - GPU
    - CMIP7
    - Fortran
    - C++
tool:
  tier: 2
  form: open-source Earth system model (Fortran, with a C++ atmosphere in development; run on DOE supercomputers)
  group: Weather and climate
  homepage: 'https://e3sm.org/'
  licence: BSD-3-Clause
  cost: free
open:
  source: open
  data: open
  api: unknown
  participation: partly
  licence: BSD-3-Clause
domains:
  - climate
relations:
  - predicate: alternative_to
    target: engines/cesm
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'E3SM, Energy Exascale Earth System Model, home page'
      url: 'https://e3sm.org/'
    - title: 'E3SM, A Decade of Progress: A Timeline (29 February 2024)'
      url: 'https://e3sm.org/e3sm-a-decade-of-progress-a-timeline/'
    - title: 'E3SM Phase 3 (2023 - )'
      url: 'https://e3sm.org/?p=68646'
    - title: 'E3SM-Project/E3SM (README)'
      url: 'https://github.com/E3SM-Project/E3SM'
    - title: 'E3SM-Project/E3SM LICENSE'
      url: 'https://raw.githubusercontent.com/E3SM-Project/E3SM/master/LICENSE'
    - title: 'E3SM Open Source License policy'
      url: 'https://e3sm.org/policies/open-source-license/'
    - title: 'E3SM v3.0.0 release'
      url: 'https://github.com/E3SM-Project/E3SM/releases/tag/v3.0.0'
    - title: 'E3SM v3.1.0 release'
      url: 'https://github.com/E3SM-Project/E3SM/releases/tag/v3.1.0'
    - title: 'EAMxx documentation'
      url: 'https://docs.e3sm.org/E3SM/EAMxx/'
    - title: 'E3SM-Project/scream (archived repository)'
      url: 'https://github.com/E3SM-Project/scream'
    - title: 'Inaugural Gordon Bell Prize for Climate Modeling awarded to multi-institutional national laboratory team (PNNL, 16 January 2024)'
      url: 'https://www.pnnl.gov/news-media/inaugural-gordon-bell-prize-climate-modeling-awarded-multi-institutional-national'
    - title: 'SC23 Spotlight: ACM Introduces First-Ever Gordon Bell Prize for Climate Modeling (HPCwire, 20 September 2023)'
      url: 'https://www.hpcwire.com/off-the-wire/sc23-spotlight-acm-introduces-first-ever-gordon-bell-prize-for-climate-modeling/'
    - title: 'E3SM Supported Machines'
      url: 'https://e3sm.org/model/running-e3sm/supported-machines/'
    - title: 'Running E3SM'
      url: 'https://e3sm.org/model/running-e3sm/'
    - title: 'Validating a microphysical prognostic stratospheric aerosol implementation in E3SMv2 using observations after the Mount Pinatubo eruption (Brown et al., Geoscientific Model Development 17, 5087-5121, 2024), Crossref record'
      url: 'https://api.crossref.org/works/10.5194/gmd-17-5087-2024'
    - title: 'A protocol for model intercomparison of impacts of marine cloud brightening climate intervention (Rasch et al., Geoscientific Model Development 17, 2024), OSTI record'
      url: 'https://www.osti.gov/biblio/2478842'
    - title: 'Quantify Feedback of Climate Intervention under Climate Change (Zhang et al., poster, 3rd Innovations in Climate Resilience Conference, Battelle, April 2024)'
      url: 'https://proceedings.battelle.org/index.cfm/item/30681'
    - title: 'The Energy Exascale Earth System Model Version 3: 1. Overview of the Atmospheric Component (Xie et al., Journal of Advances in Modeling Earth Systems 17, 2025), NSF PAR record'
      url: 'https://par.nsf.gov/biblio/10651618'
    - title: 'New Exascale Earth Modeling System for Energy (Oak Ridge National Laboratory, 24 April 2018)'
      url: 'https://www.ornl.gov/research-highlight/new-exascale-earth-modeling-system-energy'
    - title: 'Energy Exascale Earth System Model v3.0.0, DOE CODE record'
      url: 'https://www.osti.gov/doecode/biblio/123310'
    - title: 'ESGF search at CEDA, CMIP6 datasets with activity GeoMIP (queried 8 November 2026)'
      url: 'https://esgf.ceda.ac.uk/esg-search/search?project=CMIP6&activity_id=GeoMIP&type=Dataset&limit=0&facets=experiment_id,source_id'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the three papers were read as their
    abstracts only, the release dates were read through the GitHub API, and
    the ACM prize page and two DOE abstract pages refused automated reading,
    so the prize is cited from PNNL and HPCwire and the DOE abstracts are not
    used
  status: draft
---
The Energy Exascale Earth System Model (E3SM) is the US Department of Energy's Earth system model: a fully coupled model of the atmosphere, ocean, land and ice, with biogeochemical and cryospheric processes, built for the Department's research needs and for its Leadership Computing Facilities.[^4,19] The project began in October 2014 and took its present name in April 2018, when version 1 was released and the repository on GitHub was made public.[^2] It is funded by the Department's Office of Science through the Biological and Environmental Research program as a Science Focus Area, in three-year phases; Phase 3 began in 2023 and runs to 2026.[^3,19] Eight national laboratories take part: Argonne, Brookhaven, Los Alamos, Lawrence Berkeley, Lawrence Livermore, Oak Ridge, Pacific Northwest and Sandia.[^1,20] At the 2018 release Oak Ridge counted more than a hundred scientists and software engineers on the project.[^19] The model could run climate-length simulations at the resolution weather forecasters use for a ten-day outlook, and every component could concentrate its resolution on a region.[^19] Its science drivers in Phase 3 are water cycle changes, feedbacks between human and Earth systems, and polar processes with sea level and coastal impacts.[^3]

## Versions

Version 2 came in September 2021 with regionally refined meshes in every component.[^2] Version 3.0.0 was tagged on 4 March 2024.[^7,20] In its default low-resolution configuration the atmosphere, EAM, runs on the ne30pg2 grid with 80 vertical layers, up from 72.[^7] The ocean and sea ice, MPAS-Ocean and MPAS-Seaice, run on a new global 30 km mesh with Antarctic ice shelf cavities, and the land model ELM and the river model share a half-degree grid.[^7] Version 3 added stratospheric and tropospheric gas chemistry to the atmosphere, made dynamic vegetation with coupled carbon, nitrogen and phosphorus cycles the land default, and adopted Icepack for sea ice column physics.[^7] The atmospheric component is described by Xie and some sixty co-authors in 2025; eight of the new layers sit in the lower stratosphere, added to improve the quasi-biennial oscillation.[^18] Patch releases 3.0.1 and 3.0.2 followed in October and December 2024.[^1] Version 3.1.0, released on 27 October 2026, adds a high-resolution coupled configuration, v3.HR, compsets for CMIP7, coupling with the GCAM human system model and infrastructure for AI and machine-learning emulators.[^8] When Phase 3 began the project planned version 4 for 2026; its 2024 timeline put it at 2027, as a fully coupled model that runs on GPUs.[^2,3] A C++ ocean model, OMEGA, is under development.[^3]

## SCREAM and EAMxx

Alongside the Fortran model the project rewrote its atmosphere. A Fortran prototype, SCREAMv0, was followed in 2023 by SCREAMv1, a C++ and Kokkos model for GPUs, which on the Frontier exascale machine broke the barrier of one simulated year per day of computing.[^2] The paper "The Simple Cloud-Resolving E3SM Atmosphere Model Running on the Frontier Exascale System" won the inaugural ACM Gordon Bell Prize for Climate Modelling in 2023.[^11] Its nineteen authors came from Sandia, Lawrence Livermore, Argonne, Oak Ridge, Pacific Northwest and Hewlett Packard Enterprise, and the run reached 1.26 simulated years per day.[^11] It used nearly the whole of Frontier, and the same code runs on AMD and NVIDIA GPUs.[^12] SCREAMv1 then became the foundation of EAMxx, the C++ atmosphere model.[^2] EAMxx is a clean start, built from the ground up in modern C++ and using Kokkos so that one code runs on different processors.[^9] Only the kilometre-scale, explicit-convection configuration called SCREAM is available; a low-resolution version is in development.[^9] In version 3.1 EAMxx remains optional and not supported in production, and its development moved into the main repository during that cycle; the separate scream repository was archived on 6 November 2026.[^8,10] Global SCREAM output at ten-minute steps, repackaged for training machine-learning emulators is described under [STRATA-SCREAM](/data-sources/nvidia-strata-scream/).

## Licence and running

The code is under the 3-clause BSD licence, with the copyright held by UChicago Argonne, LLC, and the project's policy page adds that model output, including what it submits to CMIP and the Earth System Grid Federation, is under CC BY 4.0.[^5,6] Development has been in the open since the April 2018 release.[^6] The repository is mostly Fortran, with C++ the second language.[^4] Users are told to work from the maintenance branches, because the head of the master branch is not validated, and only scientifically validated configurations are supported and guaranteed to run at the DOE computing centres.[^4,14] The project gives external support only for Perlmutter at NERSC; the Anvil, Chrysalis and Compy machines are for project members, and E3SM itself provides no computer time, so an outside user needs an allocation of their own.[^13]

## Climate intervention

E3SM is not among the eight models with [GeoMIP](/data-sources/geomip/) output in the CMIP6 archive.[^21] Work toward it exists. Brown and co-authors added prognostic stratospheric sulfate aerosol to E3SMv2 and tested it against observations after the 1991 Pinatubo eruption.[^15] The aerosol lifetime, burden and optical depth matched satellites about as well as CESM2-WACCM did, while the particles came out smaller than measured, by up to 30 per cent.[^15] Rasch and co-authors ran a regional marine cloud brightening protocol in CESM2, E3SMv2 and UKESM1, and found CESM2's clouds much more susceptible to aerosol than the other two models'.[^16] An Oak Ridge poster in 2024 reported implementing the stratospheric chemistry mechanism of WACCM in E3SM to study stratospheric aerosol injection under CMIP6 scenarios.[^17] No published E3SM injection ensemble is known to this entry.

Like [CESM](/engines/cesm/), E3SM is a global model. Its output feeds regional work; a city or watershed would not run it. See [Weather and climate](/questions/weather-and-climate/).
