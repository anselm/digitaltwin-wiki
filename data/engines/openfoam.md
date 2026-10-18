---
about:
  label: OpenFOAM
  description: >-
    Free, open-source computational fluid dynamics software, maintained in two
    lines by OpenCFD Ltd and by the OpenFOAM Foundation; used for flow,
    turbulence, heat and multiphase problems across engineering and science.
  tags:
    - cfd
    - fluid dynamics
    - open source
    - simulation
    - waves
tool:
  form: open-source simulation code
  group: Agents and system dynamics
  homepage: 'https://www.openfoam.com/'
  licence: GPL v3
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'GPL-3.0'
provenance:
  origin: agent
  sources:
    - title: OpenFOAM
      url: 'https://www.openfoam.com/'
    - title: 'OpenFOAM | Free CFD Software | The OpenFOAM Foundation'
      url: 'https://openfoam.org/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT037
  kind: enabling_simulator
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P059
  posters:
    - Michael Beck
domains:
  - water
---
OpenFOAM is a general-purpose computational fluid dynamics code. Two organisations distribute it under the same name: OpenCFD Ltd, a subsidiary of Keysight, which says it has developed OpenFOAM since 2004 and publishes releases every June and December; and the OpenFOAM Foundation, a not-for-profit that owns the copyright of its line and distributes code produced by CFD Direct.

Both sites describe a user base across most of engineering and science, from chemical and process work to civil, mechanical and environmental problems, and the Foundation notes growing use in clean-energy research such as renewables, batteries and carbon capture. In a digital-twin setting it is the kind of solver used for detailed wave, current or airflow studies around a site.

It is free software under the GNU General Public Licence v3, installed on Linux, macOS or Windows or built from source. Both organisations sell support, training and development services around it.

Status: operational, in long-term maintenance.
