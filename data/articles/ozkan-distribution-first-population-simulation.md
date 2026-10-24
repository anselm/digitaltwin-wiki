---
about:
  label: 'Distribution-First Population Simulation: Collapse, Calibration, and Recall in Non-WEIRD LLM Persona Modeling'
  description: >-
    Preprint, July 2026, from Istanbul Technical University: language-model
    agents grounded on 2,414 real Turkish survey respondents piled onto one
    default answer instead of the population's spread.
  tags:
    - synthetic population
    - LLM agents
    - World Values Survey
    - Turkey
    - elections
    - calibration
article:
  url: 'https://arxiv.org/abs/2607.18310'
  published: '2026-07-17'
  publisher: arXiv (preprint)
  authors:
    - Gürkan Özkan
domains:
  - people
relations:
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: cites
    target: articles/santurkar-whose-opinions-do-language-models-reflect
provenance:
  origin: agent
  sources:
    - title: 'Distribution-First Population Simulation: Collapse, Calibration, and Recall in Non-WEIRD LLM Persona Modeling (arXiv 2607.18310, full text)'
      url: 'https://arxiv.org/abs/2607.18310'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Tools that simulate a town or a market with language models often run every resident as a separate agent, each one a call to the model with its own persona.[^1] This eight-page preprint by Gürkan Özkan of Istanbul Technical University tests what that does to the spread of opinion in the population.[^1] It uses real microdata from the Turkish wave of the World Values Survey, a long-running international survey of values, because most such tests use American, English-language data.[^1] It was posted to arXiv in July 2026 and has not been peer reviewed.[^1]

Each of 2,414 real respondents became a character, and the model answered for each one separately.[^1] Across four scenarios and five random seeds the agents crowded onto the model's default answer: the share giving the most common answer rose from 0.36 to 0.69, and the measured diversity of answers roughly halved.[^1] The paper calls this collapse and finds it worst where a question has one obviously "rational" answer.[^1] The result showed on Qwen and again on GLM.[^1]

The alternative tested is to ask the model once for the whole population's distribution of answers (a technique called verbalized sampling) and then hand answers out to the characters.[^1] That raised fidelity by 7 to 10 points, but overshot: the answers went from too narrow (about half the human spread) to too wide (about 1.3 times).[^1] In a booking task on one model, 80% of personas chose the cheapest option; income shifted that only a little, with the comfortable option rising from 0% of low-income personas to 32% of high-income ones.[^1]

An election backtest shows two different failures. Predicting a past national election in Turkey from people's values, the one-call distribution matched the official result closely, but the author attributes that to the model remembering a well-known result, not simulating it.[^1] The agent-per-person route gave the largest party 88.0% of the vote against a true 42.6%.[^1] The author's summary: "one remembers, the other collapses; neither simulates."[^1] The paper also finds that claims about subgroups and individuals were contaminated by the model's recall.[^1] It is a single-author preprint on one country, and its figures have not been independently checked.
