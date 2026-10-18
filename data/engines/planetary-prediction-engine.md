---
about:
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
provenance:
  origin: agent
  sources:
    - title: "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges"
      url: 'https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/'
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
The Planetary Prediction Engine is a capability within Google Earth AI, Google Research's suite of geospatial foundation models and agents. A user brings local outcome data, for example regional disease rates, crop yields or grid outages, and the engine selects relevant population and environmental signals from Earth AI's models and trains task-specific models for spatial prediction, super-resolution downscaling and forecasting.

Google's announcement names one deployed use: the World Health Organization's Africa office and the DRC's National Institute for Biomedical Research used it during the 2026 Ebola outbreak to estimate the risk of spread into uninfected zones. It also reports that in public-health research, combining population and satellite signals improved health-outcome predictions by 12 percent over demographic baselines and allowed mapping at eight times finer resolution.

It is a hosted Google service, reached through an interactive interface and through the Geospatial Reasoning Agent API. Pricing is not stated.

Status: early preview for selected partners, announced 14 October 2026.
