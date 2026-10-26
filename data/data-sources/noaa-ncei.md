---
about:
  label: NOAA NCEI
  description: >-
    NOAA's National Centers for Environmental Information, the US archive of
    weather, climate, ocean, coastal and geophysical data; free downloads of
    station records, climate normals and much more.
  aliases:
    - National Centers for Environmental Information
  tags:
    - weather
    - climate
    - weather stations
    - climate normals
    - ocean
    - archive
datasource:
  coverage: global, with the fullest records for the United States
  resolution: varies by dataset; station records for GHCNd and the Climate Normals
  cadence: continuous; GHCNd is updated daily and the Climate Normals every ten years
  access: free download through Climate Data Online, NCEI Data Access, NOAA OneStop and APIs; certified copies for legal use are paid
  format: CSV, JSON, NetCDF, PDF, shapefile and plain text, varying by dataset
  homepage: 'https://www.ncei.noaa.gov/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: closed
  note: Access is free; the pages read do not state a licence.
domains:
  - climate
  - water
relations:
  - predicate: answers
    target: questions/weather-and-climate
  - predicate: alternative_to
    target: data-sources/era5
    note: measured station records against a gridded reanalysis
provenance:
  origin: agent
  sources:
    - title: 'National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/'
    - title: 'About | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/about-us'
    - title: 'Access | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/access'
    - title: "Climate Data Online (CDO) - The National Climatic Data Center's (NCDC) Climate Data Online (CDO) provides free access to NCDC's archive of historical weather and climate data in addition to station history information."
      url: 'https://www.ncdc.noaa.gov/cdo-web/'
    - title: 'Global Historical Climatology Network daily (GHCNd) | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-daily'
    - title: 'U.S. Climate Normals | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals'
    - title: 'NCEI Data Service API User Documentation | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation'
    - title: 'Web Services API (version 2) Documentation | Climate Data Online (CDO)'
      url: 'https://www.ncdc.noaa.gov/cdo-web/webservices/v2'
    - title: 'Cloud Migration Offers Bright Future for NOAA''s Data | News | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/news/cloud-migration'
    - title: 'NCEI Cloud Migration Frequently Asked Questions | News | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/news/cloud-migration-FAQ'
    - title: 'Products | National Centers for Environmental Information (NCEI)'
      url: 'https://www.ncei.noaa.gov/products'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The National Centers for Environmental Information (NCEI) are the data archive of the US National Oceanic and Atmospheric Administration (NOAA), within its satellite and data service, NESDIS.[^9] It keeps oceanic, atmospheric and geophysical data, and its products run from weather station records, severe weather and climate monitoring to ocean temperature, marine geology, paleoclimate and space weather.[^1,11] Data and sites still at older addresses, ncdc.noaa.gov, ngdc.noaa.gov and nodc.noaa.gov, are moving to ncei.noaa.gov.[^10] The archive and its backup hold more than 60 petabytes, and it adds over 229 terabytes a month from more than 130 observing platforms.[^1,2]

Two of its datasets are the usual starting point for a place. The Global Historical Climatology Network daily (GHCNd) gathers daily records from more than 100,000 land stations in 180 countries and territories: highest and lowest temperature, rainfall, snowfall and snow depth, though about half the stations report only precipitation.[^5] Records run from under a year to more than 175 years, are updated daily, and pass a common set of quality checks.[^5] The US Climate Normals give typical conditions, the 30-year averages and statistics of temperature, precipitation and other variables, for almost 15,000 US stations; the current set covers 1991 to 2020, and monthly gridded normals cover the contiguous US.[^6]

Access is free.[^4] Climate Data Online lets a user find past weather by station, ZIP code, city, county, state or country, and certified copies for legal use can be ordered for a fee.[^4] NCEI Data Access offers downloads and subsets in CSV, PDF, shapefile and other formats, and NOAA OneStop searches more than 104,000 collections across NOAA.[^3] There are two APIs: the NCEI Access Data Service, which returns CSV, JSON, PDF or NetCDF depending on the dataset, and the Climate Data Online web services, which need a free token and allow five requests a second and 10,000 a day.[^7,8] NOAA is moving NCEI's data and applications to Amazon's cloud through spring 2027; addresses on ncei.noaa.gov stay the same, bulk folders move to S3, and many datasets will also come in cloud formats such as Zarr and Parquet.[^9,10] The FAQ says no datasets will be retired by the move, though several were retired in the preceding 18 months.[^10]

For someone modelling a place, NCEI holds the measured weather record: daily temperature and rainfall from the nearest stations to calibrate or check a model, and the Climate Normals as the baseline that a heat, flood or crop study compares its future against.[^5,6] Station records are points; for a continuous grid of past weather see [ERA5](/data-sources/era5/), and for the wider question see [Weather and climate](/questions/weather-and-climate/).
