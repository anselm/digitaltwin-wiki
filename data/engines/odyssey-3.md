---
about:
  label: Odyssey-3
  description: >-
    World model from Odyssey that generates an interactive 3D environment from
    a prompt and predicts how it changes as a person or agent moves and acts
    in it.
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
  created: '2026-10-17'
  reviewed: '2026-10-17'
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
Odyssey-3 is a world model made by Odyssey, a company whose founders came from driverless-car work. Odyssey describes it as a learned dynamical system built as an autoregressive diffusion transformer: it is trained on visual data to pick up physics, motion and cause and effect, then generates an environment from a prompt and predicts what happens as someone navigates or acts in it. The current preview supports first- and third-person navigation. A larger variant, Odyssey-3 Pro, runs at 1280 by 720; the base model runs at 832 by 480.

Odyssey's own page gives examples of the model adapted to robot arms and humanoids (the robotics company Flexion built policies on it), to a car driving on real roads in India, and to generating multi-sensor driving data for training agents. It reports benchmark results on Physics-IQ and on Odyssey's own WorldMark evaluation.

It is a hosted service. A research preview is open at experience.odyssey.systems; developers who want to build on it are asked to contact the company. The page does not state pricing, licensing or an API.

Status: research preview, announced October 2026.
