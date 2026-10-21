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
Replica organises data about the built environment for public agencies and private companies making transport decisions. Its core product, Places, is a seasonal mobility model. It starts from a synthetic population, a statistical stand-in for real residents, built from census products (PUMS, ACS, CTPP, LEHD) and location data. Activity sequences, destination and mode choice, and traffic assignment are layered on top.

Scenario extends that pipeline. A customer supplies projected population and employment for a chosen base year, at census block groups or custom transportation analysis zones, and Replica re-runs the model to produce a forecast. Customers can set up road closures themselves, at county level, in a Road Closure Scenario application. Outputs include the new population and home-work distribution, travel behaviour (origins, destinations, modes, distances), road volumes, transit line ridership and the places where demand exceeds road capacity.

The documentation also lists datasets: seasonal trip tables, link volumes, AADT (annual average daily traffic), speeds and crash data. Its listed applications are transit equity, VMT (vehicle miles travelled) calculation, active transportation and safety screening.

Replica is a commercial hosted service with a web application and data products. The geographies and source datasets are those of the US Census, so coverage is the United States. Scenarios run on a 20 percent household sample scaled to 100 percent unless the customer asks otherwise. Each forecast is accompanied by a re-run of the base year with the latest model version, so differences come from the inputs. The documentation is versioned Guides v1.0.
