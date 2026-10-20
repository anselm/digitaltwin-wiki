---
about:
  depiction: engines/mycosoft-earth-simulator.jpg
  label: Mycosoft Earth Simulator
  description: >-
    Mycosoft's hosted 3D globe inside its NatureOS platform; it shows
    environmental layers, the positions of the company's field sensors,
    historical playback and forecast context, drawing on its MINDEX database
    of species and observation records.
  tags:
    - globe
    - environmental monitoring
    - sensors
    - fungi
    - world model
    - planetary
tool:
  form: hosted platform
  group: Ecosystems and land
  homepage: 'https://mycosoft.com/natureos/earth-simulator'
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
  note: >-
    NatureOS lists an API gateway, an SDK and a Worldview API; whether they
    expose the simulator itself is not stated.
domains:
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'NatureOS | Environmental Intelligence'
      url: 'https://mycosoft.com/natureos'
    - title: 'About Mycosoft | Computing for Living Systems'
      url: 'https://mycosoft.com/about'
    - title: 'MINDEX | Mycosoft Data Integrity Index | Cryptographic Environmental Database'
      url: 'https://mycosoft.com/mindex'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: >-
    Claude, from the sources listed; the simulator's own page at
    /natureos/earth-simulator loads as an application shell with no readable
    text, so the description comes from the NatureOS and company pages.
  status: draft
---
Earth Simulator is a 3D globe made by Mycosoft, a US company (Mycosoft, Inc. with an operating subsidiary Mycosoft, LLC) that builds fungal computer interfaces, field sensing devices and environmental software. It is one surface of NatureOS, the company's platform for sensing, simulation and environmental records. On the globe a user can turn on environmental layers, see where the company's devices are and what state they are in, play back past conditions, look at forecasts and run simulated scenarios.

The company pitches it at planners, scientists and analysts, as a model of the world across space and time. Its inputs come from Mycosoft's own field hardware (ground, air and water sensing droids linked by its DirtNet mesh) and from MINDEX, the company's data layer for environmental and biological records, which holds species, observation and compound records with their origin, time and location. The company names no deployment or case for it.

It runs as a hosted web application inside NatureOS. The company has a plans and access page for Earth Simulator but states no prices or licence for it; its about page notes that product information does not by itself establish live data or scientific validation.

The company gives no release date or status for the simulator; it says it has been building since 2021. In this wiki's stack it is a presentation and engine layer over the company's own sensor and record data.
