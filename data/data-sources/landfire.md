---
about:
  label: LANDFIRE
  description: >-
    Federal 30-metre maps of vegetation, wildland fuel and disturbance for
    the United States and its territories, updated each year and read
    directly by fire behaviour models.
  tags:
    - wildfire
    - fuels
    - vegetation
    - disturbance
    - fire behaviour
    - raster
datasource:
  coverage: conterminous United States, Alaska, Hawaii, Puerto Rico and the US Virgin Islands, and other insular areas
  resolution: 30 m pixels; LANDFIRE advises against using single pixels or small groups of them
  cadence: annual updates current to the previous year, released by region through the year; seasonal fuel models several times a year
  access: map viewer downloads by area, full-extent downloads, the LANDFIRE Product Service (REST API), image service, WCS/WMS and ArcGIS Online
  format: GeoTIFF rasters; multi-band Landscape GeoTIFF for fire models
  homepage: 'https://landfire.gov/'
open:
  source: unknown
  data: unknown
  api: 'yes'
  participation: partly
  note: Agencies and others can contribute disturbance and field data. The pages read do not state a licence or cost.
domains:
  - fire
  - ecology
relations:
  - predicate: answers
    target: questions/wildfire
  - predicate: alternative_to
    target: data-sources/ctrees-3d-fuels-model
    note: a national 30 m fuel map, against a 1 m lidar fuel model for three demonstration sites
provenance:
  origin: agent
  sources:
    - title: About LANDFIRE | LANDFIRE
      url: 'https://landfire.gov/about-landfire'
    - title: Data | LANDFIRE
      url: 'https://landfire.gov/data'
    - title: Fuel | LANDFIRE
      url: 'https://landfire.gov/fuel'
    - title: LANDFIRE 2025 Update | LANDFIRE
      url: 'https://landfire.gov/data/lf2025'
    - title: Landscape file | LANDFIRE
      url: 'https://landfire.gov/fuel/landscape'
    - title: LANDFIRE Product Service
      url: 'https://lfps.usgs.gov/'
    - title: Frequently Asked Questions (FAQs) | LANDFIRE
      url: 'https://landfire.gov/faqs'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; no licence or cost statement was found on the pages read'
  status: draft
---
LANDFIRE is an interagency data program for wildland fire management, led by the USDA Forest Service and the Department of the Interior.[^1] The project team includes the USGS Earth Resources Observation and Science (EROS) Center and The Nature Conservancy.[^1] Two Forest Service units, the Rocky Mountain Research Station and Forest Inventory and Analysis, also take part, with a KBR technical support contract.[^1] The program began out of concern about the number, severity and size of wildland fires, and the need for consistent national vegetation data.[^1]

It produces more than 25 map layers, a reference database and a set of vegetation models, describing the current and historical state of vegetation, fuel, fire regimes and disturbance.[^1] The vegetation layers distinguish more than 900 vegetation types.[^1] The fuel layers include fire behaviour fuel models, standard classes that describe the surface fuel a fire would burn through, in both the 13 Anderson and the 40 Scott and Burgan sets.[^1,3] Canopy layers give forest canopy cover, height, base height and bulk density.[^3] Historic fire regime layers estimate how often and how severely places burned before European settlement, and topographic layers describe the terrain.[^2] Disturbance layers classify disturbance events year by year. They are built from data that agencies submit and from satellite change detection checked by analysts.[^2,4]

The maps cover the conterminous United States, Alaska, Hawaii, Puerto Rico and the US Virgin Islands, and other insular areas.[^2] Pixels are 30 metres.[^2,7] LANDFIRE advises against reading single pixels or small groups of them.[^2,7] The products are meant for planning over large landscapes, such as significant parts of a state.[^2] They are not intended to replace local products.[^2,7]

LANDFIRE releases two kinds of version: a base map, a full remapping from satellite imagery and field plots, such as the LF 2016 Remap, and updates that bring the base map current for disturbance and regrowth.[^2] LANDFIRE aims to release an update every year, current to the previous year.[^4] LF 2025 accounts for disturbances through fiscal year 2025 and is released during 2026 region by region.[^4] It starts with the Southwest in spring and ends in the fall with the full conterminous extent, Hawaii, Puerto Rico and the Virgin Islands.[^4] In LF 2025 the fuel layers are updated for ten years of disturbance.[^4] Seasonally adjusted versions of the 40 fuel models are released several times a year, and from LF 2025 they are made from Harmonized Landsat Sentinel imagery.[^2,4]

Fire behaviour and fire effects models such as FARSITE and FlamMap read a Landscape GeoTIFF: one file with eight bands for elevation, slope, aspect, fuel model, canopy cover, canopy height, canopy base height and canopy bulk density.[^5] It replaced the older .LCP landscape format in 2024.[^5] Users can also change LANDFIRE's fuel rules for their area with the LANDFIRE Total Fuel Change Tool to make customised fuel layers.[^3]

The LANDFIRE Map Viewer cuts out an area of interest for download and asks for an email address.[^2,5] Whole regions can be downloaded at full extent.[^2] The LANDFIRE Product Service is a REST API, a web address that programs call.[^2,6] A request names the layers and the area, by longitude and latitude or by map zone, with an email address.[^6] It can also set the projection and a coarser resolution.[^6] LANDFIRE also offers image and WCS/WMS map services and ArcGIS Online layers.[^2]

Someone modelling wildfire for a large forest or watershed would download the landscape file for the area and run a spread model over it with local weather.[^5] The version year matters, since fires and fuel treatments after it are not in the map.[^4] LANDFIRE describes its layers as wall-to-wall reference data, not a replacement for local products.[^2,7]
