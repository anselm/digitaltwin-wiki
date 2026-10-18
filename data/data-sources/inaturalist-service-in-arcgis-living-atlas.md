---
about:
  label: iNaturalist Species Observations
  description: >-
    Esri feature service in ArcGIS Living Atlas that serves iNaturalist's
    research-grade observations worldwide, refreshed monthly, with hexagon
    summaries at small scales.
  tags:
    - biodiversity
    - gis
    - observations
    - living atlas
    - feature service
datasource:
  coverage: global
  resolution: individual observation points above 1:144k, H3 hexagon summaries below
  cadence: monthly
  access: ArcGIS Living Atlas feature service under the Esri Master License Agreement
  format: ArcGIS feature service
  homepage: 'https://www.arcgis.com/home/item.html?id=996576ae63d4499c924aabea1c3d3768'
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: unknown
  licence: 'Esri Master License Agreement'
provenance:
  origin: agent
  sources:
    - title: iNaturalist Species Observations
      url: 'https://www.arcgis.com/home/item.html?id=996576ae63d4499c924aabea1c3d3768'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT058
  kind: data_integration
  family: observations_data_and_reconstruction
  priority: supporting
  verified: false
  posts:
    - P133
  posters:
    - Galen Oettel
domains:
  - ecology
  - places
relations:
  - predicate: needs
    target: data-sources/inaturalist
    note: >-
      integrates data from (source_claim; exact implementation not independently
      tested)
---
A hosted feature layer published by Esri in ArcGIS Living Atlas. It carries the verifiable and research-grade observations contributed through iNaturalist, each with its photos or audio, the observer's name and the local date and time, so that GIS users can map species records without downloading and converting the archive themselves. Esri credits iNaturalist as the data source.

The layer is built for fast visualisation rather than bulk analysis. Points are only drawn at scales larger than 1:144k; at smaller scales H3 hexagons summarise the twelve predominant taxon groups. Small subsets of around 100,000 observations can be copied out of the service; larger extracts are meant to come from iNaturalist's own site, its AWS S3 open-data extract or the GBIF archive, which is what the service is derived from.

Coverage is worldwide in WGS84, with a time extent from 1768 to the present and a monthly refresh. Use is under the Esri Master License Agreement. Esri's item record gives a publication date of 7 July 2026; an earlier beta layer, "iNaturalist Observations", is marked as retiring.
