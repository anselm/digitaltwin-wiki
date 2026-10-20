---
about:
  depiction: data-sources/openstreetmap-osm.jpg
  label: OpenStreetMap
  description: >-
    Volunteer-built open map database of the world, covering roads, buildings,
    land use and places; the base layer most digital twins of places start
    from.
  tags:
    - map
    - open data
    - roads
    - buildings
    - geospatial
  aliases:
    - OSM
datasource:
  coverage: global
  resolution: individual map features with geometry and tags
  access: 'open data under the ODbL, with attribution and share-alike'
  homepage: 'https://www.openstreetmap.org/'
open:
  source: unknown
  data: open
  api: unknown
  participation: open
  licence: 'ODbL'
provenance:
  origin: agent
  sources:
    - title: OpenStreetMap
      url: 'https://www.openstreetmap.org/about'
    - title: Copyright and License
      url: 'https://www.openstreetmap.org/copyright'
    - title: Geospatial Wikidata Dataset Connects OpenStreetMap and Wikimedia for Reuse
      url: 'https://enterprise.wikimedia.com/blog/geospatial-wikidata-dataset/'
    - title: valdrada
      url: 'https://github.com/mkturkcan/valdrada'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT067
  kind: enabling_data
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P010
    - P032
    - P077
    - P085
  posters:
    - Said Turksever
    - Michal Migurski
    - B Venkateswara Raja (BVR)
    - Mehmet Kerem Turkcan
domains:
  - places
  - mobility
---
OpenStreetMap is a map of the world built and maintained by volunteer mappers, who add roads, trails, railway stations, cafés and much else. The OpenStreetMap Foundation operates the site on the community's behalf; hosting is supported by Fastly and the foundation's corporate members.

City and regional twins use it as a geometric and semantic substrate. Valdrada, an open real-time model of New York City, fills gaps in the city's own building-footprint records from OpenStreetMap and licenses its compiled city under the ODbL for that reason. Wikimedia Enterprise's 2026 dataset joins about 17 million OpenStreetMap elements to Wikidata, Wikipedia and Wikivoyage so that geometry and encyclopaedic facts can be queried together.

The data is open under the Open Data Commons Open Database License (ODbL): it may be used for any purpose with credit to OpenStreetMap and its contributors, and derived databases must be shared under the same licence. The site offers in-browser and desktop editors, an export page and GPS traces.

Operational and continuously edited.
