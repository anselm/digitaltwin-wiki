---
about:
  label: Covasim and Starsim
  description: >-
    Open-source Python agent-based disease models from the Institute for
    Disease Modeling and partners; Covasim simulated COVID-19 through
    households, schools and workplaces for policy work in more than a dozen
    countries, and is now part of the broader Starsim framework.
  tags:
    - epidemic model
    - agent-based
    - COVID-19
    - public health
    - Python
tool:
  form: open-source Python library
  group: People and populations
  homepage: 'https://starsim.org'
  licence: MIT
  cost: free
domains:
  - people
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: MIT
  note: Installed with pip; Covasim also has a web app at app.covasim.org.
provenance:
  origin: agent
  sources:
    - title: 'starsimhub/covasim (README)'
      url: 'https://github.com/starsimhub/covasim'
    - title: 'Covasim: An agent-based model of COVID-19 dynamics and interventions (Crossref record)'
      url: 'https://api.crossref.org/works/10.1371/journal.pcbi.1009149'
    - title: 'Starsim'
      url: 'https://starsim.org'
    - title: 'starsimhub/starsim (README)'
      url: 'https://github.com/starsimhub/starsim'
    - title: 'starsimhub/covasim release v4.0.1'
      url: 'https://github.com/starsimhub/covasim/releases/tag/v4.0.1'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Covasim (COVID-19 Agent-based Simulator) builds a population of simulated people with ages and household sizes drawn from a country's demographic data.[^1,2] It links them in contact networks for households, schools, workplaces, long-term care homes and the wider community, and the virus passes along those links.[^2] Each run projects indicators such as infections and peak hospital demand.[^1] Its main use is comparing interventions: distancing, school closures, testing, contact tracing, quarantine and vaccination, including delays and people lost to follow-up.[^1,2]

The Institute for Disease Modeling (IDM) built it, with the University of Copenhagen, the Burnet Institute, GitHub and Microsoft.[^1] The model paper appeared in PLOS Computational Biology in July 2021.[^2] According to its makers it was used to inform policy decisions in the US, UK and Australia, among more than a dozen countries; published studies cover test-trace-quarantine, school reopening in the UK and border reopening in Vietnam.[^1] It is written in pure Python, and a realistic scenario runs on a laptop in under a minute.[^2]

Covasim is now part of Starsim, a general framework for agent-based disease models.[^1,3] IDM, the Burnet Institute and other collaborators develop it, and version 1.0 launched in July 2024.[^3] Starsim handles several diseases at once, both infectious and not, and other health states such as pregnancy.[^4] Models built on it cover HIV, HPV and syphilis, tuberculosis, RSV, Ebola, cholera, family planning and malnutrition.[^4] It runs in Python or R.[^3] Covasim 4.0.1 came out in October 2026, and the README offers help to anyone moving from version 3.[^1,5]

Both install with pip and come with tutorials, including how to calibrate a model to case data and how to build a custom population.[^1,3] Covasim comes with no promise of support or that the code works as intended.[^1] A model is only as good as its contact networks and parameters, and these are generic unless the user supplies local data. Both are MIT-licensed.[^1,3]
