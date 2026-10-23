---
about:
  label: 'Taking a salmon farm off diesel: Huar Norte, Chile'
  description: >-
    Mowi's Huar Norte salmon site in southern Chile added floating solar and
    batteries in 2025 to cut the diesel its generator burns, with about 57% of
    the site's power expected from the sun. How far can that go, here and at
    other pens with no cable to shore?
  tags:
    - aquaculture
    - salmon
    - floating solar
    - diesel
    - batteries
    - off-grid
scenario:
  place: Huar Norte salmon farm, Los Lagos region, Chile
  since: '2025'
domains:
  - energy
  - food
  - water
relations:
  - predicate: example_of
    target: questions/electrification
provenance:
  origin: agent
  sources:
    - title: 'First floating solar-powered fish farming pen in Chile (AKVA group)'
      url: 'https://www.akvagroup.com/news/first-floating-solar-powered-fish-farming-pen-in-chile'
    - title: 'AKVA, Alotta, and Fjord Maritime partner on solar-powered fish farm for Mowi (SalmonBusiness, 6 June 2025)'
      url: 'https://www.salmonbusiness.com/akva-alotta-and-fjord-maritime-partner-on-solar-powered-fish-farm-for-mowi/'
    - title: 'Chile''s first solar-powered net pen aims to cut aquaculture emissions and reduce diesel use (Global Seafood Alliance, 20 June 2025)'
      url: 'https://www.globalseafood.org/advocate/chiles-first-solar-powered-net-pen-aims-to-cut-aquaculture-emissions-and-reduce-diesel-use/'
    - title: 'Mowi debuts Chilean solar fish farm (World Fishing)'
      url: 'https://www.worldfishing.net/aquaculture/mowi-debuts-chilean-solar-fish-farm/1509700.article'
    - title: 'A ring of floating solar around a Chilean salmon farm erased 36,750 gallons of diesel a year (Ecoportal, 21 August 2026)'
      url: 'https://www.ecoportal.net/en/island-chile-floating-solar-panels/28686/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Salmon pens out at sea run feeders, lights, cameras, oxygen sensors and pumps around the clock, and with no cable to shore that power usually comes from a diesel generator, with fuel brought out by boat. In mid-2025 Mowi switched on Chile's first floating solar system at a salmon farm, at its Huar Norte site. AKVA group built the pens and fitted the solar panels to them. Alotta Energy supplies the power as a service. The Norwegian company had already run the same system on the Norwegian coast. Fjord Maritime provided the batteries and the energy management system. The companies expect the sun to cover about 57% of the site's power, saving about 139,200 litres of diesel and 350 tonnes of carbon dioxide a year. These are projections; none of the reports found gives measured results. The site is in the Los Lagos region, on one report.

## Who needs an answer

- Salmon farm operators, deciding whether to put solar and batteries on other sites, and how big.
- The companies that sell power as a service, sizing systems for sites with different light, weather and loads.
- The crews at the pens, since the system is expected to cut boat runs for fuel and generator noise.

## The domains it chains

Sunlight and weather over a southern Chilean site through the year. The electricity the farm draws hour by hour for feeders, lights, cameras, sensors and pumps. Batteries, with a generator kept as backup. Boats carrying fuel out to the pens.

## What a twin should let people try

- Sizing: how much more panel and battery would take the share from 57% towards all of it, and where the cost stops being worth it?
- Seasons: how far does the share fall in the short days of a southern winter, and what has to run on diesel then?
- Other sites: which farms, given their light, weather and loads, would gain most from the same system?
- After a year: how do the projected savings compare with the diesel the generator burned?

## Where to start

The figures above come from the companies' announcements, through AKVA group's own page. An energy system model such as [PyPSA](/engines/pypsa-pypsa-eur/) can size generation and storage against an hourly load; the [use case on electrification](/questions/electrification/) lists what else such a model needs.
