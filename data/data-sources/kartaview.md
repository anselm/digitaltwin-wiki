---
about:
  label: KartaView
  description: >-
    Grab's street-level photo platform, collected by volunteers with phones
    and cameras to help improve OpenStreetMap; imagery under CC BY-SA 4.0.
  aliases:
    - OpenStreetCam
  tags:
    - street-level imagery
    - photos
    - OpenStreetMap
    - Grab
    - open data
datasource:
  coverage: worldwide wherever contributors have recorded; no coverage figures found on its pages
  resolution: individual geolocated photos in sequences; 360-degree imagery for some places
  cadence: continuous as contributors upload; photos public after privacy blurring, which can take one to two days
  access: free; public API endpoints for photos, sequences and coverage tiles need no token, uploads and user data need an account
  format: JPEG photos; JSON API; map tiles of coverage
  homepage: 'https://kartaview.org/'
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: imagery and 3D spatial data CC BY-SA 4.0, credited "© Grab and KartaView Contributors"; code MIT
  note: >-
    The documentation gives api.openstreetcam.org as the API host; on 30
    October 2026 the documented photo search also answered without a token
    at api.kartaview.org.
domains:
  - places
relations:
  - predicate: alternative_to
    target: data-sources/mapillary
    note: both hold street-level photos contributed by the public
  - predicate: alternative_to
    target: data-sources/panoramax
    note: both hold street-level photos contributed by the public
  - predicate: contributes_to
    target: data-sources/openstreetmap-osm
    note: KartaView collects imagery to help the OpenStreetMap community improve its map
provenance:
  origin: agent
  sources:
    - title: KartaView (home page)
      url: 'https://kartaview.org/'
    - title: 'KartaView Terms and Conditions (effective 13 December 2019, last modified 17 June 2025)'
      url: 'https://kartaview.org/terms'
    - title: KartaView Documentation (Authentication)
      url: 'https://kartaview.org/doc'
    - title: kartaview (GitHub organisation)
      url: 'https://github.com/kartaview'
    - title: 'KartaView Tools (upload-scripts README)'
      url: 'https://github.com/kartaview/upload-scripts'
    - title: 'KartaView API photo search, read 30 October 2026'
      url: 'https://api.kartaview.org/2.0/photo/?lat=-7.7928&lng=110.3657&zoomLevel=15'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the terms and documentation pages render only in a browser and were read through headless Chromium'
  status: draft
---
Anyone can contribute street-level photos to KartaView with a smartphone and its open-source apps, and anyone can use them.[^1] It is offered by Grabtaxi Holdings Pte. Ltd. (Grab) under Singapore law, and its terms say KartaView collects, stores and distributes georeferenced street-view imagery and spatial 3D data to help the OpenStreetMap community improve its map.[^2] Use is free of charge.[^2] Its documented API and its photo storage sit at openstreetcam.org addresses, and its GitHub organisation holds a repository named openstreetcam.org.[^3,4,6]

Contributors record with the KartaView app or a GPS-enabled camera such as a recent GoPro, mounted to see the road ahead from a car, motorbike or bike, and upload camera photos with a command-line tool.[^1,5] Recordings at night or blurred ones are rejected.[^1] Computer vision blurs faces and number plates, which can take one to two days before the photos are public.[^1] KartaView detects features such as signs, lanes and road curvature in the photos.[^1] It has also released a 360-degree imagery dataset of Yogyakarta, Langkawi and Krabi collected by GrabMaps with its KartaCam2 camera, and contributors can link a Mapillary account so that one upload appears on both platforms.[^1]

The API serves photos, sequences, coverage map tiles and searches by location without a token; uploads, user profiles and private content need an access token, obtained by signing in with Google, Facebook or OpenStreetMap.[^3] The documentation also covers 3D and point-cloud uploads and viewing.[^3] Each photo record gives its position, time, heading, GPS accuracy, size and links to the processed image.[^6] The home page points to plugins for the iD and JOSM map editors.[^1]

The terms license the street images and 3D spatial data under Creative Commons Attribution-ShareAlike 4.0 and the code under the MIT licence.[^2] Anyone may copy, distribute and adapt the data if they follow the licence and use the credit "© Grab and KartaView Contributors".[^2] Grab gives no guarantee of the accuracy of the content and may suspend access at any time.[^2]

For someone modelling a road network or a neighbourhood, KartaView is another source of dated street photos, licensed for reuse and for OpenStreetMap work, and worth checking where Mapillary or Panoramax are thin.
