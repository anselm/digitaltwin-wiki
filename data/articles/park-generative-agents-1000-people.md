---
about:
  label: 'Generative Agent Simulations of 1,000 People'
  description: >-
    Stanford-led study, first posted 2024 and revised 2026: language-model
    agents built from two-hour interviews with 1,052 Americans predicted those
    same people's survey answers 83% as well as the people repeated their own
    answers two weeks later, against 74% for agents given only demographics.
  tags:
    - generative agents
    - interviews
    - synthetic respondents
    - General Social Survey
    - simulation of individuals
    - language models
article:
  url: 'https://arxiv.org/abs/2411.10109'
  published: '2024-11-15'
  publisher: arXiv (preprint; revised 2026-06-28)
  authors:
    - Joon Sung Park
    - Carolyn Q. Zou
    - Jonne Kamphorst
    - Niles Egan
    - Aaron Shaw
    - Benjamin Mako Hill
    - Carrie Cai
    - Meredith Ringel Morris
    - Percy Liang
    - Robb Willer
    - Michael S. Bernstein
domains:
  - people
open:
  source: open
  data: restricted
  api: unknown
  participation: unknown
  licence: MIT (the code repository)
  note: Interview transcripts are held in a restricted-access "agent bank"; aggregated survey responses are open. The GitHub repository was last pushed in November 2024.
relations:
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: cites
    target: articles/santurkar-whose-opinions-do-language-models-reflect
  - predicate: cites
    target: articles/bisbee-synthetic-replacements-survey-data
provenance:
  origin: agent
  sources:
    - title: 'LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals (arXiv 2411.10109v3, full text)'
      url: 'https://arxiv.org/abs/2411.10109'
    - title: 'Generative Agent Simulations of 1,000 People (arXiv 2411.10109v1, abstract)'
      url: 'https://arxiv.org/abs/2411.10109v1'
    - title: 'joonspk-research/generative_agent (GitHub API record)'
      url: 'https://github.com/joonspk-research/generative_agent'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed (numbers from the June 2026 revision unless marked as the 2024 version)'
  status: draft
---
Most simulated respondents are built from a few demographic facts: age, sex, party, state. This study, led by Joon Sung Park and Michael S. Bernstein at Stanford University with colleagues at Northwestern, the University of Washington, Google DeepMind and Sciences Po, built each agent from much more: a two-hour interview with the real person it stands for. A survey firm recruited 1,052 Americans; an AI interviewer, speaking aloud, took each through the American Voices Project interview schedule, and each also answered surveys and took part in experiments. GPT-4o then answered new questions in the voice of each person, given their transcript. The paper was posted in November 2024 as "Generative Agent Simulations of 1,000 People" and revised in June 2026 under a new title, "LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals".

The yardstick is the person. Each participant retook the same surveys two weeks later and matched their own earlier answers 79.5% of the time on the General Social Survey, a long-running US survey of attitudes. Interview agents matched 65.7%, which is 83% of what the person managed. Agents built from survey answers reached 82%, agents with both 86%, and agents given demographics alone 74%. (The 2024 version reported 85% for interview agents.) For the Big Five personality test the interview agents reached 80% of the people's own consistency. In five classic social-science experiments, the agents' effects pointed the same way as the participants' and were highly correlated with them (r from 0.91 to 0.99), but larger. In economic games played for real money, no kind of agent did significantly better than the demographics-only agents.

Agents built from interviews also narrowed, without closing, the accuracy gaps between racial and ideological groups seen with demographic agents. The study does not show whether a whole set of such agents reproduces how attitudes go together across a population, something earlier work found language models overstate. It tested only OpenAI models, not open ones such as Llama or Qwen, and only English speakers. Five experiments are too few to judge predicted effect sizes.

The point of the paper is that depth of information about a real person matters more than clever persona prompts. The cost is that every person simulated must first be interviewed or surveyed, so it does not create people who were never asked. The interview data are hard to anonymise and sit in a restricted "agent bank" for researchers; the code for building agents and the AI interviewer is on GitHub under an MIT licence.
