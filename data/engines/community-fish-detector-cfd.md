---
about:
  label: Community Fish Detector
  description: >-
    Open single-class fish detector built by Filippo Varini and a group of
    contributors, trained on seventeen open datasets pooled into one; finds
    fish in underwater images and video from any camera or habitat.
  tags:
    - fish
    - detection
    - underwater
    - computer vision
    - marine
    - open weights
tool:
  form: open-source detection model
  group: Wildlife and oceans
  homepage: 'https://github.com/filippovarini/community-fish-detector'
  licence: 'Apache 2.0 for the RF-DETR models; AGPL-3.0 for YOLOv12x'
  cost: free
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: 'Apache 2.0 (RF-DETR models); AGPL-3.0 (YOLOv12x)'
provenance:
  origin: agent
  sources:
    - title: GitHub - filippovarini/community-fish-detector
      url: 'https://github.com/filippovarini/community-fish-detector'
    - title: Community Fish Detector · Filippo Varini
      url: 'https://www.fvarini.com/community-fish-detector'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT046
  kind: enabling_detector
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P015
  posters:
    - Filippo Varini
domains:
  - ecology
  - water
---
The detector is a set of pretrained object-detection models with one class, fish. It does not identify species.[^1,2] Filippo Varini led the work with contributors including Dan Morris, Sonny Burniston and Oceane Boulais.[^1,2] Each contributor converted one open dataset to a common format.[^2]

The pooled Community Fish Detection Dataset holds about two million images and 935,000 fish bounding boxes (rectangles marking where each fish is in a frame).[^1,2] Its seventeen sources include baited video, ROVs (remotely operated underwater vehicles), deep-sea cameras, coral reefs, aquaculture pens, lab tanks and rivers.[^2] The dataset is hosted on LILA BC.[^2]

The models are released as open weights, meaning the trained model files can be downloaded.[^2] RF-DETR variants come at three sizes under Apache 2.0.[^1] A YOLOv12x model is under AGPL-3.0, and the project has deprecated it because of that licence.[^1] Python scripts run inference on images or video, at one frame per second by default, and write output in MegaDetector format.[^1] A Hugging Face Space runs the model in a browser.[^1,2]

The makers call the released models an initial training effort.[^1] Model versions are dated February to July 2026.[^1] The group is gathering contributors and annotated imagery for a second version.[^2]
