---
about:
  label: Valdrada
  aliases:
    - BoundlessNYC
  description: >-
    Mehmet Kerem Turkcan's city-scale digital twin of New York City's five
    boroughs, compiled from public municipal records, with real-time rendering,
    traffic and pedestrian simulation and a CARLA-style Python API.
  tags:
    - new york
    - city
    - simulation
    - traffic
    - synthetic data
    - open source
twin:
  place: New York City
  scale: city
  operational: 'yes'
  homepage: 'https://mehmetkeremturkcan.com/valdrada/'
open:
  source: open
  data: partly
  api: 'yes'
  participation: unknown
  licence: 'MIT (code); CC BY 4.0 (documentation); ODbL 1.0 (compiled city)'
provenance:
  origin: agent
  sources:
    - title: Valdrada
      url: 'https://mehmetkeremturkcan.com/valdrada/'
    - title: >-
        GitHub - mkturkcan/valdrada: Valdrada is a real-time digital twin of New
        York City built from public data.
      url: 'https://github.com/mkturkcan/valdrada'
    - title: mehmetkeremturkcan/valdrada · Datasets at Hugging Face
      url: 'https://huggingface.co/datasets/mehmetkeremturkcan/valdrada'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT006
  kind: implemented_twin_model
  family: twins_and_candidates
  priority: high
  verified: true
  posts:
    - P085
    - P114
  posters:
    - Mehmet Kerem Turkcan
domains:
  - places
  - mobility
  - sensory
relations:
  - predicate: needs
    target: data-sources/openstreetmap-osm
    note: uses data (source_claim; exact implementation not independently tested)
---
Valdrada is a digital twin of New York City developed and maintained by Mehmet Kerem Turkcan. The city is compiled from public records: NYC Building Footprints joined to PLUTO and facade-inspection filings, the Street Centerline file for streets, lanes and speed limits, OpenStreetMap to fill gaps in footprints, and street-furniture records for trees, hydrants, bus shelters, kiosks and subway entrances. The compiled city covers all five boroughs with 1,085,937 buildings in 3,532 near tiles and 261 far-field tiles; Central Park (with 16,951 trees in 33 species groups), 125th Street, Times Square and Midtown are modelled in extra detail.

On top of the model sit a WebGL2 renderer, lane-level traffic (IDM car following with signal phases and turn planning), signal-aware pedestrians on a sidewalk graph, a New York vehicle fleet and two rail lines. Sensors return RGB, Cityscapes-compatible semantic and instance segmentation, occlusion and 3D pose, and metric depth. The stated uses are synthetic data generation, closed-loop scenario simulation and streetscape studies; recorded takes export to OpenUSD for Blender and Unreal Engine 5.

It runs as a simulation server with a TCP API and a Python client modelled on CARLA, either from a Windows x64 binary or built from source with npm, with a browser demo on Hugging Face. Code is MIT, documentation CC BY 4.0, and the compiled city ODbL 1.0 because it contains OpenStreetMap data; the full dataset is about 7.6 GB. Some pedestrian assets carry restrictions on dataset and AI-training use, and the README points to a procedural-pedestrian mode for those cases.

Status: released, version 0.4.0, 2026. The earlier repository and Hugging Face names "boundless-nyc" now redirect to Valdrada; the pages read do not mention the old name.
