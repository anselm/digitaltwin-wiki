---
about:
  label: 'Iterative near-term ecological forecasting'
  description: >-
    Nineteen ecologists argue that ecology should forecast days to decades
    ahead, check each forecast against new data and update it, and say what
    that requires.
  tags:
    - ecological forecasting
    - prediction
    - data assimilation
    - uncertainty
    - adaptive management
    - research agenda
    - paper
article:
  url: 'https://doi.org/10.1073/pnas.1710231115'
  published: '2018-01-30'
  publisher: Proceedings of the National Academy of Sciences (PNAS)
  authors:
    - M. C. Dietze
    - A. Fox
    - L. M. Beck-Johnson
    - J. L. Betancourt
    - M. B. Hooten
    - C. S. Jarnevich
    - T. H. Keitt
    - M. A. Kenney
    - C. M. Laney
    - L. G. Larsen
    - H. W. Loescher
    - C. K. Lunch
    - B. C. Pijanowski
    - J. T. Randerson
    - E. K. Read
    - A. T. Tredennick
    - R. Vargas
    - K. C. Weathers
    - E. P. White
domains:
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'Iterative near-term ecological forecasting: Needs, opportunities, and challenges (PNAS 115(7), 1424-1432)'
      url: 'https://doi.org/10.1073/pnas.1710231115'
    - title: 'Iterative near-term ecological forecasting: Needs, opportunities, and challenges - PMC'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5816139/'
    - title: 'Mission: Solving the challenge of predicting nature | Ecological Forecasting Initiative'
      url: 'https://ecoforecast.org/about/'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the full text of the PubMed Central copy (read through a headless browser, since PMC answers scripted requests with a bot check)'
  status: draft
---

The paper starts from two questions it puts at the heart of sustainability: how ecosystems and what they provide will change, and how human decisions affect that path. Managers used to plan around the range of what had happened before, the 100-year flood or a species' historical range, and the authors argue that the pace of change is moving places outside that range.[^2] Most ecological forecasts look a century ahead at responses to climate change. The decisions people make, they say, need forecasts days to decades ahead, started from current data, and comparisons of the options on the table.[^2] Nineteen authors from universities, research institutes, the US Geological Survey and the National Ecological Observatory Network (NEON) wrote it, as the product of a workshop on operationalizing ecological forecasts funded by NEON and hosted by the USGS Powell Center in Fort Collins, Colorado.[^2] It appeared in PNAS in 2018.[^1,2]

Near-term forecasts already run for fisheries, wildlife, algal blooms, influenza and wildfire; a table lists six, from a global seasonal wildfire forecast to quarterly fish stock forecasts.[^2] The paper's model is weather forecasting. Weather forecast skill has risen steadily over 60 years, the authors write, partly because meteorologists kept making forecasts, watching what happened and refining their models instead of waiting until the models were good enough. Ecology, by contrast, has tended to say that biology is too complex.[^2] Their central message is that ecologists should start forecasting now and treat it as learning by doing, using data that already exist.[^2]

The core idea is a loop, the forecast-analysis cycle. A model makes a probabilistic forecast that carries its uncertainties. When new observations arrive, they are compared with the forecast and used to update the estimate of the system's current state, and the comparison tests the model. Folding observations into a running model this way is called data assimilation.[^2] Bayesian methods suit the loop because each update's result becomes the starting point for the next. Where data are scarce, as with an invasive species or a new disease, they also allow a first forecast from expert judgement that is refined as data arrive.[^2]

The paper names four things data need for this work.[^2]

1. **Repeated measurement.** More measurements over time mean more chances to update, though more frequent sampling usually costs spatial coverage.
2. **Interoperability.** Data from different sources need shared standards and terms, and continuity when instruments change.
3. **Low latency,** the time from collection to availability. As an example, they note that high-frequency limnology data, from lakes and other inland waters, typically take two to five years to appear in publications. A tier of provisional but rapid data, kept distinct from final products, is one remedy.
4. **Reported uncertainty.** Data without error estimates are given too much weight when combined with a forecast, which biases it and makes it falsely confident; the authors note there are no general standards for reporting measurement uncertainty.

On models, the authors insist that forecasts be probabilistic, and that leaving out a source of uncertainty produces overconfident forecasts that erode trust.[^2] Weather forecast error is dominated by uncertainty about the starting state of the atmosphere. In ecology no single source is likely to dominate everywhere, so they propose classifying systems by which source dominates.[^2] A forecast should be scored against a sensible null, such as the range of historical variability, the ecological equivalent of comparing a weather forecast with climatology.[^2] Where it is unclear how a system works, forecasting with several models helps, since their structural biases can cancel.[^2] Rare events too infrequent to model are better handled as scenarios, and the authors call rare events one of the greatest challenges to ecological forecasting.[^2]

The rest of the paper is about what surrounds the models. Forecasts should be reproducible and automated, and should themselves be archived openly so they can be judged against data collected afterwards.[^2] Training, funding and a hand-off from research to operations are needed; in the United States that hand-off often crosses agencies with no clear mechanism.[^2] Forecasts should be built with the people who will use them, including boundary organizations, which translate science for decision-makers, and tied into adaptive management, where monitoring the results of an action feeds the next decision.[^2] The paper closes by proposing an ecological forecasting synthesis center and a "Decade of Ecological Forecasting".[^2]

A model of a place can follow the same practice. Its forecasts can be written down before the data arrive, carry their uncertainty, be scored against a simple baseline and be kept for later comparison, and the delay between measuring and using the data can be kept short. The [Ecological Forecasting Initiative](/organizations/ecological-forecasting-initiative/), a community of practice around near-term ecological forecasts, shows the paper's forecast cycle on its mission page.[^3] [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) cites it for short-term ecological forecasts as one output of an ecosystem twin.[^4] The paper is published under the PNAS license, so its figures are not shown here.[^2]
