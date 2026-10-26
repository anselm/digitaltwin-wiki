---
about:
  label: CoMSES Net Computational Model Library
  description: >-
    Open library where researchers publish the code and documentation of
    agent-based models of people and ecosystems; models that pass its peer
    review get a citable DOI.
  tags:
    - agent-based
    - model repository
    - peer review
    - reproducibility
    - social-ecological systems
tool:
  form: open model repository and research community
  group: Research infrastructure
  homepage: 'https://www.comses.net/'
  licence: 'set by each model''s authors; site code Apache-2.0'
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: 'each model release declares its own licence'
domains:
  - people
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'CoMSES Net'
      url: 'https://www.comses.net/'
    - title: 'About CoMSES Net / OpenABM'
      url: 'https://www.comses.net/about/'
    - title: 'CoMSES Net Computational Model Library'
      url: 'https://www.comses.net/codebases/'
    - title: 'CoMSES Net Computational Model Library (peer reviewed models)'
      url: 'https://www.comses.net/codebases/?peer_review_status=reviewed'
    - title: 'Frequently Asked Questions'
      url: 'https://www.comses.net/about/faq/'
    - title: 'CoMSES Net Computational Library Peer Review'
      url: 'https://www.comses.net/reviews/'
    - title: 'Publishing your model: 1. Getting Started'
      url: 'https://forum.comses.net/t/publishing-your-model-1-getting-started/7377'
    - title: 'comses/comses.net (GitHub)'
      url: 'https://github.com/comses/comses.net'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
CoMSES Net (the Network for Computational Modeling in the Social and Ecological Sciences) is an open community of researchers, educators and professionals working to improve how computational models of social and ecological systems are developed, shared and reused.[^2] The library's main kind is the agent-based model, which simulates a population of individual agents and their interactions to see what larger patterns, such as cooperation or segregation, emerge.[^5] The network maintains the Computational Model Library, is governed by an international executive board under its own by-laws, and its About page also carries the name OpenABM.[^2] The paper to cite for it is Janssen and co-authors, "Towards a Community Framework for Agent-Based Modelling", in the Journal of Artificial Societies and Social Simulation, 2008.[^2]

On 26 October 2026 the library listed 1,333 models, 201 of them peer reviewed.[^3,4] Besides agent-based models it takes geosimulation, cellular automata and dynamic network models.[^5] Each release carries the model's code and a separate narrative description, along with its platform, programming language and licence, and can include input data and simulation output.[^7] The ODD protocol, a standard outline for describing an agent-based model, is recommended for the description but not required.[^5] Models can be searched by tag, author, date and keywords in their description and code.[^5] Anyone using a model from the library must cite its authors.[^3]

Authors can ask for a model to be peer reviewed.[^6] Reviewers check that the model can be run with reasonable effort and that its code is readable.[^6] It must also come with standalone documentation, ideally detailed enough for another modeller to replicate it.[^6] Reviewers are not asked to judge its science or whether its outputs are valid.[^6] A model that passes gets a badge and a DOI, a permanent identifier for citing it, which CoMSES Net can issue as a DataCite member.[^5,6] Models that have not been reviewed may not run, often because the software they depend on has moved on.[^5] Publishing needs a CoMSES Net membership and a signed-in account, and published models are generally not removed.[^5] The site is hosted by the Digital Research Alliance of Canada, and the network says it has set aside funds to move the collection to another repository such as Zenodo or the Open Science Framework if it ever has to stop.[^5] The site's own code is on GitHub under Apache-2.0.[^8]

Someone starting a model of a place can look here first for a model of a similar problem and start from its code and documentation. A recent addition, for example, simulates a closed aquaponics system and tracks its nitrogen cycle.[^3] For building one, CoMSES Net names [NetLogo](/engines/netlogo/), Repast, [Mesa](/engines/mesa/), MASON and Cormas among the software frameworks for agent-based models.[^5]
