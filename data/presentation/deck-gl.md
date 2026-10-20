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
deck.gl is a GPU-powered framework for visual exploratory data analysis of large datasets. Visualisations are built by composing layers from a catalogue of existing ones, and new layers can be packaged and shared. It emulates 64-bit floating point on the GPU so that large coordinate datasets render accurately, and it renders through WebGL2 or WebGPU under heavy data loads, from plain JavaScript or a React interface.

It works standalone or over a base map from Google Maps, Mapbox, ArcGIS or MapLibre, and where the base map allows it interleaves with 3D map layers. The code lives in the visgl organisation on GitHub under the MIT licence; a Python binding is among the repository's topics.

For a twin it is the usual way to put millions of points, trips, hexagons or arcs on a map in a browser: the output of a transport or flood model, drawn over an open base map.
