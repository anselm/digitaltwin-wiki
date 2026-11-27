---
about:
  label: 'Inside an engine: the techniques a model of a place is built from'
  depiction: engine.svg
  description: >-
    Most simulation engines are assembled from the same few parts: a state, a
    clock, several ways of changing the state, and tools wrapped around the
    run. A diagram and a short account of each.
  tags:
    - overview
    - architecture
    - agent-based
    - cellular automata
    - system dynamics
    - reinforcement learning
    - data assimilation
    - coupling
article:
  tier: 3
relations:
  - predicate: about
    target: articles/parts-of-a-twin
  - predicate: cites
    target: engines/agents-and-system-dynamics/gama
  - predicate: cites
    target: engines/weather-and-climate/palm
  - predicate: cites
    target: engines/agents-and-system-dynamics/anylogic
  - predicate: cites
    target: engines/research-infrastructure/helics-fmi
  - predicate: cites
    target: engines/agents-and-system-dynamics/ema-workbench
provenance:
  origin: agent
  sources:
    - title: 'Gymnasium documentation: basic usage (What is reinforcement learning?)'
      url: 'https://gymnasium.farama.org/introduction/basic_usage/'
    - title: 'The gama-platform organisation on GitHub (gama-gymnasium and gama-pettingzoo READMEs)'
      url: 'https://github.com/gama-platform'
    - title: 'PALM-4U components'
      url: 'https://palm.muk.uni-hannover.de/trac/wiki/palm4u'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude. Anselm asked for a page with a diagram on the stereotypical parts of digital twin engines. The division into parts is this wiki''s own, made from the entries it links to; it is a convenience and no standard. Only the three sources listed were read for this page; everything else rests on the linked entries and their sources. No textbook on simulation methods was consulted.'
  status: draft
---
[The parts of a digital twin](/articles/parts-of-a-twin/) divides a running model of a place into data, an ontology, an engine and a presentation. This page opens the engine. An engine is rarely one technique. Most are assembled from a small set of parts, and knowing the parts makes it easier to read a product's description and to see what it leaves out.

The diagram above shows them in five layers. The division is this wiki's own, drawn from the engines it describes. Real engines blur the lines.

## The state and the clock

The state is everything the model holds about the place at one moment: the depth of water in each cell, the position of each vehicle, the number of households in each zone. The clock moves it forward, either in fixed steps or by jumping to the next event. Every other part reads the state or changes it.

## Six ways of changing the state

**Physical solvers.** The movement of water, air, heat or fire is written as equations and solved on a grid or mesh. [HEC-RAS](/engines/water-and-flooding/hec-ras/) does this for rivers and floods, [PALM](/engines/weather-and-climate/palm/) for air in streets, [OpenFOAM](/engines/agents-and-system-dynamics/openfoam/) for flow in general. They are usually the most expensive parts to run.

**Cellular automata.** Space is a grid, and each cell changes according to a rule about its neighbours: a burning cell ignites the next, a built-up cell makes its neighbours more likely to be built on. There are no equations of motion, so they are cheap, and the rules have to be fitted to what was observed. Michael Batty's [Cities and Complexity](/media/cities-and-complexity/) builds cities this way.

**Network flow.** Many things move through links and nodes: traffic on roads, water in pipes, power on lines. The model works out how flow divides across the network. [SUMO](/engines/transport-and-crowds/eclipse-sumo/) and [PyPSA](/engines/energy-and-utilities/pypsa-pypsa-eur/) are examples for traffic and for power.

**Agent-based models.** Individuals, such as people, vehicles, households, firms or animals, each hold their own state and decide what to do. The pattern is whatever emerges. [GAMA](/engines/agents-and-system-dynamics/gama/), [MATSim](/engines/transport-and-crowds/matsim/), [Mesa](/engines/people-and-populations/mesa/) and [NetLogo](/engines/people-and-populations/netlogo/) are engines of this kind, and the agents usually start from a [synthetic population](/terms/synthetic-population/).

**Stocks and flows.** Called system dynamics. The model holds a few totals, such as population, housing or water in a reservoir, that fill and drain at rates which depend on each other. It has no map and runs in moments. [Vensim](/engines/agents-and-system-dynamics/vensim/) and [En-ROADS](/engines/participation-and-learning/en-roads/) work this way.

**Discrete events.** The model is a list of things that happen in turn: a patient arrives, a bed frees up, a ship docks. It suits queues, schedules and logistics. [Simkit](/engines/agents-and-system-dynamics/simkit/) is one toolkit, and [AnyLogic](/engines/agents-and-system-dynamics/anylogic/) combines this method with the previous two in one model.

A **learned model** can stand in for any of the six. It is trained on past data, or on many runs of a slower model, and then gives an answer quickly. [Learned models of the Earth](/articles/learned-models-of-the-earth/) describes the arrangements and their limits.

[The Grammar of Simulation](/articles/the-grammar-of-simulation/), a 2026 atlas of simulation games, arrives at nearly the same list from games: aggregate stocks, individual agents, fields on a grid, networks and continuous bodies.

## How an agent decides

The decision rule inside an agent is a part of its own, and there are four common ways to supply it.

- **Fixed rules.** If the road is blocked, take the next one. Simple to write and to explain.
- **Choice models.** The agent weighs options by cost, time and preference, with weights estimated from surveys. Transport and land-use models such as [ActivitySim](/engines/people-and-populations/activitysim/) and [UrbanSim](/engines/land-use-and-housing/urbansim/) do this.
- **Learned policies.** The agent's behaviour is found by reinforcement learning. The Gymnasium documentation describes this as learning by trial and error: an agent tries actions, receives rewards, and gradually improves.[^1] The simulation serves as the practice ground. GAMA publishes wrappers that present any of its models to learning algorithms in the two standard forms, one for a single learner and one for many.[^2]
- **Language models.** The agent is given a description of a person and asked what that person would do. [Generative Agents](/engines/people-and-populations/generative-agents/) is the best-known research code, and [Synthetic people](/articles/synthetic-people/) covers what is known about how far the answers can be trusted.

Reinforcement learning has a second use, described under search below.

## What is wrapped around a run

**Coupling.** Two models exchange state as they run: the flood model tells the power model which substations are under water. [HELICS and FMI](/engines/research-infrastructure/helics-fmi/) are two ways of doing it, and the story of [a flooded substation](/stories/a-flooded-substation/) shows why it matters. Some engines couple parts internally; PALM's urban components include a multi-agent system of residents inside an air-flow model.[^3]

**Data assimilation.** Observations arrive while the model runs and are used to correct its state, so that it does not drift from the real place. This is the part that makes a model a twin in the strict sense. [Dietze on ecological forecasting](/articles/dietze-near-term-ecological-forecasting/) and the [National Academies report](/articles/nasem-digital-twins-research-gaps/) both explain it.

**Calibration.** Before use, the model's adjustable numbers are tuned until it reproduces what was recorded. The guide [Check it against what happened](/guides/check-it-against-what-happened/) covers this. The [CliMA Earth system model](/engines/weather-and-climate/clima/) keeps every adjustable number in one package so that a second package can calibrate them together.

**Scenarios.** One run answers little. The model is run many times across the things that are uncertain or under someone's control, and the runs are compared. The [EMA Workbench](/engines/agents-and-system-dynamics/ema-workbench/) is a tool for exactly this.

**Search.** A program looks for the inputs that give the best outcome, where a person would otherwise try scenarios by hand. Optimisation does this when the problem can be written as costs and constraints, as PyPSA does for an energy system. Reinforcement learning does it when the answer is a rule for acting over time, such as when to release water from a reservoir, and it learns that rule by operating the simulation many times.[^1] Whatever it finds is only as good as the simulation it practised in.

## Reading an engine with this in hand

For any product or project, the diagram suggests questions. Which of the six kinds of process does it contain, and which does it leave to another model? How do its agents decide, and where did the rule come from? Is it corrected by observations while it runs, or only calibrated once? Can it run a thousand scenarios, or one?

Few engines have every part. GAMA has agents, grids, a physics library and a server for outside programs, and leaves fluid flow to others. PALM has a detailed physical solver and a simple population. The guide [Choose the kind of model](/guides/choose-the-kind-of-model/) starts from the question instead of the parts.
