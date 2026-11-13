---
about:
  label: Earth system model
  description: >-
    A climate model with the living world wired in. The carbon that plants
    and oceans take up feeds back on the climate that drives them, so the
    model runs on emissions, not on a prescribed CO2 curve.
  tags:
    - Earth system model
    - ESM
    - climate models
    - carbon cycle
    - biogeochemistry
    - ensembles
    - CMIP
    - whole systems
term:
  aka:
    - ESM
    - Earth system models
    - coupled Earth system model
    - EMIC
relations:
  - predicate: cites
    target: engines/cesm
  - predicate: cites
    target: engines/e3sm
  - predicate: cites
    target: data-sources/cmip6
  - predicate: cites
    target: data-sources/geomip
  - predicate: cites
    target: data-sources/cdrmip
  - predicate: cites
    target: data-sources/glens-and-arise-sai
  - predicate: cites
    target: terms/geoengineering
domains:
  - climate
provenance:
  origin: agent
  sources:
    - title: 'IPCC, 2021: Annex VII: Glossary, in Climate Change 2021: The Physical Science Basis (AR6 Working Group I)'
      url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_AnnexVII.pdf'
    - title: 'Overview of the Coupled Model Intercomparison Project Phase 6 (CMIP6) experimental design and organization (Eyring et al., Geoscientific Model Development 9, 1937-1958, 2016)'
      url: 'https://doi.org/10.5194/gmd-9-1937-2016'
    - title: 'Earth system models: an overview (Flato, WIREs Climate Change 2, 783-800, 2011; abstract)'
      url: 'https://doi.org/10.1002/wcc.148'
    - title: 'Earth system models of intermediate complexity: closing the gap in the spectrum of climate system models (Claussen et al., Climate Dynamics 18, 579-586, 2002; Crossref record, title and authors only)'
      url: 'https://api.crossref.org/works/10.1007/s00382-001-0200-1'
    - title: 'Insights from Earth system model initial-condition large ensembles and future prospects (Deser et al., Nature Climate Change 10, 277-286, 2020; abstract)'
      url: 'https://doi.org/10.1038/s41558-020-0731-2'
    - title: 'Earth System Sciences Committee (ESSC) Records (NCAR Archives)'
      url: 'https://aspace.archives.ucar.edu/repositories/2/resources/78'
    - title: 'Francis Patton Bretherton (obituary, Physics Today 75(3), 60, March 2022)'
      url: 'https://aip.brightspotcdn.com/PTO.v75.i3.60_1.online.pdf'
    - title: 'The Carbon Dioxide Removal Model Intercomparison Project (CDRMIP): rationale and experimental protocol for CMIP6 (Keller et al., Geoscientific Model Development 11, 1133-1160, 2018)'
      url: 'https://doi.org/10.5194/gmd-11-1133-2018'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed; Claussen et al. 2002 is cited for its title alone, since Springer refused scripted reads of the abstract'
  status: draft
---
The IPCC's glossary defines an Earth system model as a coupled atmosphere-ocean general circulation model "in which a representation of the carbon cycle is included, allowing for interactive calculation of atmospheric carbon dioxide (CO2) or compatible emissions", with further components such as atmospheric chemistry, ice sheets, dynamic vegetation, the nitrogen cycle, and even urban or crop models.[^1] The CMIP6 design paper gives the working test: a model that can calculate the CO2 in its own atmosphere, and account for the flows of CO2 between atmosphere, ocean and biosphere, is an Earth system model. In CMIP6 such models can run the experiments whose names start with `esm-`, where emissions are prescribed and the model works out the concentration, instead of the other way round.[^2]

The difference from a climate model is what is in the loop. Gregory Flato's 2011 overview describes Earth system models as global climate models with the added capability to represent biogeochemical processes that interact with the physical climate. Representing the carbon cycle lets the biological and chemical processes in the ocean and on land, which take up some of the emitted CO2, feed back on the warming. The sulfur cycle matters too, through the aerosols that reflect sunlight and alter clouds, and ozone is being added to some models.[^3] The physical parts of these models are evaluated thoroughly; the biogeochemical parts, Flato notes, suffer from a lack of global observations to check them against.[^3]

## Where the idea came from

NASA's Advisory Council set up an Earth System Sciences Committee in 1983 to look at the Earth as one integrated system and to recommend a strategy for studying it. Francis Bretherton, formerly director of NCAR, chaired it until 1988. It published *Earth System Science: Overview* in 1986 and *Earth System Science: A Closer View* in 1988.[^6] Its way of seeing climate as a set of interacting Earth processes was drawn as what became known as the Bretherton diagram, and its recommendations led to the US Global Change Research Program and NASA's Earth Observing System.[^7]

## The spectrum

Earth system models sit at the expensive end of a range. Claussen and colleagues gave the middle its name in 2002: Earth system models of intermediate complexity, or EMICs, which the IPCC glossary describes as representing climate processes at lower resolution or in a simpler, more idealised way.[^1,4] Below them are box models and emulators.[^1] The range is used on purpose: [CDRMIP](/data-sources/cdrmip/) brings full models, EMICs and box models into one framework because the full models are affordable only for the coming century while questions about carbon removal run for a thousand years.[^8]

On this site, NCAR's [CESM](/engines/cesm/) and the Department of Energy's [E3SM](/engines/e3sm/) are the two American Earth system models with entries of their own; the eight models with [GeoMIP](/data-sources/geomip/) output, among them UKESM1, CanESM5 and CNRM-ESM2-1, carry the label in their names. [CMIP6](/data-sources/cmip6/) is where their output is shared.

## Ensembles

A single run of an Earth system model mixes the response to a forcing with the model's own weather, so the models are run in ensembles. The IPCC glossary distinguishes three kinds. Ensembles of the same model from different initial conditions characterise the uncertainty from internal variability; multi-model ensembles add the effect of differences between models; and perturbed-parameter ensembles vary a single model's parameters systematically to measure the uncertainty inside it.[^1] Clara Deser and colleagues reviewed the initial-condition large ensembles in 2020: a collection made with seven Earth system models, under historical and future forcing, which separates uncertainty due to internal variability from uncertainty due to model differences. Internal variability, they write, "imposes irreducible limits on the accuracy of climate change projections, especially at regional and decadal scales".[^5] The two ensembles of [stratospheric aerosol injection](/terms/geoengineering/), [GLENS and ARISE-SAI](/data-sources/glens-and-arise-sai/), are of this kind.

## For a model of a place

An Earth system model is too coarse to be a model of a place. It is where a place's climate boundary conditions come from. Its structure also travels to other scales: physical processes and living ones coupled so that each drives the other, driven by causes rather than by a prescribed outcome, and run more than once so that the signal can be told from the noise.
