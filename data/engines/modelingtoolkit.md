---
about:
  label: ModelingToolkit.jl
  description: >-
    Open-source Julia library from SciML for building models from connected
    components as equations, which it simplifies symbolically and turns into
    fast simulation code; MIT licence.
  tags:
    - component-based modelling
    - acausal
    - equation-based
    - Julia
    - differential equations
tool:
  tier: 2
  form: open-source Julia library
  group: Agents and system dynamics
  homepage: 'https://docs.sciml.ai/ModelingToolkit/stable/'
  licence: MIT
  cost: free
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: MIT
domains:
  - energy
relations:
  - predicate: alternative_to
    target: engines/simulink
provenance:
  origin: agent
  sources:
    - title: 'Home · ModelingToolkit.jl'
      url: 'https://docs.sciml.ai/ModelingToolkit/stable/'
    - title: 'SciML/ModelingToolkit.jl (README and LICENSE.md)'
      url: 'https://github.com/SciML/ModelingToolkit.jl'
    - title: 'Acausal Component-Based Modeling · ModelingToolkit.jl'
      url: 'https://docs.sciml.ai/ModelingToolkit/stable/tutorials/acausal_components/'
    - title: 'Comparison of ModelingToolkit vs Equation-Based and Block Modeling Languages · ModelingToolkit.jl'
      url: 'https://docs.sciml.ai/ModelingToolkit/stable/comparison/'
    - title: 'Importing FMUs · ModelingToolkit.jl'
      url: 'https://docs.sciml.ai/ModelingToolkit/stable/tutorials/fmi/'
    - title: 'Open Source Component-Based Modeling with ModelingToolkit - Stochastic Lifestyle'
      url: 'https://www.stochasticlifestyle.com/open-source-component-based-modeling-with-modelingtoolkit/'
    - title: 'ModelingToolkit: A Composable Graph Transformation System For Equation-Based Modeling (arXiv:2103.05244)'
      url: 'https://arxiv.org/abs/2103.05244'
    - title: 'SciML/ModelingToolkit.jl releases'
      url: 'https://github.com/SciML/ModelingToolkit.jl/releases'
  created: '2026-10-31'
  reviewed: '2026-10-31'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
ModelingToolkit.jl is a modelling language used from the Julia programming language, and part of the SciML family of open-source packages.[^1,2] A model is written as equations. ModelingToolkit simplifies the equations symbolically, as algebra software does, and generates fast numerical code from the result.[^1,2] One such rewrite, index reduction, makes some systems of differential-algebraic equations solvable that a purely numerical method cannot solve; these are equations of change over time together with equations that must hold at every instant.[^1] Besides ordinary differential equations it handles stochastic and partial differential equations, nonlinear systems and optimisation problems.[^1]

Models are built from components. The documentation's tutorial builds an electrical circuit from parts whose pins each carry a voltage and a current.[^3] Connecting two pins makes their currents sum to zero and their voltages equal, and the whole circuit is simplified before it is solved.[^3] The tutorial calls this acausal component-based modelling: a connection states equalities between the variables of the parts it joins.[^3] The project's comparison page describes Simulink as causal and calls ModelingToolkit closer to Simscape, a sub-environment of Simulink.[^4] It ships with a standard library of prebuilt components.[^1] It imports models from formats such as SBML and CellML.[^1] It also imports FMUs, models packaged under versions 2 and 3 of the FMI standard, though not FMUs with events.[^5]

On Modelica, another language for acausal models, ModelingToolkit's own comparison says both are acausal modelling languages. Modelica has many implementations, such as Dymola and OpenModelica, many of them not open source, while ModelingToolkit has a single open-source implementation that users can extend with their own transformations; many Modelica compilers come with a graphical interface and ModelingToolkit does not.[^4]

In a 2025 talk, Chris Rackauckas, one of its authors, described the aim: one expert builds an engine, another a drive shaft, and the two are connected into a model of a car.[^6] He presented ModelingToolkit as an open-source way to do this that scales to large, detailed digital twins.[^6] The paper to cite, by Yingbo Ma and five co-authors including Rackauckas, was posted to arXiv in 2021.[^1,7] In it, simplified models generated with machine learning ran 590 times faster than the Dymola Modelica compiler on a heating, ventilation and air-conditioning (HVAC) model, at 3% error.[^7]

It installs from Julia's package manager and is under the MIT licence.[^1,2] Version 11 is current, with release 11.46.1 on 27 October 2026.[^1,8] JuliaHub offers commercial support.[^1]

For someone modelling a place, ModelingToolkit fits physical networks in which flows must balance at every junction, such as a building's heating and cooling or a district's pipes and cables, built as reusable parts and connected. It works in code, with no drawing interface. [Simulink](/engines/simulink/) is the commercial block-diagram tool for similar work.
