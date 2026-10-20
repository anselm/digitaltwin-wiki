---
about:
  label: Cool Cities Lab
  description: >-
    World Resources Institute's web tool that maps heat hazard, exposure and
    cooling opportunity in a city and estimates how much street trees, cool
    roofs or shade structures would lower air temperature and thermal stress,
    at neighbourhood and city scale.
  tags:
    - urban heat
    - heat adaptation
    - tree planting
    - cool roofs
    - shade
    - thermal comfort
tool:
  form: hosted web platform with an open data API
  group: Weather and climate
  homepage: 'https://coolcities.wri.org/'
  licence: 'CC BY 4.0 for the data, graphics, charts and maps; code licence not stated'
  cost: 'free; the data API needs no account or key'
open:
  source: open
  data: open
  api: 'yes'
  participation: unknown
  licence: 'CC BY 4.0 (data, graphics, charts and maps)'
  note: 'WRI says the platform is fully open source; no code repository is linked'
domains:
  - climate
  - places
relations:
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: Cool Cities Lab
      url: 'https://coolcities.wri.org/'
    - title: Cool Cities Lab, Data and Methods
      url: 'https://coolcities.wri.org/data-and-methods'
    - title: Cool Cities Lab, User Manual
      url: 'https://coolcities.wri.org/help'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Cool Cities Lab is a browser tool for urban heat from the World Resources Institute, built by the Urban Analytics team of the WRI Ross Center for Sustainable Cities with the WRI Data Lab and WRI offices in India, Mexico, Brazil and Africa, and funded by Google.org as part of the Data for Cool Cities initiative. A user picks a city, reads the baseline (air temperature at 3 p.m., thermal stress as UTCI, land surface temperature, shade, tree cover, surface reflectivity, population, irregular settlements), uses three predefined indices to find where heat risk and cooling opportunity overlap, then chooses an intervention and sees its modelled effect on an area of interest.

The interventions are street trees, cool roofs and shade structures in parks; trees and cool roofs can be combined in some cities. For each, the tool reports the achievable change (tree cover gained, roof reflectivity raised, shade added) and the resulting change in air temperature, thermal stress and shade cover, so a planner can see what planting trees in all pedestrian areas, or only in low-canopy ones, would have done during a recent local heat event. The audience WRI names is city planning and climate adaptation staff; WRI designed it after interviews and workshops with officials in Monterrey, Rio de Janeiro, Cape Town, Dhaka North and Barcelona, among others. A climate change manager in South Africa is quoted using it to choose tree-planting sites with the parks department.

It runs hosted and needs no local data: inputs are global and open datasets, among them Landsat and Sentinel-2 imagery, ERA5 and Daymet weather, WorldPop population, the WRI and Meta tree canopy height map, and an OpenStreetMap-derived land cover layer called OpenUrban; shade and thermal stress are modelled with the open-source SOLWEIG model. Every layer can be downloaded as GeoTIFF or GeoJSON, custom areas can be drawn for live zonal statistics, and the same data is served by the WRI Cities Data API at cities-data-api.wri.org with no account or key. Data WRI produces carry a CC BY 4.0 licence; some inputs keep their own terms, such as Copernicus Sentinel data. WRI states the limits plainly: global datasets can be less accurate than local ones, scenario assumptions such as tree spacing are generic, layers come from different years, and results suit city and neighbourhood scale rather than single sites.

The tool is operational, with 28 cities from Addis Ababa to Teresina, thermal comfort layers usually for one neighbourhood per city, and a request form for adding cities; the changelog records data updates in June and July 2026. On this site it is an engine for the street-level heat question; [friGIS](/engines/frigis/) is a closed-source hosted tool for the same job at district scale, and the [NYC Tree Genus Map](/data-sources/cornell-nyc-individual-tree-map/) is a data source for one city's trees.
