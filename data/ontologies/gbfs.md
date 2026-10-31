---
about:
  label: GBFS (General Bikeshare Feed Specification)
  description: >-
    The open standard in which shared bike, scooter, moped and car systems
    publish their stations, vehicles, availability and prices as JSON
    files; maintained by MobilityData.
  aliases:
    - GBFS
    - General Bikeshare Feed Specification
  tags:
    - bike share
    - shared mobility
    - scooters
    - live data
    - standards
    - data format
tool:
  form: open data standard
  group: Transport and crowds
  homepage: 'https://gbfs.org/'
  licence: CC BY 3.0
  cost: free
domains:
  - mobility
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: CC BY 3.0
  note: >-
    The specification's repository is under CC BY 3.0 Unported. Each feed
    states its own data licence; a feed that states none is CC0 under the
    specification.
provenance:
  origin: agent
  sources:
    - title: 'Home, General Bikeshare Feed Specification'
      url: 'https://gbfs.org/'
    - title: 'Get started, General Bikeshare Feed Specification'
      url: 'https://gbfs.org/learn/guide/'
    - title: 'Current Version, General Bikeshare Feed Specification'
      url: 'https://gbfs.org/documentation/reference/'
    - title: 'MobilityData/gbfs, GitHub (README)'
      url: 'https://github.com/MobilityData/gbfs'
    - title: 'MobilityData/gbfs LICENSE'
      url: 'https://github.com/MobilityData/gbfs/blob/master/LICENSE'
    - title: 'Mobility Database, The Global Catalog of GTFS, GTFS-Realtime & GBFS Feeds'
      url: 'https://mobilitydatabase.org/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The General Bikeshare Feed Specification (GBFS) is an open data standard for publishing the live state of shared mobility systems, docked or dockless: bikes, scooters, mopeds and shared cars.[^1,2] Mitch Vars created it in 2014 and NABSA adopted it, to standardise how bike share systems talk to trip planning apps; MobilityData has run it since 2019 and took it over formally in 2022.[^2] By its own catalogue, systems.csv, more than 1,500 services worldwide publish GBFS feeds.[^2]

A feed is a set of JSON files, each covering one aspect of a system.[^2] Some describe the system, its stations, its vehicle types and its prices.[^1,2,3] Others give how many vehicles and free docks each station has now, and where free-floating vehicles are and how charged they are.[^1,2] Further files carry alerts and the zones where riding or parking is restricted.[^2,3] Version 3.0 has 12 such files, some always required and some only in certain cases, and a manifest file lists where each of a publisher's datasets can be found.[^2] Static and live information sit in separate files.[^2] The live files should never be more than five minutes out of date, and every file carries a time-to-live, the number of seconds before it will be updated again; the makers advise refreshing station and vehicle status at least every 30 seconds.[^2,3] Requiring a login to read a feed does not comply with the specification, and every system must be listed in systems.csv to comply.[^2] Version 3.0 is current and 3.1 is a release candidate.[^4]

The specification recommends an open data licence for every feed, named in system_information.json by an SPDX identifier or a link to custom terms; a feed that names neither is under the Creative Commons public domain dedication (CC0).[^3] The specification's own repository is licensed CC BY 3.0 Unported.[^5] Feeds can be found in systems.csv and in MobilityData's Mobility Database, which catalogues GBFS feeds alongside GTFS ones.[^2,6]

For a model of a place, a GBFS feed says where shared bikes and docks are and how full each station is when it is read.[^2,3] It holds only the current state, so a record of how stations fill and empty over a day has to be built by reading it again and again.[^2]
