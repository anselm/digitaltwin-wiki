---
about:
  depiction: engines/planetary-prediction-engine.jpg
  label: Planetary Prediction Engine
  description: >-
    Part of Google Earth AI; given a user's local outcome data such as disease
    rates or crop yields, it picks relevant population and satellite signals
    and trains models for spatial prediction, downscaling and forecasting.
  tags:
    - geospatial
    - prediction
    - public health
    - satellite
    - population
tool:
  form: hosted service
  group: Earth observation and AI
  homepage: 'https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/'
  cost: unknown
open:
  source: closed
  data: unknown
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges"
      url: 'https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/'
    - title: 'Planetary prediction engine: Automating global models via Earth AI'
      url: 'https://research.google/blog/planetary-prediction-engine-automating-global-models-via-earth-ai/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT012
  kind: research_model
  family: models_simulations_and_forecasts
  priority: supporting
  verified: false
  posts:
    - P003
  posters:
    - Yossi Matias
domains:
  - people
  - food
relations:
  - predicate: part_of
    target: engines/google-earth-ai
    note: component of (source_claim; exact implementation not independently tested)
---
Google Earth AI is Google Research's suite of geospatial foundation models and agents.[^1] A user brings local outcome data, for example regional disease rates, crop yields or grid outages. The engine selects relevant population and environmental signals from Earth AI's models and trains task-specific models for spatial prediction, super-resolution downscaling and forecasting.[^1,2] Downscaling means estimating values on a finer grid than the source data.

Google's announcement names one deployed use. During the 2026 Ebola outbreak, the epidemic modelling unit of the DRC's National Institute for Biomedical Research used it to estimate the risk of spread into uninfected zones, while the World Health Organization's Africa office used the related Geospatial Reasoning agent to map exposed settlements.[^1] Google also says that in public-health research, combining population and satellite signals improved health-outcome predictions by 12 percent over demographic baselines and allowed mapping at eight times finer resolution.[^1]

The engine is a hosted Google service, reached through an interactive interface and through the Geospatial Reasoning Agent API.[^1] Google introduced it on 27 August 2026 as an experimental research capability,[^2] and on 14 October 2026 opened it as an early preview for a limited group of users.[^1] Pricing is not published.
