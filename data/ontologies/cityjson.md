---
about:
  label: CityJSON
  description: >-
    A JSON encoding of the OGC CityGML data model for 3D city models, with
    open tools to convert, validate, view and edit files; version 2.0 is an
    official OGC standard.
  tags:
    - 3d city models
    - standards
    - citygml
    - ogc
    - data model
    - open source
tool:
  form: open data standard with open-source tools
  group: 3D cities and mapping
  homepage: 'https://www.cityjson.org/'
  cost: free
domains:
  - places
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  note: 'Development is open on GitHub and the project invites contributions.'
provenance:
  origin: agent
  sources:
    - title: 'Home | CityJSON'
      url: 'https://www.cityjson.org/'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
JSON is a common text format for data on the web. CityJSON stores 3D city models, which its makers also call digital maquettes or digital twins. CityGML is the Open Geospatial Consortium's open standard data model for 3D models of cities and landscapes. CityJSON encodes a subset of its version 3.0. CityGML's own exchange format is GML, an XML-based geography markup. The few CityGML features CityJSON leaves out are seldom used or would complicate the JSON. The open-source citygml-tools convert files in both directions, so a CityJSON user is using the CityGML data model. Version 2.0 is OGC document 20-072r5.

The aim is a compact format whose files are easy to visualise, manipulate and edit, and for which tools and APIs can be built quickly. The project says files are on average seven times smaller than their CityGML-XML equivalents. The tools include a web viewer and a validator, and Extensions add to the core model. The command-line tool cjio merges, filters and reprojects files and manages textures. Development is open on GitHub.

The latest specification listed is version 2.0.2. In August 2026 the site reported FlatCityBuf, a cloud-optimised variant with C++, Python and TypeScript bindings.
