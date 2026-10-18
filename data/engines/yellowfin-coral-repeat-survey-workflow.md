---
about:
  label: Yellowfin
  description: >-
    Robotic surface vehicle from Woods Hole Oceanographic Institution, built by
    Peter Traykovski and adapted for Anne Cohen's reef work, that photographs
    shallow coral reefs along GPS-tagged tracks so the same colonies can be
    checked again after each heat wave.
  tags:
    - coral
    - reef survey
    - robot
    - imagery
    - bleaching
    - marshall islands
tool:
  form: survey vehicle
  group: Wildlife and oceans
provenance:
  origin: agent
  sources:
    - title: 2026 Potential Projects | Woods Hole Oceanographic Institution
      url: >-
        https://www.whoi.edu/what-we-do/educate/undergraduate-programs/summer-student-fellowship/2026-potential-projects/
    - title: >-
        As Global Warming Threatens Corals Worldwide, Woods Hole Scientists
        Search for 'Super Reefs' That Can Take the Heat
      url: 'https://insideclimatenews.org/news/14062026/scientists-search-for-heat-resilient-reefs/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT039
  kind: monitoring_workflow
  family: observations_data_and_reconstruction
  priority: high
  verified: false
  posts:
    - P149
  posters:
    - Anne Cohen
domains:
  - ecology
  - water
---
Yellowfin is an uncrewed surface vehicle at Woods Hole Oceanographic Institution (WHOI), designed to move over shallow coral reefs without disturbing them. Peter Traykovski, a coastal oceanographer and engineer, built it to map seabeds and coastline change with sonar; coral scientist Anne Cohen had him mount a GoPro under the hull so it could photograph the reef continuously as it runs, recording depth, temperature and GPS position alongside the images.

Cohen's lab uses it to find and follow "super reefs", reefs that come through marine heat waves. The vehicle is driven along GPS waypoints in a lawnmower pattern, taking two pictures a second, up to about 20,000 images over 40 miles of reef in a day, each tagged with coordinates. Because the track is georeferenced the team can return to the same section or the same colony on a later trip and see which corals bleached, died, recovered or were untouched; after a survey Traykovski can send it back to a particular coral Cohen wants to look at. The images are also used to build 3D reef models, which show how the depth, angle and orientation of a colony relative to its neighbours may affect its heat exposure. Cohen used to go through the images by hand; the lab has started training AI models to do it.

The first deployments were on the reefs of Majuro, in the Marshall Islands, in 2024 and 2025, and a June 2026 account describes further testing there on an April trip. Whether the vehicle or its software is available to others is not stated.

In use as a research tool; the published material covers 2024 to 2026.
