---
about:
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
The MapLibre Organization is an umbrella for open-source mapping libraries. MapLibre GL JS is a TypeScript library for publishing maps on a website, with GPU-accelerated rendering of vector tiles. MapLibre Native is a C++ library for maps inside mobile and desktop applications, embedded devices and cars, with GPU acceleration through OpenGL, Metal or Vulkan, and Android and iOS bindings.

Around the libraries sit a style specification, a JSON document that says what data to draw, in what order and how, with Maputnik as a style editor; a tile specification for a next-generation vector tile format; and Martin, a tile server written in Rust that generates vector tiles from PostGIS on the fly or serves PMTiles and MBTiles files.

MapLibre GL JS is licensed under a three-clause BSD licence held by the MapLibre contributors. For a twin that is a 2D or 2.5D map rather than a globe, it is the common open base layer, and deck.gl can draw data layers over it.
