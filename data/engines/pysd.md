---
about:
  label: PySD
  description: >-
    Open-source Python library that translates system dynamics models from
    Vensim or Stella (via XMILE files) into Python, to run and fit them with
    Python's data tools.
  tags:
    - system dynamics
    - Vensim
    - Stella
    - Python
    - stocks and flows
tool:
  form: open-source Python library
  group: Agents and system dynamics
  homepage: 'https://pysd.readthedocs.io/'
  licence: MIT
  cost: free
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: MIT
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'PySD documentation'
      url: 'https://pysd.readthedocs.io/en/latest/'
    - title: 'SDXorg/pysd (README)'
      url: 'https://github.com/SDXorg/pysd'
    - title: 'About the Project (PySD documentation)'
      url: 'https://pysd.readthedocs.io/en/latest/about.html'
    - title: 'Getting Started (PySD documentation)'
      url: 'https://pysd.readthedocs.io/en/latest/getting_started.html'
    - title: 'Structure of the PySD library (PySD documentation)'
      url: 'https://pysd.readthedocs.io/en/latest/structure/structure_index.html'
    - title: 'SDXorg/pysd releases'
      url: 'https://github.com/SDXorg/pysd/releases'
    - title: 'SDXorg/pysd commit history'
      url: 'https://github.com/SDXorg/pysd/commits/master'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
PySD runs system dynamics models in Python.[^1,2] System dynamics describes a system as stocks, quantities that build up or drain away over time, linked by feedback loops.[^3,5] PySD reads a model file made in Vensim (the .mdl format) or an XMILE file exported from Stella or other programs.[^5] It translates the model into Python code that runs without the original program.[^3] It does not replace those programs, since models are still drawn in a visual modelling tool.[^3] Not every Vensim and XMILE function is supported, so some models run only partly, though the project says most run properly.[^1]

James P Houghton created it in 2014 to translate Vensim models to Python.[^3] Alex Prey added the XMILE translator in 2017, and Eneko Martin-Martinez restructured the translation in 2022.[^3] The paper to cite is Martin-Martinez, Samsó, Houghton and Solé, "PySD: System Dynamics Modeling in Python", Journal of Open Source Software, 2022.[^1] It is maintained by its community under the MIT licence.[^1,2] The latest release is 3.14.3, from March 2025; in September 2026 the code gained a builder that writes models out as standalone Julia files.[^2,6,7]

A translated model runs with one command and returns a table (a pandas DataFrame) with the value of every part of the model at each time step.[^4] Parameters can be changed between runs, output can be sampled at the times when real measurements were taken, and results can be saved as CSV or netCDF files.[^4,5] A separate PySD Cookbook of notebooks shows model fitting, replacing parts of a model with machine-learning regressions, and comparing a model's predictions across geographic scales.[^2] An R package, pysd2r, makes it usable from R.[^2]

The project's stated reason for existing is to bring system dynamics into the tools of data science instead of rebuilding those tools inside system dynamics software.[^1,2] Someone who has built a stock-and-flow model of a town's housing or a watershed's water budget in Vensim or Stella can use PySD to fit it to measured data and run it across many settings. [En-ROADS](/engines/en-roads/) is an example of a large system dynamics model on this site.
