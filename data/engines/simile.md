---
about:
  label: Simile
  description: >-
    Company founded by the Stanford researchers behind generative agents that
    sells simulations of how customers, employees or populations would respond
    to a change, from models it says are trained on data about real people.
  tags:
    - simulated people
    - synthetic respondents
    - market research
    - LLM agents
    - commercial
tool:
  form: commercial hosted service
  group: People and populations
  homepage: 'https://www.simile.com/'
  cost: not published
open:
  source: closed
  data: closed
  api: unknown
  participation: unknown
domains:
  - people
relations:
  - predicate: built_on
    target: engines/generative-agents
  - predicate: alternative_to
    target: engines/aaru
provenance:
  origin: agent
  sources:
    - title: 'Simulating human behavior | Simile'
      url: 'https://www.simile.com/'
    - title: 'LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals (arXiv abstract)'
      url: 'https://arxiv.org/abs/2411.10109'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Simile sells simulations of people. Its site says its simulations show "how and why customers, employees, or populations respond to change", such as a new product concept, a price or a message. The founders are Joon Sung Park (chief executive), who led the Stanford research on [generative agents](/engines/generative-agents/), Michael Bernstein (chief data officer) and Percy Liang (chief scientist), all from Stanford. The site announces "our Series B: $200M funding at a $2B valuation".

By the company's account, each simulated population starts from real people. Simile's algorithms design large studies daily, and the company combines the responses with its own datasets of human behaviour to train its models. It says it validates against real people weekly, with over 7,000 evaluations across subpopulations and real enterprise use cases, and that these feed a confidence model that tags every result with a predicted accuracy level. It says it re-collects data when it detects that the world has drifted from the model. Customers can bring their own data, such as loyalty data, balance histories or telemetry.

The site quotes people at CVS Health, Wealthfront, Banco Itaú, Suntory Beverages & Food, Gallup and Garnett Station Partners. It cites two research results from the founders' academic work. The first is the 2024 study of agents built from interviews with about 1,000 people, which it summarises as reproducing answers at 85 percent of the people's own consistency on a retest. The current version of that paper on arXiv gives 83 percent for agents built from interviews alone and 86 percent for interviews and surveys combined. The second is a 2025 paper on fine-tuning models with 2.9 million responses from 210 experiments, which it says improved alignment on unseen studies by 26 percent over the base model.

No price is published; the site's call to action is "Run a simulation". The weekly validation figures are the company's own; the site cites no independent evaluation of the commercial product.
