---
about:
  depiction: engines/cool-cities-lab.jpg
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
The Urban Analytics team of the WRI Ross Center for Sustainable Cities built it with the WRI Data Lab and WRI offices in India, Mexico, Brazil and Africa. Google.org funded it as part of the Data for Cool Cities initiative.

A user picks a city and reads the baseline layers: air temperature at 3 p.m., thermal stress as UTCI, land surface temperature, shade, tree cover, surface reflectivity, population and irregular settlements. UTCI, the Universal Thermal Climate Index, measures how hot conditions feel to the body. Three predefined indices show where heat risk and cooling opportunity overlap. The user then chooses an intervention and sees its modelled effect on an area of interest.

The interventions are street trees, cool roofs and shade structures in parks. Trees and cool roofs can be combined in some cities. For each, the tool reports the achievable change: tree cover gained, roof reflectivity raised or shade added. It also reports the resulting change in air temperature, thermal stress and shade cover. A planner can see what planting trees in all pedestrian areas, or only in low-canopy ones, would have done during a recent local heat event.

WRI names city planning and climate adaptation staff as the audience. It designed the tool after interviews and workshops with officials in cities including Monterrey, Rio de Janeiro and Cape Town. A climate change manager in South Africa is quoted using it to choose tree-planting sites with the parks department.

The tool runs hosted and needs no local data. Its inputs are global open datasets, including:

- Landsat and Sentinel-2 satellite imagery
- ERA5 and Daymet weather; ERA5 is a reanalysis, a reconstruction of past weather from observations
- WorldPop population
- the WRI and Meta tree canopy height map
- OpenUrban, a land cover layer derived from OpenStreetMap

Shade and thermal stress are modelled with SOLWEIG, an open-source model. Every layer can be downloaded as GeoTIFF or GeoJSON. Custom areas can be drawn for live zonal statistics (summaries of a layer inside a drawn shape). The WRI Cities Data API at cities-data-api.wri.org serves the same data with no account or key. Data WRI produces carry a CC BY 4.0 licence; some inputs keep their own terms, such as Copernicus Sentinel data.

WRI lists the limits. Global datasets can be less accurate than local ones. Scenario assumptions such as tree spacing are generic. Layers come from different years. Results suit city and neighbourhood scale, not single sites.

Cool Cities Lab covers 28 cities. Thermal comfort layers usually cover one neighbourhood per city. Cities can be added through a request form. The changelog records data updates in June and July 2026.

[friGIS](/engines/frigis/) is a closed-source hosted tool for urban heat at district scale. The [NYC Tree Genus Map](/data-sources/cornell-nyc-individual-tree-map/) is a data source for one city's trees.
