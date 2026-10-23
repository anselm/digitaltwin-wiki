---
about:
  label: Synthetic people
  description: >-
    Models of a population at the level of its people: residents built from
    the census, run through their days, and now given a voice by language
    models. What each layer is good for, and where the evidence says it fails.
  tags:
    - synthetic population
    - agent-based models
    - language-model agents
    - polling
    - simulation
article: {}
domains:
  - people
relations:
  - predicate: about
    target: terms/synthetic-population
  - predicate: about
    target: questions/how-would-these-people-respond
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: cites
    target: articles/bisbee-synthetic-replacements-survey-data
  - predicate: cites
    target: articles/park-generative-agents-1000-people
  - predicate: cites
    target: articles/llms-weak-proxies-economic-preferences-74-countries
provenance:
  origin: agent
  sources:
    - title: 'LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals (arXiv 2411.10109; first posted as Generative Agent Simulations of 1,000 People)'
      url: 'https://arxiv.org/abs/2411.10109'
    - title: 'Synthetic replacements for human survey data? The perils of large language models (Political Analysis, 2024)'
      url: 'https://api.crossref.org/works/10.1017/pan.2024.5'
    - title: 'Out of One, Many: Using Language Models to Simulate Human Samples (arXiv 2209.06899)'
      url: 'https://arxiv.org/abs/2209.06899'
    - title: 'Simulated responses from large language models are weak proxies for human economic preferences across 74 countries (Nature Human Behaviour, 2026)'
      url: 'https://www.nature.com/articles/s41562-026-02611-4'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the entries linked here; not yet read by Anselm'
  status: draft
---
Most models of a place treat people as numbers: so many households, so many trips, so many cases. A growing family of tools models them one by one instead. They promise a city you can poll, a company you can trial a policy on, an outbreak you can run before it happens. They come in three layers, which are often stacked, and the layers are at very different stages.

## Making the people

The base is a [synthetic population](/terms/synthetic-population/): invented households and residents whose counts match the census area by area. This is old, well understood and openly maintained. [PopulationSim](/engines/populationsim/) builds them for transport planners, [simPop](/engines/simpop/) and [synthpop](/engines/synthpop/) for statisticians, and some come ready-made: [Canada](/data-sources/synthetic-population-canada/), [Great Britain](/engines/synthetic-population-catalyst/), and French regions through [eqasim](/engines/eqasim/). Their weakness is age. Most rest on a census five to fifteen years old.

The newer strand is personas for language models. NVIDIA's [Nemotron-Personas](/data-sources/nemotron-personas/) are sets of invented individuals, each with a name, age, job and background, sampled so that the mix matches census statistics, now for twelve countries. They are built to fit the census, and nothing yet shows they behave like the people they stand for.

## Making them live

The second layer moves the population through its days. [ActivitySim](/engines/activitysim/) and [MATSim](/engines/matsim/) give every resident a plan of trips and activities and are used by planning agencies to test roads and transit. Epidemic models such as [Covasim](/engines/covasim-starsim/), [JUNE](/engines/june/) and [EpiSim](/engines/matsim-episim/) do the same for contacts and infection; several were built in a hurry for COVID and some have since gone quiet. New Zealand's [ALMA](/engines/alma/) holds more than five million simulated residents for public health questions, though its pages point to no public code or published results. [Mesa](/engines/mesa/) and [NetLogo](/engines/netlogo/) are the general kits for building your own. Where these models have been checked against what happened, such as hospital admissions in England or infections in Berlin, they reproduced the curves. Checked forecasts are rarer.

## Making them talk

The third layer gives each person a language model, so they can answer a survey, join a focus group or live in a simulated town. Open libraries for this are active: [Concordia](/engines/concordia/), [TinyTroupe](/engines/tinytroupe/), [OASIS](/engines/oasis-social-simulation/), [AgentSociety](/engines/agentsociety/) and [EDSL](/engines/edsl/), descended from the [Generative Agents](/engines/generative-agents/) town of 2023. Companies such as [Simile](/engines/simile/) and [Aaru](/engines/aaru/) sell simulated populations to businesses, with accuracy figures they measure themselves.

## What the evidence says

The studies agree more than the marketing suggests. Given a person's background, a language model reproduces the average answers of familiar American groups well: in [one early study](/articles/argyle-out-of-one-many-silicon-samples/) its vote shares correlated with real survey groups at 0.90 to 0.94. It does worse on everything else. In [one test](/articles/bisbee-synthetic-replacements-survey-data/), its answers on how partisans feel about each other had about half the spread of real ones, and nearly half the relationships estimated from them differed significantly from the real survey's. It flattens and misportrays minority groups ([Wang and colleagues](/articles/wang-llms-misportray-flatten-identity-groups/)), leans toward the views of liberal, educated and wealthy Americans ([Santurkar and colleagues](/articles/santurkar-whose-opinions-do-language-models-reflect/)), matched under half of German voters' choices ([von der Heyde and colleagues](/articles/von-der-heyde-vox-populi-vox-ai/)), and across 74 countries explained about 1% of the differences between individuals ([Chen and colleagues](/articles/llms-weak-proxies-economic-preferences-74-countries/)). Asked again months later, the same model did not give back the same data.

The strongest result comes from a different approach. Agents built from two-hour interviews with 1,052 real Americans predicted those same people's survey answers about 83 to 86% as well as the people repeated themselves two weeks later ([Park and colleagues](/articles/park-generative-agents-1000-people/)). That simulates people who were actually interviewed; it does not invent new ones. A 2026 preprint adds a warning about election backtests: a model that seems to forecast a past vote may simply remember it ([Özkan](/articles/ozkan-distribution-first-population-simulation/)).

## Using it

The first two layers are tools for planning, with decades of practice behind them. The third is useful for drafting a survey, rehearsing a meeting or finding questions worth asking real people, and not yet a replacement for asking them. A model that can be polled can also be used to target and persuade, and the people it imitates never agreed to it; [Protect people's privacy](/guides/protect-people-s-privacy/) applies with more force here. The use case [How would these people respond?](/questions/how-would-these-people-respond/) walks through the question as a planner would bring it.
