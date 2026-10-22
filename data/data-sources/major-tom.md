---
about:
  label: Major TOM
  description: >-
    Shared global grid and open satellite datasets from ESA's Φ-lab: Sentinel-2
    and Sentinel-1 imagery, elevation, night lights and AI embeddings, all cut
    to the same 10 km cells and downloadable from Hugging Face.
  tags:
    - satellite
    - sentinel
    - embeddings
    - training data
    - elevation
    - night lights
datasource:
  homepage: 'https://huggingface.co/Major-TOM'
  coverage: nearly all land seen by Sentinel-2, on a grid of points about 10 km apart
  resolution: 10 m for Sentinel imagery; 30 m for elevation
  cadence: mostly one image per place; night lights yearly, 2016 to 2024
  access: Parquet and GeoTIFF files on Hugging Face, readable one patch at a time over HTTP; browser viewer; Python helpers on GitHub
  format: Parquet, GeoParquet, GeoTIFF, cozip
  cost: free
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: Apache 2.0 (code); CC BY-SA 4.0 for most datasets; CC BY 4.0 for some
  note: >-
    Most datasets are CC BY-SA 4.0. The AlphaEarth embeddings subset, the VIIRS
    night lights and the COP-GEN benchmark are CC BY 4.0. The helper code on
    GitHub is Apache 2.0.
domains:
  - places
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'Major TOM: Expandable Datasets for Earth Observation (arXiv 2402.12095)'
      url: 'https://arxiv.org/abs/2402.12095'
    - title: 'Major-TOM (Hugging Face organisation)'
      url: 'https://huggingface.co/Major-TOM'
    - title: 'ESA-PhiLab/Major-TOM (README)'
      url: 'https://github.com/ESA-PhiLab/Major-TOM'
    - title: 'Major-TOM/Core-S2L2A'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-S2L2A'
    - title: 'Major-TOM/Core-DEM'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-DEM'
    - title: 'Major-TOM/Core-VIIRS-Nighttime-Light'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-VIIRS-Nighttime-Light'
    - title: 'Major-TOM/Core-AlphaEarth-Embeddings'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-AlphaEarth-Embeddings'
    - title: 'Major-TOM/Core-S2L2A-249k-SatCLIP'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-S2L2A-249k-SatCLIP'
    - title: 'Hugging Face API: datasets by Major-TOM'
      url: 'https://huggingface.co/api/datasets?author=Major-TOM&full=true'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Satellite datasets for training AI usually arrive in their own formats, cut into their own tiles. Major TOM, short for Terrestrial Observation Metaset, puts them on one grid instead: a set of points about 10 km apart covering the globe, each naming a cell. A Sentinel-2 image, a terrain model and a night-light reading for the same cell then share a cell ID. A script in the repository makes grids at other spacings. Alistair Francis and Mikolaj Czerkawski of ESA's Φ-lab proposed it in a paper posted in February 2024 and presented at IGARSS 2024.

The core image datasets each cover nearly all of the land their sensor sees:

- Sentinel-2 colour and infrared imagery at two processing levels, 2,245,886 patches of 1,068 by 1,068 pixels at 10 m, about 23 TB each
- Sentinel-1 radar, 1,469,955 patches, about 16 TB
- Copernicus 30 m elevation, 1,837,843 patches, made with Adobe Research
- yearly night-time light from the VIIRS satellite sensor for 2016 to 2024, made with CloudFerro and Asterisk Labs, with far fewer patches for 2016 to 2018 and only 442 for 2024

Many more of the datasets are embeddings. An embedding is a list of numbers a trained AI model gives to an image, chosen so that places that look alike get similar lists. Major TOM has run its patches through published models such as DINOv2, Clay and [SatCLIP](/engines/satclip/), one dataset per model. A prototype subset of Google's AlphaEarth embeddings covers 62,489 cells, each holding 1,068 by 1,068 embeddings of 64 numbers. Because every set keys on the same cells, someone modelling a region can take its imagery, elevation, night lights and embeddings together and compare one model's view of a place with another's.

The files sit on Hugging Face as Parquet tables of patches and can be read one patch at a time over the web, so a study of one valley does not need terabytes on disk. A browser viewer shows samples, and the GitHub repository has Python notebooks for filtering by area and for reading the embeddings. Anyone can read the datasets; to add one that follows the Major TOM layout, a contributor asks the organisation's admins for write access.

The helper code is Apache 2.0. Most datasets are CC BY-SA 4.0, which lets you reuse them, including commercially, so long as you credit the source and share derived data under the same licence. The AlphaEarth embeddings subset, the night lights and the COP-GEN benchmark are CC BY 4.0, which asks only for credit. Most image sets hold a single date per place, so on their own they show what a place looked like once rather than how it changed.
