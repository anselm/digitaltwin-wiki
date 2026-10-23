---
about:
  label: Global Ecosystems Atlas
  description: >-
    GEO-convened map of Earth's ecosystems, classified to the IUCN Global Ecosystem Typology and harmonised from national maps and new satellite-trained maps; in beta, with a public API.
  tags:
    - ecosystems
    - ecosystem typology
    - iucn get
    - biodiversity
    - land cover
    - satellite
    - global
    - api
datasource:
  homepage: 'https://globalecosystemsatlas.org/'
  coverage: 'global, land, inland waters and sea (beta: 7 of 10 realms)'
  cadence: unknown
open:
  source: unknown
  data: open
  api: open
  participation: partly
  licence: CC BY 4.0 (terms of use)
  note: >-
    A public API serves area statistics, point lookups and map tiles, and
    accepts suggested corrections; no bulk download is listed. The terms of
    use put maps, data, statistics and APIs under CC BY 4.0, commercial use
    included, with attribution to GEO; logos and branding are excluded, and
    the text descriptions of the typology carry IUCN's non-commercial terms.
domains:
  - ecology
  - places
provenance:
  origin: agent
  sources:
    - title: Global Ecosystems Atlas
      url: 'https://globalecosystemsatlas.org/'
    - title: About the Atlas
      url: 'https://globalecosystemsatlas.org/about'
    - title: Global overview
      url: 'https://globalecosystemsatlas.org/atlas/global-overview'
    - title: Atlas partners
      url: 'https://globalecosystemsatlas.org/articles/atlas-partners'
    - title: Atlas technical paper
      url: 'https://globalecosystemsatlas.org/articles/atlas-technical-paper'
    - title: >-
        Reporting on the extent of natural ecosystems under the
        Kunming-Montreal Global Biodiversity Framework
      url: 'https://globalecosystemsatlas.org/articles/gbf-indicator-a2'
    - title: API documentation
      url: 'https://globalecosystemsatlas.org/api-documentation'
    - title: Terms of use
      url: 'https://globalecosystemsatlas.org/terms-of-use'
  created: '2026-10-22'
  reviewed: '2026-10-22'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Global Ecosystems Atlas is a shared map of where the world's ecosystems are. The Group on Earth Observations (GEO) convenes the Atlas with the Secretariat of the Convention on Biological Diversity and the International Union for Conservation of Nature (IUCN), and the GEO Secretariat hosts the core team.[^2,4] The site calls the Atlas a digital public good and says the Atlas will be the first harmonised open resource on the extent, change, condition and risk of ecosystems.[^1,2] Funders named on the about page are Norad, Fondation Hoffmann, the European Commission, the UK Department for Environment, Food and Rural Affairs and the UN Environment Programme.[^2]

Every map uses the IUCN Global Ecosystem Typology, which sorts ecosystems into 10 realms, 25 biomes and, at the third level, 110 ecosystem functional groups such as abyssal plains and deepwater biogenic beds.[^3,5] Esri runs a cloud pipeline that harmonises existing national and regional maps with new ones into a single synthesis map.[^4] The new maps come from models trained on satellite data: Google contributes [AlphaEarth Foundations](/engines/alphaearth-prithvi/) embeddings, and the Allen Institute for AI contributes geospatial models and its OlmoEarth tools.[^4] The Global Ecology Lab at James Cook University labels EcoTrain, a set of more than 90,000 sample points used for training and validation, and leads quality assurance.[^4] The European Space Agency supplies Earth observation inputs and national maps, and helps translate European classifications into the typology.[^4]

The current release is a beta.[^1] On 16 October 2026 the global overview counted 7 of 10 realms, 18 of 25 biomes and 85 of 110 functional groups as mapped, from source data dated 2011 to 2026, and the site expects a full global release by early 2027.[^1,3] The methods are described in a technical paper posted to EcoEvoRxiv, announced on the site on 6 August 2026.[^5]

Maps can be explored in a web viewer.[^1] The public API (version 1.0.0, described in OpenAPI 3.1) returns the typology, area statistics for countries and custom areas, what is mapped at a given longitude and latitude, and map tiles, and takes suggested corrections.[^7] Esri's partner description says data products are also shared through ArcGIS Living Atlas.[^4] The Atlas maps ecosystem types; [Global Safety Net v3](/data-sources/global-safety-net-v3-gsn3/) maps places important for biodiversity, and the two answer different questions.

Parties to the [Kunming-Montreal Global Biodiversity Framework](/mandates/global-biodiversity-framework/) are expected to report on ecosystems for the first time, through headline indicator A.2, the extent of natural ecosystems.[^6] An April 2026 article on the site found that fewer than a third of Parties reported on A.2 in their seventh national reports.[^6] A quick first test is the API's point lookup at `/api/v1/point/{lon}/{lat}`, which returns what the Atlas has mapped at a coordinate.[^7]
