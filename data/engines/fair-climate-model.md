---
about:
  label: FaIR
  description: >-
    Open-source simple climate model in Python that turns scenarios of
    emissions, concentrations or forcing into projections of global mean
    temperature; fast enough to run large calibrated ensembles.
  tags:
    - climate model
    - emulator
    - emissions scenarios
    - global temperature
    - Python
tool:
  form: open-source Python research model
  group: Weather and climate
  homepage: 'https://docs.fairmodel.net/'
  licence: Apache-2.0
  cost: free
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: Apache-2.0
domains:
  - climate
relations:
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'OMS-NetZero/FAIR (README)'
      url: 'https://github.com/OMS-NetZero/FAIR'
    - title: 'FaIR: Finite Amplitude Impulse Response simple climate model (documentation)'
      url: 'https://docs.fairmodel.net/en/latest/'
    - title: 'Introduction (FaIR documentation)'
      url: 'https://docs.fairmodel.net/en/latest/intro.html'
    - title: 'FaIRv2.0.0: a generalized impulse response model for climate uncertainty and future scenario exploration (Crossref record)'
      url: 'https://api.crossref.org/works/10.5194/gmd-14-3007-2021'
    - title: 'OMS-NetZero/FAIR releases'
      url: 'https://github.com/OMS-NetZero/FAIR/releases'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
FaIR (Finite-amplitude Impulse-Response) is a simple climate model, also called an emulator: a small model that can be tuned to mimic the global behaviour of larger, more complex climate models.[^1,4] Given a scenario, it produces projections of global mean temperature.[^1,3] The scenario can be given as emissions of greenhouse gases and short-lived climate forcers, as concentrations of greenhouse gases, or as effective radiative forcing (the extra energy a gas or particle traps), and different gases can be given in different ways in the same run.[^1,3] Users can define their own gases and every component is optional, which allows experiments such as the response to a single pulse of one gas.[^1]

Version 2 is described in a 2021 paper in Geoscientific Model Development by Leach and nine co-authors.[^1,4] That version comes down to six equations.[^4] Five are the standard impulse-response model used for greenhouse-gas metrics in the IPCC's Fifth Assessment Report.[^4] The sixth lets each gas cycle's response time depend on the state of the system, which is needed to reproduce the carbon cycle's non-linear behaviour.[^4] The equations are simple enough to write into a spreadsheet such as Excel, yet can be tuned to imitate key processes in the CMIP6 climate models.[^4] The model runs quickly enough for large probabilistic ensembles, and the paper constrains a million-member ensemble against current estimates of the global warming trend.[^4] Earlier versions are described in papers by Smith and co-authors (2018, version 1.3) and Millar and co-authors (2017, version 1.0).[^1]

It is a Python package for Python 3.10 to 3.14, installed from conda-forge or with pip, under the Apache-2.0 licence.[^1] A run is set up by naming its time span, its scenarios and its parameter sets, then filling in the data; many scenarios and parameter sets run side by side, and inputs and outputs are labelled arrays in xarray.[^3] Time steps need not be whole years.[^3] By default the gas cycle uses four boxes and the energy balance uses three ocean layers, and both can be changed.[^3] Example notebooks come with the code and can be tried online through Binder.[^1] The documentation credits the fair development team, the code lives under the OMS-NetZero organisation on GitHub, and version 2.2.5 was released on 15 October 2026.[^2,5]

FaIR will run whatever climate it is given, even one that breaks the laws of physics, so its makers suggest plotting the historical temperature record over any result as a check.[^1] For published work it points to calibrated, constrained parameter sets consistent with the IPCC's Sixth Assessment Report (Working Group 1), published on Zenodo.[^1]

FaIR answers one question about a place only indirectly: how much the whole world warms under a given emissions path.[^1] A local model of heat, flooding or crops can take that global path as its starting point, choose the scenario that matches a policy being discussed, and then turn to regional projections for the local detail; see [Weather and climate](/questions/weather-and-climate/).
