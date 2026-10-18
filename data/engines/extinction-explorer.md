---
about:
  label: Extinction Explorer
  description: >-
    Prototype web app by Hannah Nisonson of Esri's Applications Prototype Lab
    that links a 3D map of species observations in the San Bernardino National
    Forest with a 3D food-web graph, and shows what else is affected when a
    species is removed.
  tags:
    - biodiversity
    - knowledge graph
    - food web
    - species
    - arcgis
    - 3d
tool:
  form: prototype web app
  group: Wildlife and oceans
  homepage: >-
    https://community.esri.com/en/discussion/1720571/from-points-on-a-map-to-a-living-biological-network
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: From Points on a Map to a Living Biological Network - Esri Community
      url: >-
        https://community.esri.com/en/discussion/1720571/from-points-on-a-map-to-a-living-biological-network
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT059
  kind: scenario_prototype
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P139
  posters:
    - Hannah Nisonson
domains:
  - ecology
---
Extinction Explorer is a prototype from Esri's Applications Prototype Lab, written up by Hannah Nisonson, that puts a map of species observations and a graph of ecological relationships side by side for the San Bernardino National Forest. An ArcGIS Knowledge Graph holds species, observations and source documents; interactions from Global Biotic Interactions (GloBI) are reduced to eight relationship types such as predates, pollinates and nests in, and observations come from iNaturalist and other GBIF datasets. At three hops from the threatened species it starts with, the graph holds about 3,000 species, 8,000 relationships and tens of thousands of observations.

Selecting a species treats it as an extinction event: the app works out which neighbours lose relationships or become isolated, highlights the cascade in both the map and the network, logs it, and lets the user reverse it. The author presents this as a way to see dependencies, not as a population model.

It runs entirely in the browser: the ArcGIS Maps SDK for JavaScript renders observations as 3D pushpins over terrain, 3d-force-graph with three.js draws the network, and openCypher queries fetch the graph. A demo is linked from the post.

Status: prototype. The post gives no date.
