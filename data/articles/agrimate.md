---
about:
  label: "Multi-breadbasket failures, climate change, and risks for crop prices and regional consumption"
  description: >-
    Paper by Kilian Kuhla and colleagues at the Potsdam Institute for Climate
    Impact Research in Environmental Research Letters; drives Agrimate, an
    agent-based model of global grain trade, with scenarios of simultaneous
    crop failures to estimate price spikes and regional consumption loss.
  tags:
    - food security
    - crop failure
    - agricultural trade
    - agent-based model
    - food prices
    - climate change
article:
  url: 'https://doi.org/10.1088/1748-9326/aeae54'
  published: '2026-10-08'
  publisher: Environmental Research Letters (IOP Publishing)
  authors:
    - Kilian Kuhla
    - Maria Goldrina
    - Michael J Puma
    - Yann Kinkel
    - Christian Otto
domains:
  - food
provenance:
  origin: agent
  sources:
    - title: "Multi-breadbasket failures, climate change, and risks for crop prices and regional consumption"
      url: 'https://iopscience.iop.org/article/10.1088/1748-9326/aeae54'
    - title: "Data and model repository for Agrimate analysis"
      url: 'https://doi.org/10.5281/zenodo.20406423'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, drafted from the abstract, methods, data availability statement and author list on the journal page; checked against the Crossref record (abstract, authors, affiliations, date, licence, references) and the Zenodo deposit, because the journal page sat behind a bot wall on recheck; the methods details (28 regions, run length, 2022 calibration, export restrictions left out) rest on the drafting read only'
  status: draft
---

A paper in Environmental Research Letters by Kilian Kuhla, Maria Goldrina, Michael J Puma, Yann Kinkel and Christian Otto, from the Potsdam Institute for Climate Impact Research, the University of Potsdam and Columbia University. It asks what happens to world grain prices and to regional diets when several major producing regions fail in the same year, and how much more likely that becomes under climate change.

The method is a stress test. The authors build probabilistic scenarios of simultaneous production failures for wheat, maize and soybean, under historical (2006–2015) and +2 °C climate conditions, and use them to force Agrimate, an agent-based model of agricultural trade. Agrimate simulates trade between 28 macro-regions at bi-weekly resolution, with production, trade flows and commercial and strategic stocks, and lets prices, storage levels and consumption adjust as a supply shock spreads through the trade network. Each run covers ten years, with a one-year shock and two years of response; the study runs 10 000 realisations per crop and climate condition, 60 000 in all. The model is calibrated to the 2022 food price crisis and to 2019–2021 export patterns, and trade-policy responses such as export restrictions are left out on purpose.

Under +2 °C the chance of a bi-weekly price spike above the historical 90th percentile nearly doubles for wheat, and grows 2.7 times for maize and 2.45 times for soybean. Regional consumption risk is very uneven: some regions see almost none, others more than 100 Mcal per person per year. Concentrated production, import dependence and a small set of suppliers raise the risk; higher stock-to-use ratios buffer it. Exporting regions can lose domestic supply when world demand surges and nothing protects it. The authors call for diversified production and trade, better storage management and early-warning systems.

The paper is open access under a Creative Commons Attribution 4.0 licence. The data behind the findings are deposited on Zenodo (doi 10.5281/zenodo.20406423), and supplementary information holds the model description. The Zenodo deposit also holds the version of the Agrimate model used for the study; a full model description is cited to an earlier paper by Kuhla and colleagues. In this wiki's stack Agrimate belongs with the engines under Agents and system dynamics: a trade network rather than a place.
