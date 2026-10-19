---
about:
  label: Intentional Arrangement (SKOS editor)
  description: >-
    A SKOS taxonomy editor from Jessica Talisman's Ontology Pipeline that runs
    as one static page in the browser with no account or server; validates as
    you type with qSKOS checks and exports to seven formats.
  tags:
    - skos
    - taxonomy
    - controlled vocabulary
    - browser
    - no account
    - source available
tool:
  form: source-available browser application
  group: Research infrastructure
  homepage: 'https://www.ontologypipeline.com/intentional-arrangement'
  cost: free for organisations under 75 people; enterprise licence above
open:
  source: partly
  data: unknown
  api: yes
  participation: open
  note: >-
    Source-available, not OSI open source: free under a size-based licence for
    organisations with fewer than 75 employees, a written licence at 75 and
    above; taxonomies made with it stay the maker's own. Issues, discussions
    and a roadmap are public on GitHub.
relations:
  - predicate: built_on
    target: ontologies/the-ontology-pipeline
provenance:
  origin: agent
  sources:
    - title: 'Intentional Arrangement (SKOS) | Ontology Pipeline'
      url: 'https://www.ontologypipeline.com/intentional-arrangement'
    - title: 'GitHub - jesstalisman-ia/intentional-arrangement-skos'
      url: 'https://github.com/jesstalisman-ia/intentional-arrangement-skos'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Intentional Arrangement is a local-first workspace for building a SKOS taxonomy: a single self-contained page that opens in a browser, saves projects in that browser rather than in a cloud, and asks for no account. Candidate terms are collected in a glossary and promoted into concepts; concepts take multilingual labels, definitions and poly-hierarchies; proposed terms are reviewed before approval. qSKOS quality checks run as you type. Vocabularies can be aligned with the five SKOS mapping relations, with original URIs preserved, and exported singly or as a federation. A graph view shows concepts, sources and mappings; SPARQL runs in the browser; a read-only business view can be shared. Export covers Turtle, RDF/XML, JSON-LD, CSV, Excel, RDF/JSON and Markdown.

The working model follows SKOS, SKOS-XL, Dublin Core, ISO 25964 and qSKOS. Collections sit beside the hierarchy rather than inside it. An optional REST API handles validation and conversion, an MCP server exposes the tool to assistants, and publishing to an Apache Jena Fuseki server is optional; the editor itself needs no server. The repository, under the GitHub account jesstalisman-ia, carries a roadmap, discussions and a security policy. The licence is held by Contextually LLC, doing business as Ontology Pipeline, and is size-based and source-available rather than open source.

For a twin it is a way to do the first stages of [the Ontology Pipeline](/ontologies/the-ontology-pipeline/) on a real vocabulary, the names a city, a utility and a research group each use for the same assets, without installing anything, and to export the result as RDF that other tools read. The plain-language query feature uses offline rules, not a language model.
