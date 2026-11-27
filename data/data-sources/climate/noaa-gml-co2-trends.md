---
about:
  label: NOAA GML Trends in CO2
  description: >-
    NOAA Global Monitoring Laboratory's record of atmospheric carbon dioxide
    at Mauna Loa Observatory since 1974, as daily, weekly, monthly and annual
    means, with a global mean series.
  tags:
    - carbon dioxide
    - greenhouse gases
    - Mauna Loa
    - time series
datasource:
  coverage: Mauna Loa Observatory, Hawaii; also globally averaged marine surface series
  cadence: weekly means from May 1974; the last several months are preliminary
  access: open download, no key
  format: CSV, text
  homepage: 'https://gml.noaa.gov/ccgg/trends/'
  cost: free; NOAA GML makes the data freely available and asks to be cited
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'freely available under the NOAA GML data use policy (cite the source)'
domains:
  - climate
provenance:
  origin: agent
  sources:
    - title: NOAA GML, Trends in CO2
      url: 'https://gml.noaa.gov/ccgg/trends/'
    - title: Mauna Loa weekly mean CO2 (co2_weekly_mlo.csv)
      url: 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_weekly_mlo.csv'
    - title: NOAA GML, Trends in CO2, Mauna Loa data
      url: 'https://gml.noaa.gov/ccgg/trends/data.html'
    - title: NOAA GML, Trends in CO2, global data
      url: 'https://gml.noaa.gov/ccgg/trends/gl_data.html'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

The record comes as flat files, each with its own header on use and contact.[^2] The weekly series starts in May 1974.[^1,2] Monthly and annual means, daily values and the globally averaged series come as separate files.[^3,4] The data are free.[^2] NOAA (the US National Oceanic and Atmospheric Administration) asks that publications cite the data providers, in the form the trends page gives.[^2,3]

Two notes in the weekly file matter to a model. Values for the last several months are preliminary and still under quality control.[^2] Measurements at Mauna Loa were suspended from 29 November 2022, after the volcano erupted, until July 2023.[^1,2] Observations from December 2022 to 4 July 2023 come from a site at the Maunakea Observatories, about 21 miles north.[^1,2]

The [Vitals](/vitals/) page here reads the weekly file.
