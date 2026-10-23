---
about:
  label: ML4Floods
  description: >-
    Open-source Python package, also called FloodMapper, that maps flood water
    in Sentinel-2 and Landsat satellite images, with a hand-checked training set
    of past floods and trained models to download.
  tags:
    - flood
    - satellite
    - sentinel-2
    - landsat
    - flood extent
    - machine learning
tool:
  form: open-source Python package, trained models and training dataset
  group: Water and flooding
  homepage: 'https://spaceml-org.github.io/ml4floods/'
  licence: LGPL-3.0 (code); CC BY-NC 4.0 (WorldFloods dataset and trained models)
  cost: free
domains:
  - water
  - places
open:
  source: open
  data: partly
  api: 'no'
  participation: open
  licence: LGPL-3.0 for the code; CC BY-NC 4.0 for the dataset and models
  note: The code is LGPL, but the WorldFloods dataset and every pre-trained model are licensed for non-commercial use only.
relations:
  - predicate: answers
    target: questions/flooding
  - predicate: alternative_to
    target: engines/ai4g-flood
provenance:
  origin: agent
  sources:
    - title: 'spaceml-org/ml4floods (README)'
      url: 'https://github.com/spaceml-org/ml4floods'
    - title: 'Introduction — ML4Floods'
      url: 'https://spaceml-org.github.io/ml4floods/content/config.html'
    - title: 'The WorldFloods database — ML4Floods'
      url: 'https://spaceml-org.github.io/ml4floods/content/worldfloods_dataset.html'
    - title: 'isp-uv-es/ml4floods (model card)'
      url: 'https://huggingface.co/isp-uv-es/ml4floods'
    - title: 'isp-uv-es/WorldFloodsv2 (dataset card)'
      url: 'https://huggingface.co/datasets/isp-uv-es/WorldFloodsv2'
    - title: 'Global flood extent segmentation in optical satellite images (Scientific Reports, 2023)'
      url: 'https://www.nature.com/articles/s41598-023-47595-7'
    - title: 'Mapping global floods with 10 years of satellite radar data (Nature Communications)'
      url: 'https://www.nature.com/articles/s41467-025-60973-1'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
ML4Floods looks at a satellite photo taken during a flood and marks which pixels are water. It works on optical images, the ordinary colour and infrared pictures taken by Sentinel-2 and Landsat.[^1,2] The package covers the whole chain in Python. It fetches images and existing flood maps, trains a neural network, runs it on a new scene and shows the result on an interactive map.[^2]

The work began with the 2019 Frontier Development Lab Europe team on disaster response, and went on with funding from the UK Space Agency, led by Trillium Technologies.[^1,2] The current models and dataset come from a paper by Enrique Portalés-Julià, Gonzalo Mateo-García, Cormac Purcell and Luis Gómez-Chova, published in Scientific Reports in November 2023,[^2,6] and are hosted on Hugging Face by the Image and Signal Processing group (ISP).[^2,4,5] The models have also been run on board a D-Orbit satellite in a set of experiments.[^2]

The training set is called WorldFloods. Version 2 holds 509 Sentinel-2 images of floods between 2016 and 2023, each paired with a mask drawn mostly from Copernicus emergency flood maps and corrected by hand.[^3] Each mask has two layers: one says whether a pixel was clear or cloudy, the other whether it was land or water.[^3] The trained models follow the same split, so a map shows where cloud hid the ground rather than calling it dry.[^2,4] The Hugging Face dataset card puts the download at about 76 GB.[^3,5] Tutorials walk through a full flood map of the Kherson dam break and a run over a time series of Sentinel-2 images.[^1,2]

For a model of a place, a map of where water stood in a past flood is a check on a flood model's predictions. It also gives a quick picture of a new flood when the next clear image comes in. Optical satellites cannot see through cloud, and floods tend to come with it; the radar-based [AI4G Flood](/engines/ai4g-flood/) works through cloud and at night.[^7]

The code is under the LGPL-3.0 licence.[^1] The WorldFloods dataset and all the pre-trained models are under Creative Commons Attribution-NonCommercial 4.0, which does not allow commercial use.[^1,4,5]
