---
about:
  label: GeoKTools
  description: >-
    Benchmark from Google Research of generated geospatial queries with known
    answers that require chaining one to four kinds of geospatial tool; used to
    test an AI agent's multi-step tool use and exact spatial computation.
  tags:
    - benchmark
    - tool use
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
  id: DT014
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
One of the two Geospatial Reasoning Benchmarks that Google Research released alongside its technical report on the Google Earth AI Geospatial Reasoning Agent (arXiv 2610.15750, submitted 11 October 2026). GeoKTools is a set of programmatically generated queries, each with a ground-truth answer from a deterministic reference solver, that vary the number K of tool families (one to four) an agent must chain to answer.

It measures whether an agent can compose several geospatial tools in sequence and arrive at an exact numerical or spatial result. An exact match scores full credit; otherwise an element-wise LLM judge is used, and a deterministic offline scorer is also supplied, with partial credit for near-miss numbers and string overlap.

The public release holds 85 development queries from 19 templates; the 210-query test split from 72 templates is held back. Code is under Apache 2.0 and data under CC BY 4.0, with Google Maps data excluded from both. The authors ask that the benchmark not be used as training data.
