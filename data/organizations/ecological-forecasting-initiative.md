---
about:
  label: Ecological Forecasting Initiative (EFI)
  description: >-
    Ecologists' consortium for forecasting nature days to decades ahead;
    it runs open challenges, one on US NEON data, that score anyone's
    forecasts against new observations.
  aliases:
    - EFI
  tags:
    - ecological forecasting
    - forecast challenge
    - NEON
    - community of practice
    - uncertainty
    - R
organization:
  form: international research consortium
  homepage: 'https://ecoforecast.org/'
domains:
  - ecology
  - water
relations:
  - predicate: cites
    target: articles/dietze-near-term-ecological-forecasting
provenance:
  origin: agent
  sources:
    - title: 'Mission: Solving the challenge of predicting nature | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/about/'
    - title: 'Ecological Forecasting Initiative | Forecasts to understand, manage, and conserve ecosystems'
      url: 'https://ecoforecast.org/'
    - title: 'Forecast Challenges | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/forecast-challenges/'
    - title: 'EFI RCN NEON Ecological Forecast Challenge | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/efi-rcn-forecast-challenges/'
    - title: 'NEON Ecological Forecast Challenge - Forecasting Challenge'
      url: 'https://projects.ecoforecast.org/neon4cast-ci/'
    - title: 'NEON Ecological Forecast Challenge - How to forecast'
      url: 'https://projects.ecoforecast.org/neon4cast-ci/instructions.html'
    - title: 'EFI-NEON Research Coordination Network | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/rcn/'
    - title: 'EFI’s New Fiscal Sponsorship | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/efis-new-fiscal-sponsorship/'
    - title: 'Partners | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/partners/'
    - title: 'Get Involved | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/get-involved/'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the sources listed, all EFI''s own pages; its founding year is not stated on them and is left out'
  status: draft
---
The Ecological Forecasting Initiative is an international grassroots consortium that builds and supports an interdisciplinary community of practice around near-term ecological forecasts, meaning forecasts from a day to a decade ahead.[^1] It takes its definition of ecological forecasting from a 2001 paper by Clark and colleagues: predicting the state of ecosystems, ecosystem services and natural capital, with fully specified uncertainties.[^1] Its stated goal is to find out whether nature is predictable. It argues that this cannot come from forecasting one thing well, only from forecasting many processes in many places and looking for patterns in what makes some more predictable than others, which takes a community.[^1] Its mission page illustrates the near-term forecasting cycle from [Dietze et al. 2018](/articles/dietze-near-term-ecological-forecasting/).[^1]

EFI is organised in working groups on theory, cyberinfrastructure, methods and tools, forecasting standards, translation into actionable science, social science, partners and knowledge transfer, diversity and inclusion, and education, with regional chapters in Africa, Asia, Canada, Europe and Oceania.[^2] It runs a webinar series on statistical methods with the Ecological Society of America's statistical ecology section, and holds conferences; the 2026 one was in Toronto and the 2027 one is set for Minneapolis.[^2] Membership is open to people who sign up to its shared values and operating principles.[^1] Since February 2026 EFI has been a fiscally sponsored project of the nonprofit Ecologistics, Inc., which lets it hold a bank account, take donations and lead grant proposals.[^8]

Its most practical offering for outsiders is a set of forecasting challenges. Each publishes a stream of observations, takes forecasts from anyone, checks them against EFI's metadata standards, scores them when the data come in, catalogues them and shows them on a dashboard. EFI offers the same setup to people who want to run a challenge on their own data.[^3] Five are open:[^2,3]

- the NEON challenge, described below;
- a river chlorophyll challenge with the US Geological Survey, aimed at harmful algal blooms and water quality;
- the Virginia Ecoforecast Reservoir Analysis, with 11 freshwater variables and over 11 years of data from two reservoirs;
- a spatial challenge on how vegetation recovers after wildfire, forecasting leaf area seen by the MODIS satellite instrument;
- a challenge on Doñana National Park in Spain, part of the Doñana Digital Twin project, which takes forecasts of shrub, rabbit and dung beetle abundance.

The NEON Ecological Forecasting Challenge asks people to forecast data from the US National Ecological Observatory Network, a continental-scale ecological observation facility, before they are collected.[^5,9] It is hosted by EFI's Research Coordination Network and sponsored by the US National Science Foundation, and its design came from more than 200 participants at a virtual meeting in May 2020.[^4,5] It has five themes:[^3]

- **Aquatic ecosystems:** daily dissolved oxygen, water temperature and chlorophyll-a in NEON lakes and streams.
- **Terrestrial carbon and water fluxes:** half-hourly and daily net exchange of CO2 and evapotranspiration.
- **Ticks:** weekly abundance of nymphs of the tick *Amblyomma americanum* at nine sites.
- **Beetles:** weekly beetle abundance and species richness.
- **Phenology:** daily greenness and redness of vegetation as seen by fixed cameras (phenocams), across forest, grassland, tundra, farm and shrubland sites.

Any modelling approach is allowed, but a forecast must state its uncertainty, as a named probability distribution or as an ensemble of possible outcomes.[^6] Sensor data reach the challenge one to seven days after collection, and the challenge supplies NOAA's 35-day ensemble weather forecasts for each site for models that need weather as an input.[^6] Forecasts are CSV files submitted with an R function, daily if wanted, with horizons from one day to a year depending on the variable. They are scored each day as data arrive, against automatic baselines such as the historical average for that day of the year and a no-change random walk.[^6] All forecasts and scores are public in cloud storage. As of 28 October 2026 the page counted 110,898 forecasts submitted and 10 variables forecast.[^5] There are no winners or prizes; the organisers suggest the challenge as a project for university courses.[^5] The site is published under CC BY.[^5]

A model of a lake, a forest's carbon budget or a tick population can be entered in a challenge and scored on the same observations and baselines as everyone else's. The challenge code is on GitHub in the eco4cast organisation, and the cyberinfrastructure can be set up for a new data stream.[^3,10]
