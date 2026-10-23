---
about:
  label: Extinction Explorer
  description: >-
    Prototype web app from Esri's Applications Prototype Lab that links a 3D
    map of species observations in the San Bernardino National Forest with a
    3D food-web graph to show the knock-on effects of losing a species.
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
Hannah Nisonson described it in a post on Esri Community.[^1] An ArcGIS Knowledge Graph holds species, observations and source documents.[^1] A knowledge graph is a database of entities and their connections. Interactions come from Global Biotic Interactions (GloBI), reduced to eight relationship types such as predates, pollinates and nests in.[^1] Observations come from iNaturalist and other datasets in GBIF, the Global Biodiversity Information Facility.[^1] Three hops out from the threatened species it starts with, the graph holds about 3,000 species, 8,000 relationships and tens of thousands of observations.[^1]

Selecting a species treats it as an extinction event.[^1] The app works out which neighbours lose relationships or become isolated, and highlights the cascade in both the map and the network.[^1] Each event is logged and can be reversed.[^1] Nisonson presents this as a way to see dependencies.[^1]

Everything runs in the browser.[^1] The ArcGIS Maps SDK for JavaScript renders observations as 3D pushpins over terrain, 3d-force-graph with three.js draws the network, and openCypher, a query language for graphs, fetches the data.[^1] A demo is linked from the post.[^1]
