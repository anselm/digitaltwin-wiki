---
about:
  label: Helsinki / Bologna
  description: >-
    The City of Helsinki publishes its 3D city models and an energy and
    climate atlas as open data; the Municipality of Bologna is building a
    digital twin as civic infrastructure with a public research consortium.
  tags:
    - city model
    - open data
    - CityGML
    - energy atlas
    - civic
domains: [places, energy]
twin:
  place: 'Helsinki, Finland; Bologna, Italy'
  scale: city
  operational: 'Helsinki yes; Bologna in development'
  form: Municipal programs
  homepage: >-
    https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d
open:
  source: unknown
  data: partly
  api: unknown
  participation: partly
  licence: 'CC BY 4.0 (Helsinki 3D mesh)'
provenance:
  origin: agent
  sources:
    - title: 'Helsinki 3D | City of Helsinki'
      url: >-
        https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d
    - title: Bologna Digital Twin
      url: 'https://fondazioneinnovazioneurbana.it/en/project/bolognadigitaltwin'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: proposed
---
Helsinki 3D is the City of Helsinki's set of 3D city models, which the city calls its digital twin. There are two models. The 3D mesh is a textured surface built from summer aerial photographs, accurate to within 20 cm, downloadable as OBJ and 3MX under CC BY 4.0 and usable in Blender, MeshLab, CAD and GIS tools or a game engine. The urban data model is a semantic CityGML 2.0 model of buildings (LoD1 and LoD2, textured or not) on a terrain model, built from the city's base map, registers, laser-scanned point clouds and building models, served through Cesium from a 3DCityDB database, continuously updated, with each building carrying its register identifiers so other data can be joined to it. On top of it sits the Energy and Climate Atlas, a free browser service at kartta.hel.fi/3d/atlas with building energy and renovation data, simulated heating demand under a warming climate, solar potential for nearly a million roof and wall surfaces, and geothermal potential for 100, 300 and 1,000 m wells; the city says it is still in development, with microclimate modelling and renovation cost estimates planned. The page also records the Kalasatama Digital Twins project (April 2018 to January 2019), which modelled a construction district on the principle of designing, testing and building digitally first, and a history of city modelling in Helsinki going back to the 1980s.

Bologna's digital twin is a project of the Municipality of Bologna, described by the Fondazione Innovazione Urbana as a dynamic model of the city and its functioning fed by data shared by stakeholders and citizens, meant as civic infrastructure for decisions on climate, economic and social change. It started with 7 million euros from European Cohesion funds and Italy's National Recovery and Resilience Plan and is run by a public consortium: the municipality as strategic coordinator, the Bruno Kessler Foundation as technical coordinator and project manager, the University of Bologna as scientific lead, Cineca for technology and the Fondazione for community and citizen engagement. It is developed in partnership with Barcelona and is the Italian pilot for the national HPC, Big Data and Quantum Computing Centre. First use cases are mobility (the 30 km/h city, trams, cycle lanes), the energy performance of the building stock, urban planning and emergencies such as the Garisenda Tower, with a climate and hydrogeological case added after the Emilia-Romagna floods. The Fondazione began public dialogue on the twin in March 2021.

Status: Helsinki's models and atlas are in operation as open data. Bologna's twin is in development; the page gives no completion date.
