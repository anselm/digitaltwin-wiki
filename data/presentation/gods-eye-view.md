---
about:
  label: "God's Eye View"
  description: >-
    Open-source browser globe by Bilawal Sidhu and Sameh Khamis that puts live
    public feeds on Google's photorealistic 3D tiles: aircraft, ships,
    satellites, earthquakes, fires, weather, public cameras.
  tags:
    - 3d globe
    - live data
    - web
    - cesium
    - open source
    - voice
tool:
  form: open-source web app, run locally
  group: 3D cities and mapping
  homepage: 'https://github.com/bilawalsidhu/gods-eye-view'
  licence: MIT
  cost: free; some layers need provider API keys, some of them paid
domains:
  - places
open:
  source: open
  data: partly
  api: unknown
  participation: open
  licence: MIT
  note: The code is MIT; each bundled or live dataset keeps its own terms, and the bundled Nepal flood scene is non-commercial.
relations:
  - predicate: built_on
    target: presentation/cesiumjs
  - predicate: needs
    target: data-sources/google-photorealistic-3d-tiles
  - predicate: needs
    target: data-sources/opensky-network
  - predicate: needs
    target: data-sources/aisstream
  - predicate: needs
    target: data-sources/usgs-earthquake-catalog
  - predicate: needs
    target: data-sources/nasa-firms
  - predicate: needs
    target: data-sources/nifc-wfigs
  - predicate: needs
    target: data-sources/nhc-tropical-cyclone-advisories
  - predicate: needs
    target: data-sources/noaa-gfs
  - predicate: needs
    target: data-sources/ecmwf-open-data
  - predicate: needs
    target: data-sources/nasa-gibs
  - predicate: needs
    target: data-sources/openstreetmap-osm
  - predicate: needs
    target: data-sources/mapillary
  - predicate: needs
    target: data-sources/panoramax
  - predicate: needs
    target: data-sources/kartaview
  - predicate: needs
    target: data-sources/overture-maps
  - predicate: needs
    target: data-sources/gdelt
  - predicate: needs
    target: data-sources/open-meteo
  - predicate: needs
    target: ontologies/gtfs
  - predicate: needs
    target: ontologies/gbfs
  - predicate: needs
    target: engines/osrm
provenance:
  origin: agent
  sources:
    - title: "bilawalsidhu/gods-eye-view (README)"
      url: 'https://github.com/bilawalsidhu/gods-eye-view'
  created: '2026-10-21'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the README and the repository licence'
  status: draft
---
God's Eye View grew out of a video series of the same name, earlier called WorldView, in which a 3D globe tracks live aircraft and ships in the look of a military operations room. The code was opened in 2026 under the MIT licence. The maintainers are Bilawal Sidhu and Sameh Khamis at Halfpixel.

It runs in the browser on your own machine and starts without any API keys. The planet is [Google Photorealistic 3D Tiles](/data-sources/google-photorealistic-3d-tiles/) drawn with [CesiumJS](/presentation/cesiumjs/), in plain JavaScript with no framework. Layers include:

- aircraft from [OpenSky](/data-sources/opensky-network/) and ships from [AISStream](/data-sources/aisstream/)
- satellites placed from their published orbital elements
- earthquakes from the [USGS catalogue](/data-sources/usgs-earthquake-catalog/), fires from [FIRMS](/data-sources/nasa-firms/) and [WFIGS](/data-sources/nifc-wfigs/), and [cyclone advisories](/data-sources/nhc-tropical-cyclone-advisories/)
- forecast wind from [GFS](/data-sources/noaa-gfs/) or [ECMWF Open Data](/data-sources/ecmwf-open-data/), radar and cloud, and recent satellite imagery from [GIBS](/data-sources/nasa-gibs/)
- public traffic cameras, and licence-plate reader locations tagged in [OpenStreetMap](/data-sources/openstreetmap-osm/)
- street-level photos from [Mapillary](/data-sources/mapillary/), [Panoramax](/data-sources/panoramax/) and [KartaView](/data-sources/kartaview/)
- live transit vehicles from [GTFS Realtime](/ontologies/gtfs/) feeds, bikeshare stations from [GBFS](/ontologies/gbfs/), and routes from [OSRM](/engines/osrm/)
- road traffic, simulated along real roads from aggregate data

Each layer is its own module, so adding a city's own feed means writing one more. Voice control runs through OpenAI's realtime API, and keys that must stay private go through a small server-side proxy.

Some of the engineering is useful to anyone putting live sensors on a 3D city. Feeds arrive every 15 to 30 seconds, so the globe draws one interval behind real time and moves each object smoothly between known positions. Heights are matched to the 3D tiles so a plane parks on its apron and a camera stands on its street corner instead of floating.

The project draws a line at people. It shows events, vehicles and infrastructure, and the maintainers will not merge face recognition or features that track a named person. Its data may be late or wrong, the README warns, and it must not be used for navigation or emergencies. The maintainers also note that showing the present is cheap, while storing and replaying what happened at any real resolution is where data and compute costs climb. Halfpixel is building a hosted version that opens in a browser with no installation; its site was a waitlist on 30 October 2026.
