---
about:
  label: Trends.Earth
  description: >-
    Free QGIS plugin from Conservation International, Lund University and
    NASA that computes land degradation (SDG 15.3.1), drought and urban
    change indicators on Google Earth Engine for UNCCD reporting.
  aliases:
    - trends.earth
    - LDMP
    - Land Degradation Monitoring Project
  tags:
    - land degradation
    - land cover
    - productivity
    - soil organic carbon
    - drought
    - urbanization
    - QGIS
    - Google Earth Engine
    - SDG 15.3.1
    - UNCCD
    - Python
tool:
  tier: 2
  form: open-source QGIS plugin with cloud processing
  group: Ecosystems and land
  homepage: 'https://trends.earth'
  licence: >-
    GPL-2.0 in pyproject.toml and the LICENCE file, "version 2.0 or later" in
    the documentation; an Apache-2.0 file named LICENSE also sits in the
    repository
  cost: free
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: GPL-2.0
  note: >-
    The plugin is open source; the indicators are computed on Google Earth
    Engine through a service Conservation International runs, so users need
    an account with that service but not with Earth Engine. Whether that
    service may be called outside the plugin is not stated on the pages read.
domains:
  - ecology
  - food
relations:
  - predicate: made_by
    target: organizations/conservation-international
  - predicate: answers
    target: questions/land-use-change
  - predicate: cites
    target: platforms/google-earth-engine
provenance:
  origin: agent
  sources:
    - title: 'Trends.Earth documentation, home page'
      url: 'https://docs.trends.earth/en/latest/'
    - title: 'ConservationInternational/trends.earth, README (GitHub)'
      url: 'https://github.com/ConservationInternational/trends.earth'
    - title: 'ConservationInternational/trends.earth, latest release (GitHub API)'
      url: 'https://api.github.com/repos/ConservationInternational/trends.earth/releases/latest'
    - title: 'LDMP/metadata.txt, plugin metadata and changelog'
      url: 'https://raw.githubusercontent.com/ConservationInternational/trends.earth/main/LDMP/metadata.txt'
    - title: 'pyproject.toml'
      url: 'https://raw.githubusercontent.com/ConservationInternational/trends.earth/main/pyproject.toml'
    - title: 'LICENCE file (GNU General Public License, version 2)'
      url: 'https://github.com/ConservationInternational/trends.earth/blob/main/LICENCE'
    - title: 'LICENSE file (Apache License, version 2.0)'
      url: 'https://github.com/ConservationInternational/trends.earth/blob/main/LICENSE'
    - title: 'Trends.Earth documentation, General information (license, citation, authors, acknowledgements)'
      url: 'https://docs.trends.earth/en/latest/general/index.html'
    - title: 'Trends.Earth documentation, Land degradation and SDG 15.3.1'
      url: 'https://docs.trends.earth/en/latest/for_users/features/unccdreporting.html'
    - title: 'Trends.Earth documentation, Input data'
      url: 'https://docs.trends.earth/en/latest/for_users/datasets/input_data.html'
    - title: 'Trends.Earth documentation, Land consumption and SDG 11.3.1'
      url: 'https://docs.trends.earth/en/latest/for_users/features/landconsumption.html'
    - title: 'Trends.Earth documentation, Features'
      url: 'https://docs.trends.earth/en/latest/for_users/features/index.html'
    - title: 'Trends.Earth documentation, Development'
      url: 'https://docs.trends.earth/en/latest/for_developers/development.html'
    - title: 'trends.earth in the QGIS plugin repository'
      url: 'https://plugins.qgis.org/plugins/LDMP/'
    - title: 'Trends.Earth, Conservation International project page'
      url: 'https://www.conservation.org/projects/trends-earth'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Trends.Earth is a free and open source tool for understanding land change, built as a plugin for the desktop GIS [QGIS](https://qgis.org).[^1,2] It was produced by a partnership of [Conservation International](/organizations/conservation-international/), Lund University and NASA, with support from the Global Environment Facility (GEF).[^1,2] A second GEF-funded project developed it further with the University of Bern, the University of Colorado, the University of California, Santa Barbara, and their partners.[^2,8] Its users apply it to planning and monitoring restoration, tracking urbanization and preparing official national reports for the United Nations Convention to Combat Desertification (UNCCD).[^1] Conservation International says it was piloted in four African countries and can now be used anywhere.[^15]

Its main product is SDG indicator 15.3.1, the proportion of land that is degraded over total land area, built from three sub-indicators following the UNCCD's Good Practice Guidance.[^9] Land productivity uses NDVI as a stand-in for net primary productivity.[^9] It is assessed three ways. Trajectory is a per-pixel linear regression with a Mann-Kendall significance test. State compares a baseline with a recent period in ten percentile classes. Performance compares each pixel with the 90th percentile of its land cover and soil unit.[^9] Three optional climate corrections (RESTREND, rain use efficiency and water use efficiency) separate the effect of rainfall.[^9] Land cover reclassifies two dates of a land cover map into the seven UNCCD classes and labels each transition as degradation, improvement or no change by a matrix the user can edit.[^9] Soil organic carbon starts from SoilGrids stocks for the top 30 cm and applies land-use conversion coefficients from a UNCCD literature review, flagging a loss of 10% or more as degradation.[^9] The three are combined by the one-out-all-out rule, so a pixel flagged by any one of them counts as degraded.[^9]

Beyond 15.3.1 the plugin computes the UNCCD's drought indicators: hazard as the proportion of land under drought from a twelve-month Standardized Precipitation Index (SPI-12), exposure as the population in each drought class, and vulnerability from the JRC's Drought Vulnerability Index.[^9] It computes population exposure to land degradation, disaggregated by sex, from WorldPop rasters.[^9] For SDG 11.3.1, the ratio of land consumption rate to population growth rate, it uses pre-computed 30 m impervious surface indices for 2000, 2005, 2010 and 2015, trained on Landsat in Earth Engine.[^11] Gridded Population of the World v4 is the default population reference, and the guide recommends census data instead.[^11] The documentation also lists carbon emissions from deforestation and carbon sequestration from restoration as features.[^12]

The default datasets are global and free.[^10] NDVI comes from AVHRR/GIMMS (1982 to 2015, 8 km) and from MODIS MOD13Q1 collection 6.1 (2001 to 2024, 250 m).[^10] Land cover is ESA CCI (1992 to 2022, 300 m, CC BY 4.0) and soil carbon is ISRIC's SoilGrids (250 m, CC BY-SA 4.0).[^10] Precipitation can come from GPCP, GPCC, CHIRPS or PERSIANN-CDR, evapotranspiration from MODIS MOD16A2GF, and soil moisture from MERRA-2 or ERA-Interim.[^10] Population is WorldPop at 100 m (2000 to 2020, CC BY 4.0).[^10] Local maps can replace the land cover default.[^9] Landsat appears only as the training imagery for the urban layers, not as an NDVI source.[^10,11]

The computation happens on [Google Earth Engine](/platforms/google-earth-engine/).[^8] The Earth Engine scripts live in the `gee` folder of the repository and are deployed to the api.trends.earth service, which Conservation International maintains, so plugin users run them without programming and without an Earth Engine account of their own.[^13] Two supporting Python packages, trends.earth-algorithms and trends.earth-schemas, hold the shared functions and the data schemas for land cover classes, jobs and UNCCD reports.[^13] Reports are generated locally through `qgis_process`.[^13]

The current release is 2.3.8, published on 16 October 2026.[^3,4,14] It requires QGIS 3.44 or newer and Python 3.12 or newer, and the 2.3.6 release of 9 October 2026 added compatibility with QGIS 4 and Qt 6.[^2,4] It installs from the QGIS plugin repository, where its identifier is LDMP, or from a zip file for offline use.[^2,14]

The licence is given three ways. The `pyproject.toml` and the LICENCE file say GPL-2.0, the documentation says GPL version 2.0 or later, and a second file in the same repository, named LICENSE, is the Apache License 2.0.[^5,6,7,8] The documentation and its products are CC BY 4.0, and the requested citation is "Trends.Earth. Conservation International. Available online at: http://trends.earth. 2026."[^8]
