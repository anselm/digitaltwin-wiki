---
about:
  label: Wikimedia Enterprise–OpenStreetMap joined dataset
  description: >-
    Michal Migurski describes a static global dataset joining Wikimedia and
    OpenStreetMap concepts on Hugging Face and Kaggle.
  tags:
    - geospatial
    - semantic interoperability
    - feature
    - global
datasource:
  coverage: 'feature, global'
  homepage: 'https://enterprise.wikimedia.com/blog/geospatial-wikidata-dataset/'
provenance:
  origin: import
  sources:
    - title: 'Wikimedia Enterprise–OpenStreetMap joined dataset: primary search result'
      url: 'https://enterprise.wikimedia.com/blog/geospatial-wikidata-dataset/'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
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
**Caveats.** Static semantic/data infrastructure; joining entities does not guarantee complete, correct or license-compatible downstream models.

**Maturity, as the catalogue judged it.** adjacent component/workflow/method; assess its own implementation and terms

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by Michal Migurski.
