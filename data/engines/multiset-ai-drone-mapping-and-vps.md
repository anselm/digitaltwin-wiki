---
about:
  label: MultiSet AI Drone to VPS
  description: >-
    Hosted mapping and visual positioning service from MultiSet AI that turns
    one drone flight over a site into a localisation map which drones, phones,
    headsets and robots then query for their position.
  tags:
    - visual positioning
    - drone mapping
    - localization
    - robotics
    - spatial computing
tool:
  form: hosted service with SDKs
  group: 3D cities and mapping
  homepage: 'https://multiset.ai/drone-to-vps'
  cost: 'free tier; usage-based pricing for production'
provenance:
  origin: agent
  sources:
    - title: 'Drone to VPS: Turn One Flight into a Localization Map | MultiSet AI'
      url: 'https://multiset.ai/drone-to-vps'
    - title: 'Human & Machine Readable Maps For Physical AI | MultiSet AI'
      url: 'https://multiset.ai/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT084
  kind: enabling_mapping
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P027
  posters:
    - Nikhil Sawlani
domains:
  - sensory
  - places
---
MultiSet AI, a San Francisco company, sells a visual positioning system: a map of a site against which any camera-equipped device can find its six-degree-of-freedom pose. Drone to VPS is the workflow that builds such a map from a single drone flight carrying a 360 camera; 360 video, panoramas and point clouds are uploaded through a developer portal, and the company says stitching and scale are handled without a separate photogrammetry step. The output is a queryable map rather than a model to inspect, and the map belongs to the site, so a phone or headset can later localise against a map a drone made.

Stated uses are inspection, frontline operations and navigation where GNSS is unavailable; ArduPilot and PX4 can take the VPS pose as an external position estimate, and RTK control points tie the map to real-world coordinates. The company claims sub-5 cm median localisation accuracy, which is its own figure, not an independent one.

Positions come back over a REST API with a confidence value, from a managed cloud, a private cloud or on-device; SDKs cover Unity, Web, iOS, Android, Quest and ROS2. There is a free tier for prototyping and usage-based pricing after that. Status: operational.
