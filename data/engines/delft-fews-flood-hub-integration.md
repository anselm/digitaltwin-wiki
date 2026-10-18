---
about:
  label: Delft-FEWS import of Google Flood Hub forecasts
  description: >-
    Feature of Deltares' Delft-FEWS forecasting platform, from version 2026.02,
    that pulls Google Flood Hub river forecasts and flood status through
    Google's Flood Forecasting API so forecasters can compare them with their
    own models and observations.
  tags:
    - flood
    - forecast
    - river
    - hydrology
    - deltares
    - google
tool:
  form: platform feature
  group: Water and flooding
  homepage: >-
    https://oss.deltares.nl/web/delft-fews/-/delft-fews-now-supports-direct-import-of-google-floodhub-forecasts
provenance:
  origin: agent
  sources:
    - title: >-
        Delft-FEWS now supports direct import of Google FloodHub forecasts -
        Delft-FEWS - Deltares Community Portal
      url: >-
        https://oss.deltares.nl/web/delft-fews/-/delft-fews-now-supports-direct-import-of-google-floodhub-forecasts
    - title: Home - Delft-FEWS - Deltares Community Portal
      url: 'https://oss.deltares.nl/web/delft-fews/'
    - title: Flood Forecasting
      url: 'https://sites.research.google/gr/floodforecasting/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT019
  kind: operational_integration
  family: enabling_technology_and_adjacent_work
  priority: high
  verified: true
  posts:
    - P025
  posters:
    - Juliet Rothenberg
domains:
  - water
  - climate
relations:
  - predicate: needs
    target: engines/google-flood-hub
    note: >-
      imports forecasts from (source_claim; exact implementation not
      independently tested)
---
Delft-FEWS is Deltares' platform for real-time water forecasting, used mostly for flood forecasting and in nearly seventy countries. Since version 2026.02 it can import Google Flood Hub data directly: flood status, river forecast hydrographs and their timing, retrieved from the Google Flood Forecasting API. Flood Hub is Google Research's public flood service, with riverine forecasts up to seven days ahead, updated daily, covering river basins in more than 150 countries.

The point is to put Google's forecasts in the displays a forecasting centre already uses, next to local observations, local model results and other forecasts. Deltares' Erik Pelgrim led the implementation; an earlier prototype by the Czech Hydrometeorological Institute (Jakub Krejčí and Jan Daňhelka) showed it could be done. The announcement shows flood status for the Netherlands on 4 September 2026 and the Ganges on 9 September 2026.

Running it needs a Delft-FEWS 2026.02 installation and a Flood Forecasting API key from Google's key programme, which Deltares says can take about two weeks to obtain.

Status: released; announced 5 October 2026 by Jan Verkade of Deltares, with a presentation planned for the Delft-FEWS User Days in November 2026. Deltares is also working on a model adapter to run Google's open-sourced hydrological model inside Delft-FEWS.
