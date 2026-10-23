---
about:
  label: JUNE
  description: >-
    Open-source framework, kept by the IDAS-Durham group, that
    simulates epidemics through the daily life of a virtual population built
    from fine-grained census data; first applied to COVID-19 in England.
  tags:
    - epidemic model
    - agent-based
    - synthetic population
    - census
    - England
tool:
  form: open-source Python framework
  group: People and populations
  homepage: 'https://github.com/IDAS-Durham/JUNE'
  licence: GPL-3.0
  cost: free; needs an MPI installation
domains:
  - people
  - places
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: GPL-3.0
  note: Input data for England is built from Office for National Statistics tables and downloaded by a script.
relations:
  - predicate: alternative_to
    target: engines/openabm-covid19
provenance:
  origin: agent
  sources:
    - title: 'IDAS-Durham/JUNE (README)'
      url: 'https://github.com/IDAS-Durham/JUNE'
    - title: 'June: open-source individual-based epidemiology simulation (Crossref record)'
      url: 'https://api.crossref.org/works/10.1098/rsos.210506'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
JUNE builds a virtual population of a country from census data at fine geographic detail, with each person given an age, sex, ethnicity and socio-economic indicators. An infection then spreads through the groups they spend their days in: households, schools, workplaces and other social activities. How people mix within each group follows social mixing matrices. Diseases are described by a set of parameters, so the framework is not tied to one virus. It is named after June Almeida, the Scottish virologist who first identified the coronavirus group.

The code is kept by the IDAS-Durham group on GitHub, and the framework was described in Royal Society Open Science in July 2021 by Joseph Aylett-Bullock and thirteen co-authors. That paper applied it to COVID-19 in England and reports that its first outputs reproduced hospital admissions and deaths at national and regional level and by age group.

It installs from PyPI as `june`, and a script downloads the input data for England. That data mixes several Office for National Statistics datasets and may contain modifications; the original sources are cited in the release paper. Running it needs an MPI installation, the software that splits a large run across many processors, and the README carries notes for two computing clusters. A quickstart notebook introduces the model.

Development has slowed: the last tagged release was version 1.2.0 in October 2022. Using it for a country other than England means building a new population from that country's census first. The code is GPL-3.0.
