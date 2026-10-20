---
about:
  depiction: engines/megadetector-pytorch-wildlife-ecosystem.jpg
  label: PyTorch-Wildlife and MegaDetector
  description: >-
    Open-source family of wildlife detection models and tools from Microsoft's
    AI for Good Lab; MegaDetector finds animals, people and vehicles in
    camera-trap images, and PyTorch-Wildlife is the framework that runs it and
    its siblings for aerial and acoustic data.
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
PyTorch-Wildlife is the Microsoft AI for Good Lab's framework for building, sharing and running conservation models; the lab's Biodiversity hub gathers it with MegaDetector, the detector most people know it for, plus MegaDetector-Acoustic for sound and MegaDetector-Overhead for drone and aerial imagery, and a model zoo of species classifiers. MegaDetector is an animal detector, not a species classifier: it draws boxes around animals, people and vehicles with a confidence score, and researchers use it mainly to discard empty camera-trap frames before review. Versions 1 to 5 were developed by Dan Morris at Microsoft; version 6 uses YOLOv9, YOLOv10 and RT-DETR architectures.

MegaDetector-Overhead extends the same approach to survey imagery from drones, where targets are small and altitude and perspective vary; it ships the OWL model family (formerly Overhead Wildlife Locator), including a caribou-specific checkpoint. The models can also be loaded through no-code front ends such as AddaxAI, SPARROW Studio and a Hugging Face demo.

Everything is installed locally: `pip install PytorchWildlife` gives a Python API and a command line that write JSON detections per image. Code is MIT-licensed; weights carry their own licences per variant, and the overhead model and data release is CC BY-NC-SA 4.0. Status: operational and maintained.
