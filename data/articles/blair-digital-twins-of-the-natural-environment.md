---
about:
  label: Digital twins of the natural environment
  description: >-
    Gordon Blair's short 2021 opinion piece asks whether a twin of the natural
    environment is just a model or just data assimilation, and sets out its
    building blocks as a "jam sandwich".
  tags:
    - natural environment
    - process models
    - data science
    - data assimilation
    - virtual lab
    - interoperability
    - definition
    - paper
article:
  url: 'https://doi.org/10.1016/j.patter.2021.100359'
  published: '2021-10-08'
  publisher: Patterns (Cell Press)
  authors:
    - G. S. Blair
domains:
  - ecology
relations:
  - predicate: about
    target: terms/digital-twin
  - predicate: cites
    target: engines/destination-earth
provenance:
  origin: agent
  sources:
    - title: 'Digital twins of the natural environment (Patterns 2(10), 100359)'
      url: 'https://doi.org/10.1016/j.patter.2021.100359'
    - title: 'Digital twins of the natural environment, full text at PubMed Central (PMC8515001)'
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8515001/'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the full text at PubMed Central; Anselm asked for the papers behind Digital twins as a tool for ecosystem research'
  status: draft
---

Gordon Blair is a professor of distributed systems at Lancaster University and co-director of the Centre of Excellence in Environmental Data Science, a joint initiative of Lancaster and the UK Centre for Ecology & Hydrology.[^2] He wrote this short opinion piece after several workshops on twins of the natural environment, as his attempt to make sense of what he heard.[^2] It is open under CC BY 4.0.[^2]

He starts with why, which he says the debate usually skips in favour of what and how.[^2] His case rests on two changes. Environmental science is being asked big questions about a complex system under pressure from climate change, so it is becoming more integrative and cross-disciplinary. At the same time it has far more data than before, from remote sensing, instruments on and below the ground, citizen science and mining the web, and needs tools to make sense of that messy data.[^2] He names the planned investment in this area, citing Bauer and colleagues' paper "A digital twin of Earth for the green transition" and the European Commission's [Destination Earth](/engines/destination-earth/).[^2]

**Is it not just a model?** His answer is "yes" and "no", leaning to no.[^2] Environmental process models encode scientific understanding in mathematics, but they use data mostly for calibration and do not yet take full advantage of the new data.[^2] A twin built only on big data and machine learning is also a no for him, because process understanding is core to science.[^2] He places process modelling and data modelling on one spectrum and says the key to a twin is finding the point where the two work together.[^2]

**Is it not just data assimilation?** Data assimilation updates a model's state so that it fits current observations, and is a key technique in weather forecasting.[^2] Blair thinks that view is too narrow, reducing the link between data and process to one dimension.[^2] He lists other directions. Data science could find extremes, change points, clusters and correlations that inform the science. A model's structure could change, or the mix of models in an ensemble, and not only its state. Gaps in process understanding could decide what data to collect next.[^2] This two-way relationship is what he calls the intellectual heart of a twin of the natural environment.[^2]

**The jam sandwich.** He sorts the challenges into two layers.[^2] The "bread and butter" are needed by any twin:

1. Integration: bringing data and model assets into one logical place, for which he favours virtual labs, online workbenches that still need work to hold integrated data and models.
2. Interoperability: letting different assets, including model components, work together.
3. Scalability: having storage and processing when it is needed.

He says these depend on open data and open science, and that he is more confident about scalability, given cloud computing, than about the first two.[^2] On top sits the "jam":

1. Data science and AI made for the natural environment, where data are highly heterogeneous, come at different time and space scales, and carry uncertainty all the way from collection to decision.
2. Integration of process and data models, which he treats as what defines a twin in this field.
3. Complexity: capturing interactions, couplings, feedbacks and emergent behaviour, with input from complexity science.

He calls the whole a possible moonshot for environmental science, and warns that a half-built twin falls back into familiar practice, a better process model or a better data model.[^2]

**Scale and place.** His closing worry is a rush to the most glamorous examples, such as a new generation of Earth system models.[^2] He asks for room at global, national, regional, local and hyper-local scales, and expects some of the most exciting work at the local end, where one reasons about place.[^2] He links this to Keith Beven's idea of "models of everywhere", which they revisited together in a 2019 paper.[^2]

Someone planning a model of a watershed or a town can put Blair's two questions to the plan: does it do more than a model would, and more than data assimilation would? He expects integration and interoperability to be harder in practice than they look, and harder than finding the computing power.[^2] The 2026 paper [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) takes up the jam sandwich and works through the building blocks least familiar to ecologists.[^3] The National Academies report [Foundational Research Gaps and Future Directions for Digital Twins](/articles/nasem-digital-twins-research-gaps/) covers data assimilation and model-data hybrids from the mathematical side.
