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
Destination Earth (DestinE) is a European Union funded initiative to build digital twins of the Earth system that monitor and simulate natural phenomena, hazards and human activity, with a full digital replica of the Earth as the stated goal for 2030. Three entrusted entities implement it under the Commission's DG Connect: ECMWF builds the Digital Twin Engine and the first two twins, ESA runs the service platform that users enter through, and EUMETSAT runs the data lake that joins the twins' output with Copernicus and other data. The contribution agreements were signed in 2021 and the launch event held in 2022; ECMWF reported on 30 June 2026 that the twins and the engine had been operationalised in phase two and that phase three runs to June 2028.

The Climate Change Adaptation twin, led by CSC (IT Center for Science, Finland) with ECMWF, runs three climate models (ICON, IFS-FESOM and IFS-NEMO) over the years 1990 to 2049 at about 5 km for the atmosphere and land and 5 to 10 km for the ocean and sea ice, with hourly output. Impact applications for wind energy, wildfire, hydrology and extreme rainfall run inside the same workflow, and storyline runs replay a recorded event, such as the 2024 Central European floods, under past, present and two-degree-warmer climates. The Weather-induced Extremes twin has a global component built on ECMWF's Integrated Forecasting System at 4.4 km, started daily from the 9 km operational analysis and run four days ahead on the LUMI supercomputer, and a regional component led by Météo-France on the ACCORD system that zooms to 500 to 750 m over Europe two days ahead, with flood, air-quality and renewable-energy models being joined to it. ECMWF's December 2025 wrap-up says the global component runs daily and the regional one has been applied to hundreds of European events.

The Digital Twin Engine is ECMWF's software layer underneath both twins: it deploys them on EuroHPC supercomputers (the twins' workflows run on LUMI and MareNostrum5), handles output that exceeds a petabyte a day, and through the Polytope service lets a user pull out only the slice of data they need. Machine-learning components for land, ocean, sea ice, waves and hydrology are built with Anemoi, the open-source framework from ECMWF and its member states, on GPUs at LUMI, MareNostrum5, Leonardo and MeluXina; ECMWF says phase three is to couple them into a European AI Earth-system model and to turn twin output into AI-ready datasets.

The way in is the DestinE Platform run by ESA. Registration is free and gives any user a set of services for data access, processing and visualisation; the twins' own data need an "upgraded access" that public authorities, academia and research, and SMEs and start-ups apply for after registering, which the platform describes as for European actors and says takes several business days to review. Data then comes through Polytope (for the Extremes twin, native output for the last 15 start dates) or the Harmonised Data Access API, with a user guide and example Jupyter notebooks for the Climate twin. Outside groups can propose a service of their own, which DestinE stakeholders evaluate before it is integrated; the platform's October 2026 updates introduce an urban heat pilot service (UHEATS) and a high-resolution forecasting service for transmission system operators (HiReNext), and list a flood service (FloodCast) as coming soon.
