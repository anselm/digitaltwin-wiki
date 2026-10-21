---
about:
  label: TimeLike
  description: >-
    Steve Coy's simulation framework for decision-making: composable causal
    models of a system, run faster than real time to predict the
    consequences of possible courses of action.
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
domains:
  - people
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
Steve Coy founded TimeLike Systems in 2011. The framework descends from tempus, the general-purpose simulation framework Coy led at MZA Associates, whose optics tool WaveTrain became a standard in high-energy laser research.

The company calls its approach SECHI, simulation-enabled cooperative human intelligence. Experts encode what they know as causal models, models of what causes what, and these are coupled into a model of a larger system. The simulation predicts the probable consequences of each course of action open to the user. Model-based optimisation then narrows them to the course with the best expected outcome.

The engine is event-driven. Models are blocks with typed ports. A block does nothing until something it is connected to changes, asks it for a value, or a scheduled event fires. So each block can carry its own physics and run at its own pace. Queries carry time, and causality falls out of the coupling. Components negotiate their fidelity with their neighbours instead of an expert tuning every run. The aim is a virtual clock that runs faster than the real one: a model fast enough to predict can act as a controller for a place.

TimeLike contains no machine learning of its own. The company presents it as intelligence augmentation and distinguishes it from generative AI. A patent application, "Composable Self-Modeling Cyber-Physical Systems", is pending. Earlier tools in the lineage ran satellite-operator training in real time and wrapped a legacy Fortran adaptive-optics code.

TimeLike is not yet released. The company is looking for collaborators, strategic partners and early adopters. There is no public download, and pricing is not published.
