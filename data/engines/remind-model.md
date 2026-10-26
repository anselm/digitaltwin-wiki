---
about:
  label: REMIND
  description: >-
    Open-source integrated assessment model from the Potsdam Institute for
    Climate Impact Research that finds the best paths for the world's economy
    and energy system under climate targets.
  aliases:
    - REgional Model of INvestments and Development
    - ReMIND-R
  tags:
    - integrated assessment
    - energy system
    - optimisation
    - scenarios
    - climate policy
tool:
  form: open-source research model (GAMS, with R for running and analysis)
  group: Energy and utilities
  homepage: 'https://www.pik-potsdam.de/en/institute/departments/transformation-pathways/models/remind'
  licence: AGPL-3.0 with the REMIND licence exception
  cost: 'free code; needs GAMS with a CONOPT solver licence, and input data not yet published'
open:
  source: open
  data: closed
  api: 'no'
  participation: open
  licence: AGPL-3.0
domains:
  - energy
  - climate
relations:
  - predicate: alternative_to
    target: engines/messageix
  - predicate: alternative_to
    target: engines/gcam
provenance:
  origin: agent
  sources:
    - title: 'REMIND (Potsdam Institute for Climate Impact Research)'
      url: 'https://www.pik-potsdam.de/en/institute/departments/transformation-pathways/models/remind'
    - title: 'remindmodel/remind (README)'
      url: 'https://github.com/remindmodel/remind'
    - title: 'Getting REMIND (tutorial 01_GettingREMIND.md)'
      url: 'https://github.com/remindmodel/remind/blob/develop/tutorials/01_GettingREMIND.md'
    - title: 'REMIND2.1: transformation and innovation dynamics of the energy-economic system within climate and sustainability limits (Crossref record)'
      url: 'https://api.crossref.org/works/10.5194/gmd-14-6571-2021'
    - title: 'remindmodel/remind releases'
      url: 'https://github.com/remindmodel/remind/releases'
    - title: 'remindmodel/remind LICENSE (REMIND License Exception)'
      url: 'https://github.com/remindmodel/remind/blob/develop/LICENSE'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; the 2021 paper was read as its abstract only'
  status: draft
---
REMIND, the REgional Model of INvestments and Development, is an integrated assessment model made at the Potsdam Institute for Climate Impact Research (PIK).[^1,2] It represents the future of the world's economies with a focus on the energy sector and what it means for the climate.[^1] It finds the mix of investments in the economy and in energy, region by region, that best serves welfare under given population, technology, policy and climate constraints, and it accounts for trade in goods, energy fuels and emissions allowances between regions.[^1,2] It covers all greenhouse gas emissions from human activity.[^1] For some questions it is run with other models, among them MAgPIE, a model of agricultural production and its effects on the environment.[^1]

It joins two kinds of model. A Ramsey-type model of economic growth with perfect foresight projects growth, saving, investment and demand for energy.[^1,2] An engineering model of the energy system offers more than 50 technologies to turn fossil, biogenic, nuclear and renewable resources into fuels and electricity and deliver them to transport, industry and buildings.[^1] It follows the age of every plant, the falling cost of new technologies as they spread, and the extra cost of building them up quickly.[^1] PIK's page says it covers twelve world regions; the 2.1 paper says the regional resolution is flexible and depends on the input data, and that the model runs from 2005 to 2100.[^1,4] The paper, by Baumstark and co-authors in Geoscientific Model Development, 2021, describes version 2.1, released as open source.[^4] Its stated strength is the scale-up of new technologies, renewables among them, and their integration into power markets.[^4]

The code is on GitHub under the GNU Affero General Public License version 3, with an added exception covering the GAMS solver libraries it needs and the open-source R packages it links to.[^2,6] Version 3.7.1 came out in September 2026.[^5] Running it needs GAMS with a licence for the CONOPT solver, and R for preparing inputs, managing runs and processing results; the team recommends at least 16 GB of memory.[^2,3] The input data are the main obstacle: the getting-started guide says they cannot yet be published because of legal issues with sharing them, though people with access to the underlying sources, such as the IEA's, can generate them with the team's help.[^3] Results come as a GAMS data file and a CSV-style .mif file that opens in a spreadsheet.[^2] Modified versions are asked to carry a suffix (REMIND-suffix), and the team recommends making the code public for any model-based publication.[^2]

REMIND's regions are large parts of the world.[^1] It speaks to a place through the pathways it produces for the world and its regions: which technologies a climate target calls for, and what policy proposals would do to growth, air pollution and land use.[^1,4] For other global integrated assessment models, see [MESSAGEix](/engines/messageix/) and [GCAM](/engines/gcam/); for a single-world cost-benefit model, see [DICE](/engines/dice-model/).
