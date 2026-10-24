---
about:
  label: 'Whose Opinions Do Language Models Reflect?'
  description: >-
    ICML 2023 paper that compared nine language models with 1,498 Pew survey questions answered by 60 US demographic groups and found the models' opinions far from the public's.
  tags:
    - public opinion
    - language models
    - bias
    - surveys
    - demographic groups
    - benchmark
article:
  url: 'https://proceedings.mlr.press/v202/santurkar23a.html'
  published: '2023'
  publisher: Proceedings of the 40th International Conference on Machine Learning (PMLR 202)
  authors:
    - Shibani Santurkar
    - Esin Durmus
    - Faisal Ladhak
    - Cinoo Lee
    - Percy Liang
    - Tatsunori Hashimoto
domains:
  - people
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: unknown
  note: Code is public at github.com/tatsu-lab/opinions_qa with no licence stated; the OpinionQA dataset is linked from there on CodaLab.
provenance:
  origin: agent
  sources:
    - title: 'Whose Opinions Do Language Models Reflect? (PMLR)'
      url: 'https://proceedings.mlr.press/v202/santurkar23a.html'
    - title: 'Whose Opinions Do Language Models Reflect? (arXiv 2303.17548, full text)'
      url: 'https://arxiv.org/abs/2303.17548'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed (figures from the March 2023 arXiv version)'
  status: draft
---
Before asking whether a language model can play a voter, it helps to know whose views it voices when nobody tells it whom to play. This paper measured that. Its authors are at Stanford University, with Faisal Ladhak at Columbia University,[^2] and it was published at the International Conference on Machine Learning in July 2023.[^1]

They built a test set, OpinionQA, from 15 waves of the Pew Research Center's American Trends Panel: 1,498 multiple-choice questions on topics from abortion to automation, each with the answers of thousands of real respondents.[^2] From those answers they worked out how each of 60 demographic groups split on each question, and compared that split with the probabilities nine language models from OpenAI and AI21 Labs gave to the same options.[^2]

Every one of the 60 human groups was closer to the overall US public than any of the models was.[^2] On most topics, the models agreed with the public about as much as Democrats and Republicans agree on climate change.[^1,2] Tuning on human feedback, the step meant to make a chatbot more human-aligned, seemed to widen the gap, and OpenAI's tuned models shifted toward liberal, educated and wealthy people.[^2] One of them, OpenAI's text-davinci-003, usually put more than 99% of its probability on a single answer, for example near-total approval of Joe Biden; it gave the most common view of certain groups, mainly liberals, not the range of views inside them.[^2] People aged 65 and over, widowed people and frequent churchgoers were poorly represented by all the models.[^1,2]

Telling a model which of 22 groups to answer as, such as Republicans, Asian Americans or Jewish people, made most models somewhat closer to that group.[^2] It did not close the gaps between groups: groups that were matched badly before were still matched badly after.[^2]

The models tested are those available in early 2023. The method and the dataset can be reused to check a newer model, since the code and data are public.[^2]
