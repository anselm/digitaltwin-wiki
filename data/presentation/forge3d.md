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
The renderer is written in Rust on wgpu/WebGPU and shipped as Python wheels. WebGPU is a modern interface to the graphics card. The starting point is a digital elevation model, a grid of ground heights read as a GeoTIFF or numpy array, with raster and vector layers draped over the terrain. Rendering uses path tracing, which simulates light bouncing through a scene, and includes physically based materials, water, and shadows from terrain and clouds. A window can be opened to orbit the scene, or the package can run headless for batch work.

Examples in the repository are thematic maps of places:

- LOD2 buildings (block models with roof shapes) over terrain for Lyon
- population density over shaded relief for Egypt
- land cover for Iberia
- rivers and lakes for Germany
- WorldPop population cells extruded for Türkiye

A population or land-cover raster can be drawn as a raised shaded surface, by class colour, or as two variables in a bivariate colour matrix. Because scenes are driven from Python, a time series is a loop over frames, and one example moves smoke from HRRR forecast fields across California through the summer 2025 fire season. Legends, scale bars, north arrows and labels are drawn in the same engine.

Installation is pip install forge3d, with extras for notebook widgets and sample datasets. Inputs include Cloud Optimized GeoTIFFs, LAZ/COPC/EPT point clouds, 3D Tiles, GeoJSON and CityJSON, and outputs are PNG and 16-bit PNG, SVG and PDF, EXR with AOVs, and saveable scene bundles. The core is open source, Apache-2.0 or MIT at the user's choice, while composing a finished map plate, exporting vectors and importing buildings are paid features unlocked by a commercial licence key.

The output is print-resolution images, where browser viewers such as [CesiumJS](/presentation/cesiumjs/) give an interactive web map. Buildings come in as [CityJSON](/ontologies/cityjson/).
