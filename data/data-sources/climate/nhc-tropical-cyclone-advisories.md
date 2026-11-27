---
about:
  label: NHC and CPHC tropical cyclone advisories and GIS data
  description: >-
    NOAA's hurricane forecasts for the Atlantic and the eastern and central
    North Pacific: storm positions, forecast tracks and cones, wind fields
    and storm surge, as text and free GIS files.
  aliases:
    - NHC
    - CPHC
    - National Hurricane Center
    - Central Pacific Hurricane Center
    - hurricane cone
  tags:
    - hurricanes
    - tropical cyclones
    - forecast track
    - cone of uncertainty
    - storm surge
    - wind
    - GIS
    - Atlantic
    - Pacific
datasource:
  coverage: Atlantic, eastern North Pacific and central North Pacific basins; storm surge products for the Atlantic basin only
  resolution: per storm; forecast points at 12 to 120 hours, wind radii by quadrant, gridded wind and surge probabilities
  cadence: advisories normally every six hours, every three hours when coastal watches or warnings are in effect, and at any time for significant changes
  access: free, no key; web pages, text products, a JSON summary of active storms, GIS downloads and RSS and KML feeds
  format: fixed-format text, JSON, shapefile, KML/KMZ, GRIB2; HURDAT2 comma-delimited text for past storms
  homepage: 'https://www.nhc.noaa.gov/'
open:
  source: unknown
  data: 'yes'
  api: partly
  participation: 'no'
  licence: U.S. public domain (NWS terms)
  note: >-
    NWS information is in the public domain unless noted, provided it is
    not claimed as one's own, used to imply NOAA endorsement, or modified
    and presented as official. NHC says its GIS datasets are a convenience
    and support may not be timely.
domains:
  - climate
  - water
relations:
  - predicate: answers
    target: questions/weather-and-climate
  - predicate: answers
    target: questions/flooding
    note: storm surge watches, warnings and inundation forecasts
provenance:
  origin: agent
  sources:
    - title: NHC Tropical Cyclone Text Product Descriptions
      url: 'https://www.nhc.noaa.gov/aboutnhcprod.shtml'
    - title: Definition of the NHC Track Forecast Cone
      url: 'https://www.nhc.noaa.gov/aboutcone.shtml'
    - title: NHC Data in GIS Formats
      url: 'https://www.nhc.noaa.gov/gis/'
    - title: Tropical Cyclone Product Examples
      url: 'https://www.nhc.noaa.gov/productexamples/'
    - title: NHC Data Archive
      url: 'https://www.nhc.noaa.gov/data/'
    - title: Disclaimer (National Weather Service)
      url: 'https://www.weather.gov/disclaimer'
    - title: Worldwide Tropical Cyclone Centers
      url: 'https://www.nhc.noaa.gov/aboutrsmc.shtml'
    - title: NHC Mission & Vision
      url: 'https://www.nhc.noaa.gov/mission.shtml'
    - title: NHC current products JSON summary file, sample
      url: 'https://www.nhc.noaa.gov/productexamples/NHC_JSON_Sample.json'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; no storm was active on 30 October 2026, so the live files were seen empty and the JSON is described from NHC''s sample'
  status: draft
---
The National Hurricane Center (NHC) in Miami and the Central Pacific Hurricane Center (CPHC) in Honolulu are NOAA's forecast centres for tropical cyclones.[^7] Under the World Meteorological Organization's Tropical Cyclone Programme they are the regional centres for the Atlantic and eastern North Pacific (NHC) and the central North Pacific (CPHC); other countries' centres cover the rest of the world's oceans.[^7] NHC states its mission as issuing watches, warnings, forecasts and analyses of hazardous tropical weather to save lives and reduce property loss.[^8]

For every active storm the centres issue a set of advisories, normally every six hours, every three hours when coastal watches or warnings are in effect, and at any time when the storm or the warnings change significantly.[^1] The public advisory, written for a general audience, gives the storm's position, maximum sustained winds, motion and central pressure, and the coastal watches and warnings in force.[^1] It describes the forecast track and intensity and the hazards to land, such as storm surge, wind, rain, tornadoes and rip currents.[^1] The forecast/advisory is in a fixed format meant for software.[^1] It gives the reach of 34-, 50- and 64-knot winds in each quadrant around the storm, and forecasts of track, intensity and size from 12 to 120 hours ahead.[^1] Advisories can also be issued for a disturbance that is not yet a cyclone but could bring tropical-storm or hurricane conditions to land within 72 hours.[^1]

The forecast cone is the area swept by a set of circles along the forecast track, each sized so that two-thirds of NHC's official track errors over the previous five years fell inside it; it shows the probable track of the storm's centre.[^2] For 2026, based on 2021 to 2025 errors, the circle radius in the Atlantic grows from 25 nautical miles at 12 hours to 200 at 120 hours.[^2]

NHC publishes these forecasts as GIS data, free and without a key, in shapefile and KML/KMZ and some also in GRIB2.[^3] For all three basins the layers are:[^3]

- the advisory forecast track, cone and watches and warnings
- the wind field and forecast wind radii
- the preliminary best track, the path the storm has taken so far
- the earliest and most likely arrival times of tropical-storm-force winds
- the graphical tropical weather outlook
- wind speed probabilities

Storm surge products, including probabilistic surge, potential inundation, surge watches and warnings and peak surge, are offered for the Atlantic basin only.[^3] There are RSS feeds per basin and a KML feed of all active storms, and an archive by year back to 2008.[^3] A JSON file, CurrentStorms.json, lists active storms with their position, intensity, movement and links to each current product.[^4,9] Past storms are in HURDAT2, NHC's best-track database: six-hourly positions, maximum winds, central pressure and, from 2004, size, for the Atlantic from 1851 and the northeast and north central Pacific from 1949.[^5]

The information is in the public domain under NWS terms unless marked otherwise, on condition that users do not claim it as their own, imply NOAA endorsement, or alter it and present it as official.[^6] NHC says its GIS datasets are provided as a convenience and support for them may not always be available or timely.[^3]

For a model of a coastal place in hurricane country, the live GIS layers put a storm's forecast track, wind field and surge forecast on the same map as roads, buildings and shelters. HURDAT2 gives the place's storm history, for estimating how often storms of a given strength pass or for replaying past landfalls. The cone describes where the centre is likely to go, so a model of who is exposed needs the wind radii, wind probabilities and surge layers as well.
