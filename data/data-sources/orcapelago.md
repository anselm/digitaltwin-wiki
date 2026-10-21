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
The map runs on the domain of Bright Rain Solutions. David Puckett founded the firm, which does GIS and web mapping in Fort Collins, Colorado. The site itself does not name its author. By default the map shows the sightings from the latest Orca Network newsletter, and it can be filtered by date range and species.

Each sighting record names the newsletter it came from. It also holds the date and time, species, group or pod, individual identifiers, count, direction, behaviours and detection method. Acoustic detections are drawn at the hydrophone (an underwater microphone), not at the whales. The original location text is kept beside the derived coordinates, with a field for the geocoding method (how the text was matched to a point) and a flag on records that still need review.

The map is public and needs no account. Its sightings endpoint returns GeoJSON, a common format for map data. No licence or terms are stated.
