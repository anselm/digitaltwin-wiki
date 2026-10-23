---
about:
  label: Will this property flood?
  description: >-
    Whether one house or lot will flood turns on the official flood map, the
    rain, rivers and tides around it, the shape of the ground, and the climate
    over the life of a mortgage.
  tags:
    - flood risk
    - flood maps
    - flood insurance
    - buying a house
    - sea level rise
everyday:
  asked_by:
    - people buying a house
    - homeowners
    - renters
    - lenders
  answered_by:
    - FEMA flood maps
    - insurance agents
    - surveyors and floodplain managers
    - listing sites such as Realtor.com and Redfin
    - First Street's Flood Factor
domains:
  - water
  - climate
  - places
relations:
  - predicate: example_of
    target: questions/flooding
  - predicate: cites
    target: articles/climate-central-extreme-water-levels
provenance:
  origin: agent
  sources:
    - title: 'Flood Maps (FEMA)'
      url: 'https://www.fema.gov/flood-maps'
    - title: 'National Flood Hazard Layer (FEMA)'
      url: 'https://www.fema.gov/flood-maps/national-flood-hazard-layer'
    - title: 'Flood Zones, glossary (FEMA)'
      url: 'https://www.fema.gov/glossary/flood-zones'
    - title: 'Risk Rating 2.0 (FEMA)'
      url: 'https://www.fema.gov/flood-insurance/risk-rating'
    - title: "What's Your Flood Risk? (FloodSmart, NFIP)"
      url: 'https://www.floodsmart.gov/node/4024'
    - title: 'FEMA Flood Maps: Better Planning and Analysis Needed to Address Current and Future Flood Hazards (GAO-22-104079, 25 October 2021)'
      url: 'https://www.gao.gov/products/gao-22-104079'
    - title: '2022 Sea Level Rise Technical Report (U.S. interagency, on earth.gov; Wayback Machine copy of 17 October 2026)'
      url: 'http://web.archive.org/web/20261017011110/https://earth.gov/sealevel/us/resources/2022-sea-level-rise-technical-report/'
    - title: 'NOAA Atlas 15 (NOAA Office of Water Prediction)'
      url: 'https://water.noaa.gov/about/atlas15'
    - title: 'NOAA Atlas 14 Precipitation Frequency Data Server'
      url: 'https://hdsc.nws.noaa.gov/pfds/'
    - title: 'Flood Factor Flood Risk Model Methodology (First Street)'
      url: 'https://firststreet.org/methodology/flood'
    - title: 'U.S. Flood Model Methodology (First Street, 20 March 2025)'
      url: 'https://firststreet.org/research-library/flood-model-methodology'
    - title: 'U.S. Heat Model Methodology (First Street, 3 July 2024), which cites Bates et al. 2021 for its flood approach'
      url: 'https://firststreet.org/research-library/heat-model-methodology'
    - title: 'Bates et al., Combined Modeling of US Fluvial, Pluvial, and Coastal Flood Hazard Under Current and Future Climates, Water Resources Research 57(2), 2021 (OpenAlex record)'
      url: 'https://api.openalex.org/works/doi:10.1029/2020wr028673'
    - title: "Zillow introduces First Street's comprehensive climate risk data on for-sale listings across the US (Zillow, 26 September 2024)"
      url: 'https://zillow.mediaroom.com/2024-09-26-Zillow-introduces-First-Streets-comprehensive-climate-risk-data-on-for-sale-listings-across-the-US'
    - title: 'Zillow drops climate risk scores after agents complained of lost sales (TechCrunch, 1 December 2025)'
      url: 'https://techcrunch.com/2025/12/01/zillow-drops-climate-risk-scores-after-agents-complained-of-lost-sales'
    - title: 'realtor.com Announces New Flood Risk Tool (National Association of Realtors, 26 August 2020)'
      url: 'https://www.nar.realtor/washington-report/realtor-com-announces-new-flood-risk-tool'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed; fema.gov, gao.gov and earth.gov refused direct requests and were read through Wayback Machine copies'
  status: draft
---
Will this house flood? In the United States the first answer is a line on a federal map: inside the line, a lender may require flood insurance; outside it, FEMA still recommends flood insurance, though a lender may not require any. The fuller answer turns on more than the line. It depends on rain that overwhelms drains, rivers, tides and storm surge, on the height of the ground and the house, on what has been built nearby, and on how all of that changes over the thirty years of a mortgage.

## Who asks, and who they ask today

People buying a house ask it most. So do owners deciding whether to insure, and renters and lenders. They look up the FEMA flood zone, ask an insurance agent for a quote, ask a surveyor or the local floodplain manager, or read the flood score on a listing site.

## What answers it

**The federal flood map.** FEMA's Flood Insurance Rate Maps (FIRMs) mark Special Flood Hazard Areas, land expected to be covered by a flood that has a 1% chance of being equalled or exceeded in any year. That flood is also called the base flood or the 100-year flood. These areas carry labels beginning with A or V. Zone B or shaded Zone X lies between the 1% flood and the 0.2% (500-year) flood; Zone C or unshaded Zone X is minimal hazard. FEMA notes that a 1% yearly chance means at least a one-in-four chance of flooding over a 30-year mortgage, and that there is no such thing as a no-risk zone.

The maps are published as the National Flood Hazard Layer, a database of current effective flood hazard data built from the maps and their later amendments. It can be searched by address in FEMA's Map Service Center and NFHL Viewer, downloaded by county or state as shapefiles, overlaid in Google Earth as KMZ, or pulled into other sites through web map services. FEMA says it covers more than 90% of the U.S. population.

**What the maps leave out.** The Government Accountability Office reported in October 2021 that FEMA's flood products do not reflect hazards such as heavy rainfall, or the best available climate science. FEMA's own flood insurance site says that from 2014 to 2024 almost a third of National Flood Insurance Program claims came from outside high-risk areas.

**Insurance pricing.** The National Flood Insurance Program (NFIP) prices policies under Risk Rating 2.0, phased in from 1 October 2021 and fully in place from 1 April 2023. It no longer sets rates by flood zone. It uses flood frequency, several flood types (river overflow, storm surge, coastal erosion and heavy rainfall), distance to water, and the property's elevation and cost to rebuild. By law most rates may not rise more than 18% a year. Anyone with a government-backed mortgage on a property in a high-risk zone must buy flood insurance.

**Rain and sea level records.** NOAA Atlas 14 gives the rainfall depths that engineers design drains for, and assumes a climate that does not change. Its successor, NOAA Atlas 15, drops that assumption and will include trends to 2100; NOAA lists preliminary estimates for the contiguous states no earlier than September 2026 and published ones no earlier than September 2027. For the coasts, the 2022 interagency Sea Level Rise Technical Report expects sea level along the U.S. coastline to rise 10 to 12 inches over the next 30 years, with flooding expected on average more than ten times as often as today.

Water models that work at the scale of rivers and streets are set out under [Flooding, rivers and water services](/questions/flooding/), among them the [NOAA National Water Model](/engines/noaa-national-water-model/) and [Google Flood Hub](/engines/google-flood-hub/).

## Who sells an answer

**First Street** publishes Flood Factor, a score from 1 to 10 for each property. The First Street Flood Model covers rain, rivers, tides and storm surge for more than 145 million properties in all 50 states, Washington D.C. and Puerto Rico, according to First Street. It maps flood depth for yearly chances of 50%, 20%, 10%, 1% and 0.2%, at 30 metres downscaled to 3 metres, and projects them 30 years ahead under the SSP2-4.5 emissions scenario of CMIP6. The score rises with the chance of flooding over 30 years and with the expected depth. First Street also estimates an average yearly cost of flood damage to the building, leaving out contents and inflation. Its March 2025 update added USGS 3DEP elevation data, improved its adaptation and flood protection data and revised its damage functions. For its flood approach First Street cites a 2021 paper in Water Resources Research by Paul Bates and 29 co-authors, from Fathom, Rhodium Group and universities including Bristol, Columbia, MIT and Rutgers. It sets out a 30 metre analysis of river, rain and coastal flooding together, for current conditions and for 2035 and 2050 under RCP4.5, checked against local models and the full catalogue of FEMA 1% maps with Critical Success Index values of 0.69 to 0.82. First Street Technology is now part of MSCI, and First Street says its data is used in finance, insurance, government and corporations.

**Listing sites.** Realtor.com added Flood Factor to its listings on 26 August 2020, showing the FEMA flood zone next to the 1 to 10 score. Zillow announced First Street's flood, wildfire, wind, heat and air quality data for its for-sale listings on 26 September 2024, with insurance requirements and recommendations. Zillow cited First Street's analysis of Hurricane Debby, in which 78% of flooded properties were outside FEMA flood zones. In November 2025 Zillow removed the scores from more than a million listings and left a link to First Street in their place, after objections from the California Regional Multiple Listing Service, whose chief executive questioned the accuracy of the flood projections. TechCrunch reported that Realtor.com, Redfin and Homes.com still showed First Street data.

## What a small look ahead adds

A flood map and a score each give one answer, for now or for one future year. A model of the place can run the same house through the rain, river and tide records of the last decades and through the rainfall and sea level expected over the mortgage, and show how often water would reach the ground floor in each. It can also test what the owner or the town could change: raising the house, a drain that is cleared or enlarged, a new development upstream. The question then becomes which changes would keep this house dry, and for how long.

## Layers it shares

Ground elevation, rainfall records, rivers and drains, land cover and climate projections, which the heat, garden and solar questions also need.
