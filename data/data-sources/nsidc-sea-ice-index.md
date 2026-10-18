---
about:
  label: NSIDC Sea Ice Index
  description: >-
    National Snow and Ice Data Center's running record of Arctic and
    Antarctic sea ice extent and concentration, daily and monthly, from
    November 1978 to the present. Version 4.
  tags:
    - sea ice
    - Arctic
    - Antarctic
    - polar
    - time series
datasource:
  coverage: Arctic and Antarctic, hemisphere-wide
  cadence: daily and monthly; every other day before 1988
  access: open download; CSV and GeoTIFF files, PNG images
  format: CSV, GeoTIFF, PNG
  homepage: 'https://nsidc.org/data/g02135/versions/4'
  cost: free; cite the Sea Ice Index, DOI 10.7265/a98x-0f50
domains:
  - climate
  - water
provenance:
  origin: agent
  sources:
    - title: Sea Ice Index, Version 4
      url: 'https://nsidc.org/data/g02135/versions/4'
    - title: Northern Hemisphere daily extent (N_seaice_extent_daily_v4.0.csv)
      url: 'https://noaadata.apps.nsidc.org/NOAA/G02135/north/daily/data/N_seaice_extent_daily_v4.0.csv'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

The Sea Ice Index gives a quick look at Arctic- and Antarctic-wide changes in sea ice: extent and concentration as images and as data values, from November 1978 to the present, produced in a consistent way so the series suits long-term trends. Its own trend and anomaly images use a 1981–2010 reference period. Both daily and monthly products exist; NSIDC advises the monthly product for trend analysis, since day-to-day variation is often weather and errors in the daily product average out.

The data set is at a "Basic" level of service because of funding limits, which NSIDC explains on the landing page. It is free; NSIDC asks that the index be cited.

The [Vitals](/vitals/) page here reads the daily extent files for each hemisphere and draws its own 1991–2020 mean per day of year.
