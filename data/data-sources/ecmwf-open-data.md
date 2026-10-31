---
about:
  label: ECMWF Open Data
  description: >-
    A free subset of ECMWF's real-time global weather forecasts, from both
    its physics-based IFS and its machine-learning AIFS, under CC BY 4.0,
    with no account needed.
  aliases:
    - ECMWF open data
    - IFS open data
    - data.ecmwf.int
  tags:
    - weather
    - forecast
    - ensemble
    - ocean waves
    - GRIB2
    - global
    - open data
datasource:
  coverage: global
  resolution: IFS on 0.25° and, since 20 October 2026, 0.1° grids from the ~9 km model; AIFS on 0.25°
  cadence: four runs a day (00, 06, 12, 18 UTC); IFS to 15 days from 00 and 12 UTC and 6 days from 06 and 18 UTC; AIFS to 15 days every run; only the latest 12 runs are kept
  access: free download from the ECMWF open data portal with no account, copies on AWS, Azure and Google Cloud, the ecmwf-opendata Python client
  format: GRIB2; tropical cyclone tracks in BUFR
  homepage: 'https://www.ecmwf.int/en/forecasts/datasets/open-data'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: closed
  licence: CC BY 4.0 plus the ECMWF Terms of Use
domains:
  - climate
relations:
  - predicate: built_on
    target: engines/aifs
    note: forecasts from the AIFS machine-learning model are published here as they are produced
  - predicate: alternative_to
    target: data-sources/noaa-gfs
    note: NOAA's free global forecasts
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'Open data | ECMWF'
      url: 'https://www.ecmwf.int/en/forecasts/datasets/open-data'
    - title: 'Terms of Use for ECMWF Open Data Products/Advanced Web Services'
      url: 'https://apps.ecmwf.int/datasets/licences/general/'
    - title: 'ecmwf/ecmwf-opendata (GitHub)'
      url: 'https://github.com/ecmwf/ecmwf-opendata'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
ECMWF Open Data is the part of the real-time forecasts of the European Centre for Medium-Range Weather Forecasts (ECMWF) that anyone can download free of charge.[^1,2] It is a subset of ECMWF's full catalogue of real-time products, drawn from its medium-range forecasts.[^1] Two models feed it: the Integrated Forecasting System (IFS), ECMWF's physics-based model, and the [AIFS](/engines/aifs/), its machine-learning model.[^1] Both come as a single forecast and as an ensemble, a set of forecasts started from slightly different conditions whose spread shows how certain the forecast is.[^1]

The IFS fields cover pressure, temperature, humidity and wind at 14 pressure levels from 1000 to 10 hPa.[^1] At the surface they give wind at 10 m and 100 m, gusts, 2 m temperature and dew point, cloud cover, precipitation and its type, snow, runoff, soil water and temperature in four layers, and radiation.[^1] They also include sea surface height, sea ice thickness and ocean currents, and from the wave model significant wave height, period and direction.[^1] From the ensemble come means, spreads and probabilities, such as the chance of more than 20 mm of rain in a day or of gusts above 25 m/s, and tropical cyclone tracks.[^1] The AIFS single forecast and ensemble carry a similar atmospheric set, with soil in two layers rather than four, plus waves, cyclone tracks and, for the ensemble, means and probabilities.[^1] A seasonal sea surface temperature product was listed as not yet available in October 2026.[^1]

IFS runs at 00 and 12 UTC go out 15 days, in three-hour steps for six days and six-hour steps after; the 06 and 18 UTC runs go out six days.[^1] AIFS runs four times a day out to 15 days in six-hour steps and is published as soon as it is produced.[^1] IFS data are interpolated to a latitude-longitude grid of 0.25°, and since 20 October 2026 also of 0.1°, both from the same high-resolution forecast of about 9 km.[^1] The 0.1° files come about two hours after the 0.25° ones and are split into surface and pressure-level files, which ECMWF says lets users with slow connections take only what they need.[^1] Files are GRIB2; cyclone tracks are BUFR.[^1]

Only the latest 12 runs are kept, about two to three days of forecasts; older forecasts are in ECMWF's archive, which needs a service agreement.[^1] The portal limits simultaneous connections to between 500 and 2,000, and ECMWF points users to identical copies on Amazon Web Services, Microsoft Azure and Google Cloud.[^1] Its Python client, ecmwf-opendata, fetches by date, run, step and parameter from any of these sources through one interface.[^1,3]

The data are under the Creative Commons CC BY 4.0 licence together with ECMWF's Terms of Use, so they may be redistributed and used commercially with attribution.[^1] The terms say ECMWF keeps all intellectual property rights, that attribution must be prominent and say the output is based on data and products of ECMWF, and that ECMWF can ask for its attribution to be removed.[^2] A copyright line, the source, the licence and a liability disclaimer must be attached, along with a note of any changes made.[^2] The data come as is, with no warranty and no promise that the service will continue.[^2] ECMWF says that having data delivered directly to you, rather than downloading them, may carry service charges and need a service agreement.[^1]

For someone modelling a place, ECMWF Open Data is a second free global forecast beside [NOAA's GFS](/data-sources/noaa-gfs/), and comparing the two is a quick check on how sure a forecast is. The ensemble probabilities suit questions such as whether a river catchment is likely to see heavy rain this week, and the wave fields serve coastal models. Because only a few days are kept, anyone who wants a record of past forecasts must save them as they arrive; for past weather itself, ECMWF publishes the [ERA5](/data-sources/era5/) reanalysis.
