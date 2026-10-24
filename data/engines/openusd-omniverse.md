---
about:
  label: OpenUSD
  description: >-
    Universal Scene Description, the open 3D scene format and software library
    created by Pixar and promoted by the Alliance for OpenUSD; the scene format
    under NVIDIA Omniverse and many simulation pipelines.
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
    - title: 'USD Home — Universal Scene Description 26.11 documentation'
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
  - places
---
Pixar Animation Studios built OpenUSD for film and visual-effects production, as a file format and library for building animated 3D scenes collaboratively.[^1,2] Its documentation defines schemas for geometry, shading, lighting and physics.[^1] A composition system assembles many assets into one scene so that several tools and people can work on it at once.[^1] The Alliance for OpenUSD now promotes it and publishes a core specification.[^2] The Alliance is a non-profit under the Joint Development Foundation; its founding members are Pixar, Adobe, Apple, Autodesk and NVIDIA.[^2]

For models of places, OpenUSD is mainly a way to exchange scene data between content tools and simulators.[^2,3] NVIDIA Omniverse is a set of libraries for building simulation-ready worlds for robotics and industrial digital twins.[^3] Omniverse lists OpenUSD as one of its core library areas, so Omniverse scenes are USD scenes.[^3] The two are related but not the same thing.

OpenUSD is open source, with documentation and releases at openusd.org.[^1] The documentation is for release 26.11.[^1] Omniverse libraries come through NVIDIA's developer site and GitHub, and NVIDIA sells enterprise support separately.[^3]
