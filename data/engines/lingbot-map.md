---
about:
  label: LingBot-Map
  description: >-
    Open-source streaming 3D reconstruction model from the Robbyant team at
    Ant Group; turns a video or image sequence into camera poses, depth and
    point clouds in one feed-forward pass.
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
LingBot-Map is a 3D foundation model for streaming reconstruction, published by the Robbyant team under the paper "Geometric Context Transformer for Streaming 3D Reconstruction" (arXiv 2604.14141). It takes a video file or a folder of images and produces camera poses, depth and a point cloud frame by frame, without the iterative optimisation of classical structure-from-motion. The repository claims about 20 frames per second at 518 by 378 pixels on sequences of more than 10,000 frames.

One documented use is as a reconstruction backend in DeepReefMap, the EPFL toolkit for mapping coral reefs from handheld underwater video; its README recommends LingBot-Map for long videos on a modest GPU because memory use stays flat however long the dive is, and notes that the weights are public with no access request.

Code is on GitHub under the Apache 2.0 licence and the checkpoint is on Hugging Face and ModelScope; it needs an NVIDIA or AMD GPU and runs on CPU only on Apple Silicon. A browser viewer and an offline rendering pipeline are included. Status: released, with repository updates through June 2026; a stronger model for longer sequences is announced as coming.
