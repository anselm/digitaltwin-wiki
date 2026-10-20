---
about:
  depiction: data-sources/orcapelago.jpg
  label: Orcapelago
  description: >-
    Web map of orca and other whale sightings in the Salish Sea, placed on the
    map from the narrative reports in Orca Network newsletters.
  tags:
    - orca
    - whales
    - sightings
    - salish sea
    - map
datasource:
  coverage: Salish Sea
  resolution: one point per reported sighting, with the original location text
  cadence: follows Orca Network newsletters
  access: public web map; GeoJSON from the site's own API
  format: GeoJSON
  homepage: 'https://orcapelago.brightrain.com/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: 'Orcapelago: Salish Sea Whale Sightings'
      url: 'https://orcapelago.brightrain.com/'
    - title: Orcapelago sightings API (GeoJSON, untitled)
      url: 'https://orcapelago.brightrain.com/api/sightings'
    - title: 'Bright Rain Solutions | Custom GIS and Web Mapping Development, Fort Collins CO'
      url: 'https://brightrain.com/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT056
  kind: data_application
  family: observations_data_and_reconstruction
  priority: supporting
  verified: false
  posts:
    - P104
  posters:
    - David Puckett
domains:
  - ecology
---
Orcapelago is a map of whale sightings in the Salish Sea as reported by the Orca Network. It runs on the domain of Bright Rain Solutions, a GIS and web-mapping firm in Fort Collins, Colorado, founded by David Puckett; the site itself does not name its author. The map shows the sightings from the latest Orca Network newsletter by default and can be filtered by date range and species.

Each sighting record keeps the newsletter it came from, the date and time, species, group or pod, individual identifiers, count, direction, behaviours and how it was detected. Acoustic detections are drawn at the hydrophone rather than at the whales. The original location text is stored alongside the derived coordinates, with a field recording the geocoding method and a flag marking records that still need review.

The site is public and needs no account. Its sightings endpoint returns GeoJSON. No licence or terms are stated.

Live; records in the feed are dated October 2026.
