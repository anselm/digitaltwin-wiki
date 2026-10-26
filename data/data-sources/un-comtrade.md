---
about:
  label: UN Comtrade
  description: >-
    The UN Statistics Division's database of official imports and exports of
    goods and services, by product and partner, reported by nearly 200
    countries since 1962; free with registration.
  aliases:
    - Comtrade
    - UN Comtrade Database
  tags:
    - trade
    - imports
    - exports
    - customs
    - supply chains
    - API
datasource:
  coverage: nearly 200 reporting countries and areas, over 99% of world merchandise and services trade
  resolution: country by partner by product (HS, SITC, BEC codes for goods; EBOPS for services), with tariff-line detail where reported
  cadence: annual and monthly; datasets released continuously as countries send them; from 1962
  access: free preview without an account; free registration for downloads and API (100,000 records a call, 500 calls a day); paid premium for bulk files
  homepage: 'https://comtradeplus.un.org/'
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: unknown
  licence: UN copyright; internal use only, re-dissemination needs UNSD permission
domains:
  - people
relations:
  - predicate: alternative_to
    target: data-sources/observatory-of-economic-complexity
provenance:
  origin: agent
  sources:
    - title: Welcome to UN Comtrade – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/welcome-to-un-comtrade/'
    - title: Policy on Comtrade Data Use – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/policy-on-comtrade-data-use/'
    - title: Subscription Plans – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/subscriptions/'
    - title: How to Access UN Comtrade data? – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/how-to-access/'
    - title: What are the data sources for UN Comtrade? – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/what-are-the-data-sources-for-un-comtrade/'
    - title: 'Menu: Data Availability – UN Comtrade Help Center'
      url: 'https://uncomtrade.org/docs/data-availability/'
    - title: What is bulk file download? – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/bulk-files/'
    - title: Exports from one country may not always align perfectly with the imports of its trading partners. – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/exports-of-a-country-not-coincide-with-imports-of-its-partner/'
    - title: Developer tools for UN Comtrade Data – UN Comtrade Help Center
      url: 'https://uncomtrade.org/docs/developer-tools/'
    - title: 'Menu: Data – UN Comtrade Help Center'
      url: 'https://uncomtrade.org/docs/content-of-data/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
UN Comtrade is maintained by the UN Statistics Division (UNSD) of the UN Department of Economic and Social Affairs.[^1,2] It holds detailed import and export statistics for goods and services, reported by the statistical authorities of nearly 200 countries and areas since 1962, broken down by trading partner and product.[^1] UNSD says this covers over 99% of the world's merchandise and services trade.[^2] The figures come from the national agency in each country that publishes trade statistics, and through partners such as Eurostat, the WTO, the OECD, FAO and the IMF; data for the European Union comes from Eurostat.[^5]

Records give trade values, quantities and gross weight.[^1] Goods are coded in the Harmonized System (HS), SITC or BEC product classifications, and services in EBOPS; data is annual or monthly.[^6] Records may also carry the mode of transport, a second partner country and customs procedure codes, where countries report them.[^1,7,10] Tariff-line data, close to the records countries submit and sometimes more detailed than six-digit HS codes, is public too.[^1,10] There is no fixed release schedule. UNSD asks countries for data in February and June, and processes it as it arrives, often a provisional annual figure early in the year and revised figures later.[^6] A dashboard and an API show which countries and periods have been released.[^6]

A country's reported exports often do not match its partner's reported imports, especially for detailed products, because the two are recorded independently.[^8] Imports are valued CIF, including cost, insurance and freight, and exports FOB, free on board. Goods may also cross a year end in transit, pass through third countries, sit in customs warehouses or be classified differently.[^8] UNSD notes that imports usually follow the international recommendation more closely than exports, because the country of origin is checked for tariffs while the final destination may not be known at export.[^8]

Anyone can preview the data and use the public API without an account, under stricter rate limits, but downloading from the website needs registration.[^4] A free registered account allows downloads of up to 100,000 records a call and up to 500 API calls a day, with a free API key.[^3] Paid premium subscriptions, bought through the UN shop, add larger limits and bulk files, compressed packages of whole datasets.[^3,7] By UNSD's own example, the United States' 2024 merchandise trade, about 1.2 million records, takes at least 12 queries on a free account.[^4] Community packages exist for Python (comtradeapicall) and R (comtradr, reviewed by rOpenSci).[^9]

The United Nations holds the copyright. The data is provided for internal use by the organisation that obtains it, and re-disseminating it in any form needs UNSD's permission, apart from small amounts; sharing within a joint project between institutions is allowed.[^2] A licence agreement applies to free and premium access alike, and the source should be cited as "UN Comtrade".[^2]

For someone modelling a place, Comtrade answers which countries a country buys a product from and sells it to, in value and quantity, by year or by month.[^1,6] That shows, for example, where a country's aluminium or fertiliser comes from and how the sources shifted after a tariff or a closed route.[^1,6] A model that republishes Comtrade data, beyond small amounts, needs UNSD's permission first.[^2]
