---
about:
  label: Google Flood Hub
  description: >-
    Free public site from Google Research with riverine flood forecasts,
    flood maps and water trends for river basins in over 150 countries,
    updated daily; the same forecasts reach Search, Maps and Android and can be
    pulled by API.
  tags:
    - flood
    - river
    - forecast
    - hydrology
    - warning
    - inundation
tool:
  homepage: 'https://sites.research.google/floods/'
  form: hosted forecast service
  group: Water and flooding
  cost: free
open:
  source: partly
  data: open
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: Flood Hub
      url: 'https://sites.research.google/floods/'
    - title: Flood Forecasting
      url: 'https://sites.research.google/gr/floodforecasting/'
    - title: Google Earth AI — Google AI
      url: 'https://ai.google/earth-ai'
    - title: 'The next chapter in flood resilience: Open sourcing Google''s hydrology framework'
      url: >-
        https://research.google/blog/the-next-chapter-in-flood-resilience-open-sourcing-googles-hydrology-framework/
    - title: >-
        Delft-FEWS now supports direct import of Google FloodHub forecasts -
        Delft-FEWS - Deltares Community Portal
      url: >-
        https://oss.deltares.nl/web/delft-fews/-/delft-fews-now-supports-direct-import-of-google-floodhub-forecasts
    - title: 'Home - Delft-FEWS - Deltares Community Portal'
      url: 'https://oss.deltares.nl/web/delft-fews/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT018
  kind: operational_forecast_service
  family: models_simulations_and_forecasts
  priority: supporting
  verified: true
  posts:
    - P003
    - P025
  posters:
    - Yossi Matias
    - Juliet Rothenberg
domains:
  - water
  - climate
---
Flood Hub is Google Research's public site for its flood forecasts. It shows flood maps, water trends and real-time forecasts for river basins, and is aimed at governments, local aid organisations and people in at-risk areas. The information is free, updated daily and meant to be shared. Riverine forecasts run up to seven days ahead; a separate urban flash-flood model gives a probability up to 24 hours ahead on a 20 km grid. The flood models are part of Google Earth AI. Google's pages give different coverage figures: the Flood Forecasting page says more than 150 countries and about two billion people, while the Earth AI product page gives both 700 million and more than two billion people, and over 100 countries.

Two models work together for rivers: a global hydrology model forecasts river flow and an inundation model predicts the area and depth of flooding. Inputs are public weather data, river gauge measurements and satellite imagery. The current production hydrology model combines GraphCast, ECMWF IFS, NASA IMERG and NOAA CPC precipitation inputs in an LSTM architecture; Google open-sourced that framework in June 2026 (see OpenHydroNet). The flash-flood model is trained on Groundsource, a dataset of 2.6 million records that Gemini extracted from twenty years of news reports. GiveDirectly uses Flood Hub for anticipatory cash assistance before floods. In October 2026 Deltares added a direct import of Flood Hub forecasts into Delft-FEWS 2026.02, covering flood status, river hydrographs and forecast timing, so forecasters can put them beside local models and observations; the work followed a prototype by the Czech Hydrometeorological Institute.

The site needs no account. Programmatic access is through the Google Flood Forecasting API for researchers and experts, which needs an API key from Google's key programme; Deltares notes that getting one can take about two weeks. Google also publishes an inundation history dataset and the Google Runoff Reanalysis and Reforecast dataset.

Status: operational, with Deltares and Google planning to present the Delft-FEWS link at the Delft-FEWS User Days in November 2026.
