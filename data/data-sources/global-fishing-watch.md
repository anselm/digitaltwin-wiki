---
about:
  label: Global Fishing Watch
  description: >-
    Nonprofit that estimates fishing worldwide from ships' position
    broadcasts and satellite imagery, and publishes it on a map, through
    APIs and as downloads.
  tags:
    - fishing
    - vessels
    - AIS
    - ocean
    - satellite imagery
    - marine protected areas
datasource:
  coverage: global ocean, from 2012
  resolution: apparent fishing hours on grids of 0.1 or 0.01 degree, hourly to yearly; vessel-level tracks and events
  cadence: map and APIs near real time with a 72-hour delay; download portal holds periodic static snapshots
  access: free registration and terms of use; map downloads, REST APIs with a token, R and Python packages, data download portal
  format: GeoTIFF, CSV and JSON from the map; API responses; versioned datasets with README files
  homepage: 'https://globalfishingwatch.org/'
open:
  source: partly
  data: partly
  api: 'yes'
  participation: unknown
  licence: data and content CC BY-NC 4.0 (non-commercial; commercial use by arrangement); code generally Apache 2.0
domains:
  - water
  - ecology
  - food
provenance:
  origin: agent
  sources:
    - title: A Vision for Our Global Ocean - Global Fishing Watch
      url: 'https://globalfishingwatch.org/about-us/'
    - title: Downloadable Fishing Effort Data | Global Fishing Watch
      url: 'https://globalfishingwatch.org/dataset-and-code-fishing-effort/'
    - title: Our Apis - Explore and visualize ocean data | Global Fishing Watch
      url: 'https://globalfishingwatch.org/our-apis/'
    - title: Global Fishing Watch Data Availability - Global Fishing Watch
      url: 'https://globalfishingwatch.org/global-fishing-watch-data-availability/'
    - title: 'Global Fishing Watch Data: Download Ocean Activity'
      url: 'https://globalfishingwatch.org/datasets-and-code/'
    - title: Terms of Use | Global Fishing Watch
      url: 'https://globalfishingwatch.org/terms-of-use/'
    - title: Access data from Global Fishing Watch APIs • gfwr
      url: 'https://globalfishingwatch.github.io/gfwr/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; the API documentation page renders by script and was read through the gfwr package page instead'
  status: draft
---
Global Fishing Watch was founded in 2015 by Oceana, an ocean conservation organisation, SkyTruth, which uses satellite data to protect the environment, and Google.[^1] It became an independent international nonprofit in June 2017.[^1] It publishes maps and data about human activity at sea.[^1]

Its main dataset is apparent fishing activity.[^2] It is built from AIS: through the automatic identification system, ships broadcast their identity and position by radio.[^2] Vessel monitoring system (VMS) data shared by some countries are added.[^2] A model trained on vessel tracks labelled by experts looks at speed, depth, distance from shore and movement over time and classifies each position as fishing or not; the hours at fishing positions, summed over an area and period, are the apparent fishing hours.[^2] Global Fishing Watch calls all of it "apparent", rather than certain.[^2,6] The record goes back to 2012.[^2]

Other datasets cover vessel presence for all vessel types, events (encounters between vessels, loitering, port visits, gaps when AIS was switched off, and fishing events), and vessel identity drawn from AIS and public registries.[^3,7] Vessel detections from synthetic aperture radar (SAR) satellite imagery find industrial vessels and offshore infrastructure, classified with deep learning; vessels can be filtered by whether they match an AIS broadcast, and infrastructure is labelled oil, wind or unknown.[^3] Vessel detections from Sentinel-2 imagery are listed as well.[^4]

Global Fishing Watch describes what the data miss. AIS covers only a small fraction of the world's estimated 3.3 million fishing vessels; the International Maritime Organization requires it on most vessels over 36 metres, so smaller boats may be missing.[^2] Vessels using AIS are mostly from upper and upper-middle income countries.[^2] Reception varies by place, and part of the rise in activity over the years reflects more receivers rather than more fishing; receivers carried on board vessels, added around 2022, improved coverage in busy waters around China and Southeast Asia.[^2]

On the map and through the APIs the data run close to real time, with a 72-hour delay.[^4] The 4Wings API returns fishing hours on a grid of 0.1 or 0.01 degree, by hour, day, month or year, grouped by flag, gear type or vessel, for date ranges of up to 366 days per request.[^7] The map can export filtered data as GeoTIFF, CSV or JSON.[^4] The data download portal holds static, versioned snapshots tied to publications, with documentation of model versions and accuracy.[^2,4] There are packages for R (gfwr) and Python.[^3] Global Fishing Watch reports that more than 200 organisations in nearly 70 countries have used its APIs.[^3]

Access needs a free self-service registration, agreement to the terms, taking part in follow-up surveys, and acknowledgement in anything published.[^5] API users request a token and give a short description of the impact they intend.[^3,7] Data and images are licensed for non-commercial use under CC BY-NC 4.0, and commercial use needs permission.[^6] Code is generally released under Apache 2.0.[^6] Scraping the site is not allowed.[^6]

Someone modelling a stretch of coast or a marine protected area could pull fishing hours by gear type and flag for its waters over several years and set them against habitat maps or closures.[^7] Smaller vessels may not appear in the AIS data, and VMS data come only from countries that agree to share them.[^2] The World Resources Institute's Ocean Watch platform, for example, shows Global Fishing Watch fishing effort by country.[^3]
