---
about:
  label: WorldPop
  description: >-
    University of Southampton group that estimates how many people live in
    each 100 m or 1 km grid cell, for every country and year from 2015 to
    2030, published under CC BY 4.0.
  tags:
    - population
    - gridded population
    - census
    - demographics
    - age and sex
    - open data
datasource:
  coverage: global; country grids and global mosaics
  resolution: 100 m and 1 km grid cells
  cadence: each year 2015 to 2030 in the current release (R2025A); older 2000 to 2020 series archived; updated when new census or geospatial data arrive
  access: free download from the WorldPop data hub; REST API without login up to 1,000 calls a day
  format: GeoTIFF, some CSV
  homepage: 'https://www.worldpop.org/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  licence: CC BY 4.0
domains:
  - people
relations:
  - predicate: answers
    target: questions/how-would-these-people-respond
provenance:
  origin: agent
  sources:
    - title: About - WorldPop
      url: 'https://www.worldpop.org/about'
    - title: Gridded population estimate datasets and tools. - WorldPop
      url: 'https://www.worldpop.org/methods/populations'
    - title: 'WorldPop :: Population Counts'
      url: 'https://hub.worldpop.org/project/categories?id=3'
    - title: faq - WorldPop
      url: 'https://www.worldpop.org/faq/'
    - title: WorldPop REST API rate-limits - WorldPop
      url: 'https://www.worldpop.org/sdi/introduction/api/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
WorldPop is a research group in the School of Geography and Environmental Sciences at the University of Southampton that produces data on where people live and who they are, at high spatial resolution.[^1] It began in October 2013 by combining the AfriPop, AsiaPop and AmeriPop projects.[^1] Its staff of around 40 are researchers, data scientists and specialists.[^1] It works with governments and UN agencies, combining satellite, survey, cellphone and other geospatial data.[^1]

Its main products are gridded population estimates: counts of people for each cell of a regular grid rather than for each district.[^2] The cells can be added up over any area, such as a hospital's catchment, including areas that cross the boundaries a census reports by.[^2] "Top-down" datasets take census counts and official projections for administrative areas and spread them over the 100 m or 1 km cells classed as settled, guided by detailed geospatial data.[^2] The official totals are kept, and the estimates include breakdowns by age and sex.[^2] "Bottom-up" datasets instead build a statistical model from recent surveys, for countries where the last census is old or incomplete, and map their uncertainty, usually for a single year.[^2]

The current multi-year release, called Global2 (R2025A), gives population counts for every country at 100 m and 1 km, and global mosaics at 1 km, for each year from 2015 to 2030.[^2,3] The older Global1 series for 2000 to 2020 is archived.[^3] Bespoke 100 m estimates for single countries and a single recent year, made with governments and UN agencies, are in the WorldPop Open Population Repository (WOPR).[^3] Datasets are updated when new census or geospatial data become available, and each download page gives its production date.[^4]

The data is free and open under the Creative Commons Attribution 4.0 licence, for commercial and non-commercial use with attribution.[^1,4] Grids come as GeoTIFF files, which any GIS software reads, and many datasets also as CSV tables.[^4] The REST API needs no login up to 1,000 calls a day; heavier users can request a key after registering.[^5] WorldPop asks that the data not be used to discriminate against, exploit, surveil or otherwise harm people, and holds users solely responsible for how they use it.[^1]

For someone modelling a place, WorldPop gives an estimate of how many people live inside any outline drawn on a map, such as a flood zone, for any year in the series.[^2,3] The counts are modelled estimates, and WorldPop says they do not replace a full census.[^2] Its subnational data underpins UN estimates of how many people are affected by disasters and conflicts.[^1]
