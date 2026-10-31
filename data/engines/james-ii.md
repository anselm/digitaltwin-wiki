---
about:
  label: JAMES II
  description: >-
    Plug-in framework for simulation research from the University of
    Rostock, in Java: models, simulators and experiment setups are kept
    apart, so each can be swapped or reused.
  tags:
    - simulation framework
    - plug-ins
    - Java
    - discrete-event
    - research software
tool:
  form: open-source Java framework
  group: Agents and system dynamics
  homepage: 'http://web.archive.org/web/20210302145559/http://jamesii.informatik.uni-rostock.de/jamesii.org/'
  licence: JAMES II licence (BSD-style, GPL-compatible)
  cost: free
open:
  source: open
  data: unknown
  api: 'yes'
  participation: open
  licence: JAMES II licence (BSD-style, GPL-compatible)
relations:
  - predicate: alternative_to
    target: engines/simkit
  - predicate: alternative_to
    target: engines/anylogic
provenance:
  origin: agent
  sources:
    - title: 'James II (home page, Internet Archive copy of 2 March 2021)'
      url: 'http://web.archive.org/web/20210302145559/http://jamesii.informatik.uni-rostock.de/jamesii.org/'
    - title: 'James II license (Internet Archive copy of 6 July 2016)'
      url: 'http://web.archive.org/web/20160706002326/http://jamesii.informatik.uni-rostock.de:80/jamesii.org/license'
    - title: 'James II downloads (Internet Archive copy of 5 July 2016)'
      url: 'http://web.archive.org/web/20160705223526/http://jamesii.informatik.uni-rostock.de:80/jamesii.org/downloads'
    - title: "Plug'n Simulate (Crossref record)"
      url: 'https://api.crossref.org/works/10.1109/ANSS.2007.34'
    - title: "Plug'n Simulate (OpenAlex record, with abstract)"
      url: 'https://api.openalex.org/works/doi:10.1109/ANSS.2007.34'
  created: '2026-10-31'
  reviewed: '2026-10-31'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
JAMES II comes from the Modeling and Simulation Research Group at the University of Rostock's Institute of Computer Science, in Germany. It is a toolkit in Java on which other modelling and simulation programs are built.[^1] The name stands for JAva-based Multipurpose Environment for Simulation.[^1] It succeeds an earlier system called JAMES, rebuilt from scratch, whose name once stood for Java-based Agent Modeling Environment for Simulation.[^1] Jan Himmelspach began it in 2003 within CoSA, a project funded by the German Research Foundation (DFG).[^1] Dozens of people have contributed since, mostly researchers in the Rostock group.[^1] Himmelspach left the group in April 2013, and long-term contributors then coordinated development.[^1]

It is built from plug-ins, hundreds of them by the project's count.[^1] It does not prescribe a modelling formalism (a formal language for writing models); the user decides what models look like.[^1] Cellular automata, attributed Pi calculus, ML-DEVS and ML-Rules are among the formalisms supported.[^1] Models are kept separate from simulators, so a model can be run by different simulation algorithms, and parts of simulators such as event queues and random number generators can be reused.[^1] Experiments are handled the same way: replications run in parallel or across workers, with parameter scans, simulation-based optimisation, workflow-based experiments, automatic selection of a simulation algorithm, and reports with plots.[^1] The paper the project asks people to cite is "Plug'n Simulate" by Jan Himmelspach and Adelinde Uhrmacher, from the 40th Annual Simulation Symposium in 2007.[^1,4] It notes that a new simulator or formalism often means writing a whole simulation system from scratch, and proposes plugging such ideas into an existing framework instead.[^5]

The project describes JAMES II as a framework and a research prototype: its default graphical interface is basic, and many features are used through its programming interfaces.[^1] It needs Java 1.7 and the Java Development Kit, builds with Maven, and kept its source in Mercurial.[^1] The most recent release on its downloads page is 0.9.7 BETA of 25 September 2014, and the home page still offered 0.9.7 in March 2021.[^1,3] Its licence is written in German; the project summarises it as a BSD-style licence adapted to German law and compatible with the GPL.[^1,2] The licence allows free and commercial use, requires modified versions that are distributed to stay under it (or under the GPL version 3 when combined with GPL code), and requires free modifications to be made public.[^2]

For someone modelling a place, JAMES II is mainly a design to learn from: a model kept apart from the algorithm that runs it and from the experiment that varies it, so that each can be replaced or reused. [Simkit](/engines/simkit/) is another Java toolkit built around reusable simulation components.
