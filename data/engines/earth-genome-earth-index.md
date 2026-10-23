---
about:
  label: Earth Genome / Earth Index
  description: >-
    Earth Genome's hosted search tool for satellite imagery; a user labels a
    few known sites and it finds similar places anywhere on Earth, for
    detecting mines, cattle facilities, airstrips and other land change.
  tags:
    - satellite imagery
    - foundation models
    - environmental monitoring
tool:
  form: Nonprofit application and research
  group: Earth observation and AI
  homepage: 'https://www.earthgenome.org/earth-index'
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
domains:
  - food
relations:
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: 'Earth Index | Search the Earth, in minutes'
      url: 'https://www.earthgenome.org/earth-index'
    - title: Earth Genome
      url: 'https://www.earthgenome.org/'
    - title: Two Foundation Models Are Better Than One
      url: 'https://www.earthgenome.org/blog/two-foundation-models-are-better-than-one'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: proposed
---
Earth Genome, the maker, is a US 501(c)(3) nonprofit that works on environmental problems with AI, science and design.[^1,2] A user of Earth Index marks a handful of known locations as positive or negative examples of what they are looking for, and the tool compares these with embeddings from large Earth foundation models and returns similar-looking places.[^1,2] Embeddings are compact numerical summaries of each patch of imagery, produced by AI models trained on large amounts of satellite data.[^1,3] The user reviews the hits, adds labels, runs the search again and exports the result.[^1]

Earth Genome's examples are large cattle operations, illegal mining in the Amazon and clandestine airstrips in the Peruvian Amazon.[^1] Other listed search targets are waste water, road building, logging and waste sites.[^1] The organisation works with Climate TRACE on facility-level emissions, with journalists at Mongabay, and with policy makers through Amazon Mining Watch.[^2] A guest post on its blog (21 September 2026) describes a second-stage classifier run over Google's AlphaEarth embeddings.[^3] In Germany it raised the precision of cattle-facility detections (the share of hits that are correct) by about 18 percentage points while keeping most of the detections.[^3]

Earth Index is a hosted web application with user accounts.[^1] It reads every band of Sentinel-2 imagery, and every region of the Earth is indexed for live search.[^1] Pricing is not published. Change detection with notifications, and training of detection models in the cloud, are listed as upcoming.[^1]
