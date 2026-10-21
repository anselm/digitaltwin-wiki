---
about:
  label: deck.gl
  description: >-
    GPU-powered framework for visual exploration of large datasets in the
    browser, built by composing layers; draws over base maps from MapLibre,
    Mapbox, Google Maps and ArcGIS.
  tags:
    - visualization
    - web
    - webgl
    - large datasets
    - open source
    - javascript
tool:
  form: open-source JavaScript framework
  group: 3D cities and mapping
  homepage: 'https://deck.gl/'
  licence: MIT
  cost: free
open:
  source: open
  data: unknown
  api: yes
  participation: open
  licence: MIT
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: 'Home | deck.gl'
      url: 'https://deck.gl/'
    - title: 'GitHub - visgl/deck.gl'
      url: 'https://github.com/visgl/deck.gl'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Visualisations are assembled from a catalogue of existing layers, and new layers can be packaged and shared. To draw large coordinate datasets accurately, deck.gl emulates 64-bit floating point on the GPU. Under heavy data loads it renders through WebGL2 or WebGPU, driven from plain JavaScript or a React interface.

deck.gl works standalone or over a base map from Google Maps, Mapbox, ArcGIS or MapLibre. Where the base map allows, it interleaves with 3D map layers. The code is in the visgl organisation on GitHub under the MIT licence, and a Python binding is listed among the repository's topics.

In a browser it can put millions of points, trips, hexagons or arcs on a map: the output of a transport or flood model, say, drawn over an open base map.
