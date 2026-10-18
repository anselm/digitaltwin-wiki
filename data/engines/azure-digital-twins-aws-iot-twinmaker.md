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
Azure Digital Twins is a Microsoft platform service for building a graph of the things in an environment: buildings, farms, energy networks, railways, or, as Microsoft puts it, entire cities. You define types in the Digital Twins Definition Language (DTDL), create a twin for each real entity, link them with relationships, feed them from IoT Hub devices or business systems through REST APIs, and query the live graph. Changes can be historised to Azure Data Explorer and routed to other Azure services, and a 3D Scenes Studio (in preview) maps twins onto 3D models. It is pay-as-you-go cloud infrastructure, not a model of any place in itself.

AWS IoT TwinMaker is Amazon's counterpart. It models equipment, spaces and processes as an entity-component knowledge graph, with built-in connectors to AWS IoT SiteWise time series and Kinesis Video Streams and custom connectors written as Lambda functions, so data stays where it already lives. Scenes are composed from uploaded glTF or glB models with data tags at positions in the scene, and dashboards are built with a Grafana plug-in. Amazon's own examples are factories, remote facilities and commercial buildings, and the documentation says it must not be used for hazardous or safety-critical operation.

Both are hosted, commercial, and used as the data and graph layer under a twin application; the domain model and the simulation come from elsewhere.
