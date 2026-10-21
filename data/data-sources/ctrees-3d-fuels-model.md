---
about:
  label: CTrees 3D Fuels
  description: >-
    Lidar-derived model from CTrees of forest fire fuels in one-metre voxels,
    with canopy, ladder and ground fuel properties, demonstrated at three US
    sites and published as open 3D arrays.
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
CTrees is a non-profit led by Sassan Saatchi. A voxel is a small cube of space, the 3D counterpart of a pixel. Each one-metre voxel in the model holds four values: bulk density, moisture, live fraction and surface-area-to-volume ratio. Canopy fuels, ground fuels and ladder fuels (the shrubs and low branches that let a fire climb into the crowns) share the same array. Next-generation physics-based fire models can read the arrays directly.

The model is built on public airborne lidar from the USGS 3DEP programme. Lidar is laser scanning, here from aircraft, that records the height and shape of the ground and vegetation. Using this public lidar lets the method be applied across ecosystems. CTrees demonstrated it on mixed conifer forest near South Lake Tahoe, chamise chaparral in the San Jacinto Mountains, and a loblolly pine and sweetgum plantation in the Georgia Piedmont.

The work took third place in the 3D Surface Fuels and Vegetation Modeling Prize Challenge. SERDP/ESTCP ran the challenge with the Naval Air Warfare Center Training Systems Division and the Central Florida Tech Grove. The team was Saatchi, Zhihua Liu, Bryan Shaddy, Chris Mihiar and Aijing Li. CTrees announced the model on 7 October 2026.

The arrays, validation and interactive 3D models for the three sites are public at 3dfuels.ctrees.org, a prize-challenge demo. The model maps fuel structure; it does not simulate how a fire behaves.
