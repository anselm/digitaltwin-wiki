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
Earth Index is a search tool for satellite imagery made by Earth Genome, a US 501(c)(3) nonprofit that applies AI, science and design to environmental problems. A user marks a handful of known locations as positive or negative examples of the thing they are looking for; the tool compares those against embeddings from large Earth foundation models and returns places that look similar anywhere on the planet. The user reviews the hits, adds labels, runs again, and exports the result.

Earth Genome's own examples are large cattle operations, illegal mining in the Amazon and clandestine airstrips in the Peruvian Amazon; the site also lists waste water, road building, logging and waste sites as search targets. The organisation works with Climate TRACE on facility-level emissions, with journalists at Mongabay, and with policy makers through the Amazon Mining Watch platform. A guest post on its blog (21 September 2026) describes a second-stage classifier over Google's AlphaEarth embeddings that raised the precision of its cattle-facility detections in Germany by about 18 percentage points while keeping most of the detections.

It runs as a hosted web application with user accounts. It reads all bands of Sentinel-2 imagery, and every region of the Earth is indexed for live search. No licence or price is stated on the pages read.

Operational. Change detection with notifications, and training of detection models in the cloud, are listed as upcoming.
