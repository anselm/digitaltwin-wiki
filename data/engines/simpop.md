---
about:
  label: simPop
  description: >-
    R package by Matthias Templ and colleagues that simulates a full
    synthetic population from a survey sample and census totals, developed
    with support from the World Bank and the IHSN.
  tags:
    - synthetic population
    - survey data
    - census
    - microdata
    - R
tool:
  form: open-source R package (CRAN)
  group: People and populations
  homepage: 'https://github.com/statistikat/simPop'
  licence: GPL-2 or GPL-3
  cost: free
domains:
  - people
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: GPL-2 or GPL-3
relations:
  - predicate: alternative_to
    target: engines/populationsim
provenance:
  origin: agent
  sources:
    - title: 'statistikat/simPop (README)'
      url: 'https://github.com/statistikat/simPop'
    - title: 'CRAN: Package simPop'
      url: 'https://cran.r-project.org/package=simPop'
    - title: 'Synthetic Populations | IHSN'
      url: 'https://www.ihsn.org/projects/synthetic-populations'
    - title: 'Simulation of Synthetic Complex Data: The R Package simPop (Crossref record)'
      url: 'https://api.crossref.org/works/10.18637/jss.v079.i10'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
simPop is an R package that turns a household survey into a synthetic population: a complete, invented set of people and households that keeps the statistical shape of the survey and of known census totals. Researchers use this kind of file when they want to run an agent-based or micro-level model of a country or region but cannot release, or do not have, a record for every resident.

The main authors are Matthias Templ, Alexander Kowarik, Bernhard Meindl and Andreas Alfons; the code is kept on GitHub under the statistikat account. The International Household Survey Network (IHSN) and the World Bank's Development Data Group backed its development to encourage the use of existing survey and census microdata for agent-based simulation, funded through a DFID trust fund administered by the World Bank. The IHSN describes synthetic data as largely solving the risk of disclosing real respondents, and as a way to fuse data from several sources.

The package combines model-based methods, calibration and combinatorial optimisation. You install it from CRAN and work in R. The method is described in a 2017 paper in the Journal of Statistical Software by Templ, Meindl, Kowarik and Olivier Dupriez.

It is licensed GPL-2 or GPL-3. The CRAN release is 2.1.3 from January 2024; the GitHub repository carries a slightly newer 2.1.4 and its last commit was in January 2026, so it is maintained but quiet. The IHSN project page marks the World Bank project itself as closed, with follow-up activities.
