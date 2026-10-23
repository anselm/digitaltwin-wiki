---
about:
  depiction: engines/bentley-itwin.jpg
  label: Bentley iTwin
  description: >-
    Bentley Systems' iTwin Platform of cloud APIs and its open-source iTwin.js
    library, for building applications on infrastructure digital twins that
    combine engineering, reality, GIS and IoT data.
  tags:
    - BIM
    - infrastructure
    - SDK
tool:
  form: Platform and SDK
  group: Infrastructure and assets
  homepage: 'https://www.bentley.com/software/itwin-platform/'
open:
  source: partly
  data: unknown
  api: 'yes'
  participation: unknown
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: iTwin Platform | Bentley Systems
      url: 'https://www.bentley.com/software/itwin-platform/'
    - title: iTwin.js
      url: 'https://www.itwinjs.org/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The platform's cloud services keep several kinds of data synchronised in one representation.[^1] Engineering and design data comes in as CAD and BIM files.[^1] BIM, building information modelling, means 3D models of a structure with data attached to each part. Reality data comes in as photos, point clouds, meshes and drone captures;[^1] a point cloud is a mass of measured 3D points, often from a laser scanner. The platform also takes IoT streams and enterprise business data.[^1] Services cover visualisation, reality-data processing, change tracking, access control and reporting.[^1] The intended users are developers, system integrators and software companies in transportation, utilities, cities, industrial facilities and construction.[^1]

iTwin.js is the open-source library underneath, with code on GitHub.[^2] At its core is the iModel, which merges CAD and BIM files, databases, schematics and spreadsheets, and records who changed what and when.[^2] Bentley's examples of applications built on the platform include Phozac, which aggregates traffic design data for agencies, and Allvision, which feeds AI-driven field audits of road and rail assets into the twin.[^1]

The platform's APIs and services are commercial cloud products, with a developer site at developer.bentley.com.[^1]
