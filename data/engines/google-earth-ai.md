---
about:
  label: Google Earth AI
  description: >-
    Google's family of geospatial AI models and agents, covering satellite
    imagery, weather, floods and population, reached through Google Earth,
    Earth Engine, BigQuery, Maps Platform and Google Cloud.
  tags:
    - geospatial
    - satellite
    - weather
    - flood
    - population
    - foundation model
tool:
  homepage: 'https://ai.google/earth-ai'
  form: model family
  group: Earth observation and AI
open:
  source: partly
  data: partly
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: Google Earth AI — Google AI
      url: 'https://ai.google/earth-ai'
    - title: 'Google Earth AI: Unlocking geospatial insights with foundation models and cross-modal reasoning'
      url: >-
        https://research.google/blog/google-earth-ai-unlocking-geospatial-insights-with-foundation-models-and-cross-modal-reasoning/
    - title: 'Putting Earth AI to work: Geospatial agents for our planet''s biggest challenges'
      url: >-
        https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/
    - title: >-
        [2610.15750] Google Earth AI Geospatial Reasoning Agent: Capabilities
        and a Systematic Evaluation
      url: 'https://arxiv.org/abs/2610.15750'
    - title: Geospatial Reasoning
      url: 'https://sites.research.google/gr/geospatial-reasoning/'
    - title: 'Planetary prediction engine: Automating global models via Earth AI'
      url: >-
        https://research.google/blog/planetary-prediction-engine-automating-global-models-via-earth-ai/
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT010
  kind: enabling_platform
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P003
    - P018
    - P023
  posters:
    - Yossi Matias
    - Luke Barrington
    - Shravya Shetty
domains:
  - places
  - people
  - climate
  - water
  - energy
---
Google Research presented it in October 2025 as a set of geospatial foundation models, large models trained on broad data that other tasks can build on, plus an orchestrating agent. The named parts are:

- Remote Sensing Foundations: vision-language and detection models for satellite imagery.
- The Population Dynamics Foundation Model: location embeddings from anonymised Search and Maps trends. An embedding is a list of numbers that summarises a place so a model can compare it with others. As of 2025 it covered 17 countries and was updated monthly.
- AlphaEarth Foundations: a unified representation of Earth observation data.
- The WeatherNext weather models.
- The flood forecasting models behind Flood Hub.
- The Groundsource flash-flood dataset.
- The experimental Geospatial Reasoning agent and Planetary Prediction Engine.

Google's product page also lists conservation models such as SpeciesNet and Perch, the NeuralGCM atmospheric model, air quality and pollen APIs and a traffic simulation API under the same name.

Google names several uses. WHO AFRO used it in outbreak response in the Democratic Republic of the Congo. GiveDirectly uses it for anticipatory cash assistance ahead of floods, and Bellwether to predict property damage before storms. The Milken Institute uses it in solar feasibility screening. University of Oxford researchers reported that adding the Population Dynamics embeddings raised R² (how much of the variation a model explains) for twelve-month dengue predictions in Brazil from 0.456 to 0.656.

Each piece is reached differently:

- Imagery models: the Vertex AI Model Garden.
- AlphaEarth Foundations: Earth Engine.
- WeatherNext: BigQuery and Earth Engine.
- Flood Hub: a free public site.
- The Geospatial Reasoning agent and Planetary Prediction Engine: early-access application.

Some components are open source, including the hydrology framework behind Flood Hub (Apache 2.0), SpeciesNet and NeuralGCM. Terms and prices vary by component and are not collected in one place. Parts of the family are operational products used inside Google Search, Maps and Earth, while others are experimental research; the agent and prediction engine were still in limited preview in October 2026.
