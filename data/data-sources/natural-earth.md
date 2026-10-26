---
about:
  depiction: data-sources/natural-earth.jpg
  depiction_credit: 'Shaded relief, rivers and boundaries, from the Natural Earth home page. Made with Natural Earth, public domain.'
  label: Natural Earth
  description: >-
    Public domain vector and raster data for maps of the world, continents
    and countries at three scales, 1:10m, 1:50m and 1:110m, made by
    volunteer cartographers.
  tags:
    - basemap
    - boundaries
    - countries
    - rivers
    - cartography
    - vector
datasource:
  coverage: global
  resolution: 1:10 million, 1:50 million and 1:110 million scales
  cadence: versioned releases; the latest on GitHub is v5.1.2 (May 2022)
  access: free download from naturalearthdata.com, no registration; also on GitHub
  format: shapefile, SQLite and GeoPackage for vectors; raster images
  homepage: 'https://www.naturalearthdata.com/'
open:
  source: unknown
  data: open
  api: 'no'
  participation: open
  licence: public domain
  note: Corrections and suggestions go through GitHub issues.
domains:
  - places
relations:
  - predicate: alternative_to
    target: data-sources/openstreetmap-osm
    note: generalised data for maps of countries and the world, against detailed data mapped street by street
provenance:
  origin: agent
  sources:
    - title: Natural Earth - Free vector and raster map data at 1:10m, 1:50m, and 1:110m scales
      url: 'https://www.naturalearthdata.com/'
    - title: Natural Earth » About - Free vector and raster map data at 1:10m, 1:50m, and 1:110m scales
      url: 'https://www.naturalearthdata.com/about/'
    - title: Natural Earth » Terms of Use - Free vector and raster map data at 1:10m, 1:50m, and 1:110m scales
      url: 'https://www.naturalearthdata.com/about/terms-of-use/'
    - title: Natural Earth » Downloads - Free vector and raster map data at 1:10m, 1:50m, and 1:110m scales
      url: 'https://www.naturalearthdata.com/downloads/'
    - title: 'GitHub - nvkelso/natural-earth-vector: A global, public domain map dataset available at three scales and featuring tightly integrated vector and raster data.'
      url: 'https://github.com/nvkelso/natural-earth-vector'
    - title: Releases · nvkelso/natural-earth-vector · GitHub
      url: 'https://github.com/nvkelso/natural-earth-vector/releases'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Natural Earth is made by volunteers, many of them members of the North American Cartographic Information Society (NACIS), which supports the project.[^1,2] Nathaniel Vaughn Kelso and Tom Patterson lead the work.[^2,3] It was made for small-scale maps, and its lines are generalised, simplified so that shapes stay recognisable at each scale.[^1] All the layers align with one another: where a river is also a border, the two lines coincide.[^1]

The data come at three scales.[^4] 1:10m is the most detailed, for zoomed-in maps of countries and regions; 1:50m is for zoomed-out maps of countries and regions; 1:110m is for schematic world maps.[^4] Each scale has cultural, physical and, at the two larger scales, raster themes.[^4] They include countries, states and provinces, populated places, urban areas, roads, railroads, rivers and lakes, parks, glaciers, coral reefs, bathymetry, and shaded relief images.[^1] Most features carry their names, ranked by importance for labelling.[^1] Boundaries are drawn as they are controlled on the ground rather than as claimed, disputed areas are marked, and optional point-of-view versions show borders as several dozen countries see them.[^1,2]

Everything can be downloaded free with no permission needed, for any purpose including commercial use, and credit is welcome but not required.[^3,4] All vector themes come together as shapefile, SQLite or GeoPackage, and a quick-start kit has a sample styled for the QGIS mapping program.[^4] The vector data are also kept on GitHub, where versions follow semantic versioning, so the version number shows how much a new release may break an existing map.[^5] The latest release there is v5.1.2, from May 2022.[^6] Errors are reported through GitHub issues.[^2,3]

For someone modelling a place, Natural Earth supplies the backdrop for a map of the results, at the scale of a region or the world: coastlines, borders, rivers and cities.[^1,4]
