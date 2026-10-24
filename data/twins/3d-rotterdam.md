---
about:
  label: 3D Rotterdam
  description: >-
    Rotterdam's open 3D city model and browser viewer,
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
    - title: '3D Rotterdam viewer configuration module (layers, welcome, information and copyright texts)'
      url: 'https://www.3drotterdam.nl/configs/cb3219f4-7a7e-4f79-a1a9-7c8db2e56d78.json'
    - title: '3D Rotterdam viewer configuration module (LVZK cables and pipes)'
      url: 'https://www.3drotterdam.nl/configs/04d3ccd5-9f16-4bd4-9324-55e7ab079ebd.json'
    - title: '3D Rotterdam viewer configuration module (2D WMS layers)'
      url: 'https://www.3drotterdam.nl/configs/0fe59ec8-e5ea-48de-a980-dfb4d253c996.json'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The viewer is built on VC Map.[^1] The model starts from the city's base registers: BGT large-scale topography, BAG addresses and buildings, BOR public space and the LVZK cables-and-pipes map.[^3] These are lifted into 3D with lidar point clouds (points measured by laser), stereo photogrammetry from aerial photographs and ground survey.[^3] Besides buildings, shown with or without aerial-photo textures, the model holds terrain, trees, lamp posts, benches and other street furniture, bridges and civil works, and planned buildings.[^4,6] It also holds electricity and gas networks and a textured 3D mesh.[^4,5] The city's Basisinformatie department maintains the source registers.[^3]

In the viewer a user can measure, walk through the model, see how shadows fall at a given time of day and download files.[^3]

The city makes the 3D city model freely available to anyone who wants to work with it, and the viewer's title is "the viewer with open 3D data from Rotterdam".[^3,4] The data comes out in three ways:

- Most of it can be exported from the 3D database for small areas or single objects as OBJ, FBX or DWG.[^4]
- Per-neighbourhood CityGML and DWG files are prepared for download. Buildings and trees per district come from the viewer; larger areas are ordered by form.[^3,4] CityGML is an open standard for city models.
- Buildings, textured buildings, terrain, trees, lamp posts and benches are served as Cesium 3D Tiles, which load into Cesium, Unity or Unreal.[^3,4] 3D Tiles is a format for streaming large 3D scenes.

Many 2D layers are served as WMS from the city's ArcGIS server.[^6] No licence is named.[^3,4] The viewer's copyright notice reserves rights over the site's text and images, and the city disclaims liability for errors in the data.[^4]

The model is still being developed.[^4] Street furniture, trees, lamp posts and cables are updated monthly.[^4] Buildings are updated once a year, or every two years according to the city's FAQ, so a building can lag six to eighteen months behind the ground.[^3,4] The terrain is updated about every two years.[^3]
