---
about:
  depiction: engines/deepreefmap.jpg
  label: DeepReefMap
  description: >-
    Open-source pipeline from EPFL's ECEO lab that builds labelled 3D point
    clouds, orthomosaics and benthic cover statistics of coral reefs from
    handheld underwater video.
  tags:
    - coral
    - reef
    - 3d reconstruction
    - segmentation
    - underwater
    - video
tool:
  form: open-source pipeline
  group: Wildlife and oceans
  homepage: 'https://github.com/eceo-epfl/deepreefmap'
  licence: Apache 2.0
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache 2.0'
provenance:
  origin: agent
  sources:
    - title: GitHub - eceo-epfl/deepreefmap
      url: 'https://github.com/eceo-epfl/deepreefmap'
    - title: >-
        CoralscapesV2: Panoptic and Fine-Grained Visual Scene Understanding in
        Coral Reefs
      url: 'https://josauder.github.io/coralscapesv2/'
    - title: 'eceo-epfl/deepreefmap release v1.2.0'
      url: 'https://github.com/eceo-epfl/deepreefmap/releases/tag/v1.2.0'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT040
  kind: enabling_reconstruction
  family: enabling_technology_and_adjacent_work
  priority: high
  verified: true
  posts:
    - P107
  posters:
    - Jonathan Sauder
domains:
  - ecology
  - water
relations:
  - predicate: needs
    target: data-sources/coralscapes-coralscapesv2
    note: uses dataset (source_claim; exact implementation not independently tested)
  - predicate: built_on
    target: engines/vggt
    note: >-
      supports backend (source_claim; exact implementation not independently
      tested)
  - predicate: built_on
    target: engines/lingbot-map
    note: >-
      supports backend (source_claim; exact implementation not independently
      tested)
---
Hugues Sibille (EPFL) and Jonathan Sauder (MIT and EPFL) maintain DeepReefMap under EPFL's ECEO group.[^1] The method, for rapid 3D semantic mapping of reefs, was published in Methods in Ecology and Evolution in 2024.[^1] From one video it produces a semantic 3D point cloud, an orthomosaic, per-class benthic cover statistics and an interactive viewer.[^1] A semantic point cloud is a set of 3D points, each labelled with what it shows. An orthomosaic is a single map-like image stitched from many frames. Benthic cover is the share of the seabed each class occupies.

The pipeline rectifies frames with a camera profile, segments each frame (labels every pixel by class), reconstructs depth and camera pose, then exports the products.[^1] It ships with profiles for the GoPro Hero 10 and 12.[^1] Other cameras are calibrated with a built-in tool based on COLMAP, an open-source photogrammetry program.[^1] Several reconstruction backends can be chosen. A basic one runs on CPU, higher-quality ones need a GPU (NVIDIA, AMD or, for some, Apple Silicon), and one has gated weights limited to non-commercial research use.[^1] Segmentation defaults to a model trained on CoralscapesV2, a panoptic reef dataset of 2,433 annotated images from 55 Red Sea sites with 95 classes, released under Apache 2.0.[^1,2] A panoptic dataset labels both individual objects and background regions.

DeepReefMap is a command-line tool in Python 3.10 to 3.12, licensed Apache 2.0.[^1] A GPU is strongly recommended, and a separate desktop app exists.[^1] Bundled third-party components and downloaded checkpoints have their own terms.[^1] The project is public and actively developed, with workshop papers cited for 2025 and 2026, and its latest tagged release, v1.2.0, came out in October 2026.[^1,3]
