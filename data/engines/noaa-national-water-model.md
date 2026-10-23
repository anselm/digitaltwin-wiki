---
about:
  label: NOAA National Water Model
  description: >-
    Hydrologic model from NOAA's Office of Water Prediction that simulates
    current and forecast streamflow for over 2.7 million river reaches in the
    continental US, plus coastal water levels; its short-range forecast runs
    hourly and its output is free to download.
  tags:
    - flood
    - river
    - streamflow
    - forecast
    - hydrology
    - inundation
    - coastal
tool:
  homepage: 'https://water.noaa.gov/about/nwm'
  form: operational hydrologic forecast model
  group: Water and flooding
  cost: free
  licence: unknown
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: About National Water Model
      url: 'https://water.noaa.gov/about/nwm'
    - title: National Water Prediction Service - NOAA
      url: 'https://water.noaa.gov/'
    - title: Output File Contents
      url: 'https://water.noaa.gov/about/output_file_contents'
    - title: The National Water Model
      url: 'https://water.noaa.gov/assets/styles/public/images/wrn-national-water-model.pdf'
    - title: About Office of Water Prediction
      url: 'https://water.noaa.gov/about/owp'
    - title: About National Water Center
      url: 'https://water.noaa.gov/about/nwc'
    - title: Data and Web Services Catalog
      url: 'https://water.noaa.gov/about/data-and-web-services-catalog'
    - title: API Info page
      url: 'https://water.noaa.gov/about/api'
    - title: FIM info page
      url: 'https://water.noaa.gov/about/FIMResourceInfo.html'
    - title: Dynamic FIM Services Factsheet (Public Domain)
      url: 'https://www.weather.gov/media/owp/operations/FIM_Services_Factsheet.pdf'
    - title: 'Neighborhood Level Flood Inundation Maps: Transforming NWS Water Prediction across the U.S.'
      url: 'https://www.weather.gov/media/owp/operations/NWS_OWP_FIM_Flyer.pdf'
    - title: 'NWS Flood Inundation Map Services: Public FAQs'
      url: 'https://www.weather.gov/media/owp/operations/nws_fim_faqs.pdf'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
domains:
  - water
---
The National Water Model (NWM) is a computer model of the water cycle across the continental US, southern Alaska, Hawaii, Puerto Rico and the US Virgin Islands.[^1] It represents rain and snowmelt, water soaking into and moving through the soil, and flow down rivers and streams.[^1] NOAA's National Water Center in Tuscaloosa, Alabama began running it operationally in August 2016.[^5,6] Version 3.0 entered service in September 2023, built by a joint team from the Office of Water Prediction (OWP) and the National Center for Atmospheric Research (NCAR).[^4] NOAA's sheet on the model describes it as forecast guidance for over 3.4 million miles of rivers and streams across the United States and its territories.[^4]

The National Weather Service issues official river forecasts at about 4,000 places in the continental US. The model adds guidance at millions of other spots that have none.[^1] Its core is WRF-Hydro, a community hydrologic model supported by NCAR, with the Noah-MP land surface model handling soil, snow and plants.[^1] Water moves over and under the ground on a 250 m grid and down river channels drawn from the National Hydrography Dataset.[^1] Rain comes from radar and gauge observations (MRMS and Stage IV) and from weather forecast models (HRRR, RAP, NAM-Nest, GFS and CFS).[^1] Measured flows from USGS and Army Corps of Engineers gauges are blended in, a step called data assimilation.[^1] Over 5,000 reservoirs are included.[^1] Since version 3.0 a coastal model, SCHISM, joins river flow to ocean surge and tide forecasts.[^1,4] Together they give total water level, the combined height of river, tide and surge, along the East, Gulf and Pacific coasts, Hawaii, Puerto Rico and the US Virgin Islands.[^1,4]

The model runs several analyses, simulations of current conditions that look back between 3 and 28 hours. The forecasts start from them.[^1] In the continental US a short-range forecast runs every hour and looks 18 hours ahead.[^1] A medium-range forecast runs four times a day as six runs with varied inputs, an ensemble, reaching 8.5 to 10 days.[^1] A long-range forecast also runs four times a day and builds a 16-member, 30-day ensemble each day.[^1] Alaska's short-range forecast runs every three hours and looks 15 or 45 hours ahead.[^1] Hawaii, Puerto Rico and the US Virgin Islands get 48-hour forecasts twice a day.[^1]

Output comes as NetCDF, a common file format for gridded science data.[^1] Gridded files at 1 km hold land variables such as snow depth, soil moisture and evaporation.[^1,3] Finer grids, 250 m or 100 m, hold ponded water depth and water table depth.[^1,3] Point files hold streamflow and velocity for each river reach, plus reservoir inflow, outflow and water level.[^3] Coastal water level also comes in SHEF, a text format the Weather Service uses for station time series.[^3] To put the river output on a map, a separate ESRI file geodatabase gives the latitude and longitude of the centre of each reach.[^1] The full output and some of the weather input files are on NOAA's NOMADS server and the NCEP FTP server.[^1] A subset of the model's parameter files can be downloaded separately.[^1] The NWPS API serves the model's streamflow output, and water.noaa.gov shows it on an experimental interactive map and image viewer.[^1,8] NOAA also publishes GIS web services built on the model, such as streamflow anomalies and high water arrival times.[^7] In the continental US the high water thresholds come from a 44-year NWM v3.0 reanalysis, a rerun of the model over past decades.[^7]

A flood inundation map shows where water has spread over the banks of a river or stream.[^10] NOAA's dynamic maps for the continental US come in three services, and the model feeds all three.[^10] One maps the latest NWM analysis, updated hourly, wherever flows pass a "High Water" threshold.[^10,11] Another maps the five-day maximum from the medium-range forecast, updated every six hours.[^10,11] The third routes official River Forecast Center forecasts downstream through the NWM stream network along about 110,000 river miles.[^10] All three draw the flooded area with HAND (Height Above Nearest Drainage).[^10] The method compares the water level in a stream with the height of the land around it.[^12] Hawaii, Puerto Rico and the US Virgin Islands get a 48-hour maximum forecast map.[^11] NOAA set September 2026 as the date for the flood maps to reach nearly 100% of the US population, and its FAQ says they now do.[^11,12] Parts of Alaska, American Samoa and Guam remain outside the service area.[^11]

OWP has proposed an interagency Next Generation Water Resources Modeling Framework, NextGen, built on open-source code and shared standards.[^4] It would let different model formulations run in different regions, where the current model uses one formulation everywhere.[^4] OWP's sheet said a NextGen configuration would replace the operational model in 2024.[^4]
