---
about:
  label: SWAT and SWAT+
  description: >-
    Free watershed model from USDA and Texas A&M that simulates water,
    sediment, crops and nutrients, used to predict what land use, farm
    practice and climate change do to streams.
  aliases:
    - Soil and Water Assessment Tool
    - SWAT+
    - QSWAT+
  tags:
    - watershed
    - hydrology
    - water quality
    - agriculture
    - land use
tool:
  tier: 2
  form: open-source simulation code with QGIS and ArcGIS interfaces
  group: Water and flooding
  homepage: 'https://swat.tamu.edu/'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: 'LGPL-2.1 (SWAT+ source on GitHub)'
domains:
  - water
  - food
relations:
  - predicate: answers
    target: questions/land-use-change
  - predicate: alternative_to
    target: engines/ecosystems-and-land/invest
provenance:
  origin: agent
  sources:
    - title: 'SWAT, Soil and Water Assessment Tool (home page)'
      url: 'https://swat.tamu.edu/'
    - title: 'SWAT+ software and installation'
      url: 'https://swat.tamu.edu/software/plus/'
    - title: 'swat-model/swatplus on GitHub (README and licence)'
      url: 'https://github.com/swat-model/swatplus'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the three sources listed. The model documentation and the literature on its accuracy were not read.'
  status: draft
---
The Soil and Water Assessment Tool (SWAT) is a model of a watershed, from a small catchment to a whole river basin.[^1] It simulates the quantity and quality of surface water and groundwater, and is used to "predict the environmental impact of land use, land management practices, and climate change".[^1] The project says it is widely used for soil erosion control, pollution that runs off land instead of coming from a pipe, and watershed management.[^1]

SWAT+ is the current version, and the project tells anyone starting a new study to use it.[^2] It covers water balance, crop growth and the movement of nutrients.[^2] The older SWAT2012 is still maintained for existing projects.[^2] SWAT+ is developed jointly by the US Department of Agriculture's Agricultural Research Service and Texas A&M AgriLife Research, with contributions from Colorado State University and others.[^3]

## Using it

The model is open source, written in Fortran, under the LGPL-2.1 licence.[^3] Most people do not run the code directly. A study is set up in GIS: QSWAT+ is a plugin for the free QGIS, and ArcSWAT+ is an add-in for ArcGIS Pro.[^2] One installer supplies the model, an editor for its inputs and a toolbox for sensitivity analysis, calibration and validation, for Windows, Linux and Mac.[^2] The current release is revision 62.0.1 of 20 October 2026.[^2]

The release notes warn water-allocation users not to move to that release, because the module is unsupported in it and "may cause failures or incorrect results".[^2] The home page describes support for water allocation as upcoming.[^1] A study that depends on who may divert how much water should check this first.

The project keeps a literature database, user groups, workshops and a conference, with the next in January 2027 in Warangal, India.[^1] In 2026 it announced a global SWAT+ model at 2 km resolution, CoSWAT.[^1]

## For a model of a place

SWAT suits a question of the form: if this much of the catchment changes from one land cover or farm practice to another, what happens to flow, sediment and nutrients at the outlet over years. It runs on a desktop computer and works from data most regions have: elevation, soils, land cover and weather. The setup, and the calibration against a stream gauge, need someone trained in hydrology.

It does not simulate the decisions of farmers or water managers. [RiverWare](/engines/water-and-flooding/riverware/) models the reservoirs and operating rules of a managed river, and [InVEST](/engines/ecosystems-and-land/invest/) gives quicker, coarser estimates of what a land-use change does to water and other services.
