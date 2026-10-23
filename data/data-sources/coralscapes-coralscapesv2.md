---
about:
  depiction: data-sources/coralscapes-coralscapesv2.jpg
  label: Coralscapes and CoralscapesV2
  description: >-
    Densely annotated Red Sea coral reef image datasets from EPFL and partners for training segmentation models; V2 adds panoptic labels, 95 classes and fish instances; training data behind DeepReefMap.
  tags:
    - coral reefs
    - segmentation
    - underwater imagery
    - training data
    - red sea
datasource:
  coverage: Red Sea reefs; V1 2075 images from five countries, V2 2433 frames from 55 reef sites
  resolution: per-pixel labels on individual frames, plus 31-frame video clips in V2
  cadence: one-off releases, 2025 and 2026
  access: open; Apache 2.0 for both; both on Hugging Face
  format: annotated images and video sequences, Hugging Face datasets
  homepage: 'https://josauder.github.io/coralscapesv2/'
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'Apache 2.0'
provenance:
  origin: agent
  sources:
    - title: 'CoralscapesV2: Panoptic and Fine-Grained Visual Scene Understanding in Coral Reefs'
      url: 'https://josauder.github.io/coralscapesv2/'
    - title: 'The Coralscapes Dataset: Semantic Scene Understanding in Coral Reefs'
      url: 'https://josauder.github.io/coralscapes/'
    - title: eceo-epfl/deepreefmap
      url: 'https://github.com/eceo-epfl/deepreefmap'
    - title: EPFL-ECEO/coralscapes on Hugging Face
      url: 'https://huggingface.co/datasets/EPFL-ECEO/coralscapes'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT041
  kind: dataset
  family: observations_data_and_reconstruction
  priority: supporting
  verified: true
  posts:
    - P107
  posters:
    - Jonathan Sauder
domains:
  - ecology
  - sensory
---
Coralscapes is modelled on Cityscapes, a dataset of urban scenes. Every pixel in each reef image is labelled with a class, a method called dense semantic segmentation.[^2] It was built by Jonathan Sauder, Viktor Domazetoski, Guilhem Banc-Prandi, Gabriela Perna, Anders Meibom and Devis Tuia, with EPFL's ECEO lab and the Transnational Red Sea Center.[^2] The first release has 2075 images, 39 classes and about 174,000 annotations from five countries.[^2] It was presented at the ICCV 2025 Joint Workshop on Marine Vision.[^2]

CoralscapesV2 grows to 2433 frames from 55 Red Sea reef sites, with 95 fine-grained classes, about 270,000 polygons and 65,738 fish instance masks (outlines of individual fish).[^1] Its co-authors include researchers from institutions in Djibouti, Eritrea, Jordan and Sudan.[^1] The V2 paper is for the ECCV 2026 Workshop on Marine Vision (arXiv 2609.12826).[^1]

The datasets are for training models that read underwater footage, among them the segmentation models in DeepReefMap, EPFL's Apache-licensed software for mapping a reef from handheld video.[^3] DeepReefMap produces a labelled 3D point cloud, an ortho-mosaic (one top-down image stitched from many frames) and benthic cover statistics (how much of the seabed each class covers).[^3]

Both load from the Hugging Face Hub with the datasets library, and pretrained segmentation models in 39- and 95-class versions are published alongside.[^1] Both are released under Apache 2.0.[^1,4] V2's video sequences total around 206 GB, so streaming is advised.[^1]
