---
about:
  label: SAWGraph
  description: >-
    Open knowledge graph from the University of Maine and partners that links
    US test results for PFAS with facilities, streams, wells, aquifers,
    drinking water systems, farmland and county boundaries, so they can be
    queried together.
  tags:
    - pfas
    - contamination
    - water quality
    - drinking water
    - wells
    - knowledge graph
    - ontology
    - sparql
tool:
  form: open knowledge graph with open-source ontologies, hosted
  group: Research infrastructure
  homepage: 'https://sawgraph.github.io/'
  licence: 'GPL-3.0 (ContaminOSO and FIO ontologies); data licence unknown'
  cost: unknown
domains:
  - water
  - food
  - places
open:
  source: open
  data: unknown
  api: yes
  participation: unknown
  licence: 'GPL-3.0 (ontologies); data licence unknown'
  note: >-
    The ContaminOSO and FIO ontology repositories on GitHub carry GPL-3.0. No
    licence for the graph data was found on the pages read. The okn.us registry
    lists example queries, endpoints and schema for each of the four registered
    graph components.
provenance:
  origin: agent
  sources:
    - title: 'SAWGraph'
      url: 'https://sawgraph.github.io/'
    - title: 'Project | SAWGraph'
      url: 'https://sawgraph.github.io/aboutus.html'
    - title: 'Data & Methods | SAWGraph'
      url: 'https://sawgraph.github.io/kg.html'
    - title: 'Ontologies | SAWGraph'
      url: 'https://sawgraph.github.io/ontologies.html'
    - title: 'Explore | SAWGraph'
      url: 'https://sawgraph.github.io/explore.html'
    - title: 'Tracing Demo 1 | SAWGraph'
      url: 'https://sawgraph.github.io/tracing.html'
    - title: 'About PFAS | SAWGraph'
      url: 'https://sawgraph.github.io/pfas.html'
    - title: 'Publications | SAWGraph'
      url: 'https://sawgraph.github.io/publications.html'
    - title: 'SAWGraph PFAS KG - okn.us'
      url: 'https://registry.okn.us/registry/kgs/sawgraph/'
    - title: 'Proto-OKN - NSF Proto Open Knowledge Networks'
      url: 'https://www.proto-okn.net/'
    - title: 'GitHub - SAWGraph/contaminoso: The Contaminant Observations and Samples Ontology (ContaminOSO)'
      url: 'https://github.com/SAWGraph/contaminoso'
    - title: 'GitHub - SAWGraph/fio: The Facilities and Industries Ontology that represents facilities from the FRS as well as Industry Classifications and environment-related goverment regulations of them.'
      url: 'https://github.com/SAWGraph/fio'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
PFAS are a large group of man-made chemicals, used in industry and consumer products since the 1940s, and they turn up in stain-resistant carpets, water-repellent clothing, some firefighting foams and products made to resist grease. Many do not break down readily and build up in people and animals. Test results for them often sit in separate datasets, apart from the records of factories, streams and wells nearby. SAWGraph, the Safe Agricultural Products and Water Graph, links all of these in knowledge graphs. A knowledge graph is a database of things and the named relationships between them, such as a well that taps an aquifer or a factory upstream of a river sample.

The University of Maine leads the project with Kansas State University, Pennsylvania State University and Northeastern University, and researchers from the US Environmental Protection Agency take part as federal partners. Torsten Hahmann of the University of Maine is principal investigator. The National Science Foundation funds the work under award 2333782, within its Building the Prototype Open Knowledge Network (Proto-OKN) program. NSF announced that program on 26 September 2023 with $26.7 million for 18 projects, working with NASA, NIH, the National Institute of Justice, NOAA and the US Geological Survey.

The makers name three uses, worked out with government stakeholders and other experts. One is seeing where PFAS testing has happened and where gaps remain, and another is mapping which water systems, wells, farmland and places may be affected. The third is tracing facilities or water pathways that may connect to a measured contamination. Intended users are staff at EPA, USDA, FDA, USGS and state agencies, along with universities and other researchers. One demo asks what fish tissue and surface water results lie downstream of converted paper manufacturing facilities in Maine, and repeated testing in that data clusters along the Kennebec River. The demo notes that lying downstream of a facility does not by itself show the facility released PFAS.

The graph is built in six linked parts: PFAS observations, facilities, hydrology, spatial reference, agriculture and chemical identities. Samples come from the national Water Quality Portal and from Maine's Environmental and Geographic Analysis Database (EGAD). Facilities come from EPA's Facility Registry Service with NAICS industry codes, plus lists of PFAS-related industries compiled by EPA and by the Environmental Council of the States. Streams and lakes come from USGS NHDPlus v2, wells and aquifers from state sources in Maine and Illinois, and public water systems from EPA's Safe Drinking Water Information System. State, county and county subdivision boundaries come from KnowWhereGraph and the Census Bureau. Records are also linked to a grid of level 13 S2 cells and to towns, so data from different parts can be matched by location.

Four parts are registered with the Open Knowledge Network: PFAS, facilities, hydrology and spatial. The agriculture part, covering cropland use, crops and soil properties, is deployed locally and under development, while chemical data from DSSTox sits inside the PFAS part, with a separate part planned. The PFAS part holds 161.3 million triples, each a single statement linking one thing to another, describing 10.9 million subjects. Records name the sampled feature and the medium: groundwater, surface water, waste water, soil, or plant and animal tissue. They also carry food categories such as dairy and seafood, the chemical by DSSTox and CAS identifiers, and the measured value with its detection limit.

The SAWGraph Explorer is a web app for picking features, regions, filters and relationships, and for running prebuilt or shared analyses without writing queries. Each registered part has a page on the okn.us registry with example queries, endpoints and its schema. The PFAS part answers SPARQL, the query language for graphs of this kind, at https://apps.okn.us/sawgraph/sparql. The OKN Query Interface offers another way to work with the registered parts directly. The notebook behind the downstream tracing demo is in the SAWGraph/public repository on GitHub.

Ontologies, shared vocabularies that define each kind of thing and relationship, hold the parts together. ContaminOSO covers contaminant observations and samples and extends an existing ontology called SOSA. The Facilities and Industries Ontology (FIO) covers facilities, industries and organizations, while the spatial terms extend the KnowWhereGraph ontology and use GeoSPARQL, an OGC standard. The SAWGraph Water Ontology draws on HY_Features, HYFO and GWML2 and aligns with Geoconnex. Papers describe ContaminOSO at FOIS 2025, industry classes in FIO at JOWO 2025, the spatial linking method at GIScience 2025 and the CompTox ontology for chemicals at the ACM Web Conference 2026. The ContaminOSO and FIO repositories on GitHub are licensed GPL-3.0.
