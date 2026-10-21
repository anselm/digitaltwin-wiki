---
about:
  label: The parts of a digital twin
  description: >-
    A running model of a place is four things that are built, bought and
    broken separately: data, an ontology, an engine, and a presentation.
  tags:
    - stack
    - architecture
    - overview
    - ontology
    - presentation
article: {}
relations:
  - predicate: about
    target: terms/digital-twin
  - predicate: cites
    target: terms/ontology
provenance:
  origin: agent
  sources:
    - title: 'What If? Time Machines - looking closer at the proposal on Natural General Intelligence'
      url: 'https://anselm.substack.com/p/what-if-time-machines-looking-closer'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from a conversation with Anselm on 2026-10-19 and the post cited; the four-layer framing is his'
  status: draft
---
The shelves of the Technologies area follow these four layers in order.

**Data.** What was measured or recorded: satellite and aerial imagery, weather stations, river gauges, surveys, sensor feeds, census tables, land records, historical decisions. The [Data](/data-sources/) shelf lists sources a model can be fed with, and on what terms.

**Ontologies.** The step from data to knowledge. An ontology decides what the things are, which properties they carry, and how they relate. A building has a height and a use. A catchment drains through reaches. An agent follows a rule. Every engine has an ontology, usually unstated, and joining two models is mostly the work of reconciling two ontologies. The [Ontologies](/ontologies/) shelf holds the standards, papers and tools for this layer. The term entry [Ontology](/terms/ontology/) says why the world has to be cut up at all. A review of [The Ontology Pipeline](/ontologies/the-ontology-pipeline/) describes building one step by step.

**Engines.** The simulations that move state forward in time: snow cover deepening, a fire crossing a forested ridge, traffic reassigning itself after a closure, a housing market responding to a zoning change. The [Engines](/engines/) shelf is the largest, arranged by the task a person is trying to do.

**Presentation.** How a person sees what the model did: a globe, a map, a chart, a story, a before-and-after. Nothing is simulated in this layer. It is where most people meet a model, and where a result becomes an argument or fails to. The [Presentation](/presentation/) shelf holds the libraries and viewers.

Different people make each layer. A city buys its data from one set of suppliers and adopts a data model from a standards body. It runs engines written by research groups or vendors, and shows the result in a viewer written by someone else again. Each layer can be open or closed on its own. Entries on this site therefore have an open block with separate fields for source, data, API and participation.

![An ecosystem for seeing and choosing what comes next: families of observation (atmosphere, oceans, land, the built world, people who know a place) feed a world model; many independent models sit beside it and a test-against-the-world loop checks it; what-if branches become futures that are made understandable through stories, maps, diagrams and explorable explanations for many readers, who then deliberate, act, observe and learn, and send new observations back to the top.](/articles/parts-of-a-twin/ecosystem.jpg)

*The same stack at planetary scale, drawn by Anselm Hook for [What If? Time Machines](https://anselm.substack.com/p/what-if-time-machines-looking-closer) (September 2026). The engine at the centre is one specific proposal, Ryan Orbuch's world model of the real Earth. The shape around it is general to any twin of a place in use: observations above, many independent models beside, presentation and people below, and a loop back from what happened.*

The picture adds a loop to the four layers. A twin that is used changes the place it models. The place sends back new observations, and the model is checked against them and revised. The guide [Check it against what happened](/guides/check-it-against-what-happened/) covers this loop. The [Notable twins](/twins/) have each survived a few turns of the loop.
