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
One of the two Geospatial Reasoning Benchmarks that Google Research released alongside its technical report on the Google Earth AI Geospatial Reasoning Agent (arXiv 2610.15750, submitted 11 October 2026). GeoExpertQueries is a set of open-ended analytical problems of the kind a GIS analyst meets in practice, each written and cross-verified by three independent geospatial experts and paired with a consensus reference workflow.

It tests whether an agent can choose the right datasets, a sound method and the right coordinate reference system for an end-to-end analysis, rather than whether it can compute a single number. Answers are scored by an LLM judge on a three-point scale across three dimensions, in both a tool-agnostic and a tool-aware setting.

The public release holds the 25-query development split (10 solvable with the current toolset, 15 beyond it) across four domains; the 76-query test split is held back. Code is under Apache 2.0 and data under CC BY 4.0, with Google Maps data excluded from both. The authors ask that the benchmark not be used as training data.
