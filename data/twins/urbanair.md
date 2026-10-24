---
about:
  label: UrbanAIR
  description: >-
    A Horizon Europe research project (2025 to 2028) that brings Destination
    Earth forecasts down to street level to model heat and air quality in
    Antwerp, Barcelona, Paris, Bristol and Rotterdam.
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
    - title: 'Climate change-resilient strategies for urban healthy atmosphere (UrbanAIR), CORDIS'
      url: 'https://cordis.europa.eu/project/id/101188131'
  created: '2026-10-20'
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The project runs from 1 January 2025 to 31 December 2028 with 14.2 million euros of EU funding (grant agreement 101188131).[^1,10] Delft University of Technology coordinates eighteen partners in eleven countries, including the weather service KNMI, the research centre VITO and Arup.[^1,10] ECMWF and EUMETSAT sit on its advisory board.[^3] UrbanAIR is one of three projects funded under the call "New digital twins for Destination Earth"; the other two are TerraDT and WeatherGenerator.[^3]

Antwerp and Barcelona are the two "action cities": they steer the design and test the tools. Paris, Bristol and Rotterdam are "learning cities" that contribute data and use cases.[^1,2] The aim is to show city teams where heat and pollution concentrate, which groups are most exposed, and what greening, cooling networks, zoning or traffic measures would change.[^1,2] The project calls its way of working a living lab: city teams guide the design, and prototypes are tested on the ground.[^1,2]

The system is modular. Destination Earth forecasts are joined to high-resolution urban models that simulate airflow, pollution and infrastructure impacts at the building scale.[^2] Physics models at several levels of detail trade speed against precision; the project lists LES, RANS and analytical models.[^2] LES and RANS are two ways of simulating turbulent airflow, LES the finer and slower of the two. Machine-learning emulators, fast stand-ins trained on a slower model's output, cut the run times.[^2] Uncertainty is estimated statistically.[^2] An agent-based model, which simulates many individuals each acting on simple rules, represents how people respond to heat, alerts and pollution.[^2] Street-level air quality is modelled at 100 to 200 metres.[^2]

KNMI simulated the June 2026 heatwave over Rotterdam and Antwerp with the HARMONIE-AROME weather model at 200 metres, then re-ran it under a climate 3 degrees warmer.[^7] A University of Freiburg study of pedestrian heat stress in Freiburg worked at one-metre resolution.[^8] It was published in PLOS Climate in 2026, with its data and model code on Zenodo.[^8] A publications page lists papers and datasets from 2025 and 2026.[^4]

Data and models run in the Destination Earth data lake through Jupyter notebooks, object stores and the Islet cloud.[^6] A demonstration ran VITO's models for Antwerp in a notebook in the data lake. The UKRI STFC Scientific Computing team is now working with Barcelona and Paris.[^6]
