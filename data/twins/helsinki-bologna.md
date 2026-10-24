---
about:
  label: Helsinki / Bologna
  description: >-
    Helsinki publishes its 3D city models and an energy and
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
Helsinki 3D is the set of 3D city models the City of Helsinki calls its digital twin.[^1] There are two models.

The 3D mesh is a textured surface built from summer aerial photographs, accurate to within 20 cm.[^1] It downloads as OBJ and 3MX under CC BY 4.0 and opens in Blender, MeshLab, CAD and GIS tools or a game engine.[^1]

The urban data model describes buildings in CityGML 2.0, an open standard for city models that records what each object is as well as its shape. Buildings come at LoD1 (simple blocks) and LoD2 (with roof shapes), textured or not, on a terrain model.[^1] The sources are the city's base map, registers, laser-scanned point clouds and building models.[^1] The model is stored in a 3DCityDB database and served on the web through Cesium, a 3D map viewer. It is continuously updated.[^1] Each building carries its register identifiers, so other data can be joined to each record.[^1]

The Energy and Climate Atlas, a free browser service at kartta.hel.fi/3d/atlas, is built on the data model. It shows building energy and renovation data, simulated heating demand under a warming climate, and solar potential for nearly a million roof and wall surfaces.[^1] The atlas also gives geothermal potential for wells 100, 300 and 1,000 m deep. It is still in development, with microclimate modelling and renovation cost estimates planned.[^1]

The Kalasatama Digital Twins project (April 2018 to January 2019) modelled a construction district on the principle of designing, testing and building digitally first. City modelling in Helsinki goes back to the 1980s.[^1]

Bologna's digital twin is a project of the Municipality of Bologna.[^2] The aim is a dynamic model of the city and its functioning, fed by data shared by stakeholders and citizens, to serve as civic infrastructure for decisions on climate, economic and social change.[^2] It started with 7 million euros from European Cohesion funds and Italy's National Recovery and Resilience Plan.[^2] A public consortium runs it:

- the municipality, as strategic coordinator
- the Bruno Kessler Foundation, as technical coordinator and project manager
- the University of Bologna, as scientific lead
- Cineca, for technology
- the Fondazione Innovazione Urbana, for community and citizen engagement[^2]

Bologna develops the twin in partnership with Barcelona. It is also the Italian pilot for the national HPC, Big Data and Quantum Computing Centre.[^2] The first use cases are mobility (the 30 km/h city, trams, cycle lanes), the energy performance of the building stock, urban planning, and emergencies such as the Garisenda Tower. A climate and hydrogeological case was added after the Emilia-Romagna floods.[^2] The Fondazione began public dialogue on the twin in March 2021. No completion date has been given.[^2]
