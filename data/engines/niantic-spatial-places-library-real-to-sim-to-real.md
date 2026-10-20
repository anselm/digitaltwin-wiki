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
  - sensory
  - places
---
The Places Library is a curated set of 100 real places, reconstructed by Niantic Spatial's embodied AI team and packaged for simulation. Each place is one USDZ file that pairs a photorealistic Gaussian splat with a collision mesh aligned to it, both derived from the same capture, gravity-aligned and at metric scale. The first catalogue covers industrial, logistics, commercial and residential settings, and the team says it will grow on request.

The intended use is what Niantic calls real-to-sim-to-real: reconstruct the site a robot will work in, train and evaluate its policy there in NVIDIA Isaac Sim, Isaac Lab or another OpenUSD simulator, find where it fails, and feed that back. Real places are also offered as a base for domain randomisation, and selected scenes can be relit to produce lighting and weather variants, a feature in beta.

Access is through Niantic Spatial's embodied AI plans, which also include capture minutes for reconstructing a customer's own sites; the number of places depends on the plan, and one sample scene is free. Prices and licence terms are not on the page. Status: operational, announced 25 September 2026.
