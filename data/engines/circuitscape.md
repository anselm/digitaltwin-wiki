---
about:
  label: Circuitscape
  description: >-
    Open-source program that borrows algorithms from electronic circuit
    theory to predict how animals, plants and genes move across a landscape,
    treating every possible path at once; written in Julia.
  tags:
    - habitat connectivity
    - wildlife corridors
    - circuit theory
    - landscape ecology
    - open source
tool:
  form: Open-source connectivity library
  group: Ecosystems and land
  homepage: 'https://circuitscape.org/'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: MIT
  note: >-
    Code is on GitHub under the MIT licence; the project asks for bug
    reports on GitHub issues and is looking for new contributors and
    maintainers.
domains:
  - ecology
relations:
  - predicate: answers
    target: questions/sensory-landscape
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: Circuitscape
      url: 'https://circuitscape.org/'
    - title: Circuitscape 5
      url: 'https://circuitscape.org/downloads/'
    - title: 'GitHub - Circuitscape/Circuitscape.jl: Algorithms from circuit theory to predict connectivity in heterogeneous landscapes'
      url: 'https://github.com/Circuitscape/Circuitscape.jl'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Resistance layers describe how hard each cell of a landscape is to cross. Treated as an electrical circuit, the current flowing through them shows where movement concentrates, over all possible pathways at the same time.[^1] Circuitscape was created by Brad McRae (1966-2017), Viral B. Shah, Tanmay Mohapatra and Ranjan Anantharaman.[^1]

It has three companion tools:

- Omniscape applies Circuitscape in a moving window for omni-directional connectivity.[^1]
- Linkage Mapper is an ArcGIS toolbox that maps corridors, pinch-points and barriers.[^1,2]
- Gnarly Landscape Utilities builds the core-area and resistance layers the others need.[^1,2]

The project lists its uses as wildlife corridor design, landscape genetics (how landscape features shape gene flow between populations), movement ecology, connectivity under climate change, infectious disease, fire and agriculture.[^1] Circuitscape received The Wildlife Society's Spatial Ecology and Telemetry Working Group award in 2013.[^1]

Circuitscape 5 is written in Julia, a programming language for scientific computing, and runs on Windows, macOS and Linux.[^2] Users install it as a Julia package (`Pkg.add("Circuitscape")`, Julia 1.12 or later) and drive it with INI configuration files.[^3] It reads ESRI ASCII grids and, with ArchGDAL, GeoTIFF.[^3] The code is on GitHub under the MIT licence,[^2,3] and the project is looking for new contributors and maintainers.[^2] The earlier Python version, Circuitscape 4, is archived, but its installers and ArcGIS toolboxes remain downloadable.[^2] NASA and The Nature Conservancy funded version 5; the Wilburforce Foundation funded version 4.[^1]
