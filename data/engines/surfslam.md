---
about:
  label: SurfSLAM
  description: >-
    Real-time underwater SLAM from the University of Michigan field robotics
    group that fuses learned stereo depth with IMU, pressure and Doppler
    velocity log measurements; developed and tested on shipwreck surveys.
  tags:
    - underwater
    - slam
    - stereo vision
    - robotics
    - shipwreck
    - 3d reconstruction
tool:
  homepage: 'https://umfieldrobotics.github.io/SurfSLAM/'
  form: research code
  group: 3D cities and mapping
  licence: 'CC BY-NC-SA 4.0 stated on the project page; the repositories show no licence file'
  cost: free
open:
  source: partly
  data: open
  api: unknown
  participation: unknown
  licence: 'CC BY-NC-SA 4.0 (project page); repositories show no licence file'
provenance:
  origin: agent
  sources:
    - title: 'SurfSLAM: Sim-to-Real Underwater Stereo Reconstruction For Real-Time SLAM'
      url: 'https://umfieldrobotics.github.io/SurfSLAM/'
    - title: 'GitHub - umfieldrobotics/SurfSLAM'
      url: 'https://github.com/umfieldrobotics/SurfSLAM'
    - title: 'GitHub - umfieldrobotics/SurfSLAM_Stereo'
      url: 'https://github.com/umfieldrobotics/SurfSLAM_Stereo'
    - title: '[2601.10814] SurfSLAM: Sim-to-Real Underwater Stereo Reconstruction For Real-Time SLAM'
      url: 'https://arxiv.org/abs/2601.10814'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT044
  kind: research_tool
  family: enabling_technology_and_adjacent_work
  priority: high
  verified: true
  posts:
    - P121
  posters:
    - Onur Bagoren
domains:
  - water
  - sensory
---
SLAM (simultaneous localisation and mapping) is how a robot builds a map of its surroundings while working out where it is within that map. SurfSLAM is by Onur Bagoren, Seth Isaacson and colleagues with Ram Vasudevan and Katherine A. Skinner at the University of Michigan. Its stereo network was trained first on simulated underwater scenes with haze, caustics, lighting and particle effects, then fine-tuned on real footage without labels. It produces metric depth maps.

A pose graph, the running estimate of the robot's path, combines those depth maps with readings from an inertial measurement unit, a pressure sensor and a Doppler velocity log. A Doppler velocity log is a sonar that measures the robot's speed over the seabed. Global registration against the depth maps limits drift.

It was developed on shipwreck surveys by an underwater robot in Thunder Bay National Marine Sanctuary. The paper compares it with five other SLAM systems, including ORB-SLAM3, DROID-SLAM and MASt3R-SLAM, on scenes such as Boiler and Engine. The accompanying dataset, SUDS, holds over 24,000 stereo pairs with dense photogrammetry models and reference trajectories, hosted on the university's Deep Blue repository.

The SLAM system and the stereo training and inference code are in two GitHub repositories. Both are packaged to run in Docker and pull in upstream stereo models (FoundationStereo, DEFOM-Stereo, IGEV++, Underwater_Stereo) as patched submodules. The project page is licensed CC BY-NC-SA 4.0; the repositories have no licence file of their own. Each repository has a single commit and no releases. The preprint, arXiv 2601.10814, was first posted on 2026-01-15 and revised on 2026-09-14.
