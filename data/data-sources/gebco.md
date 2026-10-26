---
about:
  depiction: data-sources/gebco.jpg
  depiction_credit: 'The GEBCO_2026 Grid, ice surface elevation, Robinson projection. GEBCO Compilation Group (2026), public domain with attribution.'
  label: GEBCO global bathymetry grid
  description: >-
    Free global map of the depth of the seafloor, with land heights, on a
    15 arc-second grid, released once a year by the General Bathymetric
    Chart of the Oceans and the Seabed 2030 project.
  aliases:
    - GEBCO Grid
    - General Bathymetric Chart of the Oceans
  tags:
    - bathymetry
    - seafloor
    - ocean depth
    - elevation
    - terrain
    - raster
datasource:
  coverage: global, ocean and land; a version with the ground under the ice of Greenland and Antarctica
  resolution: 15 arc-seconds (43,200 by 86,400 cells); a test multi-resolution product where finer data exist
  cadence: a new global grid each year; GEBCO_2026 published April 2026
  access: global downloads, a download app for chosen areas, OPeNDAP through CEDA, and web map services; no registration stated
  format: netCDF, GeoTIFF, Esri ASCII raster
  homepage: 'https://www.gebco.net/data-products/gridded-bathymetry-data'
open:
  source: unknown
  data: open
  api: unknown
  participation: open
  licence: public domain, free of charge, with attribution requested
  note: GEBCO takes contributed survey data, soundings and grids to improve the grid.
domains:
  - water
  - places
relations:
  - predicate: alternative_to
    target: data-sources/copernicus-dem
    note: one grid for seafloor and land at 15 arc-seconds, against a 30 m model of the land surface only
provenance:
  origin: agent
  sources:
    - title: Gridded Bathymetry Data | GEBCO
      url: 'https://www.gebco.net/data-products/gridded-bathymetry-data'
    - title: The GEBCO_2026 Grid | GEBCO
      url: 'https://www.gebco.net/data-products-gridded-bathymetry-data/gebco2026-grid'
    - title: GEBCO grid development | GEBCO
      url: 'https://www.gebco.net/data-products/gridded-bathymetry-data/grid-development'
    - title: What we do | GEBCO
      url: 'https://www.gebco.net/about-us/overview'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
GEBCO (the General Bathymetric Chart of the Oceans) is a non-profit body working under the International Hydrographic Organization and UNESCO's Intergovernmental Oceanographic Commission.[^4] Its chart series began in 1903.[^4] It relies largely on volunteer geoscientists and hydrographers.[^4] Bathymetry is the measurement of the depth and shape of the seafloor.[^4] The Nippon Foundation of Japan proposed a partnership with GEBCO in 2016 to map the whole ocean floor by 2030, and the two now run it as the Seabed 2030 project.[^2,4]

The GEBCO Grid is a single terrain model of ocean and land, with heights and depths in metres on a 15 arc-second grid of 43,200 rows by 86,400 columns.[^1,2] The current grid, GEBCO_2026, was published in April 2026.[^2] It is built on the SRTM15+ dataset from Scripps Institution of Oceanography, which joins land heights with measured seafloor depths and depths predicted from satellite measurements of gravity.[^2,3] Grids compiled from survey data, mostly multibeam sonar, by four Seabed 2030 regional centres are blended onto that base.[^2,3] North of 60°N and south of 60°S the land and ice heights come from BedMachine models of Greenland and Antarctica and other polar sources.[^2] One version gives the ice surface and a second gives the ground beneath the ice.[^1,2]

Alongside the depths comes a Type Identifier grid that says, cell by cell, what each value rests on: a direct measurement such as multibeam, singlebeam or lidar, an indirect one such as a gravity prediction or interpolation, or an unknown source.[^2,3] GEBCO notes that the data are assumed to be relative to mean sea level, but some shallow-water sources use other vertical datums.[^1,2]

The grid is in the public domain and free, including for commercial use, and GEBCO asks that it be credited with a citation that carries its DOI.[^1,2] It can be downloaded whole as netCDF or in eight tiles as GeoTIFF or Esri ASCII raster; the global netCDF file is 7 GB uncompressed.[^1,2] A download app cuts out a chosen area, and the grids can also be read over OPeNDAP, a protocol for reading parts of remote files, through the UK's Centre for Environmental Data Analysis.[^1] GEBCO takes contributions of singlebeam and multibeam survey data, individual soundings and existing grids to improve the grid.[^4]

GEBCO lists what seafloor depth is used for: ocean circulation, tides, tsunami forecasting, fishing, sediment transport, geo-hazards, and routing cables and pipelines.[^4] For someone modelling a coast, a bay or a stretch of sea, it supplies the depths a tide, wave or circulation model needs as its floor.[^4] The Type Identifier grid shows where those depths were surveyed and where they were estimated.[^2,3]
