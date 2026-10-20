---
about:
  label: "Understanding Our Ocean III: Predicting the Ocean"
  description: >-
    Explainer from the Copernicus Marine Service on how ocean forecasts are
    made: observations fed into physics-based models, data assimilation, and
    machine learning for gap-filling, sea ice reconstruction and marine
    heatwave detection.
  tags:
    - ocean forecasting
    - ocean models
    - data assimilation
    - machine learning
    - sea ice
    - marine heatwaves
article:
  url: 'https://marine.copernicus.eu/news/understanding-our-ocean-iii-predicting-ocean'
  published: '2026-05-29'
  publisher: Copernicus Marine Service (Mercator Ocean International)
domains:
  - water
provenance:
  origin: agent
  sources:
    - title: "Understanding Our Ocean III: Predicting the Ocean"
      url: 'https://marine.copernicus.eu/news/understanding-our-ocean-iii-predicting-ocean'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the article page; no author is named on it'
  status: draft
---

The third article in a series from the Copernicus Marine Service, which Mercator Ocean International runs for the European Union's Copernicus programme. The series is about how the ocean is observed, understood and modelled on the way to a digital ocean; this part explains how observations become forecasts. No author is named on the page.

Ocean forecasting works like weather forecasting. Measurements from satellites, buoys, moorings, ships and profiling floats go into a numerical model built from the laws of physics, which works out how water, heat, sea ice and ocean chemistry and biology (nutrients, plankton) change over time. The model needs initial conditions (temperature, salinity, currents, sea ice) and boundary conditions (wind, air temperature, pressure, river inputs, coastline and bathymetry). It runs on a supercomputer. New observations are assimilated continually: the run before assimilation is the "first guess", the corrected state the "analysis". The outputs are used for marine heatwaves, storms, harmful algal blooms, shipping routes and fisheries.

The article's second half is about machine learning. Its worked example is TARDIS, a project funded by the Research Council of Norway, which combines data assimilation and AI to reconstruct Arctic sea ice thickness back to 1991, before CryoSat-2 (2010) gave reliable satellite measurements; the resulting dataset, TOPAZ4-ML, is distributed through Copernicus Marine. Neural networks are also used to detect and forecast marine heatwaves, to model currents and trajectories, to pick out things like patches of microplastic in satellite images, and to assess harmful algal bloom risk from ocean optics.

It closes by saying these capabilities are being gathered into a digital twin of the ocean, the subject of the next article. For this wiki the piece is a plain account of the engine layer: how a physics model, assimilated data and learned components combine into an operational forecast, the layer beneath a digital twin of the ocean such as [EDITO](/twins/edito/), which draws on Copernicus Marine data.
