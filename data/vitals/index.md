---
about:
  label: Vitals
  description: "Six running measurements of the planet's state, refreshed from their sources at every deploy."
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
vitals:
  series:
    - co2
    - t2m
    - sst
    - nino34
    - ice-n
    - ice-s
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
    - title: Climate Reanalyzer, Daily Sea Surface Temperature
      url: https://climatereanalyzer.org/clim/sst_daily/
    - title: NOAA GML, Trends in CO2
      url: https://gml.noaa.gov/ccgg/trends/
    - title: NSIDC Sea Ice Index, Version 4
      url: https://nsidc.org/data/g02135/versions/4
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

Every chart is drawn the same way. Each past year is a faint line, older years fainter. The 1991–2020 mean is the dark line. This year is the coloured line, and where a feed marks its latest days preliminary they are dashed. The number above each chart is the latest reading and how far it sits from the mean for that day of the year.

A twin of a place sits inside these numbers. The idea of watching a short list of planetary vital signs follows the annual [state of the climate report](/articles/2026-state-of-the-climate-report/) in BioScience, which tracks sixteen.

Each series is also published as JSON beside this page, with its source, licence, fetch date and a hash of the raw download, for anyone's model to read.
