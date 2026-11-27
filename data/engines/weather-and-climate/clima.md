---
about:
  label: CliMA Earth system model
  description: >-
    An open Earth system model written from scratch in Julia by the Climate
    Modeling Alliance at Caltech and MIT: separate packages for atmosphere,
    ocean, land and sea ice, built to run on a few GPUs.
  aliases:
    - Climate Modeling Alliance
    - ClimaAtmos
    - ClimaCoupler
    - Oceananigans
  tags:
    - climate model
    - Earth system model
    - Julia
    - GPU
    - calibration
    - hybrid model
tool:
  tier: 2
  form: open-source Earth system model (a family of Julia packages; runs on a laptop at coarse resolution and on GPUs above that)
  group: Weather and climate
  homepage: 'https://clima.caltech.edu/'
  licence: Apache-2.0
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: Apache-2.0
domains:
  - climate
relations:
  - predicate: alternative_to
    target: engines/weather-and-climate/cesm
  - predicate: alternative_to
    target: engines/weather-and-climate/e3sm
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'Coda: what it took to build a new Earth system model. Tapio Schneider with Raffaele Ferrari, CliMA, 19 November 2026'
      url: 'https://clima.caltech.edu/2026/11/19/coda-what-it-took-to-build-a-new-earth-system-model/'
    - title: 'An Entirely New Earth System Model, The First in Decades. Tapio Schneider and Raffaele Ferrari, CliMA, 28 July 2026'
      url: 'https://clima.caltech.edu/2026/07/28/an-entirely-new-earth-system-model-the-first-in-decades/'
    - title: 'Putting it all together: ClimaCoupler.jl. Henry Peterson and others, CliMA, 5 November 2026'
      url: 'https://clima.caltech.edu/2026/11/05/putting-it-all-together-climacoupler-jl/'
    - title: 'From Hadley cells to atmospheric rivers: ClimaAtmos.jl. Costa Christopoulos, Zhaoyi Shen and Tapio Schneider, CliMA, 29 October 2026'
      url: 'https://clima.caltech.edu/2026/10/29/from-hadley-cells-to-atmospheric-rivers-climaatmos-jl/'
    - title: CliMA. GitHub organisation
      url: 'https://github.com/CliMA'
    - title: 'New Climate Modeling Alliance will advance climate modeling and prediction. MIT News, 12 December 2018'
      url: 'https://news.mit.edu/2018/new-climate-modeling-alliance-clima-1212'
  created: '2026-11-19'
  reviewed: '2026-11-19'
  reviewed_by: 'Claude, from the sources listed. The four CliMA posts were read through a summarising fetcher, because the site refused a direct download, so quotations are as that reader returned them. No code was run. Anselm sent the first source on the day it was published.'
  status: draft
---
The Climate Modeling Alliance, CliMA, has written a model of the whole Earth from nothing: atmosphere, ocean, land and sea ice, each a separate open package in the Julia language, joined by a coupler. Its authors call it "the first built from scratch in decades".[^1] It is a global model and will not by itself answer a question about one valley or one city. It is in this catalogue for how it is built, which differs from the large models it sits beside, and because its parts can be taken and used alone.

## Why they started again

Caltech leads the alliance, with MIT, the Naval Postgraduate School and NASA's Jet Propulsion Laboratory; Tapio Schneider is its principal investigator.[^6] It was announced in December 2018 with the aim of projections whose uncertainties are "at least half the size of those in existing models", and a hope of a running model within five years.[^6] The coupled model was presented in 2026.[^2]

The opening post of the series gives the case against the existing models. They were designed between the 1970s and the 2000s for much weaker computers, their errors have "remained stubbornly large", and their treatment of clouds rests on ideas from a time when a grid cell was about 1,000 km across.[^2] Models such as [CESM](/engines/weather-and-climate/cesm/) and [E3SM](/engines/weather-and-climate/e3sm/) carry decades of work and whole communities of users, which is why few groups wanted to rebuild.[^2]

## How it is put together

- **Separate packages:** ClimaAtmos for the atmosphere, Oceananigans for the ocean, ClimaLand for land, ClimaSeaIce for sea ice. Each can be "inspected, tested, and used separately".[^1,3]
- **A coupler that exchanges three things:** ClimaCoupler passes energy, water and momentum between the components and conserves them. Where the ocean takes a longer time step than the atmosphere, the coupler adds up the atmosphere's fluxes and hands the ocean the average.[^3]
- **Parameters in one place:** every physical constant and tunable number is held by one package, and a second package calibrates them against data.[^1,4]
- **Physics with learned parts:** the equations are written from physical law, and components learned from data are used "where they can go no further", first for turbulence, convection and clouds.[^2]
- **Graphics processors:** the code is written to run on GPUs, so that many runs can be made on rented machines and not on a supercomputer.[^1]

In the terms of [Inside an engine](/articles/inside-an-engine/), this is a set of physical solvers with a coupling layer, a calibration layer and learned models standing in for the processes too small for the grid. The series is unusually explicit about each layer, and reads as a worked example of that article.

## Physics or learning

The coda takes a position on a live argument. Weather models learned entirely from data, such as [NeuralGCM](/engines/weather-and-climate/neuralgcm/), [ACE2](/engines/weather-and-climate/ace2/) and [Aurora](/engines/weather-and-climate/aurora/), led some to expect the same for climate. The authors say the field has turned back toward a hybrid, and give the reason: "The physical scaffold is essential for the counterfactual scenarios and the generalization beyond the observed record."[^1] A model of a place faces the same choice when it is asked about a flood larger than any on record or a policy never tried.

The authors also report something they did not plan for. Because each component is small and has its own tests, AI coding agents can now propose changes, compare output with observations and run calibrations, with the tests as the check.[^1]

## What it costs to run

The numbers in the posts are small beside those of a national centre. A coarse coupled run, at about 5 degrees for atmosphere and land and 1 degree for ocean and ice, takes "about an hour to simulate one year" on a GPU with 4 GB of memory.[^3] A run at 2 degrees and 1 degree fits on one 80 GB GPU.[^3] A coarse atmosphere alone "runs in a few minutes on a laptop".[^4] CliMA owns sixteen A100 GPUs between Caltech and MIT, its budget is "on the order of a few percent" of a typical weather or climate centre's, and the authors say the 10 km target resolution needs "a few dozen GPUs for several months" that they do not yet have: "We have the model; the compute is the constraint."[^1]

## What has not been shown

- **No scores yet:** the posts read give no measure of skill against observations and no comparison with other models. The authors say how well it matches observations, and how its climate responds to rising carbon dioxide, will be answered in peer-reviewed papers.[^4]
- **The coupled model is not calibrated:** the coarse configuration "drifts over decades" without calibration, and calibrating the coupled model is described as ongoing.[^3]
- **Not yet compared with its peers:** joining the Coupled Model Intercomparison Project, the standard comparison of climate models, is listed as something they could do next.[^1]
- **The cost advantage for forecasting is an estimate:** "an order of magnitude lower" than an operational model, not a measured comparison.[^4]

## What is open, and what a place model can take

The packages are on GitHub, most under the Apache 2.0 licence; Oceananigans is under the MIT licence.[^5] The main repositories were all changed in the week this entry was written.[^5]

- **Oceananigans:** a general fluid solver with an ocean bent. ClimaOcean builds "regional-to-global" ocean and sea ice simulations on it, which makes this the part nearest to a model of a bay, a strait or a stretch of coast.[^5]
- **ClimaLand:** a land surface model that can be run alone.[^5]
- **EnsembleKalmanProcesses:** the alliance's package for calibrating an expensive model without derivatives. It is not tied to climate.[^5]
- **The design:** small tested parts, one home for parameters, and conserved quantities at every interface. These can be copied at any scale.

The opening post says private companies already use the model to simulate interventions in the ocean and atmosphere; it does not name them.[^2]
