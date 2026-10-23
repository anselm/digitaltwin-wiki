---
about:
  label: "What will grow in this garden?"
  description: >-
    Which plants will survive and do well at one address, judged from its
    winter cold, frost dates, soil, sun and rain, now and under a warmer
    climate.
  tags:
    - gardening
    - hardiness zones
    - soil
    - frost dates
    - planting
everyday:
  asked_by:
    - home gardeners
    - new homeowners
    - community gardens
    - landscapers
  answered_by:
    - cooperative extension services and Master Gardener volunteers
    - local nurseries
    - garden planning apps
    - the USDA zone lookup by ZIP code
domains:
  - food
  - climate
  - ecology
relations:
  - predicate: needs
    target: data-sources/inaturalist
  - predicate: needs
    target: engines/dssat
provenance:
  origin: agent
  sources:
    - title: 'USDA Plant Hardiness Zone Map (USDA Agricultural Research Service)'
      url: 'https://planthardiness.ars.usda.gov/'
    - title: 'Map Creation (USDA Plant Hardiness Zone Map)'
      url: 'https://planthardiness.ars.usda.gov/pages/map-creation'
    - title: 'How to Use the Maps (USDA Plant Hardiness Zone Map)'
      url: 'https://planthardiness.ars.usda.gov/pages/how-to-use-the-maps'
    - title: 'Soil Survey Geographic Database (SSURGO) (USDA NRCS)'
      url: 'https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo'
    - title: 'Web Soil Survey (USDA NRCS)'
      url: 'https://websoilsurvey.nrcs.usda.gov/app/'
    - title: 'U.S. Climate Normals (NOAA National Centers for Environmental Information)'
      url: 'https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals'
    - title: 'Interactive map: Average date of last spring freeze across the United States (NOAA Climate.gov, 17 April 2025)'
      url: 'https://www.climate.gov/news-features/understanding-climate/interactive-map-average-date-last-spring-freeze-across-united'
    - title: 'Extension Master Gardener'
      url: 'https://mastergardener.extension.org/'
    - title: 'Garden Planner (GrowVeg)'
      url: 'https://www.growveg.com/garden-planner-intro.aspx'
    - title: 'Environmental Insights Explorer (Google)'
      url: 'https://insights.sustainability.google/labs/treecanopy'
    - title: 'Projected changes in cold hardiness zones and suitable overwinter ranges of perennial crops over the United States (Parker and Abatzoglou, Environmental Research Letters, 2016)'
      url: 'https://iopscience.iop.org/article/10.1088/1748-9326/11/3/034001'
    - title: 'DSSAT Overview (DSSAT.net)'
      url: 'https://dssat.net/about/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Someone standing in a yard wants to know what to plant there: which shrubs will live through the winter, when it is safe to put out tomatoes, whether the ground will drain. The answer turns on a few things about that one spot. How cold the coldest night of the year usually gets. When the last spring frost and first autumn frost fall, and so how long the season is. What the soil is. How much sun reaches the bed, and how much rain arrives and when.

## Who asks, and who they ask today

Home gardeners, people who have just bought a house, community gardens and landscapers ask it every spring. They can look up their hardiness zone or ask a nursery or a neighbour. The public expert in the United States is the Cooperative Extension service of the land-grant universities, and its Extension Master Gardener volunteers: more than 76,500 of them in 49 states, the program says, who answer questions through helplines, workshops and plant clinics.[^8] The program began in Washington State in 1973.[^8] Garden planning apps sell a planting calendar for an address.

## What answers it

**Winter cold.** The USDA Plant Hardiness Zone Map, from the Agricultural Research Service, is the standard first step.[^1] It is based on the average annual extreme minimum winter temperature, in 10°F zones from 1 (coldest) to 13 (warmest), each split into 5°F halves such as 7a and 7b.[^1,2] Oregon State University's PRISM Climate Group made the 2023 edition from 1991 to 2020 records at 13,625 stations.[^2] It interpolated them to a grid of cells about half a mile on a side, allowing for elevation, coasts, temperature inversions and whether a place sits on a ridge, slope or valley floor.[^2] It is generally about a quarter zone warmer than the 2012 map across much of the country, largely because of the newer averaging period, though some shifts, cooler as well as warmer, come from more stations and better interpolation.[^2] Anyone can look it up by ZIP code.[^1] The map's own guidance calls it a general guide for perennials.[^3] Wind, soil type and moisture, humidity, snow, winter sunshine, summer heat, frost pockets and small heat islands also decide what survives, and the map leaves them out.[^3]

**Frost dates and season length.** NOAA's National Centers for Environmental Information publish the U.S. Climate Normals for 1991 to 2020, from more than 7,300 stations reporting temperature and more than 15,000 reporting precipitation, recalculated every ten years.[^6] They include growing season length for several temperature thresholds and growing degree days.[^6] NOAA's Climate.gov map of the last spring freeze uses them: its date is the day after which the chance of 32°F or colder falls below 50 percent, and the Normals also give the 10 to 40 percent dates for gardeners who want less risk.[^7]

**Soil.** The Soil Survey Geographic Database (SSURGO) from USDA's Natural Resources Conservation Service holds a century of soil mapping by the National Cooperative Soil Survey, made by walking the land and testing samples, at scales from 1:12,000 to 1:63,360.[^4] Each map unit lists its soils and properties such as available water capacity, soil reaction (pH) and flooding frequency.[^4] Web Soil Survey shows it for any area a person draws, and NRCS says it covers more than 95 percent of the nation's counties.[^5] At the scale of one garden bed it is a starting point, not a measurement of that bed.

**Rain.** The same Climate Normals give typical monthly precipitation for the nearest station.[^6]

**Sun and shade.** The hours of sun on one bed can be worked out from building and tree heights and the sun's path, as rooftop solar services already do. Google's Environmental Insights Explorer, for example, estimates the solar potential of buildings from sunshine exposure, weather patterns and roof dimensions.[^10]

**What already grows nearby.** Plants that neighbours have recorded on [iNaturalist](/data-sources/inaturalist/) show what survives in the surrounding streets.

## Who sells an answer

GrowVeg's Garden Planner says it builds sowing, planting and harvest calendars from the nearest of more than 5,000 weather stations, sends email reminders, and lets people outside its coverage type in their own frost dates.[^9] It offers a seven-day free trial without payment details.[^9] Nurseries give advice alongside what they sell.

## What a small look ahead adds

A zone lookup gives the climate of the last thirty years, but a tree planted now will live through the next thirty. Parker and Abatzoglou (Environmental Research Letters, 2016) projected the coldest night of the year for 2041 to 2070 with 20 downscaled climate models, mainly under a high-emissions scenario. They found it warming about 40 percent more than mean winter minimum temperatures, moving at an average of 21.4 km a decade, with widespread shifts in hardiness zones.[^11] A model of one garden could show which zone it will likely be in when a fruit tree reaches bearing age, how the frost dates shift, and whether a dry month in summer is becoming drier, using the same soil and sun. A crop model such as [DSSAT](/engines/dssat/) runs that kind of question for farm crops from daily weather, soil and management.[^12] The USDA notes that changes between editions of its map are not reliable evidence of warming.[^2] A look ahead should come from the projections themselves.

## Layers it shares

Soil, frost and rain normals, sun and shade from building and tree heights, and climate projections, which the shade, heat, flood and solar questions also need.
