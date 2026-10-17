---
about:
  label: Hydrata
  description: >-
    David Kennewell describes browser viewing of ANUGA depth, velocity, hazard
    and other output fields.
  tags:
    - water
    - flood
    - site
    - basin
tool:
  homepage: 'https://hydrata.com/'
  form: scenario platform
provenance:
  origin: import
  sources:
    - title: 'Hydrata: primary search result'
      url: 'https://hydrata.com/'
    - title: 'Hydrata: primary search result'
      url: 'https://github.com/Hydrata/run_anuga'
    - title: 'Hydrata: primary search result'
      url: 'https://hydrata.com/docs/validation/'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT027
  kind: scenario_platform
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P117
  posters:
    - David Kennewell
domains:
  - water
relations:
  - predicate: built_on
    target: engines/anuga
    note: uses solver (source_claim; exact implementation not independently tested)
---
**Caveats.** Viewer accessibility is distinct from free model execution, open code and unrestricted data licensing.

**Maturity, as the catalogue judged it.** implemented scenario product described; use-specific validity unestablished

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by David Kennewell.
