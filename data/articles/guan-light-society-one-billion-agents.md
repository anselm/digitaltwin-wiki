---
about:
  label: Modeling Earth-Scale Human-Like Societies with One Billion Agents
  description: >-
    Preprint by Guan and others on Light Society, a framework that runs a
    billion simulated people by having a small trained model stand in for the
    language model.
  aliases:
    - Light Society
  tags:
    - twins of people
    - agent-based model
    - language model agents
    - surrogate model
    - opinion dynamics
    - trust game
    - World Values Survey
    - preprint
article:
  tier: 2
  url: 'https://arxiv.org/abs/2506.12078'
  published: '2025-06-07'
  publisher: arXiv (preprint)
  authors:
    - Haoxiang Guan
    - Jiyan He
    - Liyang Fan
    - Zhenzhen Ren
    - Shaobin He
    - Xin Yu
    - Yuan Chen
    - Xueyin Xu
    - Shuxin Zheng
    - Yan Gao
    - Enhong Chen
    - Tie-Yan Liu
    - Zhen Liu
domains:
  - people
relations:
  - predicate: answers
    target: questions/how-would-these-people-respond
  - predicate: about
    target: articles/synthetic-people
  - predicate: cites
    target: engines/people-and-populations/agentsociety
  - predicate: cites
    target: engines/people-and-populations/oasis-social-simulation
  - predicate: cites
    target: engines/people-and-populations/generative-agents
provenance:
  origin: agent
  sources:
    - title: 'Modeling Earth-Scale Human-Like Societies with One Billion Agents. Guan and others, arXiv:2506.12078, version 2 (PDF)'
      url: 'https://arxiv.org/pdf/2506.12078v2'
    - title: 'arXiv record for 2506.12078: versions, dates, authors and licence'
      url: 'https://arxiv.org/abs/2506.12078v2'
  created: '2026-11-25'
  reviewed: '2026-11-25'
  reviewed_by: 'Claude, from version 2 of the preprint: the main text, the discussion and methods sections 4.2 to 4.6. Sections 2.4.4 and 4.7 on network shape, the related-work section, the figures and the appendices were not read. Anselm sent the first page.'
  status: draft
---
Light Society is a framework for simulating very large populations of people, each one played by a language model given a written profile.[^1] The paper reports runs of up to a billion agents. Earlier systems of this kind, by the authors' count, reached ten million at most and needed dozens of graphics processors and weeks of computing to simulate a million.[^1] The paper is a preprint on arXiv, first posted on 7 June 2025 and revised on 28 June 2026. This entry describes the revised version.[^2]

It is useful to this wiki for two reasons. It shows the engineering that makes such a scale possible, and that engineering changes what the word "agent" means in the largest run.

## How it is built

Every interaction is an event placed on a queue. A small set of operations, each performed by a language model, lets an agent perceive, choose an action and update its state, and lets the environment change between events.[^1]

The profiles come from Wave 7 of the World Values Survey, collected from 2017 to 2022. After records with gaps in core fields were removed, 96,125 remained. Each was turned into a description in the second person ("You are...") giving country, age, education, work, income, religion and social class.[^1]

Three things cut the cost:[^1]

- **Caching.** An answer already given to the same or a nearly identical prompt is reused.
- **Surrogates.** A small model is trained on a large sample of the language model's decisions and then answers in its place. The authors call this distillation, and the language model the teacher.
- **Routing.** Each request goes to a full language model, a surrogate or a table of answers worked out in advance, under a rule the user sets.

The network of who knows whom is stored in a compressed form so that a billion nodes can be read and updated in batches.[^1]

## The billion-agent run

The largest experiment is about how opinions spread. The authors generate a network of a billion nodes in which a few nodes have very many connections. The best-connected fifth are influencers and the rest are the people they influence. Everyone is given a statement, "AI automation will lead to mass unemployment" being the main one, and starts as agreeing, disagreeing or neutral. In each round one per cent of influencers act on their neighbours.[^1]

The paper states that running a language model for each of these interactions "is infeasible".[^1] What runs is this. Each of the billion agents is given one of 10,000 profiles. For about 400,000 sampled pairings per topic, Gemini 2.0 Flash decided whether the listener changed stance. A small neural network was trained on those decisions. Its answer for every combination of two profiles and two stances, 900 million combinations, was then written into a table, and during the simulation "each interaction reduces to a single array lookup".[^1]

Two things follow from that description. The billion agents are 10,000 distinct people, each repeated about 100,000 times across the network. And no language model runs during the simulation. The run measures how a fixed table of pairwise outcomes plays out across a very large network.

Results the paper reports from it:[^1]

- Seeding the influencers with agreement moves the population toward agreement. Seeding them with disagreement moves it toward neutral, not toward disagreement. The authors read this as the population carrying a prior in favour of the statement.
- The same seeding gives different outcomes on other statements. The population moves against "The Earth is flat" whatever the influencers start with.
- Opinion change passes through neutral. Direct moves between agree and disagree are rare.
- Five runs of the billion-agent simulation with different random seeds differ by less than a hundredth of a per cent in the share holding each opinion.

## Trust games

The second study has pairs of agents play the Trust Game, in which one player sends part of ten dollars to a stranger, the amount is tripled, and the stranger decides how much to return. Here language models play both roles.[^1] Agents described as upper class or highly educated sent more. Two language models, Gemini 2.0 Flash and GPT-4.1 nano, gave different absolute amounts and the same ordering of groups.[^1] The gap between younger and older senders became clearer as the number of agents grew, which the authors present as a reason to simulate at scale: an effect lost in the noise of a small population shows in a large one.[^1]

## How it was checked

The checks in the sections read are of two kinds.

**Against the language model.** The surrogate is compared with its teacher. In a network of 10,000 agents, replacing none, a quarter, half, three quarters or all of the language model's decisions with the surrogate's gave trajectories the authors call qualitatively consistent.[^1] They also report a caution that carries to any model trained to stand in for another: two versions of a surrogate with nearly the same accuracy on single decisions (0.843 and 0.835) differed threefold in how far the overall rate of opinion change was from the teacher's (7.14 and 2.48 percentage points).[^1] Accuracy on single cases did not predict whether the population as a whole behaved like the original.

**Against people.** In the Ultimatum Game, where one player proposes a split of 100 and the other can refuse it, the agents' average offer was 41, inside the 40 to 50 per cent the paper cites from experiments with people.[^1] The sections read contain no comparison of the trust-game differences between social groups, or of the opinion results, with measurements of people.

## What the authors caution

- **The answer depends on the language model and the language.** Running the same interactions in Chinese and in French changed the rate of opinion change by up to 4.7 percentage points, in a direction that varied by topic. The authors say a result from one model in one language is "one realization in a family" and should not be taken as "a neutral oracle".[^1]
- **Bias is inherited** from the World Values Survey and from the language model, and may not show in totals.[^1]
- **It is not evidence about real societies.** "Simulated populations should not be treated as substitutes for human participants", and the outputs "are best read as hypotheses to be examined empirically".[^1]
- **Misuse.** A controllable simulator of how opinion spreads could help design influence campaigns as well as study them.[^1]

## What is open

The World Values Survey data are public.[^1] The paper refers to "the released framework" but this entry found no address for code in the text that was read. The arXiv record carries arXiv's standard distribution licence, which does not grant reuse of the figures.[^2]

On this wiki, [Synthetic people](/articles/synthetic-people/) goes through the evidence on how far a language model's answers match those of the people it is given as a profile, which is the question this paper leaves open. [AgentSociety](/engines/people-and-populations/agentsociety/) and [OASIS](/engines/people-and-populations/oasis-social-simulation/) are two of the earlier systems the paper sets itself against.
