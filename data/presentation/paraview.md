---
about:
  label: ParaView
  description: >-
    Open-source data analysis and visualization application from Kitware,
    used to look at the output of simulations from laptop to supercomputer
    scale.
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
ParaView is a post-processing visualization application developed by Kitware with contributions from the Lawrence Livermore, Sandia and Los Alamos national laboratories, the Army Research Laboratory and the DOD HPC Modernization Program. It loads the results of simulations and other large datasets and lets the user slice, filter and render them.

Kitware's page lists computational fluid dynamics, engineering, materials science, medical science and sensor data as its main uses. It scales from a laptop to supercomputer-sized datasets, can run in a browser through trame, and can process data in situ while a simulation runs through ParaView Catalyst.

It is free software under a permissive BSD 3-Clause licence, installed locally; Kitware sells customization and support.

Status: operational, long established.
