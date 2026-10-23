---
about:
  depiction: engines/bmap.jpg
  label: Bmap
  description: >-
    Hosted web tool that builds a low-poly 3D model of any place on Earth from
    a box drawn on a map, with terrain, buildings, roads, coastline and trees
    from open geographic data.
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
The user searches a city or drags a box, and Bmap assembles the land surface, the coastline, the buildings at their footprints and heights, the road grid and the tree cover, all at 1:1 scale.[^1] The result spins in the browser and can be exported for use elsewhere.[^1] The site's worked example is Monaco, built up in stages: terrain, then coast, then buildings, then waterfront.[^1]

It is aimed at people who want a real place as a game or web scene without GIS software or hand modelling,[^1] and exports a layered GLB file, a single-file 3D format that three.js, Unity and Blender read.[^1] Unreal Engine 5 appears as an export in both paid plans in the pricing table, but elsewhere the page names it and Roblox as next in line.[^1] The app page offers Nice, Monaco, Antibes and Genoa as starting points and a default area of 3.5 km.[^2]

The service is hosted at app.bmap.io, and the pipeline that builds the models is kept private.[^1] The underlying data are open, credited to OpenStreetMap contributors under the ODbL licence, Overture Maps, Copernicus GLO-30, the French mapping agency IGN and ESA WorldCover.[^1,2]

- Free: unlimited generation of maps up to 1.5 km, with a browser preview and walk mode.[^1]
- Single export: $29, with a commercial licence.[^1]
- Creator plan: $49 a month for maps up to 5 km, ten exports a month and editing tools.[^1]
