---
about:
  label: OASIS (Open Agent Social Interaction Simulations)
  description: >-
    Open-source simulator from CAMEL-AI of social media platforms like X and
    Reddit, populated by up to a million language-model users who post,
    follow and repost under a recommendation algorithm.
  tags:
    - LLM agents
    - social media
    - misinformation
    - polarization
    - recommendation systems
    - CAMEL-AI
tool:
  form: open-source Python package
  group: People and populations
  homepage: 'https://github.com/camel-ai/oasis'
  licence: Apache-2.0
  cost: 'free software; LLM calls are paid per token'
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: Apache-2.0
  note: A dataset is published on Hugging Face; documentation at docs.oasis.camel-ai.org.
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/agentsociety
  - predicate: alternative_to
    target: engines/mirofish
provenance:
  origin: agent
  sources:
    - title: 'camel-ai/oasis (README)'
      url: 'https://github.com/camel-ai/oasis'
    - title: 'OASIS: Open Agent Social Interaction Simulations with One Million Agents (arXiv abstract)'
      url: 'https://arxiv.org/abs/2411.11581'
    - title: '666ghj/MiroFish (README)'
      url: 'https://github.com/666ghj/MiroFish'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
OASIS imitates a social media platform and fills it with simulated users, each driven by a large language model (LLM). It is built for studying how things spread online: information, group polarization, where opinions in a group drift to extremes, and herd behaviour. It comes from the open-source CAMEL-AI project, and its 2024 paper has 23 authors, Ziyi Yang first and Jing Shao last.

The simulated platform has the parts that shape real ones. Users have profiles and a follow graph that changes as they act. Users can take 23 actions, including posting, commenting, reposting, quoting, following, muting and reporting a post. Each user's feed is chosen by a recommendation system, either by interest or by a "hot score" of popularity. Versions modelled on X and on Reddit are included. The authors report that it reproduces information spreading, polarization and herd effects on both, and that larger simulated crowds produced stronger group dynamics and more varied opinions.

You install it with pip as camel-oasis, supply a file of user profiles and a model, and step the simulation forward in Python; results go to a database. It works with OpenAI models and others through the CAMEL framework. The README gives a cost reference: 100 users for one step used about 336,000 input tokens on Alibaba's Qwen-turbo model. Cost grows with users, steps and the share of users active each step, so a million-user run is a large undertaking. Since 2025 a researcher can also interview a simulated user mid-run.

The README lists follow-on research built on OASIS, on collusion, fraud and marketplaces, and [MiroFish](/engines/mirofish/) uses it as its simulation layer. The repository was created in November 2024 and was still being updated in October 2026. Each study has to test for itself how closely the simulated users behave like people on a real platform. Licence Apache-2.0.
