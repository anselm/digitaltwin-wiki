---
about:
  label: 'Large language models that replace human participants can harmfully misportray and flatten identity groups'
  description: >-
    Nature Machine Intelligence paper, 2025: across four language models
    and 3,200 people in 16 identities, a model speaking as a group
    sounds like outsiders imitating it and gives too narrow a range.
  tags:
    - synthetic respondents
    - identity
    - minorities
    - language models
    - bias
    - research ethics
article:
  url: 'https://doi.org/10.1038/s42256-025-00986-z'
  published: '2025-02-17'
  publisher: Nature Machine Intelligence
  authors:
    - Angelina Wang
    - Jamie Morgenstern
    - John P. Dickerson
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
    - title: 'Large language models that replace human participants can harmfully misportray and flatten identity groups (arXiv 2402.01908v3, full text)'
      url: 'https://arxiv.org/abs/2402.01908'
    - title: 'Crossref record for 10.1038/s42256-025-00986-z'
      url: 'https://api.crossref.org/works/10.1038/s42256-025-00986-z'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed (the arXiv version accepted at the journal; the journal page itself was not opened)'
  status: draft
---
Most tests of simulated respondents ask whether the numbers come out right. This paper asks whether a model speaking as a group says what members of that group would say. Angelina Wang (Stanford University), Jamie Morgenstern (University of Washington) and John P. Dickerson (University of Maryland, and Arthur in New York) published it in Nature Machine Intelligence, volume 7, in February 2025.[^1,2]

They argue from how the models are trained that two problems should appear, then test them with 3,200 human participants across 16 demographic identities and four models: Llama-2-Chat 7B, Wizard Vicuna Uncensored 7B, GPT-3.5-Turbo and GPT-4.[^1] Nine questions, all free-response, covered experiences tied to an identity, opinions where identity is relevant, such as immigration, and subjective labelling tasks; each was answered by members of a group, by people imitating that group from outside, and by the models.[^1]

The first problem is misportrayal. Text on the internet about a group is often written by people outside it, and the models' answers were often closer to the outsiders' imitations than to what members wrote about themselves.[^1] Across all four models this held for non-binary people and people with impaired vision on both kinds of identity question.[^1] It also held for White people on the question about lived experience, and for Gen Z and women on the opinion questions.[^1] It did not show on the labelling tasks.[^1] The second is flattening: in nearly every case the answers given as one group were less varied than the answers of real people in that group.[^1] Turning up the randomness setting (temperature) did not fix it; in the authors' test, GPT-4 only matched human variety on one measure at a setting where its text had become gibberish, and fell short on the other three.[^1] A third concern is that a prompt naming a single identity treats that identity as fixed and defining.[^1]

Prompting with names associated with a group instead of naming the group outright brought the answers for Black men and Black women often closer, though not fully, to members' own.[^1] Neither fix wholly overcomes the problems, in the authors' words, though both improve on the default.[^1] They urge caution wherever a model would replace participants whose identity matters to the question.[^1] They connect the problem to a history of others speaking for marginalised groups.[^1]
