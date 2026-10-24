---
about:
  depiction: twins/boundlessnyc.jpg
  label: Valdrada
  aliases:
    - BoundlessNYC
  description: >-
    Mehmet Kerem Turkcan's city-scale digital twin of New York City's five
    boroughs, compiled from public municipal records, with real-time
    rendering, traffic simulation and a CARLA-style Python API.
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
    - title: mkturkcan/boundless-nyc on GitHub (the old repository address, which redirects to Valdrada)
      url: 'https://github.com/mkturkcan/boundless-nyc'
    - title: mehmetkeremturkcan/boundless-nyc on Hugging Face (the old dataset address, which redirects to Valdrada)
      url: 'https://huggingface.co/datasets/mehmetkeremturkcan/boundless-nyc'
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
The city is compiled from public records:[^1,2]

- NYC Building Footprints, joined to PLUTO (the city's tax-lot land-use database) and facade-inspection filings
- the Street Centerline file, for streets, lanes and speed limits
- OpenStreetMap, to fill gaps in footprints
- street-furniture records for trees, hydrants, bus shelters, kiosks and subway entrances[^2]

The compiled city covers all five boroughs with 1,085,937 buildings in 3,532 near tiles and 261 far-field tiles.[^2,3] Central Park (16,951 trees in 33 species groups), 125th Street, Times Square and Midtown are modelled in extra detail.[^1,2]

The simulation adds a WebGL2 renderer, lane-level traffic, signal-aware pedestrians on a sidewalk graph, a New York vehicle fleet and two rail lines.[^2] Cars follow IDM, a car-following model, with signal phases and turn planning.[^2] Simulated sensors return RGB images, Cityscapes-compatible semantic and instance segmentation, occlusion and 3D pose, and metric depth.[^1,2] Segmentation labels each pixel by object class or by individual object. Turkcan names synthetic data generation, closed-loop scenario simulation and streetscape studies as uses.[^2] Recorded takes export to OpenUSD for Blender and Unreal Engine 5.[^1,2]

Valdrada runs as a simulation server with a TCP API and a Python client modelled on CARLA, an open-source driving simulator.[^1,2] The server comes as a Windows x64 binary or builds from source with npm, and a browser demo runs on Hugging Face.[^2] Code is MIT, documentation CC BY 4.0, and the compiled city ODbL 1.0 because it contains OpenStreetMap data.[^1,2] The full dataset is about 8.9 GB.[^3] Some pedestrian assets carry restrictions on dataset and AI-training use; for those cases the README points to a procedural-pedestrian mode.[^2]

Turkcan develops and maintains Valdrada.[^1,2] Version 0.5.2 was released in 2026.[^2,3] The repository and Hugging Face dataset were first named "boundless-nyc", and those names now redirect to Valdrada.[^4,5]
