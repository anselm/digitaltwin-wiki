---
about:
  depiction: engines/megadetector-pytorch-wildlife-ecosystem.jpg
  label: PyTorch-Wildlife and MegaDetector
  description: >-
    Open-source wildlife detection models from Microsoft's AI for Good Lab,
    including MegaDetector for camera-trap images, and PyTorch-Wildlife, the
    framework that runs those models.
  tags:
    - wildlife
    - camera trap
    - detection
    - conservation
    - open source
    - computer vision
tool:
  form: open-source framework and models
  group: Wildlife and oceans
  homepage: 'https://microsoft.github.io/Biodiversity/'
  licence: 'MIT for the code; model weights vary by variant (MIT, Apache-2.0, AGPL-3.0 or CC BY-NC-SA 4.0)'
  cost: free
open:
  source: open
  data: partly
  api: unknown
  participation: unknown
  licence: 'MIT (code); weights vary by variant (MIT, Apache-2.0, AGPL-3.0 or CC BY-NC-SA 4.0)'
provenance:
  origin: agent
  sources:
    - title: 'Microsoft Biodiversity: Open-Source AI for Conservation | AI for Good Lab'
      url: 'https://microsoft.github.io/Biodiversity/'
    - title: microsoft/MegaDetector
      url: 'https://github.com/microsoft/MegaDetector'
    - title: microsoft/MegaDetector-Overhead
      url: 'https://github.com/microsoft/MegaDetector-Overhead'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT050
  kind: enabling_platform
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P012
    - P142
  posters:
    - Juan M. Lavista Ferres
    - Amy Rosenthal
    - Rhett Ayers Butler
domains:
  - ecology
  - sensory
---
PyTorch-Wildlife is a framework for building, sharing and running conservation models. The lab's Biodiversity hub groups it with:

- MegaDetector, the best known of the lab's models
- MegaDetector-Acoustic, for sound
- MegaDetector-Overhead, for drone and aerial imagery
- a model zoo of species classifiers

A camera trap is a motion-triggered camera left out in the field. MegaDetector draws boxes around animals, people and vehicles in its images, each with a confidence score. It does not identify species. Researchers use it mainly to discard empty frames before review. Dan Morris developed versions 1 to 5 at Microsoft. Version 6 uses the YOLOv9, YOLOv10 and RT-DETR architectures.

MegaDetector-Overhead applies the same approach to drone survey imagery, where targets are small and altitude and perspective vary. It ships the OWL model family (formerly Overhead Wildlife Locator), including a checkpoint for caribou. No-code front ends such as AddaxAI, SPARROW Studio and a Hugging Face demo can also load the models.

Everything runs locally. `pip install PytorchWildlife` installs a Python API and a command line that write JSON detections per image. The code is MIT-licensed. Each variant's weights carry their own licence, and the overhead model and data release is CC BY-NC-SA 4.0.
