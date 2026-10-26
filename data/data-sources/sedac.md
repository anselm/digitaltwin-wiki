---
about:
  label: SEDAC
  description: >-
    Gridded population, settlement, air-quality and vulnerability data from
    NASA's former data centre at Columbia University; since 2025 a closed
    archive of 350-plus datasets in Earthdata.
  aliases:
    - Socioeconomic Data and Applications Center
    - NASA SEDAC
  tags:
    - population
    - gridded population
    - human settlement
    - air quality
    - vulnerability
    - census
datasource:
  coverage: global, with some country and US collections
  resolution: varies; GPWv4 population grids at 30 arc-seconds, about 1 km at the equator
  cadence: none; the collections are complete and will not be updated
  access: free in NASA Earthdata Search with a free Earthdata Login
  format: varies by dataset
  homepage: 'https://www.earthdata.nasa.gov/news/data-from-sedac-available-again-earthdata-search'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: closed
  licence: varies; mostly CC BY 4.0
  note: A few collections are for non-commercial use only, and some carry Columbia University's or a partner's copyright.
domains:
  - people
  - places
relations:
  - predicate: alternative_to
    target: data-sources/worldpop
    note: gridded population from census areas, without new releases since 2025, against a group that still publishes yearly grids
  - predicate: part_of
    target: data-sources/nasa-earthdata
  - predicate: answers
    target: questions/how-would-these-people-respond
provenance:
  origin: agent
  sources:
    - title: 'Data From SEDAC Are Available Again in Earthdata Search | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/news/data-from-sedac-available-again-earthdata-search'
    - title: 'Common Metadata Repository collection search, keyword "CIESIN ESDIS" (read 2026-10-26)'
      url: 'https://cmr.earthdata.nasa.gov/search/collections.umm_json?keyword=CIESIN%20ESDIS&page_size=200'
    - title: 'Gridded Population of the World, Version 4 (GPWv4): Population Count, Revision 11 (CMR record)'
      url: 'https://cmr.earthdata.nasa.gov/search/concepts/C3540918004-ESDIS.html'
    - title: 'Earthdata Login | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/data/earthdata-login'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Socioeconomic Data and Applications Center (SEDAC) was a NASA data centre managed by Columbia University's CIESIN.[^1,3] NASA's 2025 notice gives CIESIN's name as the Center for Integrated Earth System Information; the dataset citations give it as the Center for International Earth Science Information Network, in Palisades, New York.[^1,3] NASA terminated the SEDAC contract on 30 April 2025, and its datasets were unavailable until 17 June 2025, when NASA's ESDIS project put all of them, more than 350 collections, into Earthdata Cloud.[^1] NASA says they are complete and will no longer be updated with new versions or collections.[^1]

The best known collection is Gridded Population of the World (GPW).[^2] Version 4, revision 11, estimates the number of people in each grid cell for 2000, 2005, 2010, 2015 and 2020, consistent with national censuses and population registers.[^3] It allocates the population of about 13.5 million national and sub-national administrative units proportionally to cells of 30 arc-seconds, about 1 km at the equator, with coarser versions down to 1 degree.[^3] The archive also holds the Global Rural-Urban Mapping Project, population estimates for low-elevation coastal zones, the Last of the Wild Project, anthropogenic biomes, US census and social vulnerability grids, and poverty maps.[^2] Its grids of fine particulate air pollution (PM2.5) are global from 1998 to 2022, and daily at 1 km for the contiguous US from 2000 to 2016.[^2]

The data are found by searching Earthdata Search for "CIESIN ESDIS", and a free Earthdata Login is needed to view and download them.[^1,4] Each collection carries its own terms.[^2] Most, GPWv4 among them, are under Creative Commons Attribution 4.0 or the same terms in other words: free to use, copy and adapt for any purpose with credit.[^2,3] A few are for non-commercial use only, and some carry the copyright of Columbia University or a partner such as the Wildlife Conservation Society.[^2] Records give a DOI for citation; GPWv4's is 10.7927/H4JW8BX5.[^3]

For someone modelling a place, SEDAC's grids say how many people live where, to put people into a flood, heat or air-quality model or to count who is exposed.[^2,3] GPW's last year is 2020; for later years and finer 100 m grids see [WorldPop](/data-sources/worldpop/).
