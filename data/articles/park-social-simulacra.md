---
about:
  label: 'Social Simulacra: populated prototypes for social computing systems'
  description: >-
    The 2022 Stanford paper that filled an imagined online community with
    thousands of language-model members, so a designer could see what it
    might turn into before anyone joined.
  tags:
    - twins of people
    - simulated people
    - LLM agents
    - prototyping
    - online communities
    - paper
article:
  tier: 2
  url: 'https://doi.org/10.1145/3526113.3545616'
  published: '2022-10-28'
  publisher: UIST 2022 (ACM Symposium on User Interface Software and Technology)
  authors:
    - Joon Sung Park
    - Lindsay Popowski
    - Carrie Cai
    - Meredith Ringel Morris
    - Percy Liang
    - Michael S. Bernstein
domains:
  - people
relations:
  - predicate: made_by
    target: people/joon-sung-park
  - predicate: made_by
    target: people/percy-liang
  - predicate: made_by
    target: people/michael-bernstein
  - predicate: answers
    target: questions/how-would-these-people-respond
provenance:
  origin: agent
  sources:
    - title: 'Social Simulacra: Creating Populated Prototypes for Social Computing Systems (arXiv:2208.04024, abstract and full text)'
      url: 'https://arxiv.org/abs/2208.04024'
    - title: 'The same paper in the UIST 2022 proceedings (Crossref record)'
      url: 'https://doi.org/10.1145/3526113.3545616'
  created: '2026-11-03'
  reviewed: '2026-11-03'
  reviewed_by: 'Claude, from the full text on arXiv'
  status: draft
---
Many of the problems of an online community, such as trolling or a slide off topic, only show up once it has a lot of members, and a designer testing a new one can usually recruit only a handful of people.[^1] This paper asks whether the members can be simulated instead. A designer describes the community's goal, its rules and a few example members, and the system, called a social simulacrum, writes thousands of distinct members and the posts and replies they would exchange, including the anti-social ones.[^1]

The authors built it as SimReddit, a tool for designing a new subreddit, on GPT-3.[^1] Their premise is that a large language model's training data already holds a wide range of good and bad behaviour from social media, so it can be prompted to produce both.[^1] The designer can then ask "what if?": change a rule, have a moderator or a member step in, and watch how the generated conversation shifts.[^1]

They tested it two ways. They took 50 subreddits created after GPT-3's release, regenerated each from its description alone, and showed people a real and a generated conversation from each. People picked the wrong one 41 percent of the time on average, close to chance.[^1] In a second study, 16 designers of social computing systems used SimReddit to design a subreddit they wanted to create, and refined their designs after seeing what the simulated members did.[^1]

The paper was presented at UIST in October 2022.[^2] It came a few months before the same group's [generative agents](/engines/generative-agents/) paper, which moved the simulated people from a message board into a small town with a daily life, and later work by [Joon Sung Park](/people/joon-sung-park/), [Percy Liang](/people/percy-liang/) and [Michael S. Bernstein](/people/michael-bernstein/) built agents of [1,000 real people](/articles/park-generative-agents-1000-people/) from interviews.[^1] Park and Bernstein went on to found [Simile](/engines/simile/), which sells simulations of how people would respond to a change.
