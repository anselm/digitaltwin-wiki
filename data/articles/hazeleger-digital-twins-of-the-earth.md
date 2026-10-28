---
about:
  depiction: articles/hazeleger-digital-twins-of-the-earth.jpg
  depiction_credit: 'Figure 1 of the paper, by A.-K. Pahker: what a digital twin of the Earth takes in, what it gives back, and the governance and interactivity around it. Hazeleger et al. 2024, CC BY-NC-ND 4.0.'
  label: Digital twins of the Earth with and for humans
  description: >-
    Twenty-eight scientists argue that digital twins of the Earth must model
    human behaviour and be governed openly by the people who use them.
  tags:
    - Earth system
    - climate
    - governance
    - human behaviour
    - co-creation
    - open science
    - paper
article:
  url: 'https://doi.org/10.1038/s43247-024-01626-x'
  published: '2024-08-27'
  publisher: Communications Earth & Environment (Nature Portfolio)
  authors:
    - W. Hazeleger
    - J. P. M. Aerts
    - P. Bauer
    - M. F. P. Bierkens
    - G. Camps-Valls
    - M. M. Dekker
    - F. J. Doblas-Reyes
    - V. Eyring
    - C. Finkenauer
    - A. Grundner
    - S. Hachinger
    - D. M. Hall
    - T. Hartmann
    - F. Iglesias-Suarez
    - M. Janssens
    - E. R. Jones
    - T. Kölling
    - M. Lees
    - S. Lhermitte
    - R. V. van Nieuwpoort
    - A.-K. Pahker
    - O. J. Pellicer-Valero
    - F. P. Pijpers
    - A. Siibak
    - J. Spitzer
    - B. Stevens
    - V. V. Vasconcelos
    - F. C. Vossepoel
domains:
  - climate
relations:
  - predicate: about
    target: terms/digital-twin
  - predicate: cites
    target: engines/destination-earth
  - predicate: cites
    target: engines/nasa-earth-system-digital-twins
  - predicate: cites
    target: engines/weathernext-nvidia-earth-2
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'Digital twins of the Earth with and for humans (Communications Earth & Environment 5, 463)'
      url: 'https://doi.org/10.1038/s43247-024-01626-x'
    - title: 'Digital twins of the Earth with and for humans (PDF, 11 pages)'
      url: 'https://www.nature.com/articles/s43247-024-01626-x.pdf'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the full text of the open access PDF'
  status: draft
---

A digital twin of the Earth, as this paper defines it, is a digital representation of the Earth system across scales and domains, built to monitor it, forecast it and assess the consequences of human interventions, and to let users interact with it and question it.[^2] The European Commission's [Destination Earth](/engines/destination-earth/), [NASA's Earth System Digital Twin](/engines/nasa-earth-system-digital-twins/) and [NVIDIA's Earth-2](/engines/weathernext-nvidia-earth-2/) are the examples it names, and it says all three have a strong technological focus.[^2] The authors, 28 climate scientists, computer scientists and social scientists, mostly from Dutch and German universities and institutes, argue that this is not enough: people must be accounted for both inside the twin and outside it.[^2] The paper grew out of a Digital Twin Earth workshop at the Lorentz Center in Leiden in February 2023 and was published as a Perspective in August 2024.[^1,2]

They start with how climate information reaches people now. Global climate models are run under storylines of future society and emissions; their output cascades down into regional and sectoral models, gathering uncertainty at each step. The authors say it can take up to a decade for knowledge to flow from that scientific base into action.[^2] Many climate services involve users only at the last link of that chain.[^2] A twin, they argue, could reverse the flow, starting from what people need and value and letting them shape what information is generated in the first place.[^2] They also note that models still do not simulate clouds, convection and the boundary layer directly, so systematic biases persist. Raising resolution helps, but moderate gains can multiply computing cost by orders of magnitude, and machine learning is being used to correct coarser models more cheaply.[^2]

A twin of the Earth, as they describe it, lets users do three things: monitor the state of the system, forecast with uncertainties, and explore how it responds to interventions from global to local scales.[^2] Since most people cannot run a full Earth system model, the twin is expected to consist largely of machine-learning models and emulators of its parts, cheaper stand-ins that can answer quickly.[^2] The authors separate three kinds of user: developers and scientific users with access to high-end computing, professional users who need answers for decisions, and the general public. The last two would query the twin with low delay without touching the models or data directly.[^2]

**Humans inside the twin.** Human behaviour is poorly represented in climate models.[^2] Integrated assessment models, which couple economy, society and climate, do have feedback between them, but they are too coarse for regional and local information and not interactive enough for a twin.[^2] The authors picture the twin as a "system of systems": sectoral and economic models and agent-based models, which simulate people as agents following behavioural rules, coupled to each other and to the physical climate model.[^2] Twins of smaller places such as cities often represent human interactions in detail, for instance with agent-based models, and these could become part of an Earth twin or interact with it.[^2] For data on people they point to administrative registers, which in the Netherlands and the Scandinavian countries can map the formal network of contacts in society. They also cite contact surveys run during the COVID-19 pandemic, and censuses, which every UN member state conducts.[^2]

**Humans outside the twin.** Some of what matters, such as reflexivity, power, interest and legitimacy, cannot be captured in code. So the design has to consider how the twin meets society: who decides what goes into it, who maintains it, who gets access and who answers for decisions made with its information.[^2] Within Destination Earth, ownership and intellectual property are well defined, they write, but broader governance has had less attention.[^2] The authors advocate twins built on open science principles and the FAIR data principles, findable, accessible, interoperable and reusable, so that local knowledge and locally calibrated models can be folded in.[^2] They observe that twin development has happened mostly at knowledge-intensive institutions in the global north. Where the most expensive parts must stay restricted, users should still have a voice in how they are developed.[^2] They point to the governance of open software projects such as Mozilla, Apache and NumFOCUS as models.[^2] A box sets out three ingredients for a governance code: democracy, the rule of law and governing capacity.[^2] They suggest the World Meteorological Organization or other UN bodies could host a global governance framework.[^2]

The picture above is their Figure 1, drawn as a Lorenz butterfly. The left wing is what goes in: user values, needs and data. The right wing is what comes out: the current state, future scenarios, pathways, options, and causes, effects and uncertainties. The core between them is made of simulations, machine-learning models and emulators linking social and natural system twins, with governance above and interactivity below.[^2]

The same two questions apply to a model of a city or a river basin: where the people who live there appear in the model, and who decides how it is built and used. The paper's glossary defines terms such as intervention analysis, deep uncertainty and co-creation.[^2] [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) cites it for Destination Earth as a twin of the whole planet.[^3] The paper is open under CC BY-NC-ND 4.0, which allows its figure to be shown unaltered on this non-commercial site.[^2]
