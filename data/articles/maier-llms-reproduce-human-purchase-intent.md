---
about:
  label: LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings
  description: >-
    2025 preprint: language model personas answer a survey in words, and the
    words are scored against anchor sentences. Tested against 57 product
    surveys with 9,300 real answers.
  aliases:
    - semantic similarity rating
    - SSR
  depiction: articles/maier-llms-reproduce-human-purchase-intent.jpg
  depiction_credit: 'Figure 1 of Maier and others (2025), arXiv:2510.08338, CC BY 4.0. Cropped from the page.'
  tags:
    - twins of people
    - synthetic respondents
    - surveys
    - Likert scale
    - market research
    - embeddings
article:
  tier: 2
  url: 'https://arxiv.org/abs/2510.08338'
  published: '2025-10-09'
  publisher: arXiv (preprint)
  authors:
    - Benjamin F. Maier
    - Ulf Aslak
    - Luca Fiaschi
    - Nina Rismal
    - Kemble Fletcher
    - Christian C. Luhmann
    - Robbie Dow
    - Kli Pappas
    - Thomas V. Wiecki
domains:
  - people
open:
  source: open
  data: closed
  api: unknown
  participation: unknown
  licence: CC BY 4.0 (the paper); Apache-2.0 (the code)
  note: The method is published as a Python package. This entry found no statement in the paper that the survey data are released.
relations:
  - predicate: cites
    target: articles/bisbee-synthetic-replacements-survey-data
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: about
    target: articles/synthetic-people
provenance:
  origin: agent
  sources:
    - title: 'LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings. Maier and others, arXiv:2510.08338, version 3, 27 October 2025 (PDF)'
      url: 'https://arxiv.org/pdf/2510.08338v3'
    - title: 'arXiv record for 2510.08338: dates, authors and licence'
      url: 'https://arxiv.org/abs/2510.08338v3'
    - title: 'pymc-labs/semantic-similarity-rating. GitHub repository'
      url: 'https://github.com/pymc-labs/semantic-similarity-rating'
  created: '2026-11-21'
  reviewed: '2026-11-21'
  reviewed_by: 'Claude, from the sources listed. The main text, the limitations and appendices A.1, C.2 and D were read; the other appendices and most of the 35 figures were not. Anselm sent the first page.'
  status: draft
---
This preprint proposes a way to get survey answers out of a language model that are spread across the scale the way people's answers are.[^1] Seven of its nine authors are at PyMC Labs and two at Colgate-Palmolive.[^1] It was posted to arXiv on 9 October 2025; this entry read the third version, of 27 October 2025.[^2] It has not, as far as the arXiv record shows, been published in a journal.[^2]

## The problem it addresses

Earlier studies asked a model playing a person to answer with a number. The answers bunched together. In [Bisbee and others](/articles/bisbee-synthetic-replacements-survey-data/), which this paper cites, the synthetic answers had, on one measure, about half the spread of the real ones. This paper finds the same when it asks for a number from 1 to 5: the models "typically replied with response '3'" and almost never gave a 1 or a 5, while most real answers were 4 or 5.[^1]

## The method

The model is given a person's age, gender, location and other recorded traits, shown a product idea, and asked how likely it would be to buy it. It answers with a brief written reply. The paper compares three ways of getting a rating from 1 to 5:[^1]

- **Direct.** The model may only answer with a number.
- **Follow-up.** A second call to the same model reads the sentence and picks the number.
- **Semantic similarity rating (SSR).** The sentence is turned into an embedding, a list of numbers that places a text by its meaning. It is compared with five reference sentences, one for each point of the scale, such as "It's very likely I'd buy it." Each point gets a probability in proportion to how close the answer is to that point's sentence. One answer therefore becomes a distribution over the five points, not one number.

The reported results average over six sets of reference sentences.[^1] The models were GPT-4o and Gemini 2.0 Flash.[^1]

## The test

The record was 57 surveys of ideas for personal care products, run in the United States by "a leading corporation in that market", each answered by 150 to 400 people, 9,300 in all.[^1] The paper measures two things:[^1]

- **Shape.** How close each synthetic survey's distribution of answers is to the real one, as a Kolmogorov-Smirnov similarity from 0 to 1.
- **Ranking.** Whether the synthetic panel puts the 57 products in the same order as the real panel. The real surveys are noisy and their averages lie close together (mean 4.0, standard deviation 0.1), so two halves of the same real panel do not agree perfectly either. The paper reports the synthetic panel's correlation as a share of that split-half correlation and calls it correlation attainment.

| Method (GPT-4o) | Ranking, share of the ceiling | Shape, 0 to 1 |
| --- | --- | --- |
| Direct number | about 80% | 0.26 |
| Follow-up rating | 85% | 0.72 |
| SSR | 90% | 0.88 |

With Gemini the follow-up and SSR methods ranked about equally well (90%), and SSR again gave the closer shape (0.8 against 0.59).[^1] A conventional classifier trained on half of the real surveys reached 65% on ranking.[^1]

One result cuts against using shape alone as a test. When the personas were given no demographic traits, the shape matched best of all (0.91) and the ranking fell to 50% of the ceiling, against 92% with traits, each for the best set of reference sentences. The authors' reading is that a model without a detailed persona rates products more favourably in general and makes too little use of what the product idea says.[^1]

## What it does not show

The paper states these limits:[^1]

- The reference sentences "were manually optimized for the 57 surveys subject to this study", so how they would do on other surveys is unknown.
- The synthetic panels followed the real pattern by age and income and did not do so consistently for gender, region or ethnicity. The authors advise caution with any subgroup result.
- The method depends on the model having read a great deal of what people say about the subject. "For domains where such background knowledge is sparse or absent, SSR will not conjure valid consumer preferences."
- The comparison is with what people said they would buy, on a survey. Synthetic consumers "cannot fully capture the real-world contingencies of purchasing behavior".

The authors' conclusion is that the method is "not a wholesale replacement for human research".[^1]

Two further points are this wiki's reading. The surveys came from one company and one kind of product, and two of the authors work for a company that makes such products. And the test is of panels, not of individuals: nothing here says a persona answers as its particular person would.

## What is open

The method is a Python package under the Apache 2.0 licence.[^3] The paper is under CC BY 4.0.[^2] The product ideas are represented in the paper by a surrogate example, and this entry found no statement that the survey answers are released.[^1]

## Why it is on this wiki

This part is the wiki's reading, not the paper's. People who model a place often want to know how its residents would rate a proposal, and public consultation uses the same five-point questions. The paper shows a cheaper way to get a believable distribution out of a model, and it shows the conditions under which that worked: a subject people write about at length online, and 57 real surveys to tune and check against. A plan for one neighbourhood meets neither condition unless someone runs the real survey first. [Synthetic people](/articles/synthetic-people/) goes through the wider evidence.
