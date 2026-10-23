---
about:
  label: 'Simulated responses from large language models are weak proxies for human economic preferences across 74 countries'
  description: >-
    Nature Human Behaviour paper, October 2026, from Zhejiang University and
    the University of Pennsylvania: twelve model setups answered a global
    survey of risk, patience, trust and generosity for 67,201 real people in
    74 countries and explained about 1% of the variation between individuals.
  tags:
    - synthetic respondents
    - cross-national
    - economic preferences
    - surveys
    - language models
    - Global Preference Survey
article:
  url: 'https://doi.org/10.1038/s41562-026-02611-4'
  published: '2026-10-12'
  publisher: Nature Human Behaviour
  authors:
    - Fadong Chen
    - Qijun Wang
    - Lei Wang
    - Sudeep Bhatia
domains:
  - people
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: CC BY-NC-ND 4.0 (the paper)
  note: Data and code are on the Open Science Framework (osf.io/pt2n4); the Global Preference Survey itself is public.
relations:
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: cites
    target: articles/santurkar-whose-opinions-do-language-models-reflect
provenance:
  origin: agent
  sources:
    - title: 'Simulated responses from large language models are weak proxies for human economic preferences across 74 countries (Nature Human Behaviour, full text)'
      url: 'https://www.nature.com/articles/s41562-026-02611-4'
    - title: 'Crossref record for 10.1038/s41562-026-02611-4'
      url: 'https://api.crossref.org/works/10.1038/s41562-026-02611-4'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed (supplementary tables not read)'
  status: draft
---
Fadong Chen, Qijun Wang and Lei Wang of Zhejiang University and Sudeep Bhatia of the University of Pennsylvania ran a "virtual" version of the Global Preference Survey. That survey, part of the 2012 Gallup World Poll, measured willingness to take risks, patience, altruism, trust, and the urge to repay kindness and punish unkindness. For each of 67,201 real respondents in 74 countries, models from OpenAI, Google and DeepSeek were given the person's demographics and country and asked the same questions, in the local language and, as a check, in English. Twelve main configurations ranged from GPT-3.5-turbo to GPT-5.4, Gemini 2.5 Flash and DeepSeek-V3. It was published in October 2026.

At the level of individuals, alignment was real but weak. Most correlations were above zero (87.5% had confidence intervals above zero), yet the models' predictions explained 1.3% of the variation between people and 4.2% of the variation between countries. The models got the direction of differences by gender, age and cognitive ability right 77.8% of the time, and differences between cultures 48.1% of the time. In many of the models, alignment was weaker in economically less developed and less digitally connected countries, and the gender gaps were matched worse in countries with stronger gender stereotypes.

The authors also tried to reproduce published findings from the real survey. The best model reproduced 16 of 35 country-level results (45.7%), such as the link between patience and national income; across the models, 50 to 78% of 18 individual-level ones were reproduced. The simulated answers were more bunched together than human ones; raising the randomness setting from zero to one restored only part of the spread.

Because the survey dates from 2012, some of it may be in the models' training data, so the authors say their numbers could be an upper bound, though their paraphrasing and English-only checks found no sign of memorization. Their conclusion is that simulated responses can recover some patterns but are not yet reliable stand-ins for cross-national surveys used for policy. The paper is open access, with data and code on the Open Science Framework.
