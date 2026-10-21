---
about:
  depiction: engines/vggt.jpg
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
VGGT-Ω (VGGT-Omega) is a family of one-billion-parameter models, presented as an oral paper at CVPR 2026 (arXiv 2605.15195). Feed-forward means the model computes its answer in one pass through the network. Given a set of frames, it returns camera poses and intrinsics (lens settings such as focal length), per-pixel depth with confidence, and tokens that can be unprojected into a point cloud. Variants are trained at 512, 416 and 256 pixel resolution. One checkpoint adds a text-alignment embedding.

DeepReefMap, from EPFL and MIT, builds a semantic 3D point cloud, an ortho-mosaic and benthic cover statistics for a reef from handheld underwater video. An ortho-mosaic is a stitched overhead image with perspective removed. Benthic cover is what covers the seabed, such as coral or sand. VGGT-Ω is one of DeepReefMap's four reconstruction backends, and its README rates it high quality. Unlike the streaming alternative, it looks at the whole clip at once, so GPU memory caps the length of video it can handle. The README quotes upstream figures of roughly 6 GB for the model plus about 75 MB per frame on an A100.

The code is on GitHub. The weights are at facebook/VGGT-Omega on Hugging Face, behind an access request that is reviewed automatically. DeepReefMap names the licence as the FAIR Noncommercial Research License and keeps the backend as an opt-in extra for that reason. The VGGT-Ω repository points readers to its LICENSE file and lists updates from September 2026. The model runs on NVIDIA, AMD and Apple Silicon GPUs.
