---
about:
  label: US Forest Maturity Map
  description: >-
    Map of forest maturity across the lower 48 United States from Wild
    Heritage, Griffith University, NatureServe and Woodwell, ranking forested
    30 m pixels in ten classes from canopy height, canopy cover and living
    biomass; the raster can be downloaded from the project site.
  tags:
    - forests
    - old growth
    - carbon
    - conservation
    - united states
    - raster
datasource:
  homepage: 'https://www.matureforests.org/'
  coverage: conterminous United States (the lower 48 states), forested land
  cadence: not stated; the paper and data date from 2022
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  note: The raster is a zip file linked from the Data page and the modelling code is linked from the Documentation page as a GitHub repository (patrick-m-norman/US-forest-maturity-clustering); neither a licence nor the repository itself was read for this entry.
domains:
  - ecology
  - places
provenance:
  origin: agent
  sources:
    - title: 'Home'
      url: 'https://www.matureforests.org/'
    - title: 'Forest maturity map'
      url: 'https://www.matureforests.org/forest-maturity-map'
    - title: 'About & contacts'
      url: 'https://www.matureforests.org/about-contacts'
    - title: 'Data'
      url: 'https://www.matureforests.org/data'
    - title: 'Documentation'
      url: 'https://www.matureforests.org/documentation'
    - title: 'Maturity model inputs'
      url: 'https://www.matureforests.org/maturity-model-inputs'
    - title: 'Importance of mature forests'
      url: 'https://www.matureforests.org/importance-of-mature-forests'
    - title: 'Visualizations'
      url: 'https://www.matureforests.org/visualizations'
    - title: 'Mature and old-growth forests contribute to large-scale conservation targets in the conterminous United States'
      url: 'https://www.frontiersin.org/articles/10.3389/ffgc.2022.979528/full'
  created: '2026-10-20'
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed; refuted against the same pages'
  status: draft
---
The project behind it, Mapping and Inventorying Mature Forest in Conterminous USA, built the map from public data. It also set out to show where mature forest lies by land ownership and management category. The team has six members. Dominick DellaSala is at Wild Heritage, a project of Earth Island Institute in Berkeley. Brendan Mackey, Patrick Norman and Carly Campbell are at Griffith University's Climate Action Beacon in Australia. Pat Comer is at NatureServe and Brendan Rogers at Woodwell Climate Research Center. One Earth funded the work with a grant.

Each 30 m pixel is scored on three structural indicators: tree height, canopy cover and above-ground living biomass. A forest counts as mature where the combined score is highest relative to its surroundings. Mature and old growth are not separated. The inputs are:

- the Potapov et al. 2021 global canopy height map, from GEDI space lidar (laser ranging) and Landsat imagery
- the Harris et al. 2021 biomass map
- the Hansen et al. 2013 forest cover map
- Omernik and Griffith's Level III ecoregions
- the Ruefenacht et al. 2008 forest type groups

A second map on the site filters those inputs by ecoregion and forest group. It was used in workshops with over 40 forest ecology and conservation experts, who advised on data choice, limits and interpretation.

The main output is an interactive map of maturity in ten ranked classes, where class 0 is indeterminate. A collapsed view groups the rest into three categories: young (1 to 3), intermediate (4 to 6) and mature (7 to 9). Further layers show mature forest within the four GAP management categories, and ecoregion boundaries. GAP status is a US scale of how strongly land is managed for biodiversity. The site also offers 3-D views of forest maturity and drinking-water importance. The raster (a grid of pixel values) is downloadable as a zip, and the modelling code is linked as a GitHub repository.

The paper describing the work puts mature and old-growth forest at about 67.2 million hectares, 35.9 per cent of all forest structural classes, mostly in western regions. Federal lands hold the largest share. Of federal mature and old-growth forest, 76 per cent is in GAP 3 status, which the authors describe as vulnerable to logging. The paper is DellaSala et al., Frontiers in Forests and Global Change, 28 September 2022 (doi 10.3389/ffgc.2022.979528). Its data statement says the datasets are on matureforests.org, accessed 9 September 2022.
