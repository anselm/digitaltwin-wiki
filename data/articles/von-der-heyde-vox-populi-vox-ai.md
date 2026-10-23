---
about:
  label: 'Vox Populi, Vox AI? Using Large Language Models to Estimate German Vote Choice'
  description: >-
    Social Science Computer Review paper, 2025, from LMU Munich and Mannheim:
    GPT-3.5, given the profiles of 1,905 respondents to Germany's 2017
    election study, matched their reported vote 46% of the time and leaned
    toward the Greens and the Left.
  tags:
    - elections
    - Germany
    - synthetic respondents
    - vote choice
    - language models
    - public opinion
article:
  url: 'https://doi.org/10.1177/08944393251337014'
  published: '2025-04-26'
  publisher: Social Science Computer Review (SAGE)
  authors:
    - Leah von der Heyde
    - Anna-Carolina Haensch
    - Alexander Wenz
domains:
  - people
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
  licence: CC BY 4.0 (the paper)
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
    - title: 'Vox Populi, Vox AI? Using Language Models to Estimate German Public Opinion (arXiv 2407.08563, full text)'
      url: 'https://arxiv.org/abs/2407.08563'
    - title: 'Crossref record for 10.1177/08944393251337014 (with abstract)'
      url: 'https://api.crossref.org/works/10.1177/08944393251337014'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed (numbers from the July 2024 arXiv version; the journal page refused the request)'
  status: draft
---
The early successes of polling a language model came from the United States. Models learn from internet text, and the paper cites an estimate that over half of web content is in English and under five percent in German. Leah von der Heyde and Anna-Carolina Haensch of LMU Munich and Alexander Wenz of the University of Mannheim repeated the exercise for Germany, a multi-party system in another language. The study appeared online in Social Science Computer Review in April 2025 and in print in volume 44 in June 2026; it is open access.

They wrote a persona for each of the 1,905 eligible voters in the 2017 German Longitudinal Election Study who reported how they voted. Each persona carried 13 factors known to predict German vote choice, such as age, East or West residence, religiosity, left-right position and party attachment. GPT-3.5 (text-davinci-003) was asked to complete each person's vote, five times over. The 2017 election took place before the model's training data ended, so text about it was likely in what the model learned from.

In aggregate the model over-predicted votes for the Greens, the Left and non-voting, and under-predicted the liberal FDP, the far-right AfD and small parties; for the two big parties, CDU/CSU and SPD, the shares were not significantly different. Only 46% of individual predictions matched the vote the person reported. Accuracy (F1 score, which balances hits and misses) was best for the CDU/CSU at about 0.6 and around 0.3 for the FDP and AfD. A plain statistical model fitted to the survey with the same information did better, with an overall F1 of 0.62 and above 0.5 for the FDP and AfD.

The model got "typical" voters right, such as strong partisans and people at the far ends of left and right, and missed what moves everyone else. It did not pick up, for example, that Green partisans are unlikely to vote AfD and the reverse, or that in the survey wanting to limit immigration made an AfD vote more likely. The authors conclude that findings from US studies cannot be assumed to hold elsewhere, and that language models represent some groups' opinions better than others.
