---
about:
  label: ParaView
  description: >-
    Open-source data analysis and visualization application from Kitware
    for the output of simulations and other large datasets.
  tags:
    - visualization
    - scientific
    - post-processing
    - open source
    - cfd
tool:
  form: open-source visualization application
  group: Research infrastructure
  homepage: 'https://www.paraview.org/'
  licence: BSD 3-Clause
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'BSD-3-Clause'
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: 'ParaView - Open-source, multi-platform data analysis and visualization application'
      url: 'https://www.paraview.org/'
    - title: ParaView License
      url: 'https://www.paraview.org/license/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT038
  kind: enabling_tool
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P059
  posters:
    - Michael Beck
---
Kitware develops ParaView with contributions from the Lawrence Livermore, Sandia and Los Alamos national laboratories, the Army Research Laboratory and the DOD HPC Modernization Program. It is a post-processing tool: it works on a simulation's results after the run. Users slice, filter and render the data.

Its main uses are computational fluid dynamics (simulating how fluids such as air and water flow), engineering, materials science, medical science and sensor data. ParaView runs on a laptop and on supercomputers for the largest datasets. Through trame it runs in a browser. Through ParaView Catalyst it processes data in situ, while a simulation is still running.

ParaView is free software under the permissive BSD 3-Clause licence and installs locally. Kitware sells customization and support.
