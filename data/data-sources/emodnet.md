---
about:
  depiction: data-sources/emodnet.jpg
  depiction_credit: 'Data products from six EMODnet themes: seabed habitats, geology, bathymetry, chemistry, physics and vessel density. Figure 2 of Webb et al. 2025, Marine Policy, CC BY 4.0.'
  label: EMODnet
  description: >-
    The European Union's free marine data service: measurements and maps of
    Europe's seas in seven themes, from seabed depth and habitats to species,
    chemistry and shipping, through one portal.
  aliases:
    - European Marine Observation and Data Network
  tags:
    - ocean
    - Europe
    - bathymetry
    - seabed habitats
    - marine biodiversity
    - open data
datasource:
  coverage: European seas from coast to open ocean, some products global
  resolution: varies by theme and product
  cadence: varies; datasets and products are added regularly
  access: free; map viewer, data products catalogue, ERDDAP server and OGC web services (WMS, WFS, WCS, CSW)
  format: varies by product; NetCDF, PNG and others
  homepage: 'https://emodnet.ec.europa.eu/en'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: open
  licence: EMODnet's own data products CC BY 4.0; assembled source datasets keep their originators' terms
domains:
  - water
  - ecology
relations:
  - predicate: contributes_to
    target: twins/edito
    note: EMODnet data are explored and served through the European Digital Twin of the Ocean
  - predicate: contributes_to
    target: data-sources/gbif
    note: EMODnet Biology's harvested records also flow to GBIF
provenance:
  origin: agent
  sources:
    - title: 'What is EMODnet? | European Marine Observation and Data Network (EMODnet)'
      url: 'https://emodnet.ec.europa.eu/en/about_emodnet'
    - title: 'Terms of Use for EMODnet online services, data and data products'
      url: 'https://emodnet.ec.europa.eu/en/terms-use-emodnet-online-services-data-and-data-products'
    - title: 'Frequently Asked Questions (FAQ) | EMODnet'
      url: 'https://emodnet.ec.europa.eu/en/faq-about-downloading-emodnet-data'
    - title: 'EMODnet web service documentation'
      url: 'https://emodnet.ec.europa.eu/en/emodnet-web-service-documentation'
    - title: 'Biology | European Marine Observation and Data Network (EMODnet)'
      url: 'https://emodnet.ec.europa.eu/en/biology'
    - title: 'Home | European Marine Observation and Data Network (EMODnet) (news of 25 September 2026)'
      url: 'https://emodnet.ec.europa.eu/en'
    - title: 'Realising the potential of interoperable data products to improve the outlook for marine biodiversity: Lessons from the European marine observation and data network (Webb et al. 2025, Marine Policy 173, 106578)'
      url: 'https://doi.org/10.1016/j.marpol.2024.106578'
    - title: 'Digital twins as a tool for ecosystem research (Visser et al. 2026, Trends in Ecology & Evolution)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the sources listed; Webb et al. read from the open copy in the VLIZ repository'
  status: draft
---
EMODnet is the European Union's service for in situ marine data, meaning measurements taken in the water or on the seabed.[^1] The European Commission's Directorate-General for Maritime Affairs and Fisheries manages it and the European Maritime, Fisheries and Aquaculture Fund pays for it.[^1] It was set up in 2009 and works with over 130 partner organisations and stakeholders to gather observations from many sources and harmonise them into Europe-wide data layers.[^1] EMODnet does not take ownership of the source data, but it makes data products of its own from them.[^2]

The data come in seven themes: bathymetry (seabed depth), geology, physics, chemistry, biology, seabed habitats and human activities.[^1] They span coast to open ocean and surface to deep seafloor, and the human-activities theme includes vessel density, offshore platforms and the member states' maritime spatial plans.[^1] Among the products are EUSeaMap, a broad-scale map of seabed habitats, a harmonised digital terrain model of the seabed, and a pan-European marine litter database.[^1] Not every theme covers the whole globe, and a gap in a layer may mean only that no data are openly available there yet.[^2,3]

EMODnet Biology covers where and when marine species occur in Europe's regional seas, with species traits.[^5] The groups run from plankton, seaweeds and seagrasses to bottom-dwelling animals, fish, birds, mammals and reptiles.[^5] Its species names follow the World Register of Marine Species, and it shares its data system with the European Ocean Biodiversity Information System (EurOBIS).[^5] It gives access to metadata for more than 1,500 biological datasets and 50 more data products.[^5] An August 2026 harvest added 32 new and updated datasets and over 576,000 records, which also pass to OBIS, GBIF and EDITO.[^6] A 2025 paper built on EMODnet Biology's products explains why species data products are hard to make: the survey data are sparse and biased in where, when and which species they cover, and the surveys were rarely designed with policy in mind.[^7]

Access is free.[^1,2] Data can be browsed and downloaded in the map viewer, from the data products catalogue, or from an ERDDAP server that cuts out subsets in common file formats.[^3] Most services are also offered as standard Open Geospatial Consortium web services that load straight into GIS software such as QGIS.[^4] EMODnet's own data products are licensed CC BY 4.0, while each source dataset keeps its originator's conditions, which are given in its metadata.[^2]

For anyone modelling a European sea, coast or harbour, EMODnet is often where to find the seabed depth, the seabed habitats, the shipping density and the records of what lives there, as layers that line up with each other. It also feeds the [European Digital Twin of the Ocean](/twins/edito/).[^6] The 2026 paper [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) points to EMODnet Biology and the Webb paper when it says ecosystem data are often in many formats, short of metadata, and not downloadable from a repository.[^8]
