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
The charts work one year and one state at a time.[^1] Hannah Ritchie advised on the site and prototyped it as a consultant for the Institute for Progress, a US nonprofit.[^2] Arnold Ventures supported the work.[^2] AI models were used in cleaning the data, in the design and in building the charting tools.[^2]

Topics are prices and bills, electricity demand, electricity generation, hydrocarbons and biofuels, and reliability and outages.[^1,2] Each of the 50 states and DC has a profile of its generation mix, prices and bills, and outage record.[^1] Three explorers cover energy sources, electricity prices and grid reliability.[^1] A search runs across more than 130 charts.[^1] The site was built to give public debate and policymaking a readable layer over data that is otherwise scattered and technical.[^2]

The data comes from free and open sources, chiefly the US Energy Information Administration (EIA), with the Federal Reserve's FRED and the Bureau of Labor Statistics alongside.[^2] No private or paywalled data is used.[^2] The charts are licensed CC BY-SA and may be reused with a citation of the page they appear on.[^2] The underlying data keeps the licence of its original source, which must also be cited.[^2] The site keeps an update log and takes suggestions by a form and by email.[^1,2]

Its figures could feed work on [electricity and energy transitions](/questions/electrification/) before anyone builds a model.
