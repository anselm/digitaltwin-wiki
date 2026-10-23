---
about:
  depiction: engines/aurora.jpg
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
  group: Weather and climate
  homepage: 'https://www.microsoft.com/en-us/research/project/aurora-forecasting/'
  licence: MIT
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'MIT'
provenance:
  origin: agent
  sources:
    - title: Aurora Forecasting - Microsoft Research
      url: 'https://www.microsoft.com/en-us/research/project/aurora-forecasting/'
    - title: microsoft/aurora
      url: 'https://github.com/microsoft/aurora'
    - title: aurora/LICENSE.txt
      url: 'https://raw.githubusercontent.com/microsoft/aurora/main/LICENSE.txt'
    - title: microsoft/aurora (model weights) - Hugging Face
      url: 'https://huggingface.co/microsoft/aurora'
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
Aurora has 1.3 billion parameters, the adjustable numbers a model learns in training, and is pretrained on a large body of atmospheric data and then adapted, with comparatively little data, to particular forecasting tasks.[^1,2] Microsoft Research's AI for Science group published it as "A Foundation Model for the Earth System" in Nature in 2025 (Bodnar et al.).[^1,2] Aurora 1.5, developed by Microsoft Weather, adds 22 variables, including cloud cover, precipitation and radiation.[^1] It also adds hourly resolution and ensemble forecasts, sets of runs that show the spread of possible outcomes.[^1]

The repository ships four fine-tuned versions: medium- and high-resolution global weather, air pollution and ocean waves.[^2] Microsoft says these match or beat operational numerical forecasts, the physics-based forecasts weather services run, and run much faster.[^1]

Aurora installs with pip as microsoft-aurora or from conda-forge, and the small pretrained checkpoint is about 500 MB.[^2] Code and weights are MIT-licensed.[^3,4] The release is for research and reproducibility, and its outputs should not drive operational decisions without expert review.[^2] Aurora 1.5 is also offered through Microsoft Foundry, with a contact address for commercial use.[^1]
