---
about:
  label: Delft-FEWS Flood Hub integration
  description: >-
    Deltares integration brings Google forecasts into forecasters' existing
    operational environment. CHMI is credited with the prototype.
  tags:
    - water
    - flood
    - disaster
    - river
    - basin
tool:
  homepage: 'https://oss.deltares.nl/web/delft-fews/'
  form: operational integration
provenance:
  origin: import
  sources:
    - title: 'Delft-FEWS Flood Hub integration: primary search result'
      url: 'https://oss.deltares.nl/web/delft-fews/'
    - title: >-
        Delft-FEWS now supports direct import of Google FloodHub forecasts -
        Delft-FEWS - Deltares Community Portal
      url: >-
        https://oss.deltares.nl/web/delft-fews/-/delft-fews-now-supports-direct-import-of-google-floodhub-forecasts
    - title: Flood Forecasting
      url: 'https://sites.research.google/gr/floodforecasting/'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT019
  kind: operational_integration
  family: enabling_technology_and_adjacent_work
  priority: high
  verified: true
  posts:
    - P025
  posters:
    - Juliet Rothenberg
domains:
  - water
  - climate
relations:
  - predicate: needs
    target: engines/google-flood-hub
    note: >-
      imports forecasts from (source_claim; exact implementation not
      independently tested)
---
**Caveats.** The integration adds access to forecasts, not automatic validation or improvement of all local flood models. The stated version is a source claim.

**Maturity, as the catalogue judged it.** operational workflow integration reported

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by Juliet Rothenberg.
