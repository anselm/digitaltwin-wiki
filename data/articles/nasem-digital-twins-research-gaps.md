---
about:
  label: "Foundational Research Gaps and Future Directions for Digital Twins"
  description: >-
    Consensus study report from the US National Academies of Sciences,
    Engineering, and Medicine on the mathematical, statistical and
    computational research that digital twins still need, with eight
    recommendations to federal research agencies.
  tags:
    - research agenda
    - verification and validation
    - uncertainty quantification
    - data assimilation
    - surrogate models
    - National Academies
article:
  url: 'https://doi.org/10.17226/26894'
  published: '2024'
  publisher: The National Academies Press
  authors:
    - Committee on Foundational Research Gaps and Future Directions for Digital Twins
domains:
  - places
  - climate
provenance:
  origin: agent
  sources:
    - title: "Foundational Research Gaps and Future Directions for Digital Twins"
      url: 'https://www.nationalacademies.org/projects/DEPS-BMSA-21-03/publication/26894'
    - title: "Read \"Foundational Research Gaps and Future Directions for Digital Twins\" at NAP.edu (Summary)"
      url: 'https://www.nationalacademies.org/read/26894/chapter/2'
    - title: "Read \"Foundational Research Gaps and Future Directions for Digital Twins\" at NAP.edu (Front Matter)"
      url: 'https://www.nationalacademies.org/read/26894'
    - title: "Foundational Research Gaps and Future Directions for Digital Twins: Consensus Study Report Highlights"
      url: 'https://nap.nationalacademies.org/resource/26894/RH-digital-twins.pdf'
    - title: "BibTeX citation for record 26894"
      url: 'https://nap.nationalacademies.org/citation.php?type=bibtex&record_id=26894'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---

The National Academies Press published the report in 2024; its highlights sheet is dated December 2023. The Department of Defense, the Department of Energy, the National Institutes of Health and the National Science Foundation sponsored the study. Karen E. Willcox of the University of Texas at Austin chaired a committee of sixteen. Members included the climate modeller James L. Kinter, Ruby Leung, chief scientist of the Energy Exascale Earth System Model, and Xinyue Ye of Texas A&M, who works on geospatial AI and smart cities. The study's brief called for three public workshops: on biomedicine, on Earth and environmental systems, and on engineering.

The committee adapted its definition from a 2020 position paper of the American Institute of Aeronautics and Astronautics:

> A digital twin is a set of virtual information constructs that mimics the structure, context, and behavior of a natural, engineered, or social system (or system-of-systems), is dynamically updated with data from its physical twin, has a predictive capability, and informs decisions that realize value. The bidirectional interaction between the virtual and the physical is central to the digital twin.

Its first finding is short: "A digital twin is more than just simulation and modeling."

Two flows carry the idea. From physical to virtual, observations update the model through sensor fusion, inverse problems and data assimilation. These are methods for folding measurements into a running model and working back to conditions that cannot be measured directly. From virtual to physical, predictions drive changes in the system or in where its sensors point, through automatic control, a person's decision, or both. The loop may run in real time, as for a wind farm, or more slowly, as when an aircraft engine's twin is updated after each flight.

The report separates two kinds of twin. Where data are plentiful and decisions stay within the conditions the data cover, a data-centric twin is appropriate, its model probably heavily empirical. Where data are thin and predictions must reach beyond them, a model-centric twin is appropriate, with a mathematical model at its core and data assimilated through it. The committee calls for advances in hybrid methods that combine the two, and in surrogate models, which are cheaper stand-ins for a full simulation.

A twin should be "fit for purpose". Its model types, fidelity, resolution and quantities of interest are chosen for the decision at hand, the computing available and the acceptable cost. Many potential uses remain intractable with existing computers. A gap remains between the scales that can be simulated and the scales at which people act.

Verification, validation and uncertainty quantification, shortened to VVUQ, run through the whole report. In its terms, verification and validation build trust in the model, and uncertainty quantification measures the quality of a prediction. For a twin, VVUQ has to be continual. It must adapt as the physical system, its sensors, the data, the models and the questions put to the twin change. The committee found a lack of standards for reporting VVUQ, and a lack of consideration of confidence in model outputs, despite growing use of machine learning. Its second recommendation asks federal agencies to make VVUQ an integral part of new digital twin programs.

Earth systems appear as an "as-yet aspirational" application. Coupled models of atmosphere, ocean, land and ice could help support decisions on policy, new observing systems and emergency preparedness. The report names Earth system science as a leader in data assimilation. It notes the international climate research community's history of sharing models and data, and says more coordination in fields such as biomedicine would help. It also records a view heard across its information-gathering sessions: publicity around digital twins outweighs the evidence of their success.

The recommendations ask agencies to fund computing for twin research and to assess what they need to maintain data, software, sensors and models after a twin is built. They also call for cross-disciplinary workshops, shared data and models, and new interdisciplinary degrees. The committee treats the virtual model as an asset to be sustained in parallel with the physical counterpart. It lists privacy, ownership and responsibility for data accuracy as open questions. The tight link between twin and system raises the stakes for cybersecurity. In sensitive or high-risk settings, malicious interaction could put the physical system at risk. The report can be read online, and the PDF downloaded free, from the National Academies Press.
