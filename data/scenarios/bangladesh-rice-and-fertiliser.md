---
about:
  label: Bangladesh's rice and the fertiliser that comes through Hormuz
  description: >-
    Bangladesh grows about 7% of the world's rice and imports much of its
    fertiliser through the Strait of Hormuz. If trade through the strait stays
    disrupted, how much of next year's crop is at risk, and who else feels it?
  tags:
    - Bangladesh
    - rice
    - fertiliser
    - food security
    - Strait of Hormuz
scenario:
  place: Bangladesh, and the fertiliser route through the Strait of Hormuz
  since: '2026'
  scale: world
domains:
  - food
  - mobility
  - people
relations:
  - predicate: needs
    target: engines/dssat
  - predicate: needs
    target: data-sources/faostat
provenance:
  origin: agent
  sources:
    - title: 'How Harvest2Market Connects Crop, Trade, and Food Security Data (NASA Harvest, 26 May 2026)'
      url: 'https://www.nasaharvest.org/news/how-harvest2market-connects-crop-trade-and-food-security-data'
    - title: 'Yohan (@yohaniddawela) on X, 8 July 2026'
      url: 'https://x.com/yohaniddawela/status/2074802316054593856'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The 7% is a recent five-year average, and the imported fertiliser passes through the [Strait of Hormuz](/scenarios/strait-of-hormuz-closure/).[^1] NASA Harvest's Harvest2Market tool flags ongoing trade disruptions as a possible factor in Bangladesh's future rice production.[^1] Followed as a chain on the platform, a disruption at the strait threatens the fertiliser, less fertiliser threatens the next crop, and a weaker crop threatens supply and prices across the region.[^2]

## Who needs an answer

- Bangladesh's agriculture and food ministries, deciding whether to secure fertiliser by other routes or stockpile rice.
- Famine early-warning analysts, who need to see a risk before it shows in the fields.
- Governments and traders in countries that depend on the same rice market.
- Farmers deciding how much fertiliser to buy at the prices on offer.

## The domains it chains

Shipping through a disrupted strait; fertiliser supply and price; how a rice crop responds to less fertiliser; harvests, stocks and prices in Bangladesh; and trade with the countries around it.

## What a twin should let people try

- Yield: if fertiliser use falls by a given share in the next season, how much rice is lost, and where in the country?
- Substitution: how much fertiliser can come by other routes, and at what extra cost and delay?
- Spread: if Bangladesh's harvest falls, how do prices and supply move in the region?

## Where to start

NASA Harvest's Harvest2Market, built with support from the Famine Early Warning Systems Network (FEWS NET), puts crop conditions, trade relationships and food-security indicators side by side, and draws on the GEOGLAM Crop Monitor's monthly assessments of crop conditions worldwide.[^1] Bangladesh is the worked example its team demonstrated at the Center for Strategic and International Studies' AI for Food Security Forum.[^1] A crop model such as [DSSAT](/engines/dssat/) can estimate how yield responds to fertiliser.
