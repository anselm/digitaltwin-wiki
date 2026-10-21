---
about:
  label: A scalable and generic framework for city-wide traffic prediction with large language model
  description: >-
    A 2026 paper proposing LLM-UTP, one language-model-based model that
    predicts short-term traffic flow for metro, bus, bike, taxi, freeway and
    rail in 29 cities and areas.
  tags:
    - traffic prediction
    - large language model
    - metro
    - transport
    - time series
    - foundation model
article:
  url: 'https://doi.org/10.1038/s41467-026-73610-2'
  published: '2026-05-26'
  publisher: Nature Communications (Nature Publishing Group)
  authors:
    - Jinlei Zhang
    - Congwang Deng
    - Lixing Yang
    - Shuxin Zhang
    - Daoping Wang
    - Jianxi Gao
    - Ziyou Gao
domains:
  - mobility
provenance:
  origin: agent
  sources:
    - title: A scalable and generic framework for city-wide traffic prediction with large language model
      url: 'https://www.nature.com/articles/s41467-026-73610-2'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Most short-term traffic forecasts use a separate model for each transport mode, scenario and time step. This paper asks whether one model can predict flow for a whole city across many modes and situations. It appeared in Nature Communications (volume 17, article 7466) on 26 May 2026. The authors are Jinlei Zhang, Congwang Deng, Lixing Yang, Shuxin Zhang, Daoping Wang, Jianxi Gao and Ziyou Gao, of Beijing Jiaotong University, King's College London and Rensselaer Polytechnic Institute.

Their framework, LLM-UTP, has three parts. One module enhances trend data. A second encodes spatial and temporal features. The third is a language model built on GPT-2, an early OpenAI language model. Training has two stages: first on all the datasets across transport modes together, then fine-tuning on a small share of data from the target mode. Testing is a third stage. Traffic flow here means counts of passengers or vehicles at stations, stops, regions or detectors, in fixed intervals of 5 minutes to 1 hour.

The model is tested on 11 real-world datasets from 29 cities and areas:

- metro ridership in Beijing, Shanghai, Hangzhou and Nanning
- the PEMS03, PEMS04 and PEMS08 freeway detector sets
- bike-sharing and taxi sets
- Beijing buses
- the Beijing–Shanghai high-speed railway

The authors report lower error than conventional deep-learning models and other language-model methods. They also report ablations, tests that remove one part at a time, showing each module contributes. On datasets the model was not trained on, they report usable accuracy in few-shot settings (only a few examples) and transfer settings. For a single mode in a single scenario, the discussion notes, a language model is not always the better choice.

The PyTorch code and eight of the datasets are on Zenodo at https://doi.org/10.5281/zenodo.19503648. Those eight are the Beijing, Hangzhou and Shanghai metro, PEMS03, PEMS04, PEMS08, bike-sharing and taxi sets. The Nanning metro, Beijing bus and high-speed railway data are withheld under confidentiality agreements, with processed example samples in the same repository. The article is open access under CC BY-NC-ND 4.0.

The method forecasts flows on a transport network, a step upstream of simulators such as [MATSim](/engines/matsim/) that need demand as input.
