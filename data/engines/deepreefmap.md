---
about:
  label: DeepReefMap
  description: >-
    Reconstructs and semantically maps reef video. Sauder reports updates with
    CoralscapesV2 and newer reconstruction backends.
  tags:
    - coral
    - biodiversity
    - ocean
    - reef
tool:
  homepage: 'https://github.com/eceo-epfl/deepreefmap'
  form: enabling reconstruction
provenance:
  origin: import
  sources:
    - title: 'DeepReefMap: primary page read'
      url: 'https://github.com/eceo-epfl/deepreefmap'
    - title: 'Link in the LinkedIn post (short link, unresolved)'
      url: 'https://lnkd.in/e5R5-hsn)'
    - title: 'Link in the LinkedIn post (short link, unresolved)'
      url: 'https://lnkd.in/eb9JHRwA)!'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT040
  kind: enabling_reconstruction
  family: enabling_technology_and_adjacent_work
  priority: high
  verified: true
  posts:
    - P107
  posters:
    - Jonathan Sauder
domains:
  - ecology
  - water
relations:
  - predicate: needs
    target: data-sources/coralscapes-coralscapesv2
    note: uses dataset (source_claim; exact implementation not independently tested)
  - predicate: built_on
    target: engines/vggt
    note: >-
      supports backend (source_claim; exact implementation not independently
      tested)
  - predicate: built_on
    target: engines/lingbot-map
    note: >-
      supports backend (source_claim; exact implementation not independently
      tested)
---
**Caveats.** Apache-licensed main repository does not make every dependency or checkpoint unrestricted. Mapping and cover estimates are not a validated forecast of reef health.

**Maturity, as the catalogue judged it.** adjacent component/workflow/method; assess its own implementation and terms

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by Jonathan Sauder.
