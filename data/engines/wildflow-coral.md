---
about:
  label: Wildflow Coral
  description: >-
    Wildflow's service for coral reefs: divers upload footage and get back
    georeferenced 3D models, orthomosaics and bathymetry for tracking a reef
    over time.
  tags:
    - coral
    - reef
    - photogrammetry
    - restoration
    - monitoring
    - open source
tool:
  group: Wildlife and oceans
  homepage: 'https://wildflow.ai/'
open:
  source: open
  data: partly
  api: unknown
  participation: unknown
  licence: 'MIT'
provenance:
  origin: agent
  sources:
    - title: wildflow
      url: 'https://wildflow.ai/'
    - title: Wildflow Coral
      url: 'https://docs.wildflow.ai/coral'
    - title: Welcome
      url: 'https://docs.wildflow.ai/'
    - title: GitHub - wildflowai/platform
      url: 'https://github.com/wildflowai/platform'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT045
  kind: twin_candidate
  family: twins_and_candidates
  priority: supporting
  verified: false
  posts:
    - P128
  posters:
    - Diego Arechaga
domains:
  - ecology
---
Wildflow builds multimodal foundation models, large AI models trained on broad data and adapted to many tasks, for biodiversity. It is starting with coral reefs, and Wildflow Coral is its first product. The documentation links a founder's blog at nozdrenkov.com.

The goal for Wildflow Coral is a digital twin of any reef, combining 3D photogrammetry, bioacoustics, underwater video, remote sensing, eDNA and environmental data such as currents. Photogrammetry builds 3D models from overlapping photographs; eDNA is genetic material that organisms shed into the water. The twin would model population and energy dynamics and report health and resilience metrics, and pressures like runoff, development and warming water could then be quantified and restoration work coordinated.

What exists today is the data side. Dive teams, researchers, restoration practitioners and robotics operators upload footage from action cameras, phones, DSLRs or ROVs, or photogrammetry datasets, and get back 3D models viewable in a browser and shareable by link. They also get georeferenced, colour-corrected orthomosaics and bathymetry at sub-centimetre resolution. An orthomosaic is a single map-accurate image stitched from many photographs, and bathymetry is the depth of the seabed. These track change between surveys, including the survival and growth of outplanted corals. Donors, partners and the public can view sites and progress.

The platform code is on GitHub under the MIT licence. It is an open marine biodiversity data platform in early development, and the homepage offers a prototype to try for uploading CSV observations and joining them with environmental data. Pricing is not published.
