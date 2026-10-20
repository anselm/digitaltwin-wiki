---
about:
  depiction: engines/nvidia-isaac-sim.jpg
  label: NVIDIA Isaac Sim
  description: >-
    NVIDIA's open-source robotics simulator built on Omniverse and OpenUSD;
    used to train, test and validate robots in physically based virtual
    environments and to generate synthetic training data.
  tags:
    - robotics
    - simulation
    - synthetic data
    - openusd
    - open source
tool:
  form: open-source simulation framework
  group: 3D cities and mapping
  homepage: 'https://developer.nvidia.com/isaac/sim'
  licence: 'Apache-2.0, with an NVIDIA additional software and materials licence'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache-2.0, with an NVIDIA additional software and materials licence'
provenance:
  origin: agent
  sources:
    - title: >-
        Isaac Sim - Robotics Simulation and Synthetic Data Generation | NVIDIA
        Developer
      url: 'https://developer.nvidia.com/isaac/sim'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT093
  kind: enabling_simulator
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
Isaac Sim is NVIDIA's reference framework for simulating robots. It is built on Omniverse libraries and OpenUSD, imports robots and scenes from CAD, URDF and real-world captures, and is extensible enough that developers build their own OpenUSD-based simulators on it.

NVIDIA describes it as the place to train, test and validate a robot before it exists or before it is let loose: software-in-the-loop and hardware-in-the-loop testing, robot learning through the companion Isaac Lab, and synthetic data pipelines that can be augmented with Cosmos world models. It talks to ROS and ROS 2 through bridge extensions.

The code is on GitHub under Apache 2.0, subject to an additional NVIDIA software and materials licence, and is free to use; containers are on NGC and the AWS Marketplace, and cloud instances are offered through Brev, where the cloud provider's own fees apply. Vendors who redistribute Omniverse Kit with their product need an Omniverse Enterprise subscription. Status: operational.
