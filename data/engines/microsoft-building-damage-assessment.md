---
about:
  label: Microsoft building damage assessment toolkit
  description: >-
    Open-source toolkit from the Microsoft AI for Good Lab for mapping damaged
    buildings after a disaster, from satellite or aerial images or from radar
    damage proxy maps.
  tags:
    - disaster
    - damage assessment
    - buildings
    - satellite
    - radar
    - machine learning
tool:
  form: open-source Python toolkit
  group: Earth observation and AI
  homepage: 'https://github.com/microsoft/building-damage-assessment'
  licence: MIT
  cost: free; the labelling step needs a tile server and Azure Blob Storage, or pre-rendered tiles
domains:
  - places
open:
  source: open
  data: unknown
  api: 'no'
  participation: open
  licence: MIT
relations:
  - predicate: alternative_to
    target: engines/skai
provenance:
  origin: agent
  sources:
    - title: 'microsoft/building-damage-assessment (README)'
      url: 'https://github.com/microsoft/building-damage-assessment'
    - title: 'Satellite imagery damage assessment workflow'
      url: 'https://github.com/microsoft/building-damage-assessment/blob/main/SATELLITE_WORKFLOW.md'
    - title: 'Damage proxy map workflow'
      url: 'https://github.com/microsoft/building-damage-assessment/blob/main/DPM_WORKFLOW.md'
    - title: 'SKAI Damage Assessment Instructions'
      url: 'https://github.com/google-research/skai/blob/main/docs/assessment_instructions.md'
    - title: 'SKAI setup instructions'
      url: 'https://github.com/google-research/skai/blob/main/docs/setup.md'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
After a disaster, first responders and aid groups decide where to send people and supplies partly by how many buildings are damaged and where.[^1] The Microsoft AI for Good Lab built this toolkit to produce that count from images taken from above. It is a set of documented Python scripts meant for a data scientist working alongside responders, and offers two routes to a per-building answer.[^1]

The first route starts from satellite or aerial photos taken after the event. Someone draws a small number of labels by hand in the affected area, marking damaged parts of buildings and the ground around them.[^2] The toolkit then fine-tunes a pre-trained image model on those labels: a model that already knows how to read images is adjusted to recognise this disaster's damage.[^2] It runs over the whole scene and sums the result for each known building footprint.[^2] The tutorial uses images of Lahaina from Maxar's Open Data program taken on 12 August 2023, after the Maui wildfires, and comes with example labels so it can be tried without drawing any.[^2]

The second route uses a damage proxy map. These measure how much radar images taken before and after an event differ.[^1,3] NASA JPL's Advanced Rapid Imaging and Analysis project and the Earth Observatory of Singapore publish them after major disasters.[^1,3] The toolkit downloads building footprints from OpenStreetMap, Google or Microsoft, averages the map's value over each building, and marks a building damaged above a threshold chosen by checking against post-disaster photos.[^3] The worked example is the October 2023 earthquakes in Afghanistan.[^3]

The lab has used the workflow for the 2023 Turkey and Syria earthquakes, the 2023 Rolling Fork tornadoes in Mississippi, the 2023 Maui wildfires, the September 2023 flooding in Libya and Hurricane Beryl in the Caribbean in July 2024.[^1] For a model of a place, the output is a building layer with a damage value for a specific event, the starting point for a count of homes lost by neighbourhood.

The labelling tool needs a TiTiler server and an Azure Blob Storage account to serve the images, or map tiles rendered in advance with gdal2tiles.[^2] The code is under the MIT licence.[^1] Google's [SKAI](/engines/skai/) compares before and after images of each building instead, and runs on Google Cloud.[^4,5]
