---
about:
  depiction: data-sources/nasa-gibs.jpg
  depiction_credit: 'Tropical Cyclone Idai in the Mozambique Channel, 11 March 2019, seen by VIIRS on Suomi NPP and shown in Worldview. NASA Worldview; place labels and coastlines from OpenStreetMap contributors and Natural Earth.'
  label: NASA GIBS and Worldview
  description: >-
    NASA's free map-tile service for more than 1,200 satellite imagery
    layers, many updated within hours of observation; Worldview is the
    browser viewer built on it.
  aliases:
    - Global Imagery Browse Services
    - GIBS
    - Worldview
    - NASA Worldview
    - Worldview Snapshots
  tags:
    - satellite imagery
    - near real-time
    - map tiles
    - WMTS
    - fires
    - global
    - open data
datasource:
  coverage: global, with Arctic and Antarctic polar projections
  resolution: each layer at the native resolution of its source data; true-colour MODIS layers at 250 m
  cadence: most layers daily, many within about 3.5 hours of observation; geostationary layers every 10 minutes for the last 90 days; some layers span almost 30 years
  access: free public web services (WMTS, WMS, Tiled WMS, GDAL); the Worldview and Worldview Snapshots browser tools
  format: JPEG and PNG image tiles; vector tiles for some layers
  homepage: 'https://www.earthdata.nasa.gov/engage/open-data-services-software/earthdata-developer-portal/gibs-api'
open:
  source: open
  data: open
  api: 'yes'
  participation: closed
  licence: NASA full and open data sharing; an acknowledgement is requested
  note: Worldview's code is on GitHub under the NASA Open Source Agreement 1.3; GIBS runs on NASA's open-source OnEarth server and Meta Raster Format.
domains:
  - climate
  - places
relations:
  - predicate: part_of
    target: data-sources/nasa-earthdata
    note: GIBS is one of the Earthdata services of NASA's Earth Science Data and Information System
  - predicate: answers
    target: questions/wildfire
    note: Worldview names wildfire management among the time-critical uses of its near real-time imagery
provenance:
  origin: agent
  sources:
    - title: 'Global Imagery Browse Services (GIBS) documentation: Introduction'
      url: 'https://nasa-gibs.github.io/gibs-api-docs/'
    - title: 'Global Imagery Browse Services APIs | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/engage/open-data-services-software/earthdata-developer-portal/gibs-api'
    - title: 'GIBS documentation: Access Basics'
      url: 'https://nasa-gibs.github.io/gibs-api-docs/access-basics/'
    - title: 'GIBS documentation: Available Visualizations'
      url: 'https://nasa-gibs.github.io/gibs-api-docs/available-visualizations/'
    - title: 'Worldview | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/data/tools/worldview'
    - title: 'nasa-gibs/worldview (GitHub)'
      url: 'https://github.com/nasa-gibs/worldview'
    - title: 'GIBS sample tile request, made 30 October 2026'
      url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/250m/6/13/36.jpg'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; NASA pages give the layer count as over 1,000 and over 1,200 and the delay as 3 to 5 hours and 3.5 hours, so the documentation figures are used'
  status: draft
---
The Global Imagery Browse Services (GIBS) are NASA's service for turning Earth observation data into ready-made map images.[^1] GIBS is part of NASA's Earth Science Data and Information System (ESDIS).[^1] It takes satellite data from NASA's data centres and science teams and renders each product as pictures at the native resolution of its source.[^1,4] These are stored as a tile pyramid, the same image cut into small squares at a series of zoom levels, which lets any part of the world be served quickly at any scale.[^1] Worldview is NASA's browser application for exploring that imagery.[^5]

The archive holds over 1,200 visualisations.[^4] Some are true-colour or false-colour pictures made by combining a satellite's spectral bands.[^4] Others colour a measured quantity on a scale, one colour per value or range, and some are vector layers.[^4] Utility layers add coastlines, graticules and water masks.[^4] Many are made by NASA's near real-time processing system, LANCE, and reach GIBS within 3.5 hours of the satellite passing; many products also run back to the start of their mission.[^4] Most imagery is updated daily, and some products span almost 30 years.[^2] Each layer is indexed by date, so a client asks for a place and a day.[^3]

GIBS serves its tiles through Open Geospatial Consortium standards, the common web protocols that GIS software and web map libraries speak: Web Map Tile Service (WMTS), Web Map Service (WMS), a tiled variant of WMS, and script access through the GDAL library.[^2,3] The WMTS addresses can also be used as a plain XYZ tile URL in tools such as ArcGIS Online.[^3] Imagery comes in four projections: geographic latitude-longitude, Web Mercator, and Arctic and Antarctic polar stereographic.[^2] Endpoints choose between near real-time, science-quality or best-available versions of each layer.[^3] Tiles are JPEG or PNG, and some layers are also available as vector tiles.[^4] The documented requests carry no key or login.[^3] A sample tile request on 30 October 2026 returned an image whose headers let any web page load it.[^7]

Worldview lets a user browse, compare, animate and download the GIBS layers on a computer or phone, and can be embedded in other sites.[^5] Its Events tab lists current wildfires, tropical storms, volcanic eruptions and other natural events.[^5] Geostationary layers come every ten minutes for the last 90 days.[^5] Worldview Snapshots is a lighter tool for downloading georeferenced images of an area with overlays of active fires, coastlines, borders and roads, meant for slow connections or for fetching the same area every day.[^5] Worldview is built on OpenLayers, and its code is on GitHub under the NASA Open Source Agreement 1.3; NASA encourages developers to build their own clients on GIBS, with Cesium, Leaflet, Google Maps and GDAL among those it names.[^5,6] GIBS itself runs on NASA's open-source OnEarth server and Meta Raster Format.[^1]

NASA promotes full and open sharing of the data and asks users of GIBS to acknowledge it with this line: "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS)."[^1]

For someone modelling a place, GIBS shows what the place looked like from space on a given day, so a flood's extent, a smoke plume or a burn scar can be set beside a model's output. Because the tiles are images, not measurements, analysis that needs the underlying values goes back to the source data through [NASA Earthdata](/data-sources/nasa-earthdata/); GIBS layers link to their source products in NASA's catalogue.[^4]
