---
about:
  label: GTAP Data Base
  description: >-
    Purdue University's database of production, consumption and trade for 145
    countries and 18 regions, built for economy-wide models of trade policy;
    the current release is sold, older ones are free.
  aliases:
    - Global Trade Analysis Project
    - GTAP 12
    - GTAP model
  tags:
    - trade
    - tariffs
    - general equilibrium
    - economy
    - supply chains
    - land use
datasource:
  coverage: 'world; GTAP 12 distinguishes 145 countries and 18 aggregate regions'
  resolution: 65 goods and services sectors; land use in 18 agroecological zones
  cadence: 'a new release every few years; GTAP 12 has reference years 2004, 2007, 2011, 2014, 2017, 2019 and 2023'
  access: current release sold with a one-time fee, from $400 to $10,000 by user type and country income; releases at least two versions old free
  homepage: 'https://www.gtap.agecon.purdue.edu/'
open:
  source: unknown
  data: partly
  api: unknown
  participation: open
  licence: commercial for the current release; free and unrestricted for archived releases
domains:
  - people
  - food
relations:
  - predicate: alternative_to
    target: data-sources/exiobase
provenance:
  origin: agent
  sources:
    - title: 'About GTAP: Global Trade Analysis Project'
      url: 'https://www.gtap.agecon.purdue.edu/about/project.asp'
    - title: 'GTAP Data Bases: GTAP Data Base'
      url: 'https://www.gtap.agecon.purdue.edu/databases/default.asp'
    - title: 'GTAP Data Bases: GTAP 12 Data Base'
      url: 'https://www.gtap.agecon.purdue.edu/databases/v12/'
    - title: 'GTAP Data Bases: GTAP Data Base Pricing'
      url: 'https://www.gtap.agecon.purdue.edu/databases/pricing.asp'
    - title: 'GTAP Data Bases: GTAP Data Base Archives'
      url: 'https://www.gtap.agecon.purdue.edu/databases/archives.asp'
    - title: 'GTAP Models: Home'
      url: 'https://www.gtap.agecon.purdue.edu/models/default.asp'
    - title: 'The Global Trade Analysis Project (GTAP) Data Base: Version 12'
      url: 'https://doi.org/10.21642/JGEA.100201AF'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the 2025 paper was read through its
    abstract and citation details only
  status: draft
---
The Global Trade Analysis Project (GTAP) is coordinated by the Center for Global Trade Analysis at Purdue University.[^1] Its network numbered 35,599 people when its About page was read in October 2026, and a consortium of 26 national, international and private institutions provides the Center's baseline funding.[^1] The project assembles databases, develops economic models and teaches courses in their use.[^1] Its own research covers trade and industrial policy, energy transitions, climate change, economic development, biodiversity, pollution and the circular economy.[^1]

The centrepiece is the GTAP Data Base, which describes bilateral trade, production, consumption and the intermediate use of goods and services for the whole world.[^2] It is a consistent picture of the world economy for a given reference year, built from national input-output tables, which record what each industry buys from the others, together with trade, macroeconomic, energy and protection data.[^3] Members of the network supply much of the data, and new contributions must come with their sources and methods.[^2] GTAP says its purpose is to feed simulation models with a consistent set of economic facts rather than to publish input-output tables, and points readers who only want to compare economic figures to sources such as the World Bank, the IMF and FAO.[^3]

GTAP 12, the current release, is described in a 2025 paper by Aguiar and colleagues in the Journal of Global Economic Analysis.[^7] It distinguishes 145 countries and 18 aggregate regions for seven reference years, 2004, 2007, 2011, 2014, 2017, 2019 and 2023, across 65 goods and services sectors.[^7] Bilateral trade and international transport margins link every country and region.[^7] It is the first release to build land use and land cover, in 18 agroecological zones, into the standard database, and greenhouse gas emissions data come alongside.[^7]

The data is designed for the GTAP Model.[^3] It is a computable general equilibrium model, in which prices adjust until supply meets demand in every market of an economy at once.[^6] The standard model covers many regions and sectors, assumes perfect competition, and treats goods from different countries as imperfect substitutes (the Armington assumption).[^6] It is written in GEMPACK and run through RunGTAP, a free Windows interface; a dynamic version, GDyn, adds investment and foreign ownership of capital.[^6] Users first aggregate the regions and sectors they need with the GTAPAgg or FlexAgg programs, then run the model to study trade, environmental or migration policies.[^3]

The current release is sold. Proceeds help pay for the next one, and every purchase is a one-time fee for permanent access to that version.[^2,4] In October 2026 GTAP 12 cost $10,000 for a for-profit company, $8,000 for a non-profit or a government office, and from $1,500 to $5,800 for universities, at the standard price for high- and upper-middle-income countries.[^4] Prices are lower for buyers in lower-middle and low-income countries, down to $400 for a single academic user, and are not negotiable.[^4] Releases at least two versions old are free and unrestricted to use, though they should be cited.[^5] The newest free one is GTAP 10, with reference years 2004, 2007, 2011 and 2014, 141 regions and 65 sectors.[^5] The aggregation program GTAPAgg runs on Windows.[^3]

For someone modelling a place, GTAP is a starting point for asking how a tariff, a trade agreement or a climate policy moves production, prices and trade between countries and sectors.[^1,3] It works at the scale of countries and groups of countries, and GTAP runs courses from introductory to advanced for those learning to use the data and models.[^1,7]
