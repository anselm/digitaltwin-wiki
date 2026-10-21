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
  format: CSV, text, JSON
  homepage: 'https://gml.noaa.gov/ccgg/trends/'
  cost: free, US public domain; NOAA asks for a citation
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'US public domain'
domains:
  - climate
provenance:
  origin: agent
  sources:
    - title: NOAA GML, Trends in CO2
      url: 'https://gml.noaa.gov/ccgg/trends/'
    - title: Mauna Loa weekly mean CO2 (co2_weekly_mlo.csv)
      url: 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_weekly_mlo.csv'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

The record comes as flat files, each with its own header on use and contact. The weekly series starts in May 1974. Monthly and annual means, daily values and the globally averaged series come as separate files. The data are free. NOAA (the US National Oceanic and Atmospheric Administration) asks that publications cite the data providers, in the form the trends page gives.

Two notes in the weekly file matter to a model. Values for the last several months are preliminary and still under quality control. Measurements at Mauna Loa were suspended from 29 November 2022, after the volcano erupted, until July 2023. Observations from December 2022 to 4 July 2023 come from a site at the Maunakea Observatories, about 21 miles north.

The [Vitals](/vitals/) page here reads the weekly file.
