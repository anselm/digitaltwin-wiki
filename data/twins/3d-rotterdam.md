---
about:
  label: 3D Rotterdam
  description: >-
    The Municipality of Rotterdam's 3D city model and browser viewer, built
    from its base registers, lidar and aerial photographs, covering
    buildings, terrain, trees, street furniture and underground cables and
    pipes; the data is published for anyone to use.
  tags:
    - Rotterdam
    - city model
    - open data
    - 3D Tiles
    - CityGML
twin:
  place: 'Rotterdam, Netherlands'
  scale: city
  operational: operational
  homepage: 'https://www.3drotterdam.nl/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  note: >-
    3D data can be exported from the viewer as OBJ, FBX or DWG, downloaded
    per neighbourhood as CityGML or DWG, or streamed from public 3D Tiles
    endpoints; no licence is named.
domains: [places]
provenance:
  origin: agent
  sources:
    - title: VC Map
      url: 'https://www.3drotterdam.nl/'
    - title: 'Rotterdam 3D publiek (viewer configuration)'
      url: 'https://www.3drotterdam.nl/app.config.json'
    - title: 'Rotterdam in 3D | www.rotterdam.nl'
      url: 'https://www.rotterdam.nl/rotterdam-in-3d'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
3D Rotterdam is the Municipality of Rotterdam's three-dimensional model of the city, served through a browser viewer built on VC Map. The model is derived from the city's base registers (BGT large-scale topography, BAG addresses and buildings, BOR public space and the LVZK cables-and-pipes map) lifted into 3D with lidar point clouds, stereo photogrammetry from aerial photographs and ground survey. Beyond buildings, with and without aerial-photo textures, it holds terrain, trees, lamp posts, benches and other street furniture, bridges and civil works, planned buildings, electricity and gas networks and a textured 3D mesh. The city's Basisinformatie department maintains the source registers.

The viewer lets a user measure, walk through the model, see how shadows fall at a given time of day and download files; the pages give no named planning case.

What is open: the viewer presents itself as "the viewer with open 3D data from Rotterdam", and the city says it makes the 3D city model freely available to anyone who wants to work with it. Most of the data can be exported from the 3D database for small areas or single objects as OBJ, FBX or DWG; per-neighbourhood CityGML and DWG files are prepared for download (buildings and trees per district from the viewer, larger areas by order form); and buildings, textured buildings, terrain, trees, lamp posts and benches are served as Cesium 3D Tiles that can be loaded into Cesium, Unity or Unreal, with many 2D layers served as WMS from the city's ArcGIS server. No licence is named; the viewer's copyright notice reserves rights over the site's text and images and the city disclaims liability for errors in the data. Nothing is said about the viewer's source code.

Status: operational and still being developed. Street furniture, trees, lamp posts and cables are updated monthly; buildings once a year, or every two years according to the city's FAQ, so a building can lag six to eighteen months behind the ground; the terrain about every two years.
