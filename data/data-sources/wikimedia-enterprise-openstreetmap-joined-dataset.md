---
about:
  label: Linked OpenStreetMap, Wikidata, Wikipedia and Wikivoyage dataset
  description: >-
    Wikimedia Enterprise's open Parquet dataset joining about 17 million
    OpenStreetMap features to Wikidata items, Wikipedia and Wikivoyage
    articles, built by Michal Migurski.
  tags:
    - openstreetmap
    - wikidata
    - linked data
    - parquet
    - places
  aliases:
    - linked-openstreetmap-wikidata-wikipedia-wikivoyage
    - Geospatial Wikidata Dataset
datasource:
  coverage: global
  resolution: individual OpenStreetMap elements and Wikidata items
  cadence: 'one-off snapshot as of 2026-09-15; no schedule stated'
  access: open download from Hugging Face and Kaggle
  format: Parquet and GeoParquet
  homepage: >-
    https://huggingface.co/datasets/wikimedia/linked-openstreetmap-wikidata-wikipedia-wikivoyage
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'CC0 (links and Wikidata tables); ODbL (OpenStreetMap table); CC BY-SA 4.0 (Wikipedia and Wikivoyage tables)'
provenance:
  origin: agent
  sources:
    - title: wikimedia/linked-openstreetmap-wikidata-wikipedia-wikivoyage · Datasets at Hugging Face
      url: >-
        https://huggingface.co/datasets/wikimedia/linked-openstreetmap-wikidata-wikipedia-wikivoyage
    - title: Geospatial Wikidata Dataset Connects OpenStreetMap and Wikimedia for Reuse
      url: 'https://enterprise.wikimedia.com/blog/geospatial-wikidata-dataset/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT066
  kind: dataset
  family: observations_data_and_reconstruction
  priority: supporting
  verified: true
  posts:
    - P032
  posters:
    - Michal Migurski
domains:
  - places
relations:
  - predicate: needs
    target: data-sources/openstreetmap-osm
    note: >-
      joins data from (source_claim; exact implementation not independently
      tested)
---
Wikimedia Enterprise published it in October 2026. A central links table holds about 24 million links. Each ties a Wikidata item to an OpenStreetMap element or to a Wikipedia or Wikivoyage article, and a column records how the link was established. The other tables hold the OpenStreetMap elements with tags and geometry, the Wikidata items and their locations, 1.5 million geolocated English Wikipedia articles and 31,000 Wikivoyage articles. Michal Migurski, an OpenStreetMap contributor, built the dataset.

It saves a twin builder the join they would otherwise do by hand: what a place is, what Wikipedia says about it and where its geometry lies, in one query. Every table carries the Wikidata identifier as a shared key. The files are Parquet and GeoParquet (column-based file formats for large tables), meant for DuckDB, pandas, Polars or Spark. The whole set is about 59 GB, of which the OpenStreetMap table is 36 GB.

Licensing follows the sources. The links and Wikidata tables are CC0, the OpenStreetMap table is ODbL, and the Wikipedia and Wikivoyage tables are CC BY-SA 4.0. The snapshot reflects the sources as of 15 September 2026. No refresh schedule is given; for newer data, re-extract from the source snapshots.
