---
about:
  label: Would solar panels pay off on this roof?
  description: >-
    Whether panels on one roof would repay their cost turns on its sun and
    shade, the panels, the price of power and the rules for selling it back
    to the grid.
  tags:
    - rooftop solar
    - solar potential
    - net metering
    - shading
    - electricity prices
everyday:
  asked_by:
    - homeowners
    - people buying a house
    - small building owners
  answered_by:
    - solar installers
    - quote marketplaces such as EnergySage
    - Google's Project Sunroof
domains:
  - energy
  - places
relations:
  - predicate: needs
    target: data-sources/us-energy-data
  - predicate: needs
    target: data-sources/high-resolution-canopy-height
provenance:
  origin: agent
  sources:
    - title: 'PVWatts Calculator (National Laboratory of the Rockies)'
      url: 'https://pvwatts.nlr.gov/'
    - title: 'PVWatts V8 API documentation (NLR Developer Network)'
      url: 'https://developer.nlr.gov/docs/solar/pvwatts/v8/'
    - title: 'History (National Laboratory of the Rockies)'
      url: 'https://www.nlr.gov/about/history'
    - title: 'PVWatts Calculator, system info and losses (National Laboratory of the Rockies)'
      url: 'https://pvwatts.nlr.gov/pvwatts.php'
    - title: 'NSRDB: National Solar Radiation Database'
      url: 'https://nsrdb.nlr.gov/'
    - title: 'What is the NSRDB'
      url: 'https://nsrdb.nlr.gov/about/what-is-the-nsrdb'
    - title: 'Sengupta et al., The National Solar Radiation Data Base (NSRDB), Renewable and Sustainable Energy Reviews 89 (2018) 51-60 (Crossref record)'
      url: 'https://api.crossref.org/works/10.1016/j.rser.2018.03.003'
    - title: 'Solar API overview (Google Maps Platform)'
      url: 'https://developers.google.com/maps/documentation/solar/overview'
    - title: 'Solar API methodology (Google Maps Platform)'
      url: 'https://developers.google.com/maps/documentation/solar/methodology'
    - title: 'Solar API coverage (Google Maps Platform)'
      url: 'https://developers.google.com/maps/documentation/solar/coverage'
    - title: 'Calculate costs and savings, US (Google Maps Platform)'
      url: 'https://developers.google.com/maps/documentation/solar/calculate-costs-us'
    - title: 'Google Maps Platform pricing'
      url: 'https://developers.google.com/maps/billing-and-pricing/pricing'
    - title: 'Project Sunroof'
      url: 'https://sunroof.withgoogle.com/data-explorer/'
    - title: 'About Project Sunroof'
      url: 'https://sunroof.withgoogle.com/about'
    - title: 'DSIRE (NC Clean Energy Technology Center, NC State University)'
      url: 'https://www.dsireusa.org/'
    - title: 'DSIRE Detailed Summary Maps'
      url: 'https://dsireusa.org/resources/detailed-summary-maps/'
    - title: 'DSIRE map: Net Metering for Investor-Owned Utilities (May 2026)'
      url: 'https://ncsolarcen-prod.s3.amazonaws.com/wp-content/uploads/2026/05/DSIRE_Net_Metering_May2026.pdf'
    - title: 'DSIRE map: Distributed Generation Customer Credit Rates for Excess Generation (May 2026)'
      url: 'https://ncsolarcen-prod.s3.amazonaws.com/wp-content/uploads/2026/05/NEM_Credit_Rate_May2026-1.pdf'
    - title: 'Net Billing Tariff (California Public Utilities Commission)'
      url: 'https://www.cpuc.ca.gov/nbt'
    - title: 'Jordan and Kurtz, Photovoltaic Degradation Rates: an Analytical Review, Progress in Photovoltaics 21 (2013) 12-29 (Crossref record with abstract)'
      url: 'https://api.crossref.org/works/10.1002/pip.1182'
    - title: 'About us (EnergySage)'
      url: 'https://www.energysage.com/about-us/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Whether panels pay off on one roof comes down to a few things. How much sun reaches the roof over a year, after clouds and after the shade of trees, chimneys and the buildings next door. How much of that the panels turn into electricity, and how fast they wear. What the household pays for power, and what the utility pays for power sent back to the grid. And what the system costs after tax credits and rebates. The first two are physics and can be computed for any roof. The last three are prices and rules, and they change.

## Who asks, and who they ask today

Homeowners ask, and so do people deciding whether to buy a house and owners of small buildings. Many ask an installer, who gives a quote and, Google notes, often a final production estimate from shade readings taken on the roof. Marketplaces gather several such quotes at once. Google's Project Sunroof gives a first estimate for an address.

## What answers it

**Sunlight.** The US Department of Energy's National Laboratory of the Rockies publishes the [National Solar Radiation Database](https://nsrdb.nlr.gov/) (NSRDB). DOE gave the lab that name on 1 December 2025; it was the National Renewable Energy Laboratory, NREL. The database holds half-hourly values of the three most widely used measures of sunlight, global horizontal, direct normal and diffuse horizontal irradiance, with other weather, for the United States and a growing list of international locations. It is computed, not measured at each place. The lab's Physical Solar Model takes its inputs from NOAA's GOES weather satellites, NASA's MODIS and MERRA-2 and the National Ice Center's snow and ice maps. It derives cloud and aerosol properties from them and feeds them to a radiative transfer model on a 4 km grid every 30 minutes. Gaps in the satellite record are filled with a machine-learning method. The method is described by Sengupta and colleagues in *Renewable and Sustainable Energy Reviews* (2018).

**Output.** [PVWatts](https://pvwatts.nlr.gov/), from the same lab, estimates what a grid-connected system would produce. A user gives a location, the system's size, the panel type, losses, the tilt and the compass direction the panels face, and whether they sit on the roof or on a rack; the [API](https://developer.nlr.gov/docs/solar/pvwatts/v8/) returns yearly AC output in kWh and a capacity factor. By default it uses a typical meteorological year from the NSRDB, and the calculator gives a range based on 30 years of weather at the site. The lab is plain about its limits: predictions carry many assumptions and uncertainties, better panels are not told apart from worse ones, and the site is represented only through the inputs, so shade from nearby buildings and trees has to be entered as a percentage loss.

**Shade and roof shape.** This is what PVWatts leaves to the user and what an installer measures on the roof. It needs a 3D model of the roof and of the trees and buildings around it, from aerial imagery or lidar. Tree heights are also mapped from satellite images, as in [High Resolution Canopy Height Maps](/data-sources/high-resolution-canopy-height/).

**Wear.** Panels lose output each year. Jordan and Kurtz's review in *Progress in Photovoltaics* gathered nearly 2,000 measured degradation rates from 40 years of field tests and found a median of 0.5% a year.

**Prices and rules.** What a kilowatt-hour sent to the grid earns is set by each state and utility. DSIRE, established in 1995 and operated by the NC Clean Energy Technology Center at NC State University, tracks these policies and incentives across the United States. Its May 2026 map of net metering for investor-owned utilities counts, in its key, 28 states, DC and four territories whose utilities offer net metering, 16 states with net billing or some other payment for exported power, and one with none. A label on the same map says 27 states. A companion map sorts states by what an exported kilowatt-hour earns: the full retail rate (true net metering), a time-of-use retail rate, something between retail and the utility's avoided cost, or only the avoided or wholesale cost. California is one example of a change: the [California Public Utilities Commission](https://www.cpuc.ca.gov/nbt) adopted a Net Billing Tariff in December 2022 as the successor to its earlier net metering, for customers who applied to connect on or after 15 April 2023. State electricity prices are charted in [US Energy Data](/data-sources/us-energy-data/).

## Who sells an answer

- **Google's Solar API and Project Sunroof.** Project Sunroof is the consumer site. Given an address, it looks the building up in Google Maps and models the roof in 3D. It accounts for shadows from nearby structures and trees, every sun position over a year, and historical cloud patterns. It then recommends a system sized to cover close to 100% of the household's use and estimates savings under loan, lease or purchase. Google's Solar API methodology names NREL and Meteonorm for weather and Clean Power Research for utility rates. The Solar API sells the same analysis to installers and developers: building insights for one address, and data layers with a surface model, monthly and yearly sunlight maps and hourly shade. Google says coverage is hundreds of millions of buildings across the world, from imagery processed at 0.1 m per pixel for low-altitude aerial photographs and 0.25 m for high-altitude aerial and satellite images. For US savings it assumes panels lose 0.5% a year, electricity costs rise 2.2% a year, a 4% discount rate and a 20-year life; its model assumes 400 W panels mounted flush with the roof. In Google's own words, imagery can be out of date and miss recent tree growth or removal, and 3D models are not always precise. Other definitions of potential can change results by 25% or more. Savings shift when utilities change their rates or net metering changes. The API is priced per thousand billable events above a free monthly allowance of 10,000 Building Insights and 1,000 Data Layers events, starting at $10 and $75 per thousand and falling at higher volumes.
- **EnergySage.** A marketplace where a homeowner enters an address and compares quotes from installers it has vetted, with an adviser; it is free to the homeowner, and installers pay a fee to join. DSIRE lists it as a supporter.
- **Installers.** Each gives a quote with a production estimate and a price for its own system.

## What a small look ahead adds

A lookup answers for the roof as it is today and the prices of today. Google's savings model runs over twenty years, and the things the payoff hangs on move over that time. Trees on the next lot grow, and a model that knows their species and height could show when they would start to shade the roof. Tariffs change, as California's did, and a model could run the same roof under its state's current rule and under the rules neighbouring states have already adopted. It could carry panel wear, a new heat pump or car on the household's demand, and a battery, through the years together, and say which of these the answer is most sensitive to.

## Layers it shares

Roof and building shapes, tree heights and shade, sunlight and weather, and electricity prices, which the heat, garden and street-tree questions also draw on.
