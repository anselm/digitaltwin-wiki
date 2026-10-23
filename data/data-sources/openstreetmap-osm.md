---
about:
  depiction: data-sources/openstreetmap-osm.jpg
  label: OpenStreetMap
  description: >-
    Volunteer-built open map database of the world, covering roads, buildings,
    land use and places, and the base layer for most models of places.
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
Volunteer mappers add roads, trails, railway stations, cafés and much else.[^1,2] The OpenStreetMap Foundation runs the site on the community's behalf.[^1] Fastly and the foundation's corporate members support the hosting.[^1]

City and regional models use it for geometry and for the tags that say what each feature is. Valdrada is an open real-time model of New York City.[^4] It fills gaps in the city's own building-footprint records from OpenStreetMap, and for that reason licenses its compiled city under the ODbL.[^4] Wikimedia Enterprise's 2026 dataset joins about 17 million OpenStreetMap elements to Wikidata, Wikipedia and Wikivoyage, so geometry and encyclopaedic facts can be queried together.[^3]

The data is open under the Open Data Commons Open Database License (ODbL).[^2] Anyone may use it for any purpose with credit to OpenStreetMap and its contributors, and derived databases must be shared under the same licence.[^1,2] The site offers in-browser and desktop editors, an export page and GPS traces.[^1,2]
