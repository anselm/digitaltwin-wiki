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
  cadence: daily and monthly; every other day until 20 August 1987
  access: open download; CSV and GeoTIFF files, PNG images
  format: CSV, GeoTIFF, PNG
  homepage: 'https://nsidc.org/data/g02135/versions/4'
  cost: free; cite the Sea Ice Index, DOI 10.7265/a98x-0f50
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
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
    - title: Sea Ice Index, Version 4, user guide
      url: 'https://nsidc.org/sites/default/files/documents/user-guide/g02135-v004-userguide.pdf'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

The index is a quick look at hemisphere-wide change.[^1] Concentration is the share of each grid cell covered by ice; extent is the area where ice is present above a set concentration.[^3] Both come as images and as data values, produced the same way across the whole series so that it suits long-term trends.[^1] The trend and anomaly images use a 1981–2010 reference period.[^1] NSIDC advises the monthly product over the daily one for trend analysis: day-to-day variation is often weather, and errors in the daily product average out.[^1]

NSIDC keeps the data set at a "Basic" level of service because of funding limits, as its landing page explains.[^1] The data are free, and NSIDC asks that the index be cited.[^1]

The [Vitals](/vitals/) page here reads the daily extent files for each hemisphere and draws its own 1991–2020 mean per day of year.
