---
about:
  label: US Forest Maturity Map
  description: >-
    Map of forest maturity across the lower 48 United States, ranking forested 30 m pixels in ten classes from canopy height, canopy cover and living biomass
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
The project behind it, Mapping and Inventorying Mature Forest in Conterminous USA, built the map from public data.[^1,3] It also set out to show where mature forest lies by land ownership and management category.[^3] The team has six members.[^3] Dominick DellaSala is at Wild Heritage, a project of Earth Island Institute in Berkeley.[^3] Brendan Mackey, Patrick Norman and Carly Campbell are at Griffith University's Climate Action Beacon in Australia.[^3] Pat Comer is at NatureServe and Brendan Rogers at Woodwell Climate Research Center.[^3] One Earth funded the work with a grant.[^3]

Each 30 m pixel is scored on three structural indicators: tree height, canopy cover and above-ground living biomass.[^6,9] A forest counts as mature where the combined score is highest relative to its surroundings.[^9] Mature and old growth are not separated.[^9] The inputs are:

- the Potapov et al. 2021 global canopy height map, from GEDI space lidar (laser ranging) and Landsat imagery[^6]
- the Harris et al. 2021 biomass map[^6]
- the Hansen et al. 2013 forest cover map[^6]
- Omernik and Griffith's Level III ecoregions[^6]
- the Ruefenacht et al. 2008 forest type groups[^6]

A second map on the site filters those inputs by ecoregion and forest group. It was used in workshops with over 40 forest ecology and conservation experts, who advised on data choice, limits and interpretation.[^6]

The main output is an interactive map of maturity in ten ranked classes, where class 0 is indeterminate.[^2] A collapsed view groups the rest into three categories: young (1 to 3), intermediate (4 to 6) and mature (7 to 9).[^2] Further layers show mature forest within the four GAP management categories, and ecoregion boundaries.[^2] GAP status is a US scale of how strongly land is managed for biodiversity.[^9] The site also offers 3-D views of forest maturity and drinking-water importance.[^8] The raster (a grid of pixel values) is downloadable as a zip, and the modelling code is linked as a GitHub repository.[^4,5]

The paper describing the work puts mature and old-growth forest at about 67.2 million hectares, 35.9 per cent of all forest structural classes, mostly in western regions.[^9] Federal lands hold the largest share.[^9] Of federal mature and old-growth forest, 76 per cent is in GAP 3 status, which the authors describe as vulnerable to logging.[^9] The paper is DellaSala et al., Frontiers in Forests and Global Change, 28 September 2022 (doi 10.3389/ffgc.2022.979528).[^5,9] Its data statement says the datasets are on matureforests.org, accessed 9 September 2022.[^9]
