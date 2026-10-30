---
about:
  label: Planetary geospatial foundation models for public health
  description: >-
    Five tests of Google's population dynamics model on health questions, from
    measles vaccination on the Canadian border to cholera in the Congo: where a
    summary of each place helps and where not.
  tags:
    - public health
    - epidemiology
    - embeddings
    - foundation model
    - forecasting
    - nowcasting
    - paper
article:
  url: 'https://arxiv.org/abs/2610.05699'
  published: '2026-10-17'
  publisher: arXiv (preprint, cs.LG)
  authors:
    - A. Muslim
    - A. Slobodkin
    - K. Wheeler-Martin
    - E. Zhou
    - J. Brittain
    - M. Frasch
    - and others
domains:
  - people
relations:
  - predicate: cites
    target: engines/population-dynamics-foundations-pdfm
provenance:
  origin: agent
  sources:
    - title: 'Planetary Geospatial Foundation Models: A New Paradigm for Global Public Health (arXiv:2610.05699v2, HTML full text)'
      url: 'https://arxiv.org/html/2610.05699v2'
  created: '2026-10-29'
  reviewed: '2026-10-29'
  reviewed_by: 'Claude, from the full text of version 2 on arXiv; Anselm asked for it to be read'
  status: draft
---

Health data run late and stop at borders. Deaths from heart disease in a US county are published one to two years after the fact, censuses are refreshed every few years, and a country's vaccination records end at its border.[^1] This paper asks whether a ready-made numerical summary of each place can fill some of those gaps. The summary comes from Google's [Population Dynamics Foundation Model](/engines/population-dynamics-foundations-pdfm/) (PDFM). For every county or postal area it compresses aggregated web searches, the density and busyness of 1,192 kinds of places such as pharmacies and clinics, weather and air quality into a list of 330 numbers, an embedding, that health researchers can add to the models they already use.[^1] The paper is a preprint on arXiv. Version 2 is dated 17 October 2026. Twenty-two of the thirty-eight authors are at Google, with partners at NYU, Mount Sinai, Boston Children's Hospital, Oxford, the University of Washington, two Mexican universities and the WHO's Africa office.[^1]

There are five case studies, which the paper presents as independent evaluations by its health research partners:[^1]
- **Measles vaccination on the US-Canada border.** Adding the embeddings of Canadian postal areas within 150 km raised the share of variation explained in the vaccination rates of the 146 US border counties from 0.159 to 0.216. That is a relative gain of about 36%, though still a small share overall. In 24 counties, home to about 2.5 million people, the predicted rate moved by 5 points or more. The Canadian areas that mattered most were in southern Ontario, southern Quebec and southwestern British Columbia.
- **Heart disease deaths in US counties.** Embeddings from one month of data did about as well as ten census measures that pool five years of survey data and come out up to a year late. The difference was not statistically significant either way. For filling in counties with no data at a single point in time, the census measures did a little better.
- **Dengue in about 2,450 Mexican municipalities.** Forecasts one month ahead improved, but three and six months ahead did not. The gains came where dengue was circulating. Fewer than half the municipalities (47.6%) improved, but their improvements were larger than the losses elsewhere.
- **Cholera in 403 health zones of the Democratic Republic of the Congo.** At one and two weeks ahead, recent case counts were already enough. At four and eight weeks, the embeddings helped: of each week's five zones ranked highest risk, an average of 2.10 went on to have an outbreak, against 1.78 using case history alone. That lead time is when supplies have to be moved.
- **Postpartum depression in 332,970 US mothers.** This study was pre-registered: the analysis plan was fixed before any model saw outcomes. Adding the embeddings gave a small gain. They did not stand in for a mother's own income and insurance, and closed none of the 21 gaps in detection between racial, ethnic and rural groups that were tested. What they mostly did was shift which rural mothers were flagged for follow-up. The direction depended on the screening rule: with a fixed number of screening places, more rural cases were found at the cost of more false alarms. The authors call which of these is a benefit "a policy choice, not a model property".

The conclusion is less sweeping than the title. The embeddings help most where things change fast and other data are missing or late, and least for slow, structural questions where a census is available.[^1] Two of the paper's own findings temper the case for them. The embeddings are refreshed monthly. But they could only be tested on single snapshots, mostly from October 2023, because older months were not kept. And swapping in an October 2025 snapshot changed nothing, so what they capture held steady over at least two years. The authors conclude that the value of monthly refreshes is a hypothesis still to be shown.[^1] Second, no single one of the 330 numbers means anything on its own, unlike "median household income". So the embeddings can improve a prediction but cannot say which features of a place drive the outcome.[^1]

The most portable finding is a timing window. For dengue the embeddings helped at one month; for cholera at four and eight weeks. The authors suggest that, in both, recent case counts had stopped predicting much by then, while the seasonal and weather changes that govern longer horizons had not yet set in.[^1] A summary of place, on this evidence, helps where records are thin and the next month matters. It does little where individual information is what counts: the postpartum study found most of the predictive signal, and the largest gaps between groups, within places rather than between them.[^1]

The method described here differs from the [PDFM entry](/engines/population-dynamics-foundations-pdfm/)'s account of the first version, a graph neural network over neighbouring areas. In this paper each location is processed on its own by an encoder trained to rebuild its own inputs, with set blocks of the 330 numbers for searches, places and environment. For the Congo, where data were too thin for that, a simpler compression to 200 numbers was used.[^1]
