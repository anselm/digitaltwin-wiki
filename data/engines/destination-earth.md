---
about:
  depiction: engines/destination-earth.jpg
  label: Destination Earth
  description: >-
    The European Commission's Destination Earth builds digital twins of the
    Earth system, implemented by ECMWF with ESA and EUMETSAT; two twins so far,
    one for climate change adaptation and one for weather-induced extremes.
  tags:
    - Earth system
    - Europe
    - extremes
    - climate
    - weather
    - supercomputing
tool:
  form: Public scientific program
  group: Weather and climate
  homepage: 'https://destination-earth.eu/'
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: partly
domains:
  - climate
relations:
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: Destination Earth
      url: 'https://destination-earth.eu/'
    - title: 'Digital Twin Engine | Destination Earth'
      url: 'https://destine.ecmwf.int/digital-twin-engine/'
    - title: 'Climate Change Adaptation Digital Twin | Destination Earth'
      url: 'https://destine.ecmwf.int/climate-change-adaptation-digital-twin-climate-dt/'
    - title: 'Weather-Induced Extremes Digital Twin | Destination Earth'
      url: 'https://destine.ecmwf.int/weather-induced-extremes-digital-twin/'
    - title: 'DestinE 2025: European collaboration powering Digital Twins and AI | Destination Earth'
      url: >-
        https://destine.ecmwf.int/news/destine-2025-european-collaboration-powering-digital-twins-and-ai/
    - title: 'DestinE Platform – Your gateway to a sustainable future'
      url: 'https://platform.destine.eu/'
    - title: 'Access Policy – DestinE Platform'
      url: 'https://platform.destine.eu/support-pages/access-policy/'
    - title: 'Destination Earth moves into its third phase | ECMWF'
      url: >-
        https://www.ecmwf.int/en/about/media-centre/news/2026/destination-earth-moves-its-third-phase
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The twins monitor and simulate natural phenomena, hazards and human activity, and the goal for 2030 is a full digital replica of the Earth. Destination Earth (DestinE) is funded by the European Union and run under the Commission's DG Connect by three entrusted entities. ECMWF builds the Digital Twin Engine and the first two twins. ESA runs the service platform that users enter through. EUMETSAT runs the data lake, which joins the twins' output with Copernicus and other data. The contribution agreements were signed in 2021 and the launch event was held in 2022. ECMWF reported on 30 June 2026 that the twins and the engine had been operationalised in phase two. Phase three runs to June 2028.

The Climate Change Adaptation twin is led by CSC, Finland's IT Center for Science, with ECMWF. Three climate models, ICON, IFS-FESOM and IFS-NEMO, cover the years 1990 to 2049 with hourly output, at about 5 km for the atmosphere and land and 5 to 10 km for the ocean and sea ice. Impact applications for wind energy, wildfire, hydrology and extreme rainfall run inside the same workflow. Storyline runs replay a recorded event, such as the 2024 Central European floods, under past, present and two-degree-warmer climates.

The Weather-induced Extremes twin has two parts. The global part is built on ECMWF's Integrated Forecasting System at 4.4 km. Each day it starts from the 9 km operational analysis (the best current estimate of the atmosphere, made from observations) and runs four days ahead on the LUMI supercomputer. The regional part, led by Météo-France on the ACCORD system, zooms to 500 to 750 m over Europe two days ahead. Flood, air-quality and renewable-energy models are being coupled to the regional part. ECMWF's December 2025 wrap-up says the global part runs daily and the regional one has been applied to hundreds of European events.

The Digital Twin Engine is ECMWF's software underneath both twins. It deploys them on EuroHPC supercomputers; the twins' workflows run on LUMI and MareNostrum5. Their output exceeds a petabyte a day, and the engine's Polytope service lets a user pull out only the slice of data they need. Machine-learning components for land, ocean, sea ice, waves and hydrology are built with Anemoi, an open-source framework from ECMWF and its member states. They are built on GPUs at LUMI, MareNostrum5, Leonardo and MeluXina. ECMWF says phase three will couple them into a European AI Earth-system model and make AI-ready datasets from twin output.

The way in is the DestinE Platform run by ESA. Registration is free and opens a set of services for data access, processing and visualisation. The twins' own data need "upgraded access", which public authorities, academia and research, and SMEs and start-ups apply for after registering. The platform says this access is for European actors and takes several business days to review. Data then comes through Polytope or the Harmonised Data Access API. For the Extremes twin, Polytope serves native output for the last 15 start dates. The Climate twin has a user guide and example Jupyter notebooks.

Outside groups can propose a service of their own, which DestinE stakeholders evaluate before it is integrated. The platform's October 2026 updates add UHEATS, an urban heat pilot service, and HiReNext, a high-resolution forecasting service for transmission system operators. A flood service, FloodCast, is listed as coming soon.
