---
about:
  label: Overture Maps
  description: >-
    Free, open world map data from the Overture Maps Foundation, released
    monthly in six themes (addresses, base, buildings, divisions, places,
    transportation) with stable IDs for joining other data.
  aliases:
    - Overture Maps Foundation
    - Overture
    - GERS
  tags:
    - map
    - buildings
    - places
    - roads
    - addresses
    - GeoParquet
    - open data
    - global
datasource:
  coverage: global
  resolution: individual map features (building footprints, places, road segments, address points, boundaries)
  cadence: monthly releases; only the last two months stay in the public buckets
  access: free and without an account; files read in place from Amazon S3 and Microsoft Azure, or through the Explorer, Python client, DuckDB and partner mirrors
  format: GeoParquet; PMTiles vector tiles; STAC catalogue; GeoJSON from the Explorer
  homepage: 'https://overturemaps.org/'
open:
  source: open
  data: open
  api: 'no'
  participation: partly
  licence: by theme; base, buildings, divisions and transportation ODbL (OpenStreetMap-derived); places mostly CDLA Permissive 2.0; addresses under the open licences of each source
  note: >-
    There is no query API; the data are files in cloud storage, indexed by a
    STAC catalogue. Organisations take part as members.
domains:
  - places
relations:
  - predicate: needs
    target: data-sources/openstreetmap-osm
    note: four of its six themes are built in part from OpenStreetMap and carry the ODbL
  - predicate: answers
    target: questions/housing-and-land-use
    note: building footprints, places, land use and addresses for a city or region
  - predicate: answers
    target: questions/after-a-closure
    note: the transportation theme's road and path segments and the connectors that join them
provenance:
  origin: agent
  sources:
    - title: Home - Overture Maps Foundation
      url: 'https://overturemaps.org/'
    - title: Who We Are - Overture Maps Foundation
      url: 'https://overturemaps.org/about/who-we-are/'
    - title: FAQs - Overture Maps Foundation
      url: 'https://overturemaps.org/about/faq/'
    - title: Quickstart | Overture Documentation
      url: 'https://docs.overturemaps.org/getting-data/'
    - title: Accessing the Overture Catalog | Overture Documentation
      url: 'https://docs.overturemaps.org/getting-data/cloud-sources/'
    - title: Attribution and Licensing | Overture Documentation
      url: 'https://docs.overturemaps.org/attribution/'
    - title: Releases | Overture Documentation
      url: 'https://docs.overturemaps.org/release-calendar/'
    - title: What is GERS? | Overture Documentation
      url: 'https://docs.overturemaps.org/gers/'
    - title: Overture Documentation (home)
      url: 'https://docs.overturemaps.org/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Overture Maps Foundation publishes open map data of the whole world, built by combining data from its member companies, government and other authoritative sources, and open data communities.[^1] It launched in December 2022.[^2] Membership is open to companies, non-profits and government agencies, and engineers from them lead its two working groups, on map data and on the schema; its steering committee includes AWS, TomTom and Microsoft.[^2,3] The foundation is a Joint Development Foundation project, an affiliate of the Linux Foundation.[^1]

The data come in six themes.[^5] Buildings are footprints and building parts, over two billion of them by the foundation's count.[^3,5] Places are points of interest, and addresses are address points.[^3,5] Transportation is road and path segments and the connectors that join them.[^3,5] Divisions are administrative areas and boundaries from countries down to neighbourhoods.[^3] The base theme holds infrastructure, land, land cover, land use, water and bathymetry.[^5] The FAQ says the foundation uses OpenStreetMap along with over 200 other open data sources.[^3] Buildings, for example, combine OpenStreetMap with Esri Community Maps, Microsoft's Global ML Building Footprints, Google Open Buildings and others, and places come from Meta, Microsoft, Foursquare, AllThePlaces and a number of other companies.[^6]

Each feature that Overture matches across sources gets an ID in its Global Entity Reference System (GERS), a random identifier with a commitment to keep it stable from release to release.[^8] Someone who matches their own data to Overture features once can then join on the ID instead of redoing a spatial match after every release.[^8] A registry records when each ID was first seen, last seen and last changed, and a changelog reports what changed per feature between releases.[^8] Buildings, divisions, places and transportation segments and connectors carry GERS IDs; base-theme features and building parts do not.[^8]

Data are released monthly, and have been since October 2023; the release of 21 October 2026 was current when read.[^7] Major schema changes happen only in March, June, September and December.[^7] Each release is a set of GeoParquet files in Amazon S3 and Microsoft Azure, read in place with no server or API in between, plus PMTiles vector tiles and a STAC catalogue that names the latest release.[^5] The Explorer website shows the data with no installation or account and downloads what is on screen as GeoJSON; the Python client and DuckDB read from the cloud and transfer only the data inside a chosen area.[^4,5] Mirrors exist on BigQuery, Databricks, Fused, Snowflake and Wherobots, and the data are in Esri's ArcGIS Living Atlas.[^9] To comply with data protection rules, including the GDPR right to be forgotten, releases stay in the public buckets for at most 60 days.[^7]

Licences differ by theme. Base, buildings, divisions and transportation carry the Open Database License (ODbL) because they are derived from OpenStreetMap.[^3,6] Most places data use the Community Data License Agreement Permissive 2.0.[^3,6] Addresses come from national and regional sources under open licences, some of which ask for their own attribution.[^6] The suggested citation is "Overture Maps Foundation, overturemaps.org", with the date accessed.[^6]

For someone modelling a city or region, Overture gives building footprints, places, roads, land use and boundaries in one schema for anywhere in the world, as files that can be cut to a study area with a single query. The stable IDs let a model's own records, such as surveyed building heights or business data, stay attached to the same buildings and roads across later releases.
