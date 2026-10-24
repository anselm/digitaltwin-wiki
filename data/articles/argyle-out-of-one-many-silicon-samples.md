---
about:
  label: 'Out of One, Many: Using Language Models to Simulate Human Samples'
  description: >-
    Political Analysis paper, 2023, from Brigham Young University: GPT-3,
    given the backgrounds of real US election survey respondents, reproduced
    the overall pattern of their vote choice and attitudes.
  tags:
    - silicon samples
    - synthetic respondents
    - language models
    - public opinion
    - surveys
    - elections
article:
  url: 'https://doi.org/10.1017/pan.2023.2'
  published: '2023-02-21'
  publisher: Political Analysis (Cambridge University Press)
  authors:
    - Lisa P. Argyle
    - Ethan C. Busby
    - Nancy Fulda
    - Joshua R. Gubler
    - Christopher Rytting
    - David Wingate
domains:
  - people
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: unknown
  note: The journal version is behind a paywall; the preprint is free on arXiv under CC BY-SA 4.0, and replication data are on Harvard Dataverse under CC0.
provenance:
  origin: agent
  sources:
    - title: 'Out of One, Many: Using Language Models to Simulate Human Samples (Cambridge Core)'
      url: 'https://www.cambridge.org/core/journals/political-analysis/article/out-of-one-many-using-language-models-to-simulate-human-samples/035D7C8A55B237942FB6DBAD7CAA4E49'
    - title: 'Out of One, Many: Using Language Models to Simulate Human Samples (arXiv 2209.06899, full text)'
      url: 'https://arxiv.org/abs/2209.06899'
    - title: 'Crossref record for 10.1017/pan.2023.2'
      url: 'https://api.crossref.org/works/10.1017/pan.2023.2'
    - title: 'Replication data for Out of One, Many (Harvard Dataverse, CC0)'
      url: 'https://doi.org/10.7910/DVN/JPV20K'
    - title: 'Synthetic Replacements for Human Survey Data? The Perils of Large Language Models (Cambridge Core, full text)'
      url: 'https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE'
    - title: 'Vox Populi, Vox AI? Using Language Models to Estimate German Public Opinion (arXiv 2407.08563, full text)'
      url: 'https://arxiv.org/abs/2407.08563'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed (numbers from the September 2022 arXiv version; the journal full text was paywalled)'
  status: draft
---
This paper asked whether a language model could be polled in place of people. Six researchers at Brigham Young University, from political science and computer science, asked whether GPT-3 could stand in for particular groups of Americans.[^1] For each real person in a survey they wrote a short first-person backstory from that person's answers (age, party, ideology, religion and so on), handed it to the model and recorded what the model said next.[^2] They called the result a "silicon sample".[^2] The paper appeared in Political Analysis (volume 31, issue 3) and was first posted on arXiv in September 2022.[^1,2,3]

The tests used the 2012, 2016 and 2020 waves of the American National Election Studies and a survey in which people listed four words to describe Democrats and Republicans.[^2] Human judges guessed that 61.7% of the real word lists came from people and 61.2% of the GPT-3 lists did, a difference too small to tell apart.[^2] For presidential vote, GPT-3 gave Romney a 0.391 share in 2012 against 0.404 among the survey respondents; Trump 0.432 against 0.477 in 2016, and 0.472 against 0.412 in 2020.[^2] The tetrachoric correlation between the model's vote and each person's reported vote (a measure of agreement for yes-or-no answers) was 0.90, 0.92 and 0.94 across the three years.[^2] GPT-3's training text ended in 2019, so the 2020 result is a test on an election it had not seen.[^2] In a third study, on the 2016 survey only, the model also reproduced which survey answers go together and which do not.[^2]

The agreement was not even across groups. In the authors' table, the correlation for independents was 0.31 in 2012 and 0.02 in 2020, and weak partisans, moderates and people with little interest in politics were matched less well than strong partisans.[^2] The authors say they do not expect the model to match any one person, only the distribution over many; they compare groups, not individuals.[^2] The main results come from one model, GPT-3 Davinci; an appendix compares a few other models and sampling settings.[^2]

The authors call the property "algorithmic fidelity" and argue it has to be shown for each domain before a model is used this way.[^2] They also warn that the same fidelity could be used to target groups with misinformation.[^2] [Synthetic Replacements for Human Survey Data?](/articles/bisbee-synthetic-replacements-survey-data/) tested it on feelings toward social groups in the same US survey, and [Vox Populi, Vox AI?](/articles/von-der-heyde-vox-populi-vox-ai/) on vote choice in Germany. Both found weaker results.[^5,6]
