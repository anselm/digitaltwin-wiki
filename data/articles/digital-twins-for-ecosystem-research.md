---
about:
  depiction: articles/digital-twins-for-ecosystem-research.jpg
  depiction_credit: 'Figure 1 of the paper: one ecosystem, its digital twin, and three scenarios played out on the twin. Visser et al. 2026, CC BY 4.0.'
  label: Digital twins as a tool for ecosystem research
  description: >-
    Fourteen Dutch ecologists and computer scientists name the five traits
    of an ecosystem twin and show how far existing studies are from having
    them all.
  tags:
    - ecology
    - biodiversity
    - ecological forecasting
    - scenarios
    - virtual lab
    - FAIR data
    - definition
    - paper
article:
  tier: 2
  url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  published: '2026-08'
  publisher: Trends in Ecology & Evolution (Cell Press)
  authors:
    - M. E. Visser
    - G. M. Hengeveld
    - J. de Kraker
    - I. N. Athanasiadis
    - E. S. Bakker
    - W. D. Kissling
    - S. Nmor
    - C. J. M. Philippart
    - K. Soetaert
    - S. J. G. Vriend
    - A. Woutersen
    - Z. Zhao
    - Q. Zhan
    - A. F. Hof
domains:
  - ecology
relations:
  - predicate: about
    target: terms/digital-twin
  - predicate: cites
    target: twins/biodt
  - predicate: cites
    target: engines/invest
  - predicate: cites
    target: twins/destination-earth
  - predicate: cites
    target: twins/crane-radar
  - predicate: cites
    target: platforms/naavre
  - predicate: cites
    target: articles/blair-digital-twins-of-the-natural-environment
  - predicate: cites
    target: articles/de-koning-digital-twins-model-data-fusion
  - predicate: cites
    target: articles/metcalfe-digital-twin-maturity-levels
  - predicate: cites
    target: articles/dietze-near-term-ecological-forecasting
  - predicate: cites
    target: articles/hazeleger-digital-twins-of-the-earth
  - predicate: cites
    target: data-sources/movebank
  - predicate: cites
    target: data-sources/emodnet
  - predicate: cites
    target: engines/madingley
provenance:
  origin: agent
  sources:
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
    - title: 'The same paper on ScienceDirect, where the DOI leads'
      url: 'https://www.sciencedirect.com/science/article/pii/S0169534726001035'
    - title: 'LTER-LIFE, the Dutch research infrastructure all the authors belong to'
      url: 'https://www.lter-life.nl'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the full text of the open access PDF Anselm supplied (the publisher pages block scripted reads); Anselm asked for it to be read carefully'
  status: draft
---

Ecology has a problem with prediction. To say how one lake or heath will respond to a heat wave, a new dyke or a restoration plan, it has to become a predictive science, and three things hold it back. It cannot yet combine the effects of several stressors at once. It struggles to link biodiversity to nutrient cycles and other ecosystem traits. And it rarely runs scenarios from local data across a whole ecosystem.[^1] The fourteen authors, ecologists, modellers and computer scientists from Dutch institutes who all work in the [LTER-LIFE](/organizations/lter-life/) research infrastructure, propose digital twins as the way through.[^1,3]

They name five traits. A twin could have all of them but need not:[^1]

1. Ecosystem-specific: anchored to one shallow lake, not a generic one.
2. Digital data streams from the ecosystem to the twin, and an information stream back.
3. Many sources joined: field observations and experiments, citizen science, cameras, acoustic recorders, sonar and radar, aircraft and satellite imagery.
4. Models combined: process-based models alongside statistical and data-driven ones.
5. Forecasts and scenarios: short-term forecasts, long-term projections, or nowcasts that fill gaps in what was measured.

The picture above is their Figure 1. One real ecosystem has one twin, and on the twin three scenarios, such as three planned interventions, are played forward.[^1]

Four choices in the paper shape what gets built.

**Specific, but not from scratch each time.** "Ecosystem-specific" does not mean a new twin for every wetland. The authors borrow the industrial idea of a prototype twin, a blueprint tailored to each instance, and cite a conference paper that modelled many unique wetlands in parallel this way. Nor does a twin have to cover a whole landscape. It can be the entire Wadden Sea, or the soil microbes of the Veluwe.[^1]

**Update rate is a design choice.** Most of the literature stresses continuous updating. The authors argue that the rate should follow the purpose. A twin advising on interventions in a slowly changing system can be refreshed now and then. One used for real-time decision support needs data as they come in. Whatever the rate, something has to flow back to the real place, predictions or suggested actions, because the return flow is what separates a twin from a digital shadow.[^1]

**Mechanism and data together.** A twin holds process-based models, built from how the system works, and data-driven models, learned from what was measured. It keeps reconciling the two as new data arrive instead of fitting parameters once. The authors treat the two as ends of a spectrum and look for the point where each strengthens the other. Interpretable machine learning and knowledge-guided deep learning are their examples.[^1]

**Why it is not "just a model".** A twin is a model, they agree, but a special kind in three ways. It is about one ecosystem and does not try to generalise. It joins different kinds of data and models. And it is kept alive, updated and reused for new questions, where a published model is usually archived. Keeping it alive takes a community of researchers around the ecosystem, including the people who know the place best, whom another paper calls expert witnesses, to judge whether the twin behaves like the real thing.[^1]

**Scientists first.** Some of the literature asks for interfaces that non-specialists can use. The authors want the first users to be the scientists who study the ecosystem, who hold the knowledge to build a twin and can tell when it is wrong. Policymakers and the public come after. For the scientists the paper proposes virtual labs, such as LTER-LIFE's [NaaVRE](/platforms/naavre/): online workbenches with a catalogue of a place's data and calibrated models, where reusable assets can be assembled into a twin.[^1]

Three examples of twins from the life sciences appear in a box.[^1]
- **A tomato crop in a greenhouse:** a 3D simulation fed in real time from the greenhouse's sensors, meant as a decision aid for growers.
- **The [crane radar](/twins/crane-radar/):** a continuously updated forecast that tells birdwatchers where they are likely to see common cranes. It runs on historical migration data, wind forecasts and birdwatchers' own sightings.
- **A prototype bee-hive twin:** it simulates foraging, colony growth and Varroa mites from land-cover maps and daily weather. It comes from the European [BioDT](/twins/biodt/) project, in the paper's account the one initiative so far to start building ecological digital twins.

Most of the work closest to twins does not use the word. The authors searched Scopus and found fifteen studies with some of the five traits and no claim to the label.[^1] Among them:
- a restored tidal marsh at the Hedwige-Prosper Polder, tested against rates of sea-level rise;
- macroalgal blooms in the Yellow Sea;
- forest cover on Mount Kenya;
- mangroves at Le Morne in Mauritius;
- 164 glacier-fed streams;
- three shallow lakes in France;
- woody encroachment in Kruger National Park;
- methane from a peatland in northern Minnesota;
- two studies built on [InVEST](/engines/invest/), one in Rasht County in Iran and one across four eastern German states.

Some run process models. Others run statistical or machine-learning ones. None combines a process-based model with a big-data model. Most are silent on how often their data are refreshed.[^1]

For building one, the authors take [G. S. Blair](/people/gordon-blair/)'s "jam sandwich" from [a 2021 paper](/articles/blair-digital-twins-of-the-natural-environment/). The bread is the plumbing: data and models integrated and reused in one place, interoperable, able to scale. The jam is data science and AI, joining process and data models, and handling feedback and complexity.[^1] The authors dwell on the parts least familiar to ecologists. One is the virtual lab. Another is FAIR data (findable, accessible, interoperable and reusable), because ecological data still sit in mixed formats with thin metadata and sometimes no way to download them. The third is large language models that pull biodiversity facts, traits and metadata out of text, which they call promising but in their infancy.[^1]

The open questions at the end are among the most useful parts of the paper.[^1]
- **What exactly is the physical thing?** Ecosystems are loosely defined, and a twin needs a boundary.
- **How do you train a twin of a slow place?** Some species breed once a year, so a twin of one depends on long runs of legacy data, much of it scattered and without metadata.
- **How do you check a twin?** One that predicts many properties at once rests on many models fitted to many sources. The authors ask whether that takes living labs, where human pressure is deliberately varied, or back-casting at sites with long records.
- **How do policymakers use the scenarios?** They will need interfaces they can work with directly.

The closing message: the label matters less than the five traits. Call it a digital twin or call it a model, so long as data, models and people are integrated around one real place.[^1] That is close to how this wiki uses the term (see [What is a digital twin?](/terms/digital-twin/)). [Destination Earth](/twins/destination-earth/) appears in the paper as a twin of the whole planet, the far end of the same idea. The paper is open under CC BY 4.0, so its figure can be shown here.[^1]

The paper's own sources make a good reading list, and several are on this wiki. On what a twin is: [Blair](/articles/blair-digital-twins-of-the-natural-environment/), [de Koning and colleagues](/articles/de-koning-digital-twins-model-data-fusion/), [Metcalfe and colleagues' maturity levels](/articles/metcalfe-digital-twin-maturity-levels/), and [Hazeleger and colleagues on Earth twins](/articles/hazeleger-digital-twins-of-the-earth/). On forecasting: [Dietze and colleagues](/articles/dietze-near-term-ecological-forecasting/). On the parts: the [Madingley](/engines/madingley/) ecosystem model, [Movebank](/data-sources/movebank/) animal tracks and [EMODnet](/data-sources/emodnet/) marine data.[^1]
