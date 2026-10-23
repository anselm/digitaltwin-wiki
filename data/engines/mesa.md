---
about:
  label: Mesa
  description: >-
    Open-source Python library for building agent-based models, with grids,
    networks, data collection and a browser view; Mesa-Geo adds maps, so
    agents can live in real geography loaded from GIS files.
  tags:
    - agent-based
    - Python
    - simulation framework
    - GIS
    - teaching
tool:
  form: open-source Python library
  group: People and populations
  homepage: 'https://mesa.readthedocs.io/stable/'
  licence: Apache-2.0
  cost: free
domains:
  - people
  - places
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: Apache-2.0
relations:
  - predicate: alternative_to
    target: engines/netlogo
  - predicate: alternative_to
    target: engines/gama
provenance:
  origin: agent
  sources:
    - title: 'Mesa documentation'
      url: 'https://mesa.readthedocs.io/stable/'
    - title: 'mesa/mesa (README)'
      url: 'https://github.com/mesa/mesa'
    - title: 'mesa/mesa-geo (README)'
      url: 'https://github.com/mesa/mesa-geo'
    - title: 'Mesa 3: Agent-based modeling with Python in 2025 (Crossref record)'
      url: 'https://api.crossref.org/works/10.21105/joss.07668'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Mesa is a toolkit for writing agent-based models in Python. An agent-based model describes individuals, people, animals or firms, and the rules each follows, then runs them together to see what patterns emerge from their interaction. Mesa supplies the common parts: agents and a way to step them, spaces such as grids and networks, tools to record each step, and an interactive view in a web browser or a Jupyter notebook. The project presents it as the Python alternative to NetLogo, Repast and MASON.

It is an open-source project that welcomes contributions. The paper describing version 3, by Ewout ter Hoeven and six co-authors, appeared in the Journal of Open Source Software in March 2025. Version 3.5.1 came out in March 2026, version 4 is in pre-release, and the project is very active, with commits in October 2026. It takes part in Google Summer of Code.

The same project makes Mesa-Geo, which adds a geographic space. Its agents carry a real geometry, a Shapely shape, with a coordinate reference system, and can be loaded from shapefiles, GeoJSON or GeoPandas tables. With it, agents can stand on real streets and parcels instead of an abstract grid.

Both install with pip. Models are plain Python, so they can use Python's data tools for input and analysis. Mesa ships with no population or disease of its own; everything specific to a place has to be built by the modeller. For a visual, lower-code start, see [NetLogo](/shelf/netlogo/); for a platform built around GIS from the outset, see [GAMA](/shelf/gama/). Mesa and Mesa-Geo are Apache-2.0.
