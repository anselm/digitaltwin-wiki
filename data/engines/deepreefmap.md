---
about:
  label: DeepReefMap
  description: >-
    Open-source pipeline from EPFL's ECEO lab that turns handheld underwater
    video of coral reefs into labelled 3D point clouds, orthomosaics and
    benthic cover statistics.
  tags:
    - coral
    - reef
    - 3d reconstruction
    - segmentation
    - underwater
    - video
tool:
  form: open-source pipeline
  homepage: 'https://github.com/eceo-epfl/deepreefmap'
  licence: Apache 2.0
  cost: free
provenance:
  origin: agent
  sources:
    - title: GitHub - eceo-epfl/deepreefmap
      url: 'https://github.com/eceo-epfl/deepreefmap'
    - title: >-
        CoralscapesV2: Panoptic and Fine-Grained Visual Scene Understanding in
        Coral Reefs
      url: 'https://josauder.github.io/coralscapesv2/'
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
DeepReefMap is software for rapid 3D semantic mapping of coral reefs from video shot with a handheld camera. It is maintained by Hugues Sibille (EPFL) and Jonathan Sauder (MIT and EPFL) under EPFL's ECEO group, and the method was published in Methods in Ecology and Evolution in 2024. From one video it produces a semantic 3D point cloud, an orthomosaic, per-class benthic cover statistics and an interactive viewer.

The pipeline rectifies frames with a camera profile (GoPro Hero 10 and 12 profiles ship with it; other cameras are calibrated with a built-in COLMAP tool), segments each frame, reconstructs depth and pose, then exports the products. Several reconstruction backends can be chosen, from a basic one that runs on CPU to higher-quality ones that need an NVIDIA or AMD GPU, and one whose weights are gated and limited to non-commercial research use. Segmentation defaults to a model trained on CoralscapesV2, a panoptic reef dataset of 2,433 annotated images from 55 Red Sea sites with 95 classes, released under Apache 2.0.

It is a command-line tool in Python 3.10 to 3.12, licensed Apache 2.0, with a GPU strongly recommended; a separate desktop app exists. Vendored components and downloaded checkpoints carry their own terms.

Status: public and actively developed, with workshop papers cited for 2025 and 2026; no tagged release yet.
