---
about:
  depiction: engines/citydigitaltwin-greenleaves.jpg
  label: CityDigitalTwin
  description: >-
    Planète GreenLeaves' software that simulates urban heat, wind, thermal
    comfort, shading and building energy, run on the company's GPU cloud or on
    your own workstation or cluster.
  tags:
    - urban heat
    - microclimate
    - thermal comfort
    - building energy
    - wind comfort
    - cfd
tool:
  form: Commercial simulation platform, cloud and desktop
  group: Weather and climate
  homepage: 'https://greenleaves.app/'
  cost: 'cloud credits from CAD 250 for five; desktop academic licence CAD 2,000 a year'
  licence: commercial
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
domains:
  - climate
  - energy
  - places
relations:
  - predicate: answers
    target: questions/weather-and-climate
  - predicate: alternative_to
    target: engines/frigis
  - predicate: alternative_to
    target: engines/vu-city-clara
  - predicate: alternative_to
    target: engines/ies
provenance:
  origin: agent
  sources:
    - title: 'Planète GreenLeaves · CityDigitalTwin'
      url: 'https://greenleaves.app/'
    - title: 'Pricing · Planète GreenLeaves · CityDigitalTwin'
      url: 'https://greenleaves.app/pricing'
    - title: 'Validation · Docs · Planète GreenLeaves · CityDigitalTwin'
      url: 'https://greenleaves.app/docs/validation/'
    - title: 'Microclimate validation · Docs · Planète GreenLeaves · CityDigitalTwin'
      url: 'https://greenleaves.app/docs/validation/microclimate'
    - title: 'Team · Planète GreenLeaves · CityDigitalTwin'
      url: 'https://greenleaves.app/team'
    - title: 'LinkedIn post by Ali Katal, October 2026'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
CityDigitalTwin (CDT) is made by Planète GreenLeaves (PGL), a company in Montréal.[^1] Its co-founders are Ali Katal, the chief executive, and Mohammad Mortezazadeh, who designed the solvers; both took their doctorates at Concordia University.[^5] The software simulates urban microclimate, building energy, pedestrian wind, and sun and shade, and PGL says it couples microclimate, energy demand and grid response in one model.[^1] Its outputs cover air and surface temperature, wind, sunlight and shade, and UTCI (a measure of how hot conditions feel to a person).[^1] Each building also gets its hourly heating and cooling load.[^1]

The intended users run from city planners and architects to utilities and university research groups.[^1] Named work includes a thermal-comfort study, with the design firm WXY, of how a proposed development would affect the planted spaces of New York's High Line, and grid-integration work with Hydro-Québec.[^1,5]

A project starts from a 3D model.[^1] You can upload your own, or the platform generates one for a chosen place, with buildings, roads, trees, grass and water.[^1] Free tools prepare the geometry: a Rhino plugin, and a Windows editor that repairs and crops STL city models.[^1] Weather comes from past years or design days, or from a forecast up to 16 days ahead.[^1] Results are viewed in 3D or on a map in the browser, where fields can be sliced and charted. Up to six scenarios can be compared with difference maps, and data exports as VTK or CSV, with PDF reports for pedestrian wind studies.[^1]

PGL says the software solves the governing equations on GPUs rather than using an AI model trained on simulation output.[^1] Airflow is computed by large-eddy simulation (LES), coupled to heat transport and to an hourly energy balance for each building.[^1] Its example is all of Toronto, 956 million cells and 119,561 buildings, in a few hours on one GPU.[^1] The microclimate solver has been compared point by point with published measurements.[^3,4] These include four Architectural Institute of Japan wind cases, one of them the Shinjuku district of Tokyo, and wind-tunnel experiments on air temperature around a building and on evaporation from open water.[^4] Validation studies are in preparation for publication.[^1]

CDT Cloud, at app.greenleaves.app, runs simulations on PGL's servers.[^1] It is paid in credits, where one credit buys an hour of run time and a pedestrian wind study costs five.[^2] Monthly plans run from CAD 700 for 20 credits to CAD 2,000 for 80, and a free one-month trial is offered.[^2] CDT Desktop runs the microclimate, building-energy and shading solvers on your own workstation or cluster, on Windows or on Linux through Apptainer.[^1,2] PGL offers it to research groups and to teams with data-residency requirements.[^1] A university licence costs CAD 2,000 a year for up to 50 devices; licences for companies and agencies are priced on request.[^2]

In Katal's account of the desktop workflow, you set up the project in the web app and download it as a ready-to-run package.[^6] You run it on a workstation or a Linux HPC cluster, then link the results folder back into the web app to explore in 3D.[^6] The results stay on your machine.[^6] With the desktop edition, the simulation runs on your own hardware.[^1]
