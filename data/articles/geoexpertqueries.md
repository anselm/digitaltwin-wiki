---
about:
  label: GeoExpertQueries
  description: >-
    One of the named benchmarks accompanying Google geospatial reasoning
    research.
  tags:
    - geospatial
    - ai evaluation
    - multiscale
article: {}
provenance:
  origin: import
  sources:
    - title: 'GeoExpertQueries: primary search result'
      url: 'https://sites.research.google/gr/geospatial-reasoning/'
    - title: 'Link in the LinkedIn post (short link, unresolved)'
      url: 'https://goo.gle/4s13F25'
    - title: 'Link in the LinkedIn post (short link, unresolved)'
      url: 'https://lnkd.in/gxt9EfqB'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT013
  kind: benchmark
  family: research_and_evaluation
  priority: supporting
  verified: true
  posts:
    - P003
  posters:
    - Yossi Matias
domains:
  - places
relations:
  - predicate: about
    target: engines/google-earth-ai-geospatial-reasoning-agent
    note: evaluates (source_claim; exact implementation not independently tested)
---
**Caveats.** Benchmark coverage does not establish reliability on untested places, populations or decisions.

**Maturity, as the catalogue judged it.** adjacent component/workflow/method; assess its own implementation and terms

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by Yossi Matias.
