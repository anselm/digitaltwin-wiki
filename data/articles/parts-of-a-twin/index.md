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
A twin that is running is not one piece of software. It is a stack of four, and the shelves of the Technologies area follow it in order.

**Data.** What was measured or recorded: satellite and aerial imagery, weather stations, river gauges, surveys, sensor feeds, census tables, land records, historical decisions. The [Data](/data-sources/) shelf lists sources a model can be fed with, and on what terms.

**Ontologies.** The step from data to knowledge: a decision about what the things are, which properties they carry, and how they relate. A building with a height and a use; a catchment that drains through reaches; an agent with a rule. Every engine carries one, usually unstated, and joining two models is mostly the work of reconciling two of them. The [Ontologies](/ontologies/) shelf holds the standards, the papers and the tools for this layer, the term entry [Ontology](/terms/ontology/) says why the world has to be cut up at all, and a review of [The Ontology Pipeline](/ontologies/the-ontology-pipeline/) describes the work of building one in order.

**Engines.** The simulations that move state forward in time: snow cover deepening, a fire crossing a forested ridge, traffic reassigning itself after a closure, a housing market responding to a zoning change. The [Engines](/engines/) shelf is the largest and is arranged by the task a person is trying to do.

**Presentation.** How a person sees what the model did: a globe, a map, a chart, a story, a before-and-after. Nothing is simulated here, but it is where most people meet a model and where a result either becomes an argument or does not. The [Presentation](/presentation/) shelf holds the libraries and viewers.

The layers are made by different people. A city buys its data from one set of suppliers, adopts a data model from a standards body, runs engines written by research groups or vendors, and shows the result in a viewer written by someone else again. Each can be open or closed on its own, which is why entries on this site carry an open block for source, data, API and participation rather than a single word.

![An ecosystem for seeing and choosing what comes next: families of observation (atmosphere, oceans, land, the built world, people who know a place) feed a world model; many independent models sit beside it and a test-against-the-world loop checks it; what-if branches become futures that are made understandable through stories, maps, diagrams and explorable explanations for many readers, who then deliberate, act, observe and learn, and send new observations back to the top.](/articles/parts-of-a-twin/ecosystem.jpg)

*A whole-system picture of the same stack at planetary scale, drawn by Anselm Hook for [What If? Time Machines](https://anselm.substack.com/p/what-if-time-machines-looking-closer) (September 2026). The engine at the centre is one specific proposal, Ryan Orbuch's world model of the real Earth; the shape around it, observations above, many independent models beside, presentation and people below, and a loop back from what actually happened, is what any twin of a place looks like once it is in use.*

What the picture adds to the four layers is the loop. A twin that is used changes the place it models, the place sends back new observations, and the model is checked against them and revised. The guide [Check it against what happened](/guides/check-it-against-what-happened/) is about that loop, and the [Notable twins](/twins/) are the ones that have survived a few turns of it.
