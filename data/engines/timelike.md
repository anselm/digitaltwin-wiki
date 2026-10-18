---
about:
  label: TimeLike
  description: >-
    Steve Coy's simulation platform for decision-making: composable causal
    models of a system, run faster than real time to predict the consequences
    of possible courses of action and pick among them.
  tags:
    - simulation
    - decision support
    - model-based optimization
    - event-driven
tool:
  form: simulation framework
  group: Agents and system dynamics
  homepage: 'https://timelike.systems/'
open:
  source: closed
  data: unknown
  api: unknown
  participation: partly
provenance:
  origin: agent
  sources:
    - title: TimeLike™ Systems
      url: 'https://timelike.systems/'
    - title: TimeLike Systems / About Us
      url: 'http://www.timelikesystems.com/about.html'
    - title: 'Steve Coy''s ''Timelike Systems'' ; owning the clock. Anselm Hook, 2026-10-16'
      url: 'https://anselm.substack.com/p/steve-coys-timelike-systems-digital'
    - title: Steve Coy - Foresight Institute
      url: 'https://foresight.org/people/steve-coy/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: Claude; the four pages above were read on 2026-10-17
  status: draft
---
TimeLike is a modelling and simulation framework from TimeLike Systems, the
company Steve Coy founded in 2011. It descends from tempus, the general-purpose
simulation framework Coy led at MZA Associates, whose optics tool WaveTrain
became a standard in high-energy laser research. The company's approach is
called SECHI, simulation-enabled cooperative human intelligence: experts encode
what they know as causal models, the models are coupled into a model of a
larger system, the simulation predicts the probable consequences of each
course of action open to the user, and model-based optimisation narrows them
to the course with the best expected outcome.

The engine is event-driven. Models are blocks with typed ports; a block does
nothing until something it is connected to changes, asks it for a value, or a
scheduled event fires, so each block can carry its own physics and run at its
own pace. Queries carry time, which is how causality falls out of the
coupling, and components negotiate their fidelity with their neighbours
instead of an expert tuning every run. The point is to run the virtual clock
faster than the real one: a model fast enough to predict can act as a
controller, which is the line between a mirror of a place and a twin that
helps run it.

TimeLike holds no machine learning of its own and is positioned as
intelligence augmentation rather than generative AI. A patent application,
"Composable Self-Modeling Cyber-Physical Systems", is pending. Earlier tools
in the lineage ran satellite-operator training in real time and wrapped a
legacy Fortran adaptive-optics code.

Status: pre-release. The company is seeking collaborators, strategic partners
and early adopters; there is no public download or pricing.
