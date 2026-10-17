---
about:
  label: Aurora
  description: >-
    Microsoft Research foundation model for the Earth system, fine-tuned for
    global weather, air pollution and ocean-wave forecasting; code and weights
    open under MIT.
  tags:
    - weather
    - forecast
    - foundation model
    - air quality
    - waves
tool:
  form: open-source foundation model
  homepage: 'https://www.microsoft.com/en-us/research/project/aurora-forecasting/'
  licence: MIT
  cost: free
provenance:
  origin: agent
  sources:
    - title: Aurora Forecasting - Microsoft Research
      url: 'https://www.microsoft.com/en-us/research/project/aurora-forecasting/'
    - title: microsoft/aurora
      url: 'https://github.com/microsoft/aurora'
    - title: aurora/LICENSE.txt
      url: 'https://raw.githubusercontent.com/microsoft/aurora/main/LICENSE.txt'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT033
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
Aurora is a 1.3-billion-parameter model of the atmosphere from Microsoft Research's AI for Science group, published as "A Foundation Model for the Earth System" in Nature in 2025 (Bodnar et al.). It is pretrained on a large body of atmospheric data and then adapted with comparatively little data to particular forecasting tasks. Aurora 1.5, developed by Microsoft Weather, adds 22 variables such as cloud cover, precipitation and radiation, hourly resolution and ensemble forecasts.

The repository ships four fine-tuned versions: medium- and high-resolution global weather, air pollution and ocean waves. Microsoft reports that these match or beat operational numerical forecasts at far lower compute cost, which is the developers' own claim.

It installs with pip as microsoft-aurora or from conda-forge; the small pretrained checkpoint is about 500 MB. Code and weights are MIT-licensed. The README says the release is for research and reproducibility and that outputs should not drive operational decisions without expert review. Aurora 1.5 is also offered through Microsoft Foundry, with a contact address for commercial use.

Research release, maintained on GitHub.
