---
about:
  label: Observatory of Economic Complexity (OEC)
  description: >-
    Website by Datawheel, begun at MIT, that charts what each country trades
    with whom, product by product, and ranks economies by complexity;
    historical data free, recent data paid.
  aliases:
    - OEC
    - oec.world
  tags:
    - trade
    - exports
    - imports
    - economic complexity
    - subnational trade
    - API
datasource:
  coverage: world, country by country; subnational trade by region for 18 countries (paid)
  resolution: country by partner by product, to six-digit HS codes
  cadence: annual international trade (SITC 1962 to 2018; HS 1992 revision from 1995 to 2024); monthly national data for 53 countries on paid plans
  access: free website, bulk international datasets and part of the API; Pro and Premium plans for recent, subnational and firm-level data
  homepage: 'https://oec.world/'
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: unknown
  licence: trade visualisations CC0; data terms not stated on the pages read
domains:
  - people
relations:
  - predicate: alternative_to
    target: data-sources/un-comtrade
provenance:
  origin: agent
  sources:
    - title: About the Site | The Observatory of Economic Complexity
      url: 'https://oec.world/en/resources/about'
    - title: Methods | The Observatory of Economic Complexity
      url: 'https://oec.world/en/resources/methods'
    - title: API | The Observatory of Economic Complexity
      url: 'https://oec.world/en/resources/api'
    - title: Select your plan | The Observatory of Economic Complexity
      url: 'https://oec.world/en/plans'
    - title: International Datasets | The Observatory of Economic Complexity
      url: 'https://oec.world/en/resources/bulk-download/international'
    - title: Data Sources | The Observatory of Economic Complexity
      url: 'https://oec.world/en/data-sources'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; prices as shown on the plans page on 26 October 2026'
  status: draft
---
The Observatory of Economic Complexity (OEC) is a website for visualising and distributing data on where economic activities happen and how they change, drawing data from many sources.[^1] It began in MIT's Collective Learning group, formerly the Macro Connections group, as Alex Simoes's 2012 master's thesis supervised by César Hidalgo.[^1] It was spun out of MIT as an open-source project in 2012 and is now designed and built by the company Datawheel.[^1] Version 5.0, launched in the summer of 2021, added subnational data for regions and provinces in more than 30 countries and introduced paid subscriptions.[^1] The OEC asks to be cited through the 2011 paper by Simoes and Hidalgo, "The Economic Complexity Observatory: An Analytical Tool for Understanding the Dynamics of Economic Development".[^1]

The site is built around profile pages, with charts such as treemaps, networks, scatter plots and maps, and complexity rankings country by country and product by product.[^1,4] The free international datasets include trade classified by SITC revision 2 from 1962 to 2018 and by each revision of the Harmonized System from 1992 to 2022, with complexity indicators, the World Bank's development indicators and tariffs from WITS.[^5] Its HS 1992 trade table runs from 1995 to 2024.[^6] Some countries' own customs records add monthly and regional detail.[^1,6]

Economic complexity is the OEC's other strand. The Economic Complexity Index (ECI) estimates an economy's productive know-how from the range of activities present in it, and the Product Complexity Index (PCI) estimates the complexity needed to make a product.[^2] The OEC explains it with an exam marked in an unknown language: hard questions are those few students get right, and a student who gets hard questions right is likely a strong student. In the same way, places stand in for students and products for questions.[^2] The OEC computes the index from four kinds of data: trade, patent applications, research publications and software development.[^2] It says the index has been shown to predict a country's income, growth, inequality and greenhouse gas emissions.[^2]

The free plan covers the full history of annual trade between every country and product, the charts and the complexity rankings, and the international datasets download in bulk without a subscription.[^4,5] Many API endpoints, including historical international trade, need no authentication.[^3] On 26 October 2026 the Pro plan was $299 a month. It adds the latest monthly data for 53 countries, an API key, and trade by region for 18 countries.[^4] Premium, at $1,999 a month, adds company-level search, shipment records from US customs filings (bills of lading) and bulk national datasets.[^4] Researchers and students get half price.[^4] Visualisations of international trade data may be reused under a CC0 public-domain dedication.[^1]

For someone modelling a place, the OEC is a quick way to see what a country exports and imports and from whom, and for some countries what each region trades.[^1,4] Its complexity measures suit questions about which industries a country or region is likely to grow into.[^2] The figures are national or regional, not those of a single town or firm, except for the paid company data.[^4]
