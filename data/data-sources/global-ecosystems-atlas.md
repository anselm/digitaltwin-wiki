---
about:
  label: Global Ecosystems Atlas
  description: >-
    GEO-convened map of where Earth's ecosystems are, classified to the IUCN
    Global Ecosystem Typology and harmonised from existing national maps and
    new satellite-trained maps; in beta, with a public API and a full global
    release expected by early 2027.
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
  note: >-
    A public API serves area statistics, point lookups and map tiles, and
    accepts suggested corrections; no bulk download is listed. The API
    documentation carries a CC BY 4.0 label, but the terms of use name no
    licence and the FAQ answers did not load, so reuse and commercial terms
    were not confirmed for this entry.
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
The Global Ecosystems Atlas is a shared map of where the world's ecosystems are. The Group on Earth Observations (GEO) convenes the Atlas with the Secretariat of the Convention on Biological Diversity and the International Union for Conservation of Nature (IUCN), and the GEO Secretariat hosts the core team. The site calls the Atlas a digital public good and says the Atlas will be the first harmonised open resource on the extent, change, condition and risk of ecosystems. Funders named on the about page are Norad, Fondation Hoffmann, the European Commission, the UK Department for Environment, Food and Rural Affairs and the UN Environment Programme.

Every map uses the IUCN Global Ecosystem Typology, which sorts ecosystems into 10 realms, 25 biomes and, at the third level, 110 ecosystem functional groups such as abyssal plains and deepwater biogenic beds. Esri runs a cloud pipeline that harmonises existing national and regional maps with new ones into a single synthesis map. The new maps come from models trained on satellite data: Google contributes [AlphaEarth Foundations](/engines/alphaearth-prithvi/) embeddings, and the Allen Institute for AI contributes geospatial models and its OlmoEarth tools. The Global Ecology Lab at James Cook University labels EcoTrain, a set of more than 90,000 sample points used for training and validation, and leads quality assurance. The European Space Agency supplies Earth observation inputs and national maps, and helps translate European classifications into the typology.

The current release is a beta. On 16 October 2026 the global overview counted 7 of 10 realms, 18 of 25 biomes and 85 of 110 functional groups as mapped, from source data dated 2011 to 2026, and the site expects a full global release by early 2027. The methods are described in a technical paper posted to EcoEvoRxiv, announced on the site on 6 August 2026.

Maps can be explored in a web viewer. The public API (version 1.0.0, described in OpenAPI 3.1) returns the typology, area statistics for countries and custom areas, what is mapped at a given longitude and latitude, and map tiles, and takes suggested corrections. Esri's partner description says data products are also shared through ArcGIS Living Atlas. The Atlas maps ecosystem types; [Global Safety Net v3](/data-sources/global-safety-net-v3-gsn3/) maps places important for biodiversity, and the two answer different questions.

Parties to the [Kunming-Montreal Global Biodiversity Framework](/mandates/global-biodiversity-framework/) are expected to report on ecosystems for the first time, through headline indicator A.2, the extent of natural ecosystems. An April 2026 article on the site found that fewer than a third of Parties reported on A.2 in their seventh national reports. A quick first test is the API's point lookup at `/api/v1/point/{lon}/{lat}`, which returns what the Atlas has mapped at a coordinate.
