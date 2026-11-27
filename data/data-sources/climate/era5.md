---
about:
  label: ERA5
  description: >-
    ECMWF's hourly reconstruction of the world's weather from 1940 to a few
    days ago, under CC BY from the Copernicus Climate Data Store; ERA5-Land is
    a finer land version from 1950.
  aliases:
    - ERA5-Land
    - ECMWF reanalysis
  tags:
    - reanalysis
    - weather history
    - climate
    - temperature
    - wind
    - soil
    - gridded
datasource:
  coverage: global
  resolution: 0.25° grid (0.5° for ocean waves); ERA5-Land 0.1° (about 9 km)
  cadence: hourly values, updated daily about five days behind real time; ERA5 from 1940, ERA5-Land from 1950
  access: Climate Data Store web form or the cdsapi Python client; account and per-dataset terms required
  format: GRIB
  homepage: 'https://climate.copernicus.eu/climate-reanalysis'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  licence: CC BY
domains:
  - climate
  - water
relations:
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: Climate reanalysis | Copernicus
      url: 'https://climate.copernicus.eu/climate-reanalysis'
    - title: ERA5 hourly data on single levels from 1940 to present
      url: 'https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels?tab=overview'
    - title: ERA5-Land hourly data from 1950 to present
      url: 'https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land?tab=overview'
    - title: CDSAPI setup - Climate Data Store
      url: 'https://cds.climate.copernicus.eu/how-to-api'
    - title: CC-BY licence (rev. 1)
      url: 'https://cds.climate.copernicus.eu/licences/cc-by'
    - title: The ERA5 global reanalysis
      url: 'https://doi.org/10.1002/qj.3803'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; ECMWF's own ERA5 dataset page asked for a
    login and could not be read, and the 2020 paper was read for its citation
    details only
  status: draft
---
ERA5 is the fifth generation of the climate reanalysis made by the European Centre for Medium-Range Weather Forecasts (ECMWF), and it is published through the Copernicus Climate Change Service's Climate Data Store.[^1,2] A reanalysis is a reconstruction of past weather. A weather model is run back over past decades and corrected every few hours with the observations available at the time, as forecast centres do before each new forecast. The result is a complete and consistent record for the whole globe.[^1,2] ERA5 replaced the earlier ERA-Interim reanalysis.[^2] Its method is described in "The ERA5 global reanalysis" by Hersbach and colleagues, in the Quarterly Journal of the Royal Meteorological Society, 2020.[^6]

The record is hourly from 1940 to the present and covers a large number of atmospheric, land-surface and ocean-wave quantities.[^1,2] On the Climate Data Store it comes on a regular latitude-longitude grid of 0.25 degrees, or 0.5 degrees for ocean waves, with upper-air values on 37 pressure levels.[^1,2] A ten-member ensemble, ten slightly different runs, gives an estimate of uncertainty every three hours on a coarser grid.[^2] Monthly averages are also provided.[^2] ERA5 is updated daily about five days behind real time; this early release, called ERA5T, may be corrected in the final release two to three months later, and users are told if it is.[^1,2]

ERA5-Land is a separate land-surface dataset made by rerunning the land part of ERA5 on a finer grid of 0.1 degrees, about 9 km, hourly from January 1950 and also updated daily.[^1,3] It reaches from 2 m above the ground to a soil depth of 289 cm in four layers.[^3] It uses no observations directly. ERA5's air temperature and humidity drive it, corrected for the difference in height between the two grids.[^3] It is suited to land applications such as flood or drought forecasting.[^3]

Both datasets are released under a CC BY licence and carry their own DOIs for citation: 10.24381/cds.adbb2d47 for ERA5 hourly single levels and 10.24381/cds.e2161bac for ERA5-Land hourly.[^2,3,5] Data comes in GRIB, a standard weather-data file format.[^2,3] Downloads go through each dataset's web form or the cdsapi Python client.[^4] The client needs a Climate Data Store account, and each dataset's terms of use must first be accepted by hand on its page.[^4]

For someone modelling a place, ERA5 supplies the past weather a model is driven by or checked against, hour by hour for any point on Earth back to 1940.[^1,2] The grid describes the weather of an area a quarter of a degree across rather than of a single street, and ERA5-Land's finer grid and soil layers suit questions about water on and in the land.[^2,3]
