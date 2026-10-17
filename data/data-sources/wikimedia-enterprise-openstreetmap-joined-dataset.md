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
A dataset published by Wikimedia Enterprise in October 2026 that links map features to encyclopaedic records. A central links table holds about 24 million links, each tying a Wikidata item to an OpenStreetMap element, a Wikipedia article or a Wikivoyage article, with a column saying how the link was established. Around it sit the OpenStreetMap elements themselves with tags and geometry, the Wikidata items and their locations, 1.5 million geolocated English Wikipedia articles and 31,000 Wikivoyage articles. Michal Migurski, an OpenStreetMap contributor, built it.

It saves twin builders the join they would otherwise do by hand: asking what a place is, what Wikipedia says about it and where its geometry lies in one query. Every table carries the Wikidata identifier, so any two can be joined on it. The files are Parquet and GeoParquet, meant for DuckDB, pandas, Polars or Spark; the whole set is about 59 GB, of which the OpenStreetMap table is 36 GB.

Licensing follows the sources: the links and Wikidata tables are CC0, the OpenStreetMap table is ODbL, and the Wikipedia and Wikivoyage tables are CC BY-SA 4.0. The snapshot reflects the sources as of 15 September 2026; no refresh schedule is given, and anyone wanting newer data is told to re-extract from the source snapshots.
