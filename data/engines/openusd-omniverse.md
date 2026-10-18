---
about:
  label: OpenUSD
  description: >-
    Universal Scene Description, the open 3D scene format and software
    platform created by Pixar and now stewarded by the Alliance for OpenUSD;
    the scene layer under NVIDIA Omniverse and many simulation pipelines.
  tags:
    - 3d
    - scene format
    - interoperability
    - usd
    - omniverse
tool:
  form: open scene-description standard and library
  group: 3D cities and mapping
  homepage: 'https://openusd.org/release/index.html'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: 'USD Home — Universal Scene Description 26.08 documentation'
      url: 'https://openusd.org/release/index.html'
    - title: Alliance for OpenUSD
      url: 'https://aousd.org/'
    - title: 'Develop Physical AI Applications | NVIDIA Omniverse'
      url: 'https://www.nvidia.com/en-us/omniverse/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT094
  kind: enabling_standard_platform
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P062
  posters:
    - Daniel Sebastian Moreno
domains:
  - sensory
---
OpenUSD (Universal Scene Description) is a software platform and file format for building animated 3D scenes collaboratively, created by Pixar Animation Studios for film and visual-effects production. Its documentation describes a schema set for geometry, shading, lighting and physics, and a composition system for assembling many assets into one scene so that several tools and people can work on it at once. The Alliance for OpenUSD, a non-profit under the Joint Development Foundation whose founding members are Pixar, Adobe, Apple, Autodesk and NVIDIA, now promotes it and publishes a core specification.

For digital-twin work it is mainly a way to exchange scene data between content tools and simulators. NVIDIA Omniverse, a set of libraries for building simulation-ready worlds for robotics and industrial digital twins, lists OpenUSD as one of its core library areas, so Omniverse scenes are USD scenes; the two are related but not the same thing.

OpenUSD is open-source software with documentation and releases at openusd.org; the pages read do not name the licence. Omniverse libraries are obtained through NVIDIA's developer site and GitHub, some of them pre-release, with enterprise support sold separately.

Status: operational; the documentation read is for release 26.08.
