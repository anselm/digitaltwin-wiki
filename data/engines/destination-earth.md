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
    - title: 'Updates – DestinE Platform'
      url: 'https://platform.destine.eu/updates/'
    - title: 'FloodCast – DestinE Platform'
      url: 'https://platform.destine.eu/services/service/floodcast/'
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The twins monitor and simulate natural phenomena, hazards and human activity, and the goal for 2030 is a full digital replica of the Earth.[^1] Destination Earth (DestinE) is funded by the European Union and run under the Commission's DG Connect by three entrusted entities.[^5,8] ECMWF builds the Digital Twin Engine and the first two twins.[^1] ESA runs the service platform that users enter through.[^1] EUMETSAT runs the data lake, which joins the twins' output with Copernicus and other data.[^1] The contribution agreements were signed in 2021 and the launch event was held in 2022.[^1] ECMWF reported on 30 June 2026 that the twins and the engine had been operationalised in phase two.[^8] Phase three runs to June 2028.[^8]

The Climate Change Adaptation twin is led by CSC, Finland's IT Center for Science, with ECMWF.[^3] Three climate models, ICON, IFS-FESOM and IFS-NEMO, cover the years 1990 to 2049 with hourly output, at about 5 km for the atmosphere and land and 5 to 10 km for the ocean and sea ice.[^3] Impact applications for wind energy, wildfire, hydrology and extreme rainfall run inside the same workflow.[^3] Storyline runs replay a recorded event, such as the 2024 Central European floods, under past, present and two-degree-warmer climates.[^3,8]

The Weather-induced Extremes twin has two parts.[^4] The global part is built on ECMWF's Integrated Forecasting System at 4.4 km.[^4] Each day it starts from the 9 km operational analysis (the best current estimate of the atmosphere, made from observations) and runs four days ahead on the LUMI supercomputer.[^4] The regional part, led by Météo-France on the ACCORD system, zooms to 500 to 750 m over Europe two days ahead.[^4] Flood, air-quality and renewable-energy models are being coupled to the regional part.[^4] ECMWF's December 2025 wrap-up says the global part runs daily and the regional one has been applied to hundreds of European events.[^5]

The Digital Twin Engine is ECMWF's software underneath both twins. It deploys them on EuroHPC supercomputers;[^2] the twins' workflows run on LUMI and MareNostrum5.[^5] Their output exceeds a petabyte a day, and the engine's Polytope service lets a user pull out only the slice of data they need.[^5] Machine-learning components for land, ocean, sea ice, waves and hydrology are built with Anemoi, an open-source framework from ECMWF and its member states.[^5] They are built on GPUs at LUMI, MareNostrum5, Leonardo and MeluXina.[^5] ECMWF says phase three will couple them into a European AI Earth-system model and make AI-ready datasets from twin output.[^8]

The way in is the DestinE Platform run by ESA.[^1] Registration is free and opens a set of services for data access, processing and visualisation.[^6] The twins' own data need "upgraded access", which public authorities, academia and research, and SMEs and start-ups apply for after registering.[^7] The platform says this access is for European actors and takes several business days to review.[^6,7] Data then comes through Polytope or the Harmonised Data Access API.[^4] For the Extremes twin, Polytope serves native output for the last 15 start dates.[^4] The Climate twin has a user guide and example Jupyter notebooks.[^3]

Outside groups can propose a service of their own, which DestinE stakeholders evaluate before it is integrated.[^6] The platform's October 2026 updates add UHEATS, an urban heat pilot service, and HiReNext, a high-resolution forecasting service for transmission system operators.[^6,9] A flood forecasting service for Italy, FloodCast, is in beta testing.[^10]
