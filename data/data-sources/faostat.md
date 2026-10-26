---
about:
  label: FAOSTAT
  description: >-
    FAO's free database of food and agriculture statistics for over 245
    countries and territories from 1961, from crops and trade to fertiliser
    and land use, under CC BY 4.0.
  aliases:
    - FAO statistics
  tags:
    - agriculture
    - crops
    - food security
    - fertiliser
    - food trade
    - land use
    - open data
datasource:
  coverage: over 245 countries and territories and FAO regional groupings
  resolution: country by year, by commodity
  cadence: annual series from 1961 to the most recent year; each dataset updated on its own schedule
  access: free website and bulk CSV downloads; API with a free account and a token
  format: CSV (zipped) in bulk; API queries
  homepage: 'https://www.fao.org/faostat/en/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  licence: CC BY 4.0 unless a dataset's metadata says otherwise, with FAO's database terms of use
domains:
  - food
relations:
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: FAOSTAT
      url: 'https://www.fao.org/faostat/en/'
    - title: Statistics | FAO | Food and Agriculture Organization of the United Nations
      url: 'https://www.fao.org/statistics/en/'
    - title: FAOSTAT bulk download catalogue, datasets_E.json (read 2026-10-26)
      url: 'https://bulks-faostat.fao.org/production/datasets_E.json'
    - title: FAOSTAT Developer Portal
      url: 'https://www.fao.org/faostat/en/#developer-portal'
    - title: Statistical Database Terms of Use | FAO | Food and Agriculture Organization of the United Nations
      url: 'https://www.fao.org/contact-us/terms/db-terms-of-use/en/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the FAOSTAT pages are built by
    JavaScript and were read in a headless browser
  status: draft
---
FAOSTAT is the statistical database of the Food and Agriculture Organization of the United Nations (FAO).[^1,2] Article 1 of FAO's constitution charges it to collect, analyse, interpret and disseminate information on nutrition, food and agriculture.[^5] FAOSTAT gives free access to food and agriculture statistics, including the crop, livestock and forestry sub-sectors, for over 245 countries and territories and all FAO regional groupings, from 1961 to the most recent year available.[^1,2]

On 26 October 2026 its bulk download catalogue listed 69 datasets, seven of them discontinued archives.[^3] They are grouped by theme, from production, trade and prices to emissions and employment.[^3] The crops and livestock dataset gives area harvested, production and yield for crops; animal numbers and the output of meat, milk and eggs; and some processed products such as vegetable oils and sugar.[^3] Food balance sheets show, for each food, where a country's supply came from (production, imports, stock changes) and where it went: exports, animal feed, seed, processing, losses and food for people.[^3] The trade matrix gives import and export quantities and values for food and agricultural products by partner country, mostly from UNSD and Eurostat, checked for outliers, with partner data used to fill in for countries that do not report.[^3] A fertiliser dataset covers the production, trade and farm use of 23 fertiliser products for 190 countries and territories, and a fertiliser trade matrix gives bilateral trade in tonnes of the three main plant nutrients, nitrogen, phosphorus and potassium.[^3] Each dataset is updated on its own schedule, and the catalogue gives the date of each one's latest update.[^3]

Each dataset can be browsed on the website and downloaded in bulk as a zipped CSV file.[^1,3] The API needs a FAOSTAT account and a personal access token, which lasts 60 minutes; the developer portal gives example queries and a query builder.[^4] Unless a dataset's metadata says otherwise, the data is licensed under Creative Commons Attribution 4.0 (CC BY 4.0), together with FAO's database terms of use.[^4,5] Those terms set a citation format, forbid using the data to promote a company or its products, and warn that some datasets include third-party data with other conditions.[^5]

For someone modelling a place, FAOSTAT gives the national baseline for a food system.[^1] It shows what a country grows and its yields, what it trades and with whom, how much fertiliser it uses and imports, and how its land is used.[^3] The figures are national and regional totals, so a model of a district or a watershed needs local data as well.[^1]
