---
about:
  label: Moderate global warming does not rule out extreme global climate outcomes
  description: >-
    A 2026 Nature paper that ranks CMIP6 climate models by sector and finds that at 2 °C the worst-case models for floods, breadbasket droughts and forest fire weather exceed the 3 °C model average.
  tags:
    - climate projections
    - worst case
    - CMIP6
    - uncertainty
    - risk assessment
    - drought
article:
  url: 'https://doi.org/10.1038/s41586-026-10237-9'
  published: '2026-03-25'
  publisher: Nature
  authors:
    - Emanuele Bevacqua
    - Erich Fischer
    - Jana Sillmann
    - Jakob Zscheischler
domains:
  - climate
relations:
  - { predicate: answers, target: questions/weather-and-climate }
provenance:
  origin: agent
  sources:
    - title: Moderate global warming does not rule out extreme global climate outcomes
      url: 'https://www.nature.com/articles/s41586-026-10237-9'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the abstract, main text, methods and data and code availability sections of the open-access paper'
  status: draft
---

Worst cases are usually described by averaging many climate models at 3 °C or 4 °C of warming.[^1] This paper asks whether a sector can face an extreme climate at 2 °C above preindustrial.[^1] It was published in Nature (volume 651, pages 946–953) on 25 March 2026.[^1] The authors are Emanuele Bevacqua and Jakob Zscheischler of the Helmholtz Centre for Environmental Research (UFZ) in Leipzig, Erich Fischer of ETH Zurich, and Jana Sillmann of the University of Hamburg and CICERO in Oslo.[^1]

The method ranks the models instead of averaging them.[^1] The inputs are CMIP6 simulations, the coordinated set of climate model runs behind recent international assessments, and each model contributes one run: its historical period joined to SSP5-8.5, a high-emissions scenario.[^1] For each model the authors find the first 30-year window in which it passes 2 °C.[^1]

For each sector they pick one climatic impact driver and the area that matters to that sector. Averaging the projected change over that area gives one number per model:[^1]

- five-day maximum rainfall over densely populated areas
- soil-moisture drought frequency over the world's breadbaskets
- the yearly peak of the fire weather index over forests

Two further cases are heat extremes in low-income countries and sea surface temperature across fisheries.[^1] The models at the top and bottom of each ranking, about ten percent each way, are the worst and best cases.[^1] Because each case is a whole model run, its map is spatially consistent, which a map that takes the worst value at every grid cell is not.[^1] Two single-model large ensembles, CanESM5 and MIROC6 with fifty runs each, are used only to measure how much of the spread comes from natural variability.[^1] Most of it comes from differences between models.[^1]

The spread at a fixed warming level is large. At 2 °C, heavy rainfall over populated areas rises between 4% and 15% depending on the model.[^1] Drought frequency across breadbaskets goes from 20% to more than 70% in some models and stays unchanged in others.[^1] The fire weather peak over forests rises more than four times as much in the worst model as in the best.[^1] In all three sectors the worst-case models at 2 °C are more extreme than the multimodel mean at 3 °C.[^1]

The authors conclude that the multimodel mean can hide outcomes that are plausible at the warming level being planned for, and argue such outcomes belong in risk assessment.[^1] Whether a worst-case model is believable should be checked by evaluating the processes it represents.[^1]

For rainfall extremes, the spread across models at 2 °C is nearly as wide as the gap between the average at 2 °C and at 4 °C.[^1] Anyone projecting impacts should take individual model outcomes, bias-corrected (adjusted against observed climate), and not the mean alone.[^1] The approach can be adapted to other sectors by choosing a different driver and area.[^1]

The paper is open access under CC BY 4.0.[^1] Data and code:[^1]

- CMIP6 data from the ESGF archive
- population from Gridded Population of the World v4
- forests from the ESA CCI land cover dataset
- code in CDO, R and Bash on Zenodo (record 17864854)
