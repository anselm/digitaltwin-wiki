---
about:
  label: OpenStreetMap (OSM)
  description: >-
    Common spatial substrate for city tooling, semantic joins and
    reconstruction.
  tags:
    - geospatial
    - urban
    - transport
    - feature
    - local
    - global
datasource:
  coverage: 'feature, local, global'
provenance:
  origin: import
  sources:
    - title: New dataset connects OpenStreetMap to Wikimedia data
      url: 'https://enterprise.wikimedia.com/blog/geospatial-wikidata-dataset/'
    - title: Moved - a Hugging Face Space by mehmetkeremturkcan
      url: 'https://huggingface.co/spaces/mehmetkeremturkcan/boundless-nyc'
    - title: >-
        GitHub - mkturkcan/valdrada: Valdrada is a real-time digital twin of New
        York City built from public data. · GitHub
      url: 'https://github.com/mkturkcan/boundless-nyc'
    - title: mehmetkeremturkcan/valdrada · Datasets at Hugging Face
      url: 'https://huggingface.co/datasets/mehmetkeremturkcan/boundless-nyc'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT067
  kind: enabling_data
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P010
    - P032
    - P077
    - P085
  posters:
    - Said Turksever
    - Michal Migurski
    - B Venkateswara Raja (BVR)
    - Mehmet Kerem Turkcan
domains:
  - places
  - mobility
---
**Caveats.** Coverage, height fields and update quality vary. OSM data alone are neither zoning law nor live traffic.

**Maturity, as the catalogue judged it.** adjacent component/workflow/method; assess its own implementation and terms

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in posts by Said Turksever, Michal Migurski, B Venkateswara Raja (BVR), Mehmet Kerem Turkcan.
