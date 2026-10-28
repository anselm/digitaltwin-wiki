---
about:
  depiction: engines/naavre.jpg
  depiction_credit: 'Ecosystem height and structural complexity across the Netherlands, from national airborne laser scanning (AHN3), produced by the LiDAR workflow in the NaaVRE paper. Zhao et al., arXiv 2111.12785, CC BY 4.0.'
  label: NaaVRE
  description: >-
    Open-source platform from LifeWatch ERIC and the University of
    Amsterdam that makes Jupyter notebook code into shared cloud workflows,
    organised in virtual labs.
  aliases:
    - Notebook as a Virtual Research Environment
  tags:
    - virtual lab
    - Jupyter
    - workflows
    - cloud computing
    - Python
    - R
tool:
  form: open-source virtual research environment
  group: Research infrastructure
  homepage: 'https://naavre.net/'
  licence: Apache-2.0
  cost: unknown
domains:
  - ecology
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: Apache-2.0
  note: >-
    Most component repositories in the NaaVRE GitHub organisation are
    Apache-2.0. The hosted platform asks users to sign in with Google, through
    EOSC, or with a registered account.
provenance:
  origin: agent
  sources:
    - title: NaaVRE
      url: 'https://naavre.net/'
    - title: About NaaVRE
      url: 'https://naavre.net/docs/about/'
    - title: Get started with the NaaVRE tutorial
      url: 'https://naavre.net/docs/tutorials/'
    - title: 'NaaVRE/NaaVRE-architecture (README)'
      url: 'https://github.com/NaaVRE/NaaVRE-architecture'
    - title: 'NaaVRE (GitHub organisation)'
      url: 'https://github.com/NaaVRE'
    - title: 'Notebook-as-a-VRE (NaaVRE): From private notebooks to a collaborative cloud virtual research environment (Software: Practice and Experience 52(9), 1947-1966, 2022)'
      url: 'https://doi.org/10.1002/spe.3098'
    - title: 'Notebook-as-a-VRE (NaaVRE): from private notebooks to a collaborative cloud virtual research environment (arXiv preprint 2111.12785, CC BY 4.0)'
      url: 'https://arxiv.org/abs/2111.12785'
    - title: LTER-LIFE Experience
      url: 'https://lter-life.nl/en/lter-life-experience'
    - title: 'LTER-LIFE (GitHub organisation)'
      url: 'https://github.com/LTER-LIFE'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the sources listed; the journal paper through its OpenAlex abstract and the arXiv preprint, since the publisher blocks scripted reads'
  status: draft
---
NaaVRE, short for Notebook as a Virtual Research Environment, is a platform for turning code written in Jupyter notebooks into workflows that a team can share and run in the cloud.[^1] A Jupyter notebook is a page in the browser that mixes code, text and results. In NaaVRE a researcher writes Python or R in a notebook, turns cells into containerised workflow components, chains them into a workflow, and runs it on a workflow engine, now or on a schedule. Notebooks, components, workflows and results can be shared with a team or a wider community.[^1,2] Work is organised in virtual labs, shared workspaces for one purpose or community, each with its own software libraries, interfaces and workflow building blocks.[^1] LifeWatch ERIC offers it as a hosted platform, and its development is partly supported by the University of Amsterdam and LifeWatch ERIC.[^1]

It was described in 2022 by Zhiming Zhao and ten co-authors from the University of Amsterdam and LifeWatch ERIC.[^6,7] The paper starts from a gap: notebooks are good for trying out scientific code, but they do not help run heavy computations on remote machines or find code others have written, so the authors embed a virtual research environment inside Jupyter.[^6] Their demonstration took an existing workflow that derives ecosystem structure from airborne laser scanning (LiDAR) point clouds and scaled it out in the cloud, so it could handle multi-terabyte country-wide surveys.[^6] The maps above, of ecosystem height and structural complexity across the Netherlands from the third national survey (AHN3), come from that workflow.[^7]

To use it, open the platform at beta.naavre.net and sign in with Google, through the EOSC federation (which offers GitHub, ORCID and other logins), or with a registered account. Then pick a virtual lab, such as the NaaVRE Open Lab for the tutorial, and launch your own instance, which opens in JupyterLab.[^3] Groups can propose a virtual lab of their own.[^1] Behind it, the system is a set of microservices with JupyterLab extensions on top, deployed on Kubernetes.[^4] The code is on GitHub, where most component repositories are Apache-2.0 and several had commits in October 2026.[^5]

[LTER-LIFE](/organizations/lter-life/), the Dutch infrastructure for digital twins of ecosystems, lists NaaVRE among its services and is developing it further for building twins.[^8] Its GitHub holds NaaVRE virtual labs for a forest landscape model of the Veluwe and for its NatureDataCube data service.[^9] [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) cites the NaaVRE paper when it describes virtual labs as a place to assemble an ecosystem's data and models into a twin.[^10]

For a group modelling a place, NaaVRE is a way to move analyses kept in individual notebooks into shared workflows. Because they can run on a schedule, a model can be refreshed as new data arrive without someone rerunning it by hand.
