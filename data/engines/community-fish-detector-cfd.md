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
  homepage: 'https://github.com/filippovarini/community-fish-detector'
  licence: 'Apache 2.0 for the RF-DETR models; AGPL-3.0 for YOLOv12x'
  cost: free
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
The Community Fish Detector is a set of pretrained object-detection models that recognise one class, fish, in underwater imagery. It was made by a group led by Filippo Varini, with Dan Morris, Sonny Burniston, Oceane Boulais and others; each contributor converted one open dataset to a common format, and the pooled Community Fish Detection Dataset holds about two million images and 935,000 fish bounding boxes from seventeen sources, including baited video, ROVs, deep-sea cameras, coral reefs, aquaculture pens, lab tanks and rivers. It does not identify species.

The models are released as open weights: RF-DETR variants at three sizes under Apache 2.0, and a YOLOv12x model under AGPL-3.0, which the project has deprecated because of that licence. Inference runs from Python scripts on images or video (one frame per second by default) and writes MegaDetector-format output; a Hugging Face Space runs the model in a browser. The dataset is hosted on LILA BC.

Status: the makers call the released models an initial training effort, with model versions dated February to July 2026, and are gathering contributors and annotated imagery for a second version.
