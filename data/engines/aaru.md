---
about:
  label: Aaru
  description: >-
    Company that says its simulated populations, grounded in demographic,
    behavioural and outcome data, let clients test a product, price, message or
    strategy before committing; it publishes its own accuracy benchmark against
    published surveys.
  tags:
    - simulated people
    - synthetic respondents
    - market research
    - polling
    - commercial
tool:
  form: commercial hosted service
  group: People and populations
  homepage: 'https://aaru.com/'
  cost: not published
open:
  source: closed
  data: closed
  api: unknown
  participation: unknown
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/simile
provenance:
  origin: agent
  sources:
    - title: 'Aaru - Behavior simulation at the scale of the real world.'
      url: 'https://aaru.com/'
    - title: 'About | Aaru'
      url: 'https://aaru.com/about'
    - title: 'Population simulation at the replication floor | Aaru'
      url: 'https://aaru.com/publications/population-simulation-at-the-replication-floor-summary'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Aaru builds simulated populations for companies to test decisions on. Its site says it "grounds large-scale populations of AI agents in real demographic, behavioral, and outcomes data", so a client can try a product, a price, a message or a strategy on the populations that matter to it before committing. It argues that people describe their own behaviour unreliably, and that its simulations often predict behaviour more accurately than asking people directly. The company has offices in New York, Singapore and San Francisco. Its about page names John Kessler as co-founder and chief technology officer, previously a simulation researcher at the MIT City Science Lab, and Redpoint as an investor.

Its pages quote people at EY, Accenture Song and Interpublic Group, and show an EY Global Wealth Study case and Breakwater Conviction Advantage, a quarterly tracker of 71 judgments across 40,000 simulated investors. Use cases listed are product innovation, marketing and brand, audience segmentation, scenario planning and strategic communications.

In September 2026 Aaru published an accuracy benchmark of its own. It gave the system each question's wording, its answer options and a description of the audience, and compared the predicted split of answers with the published results of 2,993 questions from 186 studies fielded in 2026, across nine industries. The measure is total variation distance: how many answers in 100 would have to move for the two distributions to match. Aaru's mean was 7.62 points, or 5.98 after its adjustment for sampling noise. For comparison, Aaru calculates from published studies that the same survey fielded twice with real people, two weeks apart, differed by 2.3 to 12.0 points; it calls such disagreement the "replication floor". In a second test it ranked brands within a category against purchase records from a credit card panel: 92.4 percent of brand pairs came out in the same order as the purchases, against 77.8 percent for YouGov's survey of which brands people would consider. The page says the core model that predicts each agent's behaviour is not a language model.

The page states its own limits. Some confidential data sources were removed for the test, so it measures a reduced version of the system. Only questions that already had published answers were tested, and the brand comparison covers only the brands sampled. Aaru ran and reported the evaluation itself, with no peer review or independent check mentioned. None of these pages gives a price; access is by contact or account login.
