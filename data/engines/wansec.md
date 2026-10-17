---
about:
  label: WANSEC
  description: >-
    Wave Attenuation: Natural Solutions with Elkhorn Coral uses reef CFD
    scenarios to compare depth and coral density. Modeling credited to Benjamin
    Norris with David Gutiérrez-Barceló.
  tags:
    - coral
    - coastal
    - restoration
    - reef
    - shoreline
tool:
  homepage: >-
    https://www.mona.uwi.edu/mori/research-spotlight/wave-attenuation-natural-solutions-elkhorn-coral-wansec
  form: simulation case
provenance:
  origin: import
  sources:
    - title: 'WANSEC: primary search result'
      url: >-
        https://www.mona.uwi.edu/mori/research-spotlight/wave-attenuation-natural-solutions-elkhorn-coral-wansec
    - title: 'WANSEC: primary search result'
      url: >-
        https://www.nationalparksantigua.com/national-parks-authority-announces-completion-of-the-wansec-project/
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT036
  kind: simulation_case
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P059
  posters:
    - Michael Beck
domains:
  - ecology
  - water
relations:
  - predicate: built_on
    target: engines/openfoam
    note: uses solver (source_claim; exact implementation not independently tested)
  - predicate: built_on
    target: engines/paraview
    note: >-
      visualizes with (source_claim; exact implementation not independently
      tested)
---
**Caveats.** A restoration research program with a simulation component, not evidence of an operational live reef twin or universal density prescription.

**Maturity, as the catalogue judged it.** case simulation/reconstruction; continuous operational twin not established

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by Michael Beck.
