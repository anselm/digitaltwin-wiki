---
about:
  depiction: data-sources/us-energy-data.jpg
  label: US Energy Data
  description: >-
    Website from the Institute for Progress that charts US energy production,
    consumption, prices and grid reliability, nationally and for every state,
    from open government data such as the EIA.
  tags:
    - electricity
    - energy prices
    - grid reliability
    - generation
    - US states
    - charts
datasource:
  coverage: United States, national and all 50 states plus DC
  resolution: state
  cadence: unknown
  access: free website, no login; charts reusable under CC BY-SA
  format: interactive charts and state profiles; underlying data from EIA, FRED and BLS
  homepage: 'https://usenergydata.org/'
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: CC BY-SA 4.0 for the charts; underlying data under third-party licences
  note: Readers may suggest charts or datasets by a form on the site.
domains:
  - energy
relations:
  - predicate: answers
    target: questions/electrification
provenance:
  origin: agent
  sources:
    - title: US Energy Data — Understanding America's energy system
      url: 'https://usenergydata.org/'
    - title: About – US Energy Data
      url: 'https://usenergydata.org/about'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; the update log page loads its entries by script and could not be read'
  status: draft
---
US Energy Data is a website from the Institute for Progress, a US nonprofit, that charts the US energy system in figures, one year and one state at a time. Hannah Ritchie advised on it and prototyped it as a consultant for the institute. It was produced with support from Arnold Ventures. The site says AI models were used in cleaning the data, in the design and in building its charting tools.

The site is organised by topic: prices and bills, electricity demand, electricity generation, hydrocarbons and biofuels, and reliability and outages. Each of the 50 states and DC has a profile: its generation mix, its prices and bills, and its outage record. Three explorers cover energy sources, electricity prices and grid reliability, and a search runs across more than 130 charts. The stated aim is to give public debate and policymaking a readable layer over data that is otherwise scattered and technical.

The data comes from free and open sources, chiefly the US Energy Information Administration, with the Federal Reserve's FRED and the Bureau of Labor Statistics alongside; the site uses no private or paywalled data. The charts are licensed CC BY-SA and may be reused with a citation of the page they appear on; the underlying data keeps the licence of its original source, which must also be cited. The site keeps an update log and takes suggestions by a form and by email.

In this wiki's stack this is a data layer: a readable view of US energy statistics that could feed a question like [electricity and energy transitions](/questions/electrification/) before anyone builds a model.
