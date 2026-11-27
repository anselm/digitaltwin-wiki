---
about:
  label: CorrDiff
  description: >-
    NVIDIA's diffusion model for downscaling: it turns a 25 km weather field into a 2 km one after training on output from a high-resolution regional model. The training code is open.
  tags:
    - weather
    - downscaling
    - diffusion model
    - machine learning
    - regional
tool:
  tier: 3
  form: open-source training recipe and hosted model
  group: Weather and climate
  homepage: 'https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/weather/corrdiff/README.html'
  licence: 'PhysicsNeMo code Apache 2.0; Taiwan training dataset CC BY-NC-ND 4.0'
  cost: free to train yourself; hosted versions through NVIDIA
open:
  source: open
  data: restricted
  api: unknown
  participation: unknown
  licence: 'Apache 2.0 (PhysicsNeMo code); CC BY-NC-ND 4.0 (Taiwan dataset)'
relations:
  - predicate: needs
    target: data-sources/climate/era5
  - predicate: part_of
    target: engines/weather-and-climate/weathernext-nvidia-earth-2
provenance:
  origin: agent
  sources:
    - title: 'Residual corrective diffusion modeling for km-scale atmospheric downscaling (Mardani et al., Communications Earth & Environment 6, 2025; read in the arXiv full text)'
      url: 'https://arxiv.org/abs/2309.15214'
    - title: 'CorrDiff training and generation recipe (NVIDIA PhysicsNeMo documentation)'
      url: 'https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/weather/corrdiff/README.html'
    - title: 'NVIDIA/physicsnemo (repository licence, from the GitHub API)'
      url: 'https://github.com/NVIDIA/physicsnemo'
  created: '2026-11-15'
  reviewed: '2026-11-15'
  reviewed_by: 'Claude, from the sources listed; not yet read by Anselm'
  status: draft
domains:
  - climate
---
Downscaling means adding local detail to a coarse forecast or climate projection. The established way is to run a regional physics model at fine resolution inside the coarse one, which is expensive. CorrDiff learns the relationship between the coarse field and the fine one from past runs of such a regional model, and then produces the fine field directly.[^1] It is one of the models in [NVIDIA Earth-2](/engines/weather-and-climate/weathernext-nvidia-earth-2/).

The published demonstration is for Taiwan.[^1] The input is the [ERA5](/data-sources/climate/era5/) reanalysis at about 25 km. The training target is hourly output at 2 km, for 2018 to 2021, from a regional model with radar data assimilation that Taiwan's Central Weather Administration runs.[^1] The model works in two steps. A conventional network first predicts the average fine-scale field, and a diffusion model then generates the remaining detail, which the authors found easier to learn than generating the whole field at once.[^1] It outputs temperature at 2 m, wind at 10 m and radar reflectivity, a measure of rainfall that is not among its inputs.[^1] Because the diffusion step starts from random noise, repeated runs give an ensemble of possible fine-scale fields.

The authors report that on one GPU it is at least 22 times faster and about 1,300 times more energy efficient than the regional physics model on 928 CPU cores.[^1]

They also report where it falls short.[^1]

- Its ensembles are too narrow for most variables, so they understate uncertainty.
- Typhoons were rare in the training data: 22 hourly snapshots from five storms. For a typhoon outside the training set, the model produced a storm that was too compact and peak winds of about 40 metres per second where the target had 50.
- Each hour is generated separately, and "there is no guarantee that CorrDiff's km-scale dynamics will be coherent in time".
- The results are for one region.

NVIDIA publishes training and generation code in its PhysicsNeMo framework, which is under Apache 2.0, with configurations for Taiwan and for the continental United States and a template for a user's own dataset.[^2,3] The documentation marks this recipe as no longer maintained and points new projects to a successor called Regional Weather Diffusion.[^2] Its guidance for a new region is at least 50,000 training samples, and it reports about 5,000 GPU-hours of training for the continental United States.[^2] The Taiwan dataset is available for non-commercial use under CC BY-NC-ND 4.0.[^2] Training on a new region therefore depends on someone having already run a high-resolution model there for several years.

[Learned models of the Earth, and what they are trained on](/articles/climate/learned-models-of-the-earth/) describes downscaling beside the other ways learned and physics-based models are combined.
