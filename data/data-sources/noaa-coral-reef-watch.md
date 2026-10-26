---
about:
  depiction: data-sources/noaa-coral-reef-watch.jpg
  depiction_credit: 'Bleaching Alert Area, 7-day maximum, 25 October 2026. NOAA Coral Reef Watch, public domain.'
  label: NOAA Coral Reef Watch
  description: >-
    NOAA programme that watches ocean temperatures from satellites every day
    and maps the heat stress that bleaches coral reefs, on a 5 km grid
    worldwide from 1985 to yesterday.
  aliases:
    - CRW
    - Degree Heating Week
    - CoralTemp
  tags:
    - coral reefs
    - coral bleaching
    - sea surface temperature
    - marine heatwaves
    - satellite
    - alerts
datasource:
  coverage: global ocean; the products monitor about 95% of the world's coral reefs directly
  resolution: 0.05° (about 5 km), daily
  cadence: daily, processed around midday US Eastern Time for the previous day; record from 1 January 1985
  access: free, public domain; image pages, NetCDF and image files over HTTP and FTP, the NOAA/NCEI data portal, ERDDAP and THREDDS servers, regional virtual station time series, email alerts
  format: NetCDF4, PNG images, text and CSV time series
  homepage: 'https://coralreefwatch.noaa.gov/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: partly
  licence: public domain
  note: Bleaching observations can be reported to the programme through its website.
domains:
  - water
  - ecology
  - climate
provenance:
  origin: agent
  sources:
    - title: NOAA Coral Reef Watch Homepage and Near Real-Time Products Portal
      url: 'https://coralreefwatch.noaa.gov/'
    - title: NOAA Coral Reef Watch Daily 5km Satellite Coral Bleaching Heat Stress Monitoring Products (Version 3.1)
      url: 'https://coralreefwatch.noaa.gov/product/5km/index.php'
    - title: NOAA Coral Reef Watch 5km Methodology Page
      url: 'https://coralreefwatch.noaa.gov/product/5km/methodology.php'
    - title: Disclaimer and Recommendations for Citing and Providing Credit to Coral Reef Watch
      url: 'https://coralreefwatch.noaa.gov/satellite/docs/recommendations_crw_citation.php'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Coral Reef Watch (CRW) is a NOAA programme, set up in 2000 and part of NOAA's satellite service NESDIS, that uses satellite, model and field data to warn coral reef managers of threats to reefs.[^1] Corals bleach when they lose the algae living in them that give them colour and most of their energy; a badly bleached coral is likely to sicken and die.[^1] Mass bleaching across wide areas has been seen since the early 1980s and is driven by long spells of unusually warm water.[^1,3] CRW's users are reef managers, monitoring networks, dive operators, researchers, teachers and the public.[^1]

The core is a daily global product suite on a 5 km grid (0.05 degree), version 3.1, running from 1 January 1985 to the previous day.[^2] It rests on CoralTemp, CRW's gap-free daily record of night-time sea surface temperature, which combines three satellite datasets.[^3] From it CRW derives a set of heat stress measures.[^2,3] The HotSpot is how far today's temperature is above the maximum monthly mean at that spot: the warmest month in the long-term average for 1985 to 2012.[^3] The Degree Heating Week (DHW) adds up HotSpots of 1 °C or more over the last 12 weeks, in units of °C-weeks.[^3] CRW reports that reef-wide bleaching tends to appear at about 4 °C-weeks, and that by 8 °C-weeks bleaching with deaths of heat-sensitive corals can be expected.[^3] The Bleaching Alert Area sums these up as stress levels from Watch and Warning up to Alert Levels 1 to 5, the last three added in December 2023 after the marine heatwaves of that year.[^1,3] Sea surface temperature, its anomaly and a 7-day trend are published too, with monthly and annual composites.[^2] CRW states that the products have detected every major mass bleaching event observed worldwide since 1997.[^1]

All CRW data are free and in the public domain, and CRW asks to be credited as "NOAA Coral Reef Watch".[^4] The daily products come as NetCDF files and images over HTTP and FTP, through NOAA's NCEI data portal, and through ERDDAP and THREDDS data servers at the Pacific Islands Ocean Observing System and NOAA CoastWatch, with guides for pulling out time series.[^2] Regional Virtual Stations give ready-made time series and heat stress gauges for reef regions, and a free email system sends satellite bleaching alerts.[^2] The methods are set out in Skirving and others, "CoralTemp and the Coral Reef Watch Coral Bleaching Heat Stress Product Suite Version 3.1", in Remote Sensing, 2020.[^4]

For someone modelling a reef, CRW gives a daily record of the heat the corals have lived through since 1985, to set against surveys of bleaching and death on the reef itself.[^1,2] Managers use the alerts to close dive and fishing sites during heatwaves, move corals from nurseries, and pick where restoration has the best chance.[^1] The 5 km grid works at or near the scale of a reef.[^2] Day-to-day values vary more at that resolution than on CRW's older 50 km grid, so CRW features a 7-day maximum of the alert levels rather than the single day.[^2]
