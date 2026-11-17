---
about:
  label: CAMS Fire Emissions Watch
  depiction: data-sources/cams-fire-emissions-watch.jpg
  depiction_credit: 'Copernicus Atmosphere Monitoring Service, ECMWF: the preview image of Fire Emissions Watch, showing fires and smoke over central and southern Africa.'
  description: >-
    Copernicus's free daily map of wildfire carbon emissions, fire intensity
    and smoke for every country and province since 2003, with a five-day
    smoke forecast.
  aliases:
    - Fire Emissions Watch
    - GFAS
    - Global Fire Assimilation System
  tags:
    - wildfire
    - emissions
    - smoke
    - carbon
    - fire radiative power
    - satellite
    - Copernicus
    - global
datasource:
  coverage: global, by grid cell, drawn area, province, country or the whole world
  resolution: 0.1 degree grid for the fire emissions data underneath
  cadence: daily; each day's analysis is a 24-hour average for the day before; the record starts on 1 January 2003; smoke is forecast five days ahead
  access: free in a browser, with charts to download; the underlying data are free from the Copernicus Atmosphere Data Store by web form or API
  format: charts and maps from the application; GRIB from the Atmosphere Data Store
  homepage: 'https://apps.atmosphere.copernicus.eu/fire-emissions-watch/'
open:
  source: unknown
  data: 'yes'
  api: 'yes'
  participation: 'no'
  note: >-
    The application says its datasets are free to download and that users of
    Copernicus products must give clear and visible attribution to the
    Copernicus programme.
domains:
  - fire
  - climate
relations:
  - predicate: answers
    target: questions/wildfire
provenance:
  origin: agent
  sources:
    - title: 'Fire Emissions Watch (the application and its About text), Copernicus Atmosphere Monitoring Service'
      url: 'https://apps.atmosphere.copernicus.eu/fire-emissions-watch/'
    - title: 'Fire Emissions Watch: global wildfire emission data at your fingertips (CAMS news, 29 July 2026)'
      url: 'https://atmosphere.copernicus.eu/fire-emissions-watch-global-wildfire-emission-data-your-fingertips'
    - title: 'Copernicus: New Fire Emissions Watch tool provides instant access to global fire emissions data (press release, 30 July 2026)'
      url: 'https://atmosphere.copernicus.eu/copernicus-new-fire-emissions-watch-tool-provides-instant-access-global-fire-emissions-data'
    - title: 'CAMS global biomass burning emissions based on fire radiative power (GFAS v1.2): data documentation, ECMWF'
      url: 'https://confluence.ecmwf.int/spaces/CKB/pages/88247734/CAMS+global+biomass+burning+emissions+based+on+fire+radiative+power+GFAS+v1.2+data+documentation'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the four sources listed. The application was opened and its About text read from the page; the two Copernicus announcements were read in full; the data documentation was read through a summarising fetcher, not line by line. The papers that describe the method were not read. Howard Silverman sent the link to Anselm.'
  status: draft
---
Fire Emissions Watch is a web application from the Copernicus Atmosphere Monitoring Service (CAMS), which the European Centre for Medium-Range Weather Forecasts (ECMWF) runs for the European Commission.[^1] CAMS announced it on 29 and 30 July 2026.[^2,3] It shows where wildfires are burning, how much carbon they release, and where the smoke goes, and it sets each day against the record since 2003.[^1,2] CAMS wrote that it is meant for researchers, policymakers, journalists and the public.[^3]

## What it shows

The fire layer gives two measures, each as a total and per unit of area: carbon emitted, in kilotonnes, and fire radiative power, the rate of heat a fire gives off, in gigawatts.[^1] A third view shows the anomaly, how far a place is from its 2003 to 2025 baseline.[^1] The reader can pick a grid cell, draw an area, or choose a province, a country or the whole world, and read daily, monthly and year-to-date totals.[^2,3] A chart for the chosen place can be downloaded, and a share button copies a link that restores the same region, dates and variable.[^1,2] The opening page lists the largest signals of the week by country.[^1]

The application reports carbon only, as an indicator for the other pollutants in fire smoke.[^1,3] The dataset underneath also holds separate figures for carbon dioxide, carbon monoxide, methane, nitrogen oxides, fine particles and many other species.[^4]

The smoke layer shows the optical depth of organic matter aerosol, a measure of how much sunlight particles in the air scatter or absorb.[^1] CAMS uses it as a tracer for wildfire smoke and says it also picks up smaller contributions from residential and agricultural burning and road traffic.[^1] The layer can be replayed over a chosen period and runs five days into the future.[^1,2]

## Where the numbers come from

The source is the CAMS Global Fire Assimilation System (GFAS). It takes satellite observations of fire radiative power and turns them into daily estimates of the dry matter burned and of the emissions that follow.[^1,2] Where there are no observations, a Kalman filter carries the previous day's analysis forward to fill the gap.[^4] The data are on a grid of 0.1 degrees, and each day's analysis is a 24-hour average for the day before.[^4]

The application shows GFAS version 1.2, which uses the MODIS instruments on NASA's Terra and Aqua satellites.[^1,2] A newer version, 1.4.2, adds the VIIRS instruments and has fed the CAMS forecasts since May 2026; CAMS says some values differ between the two.[^2] The press release says the system uses both MODIS and VIIRS, which is true of the newer version and not of the one displayed.[^2,3]

The emissions figures are estimates from observation. The smoke forecast is a prediction: the emissions go into ECMWF's Integrated Forecasting System, which forecasts how the smoke moves and mixes up to five days ahead.[^2] Smoke for 2003 to 2025 comes from the CAMS global reanalysis, and from May 2026 from the forecasting system.[^1]

## Limits

The satellites detect heat at the surface. Most of it is vegetation fire, and volcanoes, gas flares and reflective surfaces can also be detected; GFAS filters these out where it can.[^1,4] Small fires can fall below what the instruments detect, and cloud hides fires.[^4] The documentation lists known faults, among them contaminated observations in August 2024 that affected Arctic emissions, and several outages of the Aqua instrument.[^4] It warns that the field giving the fraction of each cell observed is not suitable for calculating burned area.[^4] The news article says fire radiative power and carbon emissions usually rise and fall together and can differ a good deal in absolute terms.[^2]

## Using it for a model of a place

For a county or region, the application gives in a few minutes what would otherwise need a download and some code: how a fire season compares with every season since 2003, and how much carbon it put into the air. A chart from it can go straight into a report or a public meeting. For the model itself, the same data are on the Copernicus Atmosphere Data Store, by web form or API.[^4] At 0.1 degrees a cell is about 11 km across at the equator, so the data describe a district or a province and not a single fire's edge.

[NASA FIRMS](/data-sources/nasa-firms/) is the companion source: it gives the individual fire detections, within hours, where this gives the emissions estimated from them. The [Indonesian land and peat fires](/scenarios/indonesia-land-and-peat-fires/) scenario draws on both.

The application grew from Wildfire Emission Explorer, a project of ECMWF's Summer of Weather Code in 2022.[^2] CAMS says it was made possible by changes to ECMWF's data stores that put large datasets in the Zarr format, which a browser can read in pieces.[^2]
