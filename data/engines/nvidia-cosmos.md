---
about:
  label: NVIDIA Cosmos
  description: >-
    NVIDIA's family of world foundation models and tools for physical AI;
    generates and reasons over video of the physical world for robot
    training, simulation and synthetic sensor data.
  tags:
    - world model
    - physical ai
    - synthetic data
    - robotics
    - video generation
tool:
  form: foundation models and tooling
  group: 3D cities and mapping
  homepage: 'https://www.nvidia.com/en-us/ai/cosmos/'
  licence: 'OpenMDW 1.1 (Linux Foundation), as stated for the world foundation models'
  cost: 'models downloadable; hosted inference through NVIDIA services'
open:
  source: open
  data: unknown
  api: 'yes'
  participation: unknown
  licence: 'OpenMDW 1.1'
provenance:
  origin: agent
  sources:
    - title: Physical AI with World Foundation Models | NVIDIA Cosmos
      url: 'https://www.nvidia.com/en-us/ai/cosmos/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT095
  kind: enabling_world_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P062
  posters:
    - Daniel Sebastian Moreno
domains:
  - sensory
---
Cosmos is NVIDIA's platform of world foundation models for physical AI. The current flagship, Cosmos 3, is described as a single model that combines reasoning, world generation and action generation on a mixture-of-transformers architecture; around it sit Cosmos Curator for filtering and annotating sensor data, Cosmos Evaluator for scoring generated video, and scripts for post-training, optimisation and inference.

NVIDIA lists four uses: as a vision-language model that reasons over video, for tasks such as quality inspection and traffic monitoring; as a backbone to post-train into robot policies on a specific camera and body; as a controllable simulator that predicts outcomes in a closed loop; and as a generator of synthetic video from text, images, video, sound or actions, including sensor data for autonomous-vehicle testing.

The models are released under the OpenMDW 1.1 licence from the Linux Foundation and can be downloaded from Hugging Face, with code on GitHub and recipes in a cookbook; NVIDIA also hosts them in its build.nvidia.com catalogue and as NIM microservices. Status: operational.
