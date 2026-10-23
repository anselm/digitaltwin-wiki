---
about:
  label: MegaDetector-Overhead (OWL)
  description: >-
    Open-source detector from the Microsoft AI for Good Lab that finds
    wildlife in aerial and drone survey imagery; ships the OWL model family
    and extends MegaDetector from camera traps to overhead views.
  tags:
    - wildlife
    - drone
    - aerial survey
    - detection
    - counting
tool:
  homepage: 'https://github.com/microsoft/MegaDetector-Overhead'
  form: open-source detection model
  group: Wildlife and oceans
  licence: 'MIT (code); CC BY-NC-SA 4.0 (models and data)'
  cost: free
open:
  source: open
  data: partly
  api: unknown
  participation: unknown
  licence: 'MIT (code); CC BY-NC-SA 4.0 (models and data)'
provenance:
  origin: agent
  sources:
    - title: 'GitHub - microsoft/MegaDetector-Overhead'
      url: 'https://github.com/microsoft/MegaDetector-Overhead'
    - title: 'Overhead Wildlife Locator (OWL): Benchmarking Weakly Supervised Learning for Aerial Wildlife Surveys'
      url: 'https://arxiv.org/abs/2606.13911'
    - title: 'DroneMegaDetector, A Generalised Model For Detecting Large Mammals In Aerial Imagery'
      url: 'https://www.biorxiv.org/content/10.64898/2026.10.12.758430v2'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT047
  kind: enabling_detector
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P012
  posters:
    - Juan M. Lavista Ferres
domains:
  - ecology
---
MegaDetector was built for camera-trap photos, and this version adapts it to aerial surveys, with their small targets, varying altitude and straight-down views.[^1] It is part of the PyTorch-Wildlife ecosystem.[^1] The repository ships training, evaluation and inference code for three OWL (Overhead Wildlife Locator) models:

- OWL-C, a fast convolutional baseline.
- OWL-T, which adds a Swin transformer branch for cluttered backgrounds.
- OWL-D, built on a DINOv3 vision transformer.[^1,2]

The OWL paper (Chacón and others, June 2026) frames the models as weakly supervised density estimation.[^2] They are trained from a single point marked on each animal instead of a drawn box, and estimate how many animals fall in each part of an image.[^2] The paper benchmarks them on five public aerial datasets plus a caribou census transfer test.[^2] A separate preprint by Elchik and others compares a general-purpose box detector, DroneMegaDetector, against OWL and finds performance varies by dataset and altitude.[^3]

The code is MIT-licensed and runs locally in Python.[^1] The OWL-D checkpoint is about 3.5 GB and needs a CUDA GPU, whereas OWL-C runs on CPU.[^1] Model weights and the caribou datasets are on Zenodo under CC BY-NC-SA 4.0, and the README records a full local run on 8 September 2026.[^1]
