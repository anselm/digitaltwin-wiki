---
about:
  depiction: articles/de-koning-digital-twins-model-data-fusion.jpg
  depiction_credit: 'Figure 1 of the paper: ecological research as it is usually done (top) and with a digital twin running alongside the real population (bottom). de Koning et al. 2023, CC BY 4.0.'
  label: 'Digital twins: dynamic model-data fusion for ecology'
  description: >-
    Eight ecologists and modellers set out what twins could do for ecology,
    five challenges peculiar to living systems, and four common
    misunderstandings, and urge people to start building prototypes.
  tags:
    - ecology
    - biodiversity
    - conservation
    - ecological forecasting
    - citizen science
    - sampling bias
    - definition
    - paper
article:
  url: 'https://doi.org/10.1016/j.tree.2023.04.010'
  published: '2023-10'
  publisher: Trends in Ecology & Evolution (Cell Press)
  authors:
    - K. de Koning
    - J. Broekhuijsen
    - I. Kühn
    - O. Ovaskainen
    - F. Taubert
    - D. Endresen
    - D. Schigel
    - V. Grimm
domains:
  - ecology
relations:
  - predicate: about
    target: terms/digital-twin
  - predicate: cites
    target: engines/destination-earth
  - predicate: cites
    target: engines/biodt
  - predicate: cites
    target: data-sources/gbif
provenance:
  origin: agent
  sources:
    - title: 'Digital twins: dynamic model-data fusion for ecology (Trends in Ecology & Evolution 38(10), 916-926)'
      url: 'https://doi.org/10.1016/j.tree.2023.04.010'
    - title: 'Digital twins: dynamic model-data fusion for ecology, open access PDF at Wageningen University & Research'
      url: 'https://edepot.wur.nl/635848'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the journal''s typeset open access PDF held by Wageningen University & Research (the publisher pages block scripted reads); Anselm asked for the papers behind Digital twins as a tool for ecosystem research'
  status: draft
---

The authors come from Wageningen University & Research, the Dutch research organisation TNO, the Helmholtz Centre for Environmental Research and the German Centre for Integrative Biodiversity Research, universities in Finland, Norway and Germany, and the secretariat of [GBIF](/data-sources/gbif/), the Global Biodiversity Information Facility.[^2] The work was funded by the European Union's [BioDT](/engines/biodt/) and NATURE-FIRST projects.[^2] It is an opinion article, open under CC BY 4.0.[^2]

They take a twin to be a digital counterpart of a physical object or process, linked to it so that it keeps updating, grows more realistic and has less uncertainty about the real thing.[^2] In ecology, talk of twins was triggered in particular by the European Commission's [Destination Earth](/engines/destination-earth/), which envisions twins for the climate, the ocean and biodiversity.[^2] Their aim is to manage expectations, so that modellers, researchers, policymakers and land managers are not misled.[^2]

**Why now.** Ecology has gone digital: drones, high-frequency animal tags, automatic species identification from DNA, camera traps and sound recordings, digitised museum collections, and citizen science through apps and social media.[^2] Existing networks such as GEO BON, NEON, eLTER, SAEON, TERN, GBIF and LifeWatch already deliver data on biodiversity and ecosystems, and twins could be built on them.[^2] The other push is a call for conservation decisions based on evidence, which in practice is often missing for lack of incentives, skills, time and resources.[^2]

**Two examples.** A box sets a weather twin beside a twin of crane migration. Weather forecasting runs on physics models whose predictions quickly become too uncertain, so they are updated continually with sensor data. For cranes (*Grus grus*) there is no mechanistic model, so an empirical one combines GPS tracks of migrating cranes with wind data, and citizen scientists' sightings correct its predicted routes.[^2] The crane model was calibrated on historical GPS tracks and weather.[^2] The authors would rather a twin used mechanistic models, built from how the system works, so that it generalises beyond the data it was trained on; data-driven twins need more data and more AI.[^2] The later paper [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) lists a crane radar among its examples, citing a 2025 work by K. de Koning.[^3]

**What twins could add.** They list five things:[^2]
1. Measuring the state of nature with little delay, so that species distribution, vegetation and habitat maps stop being static.
2. Spotting trends early enough to intervene.
3. Linking trends in an ecosystem to the conditions and human pressures fed into the twin.
4. Showing whether an intervention worked, by tracking before and after, or testing it on the twin before trying it in the field.
5. Showing where knowledge and data are missing, and so where to spend on fieldwork or research.

Most of these are already done in ecology, they say, but not all at once.[^2] The picture above is their Figure 1. Today, data on a population such as elephants are usually analysed once, case by case. A twin runs in parallel with the real population and keeps joining the ecological processes, the observations, the analysis and the biases of how observations are made, while showing the uncertainty that each brings.[^2]

**Five challenges.**[^2]
1. There are no common methods or standards for building a twin's software and workflows, as there are in manufacturing with ISO 23247.
2. Data are collected, harmonised and stored in different ways, and often belong to different owners with limits on use.
3. Every twin needs a boundary and a time step. Many engineering twins sync in the order of milliseconds; most ecological processes are far slower, and fieldwork limits how often data arrive. For ecology, "real time" means "synchronised at a specific rate suitable for the purpose". A single supermodel of all Earth's nature contradicts the basic idea of a model built for a concrete problem.
4. Engineers built the things they twin and know how they work; ecologists lack that understanding of the systems they model.
5. Continuous data come from sensors, classification algorithms and volunteers, so their quality is limited by all three. Ready-made data such as GBIF's are often biased in where, when and which species were recorded, and AI can only identify species that are already well represented in its reference libraries, which may deepen the bias.

**Four misunderstandings.** A twin is not just AI or machine learning; it rests on understanding of the system and needs domain knowledge. It is not just a large connected database; it gives data meaning by joining them to models. It is not just another word for model; it is dynamic, kept current with data, and lets users explore scenarios. And it is not a big model of everything; like any model it simplifies one part of reality within set bounds.[^2]

The conclusion asks modellers and ecologists to start building prototypes now, to learn how much effort twins take and where they get stuck. Modellers should take their static models and feed them continuous data through APIs or connect them to other twins. Field ecologists should work with modellers and software engineers. Policymakers and conservationists should say what they would need from a twin, and all three should build with the application in mind.[^2] Their open questions are which software architectures and standards to use, what scales and how much real time ecology needs, how to correct biases in incoming data before the twin uses them, and how to show outputs and uncertainty so that they help conservation decisions.[^2]

For someone modelling a wetland or a forest, the five challenges are a usable checklist before starting, and the phrase "synchronised at a specific rate suitable for the purpose" settles how often a twin of a slow place has to update. The bias warning matters to anyone relying on volunteer sightings: the twin inherits where people look and what the software can recognise.[^2] The later Visser paper cites this one when it argues that update frequency should follow the system and the twin's purpose.[^3]
