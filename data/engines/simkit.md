---
about:
  label: Simkit
  description: >-
    Models built as event graphs, from components that listen to each
    other's events: Arnold Buss's discrete-event toolkit in Java, from the
    Naval Postgraduate School.
  tags:
    - discrete-event
    - event graphs
    - component-based modelling
    - Java
    - queues
tool:
  tier: 4
  form: open-source Java library
  group: Agents and system dynamics
  homepage: 'https://github.com/ahbuss/Simkit'
  licence: 'LGPL-3.0 (LICENSE file); GPL v2 or later (License.txt)'
  cost: free
open:
  source: open
  data: unknown
  api: 'yes'
  participation: unknown
  licence: 'LGPL-3.0 (LICENSE file); GPL v2 or later (License.txt)'
relations:
  - predicate: alternative_to
    target: engines/james-ii
  - predicate: alternative_to
    target: engines/anylogic
  - predicate: alternative_to
    target: engines/timelike
provenance:
  origin: agent
  sources:
    - title: 'ahbuss/Simkit (README.md and Readme.txt)'
      url: 'https://github.com/ahbuss/Simkit'
    - title: 'Simkit License.txt and LICENSE'
      url: 'https://github.com/ahbuss/Simkit/blob/master/License.txt'
    - title: 'Component Based Simulation Modeling with Simkit (Buss, Proceedings of the 2002 Winter Simulation Conference)'
      url: 'https://www.informs-sim.org/wsc02papers/031.pdf'
    - title: 'Component based simulation modeling with Simkit (Crossref record)'
      url: 'https://api.crossref.org/works/10.1109/wsc.2002.1172891'
    - title: 'ahbuss/Simkit commit history'
      url: 'https://github.com/ahbuss/Simkit/commits/master'
  created: '2026-10-31'
  reviewed: '2026-10-31'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Simkit is an open-source Java library for discrete-event simulation by Arnold Buss and Kirk Stork, with a copyright running from 1997.[^1] Buss wrote about it from the MOVES Institute at the Naval Postgraduate School in Monterey, California.[^3] In a discrete-event simulation the state of a system changes only at separate moments, called events.[^3] An event list holds the events still to come in time order and runs them in turn.[^3]

Simkit models are written as event graphs, a notation from Lee Schruben.[^3] A model has state variables, the change each event makes to them, and scheduling edges of the form "when event A happens, if a condition holds, schedule event B after a delay".[^3] In code, each event becomes a method of a Java class, so an arrival event becomes doArrival().[^3]

Larger models are put together from components through two listener patterns, a framework Buss calls Listener Event Graph Objects, or LEGO.[^3] With the first, one component listens for another's events and reacts to those of the same name, as a queue hears each arrival from an arrival process.[^3] A small bridge component renames an event, so the end of service at one queue becomes an arrival at the next.[^3] With the second, every change of state is announced by convention, so statistics are collected by separate objects that listen, and the model itself need contain no statistics code.[^3] Components are treated as black boxes and can be built from other components.[^3] Buss writes that this loose coupling allows much more reuse of components than traditional approaches.[^3] His 2002 paper, "Component based simulation modeling with Simkit" (Winter Simulation Conference, pages 243 to 249), describes the modeller working through Simkit's programming interface, with a graphical interface then in development.[^3,4]

Simkit needs Java 1.17 or later (as its readme puts it); the simkit.jar file goes on the classpath, and the source builds with Ant.[^1] The repository carries a GNU LGPL version 3 LICENSE file and a License.txt that places Simkit under the GNU GPL, version 2 or later.[^2] It is maintained on GitHub, with commits in 2026, the latest on 4 August.[^5]

For someone modelling a place, Simkit suits systems where people or goods arrive, wait and are served, such as a clinic or a ferry terminal. Each part of such a system can be written once as a component and reused. [JAMES II](/engines/james-ii/) is another Java framework built for reuse, and [AnyLogic](/engines/anylogic/) offers discrete-event modelling with a graphical editor.
