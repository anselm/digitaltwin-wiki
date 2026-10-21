---
about:
  label: MiroFish
  description: >-
    Open-source multi-agent simulation that builds a population of LLM agents
    from a seed document such as a news report or policy draft, runs them
    against each other and reports on the possible course of the event.
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
MiroFish is written by the MiroFish team and backed and incubated by Shanda Group, and its GitHub repository is in Chinese and English. The maker calls MiroFish a swarm-intelligence prediction engine. Its agents are LLM agents, software characters driven by a large language model, and the simulation layer is built on OASIS, an open agent social simulation from CAMEL-AI.

A user uploads seed material, which can be a news story, a policy draft, a financial signal or a data report, and describes in plain language what they want predicted. MiroFish extracts entities and relationships into a graph and generates personas and memories for thousands of agents. The agents run in parallel on two simulated platforms, and the result goes to a report agent. The user can inject new variables during a run, and afterwards chat with any simulated agent and question the report agent.

The README's demo videos show a public-opinion simulation about Wuhan University and a reconstruction of the lost ending of Dream of the Red Chamber from its first eighty chapters. A hosted demo shows a trending public-opinion event.

MiroFish installs from source (Node.js 18+, Python 3.11 to 3.12, uv) or with Docker Compose. A web front end runs on port 3000 and a Python back end on port 5001. Running it needs a Zep Cloud key and an API key for any LLM that speaks the OpenAI SDK format, and the README recommends Alibaba's Qwen-plus. Consumption is high, and the README suggests starting with runs of fewer than 40 rounds. Licence AGPL-3.0.

The repository was created on GitHub in November 2025, and the team is recruiting. Its agents interact in a social space built from text, whereas spatial agent-based platforms such as /engines/gama/ place agents on a map.
