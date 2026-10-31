---
about:
  label: Mapillary
  description: >-
    Meta's street-level photo platform: pictures people take with phones and
    action cameras, joined into street views, with detected traffic signs
    and street features as map data.
  tags:
    - street-level imagery
    - photos
    - traffic signs
    - computer vision
    - OpenStreetMap
    - global
datasource:
  coverage: global, wherever contributors have photographed; the about page gives 190 countries
  resolution: individual geolocated photos and sequences, with original and computed positions; map features located from several images
  cadence: continuous as contributors upload
  access: web map without code; API and vector tiles need a registered application's client token
  format: images as thumbnails up to 2048 px wide and the original; vector tiles; JSON entity API; points and traffic signs downloadable as GeoJSON
  homepage: 'https://www.mapillary.com/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: open
  licence: imagery CC BY-SA 4.0 unless Mapillary indicates otherwise; API and services under Mapillary's terms of use
  note: >-
    The terms allow some content to be offered under other licences such as
    CC BY-NC-SA, limit commercial use to listed purposes, and require
    applications to show the Mapillary logo with a link back.
domains:
  - places
relations:
  - predicate: alternative_to
    target: data-sources/panoramax
    note: both hold street-level photos contributed by the public
  - predicate: alternative_to
    target: data-sources/kartaview
    note: both hold street-level photos contributed by the public
  - predicate: contributes_to
    target: data-sources/openstreetmap-osm
    note: any Mapillary image may be used to derive data for OpenStreetMap, and the main OSM editors show its imagery
provenance:
  origin: agent
  sources:
    - title: About (Mapillary)
      url: 'https://www.mapillary.com/about'
    - title: 'Terms of Use (Mapillary, effective February 15, 2024)'
      url: 'https://www.mapillary.com/terms'
    - title: API Documentation (Mapillary API v4)
      url: 'https://www.mapillary.com/developer/api-documentation'
    - title: CC-BY-SA license for open data (Mapillary Help Center)
      url: 'https://help.mapillary.com/hc/en-us/articles/115001770409-CC-BY-SA-license-for-open-data'
    - title: Images and Data for OpenStreetMap (Mapillary)
      url: 'https://www.mapillary.com/osm'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Anyone can photograph streets for Mapillary with a smartphone or action camera and upload the pictures.[^1] Computer vision connects the images across time and space into street-level views and extracts map data from them.[^1] It started in 2013 and joined Facebook, now Meta, in 2020; its about page says members have contributed more than two billion images.[^1] The service is provided by Meta Platforms Ireland Limited.[^2]

Each image carries its capture time, compass angle and position, both as the camera recorded it and as computed after image processing.[^3] Each image belongs to a sequence, and images can be fetched as thumbnails up to 2,048 pixels wide or at original size.[^3] From the images Mapillary detects objects such as traffic signs and other street features; a map feature is an object located from detections in several images, and the detections in a single image, with their outlines in the picture, can also be read.[^3] The full lists of point features and traffic signs are published with the API documentation.[^3]

The API has two parts: vector tiles for drawing coverage and map features on a map, and entity endpoints for the details of each image, sequence, map feature or detection.[^3] Every request needs an access token, and a developer must register each application to get one.[^2,3] The entity endpoints search only small areas: since January 2026 a bounding box must be smaller than 0.01 degrees square, and the documentation points to the Mapillary Python SDK for larger areas.[^3] A radius search added in April 2026 finds images within 50 metres of a point.[^3] Without code, points and traffic signs visible on the web map can be downloaded as GeoJSON.[^3]

Images are shared under CC BY-SA 4.0 unless Mapillary indicates otherwise, and the terms say some content may be offered under other licences such as CC BY-NC-SA.[^2] The help centre gives the attribution it expects: the image title linked to the image, the contributor's username linked to their profile, and the licence.[^4] An application that serves Mapillary images from its own servers, or shows data extracted from them, must display the Mapillary logo and link back.[^2] Applications must add something of their own; redistributing the content alone is not allowed.[^2] Commercial use is allowed only for the purposes the terms list, such as building products, maps, studies and datasets or doing work for clients, and needs safeguards against re-identifying people or unblurring images.[^2] Mapillary blurs faces and vehicle licence plates, and the terms forbid unblurring or re-identifying anyone.[^2] Anyone may use any Mapillary image to derive data for OpenStreetMap, and its imagery and detections appear in the Rapid, iD and JOSM editors.[^5]

For someone modelling a street, neighbourhood or road network, Mapillary is a way to see what is on the ground and when it was photographed: kerbs, signs, shopfronts, crossings, street furniture, the state of a road. The detected traffic signs and points can seed a layer of street assets, and the photos let a modeller check a map or an [OpenStreetMap](/data-sources/openstreetmap-osm/) edit against the street itself. The photos come from whoever has contributed them, so their dates and gaps vary from street to street.
