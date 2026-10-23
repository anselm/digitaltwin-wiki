---
about:
  depiction: engines/anylogic.jpg
  label: AnyLogic
  description: >-
    AnyLogic's simulation software combines agent-based, discrete-event and
    system-dynamics modelling in one model, with libraries for road traffic,
    pedestrians and rail and the option to place models on GIS maps.
  tags:
    - agent-based
    - pedestrians
    - traffic
tool:
  form: Commercial modeling environment
  group: Agents and system dynamics
  homepage: 'https://www.anylogic.com/'
open:
  source: closed
  data: unknown
  api: 'yes'
  participation: unknown
domains:
  - people
relations:
  - predicate: answers
    target: questions/crowds-and-evacuation
provenance:
  origin: agent
  sources:
    - title: 'AnyLogic: Simulation Modeling Software Tools & Solutions'
      url: 'https://www.anylogic.com/'
    - title: Simulation Software to Solve Every Challenge
      url: 'https://www.anylogic.com/features/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
AnyLogic is general-purpose simulation software from a company of the same name.[^1] Agents are simulated actors with their own behaviour. Discrete-event process flows move items through a sequence of steps, and system-dynamics diagrams track stocks and flows.[^1] Models are built with visual languages (flowcharts, statecharts, stock and flow) and can be extended in Java.[^1,2]

Four parts matter for work on places:

- The Road Traffic Library: vehicles, intersections, signals, public transport and parking.[^2]
- The Pedestrian Library: crowd flows in terminals, stadiums and streets, including evacuation scenarios.[^1,2]
- The Rail Library.[^1,2]
- Built-in GIS maps, on which model elements can be placed and routed along real roads.[^1]

The company's case studies are mostly in logistics and manufacturing (DHL, BMW, Amazon).[^2] Transportation and urban infrastructure are mentioned as further areas.[^2]

Licensing options include floating licences.[^2] AnyLogic runs as a desktop application and, since the AnyLogic Online version, in a browser.[^1,2] AnyLogic Cloud runs experiments, hosts models for others and exposes a REST API.[^1] The company says Cloud is how models connect to operational data as digital twins.[^1]
