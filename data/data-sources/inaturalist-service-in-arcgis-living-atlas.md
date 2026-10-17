---
about:
  label: iNaturalist service in ArcGIS Living Atlas
  description: >-
    Galen Oettel points to an Esri service that exposes observations for GIS
    analysis without manual download/conversion.
  tags:
    - biodiversity
    - gis
    - observation
    - global
datasource:
  coverage: 'observation, global'
provenance:
  origin: import
  sources:
    - title: 'Link in the LinkedIn post (short link, unresolved)'
      url: 'https://lnkd.in/dmKAawrG'
  created: '2026-10-17'
  reviewed_by: >-
    OpenAI catalogue of Anselm's LinkedIn posts, 2026-10-17; not yet rechecked
    by a person
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT058
  kind: data_integration
  family: observations_data_and_reconstruction
  priority: supporting
  verified: false
  posts:
    - P133
  posters:
    - Galen Oettel
domains:
  - ecology
  - places
relations:
  - predicate: needs
    target: data-sources/inaturalist
    note: >-
      integrates data from (source_claim; exact implementation not independently
      tested)
---
**Caveats.** Service access and underlying record rights are separate; an integration is not a new ecological model.

**Maturity, as the catalogue judged it.** adjacent component/workflow/method; assess its own implementation and terms

**Twin status.** adjacent; no functional twin inferred

Seen on LinkedIn in a post by Galen Oettel.
