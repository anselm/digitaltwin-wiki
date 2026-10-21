---
about:
  label: GeoExpertQueries
  description: >-
    Benchmark from Google Research of open-ended GIS analysis problems written
    and cross-checked by geospatial experts, used to test how well an AI agent
    plans an expert-level spatial analysis.
  tags:
    - benchmark
    - gis
    - ai agents
    - geospatial reasoning
    - evaluation
datasource:
  homepage: 'https://github.com/google-research/geospatial-reasoning-benchmarks'
open:
  source: open
  data: partly
  api: unknown
  participation: unknown
  licence: 'Apache 2.0 (code); CC BY 4.0 (data)'
provenance:
  origin: agent
  sources:
    - title: google-research/geospatial-reasoning-benchmarks
      url: 'https://github.com/google-research/geospatial-reasoning-benchmarks'
    - title: Introducing our experimental Geospatial Reasoning agent
      url: 'https://sites.research.google/gr/geospatial-reasoning/'
    - title: >-
        Google Earth AI Geospatial Reasoning Agent: Capabilities and a
        Systematic Evaluation
      url: 'https://arxiv.org/abs/2610.15750'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT013
  kind: benchmark
  family: research_and_evaluation
  priority: supporting
  verified: true
  posts:
    - P003
  posters:
    - Yossi Matias
domains:
  - places
relations:
  - predicate: about
    target: engines/google-earth-ai-geospatial-reasoning-agent
    note: evaluates (source_claim; exact implementation not independently tested)
---
It is one of two Geospatial Reasoning Benchmarks released with Google Research's technical report on the Google Earth AI Geospatial Reasoning Agent (arXiv 2610.15750, submitted 11 October 2026). Each problem is of the kind a GIS analyst meets in practice. Three independent geospatial experts wrote and cross-verified each problem, and each is paired with a consensus reference workflow.

The benchmark tests whether an agent chooses the right datasets, a sound method and the right coordinate reference system (the system that ties map coordinates to places on Earth) for an end-to-end analysis. A language model acting as judge scores each answer on a three-point scale across three dimensions. Scoring runs in two settings, one tool-agnostic and one tool-aware.

The public release holds the 25-query development split (10 solvable with the current toolset, 15 beyond it) across four domains. The 76-query test split is held back. Code is under Apache 2.0 and data under CC BY 4.0, with Google Maps data excluded from both. The authors ask that the benchmark not be used as training data.
