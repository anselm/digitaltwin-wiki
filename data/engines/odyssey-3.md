---
about:
  depiction: engines/odyssey-3.jpg
  label: Odyssey-3
  description: >-
    World model from Odyssey that generates an interactive 3D environment from
    a prompt and predicts how a person's or agent's actions change the scene.
  tags:
    - world model
    - simulation
    - robotics
    - driving
    - video
tool:
  homepage: 'https://odyssey.systems/meet-odyssey-3'
  form: hosted world model
  group: 3D cities and mapping
  cost: unknown
  licence: unknown
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: 'Meet Odyssey-3: Our Most Powerful Foundation World Model'
      url: 'https://odyssey.systems/meet-odyssey-3'
    - title: 'Agora-1: The Multi-Agent World Model'
      url: 'https://odyssey.ml/introducing-agora-1'
  created: '2026-10-17'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT087
  kind: enabling_world_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P055
  posters:
    - Sarah Rizk
domains:
  - sensory
  - mobility
---
Odyssey's founders came from driverless-car work. Odyssey calls the model a learned dynamical system. It is an autoregressive diffusion transformer, a network that generates its output step by step, each step built on the ones before. It is trained on visual data to pick up physics, motion and cause and effect. The current preview supports first- and third-person navigation. The base model runs at 832 by 480; a larger variant, Odyssey-3 Pro, runs at 1280 by 720.

Odyssey gives examples of the model adapted to robot arms and humanoids, to a car driving on real roads in India, and to generating multi-sensor driving data for training agents. The robotics company Flexion built policies on Odyssey-3. Odyssey reports benchmark results on Physics-IQ and on its own WorldMark evaluation.

Odyssey-3 is a hosted service. Odyssey announced it in October 2026, and a research preview is open at experience.odyssey.systems. Developers who want to build on it are asked to contact the company. Pricing, licensing and API access are not published.

Odyssey also makes Agora-1, a multi-agent world model announced on 18 May 2026. Up to four players, human or AI, act in the same generated world at once: a learned state model trained on the game GoldenEye keeps one shared world state, and a second model renders each player's view. Odyssey calls Agora-1 an early research preview and says the same approach could apply to robots working together.
