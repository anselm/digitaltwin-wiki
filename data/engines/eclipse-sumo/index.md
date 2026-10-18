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
SUMO (Simulation of Urban MObility) is an open-source traffic simulator hosted as an Eclipse Foundation project and developed in Berlin. It is microscopic and continuous: every vehicle, pedestrian and public-transport trip is modelled individually, on networks of any size and for any length of simulated time.

It covers mixed traffic (cars, buses, trains, bicycles, pedestrians), traffic lights and detectors, demand built from street counts, origin-destination matrices or synthetic populations, emission calculation, and automated vehicles. A control interface called TraCI lets another program read and steer the simulation while it runs, and it can be coupled to the network simulators OMNeT++ and ns-3 for vehicle-to-everything communication studies. Road networks import from OpenStreetMap, OpenDRIVE, VISUM, VISSIM, NavTeq and MATSim. A SUMO conference has been held in Berlin every year since 2013.

Free software under the Eclipse Public License 2.0 and GPL 2.0, written in C++ and Python, installed on Windows, Linux or macOS, with sources and nightly builds on GitHub.

Actively maintained; the release offered on the site is 1.28.0.

![Eclipse SUMO, version 1.6.0: a street network, a close view of one vehicle, and a graph of its speed.](/engines/eclipse-sumo/sumo.png)

*Eclipse SUMO 1.6.0 (2020): the same simulation at network scale and at the level of one vehicle. Credit: Oabanse, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Eclipse_SUMO,_screenshot_showing_two_microscopic_views_in_SUMO_version_1.6.0.png).*
