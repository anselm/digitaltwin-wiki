---
about:
  label: synthpop
  description: >-
    R package, written at the University of Edinburgh for the UK
    longitudinal studies, that makes synthetic copies of confidential
    individual-level data so the copy can be shared and analysed in place of
    the original.
  tags:
    - synthetic data
    - microdata
    - disclosure control
    - privacy
    - R
tool:
  form: open-source R package (CRAN)
  group: People and populations
  homepage: 'https://www.synthpop.org.uk/'
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
provenance:
  origin: agent
  sources:
    - title: 'synthpop'
      url: 'https://www.synthpop.org.uk/'
    - title: 'synthpop - About synthpop'
      url: 'https://www.synthpop.org.uk/about-synthpop.html'
    - title: 'synthpop - Resources'
      url: 'https://www.synthpop.org.uk/resources.html'
    - title: 'CRAN: Package synthpop'
      url: 'https://cran.r-project.org/package=synthpop'
    - title: 'bnowok/synthpop'
      url: 'https://github.com/bnowok/synthpop'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
synthpop solves a different problem from a population synthesiser. It starts from a real, confidential table of individuals, such as a longitudinal study, and produces a synthetic version: every value replaced by an invented one, but with the same statistical relationships between columns. The synthetic table can be released with fewer restrictions than the original, used for teaching, or used by a researcher to write and test an analysis before running it on the real data. The makers recommend confirming results on the original data.

It was written for the SYLLS project (Synthetic Data Estimation for UK Longitudinal Studies), funded by the UK Economic and Social Research Council, so that support staff of the UK longitudinal studies could produce synthetic data tailored to each research project. During its main development the core team, Gillian Raab, Beata Nowok and Chris Dibben, was at the University of Edinburgh and the Scottish Centre for Administrative Data Research. Beata Nowok maintains it.

The method works one column at a time. The first variable is sampled from its observed values; each later variable is drawn from a model fitted on the variables before it. By default those models are classification and regression trees, with parametric models as alternatives. Defaults exist for most settings, but the makers say that useful synthetic data needs them set to suit the data. Recent versions add functions to measure disclosure risk and two methods for differentially private synthesis of categorical data, a formal guarantee that limits how much any one person's record can change the output. In the makers' tests on ten datasets, the first did not give data of adequate quality for any of them, while the other gave usable data for most.

For a model of a place, synthpop is the tool for making a shareable stand-in of a sensitive local survey, not for building a population from census totals. It is GPL-2 or GPL-3, installed from CRAN, and active: version 1.9-3 came out on 10 September 2026. The reference paper is Nowok, Raab and Dibben (2016) in the Journal of Statistical Software.
