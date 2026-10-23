---
about:
  label: Portolan
  description: >-
    Free interactive web map of world trade that shows bilateral trade flows,
    tariff rates and tariff history, and ships a day through ten
    maritime chokepoints, each value shown with its source and reporting date.
  tags:
    - trade
    - tariffs
    - shipping
    - chokepoints
    - sanctions
tool:
  form: hosted web map
  group: Transport and crowds
  homepage: 'https://portolan.cc'
  licence: unknown
domains:
  - mobility
  - energy
open:
  source: closed
  data: open
  api: unknown
  participation: unknown
  note: The site says it is built on public data from BACI (CEPII), the IMF, the WTO, the World Bank and the US Census Bureau; the site itself is marked all rights reserved.
provenance:
  origin: agent
  sources:
    - title: 'Portolan: world trade routes, tariffs and maritime chokepoints'
      url: 'https://portolan.cc'
    - title: 'Strait of Hormuz: status and shipping traffic | Portolan'
      url: 'https://portolan.cc/chokepoints/hormuz'
    - title: 'Yuma (@yumahey) on X, 26 July 2026'
      url: 'https://x.com/yumahey/status/2081473121953911112'
    - title: 'About the data | Portolan'
      url: 'https://portolan.cc/about'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Portolan is a map of world trade in a browser. It draws trade flows between countries, on sea routes where they mostly go by ship, with layers for sea lanes, air corridors and rail bridges, shades each country by the import tariff it charges, and marks container ports and maritime chokepoints.[^1] A timeline lists tariff actions back to 1930, coloured by who took them: the United States, China, the EU or others.[^1] Selecting a country, a flow or a passage shows its values, the date they were reported and the source.[^1]

It was made by Yuma (@yumahey on X), who described it in July 2026 as covering 300 bilateral trade flows worth about $15 trillion, 10 maritime chokepoints and more than 200 significant tariff events from 1930 to 2026.[^3] The page carries a "Built on Founden.ai" badge.[^1]

For each chokepoint, Portolan shows ships a day from IMF PortWatch's satellite ship-tracking (AIS) as a seven-day average set against a year earlier, with a monthly series since 2019.[^2,4] It adds any active PortWatch alert and a short dated log of events, each linked to its news source.[^2] It warns that ships sailing with their transponders off are not counted, so the figure understates traffic during a disruption.[^2] In October 2026, for example, it showed the [Strait of Hormuz](/scenarios/strait-of-hormuz-closure/) at 3.7 ships a day in the week to 18 October, down 96% on a year earlier.[^1,2]

Trade values come from BACI (CEPII) for annual goods trade and the IMF's trade statistics for recent trends; tariffs come from the World Bank and the WTO, with the US Census Bureau for US duties collected.[^4]
