---
about:
  label: CTrees 3D Fuels
  description: >-
    Lidar-derived model from CTrees of forest fire fuels as one-metre voxels
    carrying canopy, ladder and ground fuel properties, demonstrated at three
    US sites and published as open 3D arrays for fire models to read.
  tags:
    - wildfire
    - fuels
    - lidar
    - forest structure
    - voxels
datasource:
  coverage: three demonstration sites, near South Lake Tahoe (mixed conifer), the San Jacinto Mountains (chamise chaparral) and the Georgia Piedmont (loblolly pine and sweetgum plantation)
  resolution: one-metre voxels
  cadence: unknown
  access: public arrays, validation and interactive 3D models at 3dfuels.ctrees.org
  format: 3D voxel arrays with bulk density, moisture, live fraction and surface area to volume
  homepage: 'https://3dfuels.ctrees.org'
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: CTrees · 3D Fuels
      url: 'https://3dfuels.ctrees.org'
    - title: 'A new way to map fire fuels, in 3D and at scale'
      url: 'https://ctrees.org/news/map-forest-fire-fuels-in-3D'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT023
  kind: data_model
  family: observations_data_and_reconstruction
  priority: high
  verified: true
  posts:
    - P042
  posters:
    - CTrees
domains:
  - fire
  - ecology
---
A fuel-mapping method from CTrees, the non-profit led by Sassan Saatchi, that describes vegetation fuels in three dimensions rather than as a surface class. Each one-metre voxel holds bulk density, moisture, live fraction and surface-area-to-volume ratio, and the canopy, ladder and ground fuel layers are combined in the same array. The arrays are delivered in a form that next-generation physics-based fire models can read directly.

The model is built on the public USGS 3DEP airborne lidar, which is what lets it be applied across ecosystems. CTrees demonstrated it on mixed conifer forest near South Lake Tahoe, chamise chaparral in the San Jacinto Mountains, and a loblolly pine and sweetgum plantation in the Georgia Piedmont. The work took third place in the 3D Surface Fuels and Vegetation Modeling Prize Challenge run by SERDP/ESTCP with the Naval Air Warfare Center Training Systems Division and the Central Florida Tech Grove; the team was Saatchi, Zhihua Liu, Bryan Shaddy, Chris Mihiar and Aijing Li.

The arrays, validation and interactive 3D models for the demonstration sites are public at 3dfuels.ctrees.org, which describes itself as a prize-challenge demo. It is a fuel-structure input layer, not a fire-behaviour simulator; CTrees announced it on 7 October 2026 and no wider coverage is stated.
