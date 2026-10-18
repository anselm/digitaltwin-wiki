---
about:
  label: VGGT-Ω
  description: >-
    Feed-forward 3D vision model from Meta AI and Oxford's Visual Geometry
    Group that predicts camera poses, depth and point clouds from video; used as
    a reconstruction backend in DeepReefMap for coral reef mapping.
  tags:
    - 3d reconstruction
    - computer vision
    - depth
    - camera pose
    - coral reef
    - video
tool:
  form: research model
  group: 3D cities and mapping
  homepage: 'https://github.com/facebookresearch/vggt-omega'
  licence: noncommercial research licence
  cost: free
open:
  source: partly
  data: unknown
  api: unknown
  participation: unknown
  licence: 'FAIR Noncommercial Research License'
provenance:
  origin: agent
  sources:
    - title: 'GitHub - facebookresearch/vggt-omega: [CVPR 2026 Oral] VGGT Omega'
      url: 'https://github.com/facebookresearch/vggt-omega'
    - title: 'GitHub - eceo-epfl/deepreefmap: Tools for reconstructing and mapping coral reef scenes from underwater images'
      url: 'https://github.com/eceo-epfl/deepreefmap'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT042
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
VGGT-Ω (VGGT-Omega) is a family of one-billion-parameter models from Meta AI and the Visual Geometry Group at the University of Oxford, presented as an oral paper at CVPR 2026 (arXiv 2605.15195). Given a set of frames it returns camera poses and intrinsics, per-pixel depth with confidence, and tokens that can be unprojected into a point cloud; variants are trained at 512, 416 and 256 pixel resolution, and one checkpoint adds a text-alignment embedding.

Its place in this wiki is as one of four reconstruction backends in DeepReefMap, the EPFL and MIT tool that turns handheld underwater video into a semantic 3D point cloud, an ortho-mosaic and benthic cover statistics for a reef. DeepReefMap's README rates it high quality and notes that, unlike its streaming alternative, it looks at the whole clip at once, so the length of video it can handle is capped by GPU memory; the README quotes upstream figures of roughly 6 GB for the model plus about 75 MB per frame on an A100.

The code is on GitHub and the weights are hosted at facebook/VGGT-Omega on Hugging Face behind an access request that is reviewed automatically. DeepReefMap describes the licence as the FAIR Noncommercial Research License and keeps the backend as an opt-in extra for that reason; the VGGT-Ω repository itself refers readers to its LICENSE file. It runs on NVIDIA, AMD and Apple Silicon GPUs.

Released; the repository lists updates from September 2026.
