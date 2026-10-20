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
GeoLibre is a free, open-source GIS from the opengeos project, with Q. Wu as its author in the citation it asks for. The same workspace runs in a web browser, as a native desktop app on Windows, macOS and Linux, as Android and iOS apps, and inside Jupyter notebooks through a Python package; there is also an R package. It is built on MapLibre GL JS, deck.gl, DuckDB-WASM Spatial, Tauri, React and TypeScript. One project can be drawn by any of four rendering engines: MapLibre GL JS by default, Mapbox GL JS, CesiumJS or the ArcGIS Maps SDK, and the engines can be mixed in synchronised split panes.

It is a general tool for loading, styling and analysing place data. Layers come from local files or from web services (XYZ, WMS, WFS, WMTS, ArcGIS, STAC), cloud-native formats (GeoParquet, FlatGeobuf, PMTiles, Zarr, COG), 3D Tiles, LiDAR, Gaussian splats and DuckDB or PostgreSQL databases. A toolbox of more than a thousand geoprocessing tools for vector, raster, remote sensing, hydrology, terrain, LiDAR, network and projection work runs in the browser on WebAssembly, so no server is involved and data stays on the user's machine. There is a SQL workspace for DuckDB Spatial, a time slider, a story-map builder, field collection by GPS, multi-user collaboration, and sharing or embedding of projects. The maker's demos include Manhattan building footprints extruded by construction year with the subway on top, and basemaps of the Moon, Mars and other bodies; a gallery lists 105 projects built from public open data on themes such as natural hazards, climate, water, transport and cities.

It is released under the MIT licence at no cost. The web version runs without installing anything; installers and app-store builds cover desktop and mobile. The maker describes the project as stable and in active development with regular releases, says it is free and will stay so, and asks for sponsorship.

In this wiki's stack it is presentation: a place to look at and work on the data behind a model of a place, drawing on /presentation/maplibre/, /presentation/deck-gl/ and /presentation/cesiumjs/ underneath.
