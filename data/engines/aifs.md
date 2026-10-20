---
about:
  label: AIFS
  description: >-
    ECMWF's machine-learning global weather model, run operationally beside
    its physics-based system since 2025; weights published openly.
  tags:
    - weather
    - forecast
    - machine learning
    - ecmwf
    - global
tool:
  form: machine-learning weather forecast model
  group: Weather and climate
  homepage: 'https://huggingface.co/ecmwf/aifs-single-1.0'
  licence: 'model weights CC BY 4.0; notebooks and scripts Apache 2.0'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'CC BY 4.0 (weights); Apache 2.0 (notebooks and scripts)'
provenance:
  origin: agent
  sources:
    - title: ecmwf/aifs-single-1.0 · Hugging Face
      url: 'https://huggingface.co/ecmwf/aifs-single-1.0'
    - title: ECMWF's AI forecasts become operational
      url: 'https://www.ecmwf.int/node/29308'
    - title: ECMWF's ensemble AI forecasts become operational
      url: >-
        https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational
    - title: "ECMWF's AI forecasting model is open source: now let's make it easy to run."
      url: 'https://huggingface.co/blog/hugging-science/run-aifs-yourself'
  created: '2026-10-17'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT034
  kind: enabling_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P131
  posters:
    - Emma Scharfmann
domains:
  - climate
---
The Artificial Intelligence Forecasting System is the European Centre for Medium-Range Weather Forecasts' data-driven weather model. It uses a graph neural network encoder and decoder with a transformer processor, trained first on ERA5 reanalysis for 1979 to 2022 and then fine-tuned on ECMWF's own operational analyses. It runs alongside, not instead of, the physics-based Integrated Forecasting System, which still supplies the initial conditions.

It forecasts upper-air and surface variables, including 100 m winds, solar radiation, cloud cover, snowfall, soil moisture and tropical cyclone tracks, at about 28 to 31 km grid spacing and 13 pressure levels, in 6-hour steps. ECMWF reports that it beats its physics-based models on many scores and uses roughly a thousand times less energy per forecast.

The weights of AIFS Single v1.0 are published on Hugging Face under CC BY 4.0, with Apache-2.0 notebooks for running them. The model was trained with Anemoi, ECMWF's open framework for machine-learned forecasting.

The weights, including the current aifs-single-2.0 checkpoint, are on Hugging Face, but ECMWF's inference tooling depends on flash-attn, which only builds on Ampere-class NVIDIA GPUs. A July 2026 tutorial from Hugging Face and ECMWF adds a compatibility patch so AIFS Single 2.0 runs on any GPU, including Apple MPS, or on CPU, either on your own machine or as a Hugging Face Job on a 16 GB T4. It covers fetching the two consecutive 6-hour analyses the model needs from ECMWF Open Data (free, no account), running a forecast and plotting the fields; a Hugging Face Space runs the same code in the browser on live data.

Operational: AIFS Single since 25 February 2025 and the 51-member AIFS ENS since 1 July 2025, both with ECMWF's round-the-clock support.
