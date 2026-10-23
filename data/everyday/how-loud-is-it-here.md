---
about:
  label: How loud is it here, day and night?
  description: >-
    How much road, rail and aircraft noise reaches one address by day and at
    night, from public noise maps, health guidelines and commercial noise scores.
  tags:
    - noise
    - traffic noise
    - aircraft noise
    - night noise
    - noise maps
    - Lden
everyday:
  asked_by:
    - people choosing a home to buy or rent
    - parents choosing a bedroom or a school
    - people who sleep badly
    - neighbours of a planned road or runway
  answered_by:
    - acoustic consultants
    - listing-site noise scores
    - airport and road-authority noise maps
    - visiting at night
domains:
  - sensory
  - mobility
relations:
  - predicate: needs
    target: engines/cadnaa
  - predicate: needs
    target: data-sources/openstreetmap-osm
provenance:
  origin: agent
  sources:
    - title: 'National Transportation Noise Map (Bureau of Transportation Statistics, page dated 16 June 2026; read through the Wayback Machine, 10 October 2026, because bts.gov refuses requests)'
      url: 'http://web.archive.org/web/20261010160409/https://www.bts.gov/geospatial/national-transportation-noise-map'
    - title: 'National Transportation Noise Map (BTS Data Inventory story page)'
      url: 'https://data.bts.gov/stories/s/National-Transportation-Noise-Map/ri89-bhxh/'
    - title: 'Directive 2002/49/EC relating to the assessment and management of environmental noise (EUR-Lex)'
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32002L0049'
    - title: 'Environmental Noise Directive (European Commission)'
      url: 'https://environment.ec.europa.eu/topics/noise/environmental-noise-directive_en'
    - title: 'More than 20% of Europeans exposed to harmful noise pollution levels (European Environment Agency, 24 June 2025)'
      url: 'https://www.eea.europa.eu/en/newsroom/news/europeans-exposed-to-harmful-noise-pollution-levels'
    - title: 'Environmental noise guidelines for the European Region (WHO Regional Office for Europe, 2018)'
      url: 'https://iris.who.int/handle/10665/279952'
    - title: 'HowLoud'
      url: 'https://howloud.com/'
    - title: 'HowLoud FAQs'
      url: 'https://howloud.com/faqs'
    - title: 'HowLoud pricing'
      url: 'https://howloud.com/pricing'
    - title: 'CadnaA, noise prediction and mapping software (Datakustik)'
      url: 'https://www.datakustik.com/products/cadnaa/cadnaa'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Someone looking at a flat wants to know whether they will sleep with the window open. The answer turns on what is nearby and when it runs: a highway that carries trucks all night, a rail line, a flight path, a bar. It also turns on the building itself, which side of it a bedroom faces, and what stands between it and the source. An average over a whole day can hide a quiet afternoon and a loud night, so the useful answer comes in two parts, day and night.

## Who asks, and who they ask today

People buying or renting a home ask, and so do parents, light sleepers, and neighbours of a road widening or a new runway. Many visit at different hours, or ask the neighbours. Some read a noise score on a listing site. Developers and councils hire acoustic consultants, who measure on site and model the rest. Airports and road authorities publish their own contour maps, usually only near their own works.

## What answers it

**Noise maps from transport data.** In the United States, the Bureau of Transportation Statistics publishes the National Transportation Noise Map, with layers for aviation, road and rail noise for 2016, 2018, 2020 and 2022/2023 (aviation and rail 2022, road 2023), as downloadable data and an online map.[^1] It uses one metric, the 24-hour equivalent A-weighted sound level (24-hr LAeq), the average sound energy from transport over a day, in decibels.[^2] Road noise is computed from annual average daily traffic in the Federal Highway Administration's Highway Performance Monitoring System, with vehicle types and speeds, using the acoustical algorithms of TNM.[^2] Aviation noise averages a year's flight operations into one average day at airports with one or more jet departures a day; helicopters are left out.[^2] Rail noise is computed from transit timetables (GTFS), the North American Rail Network and the federal grade-crossing inventory.[^2] BTS says plainly that the map uses simplified modelling for national trends and should not be used to judge noise at an individual location or time.[^1,2] It ignores shielding by barriers and terrain, so it may overstate noise behind them, and it leaves out helicopters, ships, construction and other non-transport sources.[^1]

**Strategic noise maps in Europe.** The Environmental Noise Directive (2002/49/EC) requires EU countries to publish noise maps and noise action plans every five years for cities of more than 100,000 people, roads with more than 3 million vehicles a year, railways with more than 30,000 trains a year and airports with more than 50,000 take-offs or landings a year, and to consult the public on the plans.[^3,4] Its two headline indicators are Lden, which combines the day, evening and night levels of a year into one figure, and Lnight, the level over the night alone.[^3] By default the day runs from 07.00 to 19.00, the evening from 19.00 to 23.00 and the night from 23.00 to 07.00.[^3] For mapping, levels are computed at 4 metres above the ground at the most exposed façade, which is a good reason to read them as a building's worst side, not every room.[^3] The European Environment Agency reported in June 2025 that just over 110 million people in Europe live with transport noise above the EU reporting thresholds of 55 dB Lden and 50 dB Lnight, and about 150 million at levels above the WHO guidelines.[^5,3]

**Health guidelines.** The WHO Regional Office for Europe's Environmental Noise Guidelines (2018) say what level is too much, source by source. They strongly recommend keeping road traffic noise below 53 dB Lden and 45 dB Lnight, railway noise below 54 dB Lden and 44 dB Lnight, and aircraft noise below 45 dB Lden and 40 dB Lnight.[^6] For wind turbines they conditionally recommend below 45 dB Lden and make no night recommendation, and for all leisure noise combined, reducing the yearly average to 70 dB LAeq,24h.[^6] With them, a map reading becomes a plain answer: above or below the level linked to harm to health or sleep.

**Models for one street.** Commercial noise software such as [CadnaA](/engines/cadnaa/) computes levels building by building from traffic, rail and aircraft inputs, with buildings and terrain.[^10] Road geometry can come from [OpenStreetMap](/data-sources/openstreetmap-osm/).[^10] A measurement at the window remains the check on any model.

## Who sells an answer

HowLoud sells the Soundscore, a number from 50 (very loud) to 100 (very quiet) on HowLoud's home page and from 0 to 100 in its FAQ, built with what HowLoud calls patent-pending technology.[^7,8] According to HowLoud, the score accounts for vehicle traffic, air traffic and local sources such as restaurants, schools and stores.[^8] Road noise comes from the Federal Highway Administration's Traffic Noise Model; the airport and local-source methods are proprietary and use national data sets.[^8] HowLoud asks users to share data on sources such as busy train lines, heliports and night clubs.[^8] Apartments.com, beycome.com, Estately, Homes.com and the Staten Island Board of Realtors are listed as Soundscore customers, and HowLoud says buyers and renters use the score more than a million times a day.[^7] The API has a free plan under 2,500 queries a month, a $25 a month plan under 5,000, a $100 a month plan under 50,000, and an enterprise plan with access to raw data sources at a price on request.[^9] HowLoud reports no measured accuracy, and the Soundscore is a single number with no separate night figure.[^7,8]

## What a small look ahead adds

A lookup says how loud a place was in the year the map was made. A model can also be run on the changes still to come. A planned road or a widened one, a new runway or a changed departure route, a rail line that adds night freight, a bus route moved to the street, would each change the figures, and not equally by day and by night. The US map is computed from traffic counts and timetables. The same calculation can be rerun with tomorrow's counts for one bedroom window, and set against the WHO levels before anyone signs a lease or grants a planning consent.

## Layers it shares

Road traffic, rail and flight schedules, building footprints and heights, and population also serve the air quality, heat and commute questions.
