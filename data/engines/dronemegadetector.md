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
DroneMegaDetector is a general-purpose detector for aerial wildlife monitoring. It is an RF-DETR Medium model with three classes, person, animal and vehicle, where "animal" in practice means mammal. The authors are Chaim Chai Elchik, Steven Longmore, Dan Morris, Ben Weinstein, Josh Veitch-Michaelis, Camee Knops, Freya Richards and Serge Wich; the pages read do not give their institutions.

Because it outputs bounding boxes rather than points, it can support counting and tracking as well as detection. The training data is mostly drone flights at roughly 50 to 120 m above ground, which the authors call the principal operating range; detection falls off as animals get smaller at higher altitude. In the preprint it matched the OWL model on a cattle dataset and performed almost identically on caribou, transferred poorly to birds, and degraded along with every other method on high-altitude SAVMAP imagery.

The code is MIT-licensed Python: scripts for single images, folders (writing MegaDetector-format JSON), sampled video frames and ByteTrack tracking, with tiled inference for large images. A hosted copy is on Hugging Face as ConservationDrones/DroneMegaDetector.

Status: research; weights and code are released, and the paper is a bioRxiv preprint posted 14 October 2026 (version 2).
