---
about:
  label: MESSAGEix
  description: >-
    IIASA's open-source Python framework for energy-system optimisation
    models; its best-known instance is the global MESSAGEix-GLOBIOM model.
  depiction: engines/messageix.jpg
  depiction_credit: 'The eleven regions of the global MESSAGEix-GLOBIOM model. IIASA Energy, Climate, and Environment Program, message-ix-models documentation, Apache-2.0.'
  aliases:
    - MESSAGE
    - MESSAGEix-GLOBIOM
    - message_ix
  tags:
    - integrated assessment
    - energy system
    - optimisation
    - scenarios
    - Python
tool:
  form: open-source modelling framework (Python and R, GAMS solver)
  group: Energy and utilities
  homepage: 'https://docs.messageix.org/'
  licence: Apache-2.0
  cost: 'free; solving needs a GAMS licence (a free demonstration licence covers the tutorials)'
open:
  source: open
  data: unknown
  api: 'yes'
  participation: open
  licence: Apache-2.0
domains:
  - energy
  - climate
relations:
  - predicate: alternative_to
    target: engines/gcam
  - predicate: alternative_to
    target: engines/remind-model
provenance:
  origin: agent
  sources:
    - title: 'The MESSAGEix framework (documentation)'
      url: 'https://docs.messageix.org/en/latest/'
    - title: 'iiasa/message_ix (README)'
      url: 'https://github.com/iiasa/message_ix'
    - title: 'MESSAGEix model & framework'
      url: 'https://docs.messageix.org/en/latest/framework.html'
    - title: 'Advanced installation instructions (MESSAGEix documentation)'
      url: 'https://docs.messageix.org/en/latest/install-adv.html'
    - title: 'Overview, MESSAGEix-GLOBIOM global model (message-ix-models documentation)'
      url: 'https://docs.messageix.org/projects/models/en/latest/global/overview/index.html'
    - title: 'Regions, MESSAGEix-GLOBIOM global model (message-ix-models documentation)'
      url: 'https://docs.messageix.org/projects/models/en/latest/global/overview/spatial.html'
    - title: 'Time steps, MESSAGEix-GLOBIOM global model (message-ix-models documentation)'
      url: 'https://docs.messageix.org/projects/models/en/latest/global/overview/temporal.html'
    - title: 'The MESSAGE Integrated Assessment Model and the ix modeling platform (ixmp): An open framework for integrated and cross-cutting analysis of energy, climate, the environment, and sustainable development (Crossref record)'
      url: 'https://api.crossref.org/works/10.1016/j.envsoft.2018.11.012'
    - title: 'iiasa/message_ix releases'
      url: 'https://github.com/iiasa/message_ix/releases'
    - title: 'iiasa/message-ix-models'
      url: 'https://github.com/iiasa/message-ix-models'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; the 2019 paper was read as its Crossref record only (no abstract)'
  status: draft
---
MESSAGEix is a framework for building models of energy systems and for integrated assessment, the kind of model that ties energy, the economy, the environment and climate together.[^1,2,8] It is made by the Energy, Climate, and Environment Program of IIASA, which has developed MESSAGE models for decades.[^1,2] MESSAGE itself is a linear optimisation model for strategic energy planning: it finds the lowest-cost way to meet given demands for energy within technical and policy limits.[^2,3,5] It can be linked to MACRO, a model of the whole economy, so that energy prices feed back into how much energy people demand.[^2,3] The framework and its data platform, ixmp, are described by Huppmann and ten co-authors in Environmental Modelling & Software, 2019.[^5,8]

A model built with it describes a "reference energy system": fuel supply chains, the plants that convert primary energy into fuels and electricity, transmission and distribution, and final demand for energy services.[^3] It can track the age of each plant, early retirement, and how variable renewable energy fits into the system.[^3] It can solve with perfect foresight over the whole period or myopically, one period at a time.[^3,7] The tutorials use small single-country models; IIASA's global model is far more detailed.[^2,3]

IIASA's global model, MESSAGEix-GLOBIOM, links the energy model to the land-use model GLOBIOM, the air-pollution model GAINS, MACRO and the simple climate model [MAGICC](/engines/magicc/), and it was used to develop the Shared Socioeconomic Pathway scenarios.[^5] It divides the world into 11 regions, sometimes 14.[^6] It usually runs from 2010 to 2110 in periods of five or ten years.[^7] Its code and documentation are a separate package, message-ix-models.[^1,10]

message_ix is a Python package, fully usable from R, under the Apache-2.0 licence, installed from conda-forge or with pip.[^1,2] The model equations are written in GAMS, a commercial modelling language that needs a licence to solve.[^3,4] A free demonstration licence, available on request from GAMS, is enough for the tutorials and tests.[^4] The documentation includes the full mathematical formulation, generated from the code, and tutorials for self-study and classrooms.[^2] Published work must cite the framework.[^2] The latest release is version 3.11.1, from June 2025.[^9]

Someone building a model of a country's or region's energy system can start from the tutorials and add its own plants, fuels and demands, then compare scenarios of how that system could change under different technical limits and policies.[^2,3] For other global integrated assessment models, see [GCAM](/engines/gcam/) and [REMIND](/engines/remind-model/).
