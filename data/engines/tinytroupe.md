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
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
TinyTroupe simulates people. Each simulated person, a TinyPerson, has a written specification: nationality, age, occupation, personality, beliefs and behaviours. A large language model (LLM) plays the part. People can be placed together in a TinyWorld, where they talk to each other and to the experimenter. Microsoft publishes it, and Paulo Salem and five colleagues describe it in a 2025 preprint.

It is aimed at business and productivity work, not games. The README's examples include rating advertisements with a simulated audience, interviewing a simulated customer and running a simulated focus group. Simulated professionals, a physician or a lawyer, can give feedback on a proposal, and the library can generate synthetic data. A factory can sample a population of people from a description. The library includes checks that a person stays in character and, since version 0.6.0 in February 2026, a validator that compares simulated answers with real survey data using standard statistical tests. Two example notebooks do this, one a market survey on bottled gazpacho and one on story-telling devices for children.

You install it from the GitHub repository, which the README recommends over PyPI, and work in Python or Jupyter notebooks. It is built for OpenAI models, through OpenAI or Azure; the default since February 2026 is gpt-5-mini. Support for local models through Ollama is partial and experimental. The README asks users to switch on the API provider's content filters. Version 0.7.0, from March 2026, added images as input.

Microsoft calls it a research project under heavy development, with an API that still changes between versions. Its legal disclaimer says outputs may be unrealistic or inaccurate, advises using them to generate insight and not for direct decisions, and says it is not meant to simulate sensitive situations. The preprint reports preliminary experiments with real human behaviour as a control and describes both possibilities and limits. Licence MIT.
