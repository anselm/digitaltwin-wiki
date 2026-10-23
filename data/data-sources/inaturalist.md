---
about:
  depiction: data-sources/inaturalist.jpg
  label: iNaturalist
  description: >-
    Community website and app where people photograph plants, animals and
    fungi and others identify them; the observations are published as open
    biodiversity data for research and conservation.
  tags:
    - biodiversity
    - species
    - observations
    - community science
    - open data
datasource:
  coverage: global
  resolution: individual georeferenced observations with photos or sound
  access: open data; website, app, GBIF Darwin Core archive and an AWS S3 extract
  homepage: 'https://www.inaturalist.org/'
open:
  source: unknown
  data: open
  api: unknown
  participation: open
provenance:
  origin: agent
  sources:
    - title: A Community for Naturalists · iNaturalist
      url: 'https://www.inaturalist.org/'
    - title: iNaturalist Species Observations
      url: 'https://www.arcgis.com/home/item.html?id=996576ae63d4499c924aabea1c3d3768'
    - title: Peering Into The Invisible Present
      url: 'https://longnow.org/ideas/peering-into-the-invisible-present/'
    - title: 'What is the Data Quality Assessment (DQA) and how do observations qualify to become "Research Grade"? (iNaturalist Help)'
      url: 'https://help.inaturalist.org/en/support/solutions/articles/151000169936-what-is-the-data-quality-assessment-dqa-and-how-do-observations-qualify-to-become-research-grade-'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT057
  kind: data_platform
  family: observations_data_and_reconstruction
  priority: supporting
  verified: false
  posts:
    - P133
    - P148
  posters:
    - Galen Oettel
    - The Long Now Foundation
domains:
  - ecology
  - people
---
iNaturalist is nonprofit and community-run, and has operated since at least 2012.[^1,3] An observation is a photograph or recording of an organism with a place and time.[^1,4] It becomes "research grade" once more than one person has agreed on the species.[^4] Research-grade records also need a date, coordinates, at least one photo or sound, and a wild, not captive, organism.[^2,4] iNaturalist reports more than 300 million observations, more than 550,000 species documented and more than 7,000 papers citing its data.[^1]

The record of what has been seen where is dense but uneven. A 2022 Long Now essay describes studies built on it, including a 17-year analysis of dragonfly colouration drawn from iNaturalist and GBIF records.[^3] The essay also notes the known biases: sightings cluster near cities and roads, and growth in users can look like growth in populations.[^3]

The observations are open data.[^1] Beyond the website and app, they are distributed as a GBIF Darwin Core archive and an AWS S3 open-data extract.[^2] Darwin Core is a standard format for biodiversity records. Esri's Living Atlas layer is derived from the S3 extract.[^2]
