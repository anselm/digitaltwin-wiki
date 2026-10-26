---
about:
  depiction: engines/ema-workbench.jpg
  depiction_credit: 'Outcomes of a lake pollution model under ten policies, from the EMA Workbench tutorial. J.H. Kwakkel, BSD-3-Clause.'
  label: EMA Workbench
  description: >-
    Open-source Python library from TU Delft that runs a model across many
    combinations of uncertain inputs and policies, then finds which
    combinations lead to which outcomes.
  tags:
    - exploratory modelling
    - deep uncertainty
    - scenario discovery
    - robust decision making
    - Python
tool:
  form: open-source Python library
  group: Agents and system dynamics
  homepage: 'https://emaworkbench.readthedocs.io/en/latest/'
  licence: BSD-3-Clause
  cost: free
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: BSD-3-Clause
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'EMA Workbench documentation'
      url: 'https://emaworkbench.readthedocs.io/en/latest/'
    - title: 'quaquel/EMAworkbench (README)'
      url: 'https://github.com/quaquel/EMAworkbench'
    - title: 'A High Level Overview (EMA Workbench documentation)'
      url: 'https://emaworkbench.readthedocs.io/en/latest/getting_started/overview.html'
    - title: 'General Introduction (EMA Workbench documentation)'
      url: 'https://emaworkbench.readthedocs.io/en/latest/indepth_tutorial/general-introduction.html'
    - title: 'The Exploratory Modeling Workbench: An open source toolkit for exploratory modeling, scenario discovery, and (multi-objective) robust decision making (Crossref record)'
      url: 'https://api.crossref.org/works/10.1016/j.envsoft.2017.06.054'
    - title: 'quaquel/EMAworkbench releases'
      url: 'https://github.com/quaquel/EMAworkbench/releases'
    - title: 'Glossary (EMA Workbench documentation)'
      url: 'https://emaworkbench.readthedocs.io/en/latest/ema_documentation/glossary.html'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The EMA Workbench is a Python library for exploratory modelling and analysis, a research method that uses computational experiments to study complex and uncertain systems, following Bankes (1993).[^1,2] Its purpose is decision support under deep uncertainty and robust decision making.[^1,2] In practice a modeller designs a set of experiments over the uncertain inputs and the policy options, runs them all, and analyses the results together.[^1,3] Jan Kwakkel develops it at Delft University of Technology, and has worked on it since 2010.[^2,4]

It runs a model supplied by the user: one written in Python, or one built in Vensim, NetLogo, Simio, Vadere or Excel through its connectors, and there is a connector for models run with PySD.[^2,3] The modeller declares the uncertainties and the policy levers, picks a sampling method, and the workbench runs the experiments one after another or in parallel, on one machine, on a cluster or across several nodes of a high-performance computer.[^1,3] Its Patient Rule Induction Method (PRIM) and classification trees find the ranges of inputs that produce a given outcome, a use the project calls scenario discovery.[^3,5,7] Other analysis tools include feature scoring, regional sensitivity analysis, and plots of time series, pairs of outcomes and parallel coordinates.[^3]

It installs with pip, needs Python 3.9 or newer, and is free under the BSD 3-Clause licence.[^2] Version 3.0 was released in March 2026.[^6] The paper describing it is Kwakkel, "The Exploratory Modeling Workbench: An open source toolkit for exploratory modeling, scenario discovery, and (multi-objective) robust decision making", Environmental Modelling & Software, 2017.[^4,5] The tutorial works through a lake pollution model, testing rules for how much pollution may be released.[^4]

For a place facing a long-term choice, such as flood defences, water allocation or a climate plan, the workbench can run an existing model through many possible futures to show which policy holds up across most of them, and under which conditions each one fails. The model itself is built elsewhere, for example in [Vensim](/engines/vensim/), [NetLogo](/engines/netlogo/) or [PySD](/engines/pysd/).
