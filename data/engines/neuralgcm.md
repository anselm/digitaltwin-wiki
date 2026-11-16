---
about:
  label: NeuralGCM
  description: >-
    Open atmospheric model from Google Research that solves the equations of large-scale motion and uses neural networks for clouds, radiation and precipitation; for weather and climate runs.
  tags:
    - weather
    - climate
    - hybrid model
    - machine learning
    - general circulation model
    - global
tool:
  tier: 3
  form: open-source Python library with pretrained models
  group: Weather and climate
  homepage: 'https://github.com/neuralgcm/neuralgcm'
  licence: 'code Apache 2.0; trained weights CC BY-SA 4.0'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache 2.0 (code); CC BY-SA 4.0 (weights)'
relations:
  - predicate: needs
    target: data-sources/era5
  - predicate: alternative_to
    target: engines/gencast
  - predicate: alternative_to
    target: engines/ace2
provenance:
  origin: agent
  sources:
    - title: 'Neural general circulation models for weather and climate (Kochkov et al., Nature 632, 1060-1066, 2024; read in the arXiv full text)'
      url: 'https://arxiv.org/abs/2311.07222'
    - title: 'neuralgcm/neuralgcm'
      url: 'https://github.com/neuralgcm/neuralgcm'
    - title: 'NeuralGCM documentation: checkpoints'
      url: 'https://neuralgcm.readthedocs.io/en/latest/checkpoints.html'
  created: '2026-11-15'
  reviewed: '2026-11-15'
  reviewed_by: 'Claude, from the sources listed; not yet read by Anselm'
  status: draft
domains:
  - climate
---
NeuralGCM is a hybrid: part of it is physics written as equations and part is learned from data. A general circulation model, or GCM, is the kind of physics-based model used for both weather forecasting and climate projection. Its makers describe NeuralGCM as "the first GCM that combines a differentiable solver for atmospheric dynamics with ML components".[^1]

The solver computes the large-scale movement of air, heat and moisture from the established equations. A neural network, applied to each vertical column of the atmosphere, "predicts the effect of unresolved processes such as cloud formation, radiative transport, precipitation".[^1] Because the solver is differentiable, the two parts are trained together against the [ERA5](/data-sources/era5/) reanalysis, so the network learns whatever correction makes the whole model's forecasts match the record.[^1]

The paper reports weather forecasts for one to ten days that are competitive with purely learned models. Its ensemble version at 1.4 degrees had lower error than the European Centre's ensemble on almost all variables, lead times and heights.[^1] In climate runs at 1.4 degrees, with sea surface temperature and sea ice supplied from the historical record, the model produced 83 tropical cyclones where ERA5 has 86 for the same period.[^1] The authors put the saving in computing at three to five orders of magnitude, compared with the high-resolution physics-based models it was tested against.[^1]

The limits are stated plainly in the paper and the documentation:

- NeuralGCM models the atmosphere only. The user supplies sea surface temperature and sea ice, and the authors say it "will need to be reformulated to enable coupling with other Earth system components".[^1,3]
- Of 37 forty-year runs at 2.8 degrees, 22 stayed stable to the end.[^1] The documentation says the higher-resolution models are not stable over seasons or longer.[^3]
- When sea surface temperature was raised by 4 degrees, the model's "response diverges from expectations".[^1]

Pretrained models are published at 0.7, 1.4 and 2.8 degrees.[^3] The documentation recommends the 1.4 degree stochastic model for weather forecasts, and describes the 2.8 degree stochastic models, which also predict precipitation and evaporation, as stable enough for twenty-year atmosphere-only climate simulations.[^3] The code is under Apache 2.0 and the trained weights under CC BY-SA 4.0.[^2]

[Learned models of the Earth, and what they are trained on](/articles/learned-models-of-the-earth/) places this hybrid design beside purely learned models and emulators.
