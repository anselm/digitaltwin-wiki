---
about:
  label: SatCLIP
  description: >-
    Open location encoder published by Microsoft that turns any longitude
    and latitude into an embedding summarising what the place looks like in
    Sentinel-2 imagery, for use as an input to prediction models.
  tags:
    - satellite
    - foundation model
    - embeddings
    - location
    - sentinel
tool:
  form: open research model and code
  group: Earth observation and AI
  homepage: 'https://github.com/microsoft/satclip'
  licence: MIT (code and weights)
  cost: free
domains:
  - places
  - ecology
  - climate
open:
  source: open
  data: open
  api: no
  participation: open
  licence: MIT
  note: The model cards say SatCLIP is for research and not intended for production use.
provenance:
  origin: agent
  sources:
    - title: 'microsoft/satclip (README)'
      url: 'https://github.com/microsoft/satclip'
    - title: 'microsoft/SatCLIP-ViT16-L40 (model card)'
      url: 'https://huggingface.co/microsoft/SatCLIP-ViT16-L40'
    - title: 'microsoft/SatCLIP-ResNet18-L10 (model card)'
      url: 'https://huggingface.co/microsoft/SatCLIP-ResNet18-L10'
    - title: 'SatCLIP: Global, General-Purpose Location Embeddings with Satellite Imagery (arXiv 2311.17179)'
      url: 'https://arxiv.org/abs/2311.17179'
    - title: 'satclip/configs/default.yaml'
      url: 'https://github.com/microsoft/satclip/blob/main/satclip/configs/default.yaml'
    - title: 'torchgeo/s2-100k'
      url: 'https://huggingface.co/datasets/torchgeo/s2-100k'
    - title: 'Major-TOM/Core-S2L2A-249k-SatCLIP'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-S2L2A-249k-SatCLIP'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Give SatCLIP a longitude and a latitude and it returns a list of numbers describing the place as it appears from orbit. No image is needed at the moment of asking. The name stands for Satellite Contrastive Location-Image Pretraining. Its authors are Konstantin Klemmer, Esther Rolf, Caleb Robinson, Lester Mackey and Marc Rußwurm, and Microsoft publishes the code and models. The paper was posted to arXiv in November 2023 and published at AAAI in 2025.

Training follows OpenAI's CLIP, which learned to match pictures with their captions. SatCLIP matches pictures with their coordinates instead. The pictures are S2-100K: 100,000 cloud-free Sentinel-2 images of 256 by 256 pixels at 10 m, in 12 bands, sampled roughly evenly over land between January 2021 and May 2023 through Microsoft's Planetary Computer. Two encoders learn side by side, one for images and one for locations. The published loader keeps only the location encoder by default, which by then has absorbed what the imagery says about each part of the globe.

This makes it a different tool from [TESSERA](/engines/tessera/). TESSERA reads pixels: it summarises a year of imagery for each 10 m square, so the numbers follow what is on the ground and are published for each year. SatCLIP reads only coordinates, so a given model has one answer per place, learned from images taken between 2021 and 2023, and it describes the broad character of a region rather than one field. Its model cards say it picks up large structures such as cities and mountain ranges, and that fine-grained problems over small areas are out of scope.

In a model of a place the embedding goes in as one more input beside whatever else is known about each location. The paper's tests include air temperature, precipitation, median income, housing prices, elevation, population density, country, biome, ecoregion and species identification from photographs. The repository has Colab notebooks for loading the models and for an air temperature prediction. Major TOM has also run the image encoder over 248,719 Sentinel-2 patches and published the results ([Major TOM](/data-sources/major-tom/)).

Six pretrained versions are on Hugging Face. They pair three image encoders with two settings of L, 10 or 40. L sets how fine a spatial detail the location encoder can follow. Code and weights are MIT licensed. The model cards say SatCLIP was built and tested for research, not production, and that defence and surveillance uses are out of scope whatever its performance.
