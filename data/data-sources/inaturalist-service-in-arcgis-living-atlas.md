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
    - title: New iNaturalist Service Now Available in ArcGIS Living Atlas
      url: >-
        https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/announcements/new-inaturalist-service-now-available-in-arcgis-living-atlas?adumkts=social&utm_source=social&aduc=social&adum=external&adusf=linkedin&sf_id=7015x000000aYlKAAU&aduca=mi_employee_advocacy_hootsuite_amplify_soc_ex&adut=c14679d6-42ba-4fec-8b6b-74a4ed5acdcd
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
