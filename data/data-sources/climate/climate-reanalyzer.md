---
about:
  label: Climate Reanalyzer
  description: >-
    Climate Change Institute, University of Maine. Daily charts and day-of-year data for global and regional sea surface temperature, 2 m air temperature and sea ice extent, from NOAA OISST and ERA5.
  tags:
    - sea surface temperature
    - reanalysis
    - sea ice
    - daily
    - climate
datasource:
  coverage: global, with regional selections such as Niño 3.4 and the North Atlantic
  cadence: daily; the last two weeks of OISST are preliminary and revised, ERA5 runs about five days behind
  access: open; JSON files behind each chart, day-of-year arrays by year with a 1991–2020 mean
  format: JSON, PNG charts
  homepage: 'https://climatereanalyzer.org/'
  cost: free, CC BY 4.0, source labels must stay visible
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'CC BY 4.0'
domains:
  - climate
  - water
provenance:
  origin: agent
  sources:
    - title: Climate Reanalyzer, About
      url: 'https://climatereanalyzer.org/about/'
    - title: Climate Reanalyzer, Daily Sea Surface Temperature
      url: 'https://climatereanalyzer.org/clim/sst_daily/'
    - title: Climate Reanalyzer, Daily Surface Air Temperature
      url: 'https://climatereanalyzer.org/clim/t2_daily/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

The site charts existing public datasets and models; it produces no data.[^1] It covers daily sea surface temperature from NOAA OISST v2.1 and daily surface air temperature from the ECMWF ERA5 reanalysis (a reconstruction of past weather from observations).[^2,3] Daily sea ice extent and monthly US temperature and precipitation are also charted.[^1] Support comes from the National Science Foundation and private foundations.[^1]

Each daily chart is backed by a JSON file of day-of-year values for every year of the record, with the 1991–2020 mean and a preliminary tail of recent days.[^2] The [Vitals](/vitals/) page here reads these files for global and Niño 3.4 sea surface temperature and for global 2 m air temperature.

Content is licensed CC BY 4.0.[^1] Anything drawn from the site must keep the Climate Reanalyzer name.[^1] No warranty is given.[^1]
