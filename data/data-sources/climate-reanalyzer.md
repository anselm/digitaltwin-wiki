---
about:
  label: Climate Reanalyzer
  description: >-
    Climate Change Institute, University of Maine. Daily charts and
    day-of-year data for global and regional sea surface temperature,
    2 m air temperature and sea ice extent, drawn from NOAA OISST and
    ECMWF ERA5.
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
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

Climate Reanalyzer is produced by the Climate Change Institute at the University of Maine, with support from the National Science Foundation and private foundations. It visualises existing, publicly available datasets and models rather than producing its own: daily sea surface temperature from NOAA OISST v2.1, daily surface air temperature from the ECMWF ERA5 reanalysis, daily sea ice extent, and monthly US temperature and precipitation.

Each daily chart is backed by a JSON file of day-of-year values for every year of the record, plus the 1991–2020 mean and a preliminary tail. That is what the [Vitals](/vitals/) page here reads for global and Niño 3.4 sea surface temperature and for global 2 m air temperature.

Content is licensed CC BY 4.0. The site asks that its name stay on anything drawn from it and gives no warranty.
