---
about:
  label: Extend3D
  description: >-
    Research model from Seoul National University that generates a town-scale
    3D scene from a single image, built on Microsoft's TRELLIS; code released
    with a CVPR 2026 paper.
  tags:
    - 3d generation
    - town
    - single image
    - gaussian splatting
    - mesh
    - computer vision
tool:
  form: research model
  group: 3D cities and mapping
  homepage: 'https://github.com/SNU-VGILab/Extend3D'
  licence: MIT
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: MIT
  note: Code on GitHub under MIT; the quick start loads pretrained TRELLIS weights.
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: 'GitHub - SNU-VGILab/Extend3D'
      url: 'https://github.com/SNU-VGILab/Extend3D'
    - title: 'Extend3D LICENSE'
      url: 'https://raw.githubusercontent.com/SNU-VGILab/Extend3D/main/LICENSE'
    - title: 'Extend3D SETUP.md'
      url: 'https://raw.githubusercontent.com/SNU-VGILab/Extend3D/main/SETUP.md'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: >-
    Claude, from the sources listed; the README is short, the SETUP.md says
    "Coming Soon", and the paper and demo badges do not yet link anywhere,
    so the method itself is not described by the sources.
  status: draft
---
The authors are Seungwoo Yoon, Jinmo Kim and Jaesik Park. The repository credits Microsoft's TRELLIS, the model its code is built on.

The quick start takes one image and returns a scene as 3D Gaussians (a scene drawn as many small, soft, coloured blobs) and a mesh. The repository shows rendering the Gaussians to a video and exporting the mesh as a GLB file, a common 3D model format. A Gradio app gives a browser demo.

The code is Python, installed locally, under the MIT licence. Running it takes a Linux x86-64 machine, an NVIDIA GPU with 24 GB of memory, and CUDA 12.4 or later. Larger scenes need more memory. The quick start loads the pretrained weights named microsoft/TRELLIS-image-large.

The setup notes say "Coming Soon", and the paper and demo links in the README are not yet live.
