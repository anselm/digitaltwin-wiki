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
  licence: 'CC BY-NC-SA 4.0 stated on the project page; the repositories show no licence file'
  cost: free
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
SurfSLAM is a simultaneous localisation and mapping system for underwater robots, by Onur Bagoren, Seth Isaacson and colleagues with Ram Vasudevan and Katherine A. Skinner at the University of Michigan's field robotics group. A stereo network trained first on simulated underwater scenes with haze, caustics, lighting and particle effects, then fine-tuned on real footage without labels, produces metric depth maps. A pose graph fuses those with IMU, barometric pressure and Doppler velocity log readings, and global registration against the depth maps limits drift.

It was developed on shipwreck surveys by an underwater robot in Thunder Bay National Marine Sanctuary and is compared on scenes such as Boiler, Mossy Wreck, Shaft, Ribs and Engine against TURTLMap, SVIn2, ORB-SLAM3, DROID-SLAM and MASt3R-SLAM. The accompanying dataset, SUDS, holds over 24,000 stereo pairs with dense photogrammetry models and reference trajectories, hosted on the university's Deep Blue repository.

Two GitHub repositories carry the SLAM system and the stereo training and inference code; both are meant to run in Docker, with upstream stereo models (FoundationStereo, DEFOM-Stereo, IGEV++, Underwater_Stereo) pulled in as patched submodules. The project page is licensed CC BY-NC-SA 4.0; the repositories show no licence file of their own.

A research preprint, arXiv 2601.10814, first posted 2026-01-15 and revised 2026-09-14; each repository has a single commit and no releases.
