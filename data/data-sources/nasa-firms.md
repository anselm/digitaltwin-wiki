---
about:
  label: NASA FIRMS (Fire Information for Resource Management System)
  description: >-
    NASA's free satellite fire detections for the whole world, within three
    hours of an overpass and within minutes over the US and Canada, with
    records back to 2000.
  aliases:
    - FIRMS
    - FIRMS US/Canada
  tags:
    - wildfire
    - active fire
    - hotspots
    - satellite
    - MODIS
    - VIIRS
    - near real-time
    - global
datasource:
  coverage: global; faster real-time and ultra real-time detections, and a Landsat fire product, for the United States and Canada
  resolution: one point per flagged pixel, about 1 km for MODIS and 375 m for VIIRS; Landsat detections at 30 m for much of North America
  cadence: each polar-orbiting satellite generally passes twice a day; near real-time data within 3 hours of observation, real-time within 30 minutes and ultra real-time within 5 minutes over the US and Canada; maps refresh every 5 minutes
  access: free; web map, email alerts, file downloads, WMS and an API that needs a free MAP_KEY (5,000 transactions per 10 minutes)
  format: CSV, shapefile, KML and text files; WMS; CSV from the API
  homepage: 'https://firms.modaps.eosdis.nasa.gov/'
open:
  source: unknown
  data: 'yes'
  api: 'yes'
  participation: 'no'
  note: >-
    NASA says it promotes full and open sharing of FIRMS data and imagery
    and asks for the credit "NASA FIRMS" and a stated acknowledgement; data
    are provided as is.
domains:
  - fire
relations:
  - predicate: answers
    target: questions/wildfire
  - predicate: part_of
    target: data-sources/nasa-earthdata
    note: FIRMS is part of NASA's LANCE near real-time system within the Earth Science Data and Information System
provenance:
  origin: agent
  sources:
    - title: NASA-FIRMS (home page)
      url: 'https://firms.modaps.eosdis.nasa.gov/'
    - title: FIRMS | NASA Earthdata
      url: 'https://www.earthdata.nasa.gov/data/tools/firms'
    - title: FIRMS FAQ | NASA Earthdata
      url: 'https://www.earthdata.nasa.gov/data/tools/firms/faq'
    - title: NASA-FIRMS API (area)
      url: 'https://firms.modaps.eosdis.nasa.gov/api/area/'
    - title: NASA-FIRMS API (map_key)
      url: 'https://firms.modaps.eosdis.nasa.gov/api/map_key/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the Earthdata pages blocked one fetcher and were read through a plain browser request'
  status: draft
---
The Fire Information for Resource Management System (FIRMS) is NASA's service for active fire data: points where a satellite has seen a fire or other heat source.[^1] It delivers them in near real time to fire managers and the public as maps, email alerts, files and web services.[^1] The University of Maryland built it in 2007 with funds from NASA's Applied Sciences Program and the UN Food and Agriculture Organization.[^2] It moved to NASA's near real-time system, LANCE, in 2012 and is run by NASA's Earth Science Data and Information System (ESDIS) project.[^1,2] A US/Canada version built with the USDA Forest Service opened in January 2021 and adds context layers from the National Interagency Fire Center, the National Weather Service, the Canadian Interagency Fire Centre and others.[^2]

The core data come from two instruments. MODIS, on NASA's Terra and Aqua satellites, flags pixels of about 1 km; VIIRS, on Suomi NPP, NOAA-20 and NOAA-21, flags pixels of about 375 m and picks up smaller fires and fires at night better.[^2,3] Each detection is the centre of a pixel that contains at least one fire, not the fire's own position or size, and several detections in a line usually mark a fire front.[^3] Every detection carries a confidence value and fire radiative power, the rate of heat given off, which is used as a measure of fire intensity.[^3] FIRMS also shows a Landsat fire product at 30 m for most of North America, provisional detections from geostationary weather satellites over the Americas, Europe, Africa and Asia, and satellite imagery.[^3] MODIS records go back to November 2000 and VIIRS to January 2012.[^3] FIRMS says Suomi NPP deliveries end on 2 November 2026 and users should move to NOAA-20 and NOAA-21.[^5]

The satellites generally pass over a place twice a day, more often near the poles.[^3] Worldwide, detections reach FIRMS within three hours of an overpass; over the United States and Canada a real-time version arrives within 30 minutes and an ultra real-time version within five.[^3] The fire maps refresh every five minutes, and files for the last 24 hours, 48 hours and 7 days, in shapefile, KML and CSV, every hour.[^3] Data for the last two months can be downloaded as text, and older data through the archive download tool.[^3]

Access is free. The API returns detections as CSV for a bounding box or the whole world, one to five days at a time, for a chosen satellite source.[^4] It needs a MAP_KEY, sent free to an email address, limited to 5,000 transactions in ten minutes.[^5] Downloading the daily text files needs an Earthdata Login.[^3] NASA says it promotes full and open sharing of FIRMS data, asks that images be credited "NASA FIRMS", and gives an acknowledgement for scientific papers; the data are provided as is.[^2,3]

The FAQ sets out what the data cannot do. A fire can be missed if it starts and ends between passes, is hidden by cloud, heavy smoke or tree canopy, or is too small or too cool; fires under a forest canopy are very unlikely to be seen.[^3] Not every detection is a vegetation fire: volcanoes and gas flares are also flagged, and the near real-time data do not say which.[^3] The points carry no information on cloud or missing data, so counting them without the other pixel classes can mislead.[^3] NASA does not recommend estimating burned area from them.[^3]

For a model of a fire-prone county or region, FIRMS is the record of where and when fires have burned since 2000 and a live feed of where they are burning now. The archive can show fire seasons, repeat burns and the places fires start, to set against fuel and land-cover layers such as [LANDFIRE](/data-sources/landfire/); the live feed can drive a situational map or alerts. The pixel-centre points are best read as "fire somewhere in this square", not as perimeters.
