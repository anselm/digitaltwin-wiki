---
about:
  label: 3D Rotterdam
  description: >-
    The Municipality of Rotterdam's open 3D city model and browser viewer,
    with buildings, terrain, trees, street furniture and underground cables
    and pipes, built from base registers, lidar and aerial photographs.
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
The viewer is built on VC Map. The model starts from the city's base registers: BGT large-scale topography, BAG addresses and buildings, BOR public space and the LVZK cables-and-pipes map. These are lifted into 3D with lidar point clouds (points measured by laser), stereo photogrammetry from aerial photographs and ground survey. Besides buildings, shown with or without aerial-photo textures, the model holds terrain, trees, lamp posts, benches and other street furniture, bridges and civil works, and planned buildings. It also holds electricity and gas networks and a textured 3D mesh. The city's Basisinformatie department maintains the source registers.

In the viewer a user can measure, walk through the model, see how shadows fall at a given time of day and download files.

The city makes the 3D city model freely available to anyone who wants to work with it, and the viewer's title is "the viewer with open 3D data from Rotterdam". The data comes out in three ways:

- Most of it can be exported from the 3D database for small areas or single objects as OBJ, FBX or DWG.
- Per-neighbourhood CityGML and DWG files are prepared for download. Buildings and trees per district come from the viewer; larger areas are ordered by form. CityGML is an open standard for city models.
- Buildings, textured buildings, terrain, trees, lamp posts and benches are served as Cesium 3D Tiles, which load into Cesium, Unity or Unreal. 3D Tiles is a format for streaming large 3D scenes.

Many 2D layers are served as WMS from the city's ArcGIS server. No licence is named. The viewer's copyright notice reserves rights over the site's text and images, and the city disclaims liability for errors in the data.

The model is still being developed. Street furniture, trees, lamp posts and cables are updated monthly. Buildings are updated once a year, or every two years according to the city's FAQ, so a building can lag six to eighteen months behind the ground. The terrain is updated about every two years.
