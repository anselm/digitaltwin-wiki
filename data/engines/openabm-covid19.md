---
about:
  label: OpenABM-Covid19
  description: >-
    Open-source agent-based model of COVID-19 from the University of Oxford's
    Big Data Institute, with IBM UK and Faculty; simulates infection through
    household, workplace and random contacts and tests lockdowns, vaccination
    and manual and app-based contact tracing.
  tags:
    - epidemic model
    - agent-based
    - COVID-19
    - contact tracing
    - public health
tool:
  form: open-source C model with Python and R interfaces
  group: People and populations
  homepage: 'https://github.com/BDI-pathogens/OpenABM-Covid19'
  licence: GPL-3.0
  cost: free
domains:
  - people
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: GPL-3.0
relations:
  - predicate: alternative_to
    target: engines/covasim-starsim
provenance:
  origin: agent
  sources:
    - title: 'BDI-pathogens/OpenABM-Covid19 (README)'
      url: 'https://github.com/BDI-pathogens/OpenABM-Covid19'
    - title: 'OpenABM-Covid19, An agent-based model for non-pharmaceutical interventions against COVID-19 including contact tracing (Crossref record)'
      url: 'https://api.crossref.org/works/10.1371/journal.pcbi.1009146'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
OpenABM-Covid19 simulates the spread of COVID-19 through a city. Each simulated person belongs to a household and a workplace and also meets random contacts, and the virus passes along these links. The model follows each infected person through the course of the disease. Its distinctive feature is contact tracing: it can trace and quarantine the contacts of a case instantly. The team used it to judge how a phone contact-tracing app should be configured.

It was built by the Pathogen Dynamics group at the Big Data Institute, University of Oxford, with IBM UK and the data science company Faculty. The model paper, by Hinch and colleagues, appeared in PLOS Computational Biology in July 2021. By default it is set up with UK demographics and calibrated to the UK epidemic, and it can be re-parameterised for other countries. It simulates a million people at a few seconds per simulated day, fast enough to run many variations and to fit the model to data statistically. A companion model, adaptER-covid19, estimates the economic effects alongside the epidemic.

The core is written in C and needs a compiler and the GNU Scientific Library; it is best run from Python, and it also has an R interface. Inputs are a table of parameters and a table of household make-ups to sample from, and the repository documents both, along with every output file and the model's test suite. Example notebooks show a lockdown triggered by case numbers followed by app-based tracing.

The last tagged release is version 1.0 from April 2021. It remains a clear, well-documented example of an epidemic model built around social networks. The code is GPL-3.0. For a maintained alternative in Python, see [Covasim and Starsim](/shelf/covasim-starsim/).
