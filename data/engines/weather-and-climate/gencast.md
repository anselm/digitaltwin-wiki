---
about:
  label: GraphCast and GenCast
  description: >-
    Google DeepMind's two published machine-learning weather models, trained on the ERA5 reanalysis. GraphCast gives one ten-day forecast; GenCast gives an ensemble of fifteen-day forecasts.
  tags:
    - weather
    - forecast
    - machine learning
    - diffusion model
    - ensemble
    - global
tool:
  tier: 3
  form: open-source machine-learning weather forecast models
  group: Weather and climate
  homepage: 'https://github.com/google-deepmind/graphcast'
  licence: 'code Apache 2.0; other materials CC BY 4.0'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache 2.0 (code); CC BY 4.0 (other materials)'
relations:
  - predicate: needs
    target: data-sources/era5
  - predicate: alternative_to
    target: engines/weather-and-climate/aifs
  - predicate: alternative_to
    target: engines/weather-and-climate/aurora
  - predicate: part_of
    target: engines/weather-and-climate/weathernext-nvidia-earth-2
provenance:
  origin: agent
  sources:
    - title: 'google-deepmind/graphcast (README, now titled WeatherNext)'
      url: 'https://github.com/google-deepmind/graphcast'
    - title: 'Learning skillful medium-range global weather forecasting (Lam et al., Science 382, 1416-1421, 2023; arXiv abstract)'
      url: 'https://arxiv.org/abs/2212.12794'
    - title: 'Probabilistic weather forecasting with machine learning (Price et al., Nature 637, 84-90, 2025; read in the arXiv full text, where it is titled GenCast: Diffusion-based ensemble forecasting for medium-range weather)'
      url: 'https://arxiv.org/abs/2312.15796'
  created: '2026-11-15'
  reviewed: '2026-11-15'
  reviewed_by: 'Claude, from the sources listed; not yet read by Anselm'
  status: draft
domains:
  - climate
---
GraphCast and GenCast are the first generation of the models behind Google's [WeatherNext](/engines/weather-and-climate/weathernext-nvidia-earth-2/) forecasts. Google DeepMind's repository now carries the WeatherNext name and lists them as its older models, under the names WeatherNext Graph and WeatherNext Gen.[^1] They remain the versions described in detail in published papers, and they are the usual reference points when a learned weather model is discussed.

GraphCast, published in Science in 2023, is a graph neural network that is "trained directly from reanalysis data".[^2] It forecasts hundreds of weather variables for ten days ahead at 0.25 degrees, in under a minute, and gives a single forecast with no statement of uncertainty.[^2] Its authors report that it outperformed the most accurate operational deterministic system on 90 per cent of 1,380 verification targets.[^2]

GenCast, published in Nature in December 2024, is a conditional diffusion model. It generates the state of the atmosphere twelve hours ahead from random noise, given the two preceding states, and repeats the step thirty times for a fifteen-day forecast.[^3] Each run from the same start gives a different plausible outcome, so a set of runs forms an ensemble that shows the spread of possibilities.[^3] It was trained on [ERA5](/data-sources/era5/) for 1979 to 2018 and works at 0.25 degrees with six surface variables and six atmospheric variables at thirteen pressure levels.[^3] For forecasts of 2019, the authors report greater skill than the European Centre's ensemble on 97.4 per cent of 1,320 targets. One forecast takes about eight minutes on a single Cloud TPU v5 accelerator.[^3]

The paper states two limits. GenCast "relies on initial conditions from a traditional NWP ensemble data assimilation system", that is, on a physics-based system to say what the weather is at the start. Precipitation was left out of the main results because the authors lacked confidence in ERA5's precipitation.[^3]

The code is under Apache 2.0, and the repository says all other materials are under CC BY 4.0.[^1] It notes that the ERA5 and ECMWF data needed for training and for starting a forecast may carry separate terms.[^1] The repository describes the models as experimental research and says they do not replace official warnings.[^1] [Learned models of the Earth, and what they are trained on](/articles/learned-models-of-the-earth/) sets these models beside the other ways of learning a model from data.
