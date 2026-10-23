---
about:
  depiction: engines/openfoam.jpg
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
Computational fluid dynamics (CFD) simulates how liquids and gases move by solving the equations of flow on a mesh of small cells. Two organisations distribute OpenFOAM under the same name.[^1,2] OpenCFD Ltd, a subsidiary of Keysight, says it has developed OpenFOAM since 2004, and publishes releases every June and December.[^1] The OpenFOAM Foundation is a not-for-profit that owns the copyright of its line and distributes code produced by CFD Direct.[^2]

Both organisations report users in most fields of engineering and science, including chemical and process, civil, mechanical and environmental work.[^1,2] The Foundation notes growing use in clean-energy research such as renewables, batteries and carbon capture.[^2] In a model of a place it is the kind of solver used for detailed wave, current or airflow studies around a site.[^2]

OpenFOAM is free software under the GNU General Public Licence v3.[^2] It installs on Linux, macOS or Windows, or builds from source.[^1,2] OpenCFD sells support, training and development work, and the Foundation sells training and maintenance plans.[^1,2]
