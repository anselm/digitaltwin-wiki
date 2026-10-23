---
about:
  label: Microsoft Road Detections
  description: >-
    Open dataset from Microsoft of 54.2 million kilometres of roads worldwide,
    traced by a neural network from Bing Maps aerial and satellite imagery and
    released as GeoJSON by world region.
  tags:
    - roads
    - road network
    - aerial imagery
    - openstreetmap
    - machine learning
datasource:
  homepage: 'https://github.com/microsoft/RoadDetections'
  coverage: worldwide, split into 19 regions following the United Nations geoscheme, plus a single World file
  resolution: detected from imagery at 1 metre per pixel; each road carries an approximate width in metres
  cadence: no schedule stated; the current files are dated 28 April 2025; road dates follow the underlying imagery and are not given per road
  access: free download of one zip file per region from a public web address; the World file is about 16.5 GB
  format: tab-separated text, each row a country code and a GeoJSON road line with a WidthMeters property
  cost: free
domains:
  - mobility
  - places
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: ODbL for the data; no licence is stated for the model and geometry code
  note: The repository's LICENSE file covers the data only. The trained model and the C# geometry generation code were added to the repository in October 2025.
provenance:
  origin: agent
  sources:
    - title: 'microsoft/RoadDetections (README)'
      url: 'https://github.com/microsoft/RoadDetections'
    - title: 'microsoft/RoadDetections LICENSE'
      url: 'https://github.com/microsoft/RoadDetections/blob/main/LICENSE'
    - title: 'microsoft/RoadDetections model/README.md'
      url: 'https://github.com/microsoft/RoadDetections/blob/main/model/README.md'
    - title: 'microsoft/RoadDetections geomgen/README.md'
      url: 'https://github.com/microsoft/RoadDetections/blob/main/geomgen/README.md'
    - title: 'microsoft/RoadDetections commit history'
      url: 'https://github.com/microsoft/RoadDetections/commits/main'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Bing Maps found these roads by machine. Its imagery, which includes pictures from Maxar and Airbus, went through a neural network, and the roads it found are free to download.[^1] Microsoft gives its reason for releasing them as support for the OpenStreetMap community.[^1]

The work happens in two steps.[^1] A convolutional network, a kind of image model, marks which pixels in a 1 metre image are road.[^1] A second stage of ordinary algorithms thins those pixels to centre lines, joins the gaps, builds a connected network and stitches tiles together.[^1,4] The repository reports 85 per cent precision and 83 per cent recall for the pixel step, and says the roads that passed further checks reached 95 per cent precision before going into Microsoft's own maps.[^1]

The data comes as one zip file per region of the world, from Northern America at about 13 million kilometres to Eastern Asia at about 150 thousand.[^1] Each line of a file holds a three-letter country code and one road as GeoJSON, with its approximate width in metres.[^1] A road is as old as the imagery it was found in, and because Bing imagery is stitched from many sources, Microsoft says exact dates are hard to know.[^1]

For a model of a place, these roads can fill gaps in [OpenStreetMap](/data-sources/openstreetmap-osm/) for access, evacuation or service planning. They are detections rather than a surveyed map, the only attribute is width, and a share of them will be wrong.[^1]

The road data is under the Open Database License (ODbL).[^1,2] In October 2025 the team added the trained model, written for an old version of Keras, and the C# code that builds road lines from its output.[^3,4,5] The repository's licence file speaks only of the data.[^2]
