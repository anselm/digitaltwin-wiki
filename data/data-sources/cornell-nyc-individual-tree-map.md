---
about:
  label: NYC Tree Genus Map
  description: >-
    Map and dataset from Cornell researchers of about 1.8 million individual
    tree crowns in New York City classified to genus from PlanetScope
    satellite imagery and airborne lidar, including trees on private land and
    in natural areas; published August 2026.
  tags:
    - urban trees
    - new york city
    - lidar
    - tree species
    - urban heat
datasource:
  coverage: New York City, about 1.8 million tree crowns
  resolution: individual tree crowns; 18 most common genera, 82% overall accuracy
  cadence: one-off, 2026
  access: open; dataset on Zenodo (10.5281/zenodo.17654184), code on GitHub, browsable map
  format: tree crown polygons with genus labels; interactive web map
  homepage: 'https://nyctreegenusmap.com'
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: 'CC BY-NC-ND 4.0 (paper); dataset and code licences not stated'
provenance:
  origin: agent
  sources:
    - title: NYC Tree Genus Map
      url: 'https://nyctreegenusmap.com'
    - title: Classification of trees in New York City at the genus level from PlanetScope satellite imagery and airborne lidar
      url: 'https://www.nature.com/articles/s41597-026-08104-3'
    - title: '‘Wall-to-wall’ map of NYC trees could help cool cities worldwide'
      url: 'https://news.cornell.edu/stories/2026/08/wall-wall-map-nyc-trees-could-help-cool-cities-worldwide'
    - title: Researchers map and identify 1.8 million NYC trees to optimize cooling
      url: 'https://www.eurekalert.org/news-releases/1140863'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT054
  kind: data_model
  family: observations_data_and_reconstruction
  priority: high
  verified: true
  posts:
    - P144
  posters:
    - Cornell University
domains:
  - ecology
  - climate
---
A citywide map of tree identity for New York City from a Cornell-led team (David Miller first author, Daniel Katz of Cornell's School of Integrative Plant Science senior author, with co-authors at Weill Cornell Medicine, the University of New Hampshire and the University of Oklahoma). It classifies about 1.8 million tree crown polygons into the 18 most common genera, which cover roughly 78% of the city's basal area. Unlike street-tree inventories it includes trees on private property and in natural areas, which the team estimates are 65% of the canopy and about 1.4 million trees that had never been surveyed.

Labels were extrapolated from the city's existing inventory to crown objects using an XGBoost classifier trained on time series of 3 m PlanetScope imagery and structural metrics from airborne lidar. Overall accuracy is 82%, higher for common genera such as plane and oak and lower for rare ones. The work is part of the Cool Trees project led by Arnab Ghosh; the stated aim is to find which trees cool best and to inform planting choices around allergens and pests, in support of the city's goal of 30% tree cover by 2040.

The paper is in Scientific Data (published 14 August 2026, CC BY-NC-ND 4.0). The dataset is on Zenodo, the classification code on GitHub, and the map can be browsed at nyctreegenusmap.com. The team has compiled a list of 405 US cities it hopes to map the same way.
