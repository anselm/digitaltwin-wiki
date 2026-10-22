---
about:
  label: AI4G Flood
  description: >-
    Open flood detection model from the Microsoft AI for Good Lab that compares
    Sentinel-1 radar images from before and during a flood, with a global
    record of detected floods from October 2014 to September 2024.
  tags:
    - flood
    - radar
    - sar
    - sentinel-1
    - flood extent
    - machine learning
tool:
  form: open-source model and Python scripts, with a global flood dataset
  group: Water and flooding
  homepage: 'https://github.com/microsoft/ai4g-flood'
  licence: MIT (code, model and dataset)
  cost: free
domains:
  - water
  - places
open:
  source: open
  data: open
  api: 'no'
  participation: open
  licence: MIT
  note: The trained model ships in the repository; the ten-year flood dataset is on Hugging Face under MIT.
relations:
  - predicate: answers
    target: questions/flooding
  - predicate: alternative_to
    target: engines/ml4floods
provenance:
  origin: agent
  sources:
    - title: 'microsoft/ai4g-flood (README)'
      url: 'https://github.com/microsoft/ai4g-flood'
    - title: 'Mapping global floods with 10 years of satellite radar data (Nature Communications)'
      url: 'https://www.nature.com/articles/s41467-025-60973-1'
    - title: 'Mapping Global Floods with 10 Years of Satellite Radar Data (arXiv 2411.01411)'
      url: 'https://arxiv.org/abs/2411.01411'
    - title: 'ai-for-good-lab/ai4g-flood-dataset (dataset card)'
      url: 'https://huggingface.co/datasets/ai-for-good-lab/ai4g-flood-dataset'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Sentinel-1 carries a radar, which sees the ground through cloud and at night. This model takes a Sentinel-1 radar image from before a possible flood and one from during it, and marks the pixels that turned to water. It is a U-Net, a common network for labelling every pixel of an image, built on a small MobileNetV2 encoder.

The model comes from the Microsoft AI for Good Lab. Amit Misra, Kevin White, Simone Fobi Nsutezo and Juan Lavista of the lab, with William Straka III of the University of Wisconsin-Madison, published it in Nature Communications on 1 July 2025. They ran the model over every Sentinel-1 image from October 2014 to September 2024 to build a global record of floods. The paper uses it to find areas of Ethiopia that flood again and again, and to map the May 2024 floods in Kenya as they happened.

The scripts run in two ways. Give a country and a date range, and the script pulls processed Sentinel-1 images from the Microsoft Planetary Computer and writes one GeoTIFF map per scene, which a second script merges into one. Or download a before and after pair yourself, for example from the Alaska Satellite Facility. Those images need the same processing as the training data, or the results may differ. The trained model is a 62 MB file in the repository.

The ten-year record is a download of its own on Hugging Face. It holds detections at 20 metres in 3 by 3 degree tiles, with soil moisture, elevation, temperature and land cover alongside each one for weeding out false alarms. Recurrence maps count the months in which each place flooded. For a model of a place, that is a decade of observed floods to set against a flood model's predictions.

The model mistakes permanent lakes and rivers for flood unless they are masked out with a map of standing water such as ESA WorldCover or Global Surface Water. The paper's method widens each detection by 80 metres. The repository, trained model included, and the dataset are under the MIT licence. [ML4Floods](/engines/ml4floods/) does the same job from optical images.
