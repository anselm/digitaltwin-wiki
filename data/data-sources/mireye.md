---
about:
  label: Mireye
  description: >-
    A US startup's API and MCP server that answers questions about any
    US location for AI agents, drawing on federal datasets, county parcel
    records and a few open sources, with a source on every value.
  tags:
    - api
    - mcp
    - ai agents
    - parcels
    - site screening
    - flood
    - grid interconnection
    - united states
datasource:
  homepage: 'https://www.mireye.com/'
  coverage: 'United States; drive times also cover Canada'
  cadence: varies by source layer; each value is returned with the time it was fetched
  access: >-
    API and hosted MCP server, account required; Fetch, Geocode, on-demand
    indexing and straight-line distances free within rate limits
  format: typed fields in API responses, each with source, fetch time and confidence
  cost: >-
    free tier with a one-time $10 balance; Enrich $0.02 a parcel, Search
    $0.20 a page, Ask $0.10 an answer; plans from $49 a month
open:
  source: closed
  data: partly
  api: 'yes'
  participation: partly
  note: >-
    The terms grant a limited, non-transferable right to use outputs for
    your own property research and location analysis. Licensed parcel
    records keep their restrictions even when combined with public data
    or an AI answer, and credentials may not be shared to give others
    access. Mireye claims no exclusive ownership of public facts, and
    identified open-data terms still govern that material.
domains:
  - places
  - energy
  - water
provenance:
  origin: agent
  sources:
    - title: Mireye
      url: 'https://www.mireye.com/'
    - title: Pricing
      url: 'https://www.mireye.com/pricing'
    - title: Compare
      url: 'https://www.mireye.com/compare'
    - title: Blog
      url: 'https://www.mireye.com/blog'
    - title: Terms
      url: 'https://www.mireye.com/terms'
    - title: 'Mireye: Search Engine for the Physical World'
      url: 'https://www.ycombinator.com/companies/mireye'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Mireye puts the facts about a US location behind one API so that an AI agent can ask for them.[^1] Give it a coordinate, an address or a parcel and it returns typed values such as the FEMA flood zone, slope, annual solar irradiance, distance to the nearest 345 kV line, soil drainage class or the county's interconnection queue. Every value comes back with the name of its source, the time it was fetched and a confidence level. The site lists USGS, FEMA, NOAA, USDA, EPA, EIA, the Census Bureau, NREL and other federal agencies among its sources, along with county parcel records, Overture and Sentinel-2, and puts the count at 97. Outside drive times, which reach into Canada, it covers only the United States.

The service has several endpoints. Fetch returns named fields, or a preset bundle such as flood risk, solar siting or wildfire underwriting, for hundreds of locations in one call. Enrich adds licensed parcel identity, ownership and attributes. Search filters every US parcel by state, size and other fields. Ask takes a question in plain language, runs the lookups and returns a cited answer along with the plan it followed, so the steps can be run again. When a field is missing, a customer can request it; the company says it researches, builds and checks the field and then adds it to the catalogue for everyone. The same tools are offered as an MCP server, which is how agents such as Claude or ChatGPT call it.

The examples on the site come from land and money: screening data-centre and solar sites, insurance underwriting, hazard disclosure for mortgages, and diligence on a 140-acre tract of land. On its Y Combinator page (Summer 2026 batch) the company describes more than 300 fields, says the count is growing 20% week over week, and says its first customers used it to source land for data centres. Its blog applies the API to questions such as whether parking lots in the US have solar potential and which US meat plants have the most fragile cold chains.

Fetch, Geocode and straight-line distances are free within rate limits. Enrich, Search, Ask and driving distances are charged per use, and plans start at $49 a month. The terms allow use of outputs for your own research and analysis but not passing licensed parcel records on to others without Mireye's written authorization, so a public model can use the free federal fields more easily than the parcel data. Most of those federal fields are also available directly from the agencies, through services such as the [Census APIs](/data-sources/census-apis/) and [USGS water data](/data-sources/usgs-water-data/). What Mireye adds is one place to ask, with the source attached to each answer. A quick test is the Compare page, which puts the same question about one coordinate to Mireye and to a language model searching the open web, side by side.
