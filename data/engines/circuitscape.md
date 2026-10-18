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
Circuitscape models connectivity in a heterogeneous landscape by treating it as an electrical circuit: resistance layers describe how hard each cell is to cross, and current flow shows where movement concentrates, considering all possible pathways at the same time rather than a single least-cost route. It was created by Brad McRae (1966-2017), Viral B. Shah, Tanmay Mohapatra and Ranjan Anantharaman. Companion tools are Omniscape, which applies Circuitscape in a moving window for omni-directional connectivity; Linkage Mapper, an ArcGIS toolbox that maps corridors, pinch-points and barriers; and Gnarly Landscape Utilities, which builds the core-area and resistance layers the others need.

The project lists its uses as wildlife corridor design, landscape genetics, movement ecology, connectivity under climate change, and infectious disease, fire and agriculture. It received The Wildlife Society's Spatial Ecology and Telemetry Working Group award in 2013.

Circuitscape 5 is written in Julia and runs on Windows, macOS and Linux; it is installed as a Julia package (`Pkg.add("Circuitscape")`, Julia 1.12 or later) and driven by INI configuration files, reading ESRI ASCII grids and, with ArchGDAL, GeoTIFF. The code is on GitHub under the MIT licence. The earlier Python version, Circuitscape 4, is archived but its installers and ArcGIS toolboxes remain downloadable. NASA and The Nature Conservancy funded version 5; the Wilburforce Foundation funded version 4.

Status: maintained; the site was last modified in September 2026 and the project says it is looking for contributors and maintainers.
