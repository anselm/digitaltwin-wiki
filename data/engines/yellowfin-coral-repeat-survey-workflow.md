---
about:
  label: Yellowfin
  description: >-
    Robotic surface vehicle from Woods Hole Oceanographic Institution, built by
    Peter Traykovski and adapted for Anne Cohen's reef work, that photographs
    shallow coral reefs along GPS-tagged tracks so the same colonies can be
    rechecked after heat waves.
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
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
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
Peter Traykovski, a coastal oceanographer and engineer, built Yellowfin to map seabeds and coastline change with sonar.[^2] The vehicle is uncrewed and designed to move over shallow reefs without disturbing the coral.[^1,2] The coral scientist Anne Cohen had him mount a GoPro under the hull so it photographs the reef continuously as it runs.[^2] Depth, temperature and GPS position are recorded alongside the images.[^1]

Cohen's lab uses Yellowfin to find and follow "super reefs", reefs that come through marine heat waves.[^2] The vehicle is driven along GPS waypoints in a lawnmower pattern of back-and-forth lines, taking two pictures a second.[^2] In a day that comes to up to about 20,000 images over 40 miles of reef, each tagged with coordinates.[^2]

Because the track is georeferenced, the team can return to the same section or the same colony on a later trip.[^2] They can then see which corals bleached, died, recovered or were untouched.[^2] After a survey Traykovski can send the vehicle back to a particular coral Cohen wants to look at.[^2] The images also feed 3D reef models, which show how a colony's depth, angle and orientation relative to its neighbours may affect its heat exposure.[^2] Cohen used to go through the images by hand.[^2] The lab has started training AI models for the task.[^1,2]

The first deployments were on the reefs of Majuro, in the Marshall Islands, in 2024 and 2025.[^1] A June 2026 account describes further testing there on an April trip.[^2]
