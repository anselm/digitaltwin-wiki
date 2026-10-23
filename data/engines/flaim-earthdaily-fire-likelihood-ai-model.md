---
about:
  depiction: engines/flaim-earthdaily-fire-likelihood-ai-model.jpg
  label: Fire Likelihood AI Model (FLAIM)
  description: >-
    EarthDaily's wildfire risk model for insurers in the western United
    States, giving ignition likelihood, fuel hazard and directional
    vulnerability layers from satellite observations, daily weather and other
    geospatial data.
  tags:
    - wildfire
    - insurance
    - risk
    - satellite
    - fuel
    - earthdaily
tool:
  form: commercial risk model
  group: Wildfire and risk
  homepage: >-
    https://earthdaily.com/blog/earthdaily-expands-ai-powered-wildfire-risk-intelligence-across-the-western-u.s.-with-north-american-insurance-major
open:
  source: closed
  data: closed
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: >-
        EarthDaily Expands AI-Powered Wildfire Risk Intelligence Across the
        Western U.S. With North American Insurance Major
      url: >-
        https://earthdaily.com/blog/earthdaily-expands-ai-powered-wildfire-risk-intelligence-across-the-western-u.s.-with-north-american-insurance-major
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT022
  kind: risk_model
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P141
  posters:
    - Manuel Weber
domains:
  - fire
---
FLAIM grew out of the forest measurement and wildfire analysis work of SkyForest, which EarthDaily acquired in early 2025, joined to EarthDaily's own Earth observation and analytics.[^1] Its inputs are regular satellite observations, daily weather and other geospatial data.[^1] The model produces three layers:

- wildfire probability
- fuel hazard, the vegetation part of risk
- directional vulnerability: how fire may move across a landscape and into communities[^1]

Because the model is updated from current imagery, it reflects vegetation growth, clearing and new development.[^1]

On 26 August 2026 EarthDaily announced FLAIM for a large, unnamed North American property and casualty insurer.[^1] The announced uses are underwriting, portfolio management and conflagration risk across high-risk markets in the western United States.[^1] The example shown is a July 2026 monthly composite of ignition likelihood for Spokane, Washington.[^1] It is delivered as data structured for integration into insurance systems.[^1] Pricing is not published.

EarthDaily says imagery from its own satellite constellation will be added as an input.[^1]
