---
about:
  label: CoastSat
  description: >-
    Open-source Python toolkit by Kilian Vos that maps shoreline position at any
    coastline from Landsat and Sentinel-2 imagery, with a free portal of
    shoreline change records around the Pacific and Atlantic.
  tags:
    - shoreline
    - coastal erosion
    - beaches
    - satellite
    - landsat
    - sentinel-2
tool:
  form: open-source Python toolkit and free data portal
  group: Water and flooding
  homepage: 'https://github.com/kvos/CoastSat'
  licence: GPL-3.0
  cost: free; needs a Google Earth Engine project
domains:
  - water
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: GPL-3.0
  note: The portal at coastsat.space serves each transect's time series as a CSV at a fixed URL.
provenance:
  origin: agent
  sources:
    - title: 'kvos/CoastSat (README)'
      url: 'https://github.com/kvos/CoastSat'
    - title: 'CoastSat Live - Home Page'
      url: 'http://coastsat.space'
    - title: 'kvos (GitHub profile)'
      url: 'https://github.com/kvos'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A beach moves. A large storm can cut it back fast, recovery takes longer, and a large sand nourishment can push it seaward.[^1] CoastSat measures that movement from space. For each usable Landsat 5, 7, 8 and 9 and Sentinel-2 image of a stretch of coast, going back about 40 years, it finds the line where sand meets water.[^1] The result is a record of where the shoreline stood on each date a satellite passed.

Kilian Vos wrote it and keeps it on his personal GitHub.[^1,3] He did his PhD at UNSW, where he first built the companion web portal at the university's Water Research Laboratory.[^2,3] The method was published in Environmental Modelling and Software in 2019, with K.D. Splinter, M.D. Harley, J.A. Simmons and I.L. Turner as co-authors.[^1] Version 3.3 came out in May 2026.[^1]

You run it in Python, from a Jupyter notebook or a script, with a Google Earth Engine project that fetches the images.[^1] You draw a polygon of up to 100 square kilometres and pick a date range. The toolkit then sorts each pixel into sand, water, white water or other land and traces the shoreline to a fraction of a pixel.[^1] You can accept or reject each detection by eye. Shorelines come out as GeoJSON for QGIS or ArcGIS.[^1] Lines drawn out from the land to sea, called transects, turn them into a distance-over-time series for each point along the beach.[^1] A correction removes the apparent movement caused by the tide, using a local tide record or the FES2022 global tide model, and the same step can estimate the slope of the beach. The global tide model takes about 10 GB of memory unless it is clipped to a band of latitude.[^1]

The toolkit is tuned for sandy beaches.[^1] The coastsat.space portal, which publishes results computed with it from 1984 onward around the Pacific basin and the Atlantic, puts the accuracy at 10 to 15 metres. Changes smaller than that cannot be seen.[^2] Reefs and rock platforms next to the shore, inlets and lagoon mouths, and shadows from cliffs or tall buildings on west-facing beaches can all give wrong results.[^2] Each transect on the portal can be downloaded as a CSV of dates and distances, by hand or from a fixed web address, and the larger datasets are on Zenodo. The portal was funded in part by the Water Research Laboratory and the USGS.[^2]

For a model of a coast, CoastSat supplies decades of observed shoreline change at sites with no measurements from the ground.[^1] The worked example in the README is Narrabeen-Collaroy beach in Australia, where the satellite shorelines are checked against survey data measured on the ground. The code is GPL-3.0.[^1]
