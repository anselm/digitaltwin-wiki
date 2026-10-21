---
about:
  label: Civic models
  description: >-
    The aim of predictive models of land, water, law and policy that ordinary
    people can run, question and argue with, open to the public and not
    reserved for planners, companies and agencies.
  tags:
    - simulation
    - participation
    - world model
    - policy
    - prediction
    - public
term:
  aka:
    - civic modeling
    - what-if time machine
domains:
  - places
  - people
  - ecology
provenance:
  origin: agent
  sources:
    - title: >-
        What If? Time Machines - looking closer at the proposal on Natural
        General Intelligence
      url: 'https://anselm.substack.com/p/what-if-time-machines-looking-closer'
    - title: 'Computational Journalism: The Futures Desk - by Anselm Hook'
      url: 'https://anselm.substack.com/p/computational-journalism'
    - title: >-
        Putting Earth AI to work: Geospatial agents for our planet's biggest
        challenges
      url: >-
        https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/
    - title: 'Planetary prediction engine: Automating global models via Earth AI'
      url: >-
        https://research.google/blog/planetary-prediction-engine-automating-global-models-via-earth-ai/
    - title: Geospatial Reasoning
      url: 'https://sites.research.google/gr/geospatial-reasoning/'
    - title: >-
        [2610.15750] Google Earth AI Geospatial Reasoning Agent: Capabilities
        and a Systematic Evaluation
      url: 'https://arxiv.org/abs/2610.15750'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT072
  kind: concept
  family: governance_and_concepts
  priority: supporting
  verified: false
  posts:
    - P019
    - P023
    - P045
    - P098
    - P138
  posters:
    - Remco Deelstra
    - Shravya Shetty
    - Sean Gorman
    - Anselm Hook
relations:
  - predicate: about
    target: terms/natural-general-intelligence-ngi
    note: discusses it
---
Such a model covers some part of the world, a watershed, a city's zoning or a river's allocation. A person brings a question, changes a condition, runs the world forward and sees what might follow. Anselm Hook makes the case in two 2026 essays. Corporations and governments already build such models, he writes, and public ones would let people argue the model instead of arguing at each other. He traces the lineage through:

- Philip Meyer's precision journalism
- the World3 model behind Limits to Growth
- Buckminster Fuller's World Game
- Climate Interactive's C-ROADS and En-ROADS
- participatory modelling of watersheds and fisheries
- SimCity

The recurring lesson he draws is that the model supplies the physics while a person supplies the story.

The same essays list what a civic model would need beyond the model itself:

- interfaces fitted to very different people
- many independent instances, not one
- clear handling of data ownership and provenance
- replay of past events as a regression test, a check that the model reproduces what happened
- ways to show tipping points and the lives least like one's own
- some form of authority attached to participation

The hard problems he names are compute cost, and the fact that few people take part in civic conversations at all.

Google Research's Earth AI work is one current example of the underlying machinery, though aimed at organisations, not the public. Its Geospatial Reasoning agent is described in an October 2026 technical report. It connects Gemini to foundation models for weather, flood forecasting, population dynamics and remote sensing, plus Earth Engine and Data Commons, and plans multi-step spatial analyses. The Planetary Prediction Engine, announced in August 2026, automates the whole workflow from data discovery to a trained predictive model. Example queries include food security in Nigeria and Ebola spread in the DRC. Both are experimental, with early access for partner organisations by application.
