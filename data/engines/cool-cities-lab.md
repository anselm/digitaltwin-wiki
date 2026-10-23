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
The Urban Analytics team of the WRI Ross Center for Sustainable Cities built it with the WRI Data Lab and WRI offices in India, Mexico, Brazil and Africa.[^3] Google.org funded it as part of the Data for Cool Cities initiative.[^1,3]

A user picks a city and reads the baseline layers: air temperature at 3 p.m., thermal stress as UTCI, land surface temperature, shade, tree cover, surface reflectivity, population and irregular settlements.[^2,3] UTCI, the Universal Thermal Climate Index, measures how hot conditions feel to the body.[^2] Three predefined indices show where heat risk and cooling opportunity overlap, and the user then chooses an intervention and sees its modelled effect on an area of interest.[^2,3]

The interventions are street trees, cool roofs and shade structures in parks, and trees and cool roofs can be combined in some cities.[^3] For each, the tool reports the achievable change (tree cover gained, roof reflectivity raised or shade added) and the resulting change in air temperature, thermal stress and shade cover.[^3] A planner can see what planting trees in all pedestrian areas, or only in low-canopy ones, would have done during a recent local heat event.[^3]

WRI names city planning and climate adaptation staff as the audience and designed the tool after interviews and workshops with officials in cities including Monterrey, Rio de Janeiro and Cape Town.[^3] A climate change manager in South Africa is quoted using it to choose tree-planting sites with the parks department.[^1]

The tool runs hosted and needs no local data.[^3] Its inputs are global open datasets, including:

- Landsat and Sentinel-2 satellite imagery[^2]
- ERA5 and Daymet weather; ERA5 is a reanalysis, a reconstruction of past weather from observations[^2]
- WorldPop population[^2,3]
- the WRI and Meta tree canopy height map[^2]
- OpenUrban, a land cover layer derived from OpenStreetMap[^2]

Shade and thermal stress are modelled with SOLWEIG, an open-source model.[^2] Every layer can be downloaded as GeoTIFF or GeoJSON.[^3] Custom areas can be drawn for live zonal statistics (summaries of a layer inside a drawn shape).[^3] The WRI Cities Data API at cities-data-api.wri.org serves the same data with no account or key.[^3] Data WRI produces carry a CC BY 4.0 licence; some inputs keep their own terms, such as Copernicus Sentinel data.[^2,3]

WRI lists the limits: global datasets can be less accurate than local ones, scenario assumptions such as tree spacing are generic, and layers come from different years.[^3] Results suit city and neighbourhood scale, not single sites.[^3]

Cool Cities Lab covers 28 cities, and its thermal comfort layers usually cover one neighbourhood per city.[^1,3] Cities can be added through a request form.[^1,3] The changelog records data updates in June and July 2026.[^3]

[friGIS](/engines/frigis/) is a closed-source hosted tool for urban heat at district scale. The [NYC Tree Genus Map](/data-sources/cornell-nyc-individual-tree-map/) is a data source for one city's trees.
