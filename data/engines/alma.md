---
about:
  label: ALMA
  description: >-
    A simulated population of more than five million New Zealanders built by
    PHF Science, the New Zealand Institute for Public Health and Forensic
    Science, from over 30 government datasets and used to model a measles
    outbreak.
  tags:
    - synthetic population
    - public health
    - measles
    - New Zealand
    - policy testing
tool:
  form: in-house simulation platform, offered as a service
  group: People and populations
  homepage: 'https://www.phfscience.nz/expertise/data-science-ai/alma'
  cost: unknown; by arrangement with PHF Science
domains:
  - people
  - places
open:
  source: closed
  data: closed
  api: unknown
  participation: closed
  note: No public code, data or licence; access is by contacting the PHF Science data science team.
provenance:
  origin: agent
  sources:
    - title: 'ALMA (PHF Science)'
      url: 'https://www.phfscience.nz/expertise/data-science-ai/alma'
    - title: 'Digital twin (PHF Science)'
      url: 'https://www.phfscience.nz/expertise/data-science-ai/digital-twin/'
    - title: 'ALMA digital twin lets New Zealand test what-if scenarios before they happen'
      url: 'https://www.phfscience.nz/news-publications/alma-digital-twin-lets-new-zealand-test-what-if-scenarios-before-they-happen/'
    - title: 'Digital Twin maps NZ population for public health planning (eHealthNews.nz)'
      url: 'https://www.hinz.org.nz/news/718913'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
ALMA, short for Aotearoa's Large Scale Multi-Agent simulator, is a model of the whole of New Zealand in which every resident is stood in for by a simulated person.[^1,3] There are more than five million of them.[^3] Each carries over 80 attributes, including age, gender, ethnicity, household and workplace.[^1] Each has a "life diary" that moves them through time and space across the country's geography.[^3] The population is built from more than 30 datasets supplied by government agencies and seeded from suburb-level figures, and PHF Science states that no individual's personal data is used.[^1]

PHF Science is the New Zealand Institute for Public Health and Forensic Science.[^1] Its data science team built ALMA, which grew out of the institute's COVID-19 modelling[^3], and it works closely with New Zealand's Public Health Agency and other partners.[^1] The data science lead, Alvaro Orsi, presented it at Digital Health Week NZ in November 2025.[^4] The institute has also built a separate twin of Tonga for studying resilience to climate change.[^4]

The published use is measles. ALMA has been used to model the impact of a measles outbreak and the country's resilience to one, so that officials can try policy responses on the simulated population first.[^1,4] Neither PHF Science's pages nor the January 2026 news report give results.[^1,3,4] Other intended uses are evaluating vaccination campaigns and distancing, climate resilience, urban planning, the effect of economic shocks on businesses, and supply chains.[^1] It describes the analysis as combining time series models with causal discovery, methods that try to work out which factors drive which.[^1,3]

ALMA is not open. The pages point to no public code, dataset, method paper or licence, and they offer a demonstration on request.[^1] That makes it an example of what a national population twin run by a public agency looks like, rather than a tool others can pick up. Its accuracy cannot be judged from what is published.
