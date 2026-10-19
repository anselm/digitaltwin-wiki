---
about:
  label: What is a digital twin?
  description: >-
    A computational representation of a real object, place or system, linked to
    information about its real-world counterpart.
term: {}
provenance:
  origin: survey
  sources:
    - title: 'UK government: digital twin definition, October 2025'
      url: >-
        https://www.gov.uk/government/publications/digital-twin-definition/digital-twin-official
    - title: 'Digital Twin Technology & GIS | What is a Digital Twin?'
      url: 'https://www.esri.com/en-us/digital-twin/overview'
  reviewed: '2026-10-18'
  reviewed_by: 'survey draft; the paragraph on definitions added by Claude from the Esri page, 2026-10-18'
  status: proposed
---
The update interval depends on the application: traffic signals and long-term housing plans operate on different clocks.

A traffic twin, for example, combines a road network with traffic counts, signal timings and vehicle movements. It can help an operator respond to congestion or let a planner experiment with a different junction layout.

This guide is about large-scale systems with public consequences: cities and regions, electricity and water networks, transport and crowds, watersheds and ecosystems.

People define the term in different ways, and the differences matter when reading a vendor's page or a tender. The UK government's definition, above, leans on the link to the real counterpart: a model that is updated from the thing it represents. Esri's page defines it more broadly, as "a virtual representation of reality, including physical objects, processes, and relationships", and presents GIS as the way to assemble one. Others reserve the word for a model fed by live sensors, and call everything else a model or a simulation. This wiki uses "digital twin" as shorthand for all of these: models and simulations of real places, whether or not they are live.

Whatever the definition, a running twin is made of the same four parts, data, an ontology, an engine and a presentation; see [The parts of a digital twin](/articles/parts-of-a-twin/).
