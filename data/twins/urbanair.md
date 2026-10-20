---
about:
  label: UrbanAIR
  description: >-
    A Horizon Europe research project (2025 to 2028), coordinated by Delft
    University of Technology, that brings Destination Earth forecasts down to
    street level to model heat and air quality in Antwerp, Barcelona, Paris,
    Bristol and Rotterdam.
  tags:
    - urban heat
    - air quality
    - Destination Earth
    - downscaling
    - Horizon Europe
    - Europe
twin:
  place: 'Antwerp, Barcelona, Paris, Bristol and Rotterdam'
  scale: city
  operational: research
  homepage: 'https://www.urbanair-project.eu/'
open:
  source: unknown
  data: partly
  api: unknown
  participation: unknown
  note: >-
    The project page says it contributes to open-source tools and
    standardised interfaces; a Freiburg heat-stress study publishes its
    datasets and model code on Zenodo, and the publications page lists
    datasets for Barcelona air quality and for urban land surface
    temperatures, and the documentation of a street-level weather station
    network in Bristol. No licence for the platform itself is named on the
    pages read.
domains: [places, climate]
relations:
  - predicate: cites
    target: engines/destination-earth
provenance:
  origin: agent
  sources:
    - title: UrbanAIR | Digital Twin for Urban Climate Action
      url: 'https://www.urbanair-project.eu/'
    - title: About UrbanAIR | Urban Climate Digital Twin Project
      url: 'https://www.urbanair-project.eu/project'
    - title: UrbanAIR Partners | EU Climate Research Consortium
      url: 'https://www.urbanair-project.eu/partners'
    - title: UrbanAIR Partners | EU Climate Research Consortium
      url: 'https://www.urbanair-project.eu/publications'
    - title: UrbanAIR News | Urban Climate Innovation Updates
      url: 'https://www.urbanair-project.eu/news'
    - title: 'UrbanAIR: Designing Resilient Cities with the Earth’s Digital Twin'
      url: >-
        https://www.urbanair-project.eu/post/urbanair-designing-resilient-cities-with-the-earth-s-digital-twin
    - title: 'Urban Heat Stress: Rotterdam and Antwerp Under the Lens'
      url: >-
        https://www.urbanair-project.eu/post/urban-heat-stress-rotterdam-and-antwerp-under-the-lens
    - title: Why Neighbourhood-Scale Data Matters in Urban Heat Warnings
      url: >-
        https://www.urbanair-project.eu/post/bridging-the-gap-in-urban-heat-warnings-why-neighbourhood-scale-data-matters
    - title: 'Co-designing digital twins for heat and air quality: Lessons from EURESFO 2026'
      url: >-
        https://www.urbanair-project.eu/post/co-designing-digital-twins-for-heat-and-air-quality-lessons-from-euresfo-2026
  created: '2026-10-20'
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
UrbanAIR is a Horizon Europe project that models heat and air pollution in European cities at the scale of streets and buildings, starting from the continental forecasts of Destination Earth. It runs from 1 January 2025 to 31 December 2028 with 14.2 million euros of EU funding (grant agreement 101188131) and eighteen partners in eleven countries, coordinated by Delft University of Technology. The partners include national weather services (KNMI, Météo-France, SMHI), research centres (VITO, Barcelona Supercomputing Center, CERFACS, NORCE, UKRI STFC Scientific Computing), universities (Freiburg, Imperial College, Leibniz Hannover, Ilmenau, Toulouse III, Bern University of Applied Sciences), the Resilient Cities Network, Future Needs and Arup; ECMWF and EUMETSAT sit on its advisory board. It is one of three projects funded under the call "New digital twins for Destination Earth", alongside TerraDT and WeatherGenerator.

The project works with two "action cities", Antwerp and Barcelona, which steer the design and test the tools, and three "learning cities", Paris, Bristol and Rotterdam, which contribute data and use cases. The stated purpose is to help city teams see where heat and pollution concentrate, which groups are most exposed, and what greening, cooling networks, zoning or traffic measures would change; the project calls this a living-lab model, with city teams guiding the design and prototypes tested on the ground.

Technically it is described as a modular platform rather than one tool: Destination Earth forecasts are joined to high-resolution urban models that simulate airflow, pollution and infrastructure impacts at the building scale, using physics models at several levels of detail (the page lists LES, RANS and analytical models) to trade speed against precision, with machine-learning emulators to speed them up, statistical uncertainty estimates, and an agent-based model of how people respond to heat, alerts and pollution. Street-level air quality is modelled at 100 to 200 metres. Early work includes KNMI's simulation of the June 2026 heatwave over Rotterdam and Antwerp with the HARMONIE-AROME model at 200 metres, re-run under a 3 degree warmer climate, and a University of Freiburg study of pedestrian heat stress in Freiburg at one-metre resolution, published in PLOS Climate in 2026 with its data and model code on Zenodo. Data and models run in the Destination Earth data lake through Jupyter notebooks, object stores and the Islet cloud; a demonstration ran VITO's models for Antwerp in a notebook there, and the STFC team is now working with Barcelona and Paris.

Status: research, in its second year as of 2026; the pages read describe a demonstration for Antwerp, work under way for Barcelona and Paris, and a publications page of papers and datasets from 2025 and 2026, not an operational service.
