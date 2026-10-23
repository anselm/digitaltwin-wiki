---
about:
  label: TinyTroupe
  description: >-
    Experimental Python library from Microsoft that simulates people with set
    personalities, beliefs and jobs using a language model, for simulated
    focus groups, interviews and market surveys.
  tags:
    - LLM agents
    - personas
    - focus groups
    - market research
    - synthetic respondents
    - Microsoft
tool:
  form: open-source Python library
  group: People and populations
  homepage: 'https://github.com/microsoft/TinyTroupe'
  licence: MIT
  cost: 'free library; needs an OpenAI or Azure OpenAI key (local models via Ollama are experimental)'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: MIT
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/edsl
  - predicate: alternative_to
    target: engines/generative-agents
provenance:
  origin: agent
  sources:
    - title: 'microsoft/TinyTroupe (README)'
      url: 'https://github.com/microsoft/TinyTroupe'
    - title: 'TinyTroupe: An LLM-powered Multiagent Persona Simulation Toolkit (arXiv abstract)'
      url: 'https://arxiv.org/abs/2507.09788'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
TinyTroupe simulates people. Each simulated person, a TinyPerson, has a written specification: nationality, age, occupation, personality, beliefs and behaviours.[^1,2] A large language model (LLM) plays the part.[^1] People can be placed together in a TinyWorld, where they talk to each other and to the experimenter.[^1] Microsoft publishes it, and Paulo Salem and five colleagues describe it in a 2025 preprint.[^2]

It is aimed at business and productivity work, not games.[^1] The README's examples include rating advertisements with a simulated audience, interviewing a simulated customer and running a simulated focus group.[^1] Simulated professionals, a physician or a lawyer, can give feedback on a proposal, and the library can generate synthetic data.[^1] A factory can sample a population of people from a description.[^1] The library includes checks that a person stays in character and, since version 0.6.0 in February 2026, a validator that compares simulated answers with real survey data using standard statistical tests.[^1] Two example notebooks do this, one a market survey on bottled gazpacho and one on story-telling devices for children.[^1]

You install it from the GitHub repository, which the README recommends over PyPI, and work in Python or Jupyter notebooks.[^1] It is built for OpenAI models, through OpenAI or Azure; the default since February 2026 is gpt-5-mini.[^1] Support for local models through Ollama is partial and experimental.[^1] The README asks users to switch on the API provider's content filters.[^1] Version 0.7.0, from March 2026, added images as input.[^1]

Microsoft calls it a research project under heavy development, with an API that still changes between versions.[^1] Its legal disclaimer says outputs may be unrealistic or inaccurate, advises using them to generate insight and not for direct decisions, and says it is not meant to simulate sensitive situations.[^1] The preprint reports preliminary experiments with real human behaviour as a control and describes both possibilities and limits.[^2] Licence MIT.[^1]
