---
about:
  label: Bay Layers
  description: >-
    A layered portrait of San Francisco Bay that explains a digital twin as four
    shared geographic layers: earth and seabed, natural forces, living systems
    and the built world.
  depiction: poster.jpg
  pinned: 5
domains:
  - places
  - water
  - ecology
twin:
  place: San Francisco Bay
  scale: Bay Area
  operational: false
  homepage: 'https://anselm.github.io/bay-area-twin/'
provenance:
  origin: human
  sources:
    - title: anselm/bay-area-twin on GitHub
      url: 'https://github.com/anselm/bay-area-twin'
    - title: Source manifest for the scene
      url: 'https://anselm.github.io/bay-area-twin/assets/sources.json'
  created: 2026-10-17T00:00:00.000Z
  status: proposed
---

Bay Layers is an interactive Three.js scene that unfolds San Francisco Bay
into four layers on shared geography: earth and seabed, natural forces,
living systems and the built world. Drag to orbit, pick a layer to lift it
out of the stack, scrub the day through night. It is the backdrop of this
wiki's home page.

It is an explanation of what a twin is made of, not an operational twin.
The terrain is a real NOAA elevation and bathymetry grid, exaggerated
vertically. Buildings are footprint extrusions sampled from San Francisco
municipal records and OpenStreetMap. Streets, street trees and Marin
vegetation come from public records. Wind, currents, traffic, animals and
the day and night cycle are illustrative, not observations. The scene's own
"Behind the layers" panel lists every source and says which elements are
mapped and which are drawn.

Data credits: NOAA, the Marin Fine Scale Vegetation Map, San Francisco
municipal open data, EPA WATERS, and © OpenStreetMap contributors (ODbL).
Three.js is vendored under its MIT licence.
