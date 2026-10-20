---
about:
  label: "WildCity: A Real-World City-Scale Testbed for Rendering, Simulation, and Spatial Intelligence"
  description: >-
    2026 paper by Xiangyu Han, Yiming Li, Chen Feng and colleagues at New York
    University, May Mobility, NVIDIA and Stanford that introduces a multimodal
    driving dataset covering six US cities, a 3D Gaussian Splatting
    reconstruction baseline for city-scale street scenes, and a closed-loop
    simulator built from the reconstructions.
  tags:
    - city-scale reconstruction
    - gaussian splatting
    - driving dataset
    - closed-loop simulation
    - neural rendering
    - spatial intelligence
article:
  url: 'https://doi.org/10.48550/arXiv.2607.06838'
  published: '2026-07-07'
  publisher: arXiv (accepted at ECCV 2026)
  authors:
    - Xiangyu Han
    - Mengyu Yang
    - Jiaqi Li
    - Bowen Chang
    - Ziyu Chen
    - Hexu Zhao
    - Rahul Kumar Agrawal
    - Anthony Rodriguez
    - Rajani Acharya
    - Fiona Hua
    - Marco Pavone
    - Chen Feng
    - Yiming Li
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: "WildCity: A Real-World City-Scale Testbed for Rendering, Simulation, and Spatial Intelligence"
      url: 'https://han-xiangyu.github.io/Wild-City/'
    - title: "[2607.06838] WildCity: A Real-World City-Scale Testbed for Rendering, Simulation, and Spatial Intelligence"
      url: 'https://arxiv.org/abs/2607.06838'
    - title: "WildCity: A Real-World City-Scale Testbed for Rendering, Simulation, and Spatial Intelligence (arXiv HTML)"
      url: 'https://arxiv.org/html/2607.06838'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the project page, the arXiv abstract page and the introduction and appendix of the arXiv HTML version'
  status: draft
---

A paper and dataset from a group at New York University, May Mobility, NVIDIA and Stanford University, submitted to arXiv on 7 July 2026 and accepted at ECCV 2026. It asks whether an AI system can build a coherent spatial model of a whole city, the way a person does after walking its streets for a few hours, and argues that the missing piece is real-world data at city scale rather than a single block or a short clip.

The dataset is collected from autonomous vehicle fleets during ordinary daytime driving in six US cities: Atlanta, Arlington, Ann Arbor, Eden Prairie, Grand Rapids and Miami. It holds 18 driving logs, three per city, totalling 1,507 km, each averaging 83.7 km and about 2.5 hours, with roughly 40 km² covered per city. Each log carries six surround-view cameras, a roof LiDAR, IMU and GPS, giving 3.01 million synchronised keyframes. The logs keep the difficulties of real streets: moving vehicles and people, changes in light and weather, motion blur and imperfect camera poses.

On top of the data the authors build a 3D Gaussian Splatting baseline tuned for long, narrow, unbounded street scenes. It jointly refines vehicle poses and the rigid camera rig, models the sky separately from the geometry, regularises road surfaces, repairs views rendered off the driven path, and shards Gaussians across several GPUs. Ground, sky and moving-object masks are generated automatically. On a short Ann Arbor sequence and a long Atlanta sequence the baseline scores better than 3DGS, hierarchical 3DGS and CityGS on image and depth metrics. The reconstructed city is then used as a closed-loop simulator in which a vision-language-action model observes rendered views, reasons about a task and plans its next move, demonstrated with the Alpamayo 1 model. The paper closes with an analysis of three obstacles to simulation-ready urban twins: scaling to larger areas, rendering views away from the recorded trajectory, and uncertainty in the data.

The project page states that anonymised sensor data (faces and plates blurred), poses, calibration, masks, splits, code and configs will be released under documented terms of use, with access by a request form; the page marks the code and the download link as coming soon. A Hugging Face dataset page and a GitHub repository are linked. In this wiki's stack it sits with the engines that turn sensor logs into a renderable model of a place, beside work such as /engines/nvidia-cosmos/.
