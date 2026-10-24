---
about:
  label: 3D-Stadtmodell Stadt Zürich
  description: >-
    The City of Zürich's 3D roof model from the cadastral survey and photogrammetry, plus yearly LoD2 models and historical reconstructions, published as open geodata with downloads and web services.
  tags:
    - Zürich
    - city model
    - open data
    - CityGML
    - LoD2
twin:
  place: 'Zürich, Switzerland'
  scale: city
  operational: operational
  homepage: 'https://www.stadt-zuerich.ch/geodaten/download/Bauten___Dachmodell'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  note: >-
    Each dataset is marked free of usage restrictions, downloadable whole or
    by clipped extent, and served as WMS, WFS and WMTS.
domains: [places]
provenance:
  origin: agent
  sources:
    - title: 'Bauten - Dachmodell (3D) - Stadt Zürich'
      url: 'https://www.stadt-zuerich.ch/geodaten/download/Bauten___Dachmodell'
    - title: '3D-Dachmodell LoD2 Jahresstand 2018 (3D) - Stadt Zürich'
      url: 'https://www.stadt-zuerich.ch/geodaten/download/3D_Dachmodell_LoD2_Jahresstand_2018'
    - title: '3D-Stadtmodell Stadt Zürich Jahresendstand 1200 - Stadt Zürich'
      url: 'https://www.stadt-zuerich.ch/geodaten/download/3D_Stadtmodell_Stadt_Zuerich_Jahresendstand_1200'
    - title: 'Geodaten betrachten und beziehen - Stadt Zürich'
      url: 'https://www.stadt-zuerich.ch/geodaten/'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Zürich's reference 3D geodata are published through the city's geodata portal.[^4] The main one, Bauten - Dachmodell (3D), is a roof model built on the building footprints of the official cadastral survey.[^1] Its roof structures are measured photogrammetrically, from overlapping aerial photographs.[^1]

There are also 3D roof models at LoD2 for 2011, 2013, 2015 and 2018.[^4] LoD2 (level of detail 2) shows buildings as blocks with their roof shapes. Each covers the building envelope and roofs from that year's aerial survey.[^2] A series of historical city models reconstructs the whole municipal area for around 3000 BC, AD 200, 1200, 1500 and 1800.[^3,4] There is also a 3D street-noise profile dataset.[^4]

Every dataset is marked "frei von Nutzungsbeschränkungen" (free of usage restrictions), but no licence is named.[^1,2,3] There is no code to speak of. Downloads come in these formats:[^1,2,3]

- the roof model, for the whole city or a chosen extent, as ESRI File Geodatabase, GeoPackage or DXF, and as CityGML for the entire city
- the LoD2 models as GeoPackage or DXF
- the historical models as Wavefront OBJ

Each is also served through the standard web map services WMS, WFS and WMTS.[^1,2,3]

The roof model's data date is 25 April 2021, with irregular updates.[^1] The LoD2 2018 model was last updated on 24 May 2024, and no further update is planned.[^2] The historical models have a data date of 23 September 2025 and are updated as needed.[^3]
