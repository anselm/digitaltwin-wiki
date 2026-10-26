---
about:
  label: UN World Population Prospects
  description: >-
    The UN's estimates of each country's population by age and sex since
    1950, with projections to 2100 under several scenarios; free to download,
    revised every two or three years.
  aliases:
    - World Population Prospects
    - WPP
  tags:
    - population
    - projections
    - demographics
    - fertility
    - migration
    - age and sex
datasource:
  coverage: global; 237 countries or areas, with regional, income and other groupings
  resolution: countries or areas; single years of age and time (five-year age groups also published)
  cadence: a new revision every two or three years; the 2024 revision came out on 11 July 2024 and the next is due on 11 July 2027
  access: free download as Excel and CSV files; Data Portal with an open API; graphs and country profiles on the site
  format: Excel, CSV
  homepage: 'https://population.un.org/wpp/'
open:
  source: unknown
  data: unknown
  api: 'yes'
  participation: unknown
  note: >-
    The site pages read state no licence for the data files; the Summary of
    Results says its figures and tables may be reproduced under CC BY 3.0 IGO.
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: World Population Prospects
      url: 'https://population.un.org/wpp/'
    - title: World Population Prospects (Frequently Asked Questions)
      url: 'https://population.un.org/wpp/faqs'
    - title: World Population Prospects (Definition of Projection Scenarios)
      url: 'https://population.un.org/wpp/definition-of-projection-scenarios'
    - title: 'World Population Prospects 2024: Summary of Results'
      url: 'https://desapublications.un.org/file/20622/download'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the WPP site renders by script, so its
    home, FAQ and scenario pages were read from the text in the site's own
    script bundle; the Data Portal's API page timed out and was not read
  status: draft
---
World Population Prospects comes from the Population Division of the UN Department of Economic and Social Affairs (DESA), and is the UN's official series of population estimates and projections.[^1] The 2024 revision is the twenty-eighth edition; the series has been prepared since 1951.[^1,2] It was released on 11 July 2024, and a new revision comes every two or three years, the next due on 11 July 2027.[^2] Only the latest revision is kept online in full; selected results from the 1992 to 2022 revisions are in an archive section of the download centre.[^2]

The 2024 revision gives estimates for every year from 1950 to 2023 and projections from 2024 to 2100, for 237 countries or areas.[^1,2] It draws on 1,910 national censuses held between 1950 and 2023, on vital registration (the official recording of births and deaths) and on 3,189 nationally representative surveys.[^1] Since the 2022 revision, figures come in one-year steps of age and time, published both by single year of age and by five-year age groups.[^1] Results are also added up for regions, World Bank income groups, Sustainable Development Goal regions and other groupings, such as economic and trading blocs.[^1,2] Because official statistics have gaps, late counts and reporting errors, the UN's estimates for a country sometimes differ from that country's own figures.[^2]

The main projection, the medium scenario, is probabilistic: thousands of possible future paths of births, deaths and migration are simulated and the medium scenario takes their mean or median.[^3] Prediction intervals of 80 and 95 per cent show how widely the paths spread.[^3] Thirteen further, deterministic scenarios vary the assumptions, for example fertility half a birth per woman higher or lower, constant fertility, zero international migration, or no births to girls under 18.[^3] Comparing them separates how much of future change comes from fertility, mortality, migration and the existing age structure.[^3] In the 2024 revision, world population is projected to peak at around 10.3 billion in the mid-2080s, up from 8.2 billion in 2024, with an 80 per cent likelihood that it peaks within this century.[^4]

The main results are a series of Excel files of key indicators; the whole set can be downloaded as CSV for use in databases or statistical software.[^1] An online Data Portal gives a subset of indicators with charts and an open API for programs.[^1] The Summary of Results states that its figures and tables may be reproduced without permission under a Creative Commons licence, CC BY 3.0 IGO.[^4] Every UN entity uses these estimates for indicators that need a population figure.[^2]

For someone modelling a place, the projections give the national and regional backdrop: how many people, of what ages, a country may have in each year to 2100, under a range of stated assumptions.[^1,3] Each figure is for a whole country or area, or a group of countries.[^1,2] For estimates of who lives inside an area smaller than a country, such as a district or a flood zone, [WorldPop](/data-sources/worldpop/) is the entry on this site that maps population onto a fine grid.
