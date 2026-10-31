---
about:
  label: GTFS and GTFS Realtime
  description: >-
    Open standard for public transport data: routes, stops, timetables and
    fares (GTFS Schedule), and live delays, vehicle positions and alerts
    (GTFS Realtime). Maintained by MobilityData.
  aliases:
    - GTFS
    - General Transit Feed Specification
    - GTFS Schedule
    - GTFS Realtime
    - GTFS-RT
  tags:
    - public transport
    - transit
    - timetables
    - vehicle positions
    - standards
    - data format
tool:
  form: open data standard
  group: Transport and crowds
  homepage: 'https://gtfs.org/'
  licence: Apache-2.0
  cost: free
domains:
  - mobility
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: Apache-2.0
  note: >-
    The specification lives in the google/transit GitHub repository under
    Apache 2.0; the gtfs.org site is CC BY 3.0. Each agency sets the terms
    of its own feeds.
relations:
  - predicate: answers
    target: questions/after-a-closure
provenance:
  origin: agent
  sources:
    - title: 'Home, General Transit Feed Specification'
      url: 'https://gtfs.org/'
    - title: 'What is GTFS?, General Transit Feed Specification'
      url: 'https://gtfs.org/getting-started/what-is-GTFS/'
    - title: 'About, General Transit Feed Specification'
      url: 'https://gtfs.org/about/'
    - title: 'Overview, General Transit Feed Specification'
      url: 'https://gtfs.org/documentation/overview/'
    - title: 'google/transit, GitHub'
      url: 'https://github.com/google/transit'
    - title: 'Feed Entities: Overview, General Transit Feed Specification'
      url: 'https://gtfs.org/documentation/realtime/feed-entities/overview/'
    - title: 'GTFS Realtime Reference, General Transit Feed Specification'
      url: 'https://gtfs.org/documentation/realtime/reference/'
    - title: 'Mobility Database, The Global Catalog of GTFS, GTFS-Realtime & GBFS Feeds'
      url: 'https://mobilitydatabase.org/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Transit agencies use the General Transit Feed Specification (GTFS) to tell passengers' software, most often trip planners, what they run and when.[^1,2] More than 10,000 agencies in over 100 countries use it, by gtfs.org's count.[^1] It is maintained by MobilityData, a non-profit, with the help of the community; the specification itself lives in the google/transit repository on GitHub under the Apache 2.0 licence, and the gtfs.org site is CC BY 3.0.[^3,5]

GTFS began as a collaboration between TriMet in Portland, Oregon, and Google, to get TriMet's timetables into Google Maps, and was first called the Google Transit Feed Specification.[^3] It took its present name in 2010 as other software took it up.[^3] GTFS Realtime was added in 2011, and MobilityData was set up in 2019 to maintain it.[^3] It was designed to inform passengers about service, not to describe everything needed to run a transit operation.[^3]

It has two parts. A GTFS Schedule feed is a ZIP file of simple text files.[^4] The basic seven are agency, routes, trips, stops, stop_times, calendar and calendar_dates.[^4] More than 15 optional files add fares, transfers, translations, paths inside stations and other details, and a GeoJSON file draws the areas served by demand-responsive services.[^4] A GTFS Realtime feed is encoded in Google's Protocol Buffers format, fetched with an ordinary web request, and always tied to a Schedule feed.[^4,7] It carries four kinds of update.[^6] Trip updates give predicted arrivals, delays, cancellations and reroutes.[^6] Service alerts describe a closed station or a disrupted line.[^6] Vehicle positions say where each vehicle is, with its speed, odometer reading and congestion level.[^4,6] Trip modifications describe detours that affect a set of trips.[^6]

Feeds are found through MobilityData's Mobility Database, an open catalogue of more than 6,000 GTFS, GTFS Realtime and GBFS feeds from over 100 countries with a REST API, which also links validators for GTFS and GTFS Realtime feeds.[^8] Beyond trip planners, software uses GTFS to make timetables, to visualise data, for accessibility and for planning analysis.[^3] For a model of a place, a Schedule feed is the public transport network: where the stops are, which routes serve them and when.[^4] A Realtime feed adds where the vehicles are right now.[^6]
