---
about:
  label: NOAA Global Forecast System (GFS)
  description: >-
    The US National Weather Service's global weather forecast model, run four
    times a day out to 16 days; its output is free and public, including a
    copy on Amazon Web Services that needs no account.
  aliases:
    - GFS
    - Global Forecast System
  tags:
    - weather
    - forecast
    - wind
    - precipitation
    - GRIB2
    - global
    - open data
datasource:
  coverage: global
  resolution: model about 13 km with 127 vertical layers; public output on 0.25°, 0.5° and 1° grids
  cadence: four runs a day (00, 06, 12 and 18 UTC), each forecasting up to 16 days ahead
  access: free; NOMADS (HTTPS and a GRIB filter for subsets), the noaa-gfs-bdp-pds bucket on AWS with no account, NCEI archive
  format: GRIB2
  homepage: 'https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php'
open:
  source: open
  data: open
  api: 'yes'
  participation: closed
  licence: NOAA open data; attribution requested, no implied endorsement
  note: >-
    The AWS registry says NOAA data disseminated through NODD can be used as
    desired. The model code and workflow are on GitHub; the global-workflow
    repository is under LGPL-3.0.
domains:
  - climate
relations:
  - predicate: answers
    target: questions/weather-and-climate
  - predicate: alternative_to
    target: data-sources/ecmwf-open-data
    note: the free global forecasts of the other large operational centre
provenance:
  origin: agent
  sources:
    - title: 'EMC: GFS (Global Forecast System), NOAA Environmental Modeling Center'
      url: 'https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php'
    - title: 'Global Forecast System (GFS) | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast'
    - title: 'NOAA Global Forecast System (GFS) - Registry of Open Data on AWS'
      url: 'https://registry.opendata.aws/noaa-gfs-bdp-pds/'
    - title: 'NOAA Open Data Dissemination (NODD)'
      url: 'https://www.noaa.gov/information-technology/open-data-dissemination'
    - title: 'NOMADS Data at NCEP'
      url: 'https://nomads.ncep.noaa.gov/'
    - title: 'noaa-gfs-bdp-pds bucket listing, read 30 October 2026'
      url: 'https://noaa-gfs-bdp-pds.s3.amazonaws.com/?list-type=2&delimiter=/&prefix=gfs.'
    - title: 'NOAA-EMC/global-workflow (GitHub)'
      url: 'https://github.com/NOAA-EMC/global-workflow'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; NCEI and the AWS registry still give the older 28 km base resolution, so the model resolution here follows the EMC page'
  status: draft
---
The Global Forecast System (GFS) is the global weather model of the National Centers for Environmental Prediction (NCEP), part of the US National Oceanic and Atmospheric Administration (NOAA).[^1,2] NOAA's Environmental Modeling Center calls it the cornerstone of NCEP's forecast guidance, and its output sets the starting and edge conditions for NCEP's regional, ocean and wave forecasts.[^1] It produces dozens of atmospheric and land-soil variables, including temperature, wind, precipitation, soil moisture and ozone.[^2]

The model runs four times a day and forecasts up to 16 days ahead.[^1] Its forecast component is the Finite Volume Cubed-Sphere (FV3) model at about 13 km, with 127 layers in the vertical and the atmosphere coupled to NCEP's global wave model.[^1] Each run starts from an analysis, a best estimate of the present state of the atmosphere made by blending observations with the previous forecast, produced by the Global Data Assimilation System.[^1,3] Output is hourly for the first 120 hours and three-hourly from day 5 to day 16.[^1] Version 15, in June 2019, brought in the FV3 core; version 16 followed in March 2021.[^1] The code for the model and its workflow is on GitHub, the workflow under the LGPL-3.0 licence.[^1,7]

There are three main ways to get the data. NOMADS, NCEP's own server, offers each run over HTTPS on 0.25°, 0.5° and 1° grids, with a GRIB filter that cuts out chosen variables, levels and areas before download.[^5] The NOAA Open Data Dissemination programme (NODD) puts NOAA data on commercial clouds; NOAA names Amazon, Google Cloud and Microsoft as partners and says the arrangement costs the taxpayer nothing extra.[^4] On Amazon Web Services the GFS sits in the public bucket noaa-gfs-bdp-pds in us-east-1, listed with no AWS account, updated four times a day, with a notification topic that fires when new files land.[^3] NCEI describes the cloud copy as a trailing 30-day window at 0.25° and 0.5°, and keeps a longer, coarser archive itself: analyses at 1° from March 2004 and at 0.5° from January 2007.[^2] On 30 October 2026 the AWS bucket held dated folders back to 1 January 2021.[^6]

The files are in the binary GRIB2 format.[^2,6] Each forecast hour at 0.25° is a file of about half a gigabyte, with a small index file beside it that gives the byte position of each field, so a program can fetch one variable with an HTTP range request instead of the whole file.[^6] The 384-hour forecast file of the 00 UTC run on 29 October 2026 landed a little over five hours after the run started.[^6]

The AWS registry states that NOAA data disseminated through NODD are open to the public and can be used as desired.[^3] NOAA asks for attribution when its data are used or passed on unaltered, does not allow anyone to state or imply NOAA's endorsement, and does not allow modified data to be presented as original NOAA data.[^3]

For someone modelling a place, the GFS is the free, keyless forecast that covers everywhere: wind for a smoke or spill drift model, rain for a runoff model, temperature for an energy or heat model, or a moving weather layer on a map. Its grids are coarse for a single valley or street, so local work often uses it as the outer frame for a finer regional model. ECMWF publishes a comparable set of free forecasts through [ECMWF Open Data](/data-sources/ecmwf-open-data/).
