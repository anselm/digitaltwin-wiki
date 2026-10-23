---
about:
  depiction: data-sources/global-safety-net-v3-gsn3.jpg
  label: Global Safety Net v3
  description: >-
    Global map from One Earth and Nature Data Lab of lands and inland waters important for biodiversity, ecosystem services and climate, with land cover and conservation status, in a free yearly viewer.
  tags:
    - conservation
    - biodiversity
    - land cover
    - protected areas
    - global
datasource:
  coverage: global lands and inland waters, reported by nation, state and county
  resolution: unknown
  cadence: annual
  access: free web viewer, no login; rare and threatened species layers need an IBAT licence; data download not stated
  format: web map with ecological group, land cover class and conservation status views
  homepage: 'https://www.globalsafetynet.app/'
open:
  source: unknown
  data: partly
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: Global Safety Net
      url: 'https://www.globalsafetynet.app/'
    - title: Global Safety Net v3 offers a new way to monitor nature worldwide
      url: 'https://www.oneearth.org/global-safety-net-3/'
    - title: Global Safety Net v3 launched to monitor the global extent and condition of natural land annually
      url: 'https://www.prnewswire.com/news-releases/global-safety-net-v3-launched-to-monitor-the-global-extent-and-condition-of-natural-land-annually-302887426.html'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT052
  kind: data_platform
  family: observations_data_and_reconstruction
  priority: high
  verified: true
  posts:
    - P036
  posters:
    - One Earth
domains:
  - ecology
  - places
---
The Global Safety Net is an open scientific project of One Earth and Nature Data Lab.[^1] Collaborators include The Nature Conservancy, IIASA and ESA.[^1] Version 3, launched on 23 September 2026, is the first meant to be refreshed every year.[^2,3] It maps Areas of Importance for Biodiversity and Ecosystem Services across the world's lands and inland waters.[^2,3] The map combines thirteen datasets, then removes land converted to intensive human use according to The Nature Conservancy's Human Modification time series.[^2,3] Geospatial computation runs on Google Earth Engine. The UK firm Octophin built the web application.[^2,3]

The viewer has three views:[^2,3]

- Ecological group: five priority categories, such as rare and threatened species, and wild and intact areas.[^2,3]
- Land cover class: thirteen types from the ESA CCI land cover series, plus inland surface water.[^3]
- Conservation status: protected areas, OECMs (other effective area-based conservation measures), documented conservation areas, and Indigenous and Traditional Territories.[^2,3]

For each nation, state and county the map reports conservation status and the rate of ecological degradation.[^3] The figures are set against the Kunming-Montreal target of conserving 30% of land and inland waters by 2030.[^2,3]

The viewer is free and needs no login.[^2,3] The rare and threatened species layers require an IBAT licence.[^3]
