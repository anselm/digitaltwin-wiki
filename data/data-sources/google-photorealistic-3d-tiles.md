---
about:
  label: Google Photorealistic 3D Tiles
  description: >-
    Google's photo-textured 3D model of many of the world's populated areas, streamed
    through its Map Tiles API to renderers such as CesiumJS; paid per use,
    and licensed for display only.
  aliases:
    - Photorealistic 3D Tiles
    - Google 3D Tiles
    - Map Tiles API
  tags:
    - 3D city model
    - 3D Tiles
    - basemap
    - photogrammetry
    - global
    - commercial
datasource:
  coverage: many of the world's populated areas; not available to projects billed in the European Economic Area since 8 July 2025
  resolution: unknown; Google describes it as high-resolution
  cadence: unknown
  access: Google Cloud project with billing enabled and an API key; streamed by a 3D Tiles renderer from a root tileset URL
  format: OGC 3D Tiles tilesets with glTF tiles
  homepage: 'https://developers.google.com/maps/documentation/tile/3d-tiles'
open:
  source: closed
  data: closed
  api: 'yes'
  participation: closed
  licence: Google Maps Platform Terms of Service and Map Tiles API Policies
  note: Display only; caching, analysis, extraction and use to train machine-learning models are not allowed. Pay-as-you-go after 1,000 free billable events a month.
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: 'Photorealistic 3D Tiles overview | Map Tiles API | Google for Developers'
      url: 'https://developers.google.com/maps/documentation/tile/3d-tiles'
    - title: 'Map Tiles API overview | Google for Developers'
      url: 'https://developers.google.com/maps/documentation/tile/overview'
    - title: 'Map Tiles API policies | Google for Developers'
      url: 'https://developers.google.com/maps/documentation/tile/policies'
    - title: 'Map Tiles API usage and billing | Google for Developers'
      url: 'https://developers.google.com/maps/documentation/tile/usage-and-billing'
    - title: 'Google Maps Platform core services pricing list (last updated 30 October 2026)'
      url: 'https://developers.google.com/maps/billing-and-pricing/pricing'
    - title: 'Maps SKU details | Google Maps Platform'
      url: 'https://developers.google.com/maps/billing-and-pricing/sku-details/maps'
    - title: 'Create a 3D Tiles renderer | Map Tiles API | Google for Developers'
      url: 'https://developers.google.com/maps/documentation/tile/create-renderer'
    - title: 'Google Maps Platform Terms of Service'
      url: 'https://cloud.google.com/maps-platform/terms'
    - title: 'Map Tiles API adjustments for European Economic Area (EEA) customers'
      url: 'https://developers.google.com/maps/comms/eea/map-tiles'
    - title: 'Photorealistic 3D Tiles from Google Maps Platform in CesiumJS (Cesium tutorial)'
      url: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-photorealistic-3d-tiles/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; Google states no capture dates, resolution or update cycle for the mesh on these pages, so those are left unknown'
  status: draft
---
Photorealistic 3D Tiles are Google's 3D model of the world: a mesh, a surface of joined triangles, textured with high-resolution imagery, covering many of the world's populated areas.[^1] Buildings, monuments and other landmarks appear in three dimensions, textured with satellite and aerial imagery.[^1,2] They are one of the products of Google's Map Tiles API, beside 2D roadmap, satellite and terrain tiles and Street View.[^2]

The tiles follow the 3D Tiles specification, so any renderer that supports it and can show the required credits can stream them; Google names CesiumJS from version 1.91 and Cesium for Unreal from version 1.12.[^1,7] A program asks for a root tileset with its API key, and the renderer then fetches the tiles it needs as the viewer moves; one root request covers three hours of tile requests.[^1,4] Each tile is a glTF model whose copyright field lists its data providers.[^7] In [CesiumJS](/presentation/cesiumjs/) the tiles can also be loaded through a Cesium ion account and token, with one function call.[^10]

Using the API needs a Google Cloud project with billing enabled and an API key.[^1,4] Google bills it as an Enterprise SKU, in US dollars per 1,000 billable events in a month, counted across all projects on a billing account.[^4,5] On the global price list read on 30 October 2026, the first 1,000 events a month were free, then $6.00 per 1,000 up to 100,000, $5.10 up to 500,000, $4.20 up to 1 million, $3.30 up to 5 million and $2.40 above that.[^5] Google's SKU page defines the billable event as a request that returns a 3D tile.[^6] Its usage page counts only root tileset requests against the daily quota, set by default at 10,000 a day per project, and allows unlimited tile requests from the renderer, up to 12,000 a minute.[^4] Separate subscription plans exist as an alternative to pay-as-you-go.[^5]

The terms limit what the tiles may be used for. Google's policies say the Map Tiles API is for map visualisation only, and not for image analysis, machine interpretation, object detection, geodata extraction or resale, or offline use; content may not be pre-fetched, stored or cached beyond what the terms allow.[^3] Your own 3D objects may be placed on the tiles only if they were not extracted, traced or derived from them.[^3] The Terms of Service forbid creating content from Google Maps content, including using it to train, test or fine-tune machine-learning models.[^8] Every view must credit Google Maps, with its logo where there is room, and show the data credits gathered from the visible tiles, and a scene mixing Google's tiles with other models must make clear which parts are Google's.[^3] Promotional videos may run up to 30 seconds, must be marked for promotional purposes only, and must be about the capabilities of the application.[^3]

Projects linked to a billing address in the European Economic Area and created after 8 July 2025, or no longer in what Google calls their unmodified state since then, cannot get Photorealistic 3D Tiles at all; the API returns an error.[^9] Google points them to the 3D Maps of its Maps JavaScript API and mobile SDKs instead.[^9]

For someone modelling a place, these tiles put a recognisable city or landscape under a simulation's output on screen: traffic, flood water or a planned building shown against the real streets. They are a backdrop, not data. The terms rule out analysing them or extracting data from them, so building footprints, heights or terrain for the model itself have to come from open sources such as [OpenStreetMap](/data-sources/openstreetmap-osm/) or the [Copernicus DEM](/data-sources/copernicus-dem/).
