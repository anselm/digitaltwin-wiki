---
about:
  label: FEMA National Risk Index
  description: >-
    Expected yearly loss from 18 natural hazards for every US county and
    census tract, in dollars and as a share of what is at stake. The website
    closed in December 2025; the data remain.
  aliases:
    - National Risk Index
    - NRI
  tags:
    - natural hazards
    - risk
    - expected annual loss
    - flood
    - wildfire
    - counties
    - census tracts
    - FEMA
    - United States
datasource:
  coverage: United States, all states, the District of Columbia and several territories
  resolution: county and census tract
  cadence: versioned releases; v1.20 December 2025; FEMA told GAO in 2026 that no further ongoing updates were planned
  access: zipped downloads from OpenFEMA, and as layers in FEMA's Resilience Analysis and Planning Tool
  format: table, shapefile and file geodatabase
  homepage: 'https://www.fema.gov/flood-maps/products-tools/national-risk-index'
  cost: free
open:
  source: unknown
  data: open
  api: 'no'
  participation: 'no'
  licence: US government work
  note: The data.gov record points to usa.gov/government-works; FEMA's own terms page for the data could not be read.
domains:
  - places
  - water
relations:
  - predicate: answers
    target: questions/flooding
  - predicate: answers
    target: questions/wildfire
provenance:
  origin: agent
  sources:
    - title: 'Expected Annual Loss (National Risk Index; Wayback Machine copy of 1 November 2025, the live page now redirects)'
      url: 'https://web.archive.org/web/20251101015939/https://hazards.fema.gov/nri/expected-annual-loss'
    - title: 'National Risk Index (FEMA, page updated 7 January 2026)'
      url: 'https://www.fema.gov/flood-maps/products-tools/national-risk-index'
    - title: 'National Risk Index Data (OpenFEMA, page updated 6 January 2026)'
      url: 'https://www.fema.gov/about/openfema/data-sets/national-risk-index-data'
    - title: 'FEMA Bulletin, week of 17 December 2025'
      url: 'https://content.govdelivery.com/accounts/USDHSFEMA/bulletins/400281e'
    - title: 'Disaster Risk: Improvements Needed to Enhance FEMA''s National Risk Index (GAO-26-107894, 10 September 2026)'
      url: 'https://www.gao.gov/products/gao-26-107894'
    - title: 'The national risk index: establishing a nationwide baseline for natural hazard risk in the US (Zuzak et al., Natural Hazards 114, 2022, CC BY 4.0)'
      url: 'https://doi.org/10.1007/s11069-022-05474-w'
    - title: 'National Risk Index (NRI) Data (data.gov record)'
      url: 'https://catalog.data.gov/dataset/national-risk-index-nri-data'
    - title: 'Resilience Analysis and Planning Tool (FEMA, page updated 18 August 2026)'
      url: 'https://www.fema.gov/emergency-managers/practitioners/resilience-analysis-and-planning-tool'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed; the technical documentation PDF was too large for the tools used and was not read'
  status: draft
---
The National Risk Index is FEMA's estimate, for every county and census tract in the United States, of how much eighteen natural hazards will cost each year.[^2,6] The hazards are avalanche, coastal flooding, cold wave, drought, earthquake, hail, heat wave, hurricane, ice storm, landslide, lightning, riverine flooding, strong wind, tornado, tsunami, volcanic activity, wildfire and winter weather.[^1] Casey Zuzak and colleagues at FEMA described the method in 2022.[^6]

## How the number is made

Expected annual loss is exposure times annualized frequency times historic loss ratio, worked out for each hazard and each of three kinds of consequence: buildings, people and agriculture.[^1,6] Buildings and crops are counted in dollars. People are counted in deaths and injuries, then converted to dollars at $11.6 million per death or per ten injuries, so the three can be added.[^1] Communities are then ranked, and the score is the rank.[^1]

The index also publishes an expected annual loss *rate*: the share of a community's total value expected to be lost each year, computed separately for buildings, people and agriculture for each hazard.[^1] That is what a map of flood loss as a percentage of building value shows. It is a ratio, not an amount, so a sparsely built county with a little exposure can rank above a city with a great deal of both. A reader has to decide which of the two they are asking about.

A Risk Index score adds two more components: social vulnerability, the susceptibility of a community's people to harm, and community resilience, its ability to recover.[^2,6] FEMA officials told the US Government Accountability Office that the index is the only national-level one to combine disaster loss with both.[^5]

## What happened to it

The standalone website is gone. Effective 15 December 2025, FEMA moved the index's data into its Resilience Analysis and Planning Tool, a free online mapping program for local officials with more than a hundred layers.[^4,8] FEMA's page now says plainly that "the National Risk Index application is no longer available", and every address under hazards.fema.gov/nri redirects there.[^2] The data did not go away. Version 1.20, from December 2025, is on OpenFEMA as zipped downloads for all states and territories, all counties and all census tracts, each as a table, a shapefile and a geodatabase, with tribal versions alongside.[^2,3] The data.gov record lists it as a US government work.[^7]

Version 1.20 overhauled the tsunami and inland flooding hazards, with flooding now covering both rain-driven and river flooding, added landslide susceptibility, extended earthquake coverage to the Pacific territories, and revised the historic loss ratios for every hazard.[^2,4] Whether there will be a version 1.21 is uncertain. In September 2026 the Government Accountability Office reported that FEMA had only partly followed leading practices, had not told users how to apply the results or combine them with its other tools, and had not consistently run sensitivity analyses. The Department of Homeland Security declined that last recommendation, citing the move into the planning tool and "the lack of future ongoing updates", while also committing to update the tool's documentation by the end of 2027 "as FEMA makes regular RAPT and NRI dataset updates".[^5] Both statements are in the same report.

## For a model of a place

For a US county or tract, the index is the readiest baseline of what the hazards cost, in a form that lets one place be compared with every other. Its own documentation calls it a planning tool, and the loss figures rest on national datasets rather than local surveys.[^6] It pairs with FEMA's flood maps, which say where water goes, where the index says what it costs; see [Will this property flood?](/everyday/will-this-property-flood/).
