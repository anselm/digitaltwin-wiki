---
about:
  label: City2Graph
  description: >-
    Open-source Python library by Yuta Sato and colleagues that builds graphs
    from buildings, streets, transit feeds, origin–destination matrices, zones
    and points of interest, for network analysis in NetworkX and graph neural
    networks in PyTorch Geometric.
  tags:
    - graph
    - graph neural networks
    - urban morphology
    - street network
    - gtfs
    - python
tool:
  form: open-source library
  group: Research infrastructure
  homepage: 'https://city2graph.net/'
  licence: BSD-3-Clause
  cost: free
domains:
  - places
  - mobility
open:
  source: open
  data: unknown
  api: yes
  participation: open
  licence: BSD-3-Clause
  note: 'The API is the Python library itself; there is no hosted service. Contributions are invited on GitHub.'
provenance:
  origin: agent
  sources:
    - title: 'City2Graph: Geospatial Graphs for Network Analysis and GNNs'
      url: 'https://city2graph.net/'
    - title: 'GitHub - c2g-dev/city2graph: Transform geospatial relations into graphs for Graph Neural Networks and spatial network analysis'
      url: 'https://github.com/c2g-dev/city2graph'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A graph here is a set of nodes joined by edges. The library builds them from buildings, street segments, tessellations (areas cut into tiles with no gaps), GTFS public transport timetables, GBFS bike-share feeds, origin–destination matrices of trips between places, points of interest and polygonal zones. One graph can hold several kinds of node and relation at once, so buildings, streets, stops and amenities stay distinct.

Yuta Sato and the City2Graph developers hold the copyright. The code is in the c2g-dev organisation on GitHub. A 2026 paper by Sato, Pietrostefani, Mahabir and Arribas-Bel in Computers, Environment and Urban Systems describes the library, and the makers ask research users to cite that paper.

The same graph moves between GeoPandas, NetworkX, rustworkx and PyTorch Geometric without being rebuilt. One dataset can serve mapping, centrality and other spatial network analysis, and also the training of a graph neural network (a machine-learning model that learns from networks). Worked examples on the site include:

- a Liverpool study that builds heterogeneous graphs from open data and clusters the city's structure with graph autoencoders
- a London GTFS feed made into a travel-time graph, with stops ranked by betweenness centrality (how often a stop lies on the shortest routes between others)
- a mobility graph of the migration flows the 2021 census recorded between every MSOA (a small census area) in England and Wales
- proximity graphs over Tokyo points of interest

A workshop on the library was given at FOSS4G 2026.

City2Graph installs with pip or from conda-forge and supports Python 3.12 to 3.14. The core install builds and analyses graphs without PyTorch. PyTorch and PyTorch Geometric are optional extras, in CPU and CUDA variants, for GNN-ready tensors. Inputs can come from Overture Maps, OpenStreetMap-derived data (see /data-sources/openstreetmap-osm/), GTFS and GBFS feeds and ordinary GIS layers. Street networks fetched with OSMnx, which the makers call complementary, also work. The licence is BSD-3-Clause.
