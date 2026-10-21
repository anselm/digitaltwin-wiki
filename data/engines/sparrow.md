---
about:
  depiction: engines/sparrow.jpg
  label: SPARROW
  description: >-
    Open-source, solar-powered edge device from Microsoft's AI for Good Lab
    that runs camera-trap and bioacoustic AI models on site and sends the
    results out by satellite or GSM, for biodiversity monitoring in remote
    places.
  tags:
    - biodiversity
    - camera trap
    - bioacoustics
    - edge ai
    - satellite
    - wildlife monitoring
tool:
  homepage: 'https://microsoft.github.io/SPARROW/'
  form: open-source hardware and software platform
  group: Wildlife and oceans
  licence: MIT
  cost: 'free software; hardware per the published bill of materials'
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'MIT'
provenance:
  origin: agent
  sources:
    - title: 'SPARROW: Solar-Powered Edge AI for Biodiversity Monitoring | Microsoft AI for Good'
      url: 'https://microsoft.github.io/SPARROW/'
    - title: 'GitHub - microsoft/SPARROW'
      url: 'https://github.com/microsoft/SPARROW'
    - title: Project SPARROW and the Future of Conservation Technology
      url: >-
        https://www.microsoft.com/en-us/research/publication/project-sparrow-and-the-future-of-conservation-technology/
    - title: >-
        How AI helps gather remote biodiversity data: Interview with Microsoft’s
        Juan Lavista Ferres
      url: >-
        https://news.mongabay.com/2026/08/how-ai-helps-gather-remote-biodiversity-data-interview-with-microsofts-juan-lavista-ferres/
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT049
  kind: monitoring_system
  family: observations_data_and_reconstruction
  priority: high
  verified: true
  posts:
    - P142
  posters:
    - Amy Rosenthal
    - Rhett Ayers Butler
domains:
  - ecology
---
SPARROW stands for Solar-Powered Acoustic and Remote Recording Observation Watch. One unit collects images from up to 150 solar wifi camera traps, audio from an AudioMoth recorder, and readings from small temperature, humidity, pressure and gas sensors. Detection and species models run on the device, and only the summarised results leave the site, over a Starlink Mini satellite link or a GSM connection. With no link, data is kept locally and synced later. Images of people are removed on the device before upload.

The lab's June 2026 paper reports deployments across tropical, temperate and montane ecosystems in Colombia, Peru, Tanzania and the United States. Running around the clock, the units gathered more than two million images and recordings in the first 190 days without on-site intervention. In an August 2026 Mongabay interview, lab director Juan Lavista Ferres put SPARROW in eleven countries on five continents, with early sites at Colombia's Magdalena Medio and Los Amigos in the Peruvian Amazon. He credited it with helping Chester Zoo and Uganda's wildlife authority locate an endangered giant pangolin.

The software is on GitHub under the MIT licence, packaged as Docker containers, with a bill of materials and an assembly guide. The models are MegaDetector v6, an Amazon species classifier and a bird detector, exported from PyTorch-Wildlife and run through ONNX, a common format for moving trained models between tools. The repository now targets a Raspberry Pi 5 with an NVMe drive, powered by two 100 W panels, an MPPT controller and a 24 V LiFePO4 battery. Earlier units used an NVIDIA Jetson, and the documentation site still describes that configuration.
