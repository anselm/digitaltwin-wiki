---
about:
  depiction: engines/lingbot-map.jpg
  label: LingBot-Map
  description: >-
    Open-source streaming 3D reconstruction model from the Robbyant team at
    Ant Group that estimates camera poses, depth and point clouds from a video
    or image sequence in one feed-forward pass.
  tags:
    - 3d reconstruction
    - computer vision
    - point cloud
    - video
    - open source
tool:
  form: open-source model
  group: 3D cities and mapping
  homepage: 'https://github.com/robbyant/lingbot-map'
  licence: Apache-2.0
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache-2.0'
provenance:
  origin: agent
  sources:
    - title: 'LingBot-Map: Geometric Context Transformer for Streaming 3D Reconstruction'
      url: 'https://github.com/robbyant/lingbot-map'
    - title: >-
        GitHub - eceo-epfl/deepreefmap: Tools for reconstructing and mapping
        coral reef scenes from underwater images
      url: 'https://github.com/eceo-epfl/deepreefmap'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT043
  kind: enabling_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P107
  posters:
    - Jonathan Sauder
domains:
  - sensory
---
Robbyant calls it a 3D foundation model, meaning a large model trained broadly so it can be reused for many tasks. The paper behind it is "Geometric Context Transformer for Streaming 3D Reconstruction" (arXiv 2604.14141). LingBot-Map reads a video file or a folder of images and outputs camera poses, depth and a point cloud frame by frame. Classical structure-from-motion, which recovers 3D shape from many overlapping photos, refines its estimate by iterative optimisation; LingBot-Map does without that step. The repository claims about 20 frames per second at 518 by 378 pixels on sequences of more than 10,000 frames.

DeepReefMap is an EPFL toolkit for mapping coral reefs from handheld underwater video, and LingBot-Map is one of its reconstruction backends. The DeepReefMap README recommends it for long videos on a modest GPU, because memory use stays flat however long the dive is. The weights are public, with no access request.

Code is on GitHub under the Apache 2.0 licence, and the checkpoint is on Hugging Face and ModelScope. It needs an NVIDIA or AMD GPU, except on Apple Silicon, where it runs on CPU only, and it comes with a browser viewer and an offline rendering pipeline. The repository has updates through June 2026, and a stronger model for longer sequences has been announced.
