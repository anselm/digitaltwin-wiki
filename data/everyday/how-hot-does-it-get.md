---
about:
  label: How hot does this place get?
  description: >-
    How hot one street or house gets in summer turns on the regional climate,
    nearby shade and paving, humidity and the changing count of very hot days.
  tags:
    - extreme heat
    - urban heat island
    - land surface temperature
    - heat index
    - buying a house
everyday:
  asked_by:
    - people choosing where to live
    - parents and carers of older people
    - outdoor workers
    - city staff planning cooling
  answered_by:
    - weather forecasts and National Weather Service heat alerts
    - city heat maps where a mapping campaign has run
    - listing sites showing First Street's Heat Factor
    - Climate Central's Climate Local pages
domains:
  - climate
  - places
  - people
relations:
  - predicate: example_of
    target: questions/weather-and-climate
  - predicate: needs
    target: data-sources/high-resolution-canopy-height
provenance:
  origin: agent
  sources:
    - title: 'Urban Heat Islands (Heat.gov, NIHHIS; Wayback Machine copy of 17 October 2026)'
      url: 'http://web.archive.org/web/20261017013330/https://heat.gov/urban-heat-islands/'
    - title: 'Urban Heat Islands Mapping Campaign Program (Heat.gov, NIHHIS; Wayback Machine copy of 17 October 2026)'
      url: 'http://web.archive.org/web/20261017013242/https://heat.gov/urban-heat-islands-mapping-campaign-program/'
    - title: 'Shandas, Voelkel, Williams and Hoffman, Integrating Satellite and Ground Measurements for Predicting Locations of Extreme Urban Heat, Climate 7(1), 2019 (OpenAlex record)'
      url: 'https://api.openalex.org/works/doi:10.3390/cli7010005'
    - title: 'Learn About Heat Islands (US EPA)'
      url: 'https://www.epa.gov/heatislands/learn-about-heat-islands'
    - title: 'Measuring Heat Islands (US EPA)'
      url: 'https://www.epa.gov/heatislands/measuring-heat-islands'
    - title: 'Landsat Collection 2 Surface Temperature (USGS)'
      url: 'https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-temperature'
    - title: 'About the Climate Explorer (NOAA Climate Program Office and NEMAC)'
      url: 'https://crt-climate-explorer.nemac.org/about/'
    - title: 'The Data Behind Heat Factor (First Street)'
      url: 'https://firststreet.org/methodology/heat'
    - title: 'U.S. Heat Model Methodology (First Street, 3 July 2024)'
      url: 'https://firststreet.org/research-library/heat-model-methodology'
    - title: "Zillow introduces First Street's comprehensive climate risk data on for-sale listings across the US (Zillow, 26 September 2024)"
      url: 'https://zillow.mediaroom.com/2024-09-26-Zillow-introduces-First-Streets-comprehensive-climate-risk-data-on-for-sale-listings-across-the-US'
    - title: 'Zillow drops climate risk scores after agents complained of lost sales (TechCrunch, 1 December 2025)'
      url: 'https://techcrunch.com/2025/12/01/zillow-drops-climate-risk-scores-after-agents-complained-of-lost-sales'
    - title: 'Climate change in Birmingham, Alabama (Climate Central)'
      url: 'https://www.climatecentral.org/climate-local/41393'
    - title: 'Data and Methods, Cool Cities Lab (World Resources Institute)'
      url: 'https://coolcities.wri.org/data-and-methods'
    - title: 'Cool Cities Lab (World Resources Institute)'
      url: 'https://coolcities.wri.org/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed; heat.gov refused direct requests and was read through the Wayback Machine'
  status: draft
---
How hot does it get here? A weather forecast gives one number for a whole city. The heat on one street can be well above that reading. It depends on the regional climate first. Then it depends on what is close by: shade, grass or asphalt, tall buildings that block the wind, and the humidity. Over years it also depends on how often the hottest days come.

## Who asks, and who they ask today

People choosing where to live ask it, as do families of older people, outdoor workers and city staff deciding where to plant trees or open cooling centres. Today they read the forecast and National Weather Service heat alerts, a city heat map if their city has made one, the heat score on a listing site, or nothing at all.

## What answers it

**The urban heat island.** Heat.gov is the site of the National Integrated Heat Health Information System (NIHHIS), a NOAA-led interagency group.[^2] It explains that unshaded roads and buildings heat up in the day and give that heat back to the air, so built-up areas can be 15°F to 20°F warmer in mid-afternoon than nearby vegetated land.[^1] Neighbourhoods of the same city at the same moment can differ by 20°F.[^1] The causes it lists are dark heat-storing surfaces, missing trees, tall buildings that trap heat and block wind, and waste heat from cars and air conditioners.[^1]

**Air temperature and surface temperature are different things.** The EPA separates surface heat islands, where roofs and roads are hotter than natural ground, from atmospheric heat islands, where the air itself is warmer.[^4] Surfaces vary more than air in the day and are similar at night; a conventional roof on a warm day can be as much as 66°F hotter than the air.[^4] Surface temperature is measured from satellites and aircraft, or with hand-held instruments.[^5] Air temperature is measured by weather stations, or by cars carrying sensors along a route.[^5] Satellites cover whole cities but miss detail within neighbourhoods and see only on clear days at the time they pass. Stations and car routes cover only part of a city.[^5] Estimates of air temperature made from surface readings are less reliable than direct measurements.[^5]

**Landsat surface temperature.** The USGS publishes Landsat Collection 2 Surface Temperature, in kelvin, from the thermal bands of Landsat 4, 5, 7, 8 and 9, with records back to August 1982.[^6] Only daytime scenes are processed, and clouds and cloud shadows can cause errors.[^6] The emissivity it relies on is an average for 2000 to 2008, which can give wrong values where vegetation has changed.[^6]

**Community heat mapping.** Since 2017 NOAA has funded CAPA Strategies, a private company, to run Heat Watch campaigns in more than 80 U.S. communities.[^2] Volunteers fix sensors to their cars and drive set routes, recording temperature and humidity with GPS positions.[^2] CAPA combines those readings with satellite imagery by machine learning into maps of air temperature and heat index, and writes a report on how heat is spread across the city in the morning, afternoon and evening.[^2] The data and reports can be downloaded from Heat.gov.[^2] The method is described by Shandas and colleagues in Climate (2019): in Baltimore, Richmond and Washington, D.C., air temperatures on hot days differed by up to 10°C between the coolest and warmest places at the same time, driven mainly by the landscape.[^3]

Tree cover and shade come from layers such as [High Resolution Canopy Height Maps](/data-sources/high-resolution-canopy-height/). The [Cool Cities Lab](/engines/cool-cities-lab/) from the World Resources Institute puts air temperature, land surface temperature and shade side by side and models the cooling from trees and cool roofs, at neighbourhood scale rather than for single sites.[^13,14]

## Who sells an answer

**First Street** publishes Heat Factor for each property. Its Extreme Heat Model calibrates Landsat 8 land surface temperature to air temperature from NOAA weather stations, adds tree canopy, land cover and humidity, and maps the average high "feels like" temperature in the hottest month at 30 metres across the contiguous states.[^8,9] It projects that 30 years ahead under the RCP4.5 scenario, and the score is the average over those 30 years.[^8] First Street also counts local hot days, set by the area's seven hottest days of the year, days above National Weather Service safety thresholds, and an estimated cost of cooling the house.[^8,9] It says the heat product is free for public, noncommercial use, and that its methods have been submitted to peer-reviewed journals.[^8,9] Its own analysis finds about 8 million people in 2023 living in counties with at least one property likely to see a heat index of 125°F or more, rising to about 107 million in 2053 with population held constant.[^9]

**Listing sites.** Zillow showed First Street's heat data on for-sale listings from September 2024, along with flood, wildfire, wind and air quality, and replaced the scores with a link to First Street in November 2025; TechCrunch reported that Realtor.com, Redfin and Homes.com still showed First Street data.[^10,11]

**Climate Central's** [Climate Local](/communication/climate-local/) pages are free and count the change in extremely hot days since 1970, city by city. For Birmingham, Alabama, that is 14 more days a year above 93.15°F, a threshold set as hotter than 95% of local days in 1991 to 2020, from NOAA data.[^12] They describe a city, not a street.

## What a small look ahead adds

A heat map shows one summer, or one campaign day. NOAA's [Climate Explorer](https://crt-climate-explorer.nemac.org/) gives projected counts of days above set thresholds by county, under lower and higher emissions.[^7] A model of the place can carry those counts down to the street, using the measured difference between this block and the city's weather station. It can then say how many nights a year a given house would stay too warm to sleep without cooling, now and in twenty years, and how much a row of street trees or a lighter roof would change that.

## Layers it shares

Tree canopy, land cover, building heights and climate projections, which the flood, garden, solar and energy-cost questions also use.
