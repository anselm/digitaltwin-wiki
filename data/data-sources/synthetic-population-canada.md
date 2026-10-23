---
about:
  label: Synthetic population of Canada
  description: >-
    Open dataset by Manon Prédhumeau and Ed Manley of the University of Leeds:
    synthetic individuals and households for every dissemination area in
    Canada, for 2016 and for 2021, 2023 and 2030 under nine growth scenarios.
  tags:
    - synthetic population
    - Canada
    - census
    - agent-based
    - households
datasource:
  coverage: all ten provinces and three territories of Canada
  resolution: individuals in households, located by census dissemination area
  cadence: no new version since 2.1.0 (January 2023); years 2016, 2021, 2023 and 2030
  access: free download from Zenodo (one archive of about 9.6 GB); generation code also on Zenodo
  format: CSV files, one folder per province or territory
  homepage: 'https://zenodo.org/records/7572117'
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: CC BY 4.0
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'Synthetic population for Canada at the DA level for 2016, 2021, 2023 and 2030 (Zenodo)'
      url: 'https://zenodo.org/records/7572117'
    - title: 'A synthetic population for agent-based modelling in Canada (Scientific Data, 2023)'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10027812/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
This is a ready-made synthetic population of the whole of Canada: invented individuals grouped into households, each with an age, sex, income, education, employment status and home location, placed in the census dissemination area where such a person would live. Dissemination areas are the smallest standard areas for which Canada publishes all its census data, with 400 to 700 people each on average. A model of a Canadian town or region can start from the relevant files instead of building a population itself.

Manon Prédhumeau and Ed Manley of the School of Geography at the University of Leeds made it and described it in Scientific Data in March 2023. They wrote that there had been no open-source synthetic population for Canada before. The population is built from the 2016 census, using the public microdata files and census profile tables, and from Statistics Canada's 2018 population projections. It covers 2016 and then 2021, 2023 and 2030 under nine growth scenarios, and the code can generate years up to 2042.

To check it, the authors compared the synthetic 2021 population with the 2021 census once that was published, at the level of dissemination areas, the nation and three cities of different sizes: Toronto, Winnipeg and Sherbrooke. The data can be filtered to a study area and extended with local survey data.

The dataset is on Zenodo under CC BY 4.0 as a single archive of about 9.6 GB, organised by province or territory, and the Python code that made and validated it is on Zenodo too. Its latest version, 2.1.0, dates from January 2023 and rests on the 2016 census, so the years after 2016 are projections rather than counts.
