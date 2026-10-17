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
Google Earth AI is the name Google gives to a set of geospatial foundation models plus an agent that orchestrates them, presented by Google Research in October 2025. The named parts are Remote Sensing Foundations (vision-language and detection models for satellite imagery), the Population Dynamics Foundation Model (location embeddings from anonymised Search and Maps trends, covering 17 countries and updated monthly as of 2025), AlphaEarth Foundations (a unified representation of Earth observation data), the WeatherNext weather models, the flood forecasting models behind Flood Hub, the Groundsource flash-flood dataset, and the experimental Geospatial Reasoning agent and Planetary Prediction Engine. Google's product page also lists conservation models such as SpeciesNet and Perch, the NeuralGCM atmospheric model, air quality and pollen APIs and a traffic simulation API under the same banner.

Uses Google names include WHO AFRO's outbreak response in the Democratic Republic of the Congo, GiveDirectly's anticipatory cash assistance ahead of floods, Bellwether's prediction of property damage before storms, the Milken Institute's solar feasibility screening, and University of Oxford researchers who reported R² for twelve-month dengue predictions in Brazil rising from 0.456 to 0.656 when the Population Dynamics embeddings were added.

How it runs depends on the piece. Imagery models are in the Vertex AI Model Garden; AlphaEarth Foundations is in Earth Engine; WeatherNext is in BigQuery and Earth Engine; Flood Hub is a free public site; the Geospatial Reasoning agent and Planetary Prediction Engine are by early-access application. Some components are open source, including the hydrology framework behind Flood Hub (Apache 2.0), SpeciesNet and NeuralGCM. Terms and prices vary by component and are not collected in one place.

Status: a mix of operational products used inside Google Search, Maps and Earth, and experimental research pieces; the agent and prediction engine were still in limited preview in October 2026.
