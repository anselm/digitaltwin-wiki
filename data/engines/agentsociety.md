---
about:
  label: AgentSociety
  description: >-
    Open-source platform from Tsinghua University's FIB Lab for simulating
    societies of language-model agents; version 1 simulated city life for over
    10,000 agents, and version 2 adds AI assistants that design and run the
    experiments.
  tags:
    - LLM agents
    - social simulation
    - urban
    - policy experiments
    - computational social science
    - Tsinghua
tool:
  form: open-source Python platform
  group: People and populations
  homepage: 'https://github.com/tsinghua-fib-lab/AgentSociety'
  licence: Apache-2.0, except one commercial folder
  cost: 'free software; needs an LLM API key'
open:
  source: partly
  data: unknown
  api: unknown
  participation: open
  licence: Apache-2.0
  note: The packages/agentsociety/commercial folder is excluded from the Apache licence.
domains:
  - people
  - places
relations:
  - predicate: alternative_to
    target: engines/oasis-social-simulation
  - predicate: alternative_to
    target: engines/concordia
provenance:
  origin: agent
  sources:
    - title: 'tsinghua-fib-lab/AgentSociety (README)'
      url: 'https://github.com/tsinghua-fib-lab/AgentSociety'
    - title: 'FIB LAB, Tsinghua University (GitHub organisation)'
      url: 'https://github.com/tsinghua-fib-lab'
    - title: 'AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding of Human Behaviors and Society (arXiv abstract)'
      url: 'https://arxiv.org/abs/2502.08691'
    - title: 'AgentSociety 2: An Integrated Research Environment for Executable Social Science (arXiv abstract)'
      url: 'https://arxiv.org/abs/2607.11895'
    - title: 'Release agentsociety2-v2.9.3 (GitHub)'
      url: 'https://github.com/tsinghua-fib-lab/AgentSociety/releases/tag/agentsociety2-v2.9.3'
    - title: 'Commits on main (tsinghua-fib-lab/AgentSociety)'
      url: 'https://github.com/tsinghua-fib-lab/AgentSociety/commits/main'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
AgentSociety simulates a society of people, each played by a large language model (LLM), inside an environment with rules of its own.[^1,4] It comes from the FIB Lab at Tsinghua University in Beijing, and both papers are led by Jinghua Piao, with Yong Li as last author.[^2,3,4]

The first version, described in February 2025, is a city simulator.[^1,3] It has modules for getting around a city, for an economy and for social ties, and runs at scale on Ray, a framework for spreading computation across many machines.[^1] The paper generated social lives for over 10,000 agents and about 5 million interactions.[^3] It used them for five experiments: polarization, the spread of inflammatory messages, a universal basic income, the shock of a hurricane, and urban sustainability.[^3] It ran surveys, interviews and interventions inside the simulation.[^3] The authors report that the outcomes lined up with real-world experimental results.[^3]

Version 2, described in mid-2026 and now the recommended package, widens the scope.[^1,4] The same software runs two kinds of agent: simulated participants who respond inside a configurable social setting, and AI "social scientists" that search the literature, propose hypotheses, design the experiment, run it, interpret it and draft the paper, with a human researcher directing.[^4] The paper presents seven illustrative studies, from laboratory-style experiments through social media dynamics to urban scenarios, and says they reproduced the main qualitative patterns of earlier studies and showed informative deviations.[^4] Agents can reason in several styles, and runs can be replayed.[^1]

Both versions install with pip and need Python 3.11 or later and an API key for OpenAI, Anthropic or any provider supported by the litellm library.[^1] Version 1 stays available as a legacy package.[^1] A web front end and a VS Code extension are in the repository.[^1] Version 2 had release 2.9.3 in September 2026, and commits continued into October.[^5,6] The code is Apache-2.0 except for a folder marked commercial in the version 1 package.[^1] The agreement with past findings is the authors' own report; the abstracts describe no independent evaluation.[^3,4]
