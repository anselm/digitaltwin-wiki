---
about:
  depiction: engines/microsoft-planetary-computer.jpg
  depiction_credit: 'NAIP aerial imagery over a hillshade computed on the fly in the Planetary Computer Explorer, from the Planetary Computer changelog. Microsoft, MIT licence.'
  label: Microsoft Planetary Computer
  description: >-
    Microsoft's free catalogue of satellite imagery and environmental data
    on Azure, searched through a STAC API; its notebook service closed in
    2024, so users bring their own computing.
  tags:
    - satellite imagery
    - remote sensing
    - STAC
    - land cover
    - Python
    - cloud
tool:
  form: hosted data catalogue and APIs (preview)
  group: Earth observation and AI
  homepage: 'https://planetarycomputer.microsoft.com/'
  licence: 'open-source components MIT; each dataset under its own licence'
  cost: free
open:
  source: partly
  data: open
  api: 'yes'
  participation: open
  licence: MIT
  note: The APIs, Python package and catalogue site are on GitHub under MIT; the service itself is run by Microsoft under preview terms.
domains:
  - places
  - ecology
  - climate
relations:
  - predicate: alternative_to
    target: engines/google-earth-engine
    note: a free data catalogue that users compute on with their own resources, against a platform that runs the analysis on Google's servers
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: 'Home | Planetary Computer'
      url: 'https://planetarycomputer.microsoft.com/'
    - title: 'About the Microsoft Planetary Computer (docs/overview/about.md)'
      url: 'https://github.com/microsoft/PlanetaryComputerDataCatalog/blob/main/docs/overview/about.md'
    - title: 'Data Catalog | Planetary Computer'
      url: 'https://planetarycomputer.microsoft.com/catalog'
    - title: 'Planetary Computer STAC API: collections (read 2026-10-26)'
      url: 'https://planetarycomputer.microsoft.com/api/stac/v1/collections'
    - title: 'Using Tokens for Data Access (docs/concepts/sas.md)'
      url: 'https://github.com/microsoft/PlanetaryComputerDataCatalog/blob/main/docs/concepts/sas.md'
    - title: 'Computing with the Planetary Computer (docs/concepts/computing.md)'
      url: 'https://github.com/microsoft/PlanetaryComputerDataCatalog/blob/main/docs/concepts/computing.md'
    - title: 'Accessing Planetary Computer data in QGIS (docs/overview/qgis-plugin-open-pc.md)'
      url: 'https://github.com/microsoft/PlanetaryComputerDataCatalog/blob/main/docs/overview/qgis-plugin-open-pc.md'
    - title: 'Terms of Use | Planetary Computer'
      url: 'https://planetarycomputer.microsoft.com/terms'
    - title: 'Retiring the Hub on June 6th, 2024 (microsoft/PlanetaryComputer discussion #347)'
      url: 'https://github.com/microsoft/PlanetaryComputer/discussions/347'
    - title: 'What is Microsoft Planetary Computer Pro? | Microsoft Learn'
      url: 'https://learn.microsoft.com/en-us/azure/planetary-computer/microsoft-planetary-computer-pro-overview'
    - title: "What's new in Microsoft Planetary Computer Pro | Microsoft Learn"
      url: 'https://learn.microsoft.com/en-us/azure/planetary-computer/whats-new'
    - title: 'microsoft/PlanetaryComputer (README)'
      url: 'https://github.com/microsoft/PlanetaryComputer'
    - title: 'Changelog (docs/overview/changelog.md)'
      url: 'https://github.com/microsoft/PlanetaryComputerDataCatalog/blob/main/docs/overview/changelog.md'
    - title: 'microsoft/planetary-computer-apis (GitHub, MIT license)'
      url: 'https://github.com/microsoft/planetary-computer-apis'
    - title: 'microsoft/planetary-computer-sdk-for-python (GitHub, MIT license)'
      url: 'https://github.com/microsoft/planetary-computer-sdk-for-python'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed; the documentation was read as its source files on GitHub'
  status: draft
---
The Microsoft Planetary Computer is a catalogue of environmental data that Microsoft hosts on its Azure cloud and makes available for free, with APIs for finding the data across space and time and a gallery of applications built on it by partners.[^2] Its search API follows the SpatioTemporal Asset Catalog (STAC) standard, which describes where and when each satellite scene or data file was captured.[^2] The service is still labelled a preview, and its terms say previews come without uptime guarantees, may change or be discontinued without notice, and are not meant for anything mission critical.[^1,8]

On 26 October 2026 the API listed 139 collections.[^4] They include the Landsat archive from 1972 to the present, Sentinel-2, Harmonized Landsat and Sentinel-2, MODIS, the ERA5 reanalysis, the Copernicus 30 m and 90 m elevation models, ESA WorldCover land cover, US NAIP aerial photography, Microsoft's building footprints and GBIF species records.[^3,4] Each collection carries its own licence: ESA WorldCover is CC BY 4.0 and the building footprints are ODbL, for example.[^4]

The STAC API can be used anonymously.[^2,5] The files themselves sit in Azure Blob Storage, and reading them needs a short-lived token (a SAS token, a signed key appended to the file's address) that anyone can request without an account; the `planetary-computer` Python package fetches and refreshes these tokens automatically.[^5] Requests from registered users, or from inside Azure's West Europe region where most of the data is stored, get more generous rate limits and longer-lived tokens.[^5,6] QGIS 4.0 and later can browse the catalogue directly through its built-in STAC browser.[^7] The APIs, the Python package and the catalogue website are open source on GitHub under the MIT licence.[^2,12,14,15]

Microsoft launched a hosted Jupyter notebook service, the Planetary Computer Hub, in April 2021 and retired it on 6 June 2024, citing company-wide security requirements the Hub could not meet; the data and APIs were unaffected.[^9] In its place Microsoft suggested Microsoft Fabric, Azure Machine Learning, GitHub Codespaces, or deploying one's own hub from its published guide.[^9] For production work Microsoft recommends the user's own computing, placed in West Europe next to the data.[^6] Microsoft Planetary Computer Pro is a separate Azure service for an organisation's own private geospatial data, deployed as a GeoCatalog resource in an Azure subscription; it reached general availability in June 2026.[^10,11]

For someone modelling a place, the Planetary Computer supplies satellite imagery, land cover and elevation for a watershed or county without downloading whole archives.[^2,3] A script searches the STAC API for the area and dates, then reads only the files it needs.[^5] Unlike [Google Earth Engine](/engines/google-earth-engine/), it does not run the analysis itself, so the computing is the modeller's own.[^6,9]
