---
about:
  label: GBIF
  description: >-
    Government-funded international network that gathers records of where
    and when species were seen or collected, from museums to phone photos,
    and serves them openly by website, API and download.
  aliases:
    - Global Biodiversity Information Facility
  tags:
    - biodiversity
    - species
    - occurrences
    - museum specimens
    - open data
    - API
datasource:
  coverage: global
  resolution: individual georeferenced occurrence records
  cadence: unknown
  access: free website search and API; downloads need a free account and come with a citable DOI
  format: Darwin Core Archive, simple tab-delimited, species list; JSON from the API
  homepage: 'https://www.gbif.org/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: open
  licence: per dataset, CC0, CC BY 4.0 or CC BY-NC 4.0
domains:
  - ecology
relations:
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: What is GBIF?
      url: 'http://web.archive.org/web/20260829160141/https://www.gbif.org/what-is-gbif'
    - title: 'GBIF API Reference :: Technical Documentation'
      url: 'https://techdocs.gbif.org/en/openapi/'
    - title: 'Using data :: Technical Documentation'
      url: 'https://techdocs.gbif.org/en/data-use/'
    - title: 'Data publishing :: Technical Documentation'
      url: 'https://techdocs.gbif.org/en/data-publishing/'
    - title: 'Applying a License to a Dataset :: GBIF IPT User Manual'
      url: 'https://ipt.gbif.org/manual/en/ipt/latest/applying-license'
    - title: Data user agreement
      url: 'http://web.archive.org/web/20260724235545/https://www.gbif.org/terms/data-user'
    - title: Citation guidelines
      url: 'http://web.archive.org/web/20260828052443/https://www.gbif.org/citation-guidelines'
    - title: GBIF occurrence search API, total record count (read 2026-10-26)
      url: 'https://api.gbif.org/v1/occurrence/search?limit=0'
    - title: GBIF dataset search API, total dataset count (read 2026-10-26)
      url: 'https://api.gbif.org/v1/dataset/search?limit=0'
    - title: iNaturalist Research-grade Observations, GBIF registry record (read 2026-10-26)
      url: 'https://api.gbif.org/v1/dataset/50c9509d-22c7-4a22-a47d-8c48425ef4a7'
    - title: EOD – eBird Observation Dataset, GBIF registry record (read 2026-10-26)
      url: 'https://api.gbif.org/v1/dataset/4fa7b334-ce0d-4e88-aaae-2e0c138d049e'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; gbif.org blocked direct reading, so its
    pages were read in Wayback Machine copies from July and August 2026, and
    the record and dataset counts were read from GBIF's own API
  status: draft
---
The Global Biodiversity Information Facility (GBIF) is an international network and data infrastructure funded by the world's governments to give anyone open access to data about all kinds of life on Earth.[^1] It was established in 2001 by a memorandum of understanding between governments, following a 1999 recommendation from the OECD's Megascience Forum.[^1] A Secretariat in Copenhagen coordinates a network of participating countries and organizations, which work through participant nodes.[^1]

Most of what it indexes are occurrence records, each a note of where and when a species was recorded.[^1] Records range from museum specimens collected in the 18th and 19th centuries to DNA barcodes and smartphone photos taken in recent weeks.[^1] Shared data standards draw them together; the main one is Darwin Core, a standard format for biodiversity records.[^1] On 26 October 2026 GBIF's API reported 3,983,321,935 occurrence records and 125,083 registered datasets.[^8,9] Most publishing institutions convert their data to a Darwin Core Archive, usually with GBIF's Integrated Publishing Toolkit (IPT).[^4] One such dataset is iNaturalist's research-grade observations, published by iNaturalist.org; see [iNaturalist](/data-sources/inaturalist/).[^10] GBIF also holds the Cornell Lab of Ornithology's eBird Observation Dataset; see [eBird](/data-sources/ebird/).[^11]

Publishers choose a licence for each dataset from the three GBIF accepts, which are CC0, CC BY 4.0 and CC BY-NC 4.0.[^5] Users must follow the licence of every dataset they use, and where GBIF's own data user agreement and a publisher's licence conflict, the licence prevails.[^6] Anyone who downloads data and uses it in research or policy agrees to cite it with a DOI.[^7] Each download gets its own DOI, whose page lists every dataset it drew on.[^7] After heavy filtering, a "derived dataset" can be registered to cite only the records kept.[^7]

Records can be searched and browsed on the website, and registered users can download them as a simple table, a Darwin Core Archive or a species list.[^3] The API returns JSON and covers datasets and publishers, species names, occurrence search and batch downloads, maps, and the literature that cites GBIF data.[^2] Ready-made clients exist for R (rgbif) and Python (pygbif).[^3] For large analyses the data is also held on Amazon, Google and Microsoft cloud services.[^3]

For someone modelling a place, GBIF answers what has been recorded living there and when: search the occurrence records and download those for the area, with a DOI to cite.[^2,3,7] The points mix old specimens with recent phone photos, so it is worth checking which datasets they come from before reading them as a survey.[^1]
