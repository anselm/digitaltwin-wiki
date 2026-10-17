---
about:
  label: Coralscapes and CoralscapesV2
  description: >-
    Densely annotated underwater image datasets of Red Sea coral reefs from
    EPFL and partners for training segmentation models; V2 adds panoptic
    labels, 95 classes and fish instances, and is the training data behind
    DeepReefMap.
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
  access: open; V2 under Apache 2.0, V1 licence not stated; both on Hugging Face
  format: annotated images and video sequences, Hugging Face datasets
  homepage: 'https://josauder.github.io/coralscapesv2/'
provenance:
  origin: agent
  sources:
    - title: 'CoralscapesV2: Panoptic and Fine-Grained Visual Scene Understanding in Coral Reefs'
      url: 'https://josauder.github.io/coralscapesv2/'
    - title: 'The Coralscapes Dataset: Semantic Scene Understanding in Coral Reefs'
      url: 'https://josauder.github.io/coralscapes/'
    - title: eceo-epfl/deepreefmap
      url: 'https://github.com/eceo-epfl/deepreefmap'
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
Coralscapes is a dense semantic segmentation dataset of coral reef imagery modelled on the Cityscapes urban dataset, built by Jonathan Sauder, Viktor Domazetoski, Guilhem Banc-Prandi, Gabriela Perna, Anders Meibom and Devis Tuia with EPFL's ECEO lab and the Transnational Red Sea Center. The first release has 2075 images, 39 classes and about 174,000 annotations from five countries, and was presented at the ICCV 2025 Joint Workshop on Marine Vision. CoralscapesV2 extends it to 2433 frames, 95 fine-grained classes, about 270,000 polygons and 65,738 fish instance masks from 55 Red Sea reef sites, with co-authors from institutions in Djibouti, Eritrea, Jordan and Sudan; it is a paper for the ECCV 2026 Workshop on Marine Vision (arXiv 2609.12826).

The datasets exist to train models that read underwater footage. They are the training data for the segmentation models in DeepReefMap, EPFL's Apache-licensed software that turns handheld video into a labelled 3D point cloud, an ortho-mosaic and benthic cover statistics for a reef.

Both load from the Hugging Face Hub with the datasets library. V2 is released under Apache 2.0; the V1 page does not state a dataset licence. V2's video sequences total around 206 GB, so streaming is advised. Pretrained segmentation models in 39- and 95-class versions are published alongside.
