---
about:
  depiction: data-sources/hansen-global-forest-change.jpg
  depiction_credit: 'World map of tree cover, loss and gain, from the data download page. Source: Hansen/UMD/Google/USGS/NASA, CC BY 4.0.'
  label: Hansen Global Forest Change
  description: >-
    The University of Maryland's global 30 m maps of tree cover in 2000 and
    of the year forest was lost since, from Landsat imagery; updated yearly,
    free under CC BY 4.0.
  aliases:
    - Global Forest Change
    - UMD tree cover loss
    - GFC
  tags:
    - forests
    - deforestation
    - tree cover loss
    - Landsat
    - land cover
    - raster
datasource:
  coverage: global land, 80°N to 60°S
  resolution: 1 arc-second (about 30 m at the equator)
  cadence: annual; version 1.13 covers 2000 to 2025
  access: free tile downloads (10° by 10° GeoTIFFs) from Google Cloud Storage; Earth Engine asset UMD/hansen/global_forest_change_2025_v1_13; web map
  format: GeoTIFF, unsigned 8-bit
  homepage: 'https://glad.earthengine.app/view/global-forest-change'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  licence: CC BY 4.0
domains:
  - ecology
  - climate
relations:
  - predicate: part_of
    target: engines/google-earth-engine
    note: in the Earth Engine data catalogue as UMD/hansen/global_forest_change_2025_v1_13
  - predicate: contributes_to
    target: data-sources/global-nature-watch
    note: the University of Maryland lab supplies its annual forest loss data in partnership with Global Forest Watch, now Global Nature Watch
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: Global Forest Change
      url: 'https://storage.googleapis.com/earthenginepartners-hansen/GFC-2025-v1.13/download.html'
    - title: Hansen Global Forest Change v1.13 (2000-2025) | Earth Engine Data Catalog | Google for Developers
      url: 'https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2025_v1_13'
    - title: High-Resolution Global Maps of 21st-Century Forest Cover Change
      url: 'https://doi.org/10.1126/science.1244693'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the web map at glad.earthengine.app
    renders by script and gave no text, and the 2013 paper was read for its
    citation details only
  status: draft
---
Global Forest Change is a set of world maps of forest extent and loss, made from time series of Landsat satellite images.[^1] Its makers are the Global Land Analysis and Discovery (GLAD) laboratory at the University of Maryland, working with Global Forest Watch, now [Global Nature Watch](/data-sources/global-nature-watch/).[^1] The method is described in "High-Resolution Global Maps of 21st-Century Forest Cover Change" by Matthew Hansen and colleagues, in Science, November 2013.[^1,3] Version 1.13, the current one, covers 2000 to 2025.[^1,2]

The maps come in 10-by-10-degree tiles at 1 arc-second, about 30 m at the equator.[^1] The layers are:[^1,2]

- tree canopy cover in 2000, the share of each cell covered by vegetation taller than 5 m[^1]
- forest gain from 2000 to 2012, not updated since[^2]
- the year of forest loss, where loss means a change from forest to non-forest[^1]
- a mask of land and water[^1]
- cloud-free Landsat composites from around 2000 and from the last year[^1]

Only the loss year and the last composite are updated each year.[^1]

The makers describe the limits. Changes in the Landsat sensors, in the number of images each year and in the algorithm mean that years are not strictly comparable.[^1] Loss from 2011 onward has been reprocessed with newer methods, while earlier years have not.[^1] A full validation with Landsat 8 data has not been done.[^1] They call the maps a relative indicator of trends, suggest smoothing them over time, for example with a three-year moving average, and say forest area should not be estimated by counting pixels; instead the maps can guide a statistical sample.[^1] A version 2.0 reprocessing of the whole record is planned with no date set.[^1]

The data are licensed CC BY 4.0, free for any use including commercial, with the display credit "Source: Hansen/UMD/Google/USGS/NASA".[^1] Tiles can be downloaded as GeoTIFFs, and the whole set is also an asset in the [Google Earth Engine](/engines/google-earth-engine/) catalogue, where it can be analysed in place; the makers provide an introductory tutorial.[^1,2] They ask users to register so they can keep them informed of updates.[^1]

For someone modelling a place, the maps give a year-by-year record since 2001 of where tree cover was lost, at about 30 m, starting from the tree cover of 2000.[^1] The updated method detects some kinds of loss better: fire in boreal forests, smallholder rotation clearing in the tropics, selective logging and the clearing of short-cycle plantations.[^1] Comparing one year with another needs their warnings in mind.[^1]
