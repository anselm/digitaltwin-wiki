---
about:
  depiction: engines/gral.jpg
  label: GRAL
  description: >-
    The Graz Lagrangian Model from Graz University of Technology; simulates
    the dispersion of pollutants and odour in built-up areas and complex
    terrain, including low-wind conditions and road tunnel portals.
  tags:
    - air quality
    - odour
    - dispersion
    - pollution
    - freeware
tool:
  form: Free dispersion model
  group: Sensory landscape
  homepage: 'https://gral.tugraz.at/'
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
  licence: freeware
  note: >-
    The model system is a free download after registration on the TU Graz
    site, with no warranty; the pages read do not say whether the source code
    is published.
domains:
  - sensory
relations:
  - predicate: answers
    target: questions/sensory-landscape
provenance:
  origin: agent
  sources:
    - title: 'Home - GRAL - Graz Lagrangian Model'
      url: 'https://gral.tugraz.at/'
    - title: 'Features - GRAL - Graz Lagrangian Model'
      url: 'https://gral.tugraz.at/features.html'
    - title: 'Welcome - GRAL - Graz Lagrangian Model'
      url: 'https://gral.tugraz.at/download.html'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
GRAL has been developed since 1999 at the Institute of Thermodynamics and Sustainable Propulsion Systems at Graz University of Technology.[^1] Lagrangian means it follows the paths of many individual particles of pollutant. With its companion model GRAMM it forms the GRAMM/GRAL system.[^1] The institute says the system is used both in research and in regulatory assessments of urban air quality.[^1] The model was first built for the frequent low-wind conditions of inner-Alpine basins in Austria, where wind is below 1.5 m/s for up to 90 per cent of the time.[^1] It handles dispersion across the full range of wind speeds and stability conditions.[^2]

It simulates chemically non-reactive pollutants in built-up areas and complex terrain.[^1,2] Its features include:[^2]

- a micro-scale flow model that accounts for buildings and building downwash, the air pulled down behind a building
- stack emissions with temperature and exit velocity
- dispersion from road tunnel portals, meeting the Austrian guideline RVS 04.02.12
- dry and wet deposition and sedimentation
- decay, such as bacteria die-off
- flow within vegetation layers.[^2]

For smell it computes odour hours from a concentration-variance model.[^2] Runs can be steady-state or transient, for instance for puff releases.[^2]

The model system is freeware, downloaded from the TU Graz site after registering with some basic details.[^1,3] It comes with no warranty of completeness or correctness, and the risk of correct application is the user's.[^3] The institute offers trainings.[^1]
