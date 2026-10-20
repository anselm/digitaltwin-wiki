---
about:
  label: City2Graph
  description: >-
    Open-source Python library by Yuta Sato and colleagues that turns
    buildings, streets, transit feeds, origin–destination matrices, zones and
    points of interest into graphs for network analysis in NetworkX and for
    graph neural networks in PyTorch Geometric.
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
City2Graph is a Python library that cuts a city into nodes and edges. It takes buildings, street segments, tessellations, GTFS and GBFS transit feeds, origin–destination matrices, points of interest and polygonal zones, and builds graphs from them. The graphs can hold several kinds of node and relation at once, so buildings, streets, stops and amenities stay distinct instead of being flattened into one network. The copyright is held by Yuta Sato and the City2Graph developers; the code lives in the c2g-dev organisation on GitHub. The library is described in a 2026 paper by Sato, Pietrostefani, Mahabir and Arribas-Bel in Computers, Environment and Urban Systems, which the makers ask any research use to cite.

The same graph moves between GeoPandas, NetworkX, rustworkx and PyTorch Geometric without being rebuilt, so one dataset can serve mapping, centrality and other spatial network analysis, and training a graph neural network. Worked examples on the site include a Liverpool study that builds heterogeneous graphs from open data and uses graph autoencoders to cluster the city's structure; a GTFS feed for London turned into a travel-time graph with stops ranked by betweenness centrality; a mobility graph of the migration flows the 2021 census recorded between every MSOA in England and Wales; and proximity graphs over Tokyo points of interest. A workshop on the library was given at FOSS4G 2026.

It installs with pip or from conda-forge and supports Python 3.12 to 3.14. The core install builds and analyses graphs without PyTorch; PyTorch and PyTorch Geometric are optional extras, with CPU and CUDA variants, for GNN-ready tensors. It reads Overture Maps, OpenStreetMap-derived data (including street networks fetched with OSMnx, which the makers describe as complementary), GTFS and GBFS feeds and ordinary GIS layers. The licence is BSD-3-Clause.

On this shelf it stands for the step between data and model: choosing which things become nodes and which relations become edges, and keeping that choice reusable. It takes its raw material from sources such as /data-sources/openstreetmap-osm/.
