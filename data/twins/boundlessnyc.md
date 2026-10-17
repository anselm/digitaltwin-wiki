---
about:
  label: BoundlessNYC
  description: >-
    Procedural NYC reconstruction joins municipal building and street records
    with simulated traffic and pedestrians, perception outputs and a CARLA-style
    interface. Central Park is an extension of the same project.
  tags:
    - urban
    - transport
    - robotics
    - street
    - city
twin:
  homepage: 'https://github.com/mkturkcan/boundless-nyc'
  operational: 'claimed, unverified'
provenance:
  origin: import
  sources:
    - title: 'BoundlessNYC: primary repository read'
      url: 'https://github.com/mkturkcan/boundless-nyc'
    - title: 'BoundlessNYC: linked from primary'
      url: 'https://mkturkcan.github.io/boundless-nyc/'
    - title: 'BoundlessNYC: linked from primary'
      url: 'https://huggingface.co/datasets/mehmetkeremturkcan/boundless-nyc'
    - title: 'BoundlessNYC: linked from primary'
      url: 'https://huggingface.co/spaces/mehmetkeremturkcan/boundless-nyc'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT006
  kind: implemented_twin_model
  family: twins_and_candidates
  priority: high
  verified: true
  posts:
    - P085
    - P114
  posters:
    - Mehmet Kerem Turkcan
domains:
  - places
  - mobility
  - sensory
relations:
  - predicate: needs
    target: data-sources/openstreetmap-osm
    note: uses data (source_claim; exact implementation not independently tested)
---
**Caveats.** Real-time means rendering/simulation. Live traffic assimilation and validated traffic forecasts are not established; simulated people are not observed individuals.

**Maturity, as the catalogue judged it.** implemented spatial/simulation model; continuous synchronization unestablished

Seen on LinkedIn in a post by Mehmet Kerem Turkcan.
