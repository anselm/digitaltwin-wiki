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
The detector is general-purpose, for aerial wildlife monitoring. It is the Medium size of RF-DETR, an object-detection architecture, with three classes: person, animal and vehicle. In practice "animal" means mammal. It was built by Chaim Chai Elchik, Steven Longmore, Dan Morris, Ben Weinstein, Josh Veitch-Michaelis, Camee Knops, Freya Richards and Serge Wich.

It outputs bounding boxes, not points, so it can support counting and tracking as well as detection. Most of the training data comes from drone flights at roughly 50 to 120 m above ground, which the authors call the principal operating range. Higher up, animals appear smaller and detection falls off. In the preprint it matched the OWL model on a cattle dataset and performed almost identically on caribou. It transferred poorly to birds. On high-altitude SAVMAP imagery it degraded, as did every other method.

The code is MIT-licensed Python. There are scripts for single images, for folders (writing MegaDetector-format JSON), for sampled video frames and for tracking with ByteTrack, a multi-object tracker. Large images are split into tiles for inference. A hosted copy is on Hugging Face as ConservationDrones/DroneMegaDetector. The weights and code are released; the paper is a bioRxiv preprint, with version 2 posted on 14 October 2026.
