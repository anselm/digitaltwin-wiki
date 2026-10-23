---
about:
  label: Concordia
  description: >-
    Python library from Google DeepMind for building simulations in which
    language-model characters act and a "game master", borrowed from tabletop
    role-playing games, decides what their actions do.
  tags:
    - LLM agents
    - generative agent-based model
    - social simulation
    - game master
    - Google DeepMind
tool:
  form: open-source Python library
  group: People and populations
  homepage: 'https://github.com/google-deepmind/concordia'
  licence: Apache-2.0
  cost: 'free library; needs access to an LLM API and a text embedder'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: Apache-2.0
  note: Installs from PyPI as gdm-concordia.
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/generative-agents
  - predicate: alternative_to
    target: engines/agentsociety
provenance:
  origin: agent
  sources:
    - title: 'google-deepmind/concordia (README)'
      url: 'https://github.com/google-deepmind/concordia'
    - title: 'Generative agent-based modeling with actions grounded in physical, social, or digital space using Concordia (arXiv abstract)'
      url: 'https://arxiv.org/abs/2312.03664'
    - title: 'Releases · google-deepmind/concordia'
      url: 'https://github.com/google-deepmind/concordia/releases'
    - title: 'Commits · google-deepmind/concordia'
      url: 'https://github.com/google-deepmind/concordia/commits/main'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Concordia is a library for what its authors call generative agent-based models: simulations of many actors, each driven by a large language model (LLM), that act in a shared world.[^1,2] It lives in Google DeepMind's GitHub organisation, and the README states that it is not an officially supported Google product.[^1] The 2023 technical report has ten authors, led by Alexander Sasha Vezhnevets, with Joel Z. Leibo last.[^1,2]

The design borrows from tabletop role-playing games.[^1,2] Characters say in plain language what they intend to do. A special entity, the game master, decides what happens, for instance by checking whether an action is physically possible, and tells each character what it observes.[^1,2] In a simulation of digital services the game master can also call real apps and APIs.[^2] Each entity is assembled from components that hold its instructions, memory and way of choosing actions, and ready-made templates called prefabs give a starting point.[^1] The README's worked example is four friends snowed in at a pub, two of them arguing over a crashed car.[^1]

You install it with pip and write Python, or use a graphical editor and command-line interface that come with it.[^1] It needs any LLM API that can generate text, plus a text embedder for searching memory. Results depend on the model chosen.[^1] Tutorials include a notebook that runs in Colab and a recorded lecture.[^1] The authors list social science, AI safety and ethics, economics, synthetic data and testing real services with simulated users among its uses.[^1,2] Version 2.4.0 came out in March 2026,[^3] and commits continued into October 2026.[^4]

Concordia is a toolkit, not a model of any population. It has no census data, map or calibrated behaviour built in. Whoever builds a simulation with it has to show that the characters stand for real people. Licence Apache-2.0.[^1]
