---
about:
  label: Simulink
  description: >-
    MathWorks' commercial block-diagram environment for modelling and
    simulating dynamic systems, built up from subsystems and referenced
    models joined through defined interfaces and buses.
  tags:
    - block diagram
    - component-based modelling
    - control systems
    - MATLAB
    - simulation
tool:
  tier: 1
  form: commercial desktop and browser modelling software
  group: Agents and system dynamics
  homepage: 'https://www.mathworks.com/products/simulink.html'
open:
  source: closed
  data: unknown
  api: 'yes'
  participation: unknown
domains:
  - energy
relations:
  - predicate: alternative_to
    target: engines/modelingtoolkit
provenance:
  origin: agent
  sources:
    - title: 'Simulink - Simulation and Model-Based Design - MATLAB'
      url: 'https://www.mathworks.com/products/simulink.html'
    - title: 'Component-Based Modeling in Simulink - MATLAB & Simulink'
      url: 'https://www.mathworks.com/help/simulink/ug/component-based-modeling-guidelines.html'
    - title: 'Explore Types of Simulink Components - MATLAB & Simulink'
      url: 'https://www.mathworks.com/help/simulink/ug/types-of-model-components.html'
    - title: 'Compare Capabilities of Simulink Components - MATLAB & Simulink'
      url: 'https://www.mathworks.com/help/simulink/ug/model-architecture-guidelines.html'
    - title: 'Define Interfaces and Manage Data of Simulink Components - MATLAB & Simulink'
      url: 'https://www.mathworks.com/help/simulink/ug/interface-design.html'
  created: '2026-10-31'
  reviewed: '2026-10-31'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Simulink, from MathWorks, is software for designing systems as block diagrams. Its models can span several physical domains, run as simulations before any hardware is built, and be deployed without hand-written code.[^1] It works together with MATLAB, so graphical and textual programming can be combined in one environment.[^1] Its uses, as MathWorks lists them, include control systems, electrification, robotics and signal processing.[^1]

A single model can combine electrical, mechanical, thermal, hydraulic and software components, and can take in other tools' models packaged as FMUs under the [FMI standard](/engines/helics-fmi/).[^1] Simulink generates C, C++, CUDA, PLC, Verilog and VHDL code from models, runs in a web browser as Simulink Online, and can scale simulations out to clusters and cloud computers.[^1] MathWorks also presents it as a way to build digital twins across a system's life cycle.[^1]

MathWorks' guidance on component-based modelling describes splitting a large model into functional pieces with well-defined interfaces, so that engineers can work on them independently and avoid conflicting edits to one file, and advises doing so only when the benefits outweigh the cost.[^2] Simulink offers four kinds of component:[^3]

- A subsystem: a group of blocks whose interface takes on the properties of its inputs and outputs.[^3]
- A linked subsystem: an instance of a subsystem kept in a library.[^3]
- A subsystem reference: a pointer to a reusable group of blocks.[^3]
- A model reference: a pointer to a whole model with a defined interface.[^3]

The differences matter for reuse. Copies of a subsystem are independent of each other and run only inside a parent model.[^4] A referenced model can be developed on its own and used many times in many models without copies.[^4] It can also be shared as a protected model that hides its contents, and its code can be compiled in parallel.[^4] Buses carry several signals or messages through one port, which simplifies the interfaces between components.[^5] When a Simulink.Bus object defines the bus at an interface, the interface requires data for the whole bus, and such objects can be kept under revision control in a data dictionary.[^5]

Simulink is sold by MathWorks; the product page offers a free trial and a pricing page but states no prices.[^1]

For someone modelling a place, Simulink fits engineered systems such as a pumping station or a building's heating, modelled together with their control software. Its component rules help when several teams each own one piece of such a model. [ModelingToolkit](/engines/modelingtoolkit/) is an open-source library in Julia for the same kind of work.
