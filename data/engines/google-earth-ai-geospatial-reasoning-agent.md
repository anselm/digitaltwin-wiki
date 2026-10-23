---
about:
  depiction: engines/google-earth-ai-geospatial-reasoning-agent.jpg
  label: Google Earth AI Geospatial Reasoning agent
  description: >-
    Experimental Gemini-based agent from Google Research that plans a
    multi-step spatial analysis, calls Earth AI models and geospatial data
    sources, and returns the result with its plan and sources shown.
  tags:
    - geospatial
    - agent
    - gemini
    - satellite
    - analysis
    - gis
tool:
  homepage: 'https://sites.research.google/gr/geospatial-reasoning/'
  form: experimental agent
  group: Earth observation and AI
open:
  source: closed
  data: unknown
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: Geospatial Reasoning
      url: 'https://sites.research.google/gr/geospatial-reasoning/'
    - title: 'Putting Earth AI to work: Geospatial agents for our planet''s biggest challenges'
      url: >-
        https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/
    - title: >-
        [2610.15750] Google Earth AI Geospatial Reasoning Agent: Capabilities
        and a Systematic Evaluation
      url: 'https://arxiv.org/abs/2610.15750'
    - title: 'Google Earth AI Geospatial Reasoning Agent: Capabilities and a Systematic Evaluation'
      url: >-
        https://research.google/pubs/google-earth-ai-geospatial-reasoning-agent-capabilities-and-a-systematic-evaluation/
    - title: 'Google Earth AI: Unlocking geospatial insights with foundation models and cross-modal reasoning'
      url: >-
        https://research.google/blog/google-earth-ai-unlocking-geospatial-insights-with-foundation-models-and-cross-modal-reasoning/
    - title: 'Planetary prediction engine: Automating global models via Earth AI'
      url: >-
        https://research.google/blog/planetary-prediction-engine-automating-global-models-via-earth-ai/
    - title: Google Earth AI — Google AI
      url: 'https://ai.google/earth-ai'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT011
  kind: research_agent
  family: knowledge_and_agents
  priority: high
  verified: true
  posts:
    - P003
    - P018
    - P023
  posters:
    - Yossi Matias
    - Luke Barrington
    - Shravya Shetty
domains:
  - places
  - people
  - climate
  - energy
relations:
  - predicate: part_of
    target: engines/google-earth-ai
    note: component of (source_claim; exact implementation not independently tested)
  - predicate: built_on
    target: engines/weathernext-nvidia-earth-2
    note: >-
      uses component (source_claim; exact implementation not independently
      tested)
  - predicate: built_on
    target: engines/alphaearth-prithvi
    note: >-
      uses component (source_claim; exact implementation not independently
      tested)
  - predicate: built_on
    target: engines/population-dynamics-foundations-pdfm
    note: >-
      uses component (source_claim; exact implementation not independently
      tested)
---
The agent is the orchestrating part of Google Earth AI.[^3,5] Given a question in plain language, it drafts a step-by-step plan, calls modular skills that each wrap an Earth AI model or a data source, and combines the results.[^2,5] The models include WeatherNext, flood forecasting, the Population Dynamics Foundation Model, AlphaEarth Foundations and Remote Sensing Foundations.[^2] The data sources include Earth Engine, Data Commons and BigQuery public datasets.[^2,5]

Each answer lists its plan and the data used, so a specialist can check the work.[^2] Users can add their own data as CSV files, GeoJSON boundaries or cloud tables.[^2] A companion tool, the Planetary Prediction Engine, trains predictive models on a user's local outcome data for spatial prediction, downscaling and forecasting.[^2,6]

Google's October 2026 account gives several uses.[^2] During the 2026 Ebola outbreak in the Democratic Republic of the Congo, WHO AFRO used the agent to map mining corridors with high exposure and mobility risk. It found 48 exposed settlements and more than 45,500 people at risk.[^2] The INRB used the Planetary Prediction Engine for weekly estimates of spread into uninfected health zones.[^2,6] People in Need analysed 14 historical cyclone tracks to find high-exposure villages.[^2] GiveDirectly uploaded its own boundaries to estimate population exposure by wind-speed zone during Tropical Cyclone Maila, and to benchmark tornado damage in Mississippi.[^2] The Milken Institute screened over 1,500 candidate buildings for community resilience hubs.[^2]

Google hosts the service. In October 2026 access is through a limited early-access programme with three tracks:[^1,2]

- Ask Google Earth
- an experimental Agent-to-Agent API, headless (with no user interface), for developers building their own workflows[^2]
- the Planetary Prediction Engine

Applicants express interest through a form on the Geospatial Reasoning page.[^1] Pricing and terms are not published.[^1,2]

A prototype was introduced with Earth AI in October 2025.[^2,5] The technical report (arXiv 2610.15750), submitted on 11 October 2026, compares four configurations on Gemini 3.1 Pro and 3.8 Flash.[^3] It also introduces two benchmarks, GeoExpertQueries and GeoKTools, with development sets released on GitHub.[^1,3] The authors call the agent's output on open-ended problems a first draft for expert review.[^2]
