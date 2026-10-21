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

The paper was submitted to arXiv on 7 July 2026 and accepted at ECCV 2026. It asks whether an AI system can build a coherent spatial model of a whole city, the way a person does after walking its streets for a few hours. The authors argue that the missing piece is real-world data at city scale.

The data comes from autonomous vehicle fleets during ordinary daytime driving. The six cities are Atlanta, Arlington, Ann Arbor, Eden Prairie, Grand Rapids and Miami. There are 18 driving logs, three per city, totalling 1,507 km. Each averages 83.7 km and about 2.5 hours, and roughly 40 km² is covered per city. Each log has six surround-view cameras, a roof LiDAR, an IMU and GPS. LiDAR is a laser scanner that measures distance. An IMU is a motion sensor. The logs hold 3.01 million synchronised keyframes. The logs keep the difficulties of real streets: moving vehicles and people, changes in light and weather, motion blur and imperfect camera poses.

On this data the authors build a baseline with 3D Gaussian Splatting (3DGS). The method represents a scene as a mass of small, coloured, semi-transparent blobs that can be drawn quickly from any viewpoint. Their version is tuned for long, narrow, unbounded street scenes:

- vehicle poses and the rigid camera rig are refined together
- the sky is modelled separately from the geometry
- road surfaces are regularised
- views rendered off the driven path are repaired
- Gaussians are sharded across several GPUs

Ground, sky and moving-object masks are generated automatically. On a short Ann Arbor sequence and a long Atlanta sequence the baseline scores better than 3DGS, hierarchical 3DGS and CityGS on image and depth metrics.

The reconstructed city then serves as a closed-loop simulator, where what the agent does changes what it sees next. A vision-language-action model observes rendered views, reasons about a task and plans its next move. The demonstration uses the Alpamayo 1 model. The paper closes on three obstacles to simulation-ready urban twins: scaling to larger areas, rendering views away from the recorded trajectory, and uncertainty in the data.

Anonymised sensor data (faces and plates blurred), poses, calibration, masks, splits, code and configs are to be released under documented terms of use. Access is by a request form. The project page marks the code and the download link as coming soon. A Hugging Face dataset page and a GitHub repository are linked. Compare [NVIDIA Cosmos](/engines/nvidia-cosmos/).
