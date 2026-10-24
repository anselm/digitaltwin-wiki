---
about:
  label: "Understanding Our Ocean III: Predicting the Ocean"
  description: >-
    Explainer from the Copernicus Marine Service on how ocean forecasts are
    made from observations, physics-based models, data assimilation and
    machine learning.
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
    - title: European Digital Twin Ocean - Powered by EDITO
      url: 'https://www.edito.eu/'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the article page; no author is named on it'
  status: draft
---

This is the third article in a series from the Copernicus Marine Service, which Mercator Ocean International runs for the European Union's Copernicus programme.[^1] The series covers how the ocean is observed, understood and modelled on the way to a digital ocean. This part explains how observations become forecasts.[^1]

Ocean forecasting works like weather forecasting. Measurements come from satellites, buoys, moorings, ships and profiling floats (instruments that drift and dive, recording as they rise).[^1] They go into a numerical model built from the laws of physics. The model works out how water, heat, sea ice and ocean chemistry and biology (nutrients, plankton) change over time.[^1]

The model needs initial conditions: temperature, salinity, currents and sea ice. It also needs boundary conditions: wind, air temperature, pressure, river inputs, coastline and bathymetry (the depth and shape of the seabed). It runs on a supercomputer.[^1] New observations are assimilated continually, meaning the model's state is corrected towards what was measured. The run before assimilation is the "first guess"; the corrected state is the "analysis".[^1] The outputs are used for marine heatwaves, storms, harmful algal blooms, shipping routes and fisheries.[^1]

The second half of the article is about machine learning. The worked example is TARDIS, a project funded by the Research Council of Norway.[^1] It combines data assimilation and AI to reconstruct Arctic sea ice thickness back to 1991, before CryoSat-2 (2010) gave reliable satellite measurements.[^1] The resulting dataset, TOPAZ4-ML, is distributed through Copernicus Marine.[^1]

Neural networks are also used to:[^1]

- detect and forecast marine heatwaves
- model currents and trajectories
- pick out things like patches of microplastic in satellite images
- assess harmful algal bloom risk from ocean optics

The article ends by saying these pieces are being gathered into a digital twin of the ocean, the subject of the next article in the series.[^1] A physics model, assimilated data and learned components together make an operational forecast. That forecast is the layer beneath an ocean twin such as [EDITO](/twins/edito/), which draws on Copernicus Marine data.[^2]
