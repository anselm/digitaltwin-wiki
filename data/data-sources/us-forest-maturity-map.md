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
The Mapping and Inventorying Mature Forest in Conterminous USA project set out to map, from public data, how mature every forested area in the lower 48 states is, and where that mature forest sits by land ownership and management category. The team is Dominick DellaSala of Wild Heritage (a project of Earth Island Institute, Berkeley), Brendan Mackey, Patrick Norman and Carly Campbell of Griffith University's Climate Action Beacon in Australia, Pat Comer of NatureServe and Brendan Rogers of Woodwell Climate Research Center, with a grant from One Earth.

The method scores each 30 m pixel on three structural indicators, tree height, canopy cover and above-ground living biomass, and calls a forest mature where the combined score is highest relative to its surroundings; mature and old growth are not separated. The inputs are the Potapov et al. 2021 global canopy height map (GEDI and Landsat), the Harris et al. 2021 biomass map, the Hansen et al. 2013 forest cover map, Omernik and Griffith's Level III ecoregions and the Ruefenacht et al. 2008 forest type groups. A second map on the site lets a reader filter those inputs by ecoregion and forest group; it was used in workshops with over 40 forest ecology and conservation experts who advised on which data to use, its limits and how to read it.

The main output is an interactive map of maturity in ten ranked classes (class 0 is indeterminate), with a collapsed view of three categories, young (1 to 3), intermediate (4 to 6) and mature (7 to 9), a layer of mature forest within the four GAP management categories, and ecoregion boundaries. The site also offers 3-D views of forest maturity and drinking-water importance. The raster is downloadable as a zip, and the modelling code is linked as a GitHub repository.

The paper describing the work, DellaSala et al., Frontiers in Forests and Global Change, 28 September 2022 (doi 10.3389/ffgc.2022.979528), reports mature and old-growth forest at about 67.2 million hectares, 35.9 per cent of all forest structural classes, most of it in western regions; federal lands hold the largest share, and 76 per cent of federal mature and old-growth forest is in GAP 3 status, which the authors describe as vulnerable to logging. The paper's data statement says the datasets are on matureforests.org, accessed 9 September 2022.
