---
about:
  label: Open-Meteo
  description: >-
    Open-source weather API that returns forecasts from more than 30 weather
    models, and weather history back to 1940, as JSON for any coordinates;
    free for non-commercial use, data under CC BY 4.0.
  aliases:
    - open-meteo.com
  tags:
    - weather
    - forecast
    - weather history
    - API
    - JSON
    - air quality
    - global
datasource:
  coverage: global; regional models of 1 to 2 km for parts of Europe and North America
  resolution: point values at the requested coordinates, from models of 1 to 2 km (regional) to 9 to 11 km (global), normalised to hourly steps
  cadence: most global models every 6 hours, regional models every 1 to 3 hours; forecasts up to 16 days; reanalysis from 1940
  access: free for non-commercial use with no key or sign-up, within rate limits; paid plans for commercial use; self-hosting the open-source server
  format: JSON over HTTP GET; CSV and XLSX also
  homepage: 'https://open-meteo.com/'
open:
  source: open
  data: open
  api: 'yes'
  participation: partly
  licence: data CC BY 4.0; server code AGPLv3
  note: The free API is for non-commercial use only; commercial use needs a paid plan or a self-hosted instance.
domains:
  - climate
relations:
  - predicate: built_on
    target: data-sources/noaa-gfs
  - predicate: built_on
    target: data-sources/ecmwf-open-data
  - predicate: built_on
    target: data-sources/era5
    note: its historical weather API serves ERA5 and ERA5-Land
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'Free Open-Source Weather API | Open-Meteo.com'
      url: 'https://open-meteo.com/'
    - title: 'Features | Open-Meteo.com'
      url: 'https://open-meteo.com/en/features'
    - title: 'Licence | Open-Meteo.com'
      url: 'https://open-meteo.com/en/licence'
    - title: 'Terms & Privacy | Open-Meteo.com'
      url: 'https://open-meteo.com/en/terms'
    - title: 'Pricing | Open-Meteo.com'
      url: 'https://open-meteo.com/en/pricing'
    - title: 'About us & Contact | Open-Meteo.com'
      url: 'https://open-meteo.com/en/about'
    - title: 'open-meteo/open-meteo (GitHub)'
      url: 'https://github.com/open-meteo/open-meteo'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the pricing page did not show plan prices in the text read, so none are given'
  status: draft
---
Open-Meteo is a weather API built on the open forecasts that national weather services publish: a program asks it for a place and a time and gets numbers back.[^6] Those forecasts are free to download but come in binary formats and grids that take expertise to handle; Open-Meteo downloads and processes them every day and stores them in its own compressed format for fast time-series lookups.[^6,7] It is run by OpenMeteo GmbH, whose address is in Bürglen.[^4] The suggested citation names Patrick Zippenfenig as its author.[^3]

It draws on more than 30 weather models from over 15 weather services, including ECMWF, NOAA, Germany's DWD, Météo-France, the Japan Meteorological Agency and the UK Met Office.[^1] For any point it picks the highest-resolution model available.[^2] In Central Europe, France, Switzerland, the UK and North America that means regional models of 1 to 2 km for the first few days, and elsewhere and later global models of 9 to 11 km.[^2] A user can also ask for a named model.[^2] Values are fitted to the requested coordinates and put on an hourly time step whatever the model's own grid and output interval.[^2] Forecasts run up to 16 days.[^2] The forecasts it serves include [NOAA's GFS](/data-sources/noaa-gfs/) and [ECMWF's open forecasts](/data-sources/ecmwf-open-data/).[^3]

Beyond the forecast there are separate APIs. The historical weather API serves [ERA5](/data-sources/era5/) and ERA5-Land, hourly from January 1940 at 9 to 25 km.[^2] An archive of past forecasts runs from about 2021, an ensemble API gives up to 51 members, and seasonal forecasts reach nine months.[^2] A climate API gives CMIP6 projections downscaled to 10 km and bias-corrected against ERA5, daily from 1950 to 2050.[^2] Others give ocean waves, satellite-derived solar radiation, place-name lookup and terrain height from a 90 m elevation model.[^2] Air quality and pollen come from the Copernicus Atmosphere Monitoring Service, and river discharge from the Global Flood Awareness System (GloFAS).[^2,3]

Requests are plain HTTP GET with the coordinates and variables in the address, and the answer is JSON, or CSV or XLSX on request; several locations can go in one request.[^1,2] No key, sign-up or credit card is needed.[^1] The free API is for non-commercial use only, under 10,000 calls a day, 5,000 an hour and 600 a minute, and Open-Meteo may block applications or IP addresses that misuse it without notice.[^4] Its terms count private or non-profit sites without subscriptions or advertising, home automation, and public research at public institutions as non-commercial, and sites with subscriptions or adverts, commercial products and undisclosed research at companies as commercial.[^4] A request for more than 10 variables or more than two weeks of data at one location counts as more than one call.[^5] Paid plans give a commercial licence and a key for a separate endpoint, with monthly budgets of 1 million, 5 million or over 50 million calls; historical, climate and ensemble data need the Professional plan or above.[^5]

The data are under CC BY 4.0, which allows sharing and adaptation, commercial use included, with credit.[^3] Open-Meteo asks for a link to open-meteo.com next to wherever its data are shown.[^3] The server code is on GitHub under the GNU Affero General Public Licence (AGPLv3), and anyone can run their own instance, with Docker or prebuilt Ubuntu packages, without the call limits.[^1,7] Its terms disclaim responsibility for errors or omissions in the data and for interruptions to the service.[^4]

For someone modelling a place, Open-Meteo answers a pair of coordinates with a weather time series: past, present and forecast in one format, with no GRIB files to decode. It suits a dashboard, a quick look at how a heatwave or storm is shaping up, or a long hourly record to drive a crop, energy or runoff model at a handful of sites. Because it returns values at points, a model that needs whole fields across a region may still be better served by the source grids.
