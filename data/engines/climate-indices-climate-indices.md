---
about:
  label: climate_indices
  description: >-
    Open-source Python library by James Adams that computes drought, fire and
    flood-potential indices such as SPI, SPEI, the Palmer family and KBDI from
    station or gridded precipitation and temperature.
  tags:
    - drought
    - wildfire
    - flood
    - indices
    - python
    - climate
tool:
  form: open-source Python library
  group: Weather and climate
  homepage: 'https://github.com/monocongo/climate_indices'
  licence: BSD-3-Clause
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'BSD-3-Clause'
provenance:
  origin: agent
  sources:
    - title: monocongo/climate_indices
      url: 'https://github.com/monocongo/climate_indices'
    - title: climate-indices · PyPI
      url: 'https://pypi.org/project/climate-indices/'
    - title: >-
        climate_indices/docs/release-notes-3.0.0.md at v3.0.0 ·
        monocongo/climate_indices · GitHub
      url: >-
        https://github.com/monocongo/climate_indices/blob/v3.0.0/docs/release-notes-3.0.0.md
    - title: Climate Indices in Python
      url: 'https://climate-indices.readthedocs.io/en/latest/index.html'
    - title: 'climate_indices README at v3.0.0'
      url: 'https://github.com/monocongo/climate_indices/blob/v3.0.0/README.md'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT024
  kind: enabling_library
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: true
  posts:
    - P031
  posters:
    - James Adams
domains:
  - climate
  - water
  - fire
---
The code began at NOAA's NCEI and NIDIS as reference implementations of climate indices.[^1] Version 3.0.0 covers potential evapotranspiration and three hazard families:[^3,5]

- Drought and moisture balance: SPI, SPEI, PNP, PCI, EDDI, and the Palmer indices PDSI, PHDI, PMDI, Z-Index and scPDSI.[^1,5]
- Potential evapotranspiration, the water that would evaporate and transpire if it were available: by Thornthwaite, Hargreaves or FAO-56 Penman-Monteith.[^1,5]
- Wildfire: KBDI, the Canadian FWI system, Fosberg, Hot-Dry-Windy and Haines.[^3]
- Flood potential: effective precipitation, EDI, the Flood Index and the Antecedent Precipitation Index.[^3]

An energy family is listed as still in development.[^5]

Inputs are precipitation and temperature series, from stations or from NetCDF grids (a common file format for gridded climate data).[^1,4] The flood indices measure potential, not observed, flooding, and their external validation is still a gap.[^3]

It installs from PyPI and runs on Python 3.10 to 3.14.[^1,2] An optional Rust backend speeds up eligible calculations without changing the Python API, and gridded runs are vectorised over time-major blocks.[^3] The NumPy API is stable; the xarray API is marked beta.[^1,3] The licence is BSD-3-Clause.[^1]

Version 3.0.0 was released on PyPI on 12 October 2026.[^1,2] The Read the Docs site still documents version 2.0.1.[^4]
