---
about:
  label: Azure Digital Twins / AWS IoT TwinMaker
  description: >-
    Cloud services from Microsoft (Azure Digital Twins) and Amazon (AWS IoT
    TwinMaker) for describing the entities and relationships in a place and
    connecting them to live device data.
  tags:
    - cloud
    - IoT
    - knowledge graph
tool:
  form: Cloud application services
  group: Infrastructure and assets
  homepage: 'https://azure.microsoft.com/en-us/products/digital-twins'
open:
  source: closed
  data: unknown
  api: 'yes'
  participation: unknown
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: Digital Twins – Modeling and Simulations
      url: 'https://azure.microsoft.com/en-us/products/digital-twins'
    - title: What is Azure Digital Twins?
      url: 'https://learn.microsoft.com/en-us/azure/digital-twins/overview'
    - title: Digital Twins Made Easy | AWS IoT TwinMaker
      url: 'https://aws.amazon.com/iot-twinmaker/'
    - title: What is AWS IoT TwinMaker?
      url: >-
        https://docs.aws.amazon.com/iot-twinmaker/latest/guide/what-is-twinmaker.html
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Azure Digital Twins builds a graph, a network of linked entities, of the things in an environment.[^1,2] Microsoft's examples are buildings, farms, energy networks, railways and entire cities.[^1,2] You define types in the Digital Twins Definition Language (DTDL) and create a twin for each real entity. Relationships link the twins.[^2] IoT Hub devices or business systems feed them through REST APIs, and you query the live graph.[^1,2] Changes can be historised to Azure Data Explorer and routed to other Azure services.[^1,2] A 3D Scenes Studio, in preview, maps twins onto 3D models.[^2] Billing is pay-as-you-go.[^1]

AWS IoT TwinMaker is Amazon's counterpart. It models equipment, spaces and processes as an entity-component knowledge graph.[^3,4] Built-in connectors read AWS IoT SiteWise time series and Kinesis Video Streams, and custom connectors are written as Lambda functions.[^4] The data stays in its existing stores.[^3] Scenes are composed from uploaded glTF or glB models with data tags at positions in the scene.[^4] Dashboards are built with a Grafana plug-in.[^3,4] Amazon's examples are factories, remote facilities and commercial buildings,[^3] and Amazon rules out use for hazardous or safety-critical operation.[^4]

Both are hosted and commercial.[^1,3] They serve as the data and graph layer under a twin application, and the domain model and the simulation come from elsewhere.
