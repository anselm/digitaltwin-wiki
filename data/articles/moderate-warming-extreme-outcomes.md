---
about:
  label: Moderate global warming does not rule out extreme global climate outcomes
  description: >-
    Nature paper by Emanuele Bevacqua, Erich Fischer, Jana Sillmann and Jakob
    Zscheischler that ranks CMIP6 climate models by a sector-specific impact
    driver and shows that at 2 °C of warming the worst-case models for floods,
    breadbasket droughts and forest fire weather exceed the model average at
    3 °C.
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

A paper in Nature (volume 651, pages 946–953, published 25 March 2026) by Emanuele Bevacqua and Jakob Zscheischler of the Helmholtz Centre for Environmental Research (UFZ) in Leipzig, Erich Fischer of ETH Zurich and Jana Sillmann of the University of Hamburg and CICERO in Oslo. It asks whether a sector can face an extreme climate at a moderate level of warming, 2 °C above preindustrial, even though worst cases are usually described by averaging many models at 3 °C or 4 °C.

The method ranks the climate models rather than averaging them. The authors take CMIP6 simulations (historical runs joined to SSP5-8.5, one member per model) and find for each model the first 30-year window in which it passes 2 °C. For each sector they pick one climatic impact driver and the area that matters to that sector, then average the projected change over that area to get one number per model: five-day maximum rainfall over densely populated areas, soil-moisture drought frequency over the world's breadbaskets, and the yearly peak of the fire weather index over forests, with heat extremes in low-income countries and sea surface temperature across fisheries as two further cases. The models at the top and bottom of the ranking, about ten percent each way, are the worst and best cases. Because each case is a whole model run, its map is spatially consistent, unlike a map that takes the worst value at every grid cell. Single-model large ensembles (CanESM5 and MIROC6, fifty members each) are used only to measure how much of the spread comes from natural variability; the paper finds the spread comes mostly from differences between models.

The finding is that the spread at a fixed warming level is large. At 2 °C, heavy rainfall over populated areas rises between 4% and 15% depending on the model; drought frequency across breadbaskets goes from 20% to more than 70% in some models and stays unchanged in others; the fire weather peak over forests rises more than four times as much in the worst model as in the best. In each of these three sectors the worst-case models at 2 °C are more extreme than the multimodel mean at 3 °C. The authors' reading is that the multimodel mean, the usual summary, can hide outcomes that are plausible at the warming level a reader is planning for, and that such outcomes should be weighed in risk assessment rather than set aside; they add that whether a worst-case model is believable should be checked by evaluating the processes it represents.

For a reader of a model's average projection: the average is one outcome among many, for rainfall extremes the spread across models at 2 °C is nearly as wide as the gap between the average at 2 °C and at 4 °C, and anyone projecting impacts should take individual model outcomes (bias-corrected) rather than the mean alone. The paper is open access under CC BY 4.0. CMIP6 data come from the ESGF archive; population from Gridded Population of the World v4; forests from the ESA CCI land cover dataset; the code, in CDO, R and Bash, is on Zenodo (record 17864854). The approach is meant to be adapted to other sectors by choosing a different driver and area. In this wiki's stack it sits with the data: a way to read a climate projection before it feeds a model of a place.
