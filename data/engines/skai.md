---
about:
  label: SKAI
  description: >-
    Open-source tool from Google Research that finds damaged buildings in
    satellite images taken before and after a disaster, trained for each event
    on a small sample of buildings labelled by people.
  tags:
    - disaster
    - damage assessment
    - buildings
    - satellite
    - machine learning
    - humanitarian
tool:
  form: open-source pipeline run on Google Cloud
  group: Earth observation and AI
  homepage: 'https://github.com/google-research/skai'
  licence: Apache-2.0
  cost: free code; runs in your own Google Cloud project
domains:
  - places
open:
  source: open
  data: unknown
  api: 'no'
  participation: open
  licence: Apache-2.0
relations:
  - predicate: alternative_to
    target: engines/microsoft-building-damage-assessment
provenance:
  origin: agent
  sources:
    - title: 'google-research/skai (README)'
      url: 'https://github.com/google-research/skai'
    - title: 'SKAI setup instructions'
      url: 'https://github.com/google-research/skai/blob/main/docs/setup.md'
    - title: 'SKAI Damage Assessment Instructions'
      url: 'https://github.com/google-research/skai/blob/main/docs/assessment_instructions.md'
    - title: 'Assessing Post-Disaster Damage from Satellite Imagery using Semi-Supervised Learning Techniques (arXiv 2011.14004)'
      url: 'https://arxiv.org/abs/2011.14004'
    - title: 'microsoft/building-damage-assessment: Satellite imagery workflow'
      url: 'https://github.com/microsoft/building-damage-assessment/blob/main/SATELLITE_WORKFLOW.md'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
After an earthquake, hurricane or wildfire, responders need to know which buildings were damaged or destroyed. That count gives a first estimate of how many people have lost shelter or may be trapped, and of what rebuilding will cost.[^1] SKAI compares an image of each building from before the disaster with one from after and scores how likely it is to be damaged.[^1,3] In many past disasters its results agreed with expert assessments on between 85 and 98 per cent of buildings.[^1]

Google Research built it with the UN World Food Programme's Innovation Accelerator and the AI for Social Good team at InstaDeep.[^1] The method was described in a paper for the NeurIPS 2020 workshop on humanitarian assistance and disaster response, posted in November 2020.[^4] It uses semi-supervised learning: the model learns from a small set of buildings that people have labelled plus a much larger set that nobody has.[^4] The paper tested it on the 2010 Haiti earthquake, the 2017 Santa Rosa wildfire and the 2016 conflict in Syria.[^4] The developers ask disaster response groups who want to use it to write to skai-developers@googlegroups.com.[^1]

SKAI runs on Google Cloud.[^2] Dataflow cuts the images into one small picture per building, Vertex AI handles labelling and training, and a Cloud Storage bucket holds everything.[^2,3] Building locations come from Google's Open Buildings, from [OpenStreetMap](/data-sources/openstreetmap-osm/), or from your own CSV of coordinates; the two open sources differ a lot in coverage from region to region.[^3] The images must be Cloud Optimized GeoTIFFs.[^3] People then label a sample of buildings (2,000 in the example command) in a tool called Eagle Eye as undamaged, minor, major or destroyed, and those grades are folded into damaged or not.[^3] The trained model scores every building in the area and writes the results to a CSV.[^3]

For a model of a place, the output is a point layer of buildings with a damage score after a specific event. It can feed a count of homes lost in each neighbourhood. The code is under the Apache 2.0 licence.[^1] Microsoft's [building damage assessment toolkit](/engines/microsoft-building-damage-assessment/) does similar work by fine-tuning an image model on damage drawn by hand in the affected area.[^5]
