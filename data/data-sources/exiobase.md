---
about:
  label: EXIOBASE
  description: >-
    Global input-output database linking 44 countries and five world regions
    through trade, with each industry's emissions, materials, water, land and
    jobs, yearly from 1995; free for non-commercial use.
  aliases:
    - EXIOBASE 3
    - EE-MRIO
  tags:
    - input-output
    - supply chains
    - consumption footprints
    - emissions
    - materials
    - trade
datasource:
  coverage: 44 countries (the 27 EU members and 17 major economies) and five rest-of-world regions
  resolution: 163 industries and 200 products per country; 417 emission and 662 material and resource categories
  cadence: annual releases; version 3.11.2 (September 2026) has tables for 1995 to 2024, recent years now-cast
  access: free download from Zenodo for non-commercial use; commercial licences on request
  homepage: 'https://www.exiobase.eu/'
open:
  source: unknown
  data: partly
  api: unknown
  participation: unknown
  licence: customised CC BY-NC-SA 4.0 (v3.9 and later); commercial licence available
domains:
  - people
  - climate
relations:
  - predicate: alternative_to
    target: data-sources/gtap
provenance:
  origin: agent
  sources:
    - title: Exiobase
      url: 'https://www.exiobase.eu/'
    - title: About Exiobase - Exiobase
      url: 'https://exiobase.eu/about-exiobase/'
    - title: EXIOBASE 3 (Zenodo record, version 3.11.2)
      url: 'https://zenodo.org/records/23039074'
    - title: EXIOBASE 3, LICENSE.txt (in the Zenodo record)
      url: 'https://zenodo.org/records/23039074/files/LICENSE.txt'
    - title: EXIOBASE 3, Changelog.txt (in the Zenodo record)
      url: 'https://zenodo.org/records/23039074/files/Changelog.txt'
    - title: 'EXIOBASE 3: Developing a Time Series of Detailed Environmentally Extended Multi-Regional Input-Output Tables'
      url: 'https://doi.org/10.1111/jiec.12715'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the 2018 paper was read for its citation
    details only
  status: draft
---
EXIOBASE is a global, detailed multi-regional environmentally extended supply-use table and input-output table.[^1,2] It was developed by a consortium of research institutes in projects financed by the European research framework programmes.[^2] XIO Sustainability Analytics now produces annual updates to its core economic, energy and emission tables.[^3] The method behind version 3 is described in "EXIOBASE 3: Developing a Time Series of Detailed Environmentally Extended Multi-Regional Input-Output Tables" by Stadler and colleagues, in the Journal of Industrial Ecology, 2018.[^2,6]

An input-output table describes an economy as a grid of which industries buy from which, and what they sell to final buyers such as households. A multi-regional table joins many countries' tables through trade, so the supply chain of a product bought in one country can be followed into other countries' industries. "Environmentally extended" means each industry also carries accounts of what it emits and uses. EXIOBASE was built this way: national supply-use tables were harmonised, emissions and resource extraction were estimated for each industry, and the countries were linked through trade, so that the environmental impacts of final consumption can be analysed by product group.[^1,2]

The monetary version of EXIOBASE 3 covers 44 countries, the 27 EU members and 17 major economies, and five rest-of-world regions.[^2,3] Each has 200 products and 163 industries, with 417 emission categories, 662 material and resource categories, and employment by three skill levels for each gender.[^2] A hybrid version, in mixed units, exists for 2011.[^2] Version 3.11.2, published on Zenodo on 30 September 2026, has tables for each year from 1995 to 2024.[^3] The core is built from official supply-use tables, which usually lag one to two years; later years are "now-cast" from global trade data, IMF macroeconomic data and environmental data where available.[^3] The maintainers advise caution with the now-cast years.[^3] In that release emission totals were re-anchored to EDGAR v8.1, employment accounts were extended through 2024 and deforestation accounts were added.[^5] Version 1 covers the year 2000 and version 2 the year 2007.[^2]

The data is downloaded free from Zenodo.[^1,3] Since version 3.9 the non-commercial licence is a customised CC BY-NC-SA licence. It allows free use by universities and non-profit research institutes, environmental and social NGOs, government bodies, and publicly owned organisations working in the public interest. It excludes commissioned work, use that earns revenue other than grant funding, and any use by for-profit companies.[^4] Results may be published with attribution to EXIOBASE, but not its coefficients, multipliers or raw data points.[^4] The material accounts, from the Vienna University of Economics and Business, are under CC BY-SA instead.[^4] Commercial licences are arranged by email.[^3,4] The project's home page still describes EXIOBASE 3 as CC BY-SA 4.0; the Zenodo record says the terms differ from those of earlier versions such as 3.8.[^1,3] The tables are too large for a spreadsheet, and the maintainers recommend Python, R or Matlab.[^3] PyMRIO, an open-source Python package, downloads the tables from Zenodo and runs input-output analysis.[^3]

For someone modelling a place, EXIOBASE shows, product by product, the emissions, materials, water and land involved in a country's consumption and the countries where they arose.[^1,2] One application the maintainers name is spend-based emission factors: estimates of emissions per unit of money spent on a product.[^3] The CREEA booklet "The Global Resource Footprint of Nations" is an example of this work, with carbon, water, land and materials footprints calculated from EXIOBASE 2.[^1] Its smallest unit is a country or one of the five rest-of-world regions.[^3]
