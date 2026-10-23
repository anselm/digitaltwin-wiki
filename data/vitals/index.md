---
about:
  label: Vitals
  description: >-
    Nine running measurements of the planet's state, refreshed from their sources
    at every deploy.
  view: vitals
  tags:
    - climate
    - indicators
    - sea ice
    - carbon dioxide
    - temperature
section:
  order: 95
  nav: true
  area: resources
vitals:
  series:
    - co2
    - gmst
    - t2m
    - sst
    - nino34
    - ice-n
    - ice-s
    - ohc
    - gmsl
domains:
  - climate
  - water
relations:
  - predicate: needs
    target: data-sources/climate-reanalyzer
  - predicate: needs
    target: data-sources/noaa-gml-co2-trends
  - predicate: needs
    target: data-sources/nsidc-sea-ice-index
  - predicate: about
    target: articles/2026-state-of-the-climate-report
    note: the idea of a short list of planetary vital signs
provenance:
  origin: agent
  sources:
    - title: 'Climate Reanalyzer, Daily Sea Surface Temperature'
      url: 'https://climatereanalyzer.org/clim/sst_daily/'
    - title: 'NOAA GML, Trends in CO2'
      url: 'https://gml.noaa.gov/ccgg/trends/'
    - title: 'NSIDC Sea Ice Index, Version 4'
      url: 'https://nsidc.org/data/g02135/versions/4'
    - title: 'NOAA NCEI, Global Ocean Heat and Salt Content: Heat Content Basin Time Series'
      url: 'https://www.ncei.noaa.gov/access/global-ocean-heat-content/basin_heat_data.html'
    - title: 'NOAA NCEI, Climate at a Glance: Global Time Series'
      url: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series'
    - title: 'NOAA Laboratory for Satellite Altimetry, Sea Level Rise time series'
      url: 'https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/LSA_SLR_timeseries.php'
  created: '2026-10-17'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

Most charts are drawn by day of year. Each past year is a faint line, older years fainter. The 1991–2020 mean is the dark line. This year is the coloured line, and where a feed marks its latest days preliminary they are dashed. The number above each chart is the latest reading and its departure from the mean for that day of the year.

Three quantities change too slowly to read that way and are drawn across the whole record instead: global temperature against its 1850–1900 level, the heat stored in the top 2,000 metres of ocean, and global sea level. The temperature chart is the one behind talk of 1.5 °C; the daily air temperature chart below it measures against a recent mean and so reads lower.

Any model of a place runs inside these numbers. The idea of watching a short list of planetary vital signs follows the annual [state of the climate report](/articles/2026-state-of-the-climate-report/) in BioScience, which tracks sixteen.

Each series is also published as JSON beside this page, with its source, licence, fetch date and a hash of the raw download, for other models to read.
