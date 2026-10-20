---
about:
  label: MiroFish
  description: >-
    Open-source multi-agent simulation from the MiroFish team, incubated by
    Shanda Group; builds a population of LLM agents from a seed document such
    as a news report or policy draft, runs them against each other and writes
    a report on how the event could unfold.
  tags:
    - agent-based
    - LLM agents
    - public opinion
    - prediction
    - social simulation
    - scenario
tool:
  form: open-source application
  group: Agents and system dynamics
  homepage: 'https://github.com/666ghj/MiroFish'
  licence: AGPL-3.0
  cost: 'free software; the user supplies their own LLM API key and Zep Cloud key'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: AGPL-3.0
  note: Needs an OpenAI-compatible LLM API key and a Zep Cloud key to run.
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: '666ghj/MiroFish: A Simple and Universal Swarm Intelligence Engine, Predicting Anything'
      url: 'https://github.com/666ghj/MiroFish'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed (the README and licence as shown on the GitHub page)'
  status: draft
---
MiroFish is an open-source program that simulates a crowd of LLM agents to work out how an event might play out. It is written by the MiroFish team, backed and incubated by Shanda Group, and its simulation layer is built on OASIS, the open agent social simulation from CAMEL-AI. The maker calls it a swarm-intelligence prediction engine; the GitHub repository is in Chinese and English.

A user uploads seed material, for example a news story, a policy draft, a financial signal or a data report, and describes in plain language what they want predicted. MiroFish extracts entities and relationships into a graph, generates personas and memories for thousands of agents, runs them in parallel on two simulated platforms, and hands the result to a report agent. The user can inject new variables while the run is going, chat with any simulated agent afterwards, and question the report agent. The README's demo videos are a public-opinion simulation about Wuhan University and a reconstruction of the lost ending of Dream of the Red Chamber from its first eighty chapters; a hosted demo shows a trending public-opinion event.

It installs from source (Node.js 18+, Python 3.11 to 3.12, uv) or with Docker Compose, and serves a web front end on port 3000 with a Python back end on port 5001. It needs an API key for any LLM that speaks the OpenAI SDK format (the README recommends Alibaba's Qwen-plus) and a Zep Cloud key. The README warns that consumption is high and suggests runs of fewer than 40 rounds to start. Licence AGPL-3.0.

The repository was created on GitHub in November 2025; the team is recruiting. In this wiki it sits at the engine layer, beside spatial agent-based platforms such as /engines/gama/, but its agents live in a social space built from text, not a geographic one.
