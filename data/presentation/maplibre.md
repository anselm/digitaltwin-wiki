---
about:
  depiction: presentation/maplibre.jpg
  label: MapLibre
  description: >-
    Open-source map libraries from the MapLibre organization: GL JS for
    GPU-accelerated vector-tile maps in a web page, Native for mobile, desktop
    and embedded apps, plus a style specification, a tile format and the
    Martin tile server.
  tags:
    - maps
    - web
    - vector tiles
    - open source
    - javascript
    - visualization
tool:
  form: open-source libraries and specifications
  group: 3D cities and mapping
  homepage: 'https://maplibre.org/'
  licence: BSD-3-Clause
  cost: free
open:
  source: open
  data: unknown
  api: yes
  participation: open
  licence: BSD-3-Clause
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: MapLibre
      url: 'https://maplibre.org/'
    - title: 'GitHub - maplibre/maplibre-gl-js'
      url: 'https://github.com/maplibre/maplibre-gl-js'
    - title: 'maplibre-gl-js LICENSE.txt'
      url: 'https://raw.githubusercontent.com/maplibre/maplibre-gl-js/main/LICENSE.txt'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
MapLibre GL JS is a TypeScript library that publishes maps on a website, drawing vector tiles (map data sent as shapes, not pictures) on the graphics card. MapLibre Native is a C++ library for maps in mobile and desktop applications, embedded devices and cars. Native draws through OpenGL, Metal or Vulkan and has Android and iOS bindings.

The style specification is a JSON document that says what data to draw, in what order and how. Maputnik is a style editor. A separate tile specification defines a next-generation vector tile format. Martin is a tile server written in Rust. It generates vector tiles on the fly from PostGIS, or serves PMTiles and MBTiles files. PostGIS is the spatial extension to the PostgreSQL database.

MapLibre GL JS is under a three-clause BSD licence held by the MapLibre contributors. For 2D and 2.5D maps it is the common open base layer, and deck.gl can draw data layers on top.
