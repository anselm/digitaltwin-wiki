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
CityJSON is a JSON-based encoding for storing 3D city models, which its makers also call digital maquettes or digital twins. It encodes a subset of the Open Geospatial Consortium's CityGML data model, version 3.0, the open standardised model and GML exchange format for 3D models of cities and landscapes; the few CityGML features it leaves out are seldom used or would complicate the JSON. Files convert in both directions with the open-source citygml-tools, so a CityJSON user is using the CityGML data model. Version 2.0 is an official OGC standard, document 20-072r5.

The project's aim is a compact, developer-friendly format so that files are easy to visualise, manipulate and edit and tools and APIs supporting it can be built quickly. It says files are on average seven times smaller than their CityGML-XML equivalents. Around the format sit a web viewer, a validator, the command-line tool cjio for merging, filtering, reprojecting and texture management, and Extensions for adding to the core model. Development is open on GitHub. The site reported the latest specification as version 2.0.2 and, in August 2026, a cloud-optimised variant called FlatCityBuf with C++, Python and TypeScript bindings.

On this shelf it stands for what an ontology looks like in daily practice: a shared agreement about what a building, a bridge or a tree is, which attributes it carries, and how parts relate, which is what lets a model built in one city read the data of another.
