---
about:
  label: Conservation International
  description: >-
    Nonprofit founded in 1987 and based in Arlington, Virginia, whose science
    programme produced Trends.Earth, co-founded Wildlife Insights and mapped
    the world's irrecoverable carbon.
  aliases:
    - CI
    - Conservation International Foundation
  tags:
    - conservation
    - biodiversity
    - land degradation
    - carbon
    - camera traps
    - nonprofit
organization:
  form: nonprofit
  homepage: 'https://www.conservation.org/'
domains:
  - ecology
  - climate
relations:
  - predicate: cites
    target: data-sources/irrecoverable-carbon
provenance:
  origin: agent
  sources:
    - title: 'About, Conservation International'
      url: 'https://www.conservation.org/about'
    - title: 'Contact us, Conservation International'
      url: 'https://www.conservation.org/about/contact-us'
    - title: 'Trends.Earth, Conservation International project page'
      url: 'https://www.conservation.org/projects/trends-earth'
    - title: 'Trends.Earth documentation, home page'
      url: 'https://docs.trends.earth/en/latest/'
    - title: 'Wildlife Insights, Conservation International project page'
      url: 'https://www.conservation.org/projects/wildlife-insights'
    - title: 'Wildlife Insights RFP, Platform Maintenance and Feature Development (February 2020, PDF)'
      url: 'https://www.wildlifeinsights.org/sites/default/files/2020-02/Wildlife%20Insights%20RFP%20-%20Platform%20Maintenance%20and%20Feature%20Development_0.pdf'
    - title: 'Irrecoverable Carbon, Conservation International project page'
      url: 'https://www.conservation.org/projects/irrecoverable-carbon'
    - title: 'Noon and colleagues, Mapping the irrecoverable carbon in Earth''s ecosystems, Nature Sustainability 5, 2021'
      url: 'https://doi.org/10.1038/s41893-021-00803-6'
    - title: 'Resilience Atlas, Conservation International project page'
      url: 'https://www.conservation.org/projects/resilience-atlas'
    - title: 'Resilience Atlas, Vizzuality project page'
      url: 'https://vizzuality.com/project/resilience-atlas'
    - title: 'Resilience Atlas (site)'
      url: 'https://www.resilienceatlas.org/'
    - title: 'ConservationInternational/resilienceatlas (GitHub API)'
      url: 'https://api.github.com/repos/ConservationInternational/resilienceatlas'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Conservation International was founded in 1987 and has its head office at 2011 Crystal Drive in Arlington, Virginia.[^1,2] It states its mission as empowering societies to responsibly and sustainably care for nature for the well-being of humanity.[^1] It counts offices in 35 countries, projects in more than 100 and over 1,600 staff, 97% of its programme staff from the regions where they work.[^1]

Three of its products matter to someone modelling a place. [Trends.Earth](/engines/trends-earth/) is a free QGIS plugin, built with Lund University and NASA with Global Environment Facility funding, that computes land degradation from productivity, land cover and soil carbon on Google Earth Engine; CI describes it as piloted in four African countries and usable anywhere.[^3,4] [Wildlife Insights](/platforms/wildlife-insights/), the camera-trap platform with machine identification of species, grew from a core partnership of CI with the Smithsonian Institution, the Wildlife Conservation Society, the North Carolina Museum of Natural Sciences, WWF, Map of Life, the Zoological Society of London and Google.[^6] CI's page says the initiative is no longer hosted by CI and has not been updated regularly since June 2023.[^5] The [irrecoverable carbon map](/data-sources/irrecoverable-carbon/), from Noon and colleagues in Nature Sustainability, published online on 18 November 2021 under CC BY 4.0, locates carbon that human activity could release and that could not be restored by 2050.[^7,8] CI puts the total at more than 139 billion tonnes, three quarters of it on 7.5% of the land.[^7] The map is served through the Resilience Atlas, with a Shiny app for its overlap with biodiversity.[^7]

The Resilience Atlas was built by CI with Vizzuality and funding from the Rockefeller Foundation.[^10] It brings together more than 12 terabytes of data from over 60 datasets on food security, climate variability and water, covering more than 40 countries in the Sahel, the Horn of Africa and South and Southeast Asia, and presents them as maps and as "journeys", guided data stories.[^9,10] Its launch year is unknown; the site's footer carries a 2015 copyright.[^11] CI's own page lists the project as completed and describes it in the past tense, while the code repository still received dependency updates in November 2026.[^9,12]
