---
about:
  label: Bmap
  description: >-
    Hosted web tool from Bmap that turns a drawn bounding box anywhere on
    Earth into a low-poly 3D model of that place, with terrain, buildings,
    roads, coastline and trees from open geographic data, viewable in the
    browser and exportable as GLB.
  tags:
    - 3D city
    - OpenStreetMap
    - game engine
    - GLB export
    - terrain
    - browser
open:
  source: closed
  data: open
  api: unknown
  participation: unknown
  note: 'Built from open data (OpenStreetMap, Overture, Copernicus GLO-30, IGN, ESA WorldCover); the site says the pipeline itself is kept private.'
tool:
  form: hosted web service
  group: 3D cities and mapping
  homepage: 'https://bmap.io/'
  cost: 'free tier; $29 one-off export; $49/month Creator'
domains: [places]
relations:
  - predicate: built_on
    target: data-sources/openstreetmap-osm
    note: geographic data credited to OpenStreetMap contributors (ODbL)
provenance:
  origin: agent
  sources:
    - title: 'Bmap: draw a box, get the whole city in 3D'
      url: 'https://bmap.io/'
    - title: 'Bmap · generate any city in 3D'
      url: 'https://app.bmap.io'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Bmap is a web tool that builds a 3D model of any real place from a box drawn on a map. The user searches a city or drags a box, and Bmap assembles the land surface, the coastline, the buildings at their footprints and heights, the road grid and the tree cover, all at 1:1 scale. The result spins in the browser and can be exported for use elsewhere. The site shows Monaco as its worked example, built in stages from terrain to coast to buildings to waterfront.

It is aimed at people who want a real place as a game or web scene without GIS software or hand modelling. Export is a layered GLB file for three.js, Unity and Blender. The site is not consistent on Unreal Engine 5: the pricing table lists it as an export in both paid plans, while the rest of the page says it and Roblox are next in line. The app page offers Nice, Monaco, Antibes and Genoa as starting points and a default area of 3.5 km.

The service is hosted at app.bmap.io and the underlying data are open: the site credits OpenStreetMap contributors (ODbL), Overture Maps, Copernicus GLO-30, IGN (France) and ESA WorldCover. The pipeline itself is not published; the site says it keeps that part private. A free tier allows unlimited generation of maps up to 1.5 km with a browser preview and walk mode; a single export costs $29 with a commercial licence; a Creator plan at $49 a month allows maps up to 5 km, ten exports a month and editing tools.

Operational as a public web app; the site gives no launch date. In this wiki's stack it turns /data-sources/openstreetmap-osm/ and other open layers into a scene.
