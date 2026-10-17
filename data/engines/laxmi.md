---
about:
  label: Laxmi
  description: >-
    AI weather model from Schmitt, Jain and co-authors that retrains ECMWF's
    AIFS on satellite precipitation observations to forecast rain more
    accurately at the local scale.
  tags:
    - weather
    - precipitation
    - forecast
    - satellite
    - ai model
tool:
  homepage: 'https://arxiv.org/abs/2609.03210'
  form: research model
  licence: unknown
  cost: unknown
provenance:
  origin: agent
  sources:
    - title: >-
        Improving global precipitation forecasts with an AI weather model
        trained on satellite observations
      url: 'https://arxiv.org/abs/2609.03210'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT030
  kind: research_model
  family: models_simulations_and_forecasts
  priority: supporting
  verified: true
  posts:
    - P096
  posters:
    - Ravi Jain
domains:
  - climate
  - water
---
Laxmi is a global precipitation forecasting model described in a September 2026 arXiv paper by Julian F. Schmitt, Bertrand Delorme, Robert C. King, Yashica Patodia, Tapio Schneider, Aditi Sheshadri and Ravi Jain. It starts from AIFS, ECMWF's open-source 0.25-degree probabilistic weather model, and retrains it on satellite-based precipitation observations instead of the ERA5 reanalysis most AI weather models are trained against.

The paper's argument is that gains in global-average skill do not automatically help with floods or drought, and that ERA5 carries known biases in rainfall. Against that baseline the authors report a 19% improvement in global probabilistic accuracy, less over-prediction of drizzle, better capture of extreme rainfall, and the best 150 mm event-total forecasts in seven of ten Indian tropical storms studied.

How the model is distributed, and under what licence, is not stated on the abstract page. Status: research, as of the paper's third revision on 23 September 2026.
