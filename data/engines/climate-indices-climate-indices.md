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
climate_indices is a Python package of reference implementations of climate indices, developed by James Adams from code that began at NOAA's NCEI and NIDIS. Version 3.0.0 describes itself as covering multi-hazard monitoring: drought and moisture balance (SPI, SPEI, PNP, PCI, EDDI and the Palmer indices PDSI, PHDI, PMDI, Z-Index and scPDSI), potential evapotranspiration by Thornthwaite, Hargreaves or FAO-56 Penman-Monteith, a wildfire family (KBDI, the Canadian FWI system, Fosberg, Hot-Dry-Windy and Haines) and a flood-potential family (effective precipitation, EDI, the Flood Index and the Antecedent Precipitation Index). An energy family is listed as still in development.

For a watershed or regional twin it turns precipitation and temperature series, from stations or NetCDF grids, into standard hazard indicators. The release notes are explicit that the flood indices measure potential rather than observed flooding and that their external validation is still a gap.

It installs from PyPI and runs on Python 3.10 to 3.14, with an optional Rust backend that speeds up eligible calculations without changing the Python API; gridded runs are vectorised over time-major blocks. The NumPy API is the stable surface and the xarray API is marked beta. Licence is BSD-3-Clause.

Maintained; 3.0.0 was released on PyPI on 12 October 2026. The Read the Docs site still documents version 2.0.1.
