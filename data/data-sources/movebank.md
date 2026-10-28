---
about:
  label: Movebank
  description: >-
    Free database hosted by the Max Planck Institute of Animal Behavior where
    researchers keep, share and archive the tracks of tagged animals and readings
    from other sensors the animals carry.
  tags:
    - animal tracking
    - animal movement
    - bio-logging
    - migration
    - wildlife
    - API
datasource:
  coverage: global, any species and study area
  resolution: individual animal locations over time, plus other animal-borne sensor measurements
  cadence: continuous; live feeds from tag manufacturers add new records as tags send them
  access: free; public studies can be viewed and downloaded by anyone, others only with the owner's permission; a free account is needed to request access; REST API and the move2 R package
  format: CSV and JSON from the API, organised by the Movebank data model and vocabulary
  homepage: 'https://www.movebank.org/'
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: open
  licence: set per study by its owner; CC0, CC BY or CC BY-NC for public downloads, custom terms otherwise
domains:
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'Movebank: About Movebank'
      url: 'https://www.movebank.org/cms/movebank-content/about-movebank'
    - title: 'Movebank: Permissions and data sharing'
      url: 'https://www.movebank.org/cms/movebank-content/permissions-and-sharing'
    - title: 'Movebank: General Movebank Terms of Use'
      url: 'https://www.movebank.org/cms/movebank-content/general-movebank-terms-of-use'
    - title: 'Movebank: Access data'
      url: 'https://www.movebank.org/cms/movebank-content/access-data'
    - title: 'Movebank: The Movebank Data Repository'
      url: 'https://www.movebank.org/cms/movebank-content/data-repository'
    - title: 'movebank/movebank-api-doc (README)'
      url: 'https://github.com/movebank/movebank-api-doc'
    - title: 'movebank-api.md (Movebank REST API)'
      url: 'https://github.com/movebank/movebank-api-doc/blob/master/movebank-api.md'
    - title: 'The Movebank system for studying global animal movement and demography (Kays et al. 2022, Methods in Ecology and Evolution 13, 419-431; abstract and licence from the Crossref record)'
      url: 'https://doi.org/10.1111/2041-210X.13767'
    - title: 'Digital twins as a tool for ecosystem research (Visser et al. 2026, Trends in Ecology & Evolution)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the sources listed; the Kays et al. paper was read from its Crossref abstract, as the publisher blocked the full text'
  status: draft
---
Researchers and wildlife managers use Movebank for the records of tags fixed to animals, a practice called bio-logging: where each animal was and when, plus whatever else the tag measures.[^1] The Max Planck Institute of Animal Behavior hosts it with the North Carolina Museum of Natural Sciences, Ohio State University, the Senckenberg Society for Nature Research and the University of Konstanz.[^1] The Max Planck Society and the University of Konstanz fund it for the long term.[^1] The project started in 2007 and is open to any data owner, whatever the species, study area or funder.[^1]

As of September 2026 it held 11.8 billion animal locations and 9.5 billion other sensor measurements, in 10,192 studies covering 1,712 taxa from 5,324 data owners.[^1] Data arrive as uploaded files or as automated feeds from more than 30 tag manufacturers.[^1] The 2022 paper describing the system counted thousands of active tags sending over 3 million new records a day.[^8] Studies are kept at whatever stage of research they are in, so some are incomplete, and animal and tag identifiers are only unique within a study.[^6] The Movebank Data Repository is a curated subset: as of January 2026, 396 publicly archived datasets with 466 million locations of nearly 18,000 animals of 260 species, each with a DOI.[^1,5]

Data owners keep ownership.[^1] Each study's owners choose whether the public can see its tracks on the map and whether anyone outside the team can download the data.[^2] Exact coordinates and times cannot be extracted from the map.[^2] Public downloads carry a CC0, CC BY or CC BY-NC licence; restricted studies carry the owner's own terms.[^2,3] Owners can also hold back the most recent 30 days to 3 years of data, or set a date up to 10 years ahead when the study opens.[^2] Data under CC0, CC BY or CC BY-NC can be used without asking, though the terms encourage contacting the owners; for anything else the owner's permission is needed first.[^3] To ask, register for a free account and message the study's contact.[^4]

The REST API returns CSV or JSON.[^6,7] Without a login it returns only what owners have made public; with one, whatever that user has been granted.[^7] Some studies require their licence terms to be accepted once before the first download, including over the API.[^7] For R users the maintainers point to the move2 package.[^6] The Env-DATA System attaches hundreds of environmental variables to tracks, and MoveApps offers analysis tools.[^1]

Someone modelling a place can use Movebank to see how animals move through it: where migrants stop, which corridors they use, how far a herd ranges. Tracks with environmental values attached can test a model's habitat assumptions. The 2026 paper [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) cites the 2022 Movebank paper among the new sources of ecosystem data, under high-frequency biologgers.[^9]
