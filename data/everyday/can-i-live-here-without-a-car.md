---
about:
  label: Can I live here without a car?
  description: >-
    Whether daily trips from one address can be made on foot, by bike or by
    transit, from nearby destinations, connected streets and frequent service.
  tags:
    - walkability
    - transit access
    - car-free living
    - GTFS
    - transportation costs
everyday:
  asked_by:
    - renters and home buyers
    - people who cannot or do not drive
    - households weighing the cost of a car
  answered_by:
    - listing-site scores such as Walk Score
    - transit trip planners
    - estate agents and friends who live nearby
domains:
  - mobility
  - people
  - places
relations:
  - predicate: needs
    target: engines/walk-score
  - predicate: needs
    target: data-sources/openstreetmap-osm
  - predicate: needs
    target: data-sources/census-apis
provenance:
  origin: agent
  sources:
    - title: 'Walk Score Methodology'
      url: 'https://www.walkscore.com/methodology.shtml'
    - title: 'Smart Location Mapping (US EPA)'
      url: 'https://www.epa.gov/smartgrowth/smart-location-mapping'
    - title: 'National Walkability Index User Guide and Methodology (US EPA)'
      url: 'https://www.epa.gov/smartgrowth/national-walkability-index-user-guide-and-methodology'
    - title: 'National Walkability Index Methodology and User Guide, June 2021 (US EPA, PDF)'
      url: 'https://www.epa.gov/sites/default/files/2021-06/documents/national_walkability_index_methodology_and_user_guide_june2021.pdf'
    - title: 'General Transit Feed Specification (gtfs.org)'
      url: 'https://gtfs.org/'
    - title: 'Mobility Database (MobilityData)'
      url: 'https://mobilitydatabase.org/'
    - title: 'Duncan, Aldstadt, Whalen, Melly and Gortmaker, Validation of Walk Score for Estimating Neighborhood Walkability: An Analysis of Four US Metropolitan Areas, IJERPH 8 (2011) 4160-4179'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3228564/'
    - title: 'Available APIs (US Census Bureau)'
      url: 'https://www.census.gov/data/developers/data-sets.html'
    - title: 'Why we ask about vehicles available (American Community Survey)'
      url: 'https://www.census.gov/acs/www/about/why-we-ask-each-question/vehicles/'
    - title: 'Why we ask about commuting (American Community Survey)'
      url: 'https://www.census.gov/acs/www/about/why-we-ask-each-question/commuting/'
    - title: 'About the H+T Index (Center for Neighborhood Technology)'
      url: 'https://htaindex.cnt.org/about/'
    - title: 'About AllTransit (Center for Neighborhood Technology)'
      url: 'https://alltransit.cnt.org/about/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Living without a car at one address depends on what can be reached from the front door on foot, by bike or by bus. Are a grocery, a school, a pharmacy and work within a walk or a short ride? Do the streets connect, or does every trip run out along a highway? Is there a bus or train nearby, and does it come often enough, at the hours the household needs it, to the places it needs to go? The answer differs between people at the same address: a commuter, a parent with small children and someone who uses a wheelchair each need different trips to work.

## Who asks, and who they ask today

People choosing where to rent or buy ask this question, as do people who cannot drive or have stopped, and households working out whether they can give up a car or do without a second. Today many look at the score a listing site shows, check a trip or two in a transit planner, or ask someone who lives on the street.

## What answers it

**Destinations within reach.** The score most people see is [Walk Score](/engines/walk-score/), which rates an address from 0 to 100 by walking routes to nearby amenities, giving full points within a five-minute walk and none beyond thirty, with adjustments for population density, block length and intersection density.[^1] Its [methodology page](https://www.walkscore.com/methodology.shtml) attaches a plain reading to each band: 90 to 100 means "daily errands do not require a car" and 70 to 89 that most can be done on foot. From 25 to 49 most errands require a car, and below 25 almost all do.[^1] The page gives neither its weights nor its list of amenity categories.[^1]

**Is the score right?** Duncan and colleagues tested Walk Score against measures computed independently with GIS, for 733 home addresses in four US metropolitan areas (*International Journal of Environmental Research and Public Health*, 2011).[^7] They found many significant moderate correlations with measures such as the density of shops and of intersections, stronger at a 1,600-metre network buffer than at 400 or 800 metres, and concluded that it is a valid measure of certain aspects of walkability.[^7] They also listed what it leaves out: crime, the look of the streets, traffic, hills, and barriers such as highways and water.[^7] It did not weigh the size of destinations such as parks or how often they are used. At the time, it measured straight-line rather than walking distances.[^7]

**A public index.** The US EPA's National Walkability Index scores every census block group in the country from 1 to 20.[^3,4] It ranks each block group into twenty equal groups on four measures from EPA's Smart Location Database: intersection density, distance from the population centre to the nearest transit stop, the mix of employment types, and the mix of jobs and occupied housing.[^4] Intersections and transit each weigh a third, and the two mix measures a sixth each.[^4] The equal thirds follow Ewing and Cervero's 2010 meta-analysis, which found the effects of the three on walking similar in size.[^4] Scores above 15.25 are "most walkable" and below 5.76 "least walkable".[^4] It ranks block groups against the whole country, as the [2021 methodology](https://www.epa.gov/sites/default/files/2021-06/documents/national_walkability_index_methodology_and_user_guide_june2021.pdf) sets out; [EPA's Smart Location Mapping page](https://www.epa.gov/smartgrowth/smart-location-mapping) says the downloadable data and a how-to document let users build an index for a smaller set instead, such as a state, metropolitan area or city.[^2,4] That page offers the data for download, in an interactive map and through web services.[^2] Block groups vary in size, from an acre or two in a dense city to thousands of acres in the country, so one score can cover very different addresses.[^4]

**Transit.** Transit agencies publish routes, stops, timetables and fares in the [General Transit Feed Specification](https://gtfs.org/) (GTFS), an open standard maintained by MobilityData, and live vehicle locations, arrival times and service alerts in its Realtime companion.[^5] More than 10,000 agencies in over 100 countries use it, by gtfs.org's count, and MobilityData's [Mobility Database](https://mobilitydatabase.org/) catalogues more than 6,000 GTFS, GTFS Realtime and GBFS feeds from over 100 countries, with a REST API.[^5,6] With the street network from [OpenStreetMap](/data-sources/openstreetmap-osm/), these feeds let anyone compute which places can be reached from an address in, say, 30 minutes at 8 a.m. on a weekday, which is closer to the question than a count of nearby stops.

**Who lives there.** The Census Bureau's American Community Survey asks about the vehicles each household has and how people get to work, and its data are served through the [Census APIs](/data-sources/census-apis/).[^8,9,10]

## Who sells an answer

- **Walk Score** offers its Walk Score, Transit Score and Bike Score through APIs and data services.[^1] Transit Score sums the usefulness of each nearby route from its frequency, its type and the distance to the nearest stop, from the data agencies publish in a standard format.[^1] Walk Score publishes a map of where it offers Transit Score.[^1] The company says leading academic researchers have validated its method.[^1]
- **The Center for Neighborhood Technology** publishes the H+T Affordability Index, which adds a household's transportation costs to its housing costs and sets the benchmark at no more than 45% of income, against the usual 30% for housing alone.[^11] By that measure it finds 26% of US neighbourhoods affordable, against 55% for housing alone.[^11] Its 2025 update uses 2022 American Community Survey data and covers the whole US population.[^11] Its AllTransit dataset merges agencies' GTFS feeds with GTFS data CNT built itself from online maps and schedules, for 1,198 agencies with 2024 transit data, into a proprietary dataset.[^12] The page asks those who want the data to contact CNT, and its menu lists a data download.[^12]

## What a small look ahead adds

A score describes the address as it is. Someone signing a lease or a mortgage is choosing for years. A light rail line or a new bus route already funded would change the answer near its stations; a planned cut in service, a closing school or a grocery that is leaving would change it the other way. A model that holds the street network, the timetables and the destinations could run one household's own trips: this job, this school, these hours. It could run them under today's network and under the one a transit agency has adopted for the coming years, and show what changes and when. It could also put a cost on the answer, as the H+T Index does for a neighbourhood, for one household at one address.

## Layers it shares

Street networks, transit timetables, destinations and population, which the noise, air and heat questions also use for traffic and exposure.
