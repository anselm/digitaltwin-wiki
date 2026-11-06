---
about:
  depiction: platforms/planet-ai-app.jpg
  depiction_credit: 'The launch image from Planet''s announcement, 5 November 2026. Planet Labs.'
  label: Planet AI app
  description: >-
    A map with a chat box over Planet's satellite archive: ask in plain
    words, and it finds matching places, shows how they changed, and writes
    a report. Free to sign up since November 2026.
  tags:
    - satellite
    - imagery
    - agent
    - natural language
    - change detection
    - embeddings
tool:
  homepage: 'https://ai.planet.com'
  form: hosted agent over a satellite archive
open:
  source: closed
  data: 'no'
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: 'Introducing the Planet AI App: Search. Explore. Act. (Karla King, Planet, 5 November 2026)'
      url: 'https://www.planet.com/pulse/introducing-the-planet-ai-app-search-explore-act/'
    - title: 'Planet is Building an Agentic Geospatial AI Query (Rachel Jewett, Via Satellite, 21 May 2026)'
      url: 'https://www.satellitetoday.com/imagery-and-sensing/2026/05/21/planet-is-building-an-agentic-geospatial-ai-query/'
    - title: 'Planet AI, the app itself'
      url: 'https://ai.planet.com'
  created: '2026-11-06'
  reviewed: '2026-11-06'
  reviewed_by: 'Claude, from the sources listed; the Ask Me Anything that Ash and Karla of Planet held on r/gis (reddit.com/r/gis/comments/1xm9wz5) could not be read, because Reddit blocks scripted reads'
  status: draft
domains:
  - places
relations:
  - predicate: alternative_to
    target: platforms/google-earth-ai-geospatial-reasoning-agent
---
The app lets someone ask Planet's satellite archive a question in plain words, on a map with a chat box.[^1] The large language models behind it read a request and search a vector map of the globe, built by having AI describe the visual features in Planet's monthly mosaics.[^1]

It does three things.[^1]

- **Search.** Describe what you are looking for, and it looks across large areas for places that match. The example in the May 2026 coverage was "Where are new construction sites appearing in Florida?"[^2]
- **Change over time.** It searches back through more than ten years of imagery to find what changed at a site and when, and shows side-by-side pairs or timelapses.[^1]
- **Analysis.** A "Deep Research" agent runs longer analyses. Users can upload their own images or CSV files, track a trend on a schedule, and get reports by the same schedule.[^1] In Via Satellite's description, the report embeds the satellite images it rests on.[^2]

Planet says every result is grounded in imagery the user can inspect, to check what the AI found.[^1]

Neither source describes a forecast, a simulation, or a measured quantity with an uncertainty attached.[^1,2] Google's [Geospatial Reasoning agent](/platforms/google-earth-ai-geospatial-reasoning-agent/) is the nearest comparison: it also takes a question in plain words, but it calls forecasting and population models as well as data. Neither source names the language models or the method behind the vector map.[^1,2]

It was in private beta in May 2026.[^2] Planet opened it on 5 November 2026: anyone can sign up, it is free for now, and signing in with a Planet Insights account is expected to give easier access to premium features later.[^1] It works on desktop and phone, and snapshots and timelapses can be shared.[^1]
