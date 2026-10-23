---
about:
  label: EDSL (Expected Parrot)
  description: >-
    Open-source Python package from Expected Parrot for running surveys and
    experiments on language models and simulated respondents with set traits,
    with tools to send the same survey to real people for comparison.
  tags:
    - synthetic respondents
    - survey
    - LLM agents
    - market research
    - data labelling
    - Expected Parrot
tool:
  form: open-source Python package with a hosted service
  group: People and populations
  homepage: 'https://docs.expectedparrot.com/en/latest/'
  licence: MIT
  cost: 'free with your own model keys; or buy credits for the hosted service (1 USD buys 100 credits; free credits on signup, more on request for research)'
open:
  source: open
  data: unknown
  api: yes
  participation: open
  licence: MIT
  note: Results run on the Expected Parrot server are cached and can be retrieved by anyone with the code at no cost.
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/tinytroupe
  - predicate: alternative_to
    target: engines/generative-agents
provenance:
  origin: agent
  sources:
    - title: 'Expected Parrot: Tools for AI-Powered Research (EDSL Documentation)'
      url: 'https://docs.expectedparrot.com/en/latest/'
    - title: 'expectedparrot/edsl (README)'
      url: 'https://github.com/expectedparrot/edsl'
    - title: 'Credits (EDSL Documentation)'
      url: 'https://docs.expectedparrot.com/en/latest/credits.html'
    - title: 'EDSL Documentation index (llms.txt)'
      url: 'https://docs.expectedparrot.com/llms.txt'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
EDSL, the Expected Parrot Domain-Specific Language, is a Python package for asking questions of language models at scale, with or without a persona attached. It is made by the company Expected Parrot, which also runs a hosted service for it. Its documentation says it is for researchers who want to simulate hundreds of demographically varied respondents, test different wordings of a question, compare answers across models, and label large text datasets.

You write a survey in Python from typed questions: multiple choice, linear scales, free text, lists and others, with skip logic and the ability to pipe one answer into the next question. You define agents by their traits, such as a persona, age or occupation, and send the survey to many agents and many models at once. Results come back as a table with built-in tools for analysis. Questions can be filled in from data files, so the same machinery serves for labelling and cleaning data. The documentation includes a notebook on AI polling and one that rebuilds the CES 2022 pre-election questionnaire, a US election survey, inside EDSL.

It installs with pip and runs either on your own computer with your own keys to model providers, in which case it costs nothing beyond those providers' charges (local models through Ollama also work), or on Expected Parrot's server with its key and prepaid credits. A free account includes some credits, and the company offers more to research projects on request. Results run on the server are cached. Others can retrieve the same outputs without keys or cost and so reproduce a study. A feature called Humanize turns the same survey into a web form for real respondents, including through the Prolific panel.

The README states the limit: agent answers come from what a model learned in training and reflect statistical patterns, not the actual opinions of any demographic group. It recommends simulated answers for prototyping and pre-testing a survey, and real human data for measuring actual attitudes or behaviour. The package is MIT-licensed and was updated in October 2026.
