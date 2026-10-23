---
about:
  label: r.avaflow
  description: >-
    Open-source, GIS-supported simulator by Martin Mergili and Shiva P.
    Pudasaini for rapid mass flows such as landslides, debris flows and glacial
    lake outburst floods, including chains of one process feeding the next.
  tags:
    - landslide
    - debris flow
    - mass flow
    - outburst flood
    - simulation
    - grass gis
tool:
  form: open-source simulation tool
  group: Wildfire and risk
  homepage: 'https://www.landslidemodels.org/r.avaflow/'
  cost: 'non-commercial; no regular support'
open:
  source: partly
  data: unknown
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: 'r.avaflow | The mass flow simulation tool'
      url: 'https://www.landslidemodels.org/r.avaflow/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT029
  kind: enabling_simulator
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P143
  posters:
    - 'Kshitij Dahal, PhD'
domains:
  - water
---
r.avaflow models flows of up to three phases (distinct materials, such as solids and fluid, moving together) over any terrain.[^1] Martin Mergili (University of Graz, Austria) and Shiva P. Pudasaini are the authors named for citation.[^1] The solver uses the NOC-TVD numerical scheme.[^1] It offers a Voellmy-type model, a simplified multi-phase flow model, or an equilibrium-of-motion model for less rapid flows.[^1] Entrainment (a flow picking up material from its bed), deformation control, fragmentation, dispersion and phase transformations are all handled.[^1]

The main use is process chains, where one stage feeds the next: a landslide that becomes a debris flow, a flood, a rock glacier or glacial lake outburst flood.[^1] The training material walks through such chains in a landscape called Cascadia.[^1] Starting mass comes from raster maps or hydrographs.[^1] Several simulations can run in parallel for sensitivity analysis and optimisation, and output can be rendered in 3D or virtual reality.[^1]

r.avaflow is open source and runs with GRASS GIS.[^1] The 4.0G variant installs the Python-based companion module r.lakefill; a 4.0W variant also exists.[^1] The software is non-commercial and has no regular support.[^1] The project page provides an integrated user interface, a manual, training data with start scripts, a publications list and older versions.[^1] The current release is r.avaflow 4.0 Revision 7, released 2025-09-02.[^1]
