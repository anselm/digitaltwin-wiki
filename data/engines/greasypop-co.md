---
about:
  label: GREASYPOP-CO
  description: >-
    Open research code that builds a synthetic population of any US
    area from census data, down to the census block group, with schools,
    workplaces and a network of who meets whom at home, school and work.
  tags:
    - synthetic population
    - contact network
    - epidemics
    - United States
    - census
    - Julia
tool:
  form: open-source research code (Python, Julia, R)
  group: People and populations
  homepage: 'https://github.com/CDDEP-DC/GREASYPOP-CO'
  licence: AGPL-3.0
  cost: free; needs a free Census API key
domains:
  - people
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: AGPL-3.0
relations:
  - predicate: built_on
    target: data-sources/census-apis
    note: downloads American Community Survey and PUMS tables through the Census API
provenance:
  origin: agent
  sources:
    - title: 'CDDEP-DC/GREASYPOP-CO (README)'
      url: 'https://github.com/CDDEP-DC/GREASYPOP-CO'
    - title: 'Generating geographically and economically realistic large-scale synthetic contact networks: A general method using publicly available data (arXiv:2406.14698)'
      url: 'https://arxiv.org/abs/2406.14698'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
GREASYPOP-CO stands for Geographically REAlistic SYnthetic POPulation using Combinatorial Optimization.[^1] It builds a synthetic population of people and households for any chosen area of the United States, at the level of the census block group.[^1] It then places people in schools and workplaces and connects them into a contact network: a list of who is in regular contact with whom at home, at school, at work and in group quarters.[^1] Disease models use networks like this to decide who can infect whom.[^2]

The authors are Alexander Tulchinsky, Fardad Haghpanah, Alisa Hamilton, Nodar Kipshidze and Eili Klein, and the code is published under the GitHub account CDDEP-DC.[^1,2] Their 2024 preprint describes the method and tests it on two census regions. It reports that the synthetic populations match the source data, and that networks built this way spread disease at different rates in a simulation from networks built without a synthetic population.[^2]

First it chooses real households from the census microdata sample (PUMS) so that each block group matches its American Community Survey tables.[^1,2] Workers go to workplaces, grouped by industry, using commuting data (LODES) and employer-size counts.[^1,2] Students go to public schools using national school location and enrolment data.[^1,2] The network is generated last.[^1,2] Some inputs download automatically with a Census API key, others by hand.[^1] It needs R, Python and Julia, and writes people and households to CSV and the network as a sparse matrix.[^1]

The README is plain about limits. The network covers only household, school, workplace and group-quarters contacts, so other kinds of contact must be added for most uses.[^1] The manual data route works only with 2010 to 2019 census formats.[^1] The code is AGPL-3.0, released as v0.2 in June 2024, and has had no commits since September 2024.[^1]
