---
about:
  label: OSRM (Open Source Routing Machine)
  description: >-
    Open-source C++ routing engine that finds fastest routes, travel-time
    tables and map-matched GPS traces on road networks built from
    OpenStreetMap, for car, bicycle and walking.
  aliases:
    - OSRM
    - Open Source Routing Machine
    - Project OSRM
  tags:
    - routing
    - travel time
    - OpenStreetMap
    - map matching
    - C++
    - open source
tool:
  form: open-source routing engine
  group: Transport and crowds
  homepage: 'https://project-osrm.org/'
  licence: BSD-2-Clause
  cost: free
domains:
  - mobility
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: BSD-2-Clause
  note: >-
    Free public servers exist (the project's demo server and FOSSGIS's
    routing.openstreetmap.de), each with a usage policy that rules out heavy
    use; heavier work runs its own instance.
relations:
  - predicate: built_on
    target: data-sources/openstreetmap-osm
provenance:
  origin: agent
  sources:
    - title: 'Project OSRM'
      url: 'https://project-osrm.org/'
    - title: 'Project-OSRM/osrm-backend (README)'
      url: 'https://github.com/Project-OSRM/osrm-backend'
    - title: 'Releases, Project-OSRM/osrm-backend'
      url: 'https://github.com/Project-OSRM/osrm-backend/releases'
    - title: 'About routing.openstreetmap.de'
      url: 'https://routing.openstreetmap.de/about.html'
    - title: 'Nutzungsbedingungen OSM-Server des FOSSGIS e.V. (with English version)'
      url: 'https://www.fossgis.de/arbeitsgruppen/osm-server/nutzungsbedingungen/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
OSRM, the Open Source Routing Machine, is a routing engine written in C++ that finds shortest paths in road networks built from [OpenStreetMap](/data-sources/openstreetmap-osm/) data.[^1,2] Profiles for car, bicycle and walking come with it and can be customised.[^1] Routes across a continent-sized network take milliseconds, by the project's account.[^1] It is free and open source under the two-clause BSD licence and is maintained by its community.[^1,2] The paper to cite is Luxen and Vetter, "Real-time routing with OpenStreetMap data", from the 2011 ACM SIGSPATIAL conference.[^2] Version 26.10.0 was released on 1 October 2026.[^3]

Six services are reached through an HTTP API, a C++ library, and Node.js and Python bindings.[^2] Nearest snaps a point to the street network, route finds the fastest route between points, and table gives travel times or distances between every pair of a set of points.[^2] Match fits a noisy GPS trace to the roads, trip solves the travelling salesman problem with a greedy heuristic, and tile serves vector tiles carrying routing data.[^2] To run your own, you download an OpenStreetMap extract, for example from Geofabrik, prepare it with a profile and serve it with osrm-routed; Docker images are provided.[^2] Preparation can be slow: a 550.7 MB extract of Mexico took about 30 minutes to extract.[^2]

Two kinds of public server are available for light use. The project's demo server has its own usage policy.[^2] FOSSGIS e.V. runs routing.openstreetmap.de on OSRM v5.27.1, with worldwide car, bike and foot routing on its own profiles.[^4] Its data is refreshed roughly every two days.[^4] Its usage policy asks for the OpenStreetMap attribution and a link to "fix the map", a user agent that identifies the application and a referrer where possible, no more than one request per second, and no scraping or heavy use.[^4,5] Commercial use is allowed only where the service is not a substantial part of an online offering, high-traffic websites are generally not permitted, each service runs on a single server with no guarantee of availability, and permission can be revoked at any time.[^5] The policy points those who need more to the guide for installing OSRM themselves.[^5]

For a model of a place, the table service gives travel times by road, bike or on foot between, say, every home in a district and its nearest clinics or schools, and match places recorded GPS traces on the streets they followed.[^2]
