---
about:
  label: Generative Agents (Smallville)
  description: >-
    Research code from Stanford for language-model characters that remember,
    reflect and plan, shown in Smallville, a small game town of 25 agents; a
    2024 follow-up repository builds agents from interviews and survey answers
    and lets researchers put questions to them.
  tags:
    - LLM agents
    - simulated people
    - social simulation
    - survey
    - Smallville
    - Stanford
tool:
  form: open-source research code
  group: People and populations
  homepage: 'https://github.com/joonspk-research/generative_agents'
  licence: Apache-2.0 (Smallville code); MIT (genagents)
  cost: 'free code; runs need a paid OpenAI API key'
open:
  source: open
  data: partly
  api: unknown
  participation: open
  licence: Apache-2.0
  note: >-
    The genagents repository ships a bank of over 3,000 agents seeded from
    General Social Survey demographics; the 1,000 interview-based agents are
    not public.
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/concordia
  - predicate: alternative_to
    target: engines/tinytroupe
provenance:
  origin: agent
  sources:
    - title: 'joonspk-research/generative_agents (README)'
      url: 'https://github.com/joonspk-research/generative_agents'
    - title: 'Generative Agents: Interactive Simulacra of Human Behavior (arXiv abstract)'
      url: 'https://arxiv.org/abs/2304.03442'
    - title: 'StanfordHCI/genagents (README)'
      url: 'https://github.com/StanfordHCI/genagents'
    - title: 'LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals (arXiv abstract)'
      url: 'https://arxiv.org/abs/2411.10109'
    - title: 'Simulating human behavior | Simile'
      url: 'https://www.simile.com/'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Generative agents are software characters driven by a large language model (LLM), the kind of model behind ChatGPT. Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang and Michael S. Bernstein described them in a 2023 paper presented at UIST '23, an ACM conference on user interfaces. Each agent keeps a running record of what it has seen, written in plain language. It periodically sums those memories up into higher-level reflections and draws on both to plan its day. In the paper's demonstration, 25 agents live in Smallville, a town styled after The Sims. Told only that one of them wants to throw a Valentine's Day party, the others spread invitations over two days, ask each other out and turn up at the right time.

The code for that town is public on GitHub. It runs as two programs on your own machine: a Django web server that draws the map, and a Python simulation server that calls OpenAI's API. Each game step stands for ten seconds of town time. You can start from a three-agent or a 25-agent town, load your own histories for the characters, and replay a saved run in the browser. Renaming the characters or adding more than the map holds means editing the map in the Tiled map editor. The authors warn that runs could be costly, as of early 2023, and that the API can hang at its hourly rate limit. Nothing has been committed since August 2023, so it is a fixed research artefact, not a maintained tool.

A second repository, genagents, followed in November 2024 from Stanford's HCI group. It turns the idea toward survey research: you build an agent from data about a person and ask it multiple-choice, numerical or open questions. The accompanying paper built agents for 1,052 Americans from two-hour interviews, from survey answers, or both. On held-out questions from the General Social Survey, a long-running US survey of attitudes, the agents reached 82 to 86 percent of the accuracy with which the same people repeated their own answers two weeks later, against 74 percent for agents given only demographics. Those agents are not public, for the participants' privacy. The README said the authors planned restricted research access. What ships is a bank of over 3,000 agents seeded from General Social Survey demographics, with fictional names and addresses, and one sample agent of an author.

Both repositories are for studying the method, not for answering a town's planning question. Smallville has no real geography or population behind it, and the genagents bank reflects survey demographics rather than any particular place. The Smallville code is Apache-2.0 and genagents is MIT. Several of these authors went on to found [Simile](/engines/simile/), a company selling simulations of this kind. [Concordia](/engines/concordia/) and [TinyTroupe](/engines/tinytroupe/) are maintained libraries in the same family.
