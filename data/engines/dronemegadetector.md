---
about:
  label: DroneMegaDetector
  description: >-
    Open object detector from the ConservationDronesAI group, built on RF-DETR,
    that finds people, mammals and vehicles in drone imagery for wildlife
    surveys and counts.
  tags:
    - drone
    - wildlife
    - detection
    - aerial
    - computer vision
    - survey
tool:
  form: research model
  group: Wildlife and oceans
  homepage: 'https://github.com/ConservationDronesAI/DroneMegaDetector'
  licence: MIT
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'MIT'
provenance:
  origin: agent
  sources:
    - title: GitHub - ConservationDronesAI/DroneMegaDetector
      url: 'https://github.com/ConservationDronesAI/DroneMegaDetector'
    - title: >-
        DroneMegaDetector, A Generalised Model For Detecting Large Mammals In
        Aerial Imagery
      url: 'https://www.biorxiv.org/content/10.64898/2026.10.12.758430v2'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT048
  kind: research_model
  family: models_simulations_and_forecasts
  priority: supporting
  verified: true
  posts:
    - P012
  posters:
    - Juan M. Lavista Ferres
domains:
  - ecology
  - sensory
---
The detector is general-purpose, for aerial wildlife monitoring.[^1,2] It is the Medium size of RF-DETR, an object-detection architecture, with three classes: person, animal and vehicle.[^1] In practice "animal" means mammal.[^1] It was built by Chaim Chai Elchik, Steven Longmore, Dan Morris, Ben Weinstein, Josh Veitch-Michaelis, Camee Knops, Freya Richards and Serge Wich.[^1,2]

It outputs bounding boxes, not points, so it can support counting and tracking as well as detection.[^2] Most of the training data comes from drone flights at roughly 50 to 120 m above ground, which the authors call the principal operating range.[^1] Higher up, animals appear smaller and detection falls off.[^1] In the preprint it matched the OWL model on a cattle dataset and performed almost identically on caribou.[^2] It transferred poorly to birds.[^2] On high-altitude SAVMAP imagery it degraded, as did every other method.[^2]

The code is MIT-licensed Python.[^1] There are scripts for single images, for folders (writing MegaDetector-format JSON), for sampled video frames and for tracking with ByteTrack, a multi-object tracker.[^1] Large images are split into tiles for inference.[^1] A hosted copy is on Hugging Face as ConservationDrones/DroneMegaDetector.[^1] The weights and code are released; the paper is a bioRxiv preprint, with version 2 posted on 14 October 2026.[^1,2]
