---
about:
  label: forge3d
  description: >-
    Python package from the GitHub account milos-agathon that renders 3D
    terrain and thematic maps from elevation, raster and vector data, with a
    Rust and WebGPU renderer underneath; makes still images, vector files and
    frame sequences without a GUI.
  tags:
    - terrain
    - 3d map
    - python
    - rendering
    - cartography
    - path tracing
tool:
  form: open-source Python package with paid features
  group: 3D cities and mapping
  homepage: 'https://github.com/milos-agathon/forge3d'
  licence: Apache-2.0 OR MIT (core); commercial key for Pro features
  cost: free core; Pro features need a commercial licence
domains:
  - places
open:
  source: open
  data: unknown
  api: yes
  participation: open
  licence: Apache-2.0 OR MIT
  note: Composing map plates, exporting vectors and importing buildings are paid Pro features unlocked by a commercial licence key.
provenance:
  origin: agent
  sources:
    - title: 'GitHub - milos-agathon/forge3d'
      url: 'https://github.com/milos-agathon/forge3d'
    - title: 'Quickstart — forge3d Documentation'
      url: 'https://milos-agathon.github.io/forge3d/start/quickstart.html'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; the pages do not give the maker''s name beyond the GitHub account'
  status: draft
---
forge3d is a Python package for rendering 3D terrain and maps, published from the GitHub account milos-agathon. The renderer is written in Rust on wgpu/WebGPU and shipped as Python wheels. It takes a digital elevation model as a GeoTIFF or numpy array, drapes raster and vector layers over it, and renders with path tracing, physically based materials, water, and shadows from terrain and clouds. It can also open a window to orbit the scene, or run headless for batch work.

The repository shows it used for thematic maps of places: LOD2 buildings over terrain for Lyon, population density over shaded relief for Egypt, land cover for Iberia, rivers and lakes for Germany, and WorldPop population cells extruded for Türkiye. A population or land-cover raster can be drawn as a raised shaded surface, by class colour, or as two variables in a bivariate colour matrix. Because scenes are driven from Python, a time series is a loop over frames; one example moves smoke from HRRR forecast fields across California through the summer 2025 fire season. Legends, scale bars, north arrows and labels are drawn in the same engine.

It installs with pip install forge3d, with extras for notebook widgets and sample datasets. Inputs include Cloud Optimized GeoTIFFs, LAZ/COPC/EPT point clouds, 3D Tiles, GeoJSON and CityJSON; outputs are PNG and 16-bit PNG, SVG and PDF, EXR with AOVs, and saveable scene bundles. The core is open source, Apache-2.0 or MIT at the user's choice. Three parts are paid: composing a finished map plate, exporting vectors, and importing buildings; a commercial licence key unlocks them.

The documentation carries a 2025-2026 copyright. In this wiki's stack it is a presentation tool: it sits beside browser viewers such as /presentation/cesiumjs/ but produces print-resolution images rather than an interactive web map, and it reads /ontologies/cityjson/ for buildings.
