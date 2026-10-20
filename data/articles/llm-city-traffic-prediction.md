---
about:
  label: A scalable and generic framework for city-wide traffic prediction with large language model
  description: >-
    2026 Nature Communications paper by Jinlei Zhang and colleagues at Beijing
    Jiaotong University, King's College London and Rensselaer Polytechnic
    Institute; proposes LLM-UTP, one language-model-based model that predicts
    short-term traffic flow across metro, bus, bike, taxi, freeway and rail in
    29 cities and areas, with code and most data released.
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
A paper in Nature Communications (volume 17, article 7466, published 26 May 2026) by Jinlei Zhang, Congwang Deng, Lixing Yang, Shuxin Zhang, Daoping Wang, Jianxi Gao and Ziyou Gao, from Beijing Jiaotong University, King's College London and Rensselaer Polytechnic Institute. It asks whether one model can predict short-term traffic flow for a whole city across many transport modes and situations, instead of a separate model for each mode, scenario and time step.

The authors propose LLM-UTP, a framework with three parts: a module that enhances trend data, a module that encodes spatial and temporal features, and a language-model module built on GPT-2. The model is trained in two stages, first jointly on all the datasets across transport modes, then fine-tuned on a small share of data from the target mode, with testing as a third stage. Traffic flow here means counts of passengers or vehicles at stations, stops, regions or detectors in fixed time intervals of 5 minutes to 1 hour.

They test it on 11 real-world datasets from 29 cities and areas: metro ridership in Beijing, Shanghai, Hangzhou and Nanning, the PEMS03, PEMS04 and PEMS08 freeway detector sets, bike-sharing, taxi, Beijing bus and the Beijing–Shanghai high-speed railway. The paper reports lower error than conventional deep-learning and other LLM-based baselines, ablations showing each module contributes, and usable accuracy in few-shot and transfer settings on datasets the model was not trained on. The discussion notes that for a single mode in a single scenario a language model is not always the better choice.

What a reader can use: the PyTorch implementation and eight of the datasets (the Beijing, Hangzhou and Shanghai metro, PEMS03, PEMS04, PEMS08, bike-sharing and taxi sets) are on Zenodo at https://doi.org/10.5281/zenodo.19503648; the Nanning metro, Beijing bus and high-speed railway data are withheld under confidentiality agreements, with processed example samples in the same repository. The article is open access under CC BY-NC-ND 4.0. In this wiki's stack it is an engine-side method for forecasting flows on a transport network, upstream of simulators such as [MATSim](/engines/matsim/) that need demand as input.
