---
about:
  depiction: engines/replica.jpg
  label: Replica
  description: >-
    Replica supplies modelled travel activity for US regions and a Scenario
    service that re-runs its mobility model under changed population,
    employment or road-closure inputs for transport and regional planning.
  tags:
    - transport
    - travel demand
    - synthetic population
    - scenario
tool:
  form: Data and scenario platform
  group: Transport and crowds
  homepage: 'https://replicahq.com/'
open:
  source: closed
  data: closed
  api: unknown
  participation: unknown
domains:
  - mobility
provenance:
  origin: agent
  sources:
    - title: Replica
      url: 'https://replicahq.com/'
    - title: Scenario Model Methodology Summary
      url: 'https://documentation.replicahq.com/docs/scenario-model-methodology'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Replica is a company that organises data about the built environment so that public agencies and private companies can make transport decisions. Its core product, called Places, is a seasonal mobility model: a synthetic population built from census products (PUMS, ACS, CTPP, LEHD) and location data, with activity sequences, destination and mode choice and traffic assignment layered on top.

Scenario is an extension of that pipeline. A customer supplies projected population and employment for a chosen base year, at census block groups or custom transportation analysis zones, and Replica re-runs the model to produce a forecast; road closures can be set up by the customer in a self-service Road Closure Scenario application at county level. Outputs include the new population and home-work distribution, travel behaviour (origins, destinations, modes, distances), road volumes, transit line ridership and the places where demand exceeds road capacity. The documentation also lists datasets such as seasonal trip tables, link volumes, AADT, speeds and crash data, and applications for transit equity, VMT calculation, active transportation and safety screening.

It is a commercial, hosted service with a web application and data products; the geographies and source datasets are those of the US Census, so coverage is the United States. Scenarios are run on a 20 percent household sample scaled to 100 percent unless otherwise requested, and the base year is re-run with the latest model version alongside each forecast so that differences come from the inputs.

Status: operational; the documentation is versioned as Guides v1.0 and gives no dates.
