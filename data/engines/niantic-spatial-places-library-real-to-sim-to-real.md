---
about:
  depiction: engines/niantic-spatial-places-library-real-to-sim-to-real.jpg
  label: Niantic Spatial Places Library
  description: >-
    Catalogue from Niantic Spatial of 100 real-world environments captured as
    simulation-ready USDZ scenes, for training and testing robot policies in
    Isaac Sim and other OpenUSD simulators.
  tags:
    - gaussian splat
    - simulation
    - robotics
    - 3d capture
    - usd
tool:
  form: hosted asset catalogue
  group: 3D cities and mapping
  homepage: 'https://www.nianticspatial.com/blog/introducing-places-library-usdz'
  cost: 'by plan; one free sample scene'
  licence: unknown
open:
  source: unknown
  data: partly
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: Introducing the Places Library
      url: 'https://www.nianticspatial.com/blog/introducing-places-library-usdz'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT083
  kind: enabling_platform
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P051
    - P060
  posters:
    - 'Niantic Spatial, Inc.'
    - Pierre Fite-Georgel
    - Anvith E.
domains:
  - places
---
Niantic Spatial curated the places, and its embodied AI team announced them.[^1] Each is one USDZ file holding two things derived from the same capture.[^1] One is a photorealistic Gaussian splat, a way of representing a captured scene as many small coloured, semi-transparent blobs. The other is a collision mesh aligned to it: the plain surface geometry a physics engine uses.[^1] Both are gravity-aligned and at metric scale.[^1] The first catalogue covers industrial, logistics, commercial and residential settings, and Niantic says it will grow on request.[^1]

Niantic calls the intended use real-to-sim-to-real.[^1] A team reconstructs the site a robot will work in. It then trains and evaluates the robot's policy (the learned rules that map what it senses to what it does) there, in NVIDIA Isaac Sim, Isaac Lab or another OpenUSD simulator. The team finds where the policy fails and feeds that back.[^1] Real places are also offered as a base for domain randomisation, which varies a scene's details so a policy does not learn only one setting.[^1] Selected scenes can be relit to produce lighting and weather variants, a feature in beta.[^1]

Access is through Niantic Spatial's embodied AI plans, which also include capture minutes for reconstructing a customer's own sites.[^1] The number of places depends on the plan, and one sample scene is free.[^1] Prices and licence terms are not published.[^1] The library was announced on 25 September 2026.[^1]
