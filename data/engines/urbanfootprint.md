---
about:
  label: UrbanFootprint
  description: >-
    A commercial web service for the United States: land use, people and
    hazard data aligned on 160 million parcels, with scoring and scenario
    modules on top. Owned by LightBox since 2025.
  depiction: engines/urbanfootprint.jpg
  depiction_credit: 'UrbanFootprint: the preview image of its Analyst page, with a flood hazard layer selected over a land-use map.'
  tags:
    - land use
    - scenario planning
    - parcels
    - climate risk
    - vulnerability
    - utilities
tool:
  tier: 2
  form: Parcel data and scenario planning service
  group: Land use and housing
  homepage: 'https://urbanfootprint.com/'
open:
  source: closed
  data: closed
  api: 'yes'
  participation: unknown
domains:
  - places
relations:
  - predicate: answers
    target: questions/housing-and-land-use
  - predicate: alternative_to
    target: engines/urbansim
provenance:
  origin: agent
  sources:
    - title: The Resilient Decision Intelligence Platform | UrbanFootprint
      url: 'https://urbanfootprint.com/'
    - title: About Us | UrbanFootprint
      url: 'https://urbanfootprint.com/about/'
    - title: Built Environment | UrbanFootprint
      url: 'https://urbanfootprint.com/platform/built-environment/'
    - title: People & Vulnerabilities | UrbanFootprint
      url: 'https://urbanfootprint.com/platform/people-and-vulnerabilities/'
    - title: Climate & Hazards | UrbanFootprint
      url: 'https://urbanfootprint.com/platform/climate-and-hazards/'
    - title: Analysis Modules. UrbanFootprint product documentation
      url: 'https://docs.urbanfootprint.com/resilienceinsights/en/urbanfootprint-analyst/fundamentals/analysis-modules'
    - title: 'Duquesne Light Company: Grid Resilience with Data Insights. UrbanFootprint case study'
      url: 'https://urbanfootprint.com/case-studies/duquesnelightcompany/'
    - title: Envision Utah Maps a Community Vision for the Future of Utah County. UrbanFootprint case study
      url: 'https://urbanfootprint.com/case-studies/envision-utah-valley-visioning/'
    - title: 'DCFS: Innovating the Fight Against Hunger in Louisiana. UrbanFootprint case study'
      url: 'https://urbanfootprint.com/case-studies/dcfs/'
    - title: 'LightBox Acquires UrbanFootprint. LightBox press release, 24 June 2025'
      url: 'https://www.lightboxre.com/news/lightbox-acquires-urbanfootprint-expanding-market-leading-location-intelligence-with-climate-infrastructure-demographic-data/'
    - title: 'UrbanFootprint Parcel Data Just Got a Big Upgrade. UrbanFootprint blog, 27 October 2025'
      url: 'https://urbanfootprint.com/blog/sustainable-cities/urbanfootprint-parcel-data-just-got-a-big-upgrade/'
    - title: 'CalthorpeAnalytics/urbanfootprint: UrbanFootprint v1.5. GitHub'
      url: 'https://github.com/CalthorpeAnalytics/urbanfootprint'
    - title: What is community resilience and why does it matter? UrbanFootprint
      url: 'https://urbanfootprint.com/community-resilience-meaning/'
  created: '2026-11-18'
  reviewed: '2026-11-18'
  reviewed_by: 'Claude, from the sources listed, all of them the maker''s or its owner''s own pages; the product was not used. Howard Silverman sent the site to Anselm.'
  status: draft
---
UrbanFootprint is a hosted service that holds data about land, people and hazards for every parcel in the United States and lets a planner, a utility or an agency rank places and compare plans against it.[^1] It is closed and sold to organisations, and its site gives no price.[^1] It is in this catalogue because it is a finished example of two things many place models attempt: putting several domains on one map, and asking of each place who is exposed and who is least able to cope.

## What it holds

The company calls its data the Base Canvas: one record for each of 160 million parcels, assembled from commercial and public sources, to which every other layer is aligned.[^3] On it sit three groups of data.

- **Built environment:** land use and buildings, roads, rail and transit, power lines and substations, water districts, points of interest, walk and transit access, and estimated energy and water use for each parcel.[^3]
- **People and vulnerabilities:** age, income, language, race and broadband access; health measures; pollution exposure; and modelled estimates of food insecurity and of eligibility for public assistance.[^4]
- **Climate and hazards:** flood, storm surge, wildfire, wind, drought, extreme rain and heat, sea level rise and earthquake, with present and future frequency and severity, and damage functions that turn a hazard into a loss estimate for a parcel.[^5]

Customers reach it through Analyst, a mapping and analysis application in the browser; Explorer, a simpler dashboard; or data feeds into their own systems.[^1]

## What it computes

The documentation lists the analysis modules of Analyst.[^6] Each takes a map of land use, existing or drawn as a scenario, and returns totals.

- **Land consumption:** how much growth lands on vacant urban land, redevelopment, farmland, woodland or other open land.[^6]
- **Energy and water use:** rates for each building type, varied by state or climate zone, multiplied through the buildings in the scenario. Outdoor water use comes from irrigated area and local evapotranspiration. The user can replace the rates.[^6]
- **Walk and transit access:** travel times over the OpenStreetMap network and published transit timetables.[^6]
- **Transportation:** vehicle miles travelled and the share of trips by each mode, from density, mix of uses and nearness to transit.[^6]
- **Emissions and household costs:** derived from the energy, water and transportation results.[^6]
- **Risk and resilience:** counts of homes, jobs and land area inside flood, wildfire and sea level rise zones.[^6]
- **Conservation:** effects of land-use change on habitat, farmland, water quality and stored carbon. It was built with The Nature Conservancy, covers California only, and its method is "available on request".[^6]

This wiki's reading, not the company's wording: these modules are rates applied to quantities and layers laid over one another. None of them steps through time. A scenario is a drawn map of a future, and the modules say what that map would use and whom it would expose. They do not show a flood spreading, a grid failing or a household moving. In the terms of [Inside an engine](/articles/inside-an-engine/) there is a state and no clock. Planners call this sketch planning, and it is quick to run and easy to explain for that reason. [UrbanSim](/engines/urbansim/) is the contrasting case: a microsimulation that forecasts where households and firms locate and what gets built, decades ahead.

## What "resilience" means here

The clearest account is the case study of Duquesne Light Company, an electric utility serving 600,000 customers in south-western Pennsylvania.[^7] The utility had ranked substations for replacement by age, condition and capacity. With UrbanFootprint each substation receives a composite score, "the product of criteria on infrastructure as well as natural hazards, community exposure, and population vulnerability", and the substations are ranked by it.[^7] A substation serving people who would be hurt most by an outage moves up the list.

A second case uses a statistical model. Louisiana's Department of Children and Family Services used block-group estimates of food insecurity, produced by "machine-learning-based small-area estimation" from demographic data, to find where people eligible for food assistance were not enrolled.[^9]

Resilience in this product is therefore a ranking: where hazard, exposure and vulnerability coincide. It does not model a place recovering from a shock. The company's own essay on community resilience calls social connectedness "one of the most important characteristics of a resilient community".[^13] The three data pages read for this entry list nothing that measures it.[^4] The formula for the composite score is not published on the pages read.

## A case where residents chose

Envision Utah, a non-profit, used UrbanFootprint in its Valley Visioning project for Utah County, which expects a million more people by 2065.[^8] The team drew five land-use scenarios: growth as it has been, growth in mixed-use centres near transit, growth to the west, growth to the south, and infill. The modules reported farmland and open land lost, water use, energy use and building emissions for each. The results went into an online survey, 10,000 people answered, and the preferred scenario was a modified version of the centres scenario.[^8] The team had previously done the same work with desktop mapping software and spreadsheets.[^8] This account is the company's own.

## Who owns it, and what is open

Peter Calthorpe and Joe DiStefano started the company in 2014 to give urban planners web-based scenario software, and it later turned to utilities, lenders, insurers and government agencies.[^2] LightBox, a commercial real-estate data company, bought it on 24 June 2025; terms were not disclosed.[^10] In October 2025 the Base Canvas was rebuilt on LightBox's parcel data.[^11] When this entry was written, on 18 November 2026, that announcement was the newest post on the company's blog.

An earlier version is open. UrbanFootprint 1.5, from Calthorpe Analytics, is on GitHub under the GNU General Public License version 3, with a user guide and a virtual machine image.[^12] Its last commit is from June 2018. It was not installed for this entry, and after eight years it should be expected to need work to run.

## For someone who cannot buy it

The data is for the United States only, and the service is priced for organisations. Three things can be taken from it without a subscription.

- **The canvas:** one table with a row for each parcel, and every other dataset joined to it before any analysis starts. Most of the work in a model of a place is this alignment.
- **The composite score:** multiplying hazard by exposure by vulnerability to rank assets or neighbourhoods needs no simulation. The [FEMA National Risk Index](/data-sources/fema-national-risk-index/) publishes scores of this kind for every county and census tract in the United States at no charge.
- **The Envision Utah sequence:** a few drawn futures, the same measures computed for each, and a public vote.
