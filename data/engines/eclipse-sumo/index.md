---
about:
  label: Eclipse SUMO
  description: >-
    Open-source microscopic traffic simulator, an Eclipse Foundation project;
    models road vehicles, public transport, bicycles and pedestrians one by
    one on large networks.
  tags:
    - traffic
    - microsimulation
    - multimodal
tool:
  form: Open simulation engine
  group: Transport and crowds
  homepage: 'https://eclipse.dev/sumo/'
open:
  source: open
  data: unknown
  api: 'yes'
  participation: unknown
  licence: 'EPL-2.0 / GPL-2.0'
domains:
  - mobility
relations:
  - predicate: answers
    target: questions/after-a-closure
provenance:
  origin: agent
  sources:
    - title: Eclipse SUMO - Simulation of Urban MObility
      url: 'https://eclipse.dev/sumo/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
SUMO stands for Simulation of Urban MObility and is developed in Berlin.[^1] It is microscopic and continuous: each vehicle, pedestrian and public-transport trip is modelled individually, on networks of any size and over any length of simulated time.[^1]

Mixed traffic is covered: cars, buses, trains, bicycles and pedestrians, with traffic lights, detectors, emission calculation and automated vehicles.[^1] Demand can be built from street counts, from origin-destination matrices (tables of how many trips go from each zone to each other zone) or from synthetic populations.[^1] A control interface called TraCI lets another program read and steer a running simulation.[^1] SUMO can also be coupled to the network simulators OMNeT++ and ns-3 to study vehicle-to-everything communication.[^1] Road networks import from OpenStreetMap, OpenDRIVE, VISUM, VISSIM, NavTeq and MATSim.[^1] A SUMO conference has been held in Berlin every year since 2013.[^1]

SUMO is free software under the Eclipse Public License 2.0 and GPL 2.0, written in C++ and Python.[^1] It installs on Windows, Linux or macOS, and the sources and nightly builds are on GitHub.[^1] The release offered on the site is 1.28.0.[^1]

![Eclipse SUMO, version 1.6.0: a street network, a close view of one vehicle, and a graph of its speed.](/engines/eclipse-sumo/sumo.png)

*Eclipse SUMO 1.6.0 (2020): the same simulation at network scale and at the level of one vehicle. Credit: Oabanse, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Eclipse_SUMO,_screenshot_showing_two_microscopic_views_in_SUMO_version_1.6.0.png).*
