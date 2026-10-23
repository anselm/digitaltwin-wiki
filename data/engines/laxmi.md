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
  group: Weather and climate
  licence: unknown
  cost: unknown
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
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
The model is described in a September 2026 arXiv paper by Julian F. Schmitt, Bertrand Delorme, Robert C. King, Yashica Patodia, Tapio Schneider, Aditi Sheshadri and Ravi Jain.[^1] Its starting point is AIFS, ECMWF's open-source 0.25-degree probabilistic weather model.[^1] Most AI weather models are trained against ERA5, a reanalysis (a reconstruction of past weather from observations). Laxmi is retrained on satellite-based precipitation observations instead.[^1]

The paper argues that gains in global-average skill do not automatically help with floods or drought, and that ERA5 carries known biases in rainfall.[^1] Against that baseline the authors report a 19% improvement in global probabilistic accuracy and less over-prediction of drizzle.[^1] They also report better capture of extreme rainfall, and the best 150 mm event-total forecasts in seven of ten Indian tropical storms studied.[^1]

The paper's third revision is dated 23 September 2026.[^1]
