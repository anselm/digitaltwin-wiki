---
about:
  label: GeoLibre
  description: >-
    Free, open-source GIS from the opengeos project that loads, styles and
    analyses geospatial data in a web browser, as a desktop or
    phone app, or inside a Jupyter notebook, keeping the data on the user's
    own machine.
  tags:
    - gis
    - web
    - maps
    - open source
    - geoprocessing
    - desktop
tool:
  form: open-source application
  group: 3D cities and mapping
  homepage: 'https://geolibre.app/'
  licence: MIT
  cost: free
domains:
  - places
open:
  source: open
  data: unknown
  api: yes
  participation: open
  licence: MIT
  note: 'Plugin API, Python and R packages, and a server API are documented; the GitHub repository takes contributions.'
relations:
  - predicate: built_on
    target: presentation/maplibre
    note: MapLibre GL JS is the default rendering engine
  - predicate: built_on
    target: presentation/deck-gl
  - predicate: built_on
    target: presentation/cesiumjs
    note: CesiumJS is one of four selectable rendering engines
  - predicate: alternative_to
    target: presentation/kepler-gl
    note: the maker's own comparison page sets it beside kepler.gl, QGIS, ArcGIS, CARTO, Felt and Google Earth
provenance:
  origin: agent
  sources:
    - title: 'GitHub - opengeos/GeoLibre: A lightweight, cloud-native GIS platform for visualizing, exploring, and analyzing geospatial data'
      url: 'https://github.com/opengeos/geolibre'
    - title: 'Home - GeoLibre'
      url: 'https://geolibre.app/'
    - title: 'Features - GeoLibre'
      url: 'https://geolibre.app/features/'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; the geolibre.org address in the lead did not resolve, so the maker''s site at geolibre.app was read instead'
  status: draft
---
The citation the project asks for names Q. Wu as its author. One workspace runs in several places:

- a web browser
- a native desktop app on Windows, macOS and Linux
- Android and iOS apps
- Jupyter notebooks, through a Python package

There is also an R package. GeoLibre is built on MapLibre GL JS, deck.gl, DuckDB-WASM Spatial, Tauri, React and TypeScript. A project can be drawn by any of four rendering engines. MapLibre GL JS is the default; the others are Mapbox GL JS, CesiumJS and the ArcGIS Maps SDK. Engines can be mixed in synchronised split panes.

Layers come from local files, web services, cloud-native formats, 3D Tiles, LiDAR, Gaussian splats, and DuckDB or PostgreSQL databases. LiDAR is laser scanning that records surfaces as points; a Gaussian splat captures a 3D scene as many small soft coloured blobs. The web services are XYZ, WMS, WFS, WMTS, ArcGIS and STAC. The cloud-native formats are GeoParquet, FlatGeobuf, PMTiles, Zarr and COG.

A toolbox of more than a thousand geoprocessing tools runs in the browser on WebAssembly. The tools cover vector, raster, remote sensing, hydrology, terrain, LiDAR, network and projection work. No server is involved, so data stays on the user's machine. Other features are a SQL workspace for DuckDB Spatial, a time slider, a story-map builder, field collection by GPS, multi-user collaboration, and sharing or embedding of projects.

Demos include Manhattan building footprints extruded by construction year with the subway on top, and basemaps of the Moon, Mars and other bodies. A gallery lists 105 projects built from public open data, on themes such as natural hazards, climate, water, transport and cities.

GeoLibre is released under the MIT licence at no cost. The web version needs no installation, and installers and app-store builds cover desktop and mobile. The maker calls the project stable and in active development with regular releases, says it will stay free, and asks for sponsorship.
