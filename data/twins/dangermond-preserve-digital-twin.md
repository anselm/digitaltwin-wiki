---
about:
  depiction: twins/dangermond-preserve-digital-twin.jpg
  depiction_credit: 'The architecture of the Dangermond Preserve Digital Twin, from sensors in the field to the people who use it. Figure 5 of Easterday et al. 2026, CC BY 4.0.'
  label: Dangermond Preserve Digital Twin
  description: >-
    The Nature Conservancy's twin of a 24,364-acre coastal preserve at Point
    Conception, California: nearly 1,000 open data layers, live wells and
    wildlife cameras, with user-run models promised next.
  tags:
    - nature preserve
    - conservation
    - sensors
    - groundwater
    - prescribed fire
    - rangeland
    - steelhead
    - open science
    - ArcGIS
    - California
twin:
  place: 'Jack and Laura Dangermond Preserve, Point Conception, Santa Barbara County, California'
  scale: landscape
  operational: operational
  homepage: 'https://dangermondpreserve-tnc.hub.arcgis.com/'
open:
  source: partial
  data: open
  api: 'yes'
  participation: 'yes'
  note: 'Data are open with stated exceptions for cultural sites, sensitive species and vulnerable infrastructure; one catalogue application is public on GitHub without a licence.'
domains:
  - ecology
  - places
relations:
  - predicate: built_on
    target: platforms/esri-arcgis
  - predicate: cites
    target: articles/metcalfe-digital-twin-maturity-levels
provenance:
  origin: agent
  sources:
    - title: 'Conservation-focused digital twins: the current landscape and lessons learned from the Dangermond Preserve (Easterday et al., Frontiers in Environmental Science 14, 3 November 2026)'
      url: 'https://doi.org/10.3389/fenvs.2026.1824896'
    - title: 'Inside The Dangermond Preserve, Nature''s Digital Twin (Abigail Hart, Geo Week News, 12 August 2026)'
      url: 'https://www.geoweeknews.com/articles/inside-the-dangermond-preserve-natures-digital-twin/'
    - title: 'Science: Data (Jack and Laura Dangermond Preserve)'
      url: 'https://dangermondpreserve.org/science/data'
    - title: 'Dangermond Preserve Geospatial Hub'
      url: 'https://dangermondpreserve-tnc.hub.arcgis.com/'
    - title: 'SPARLab/TNC-DigitalTwin, the Dangermond Preserve Data Catalog application (GitHub, last pushed 3 November 2026)'
      url: 'https://github.com/SPARLab/TNC-DigitalTwin'
    - title: 'A Digital Twin of Nature to Test Ideas for the Future (Frazier, Nelson, Overbye-Thompson, Willett, Leiker, Easterday and Reynolds, ArcNews, Spatial Foundations column, November 2026)'
      url: 'https://www.esri.com/about/newsroom/arcnews/a-digital-twin-of-nature-to-test-ideas-for-the-future'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed; Esri''s page refuses scripted reads, so the ArcNews article was read from its text as supplied'
  status: draft
---
The Jack and Laura Dangermond Preserve is 24,364 acres of the Gaviota Coast in Santa Barbara County, at the bend where California's coastline turns at Point Conception, with the Point Conception State Marine Reserve offshore.[^1,6] Cold water from the north Pacific meets warmer water from the Santa Barbara Channel there, which is what makes its habitats unusual.[^6] The Nature Conservancy owns and manages it; Esri's founders gave $165 million in 2018, the Conservancy's largest gift, to protect it permanently.[^2] The twin's full name is the Dangermond Preserve Research and Discovery Digital Twin, built by the Conservancy's Point Conception Institute and the Center for Spatial Science at the University of California, Santa Barbara, with Esri.[^6] The twin grew out of the job of organising and sharing the research done there, and was co-designed over more than five years around needs as they arose: groundwater monitoring, rangeland management, prescribed fire planning, research coordination and data stewardship. The team says it followed no fixed technical roadmap.[^1]

## What is in it

The paper by the team describes four layers.[^1]

- **Sensing.** Weather stations, camera traps and other field devices, talking over SDI-12 and carried by LPWAN, cellular, satellite, radio or Wi-Fi. Getting the groundwater wells to report took about a year of testing.[^1] Forty-one wells now report every fifteen minutes, and wildlife cameras send their pictures as they are taken.[^2] The preserve's data page adds a MOTUS bird-tracking tower, an AlertWildfire camera, an ocean current radar and weather through Dendra.[^3]
- **Infrastructure.** Cloud storage and compute, with the data standardised into geospatial formats in ArcGIS Online.[^1]
- **Integration.** APIs and webhooks.[^1]
- **Applications.** ArcGIS Online and ArcGIS Hub, with DataONE, Dendra, Ubidots and Python or R environments. Two supporting systems are RAMP, a research coordination portal on Salesforce, and R2D2, a discovery and publication portal on DataONE that publishes datasets with DOIs under the FAIR principles.[^1,3]

The pipeline, as the builders describe it in ArcNews, takes continuous streams from the sensors, the wildlife cameras and outside scientific APIs such as eBird and GBIF, transforms them and routes them into a cloud PostGIS database, then publishes them as feature layers, imagery layers and OGC services from an ArcGIS Enterprise deployment, chosen for its direct connections to cloud storage. Everything lands in one shared catalogue with the preserve's operational data.[^6] When a camera takes a picture, computer vision identifies the species, and the image, date and time become searchable: every image of a given species, or every species seen at a given camera.[^6]

The counts differ by source and date. ArcNews in November 2026 gives nearly 1,000 GIS data layers and more than 120 research projects at 50 partner institutions; Geo Week in August gave over 100 sensors, 40 institutional partners and more than 160 active projects.[^2,6] Every contributor signs a data-sharing agreement.[^2] A public GitHub repository holds a catalogue application that lists 247 or more datasets; it carries no licence.[^5] The imagery includes NASA AVIRIS-NG hyperspectral flights from 2022 and lidar from 2018 and 2026.[^3]

## What it does

The tools in use are dashboards and a decision aid rather than simulations.[^1]

- A **freshwater dashboard** joins the well telemetry, streamflow, weather and water use, for anomaly detection and decisions about water infrastructure.
- A **rangeland dashboard** shows pasture boundaries, grazing status and water infrastructure, and informs where cattle are moved.[^1,2]
- A **prescribed fire suitability tool** lets a user weight fuel conditions, biodiversity priorities and grazing objectives to rank candidate burn areas; the planning has to respect air quality rules and the neighbouring Vandenberg Space Force Base.[^1,2]
- **Species habitat support** supplies evidence for agencies evaluating habitat for critically endangered species.[^1]

The one modelled result Geo Week reports is in the Jalama watershed, which is nearly the size of Manhattan and wholly conserved. Steelhead have been absent from it since the 1990s. High- and low-flow modelling confirmed the habitat upstream, two dams were removed, and more than thirteen miles of stream were opened; about thirty more barriers are candidates.[^2]

Predictive work is proposed, not built: wildlife movement models from the camera traps, forage availability, near-real-time fire risk forecasting, with AWS SageMaker named for training.[^1] The ArcNews article sets out the next phase: real-time analytics in ArcGIS Velocity, visualisations that flag unexpected patterns and compare observed with modelled data, and a suite of tools for users to build and run their own models, so that an intervention can be tried virtually before it is tried on the ground.[^6] The twin was previewed in April 2026 at the institute's Science for a Wild Coast symposium, to 70 researchers from the Conservancy, the University of California, Vandenberg Space Force Base, California State Parks and others.[^6] The authors place the twin in the lower two levels of a five-level maturity pyramid of their own, Foundational and Integrated Monitoring, with early Predictive Modeling, and Prescriptive Planning and Adaptive Intelligence still being explored.[^1] The paper cites [Metcalfe and colleagues' maturity levels](/articles/metcalfe-digital-twin-maturity-levels/).

## What they say they learned

The authors are the builders, and they say so: the case study rests on their own participation, not an independent evaluation.[^1] They warn that advanced capability built on weak foundations produces outputs that are hard to validate, sustain or transfer. Maintenance and cost are the barrier for under-resourced organisations; the groundwater equipment cost $50,000 to start and water monitoring alone runs a $16,000 subscription a year.[^1] Kelly Easterday, the Conservancy's director of conservation technology, puts the twin in other terms: "It's a philosophy, how you develop a community that's comfortable sharing and exchanging data."[^2] Sophia Leiker, who did the early work of documenting everything that came to the preserve, cautions that community science platforms over-represent rare species and leave the common ones, often the backbone of a habitat, unrecorded.[^2]

Data are open by default, with exceptions the preserve states: cultural and archaeological information stays with the Central Coast Information Center, sensitive species records go through the California Natural Diversity Database, and the locations of raptor nests, mushrooms and Dudleya are not to be shared, including on iNaturalist. Users are asked to cite DOI 10.25497/D7159W.[^3] The Point Conception Institute runs the research side and aims to carry the practice across the Conservancy's roughly five million acres in California; Geo Week notes more than 1,200 biological field stations in 120 countries where the same could be done.[^2] Funding came in part from the Zegar Family Foundation and an anonymous foundation.[^1]
