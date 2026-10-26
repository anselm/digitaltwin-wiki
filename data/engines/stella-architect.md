---
about:
  depiction: engines/stella-architect.jpg
  label: Stella Architect
  description: >-
    System dynamics software from isee systems for building stock-and-flow
    models and publishing them as interactive simulations on the web, the
    desktop or mobile devices.
  tags:
    - system dynamics
    - stocks and flows
    - feedback
    - interactive simulation
    - teaching
tool:
  form: commercial desktop modelling software
  group: Agents and system dynamics
  homepage: 'https://iseesystems.com/store/products/stella-architect.aspx'
  licence: proprietary
  cost: '$3,999 non-academic, or subscriptions; 30-day free evaluation'
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/vensim
  - predicate: alternative_to
    target: engines/anylogic
  - predicate: answers
    target: questions/combining-proposals
provenance:
  origin: agent
  sources:
    - title: 'isee systems'
      url: 'https://iseesystems.com/'
    - title: 'Stella® Architect'
      url: 'https://iseesystems.com/store/products/stella-architect.aspx'
    - title: 'About isee systems'
      url: 'https://iseesystems.com/about.aspx'
    - title: 'Structure of the PySD library (PySD documentation)'
      url: 'https://pysd.readthedocs.io/en/latest/structure/structure_index.html'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Stella Architect is the version of isee systems' Stella software for designing and publishing model-based simulations that other people can use.[^2] A model is drawn as a diagram of stocks and flows that can be simulated over time, so that someone can test what-if scenarios before acting.[^1,3] isee systems was founded in 1985 by Barry Richmond and is based in Lebanon, New Hampshire.[^1,3] In 1989 the System Dynamics Society gave Richmond its Jay Wright Forrester Award for being the first to introduce an icon-based tool for building and simulating models, STELLA.[^3] Stella Professional and Stella Architect followed in 2015 and 2016.[^3]

Loops That Matter, released in 2020, shows during a run which feedback loops are driving behaviour.[^2,3] Causal Lens traces the causes of a variable's behaviour, and Stella Live updates results as settings change.[^2] There are sensitivity runs and a translator that opens Vensim models.[^2] One model can mix system dynamics with discrete events and some agent-based parts.[^2] Assemblies are premade model structures, with AI suggesting formulas and units.[^2] In 2007 isee committed to XMILE, a draft standard for exchanging models between programs, and in 2012 it released its first XMILE-compatible product.[^3]

What sets Architect apart is the interface builder: knobs, sliders, graphs and storytelling screens on top of a model, published to the web, the desktop or mobile devices so others can run it in a browser.[^2] An add-on publishes models to run inside Excel.[^2] The non-academic price is $3,999, with subscriptions of $539 for two months, $1,269 for six months and $1,929 for a year.[^2] There is a free 30-day evaluation licence, and Stella Online, an online model editor, and isee Player are free.[^1,2]

isee's examples include public policy work on urban planning and natural resource management, and conservation models of eutrophication, salmon fishing and water allocations to towns.[^2] For a group working on a place, the draw is a model of a watershed or a housing market that people in a meeting can change and rerun themselves. Models made in Stella can also be exported as XMILE and run in Python with [PySD](/engines/pysd/).[^4]
