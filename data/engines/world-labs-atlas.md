---
about:
  depiction: engines/world-labs-atlas.jpg
  label: World Labs / Atlas
  description: >-
    World Labs' Atlas is a world model that generates, reconstructs and
    simulates 3D scenes from text, images and video, in early access with
    selected partners since September 2026.
  tags:
    - world model
    - 3D reconstruction
    - gaussian splats
    - robotics simulation
    - spatial intelligence
tool:
  form: Spatial world model
  group: 3D cities and mapping
  homepage: 'https://www.worldlabs.ai/blog/atlas'
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: 'Atlas: A World Model for Spatial Intelligence | World Labs'
      url: 'https://www.worldlabs.ai/blog/atlas'
    - title: World Labs
      url: 'https://www.worldlabs.ai/'
    - title: 'World Labs is Joining AMD | World Labs'
      url: 'https://www.worldlabs.ai/blog/amd-announcement'
    - title: youtube.com
      url: 'https://www.youtube.com/watch?v=qn1QDDBnTA0'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT086
  kind: enabling_world_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P086
  posters:
    - Andreessen Horowitz
---
World Labs was founded in 2024 around spatial intelligence.[^2,3] Its first product, Marble, generates 3D worlds from text, images, video or panoramas.[^2] Atlas, introduced on 1 September 2026, is a multimodal autoregressive diffusion transformer pretrained from scratch on text, images, video and 3D.[^1] Every input is placed at a 3D position in a shared spatial context, and the model generates what comes next consistently with everything it has seen.[^1]

Atlas has three tasks: generation, reconstruction and simulation.[^1] For generation, it makes images and video with explicit camera control, up to one minute at 1440p from a few reference images.[^1] For reconstruction, it takes one to over a hundred photographs and outputs novel views, point clouds (sets of 3D points) and 3D Gaussian splats.[^1] A splat stores a scene as many small, soft, coloured blobs. One example on World Labs' page rebuilds Stanford's Main Quad from two to twenty-five ground-level photos and flies over it from the air.[^1] From three to five ordinary phone cameras, Atlas can freeze and reframe a video.[^1] For simulation, a phone video of a space becomes a scene in which robots can navigate or manipulate objects.[^1] The same model generates the robot's camera views.[^1]

The reconstruction and simulation side matters for models of places. Atlas is not a geospatial or earth-observation model.

Atlas is in early access with selected partners, and access is by request.[^1] It outputs the same splat representation Marble uses, so it integrates with World Labs' existing product.[^1]

On 28 September 2026 World Labs announced a definitive agreement to join AMD.[^3] The deal is expected to close by the end of 2026, subject to regulatory approval.[^3] Fei-Fei Li is to join AMD as Executive Vice President and Chief Scientist.[^3]
