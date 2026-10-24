---
about:
  label: 'Synthetic Replacements for Human Survey Data? The Perils of Large Language Models'
  description: >-
    Political Analysis paper, 2024: ChatGPT personas matched US survey
    respondents' average feelings toward 11 groups but gave too little
    spread, wrong regression results and shifting answers.
  tags:
    - synthetic respondents
    - surveys
    - public opinion
    - ChatGPT
    - reproducibility
    - elections
article:
  url: 'https://doi.org/10.1017/pan.2024.5'
  published: '2024-05-17'
  publisher: Political Analysis (Cambridge University Press)
  authors:
    - James Bisbee
    - Joshua D. Clinton
    - Cassy Dorff
    - Brenton Kenkel
    - Jennifer M. Larson
domains:
  - people
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: CC BY 4.0 (the paper)
  note: Replication data are on Harvard Dataverse (doi.org/10.7910/DVN/VPN481).
relations:
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: cites
    target: articles/santurkar-whose-opinions-do-language-models-reflect
provenance:
  origin: agent
  sources:
    - title: 'Synthetic Replacements for Human Survey Data? The Perils of Large Language Models (Cambridge Core, full text)'
      url: 'https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE'
    - title: 'Crossref record for 10.1017/pan.2024.5'
      url: 'https://api.crossref.org/works/10.1017/pan.2024.5'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
This paper tests whether a chatbot's answers can be used as survey data. Five political scientists at Vanderbilt University asked ChatGPT (the GPT-3.5 Turbo model) to take on the persona of each of 7,530 real respondents to the 2016 and 2020 American National Election Studies. As each person, it rated how warmly it felt toward groups such as Muslims, immigrants, liberals and conservatives on a 0 to 100 "feeling thermometer".[^1] With 30 synthetic answers per person, the data came to 3,614,400 responses.[^1] It was published in Political Analysis (volume 32, issue 4) in 2024 and is open access.[^1,2]

The averages were close. Every synthetic group's mean fell within one standard deviation of the survey's.[^1] Everything beyond the average went wrong. The answers were much less varied. For the gap between partisans' feelings toward their own side and the other, the standard deviation was 16.1 points for ChatGPT against 31.4 in the survey.[^1] That narrowness made effects look easier to detect than they are. A power calculation built on the synthetic data said 33 partisans would be enough, even at 99% power, to detect a change in polarisation since 2012, almost an order of magnitude fewer than the real data imply.[^1] When the authors ran the regressions a political scientist would run, linking feelings to age, education and other traits, 48% of the ChatGPT coefficients differed significantly from the survey's, and among those the sign was reversed 32% of the time.[^1]

The answers also moved. Repeating a simpler version of the same prompt in April, June and July 2023 did not reproduce the April data exactly; by July the coldest ratings had warmed and, to a lesser degree, the warmest had cooled, a pull toward the middle.[^1] OpenAI updated the model in June 2023, and at the time exact replication was impossible.[^1] Small changes in prompt wording also shifted the results.[^1]

The setting was, in the authors' words, an easy test for ChatGPT: a well-known American survey, from years before the end of the model's training data. Repeating the approach on other surveys and in other countries, in their supplementary material, gave worse results.[^1] They warn against using synthetic responses for power analyses and study design, and ask whether prompts should be preregistered and old models archived so that such work can be replicated.[^1]
