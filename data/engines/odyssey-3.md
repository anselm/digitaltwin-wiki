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
  - places
  - mobility
---
Odyssey's founders came from driverless-car work.[^1] Odyssey calls the model a learned dynamical system.[^1] It is an autoregressive diffusion transformer, a network that generates its output step by step, each step built on the ones before.[^1] It is trained on visual data to pick up physics, motion and cause and effect.[^1] The current preview supports first- and third-person navigation.[^1] The base model runs at 832 by 480; a larger variant, Odyssey-3 Pro, runs at 1280 by 720.[^1]

Odyssey gives examples of the model adapted to robot arms and humanoids, to a car driving on real roads in India, and to generating multi-sensor driving data for training agents.[^1] The robotics company Flexion built policies on Odyssey-3.[^1] Odyssey reports benchmark results on Physics-IQ, and on the WorldMark benchmark in its own evaluation.[^1]

Odyssey-3 is a hosted service. Odyssey announced it in October 2026, and a research preview is open at experience.odyssey.systems.[^1] Developers who want to build on it are asked to contact the company.[^1] Pricing, licensing and API access are not published.

Odyssey also makes Agora-1, a multi-agent world model announced on 18 May 2026.[^2] Up to four players, human or AI, act in the same generated world at once: a learned state model trained on the game GoldenEye keeps one shared world state, and a second model renders each player's view.[^2] Odyssey calls Agora-1 an early research preview and says the same approach could apply to robots working together.[^2]
