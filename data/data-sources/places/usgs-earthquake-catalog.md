---
about:
  label: USGS earthquake feeds and ComCat
  description: >-
    The USGS's free live feeds and searchable catalogue of earthquakes
    worldwide (ComCat): location, depth and magnitude, and for larger events
    shaking and impact products.
  aliases:
    - ComCat
    - ANSS Comprehensive Earthquake Catalog
    - USGS earthquake feeds
    - Latest Earthquakes
  tags:
    - earthquakes
    - seismic
    - hazards
    - catalogue
    - real-time feed
    - GeoJSON
    - global
datasource:
  coverage: global; the Latest Earthquakes view shows magnitude 2.5 and up in the US and 4.5 and up elsewhere
  resolution: per event; a point with depth, magnitude and associated products
  cadence: real-time feeds for the past hour, day, 7 days and 30 days, updated every minute; catalogue records are revised as networks refine them
  access: free, no key; real-time feeds, an FDSN event web service (up to 20,000 events a query), an interactive search, email notifications, and wrapper libraries for Python, Matlab and R
  format: GeoJSON, CSV, KML, QuakeML, ATOM and plain text
  homepage: 'https://earthquake.usgs.gov/data/catalog/'
open:
  source: unknown
  data: 'yes'
  api: 'yes'
  participation: partly
  licence: U.S. public domain for USGS-authored data
  note: >-
    USGS asks for the credit "U.S. Geological Survey". Seismic networks and
    agencies contribute products to ComCat through the Product Distribution
    Layer.
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: ANSS Comprehensive Earthquake Catalog (ComCat)
      url: 'https://earthquake.usgs.gov/data/catalog/'
    - title: Feeds & Notifications
      url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/'
    - title: GeoJSON Summary Format
      url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php'
    - title: API Documentation - Earthquake Catalog
      url: 'https://earthquake.usgs.gov/fdsnws/event/1/'
    - title: How Products Work in ComCat
      url: 'https://earthquake.usgs.gov/data/catalog/products.php'
    - title: ComCat Data Availability
      url: 'https://earthquake.usgs.gov/data/catalog/availability.php'
    - title: Latest Earthquakes | U.S. Geological Survey
      url: 'https://www.usgs.gov/tools/latest-earthquakes'
    - title: Copyrights and Credits | U.S. Geological Survey
      url: 'https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits'
    - title: ANSS - Advanced National Seismic System
      url: 'https://www.usgs.gov/programs/earthquake-hazards/anss-advanced-national-seismic-system'
    - title: The ANSS Developer's Corner
      url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/developers.php'
    - title: Search Earthquake Catalog
      url: 'https://earthquake.usgs.gov/earthquakes/search/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the feed lifecycle policy page linked from the feed pages returned 404 and was not read; the availability table is dated October 2020'
  status: draft
---
The U.S. Geological Survey's Earthquake Hazards Program publishes what is known about earthquakes as they happen and keeps the record afterwards in the ANSS Comprehensive Earthquake Catalog (ComCat).[^1] ComCat holds earthquake source parameters, such as time, location, depth and magnitude, and related products contributed by seismic networks around the world.[^1] The national and regional seismic networks of ANSS, the Advanced National Seismic System, run over 3,000 seismic stations across the United States.[^9]

An event in ComCat is a bundle of products. Each network or system contributes its own origin, magnitude, ShakeMap or other product, and ComCat groups those that describe the same earthquake into one event, keeping every version.[^5] Where several products of one type exist, it picks a preferred one, favouring the network that is authoritative for that region and then the latest update.[^5] Besides the basic parameters, events can carry observations, impact estimates and forecasts: ShakeMap maps of ground shaking, community intensity reports from "Did You Feel It?", and PAGER alert levels, all of which the search can filter on.[^4,5,11] What an event holds varies by magnitude, region, contributor and processing status.[^5] In regions with enough stations, ANSS issues a ShakeMap within minutes.[^9]

Coverage is global, with different thresholds. The USGS's Latest Earthquakes map shows earthquakes of magnitude 2.5 and up in the US and 4.5 and up around the world.[^7] The catalogue goes back much further than instruments: its contributing catalogues, as listed in October 2020, include historical lists that start in the 1600s and the ISC-GEM global catalogue from 1900.[^6]

There are three ways in, all free and without a key. The real-time feeds cover the past hour, day, 7 days and 30 days, each split into significant earthquakes and magnitude 4.5+, 2.5+, 1.0+ and all, and are updated every minute.[^3] They come as GeoJSON, CSV, KML, QuakeML and ATOM, and a free notification service sends alerts to an email address or phone.[^2,3] The catalogue search API implements the FDSN Event Web Service specification, filters by time, area, depth, magnitude, alert level and contributor, returns QuakeML, GeoJSON, CSV, KML or text, and refuses queries of more than 20,000 events.[^4] USGS asks automated applications to use the feeds rather than the API wherever they can.[^4] There are wrapper libraries for Python, Matlab and R.[^10] Data authored or produced by the USGS are in the U.S. public domain, and USGS asks for the credit "U.S. Geological Survey".[^8]

For someone modelling a city, coast or region, ComCat is the place's earthquake history: where quakes cluster, how deep, how often each size occurs, and which ones shook hard enough to be felt or cause damage. The CSV and GeoJSON outputs load directly into a GIS or a notebook, and the feeds can drive a live layer. For a past event, the ShakeMap and PAGER products give shaking and impact estimates that a building or infrastructure model can be checked against.
