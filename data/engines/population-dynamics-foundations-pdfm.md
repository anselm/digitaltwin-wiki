---
about:
  label: Population Dynamics Foundation Model (PDFM)
  description: >-
    Google Research geospatial foundation model that turns aggregated search
    trends, place busyness, maps, weather and air quality into an embedding
    vector per postal code or county, for predicting local health, economic
    and environmental indicators.
  tags:
    - geospatial
    - embeddings
    - population
    - public health
    - foundation model
tool:
  form: geospatial foundation model with released embeddings
  group: Earth observation and AI
  homepage: 'https://github.com/google-research/population-dynamics'
  licence: 'Apache 2.0 (code); embeddings under Google Terms of Service'
  cost: 'free for approved research use; paid early access for commercial and public-sector use'
open:
  source: partly
  data: partly
  api: unknown
  participation: unknown
  licence: 'Apache 2.0 (code); embeddings under Google Terms of Service'
provenance:
  origin: agent
  sources:
    - title: 'GitHub - google-research/population-dynamics'
      url: 'https://github.com/google-research/population-dynamics'
    - title: 'Insights into population dynamics: A foundation model for geospatial inference'
      url: 'https://research.google/blog/insights-into-population-dynamics-a-foundation-model-for-geospatial-inference/'
    - title: "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges"
      url: 'https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT016
  kind: enabling_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P003
  posters:
    - Yossi Matias
domains:
  - people
  - places
---
The Population Dynamics Foundation Model is a geospatial model from Google Research, first described in November 2024. It builds a graph whose nodes are administrative areas (counties and postal codes in the first, US-only generation) and whose inputs are aggregated web search trends, place busyness, map features such as point-of-interest categories, weather and air quality; a graph neural network then produces one embedding vector per area. The data is aggregated over regions and time periods, which Google presents as its privacy measure.

The embeddings are meant to be fine-tuned for downstream tasks. The original paper evaluates interpolation, extrapolation, forecasting and super-resolution across 29 variables, and reports that pairing the embeddings with the TimesFM forecaster cut forecast error for unemployment and poverty rates. In 2026 Google lists PDFM among the foundation models behind Earth AI, where it underpins the Population Dynamics Insights product and the Planetary Prediction Engine.

Example notebooks and benchmark files are on GitHub under Apache 2.0. The embeddings themselves are a dataset, now covering what the README calls 17 or more countries, delivered through a BigQuery listing: free on approval for research, and through a paid early-access programme for commercial and public-sector use.

Status: operational as a research release with gated access.
