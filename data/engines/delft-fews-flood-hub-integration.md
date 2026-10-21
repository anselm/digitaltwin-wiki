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
open:
  source: unknown
  data: unknown
  api: 'yes'
  participation: unknown
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
Delft-FEWS, Deltares' real-time water forecasting system, is used mostly for floods and in nearly seventy countries. Since version 2026.02 it imports Google Flood Hub data directly from the Google Flood Forecasting API: flood status, river forecast hydrographs (graphs of river flow over time) and their timing. Flood Hub is Google Research's public flood service, with riverine forecasts up to seven days ahead, updated daily, covering river basins in more than 150 countries.

Google's forecasts then appear in the displays a forecasting centre already uses, next to local observations, local model results and other forecasts. Deltares' Erik Pelgrim led the implementation. An earlier prototype by the Czech Hydrometeorological Institute (Jakub Krejčí and Jan Daňhelka) showed it could be done. The announcement shows flood status for the Netherlands on 4 September 2026 and the Ganges on 9 September 2026.

Running it needs a Delft-FEWS 2026.02 installation and a Flood Forecasting API key from Google's key programme. Deltares says the key can take about two weeks to obtain.

Jan Verkade of Deltares announced the release on 5 October 2026, and a presentation is planned for the Delft-FEWS User Days in November 2026. Deltares is also working on a model adapter to run Google's open-sourced hydrological model inside Delft-FEWS.
