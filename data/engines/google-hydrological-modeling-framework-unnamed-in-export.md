---
about:
  label: OpenHydroNet
  description: >-
    Google Research's open-source hydrology framework, a Python package that
    replicates the LSTM river-flow models behind Flood Hub so forecasters can
    train or fine-tune them on their own watersheds.
  tags:
    - hydrology
    - flood
    - forecast
    - lstm
    - open source
    - river
tool:
  homepage: 'https://github.com/google-research/flood-forecasting'
  form: open-source library
  group: Water and flooding
  licence: Apache-2.0
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache-2.0'
provenance:
  origin: agent
  sources:
    - title: 'GitHub - google-research/flood-forecasting'
      url: 'https://github.com/google-research/flood-forecasting'
    - title: 'The next chapter in flood resilience: Open sourcing Google''s hydrology framework'
      url: >-
        https://research.google/blog/the-next-chapter-in-flood-resilience-open-sourcing-googles-hydrology-framework/
    - title: 'Google opens its hydrology framework — what does this mean for Delft-FEWS users?'
      url: >-
        https://oss.deltares.nl/web/delft-fews/-/google-opens-its-hydrology-framework-what-does-this-mean-for-delft-fews-users-
    - title: >-
        Delft-FEWS now supports direct import of Google FloodHub forecasts -
        Delft-FEWS - Deltares Community Portal
      url: >-
        https://oss.deltares.nl/web/delft-fews/-/delft-fews-now-supports-direct-import-of-google-floodhub-forecasts
    - title: Flood Forecasting
      url: 'https://sites.research.google/gr/floodforecasting/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT020
  kind: enabling_framework
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P025
  posters:
    - Juliet Rothenberg
domains:
  - water
---
Google Research released it on GitHub on 3 June 2026. The announcement, by Grey Nearing and Deborah Cohen, calls it Google's hydrology framework; OpenHydroNet is the repository's name. It is a Python package on PyTorch, forked from NeuralHydrology and reworked for forecast sequences. The package includes two architectures built on the LSTM, a kind of neural network suited to sequences over time such as river flow:

- Mean-Embedding-Forecast-LSTM, the production model as of December 2025. It uses separate embedding networks for hindcast and forecast inputs and combines GraphCast, ECMWF IFS, NASA IMERG and NOAA CPC precipitation.
- Handoff-Forecast-LSTM, the earlier production model, described in a 2024 Nature paper.

Google states that the newer model extends the reliable forecast horizon by six days in gauged basins and one day in ungauged basins compared with its predecessor. An optional data assimilation step adjusts the model's latent state, its internal memory, against recent streamflow observations without retraining. Training uses the open Caravan dataset, and the package ships tools to delineate catchments from gauge coordinates and to pull static attributes from HydroATLAS and ERA5-Land for a user's own watersheds. It is not an officially supported Google product.

Hydrologists can use it to test new models and data, and national forecasting services to add local data and knowledge while keeping control of that data. The Czech Hydrometeorological Institute tested the framework and found its forecasts comparable in quality to locally calibrated conceptual models, and also built a Python adapter connecting the framework to Delft-FEWS, available on request. Deltares and Google are working on a model adapter to embed the framework in Delft-FEWS workflows, still in progress in October 2026.

It is free under Apache 2.0 and installs locally. Documentation is at openhydronet.readthedocs.io, with a tutorial notebook and video.
