---
about:
  label: WeatherNext / NVIDIA Earth-2
  description: >-
    Two AI weather-forecasting stacks: Google DeepMind's WeatherNext 3, a
    hosted global model that forecasts hourly and feeds Google products and
    cloud datasets, and NVIDIA's Earth-2, a family of open models and tools
    that organisations run on their own GPUs.
  tags:
    - weather forecast
    - AI model
    - nowcasting
    - downscaling
    - open models
tool:
  form: Forecast models and services
  group: Weather and climate
  homepage: 'https://deepmind.google/science/weathernext/'
open:
  source: partly
  data: open
  api: 'yes'
  participation: unknown
domains:
  - climate
relations:
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'WeatherNext 3 — Google DeepMind'
      url: 'https://deepmind.google/science/weathernext/'
    - title: 'WeatherNext 3: Our most advanced global weather AI model'
      url: >-
        https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
    - title: '[2609.03582] WeatherNext 3: Increasing resolution and performance of global weather models with raw observations'
      url: 'https://arxiv.org/abs/2609.03582'
    - title: 'NVIDIA Earth-2'
      url: 'https://www.nvidia.com/en-us/high-performance-computing/earth-2/'
    - title: 'NVIDIA Launches Earth-2 Family of Open Models — the World''s First Fully Open, Accelerated Set of Models and Tools for AI Weather | NVIDIA Blog'
      url: 'https://blogs.nvidia.com/blog/nvidia-earth-2-open-models/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT017
  kind: forecast_model
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P003
    - P131
    - P146
  posters:
    - Yossi Matias
    - Emma Scharfmann
    - David Carlin
---
WeatherNext 3 was announced on 3 September 2026, with a paper by Rasp and 24 co-authors. It is an ensemble model: it runs many forecasts at once to show the spread of likely outcomes. It ingests low-latency geostationary satellite data and issues a new forecast every hour instead of every six. Surface variables, including solar radiation and cloud cover, come at 0.1 degree resolution.

The model learns directly from weather-station observations. That lets it predict 2 m temperature and dewpoint at any location on a 5 km grid, including places with no station. WeatherNext 3 also predicts satellite-derived precipitation and tropical cyclones. Google says the US National Hurricane Center used it for Hurricane Melissa's landfall in Jamaica.

WeatherNext is a hosted Google service, not a model to download. Forecasts feed Google Search, Maps, the Gemini app, the Maps Platform Weather API and Earth Engine. The forecast data can be queried in BigQuery and Earth Engine or bulk-downloaded from Google Cloud Storage, with no model setup. Weather Lab is an experimental site for viewing the forecasts and tracking tropical cyclones.

NVIDIA Earth-2 is a family of open models, libraries and frameworks for weather and climate AI. It was announced on 26 January 2026 at the American Meteorological Society meeting. The models cover the forecasting chain, from data assimilation to downscaling. Data assimilation combines observations into a starting state for a forecast. Downscaling adds local detail to a coarse forecast. The models are:

- Earth-2 Global Data Assimilation (HealDA) builds initial conditions from observations in seconds on GPUs.
- Earth-2 Medium Range (Atlas architecture) forecasts over 70 variables up to 15 days ahead.
- Earth-2 Nowcasting (StormScope) makes kilometre-scale storm forecasts zero to six hours ahead by predicting satellite and radar imagery.
- CorrDiff downscales coarse forecasts to regional resolution.
- FourCastNet3 is a global ensemble model.

Earth-2 also wraps open models from ECMWF, Microsoft and Google. NVIDIA's announcement names Brightband running Medium Range daily and the Israel Meteorological Service running CorrDiff operationally. Others named as evaluating or using the models include The Weather Company, the US National Weather Service and TotalEnergies.

Earth-2 runs on an organisation's own GPUs. The models are on GitHub and Hugging Face. Earth2Studio is the toolkit for building, fine-tuning and deploying them, and PhysicsNeMo is the open-source Python framework for training. NVIDIA also offers CorrDiff as a NIM microservice, and an Omniverse blueprint for visualisation.
