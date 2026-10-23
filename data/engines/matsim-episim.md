---
about:
  label: MATSim EpiSim
  description: >-
    Open-source epidemic simulation from TU Berlin that adds an infection
    model to MATSim's simulated daily movements, so infections happen where
    simulated people actually meet; validated against COVID-19 in Berlin.
  tags:
    - epidemic model
    - agent-based
    - COVID-19
    - mobility
    - Berlin
tool:
  form: open-source Java extension to MATSim
  group: People and populations
  homepage: 'https://github.com/matsim-org/matsim-episim-libs'
  licence: AGPL-3.0
  cost: free
domains:
  - people
  - mobility
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: AGPL-3.0
  note: Berlin results were published at covid-sim.info.
relations:
  - predicate: built_on
    target: engines/matsim
  - predicate: alternative_to
    target: engines/june
provenance:
  origin: agent
  sources:
    - title: 'matsim-org/matsim-episim (README)'
      url: 'https://github.com/matsim-org/matsim-episim'
    - title: 'matsim-org/matsim-episim-libs (GitHub repository)'
      url: 'https://github.com/matsim-org/matsim-episim-libs'
    - title: 'EpiSim with MATSim'
      url: 'https://matsim.org/news/2020/episim-with-matsim/'
    - title: 'Predicting the effects of COVID-19 related interventions in urban settings by combining activity-based modelling, agent-based simulation, and mobile phone data (Crossref record)'
      url: 'https://api.crossref.org/works/10.1371/journal.pone.0259037'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
EpiSim takes the output of a [MATSim](/engines/matsim/) transport simulation, a record of where every simulated person was and when over a day, and runs an epidemic on top of it.[^1,3] Two people who are in the same place at the same time can infect each other.[^3] The chance depends on how long they were together, the size of the room and how often its air is changed, whether they wore masks, and whether they were indoors or out.[^3,4] Infected people then follow a disease course taken from the literature, through symptoms, hospital, intensive care and quarantine.[^3]

The Transport Systems Planning and Transport Telematics group at Technische Universität Berlin built it during the COVID-19 pandemic and announced it in October 2020.[^1,3] The main paper, by Sebastian A. Müller, Kai Nagel and six co-authors, appeared in PLOS ONE in October 2021.[^4] It describes a model of Berlin validated against the city's infection curve, in which changes in how often people went out came from mobile phone data.[^4] The model estimated the effect of contact reductions, school closures and holidays, masks, and leisure moving indoors in autumn.[^4] One finding is that cutting contacts has diminishing returns: the first half of the reduction does much more than the second.[^4] The authors write that the results can be used to inform political decisions.[^4]

The core code is a Java library under AGPL-3.0, with a separate example project that runs a provided Berlin scenario and shows how to make an input file from any existing MATSim scenario.[^1,2] A user needs Java and Maven, and a MATSim run of their own region is the large piece of work.[^1] The repository is still being updated as of October 2026.[^2]

What sets EpiSim apart from epidemic models built on contact matrices is that the contacts come from a model of people's daily routes and activities.[^4] Its limit is the same: it is only as good as the transport model underneath.
