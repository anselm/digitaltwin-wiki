---
about:
  label: Open Knowledge Format
  description: >-
    An open specification from Google Cloud's Data Cloud team for keeping
    curated knowledge as a directory of markdown files with YAML frontmatter
    and ordinary links between them, so that people, AI agents and other
    tools can read the same files without a translation layer.
  tags:
    - knowledge
    - markdown
    - metadata
    - agents
    - specification
    - provenance
tool:
  form: open specification
  group: Research infrastructure
  homepage: 'https://github.com/GoogleCloudPlatform/open-knowledge-format'
  licence: Apache 2.0
  cost: free
open:
  source: open
  data: open
  api: 'no'
  participation: open
  licence: Apache 2.0
  note: 'A file format, not a service: no API, account or SDK is needed to read or write a bundle. Issues, pull requests and other implementations are invited.'
provenance:
  origin: agent
  sources:
    - title: 'Open Knowledge Format (OKF), version 0.2 specification'
      url: 'https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md'
    - title: 'How the Open Knowledge Format can improve data sharing'
      url: 'https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing/'
    - title: 'Open Knowledge Format (OKF), okf/README.md in the knowledge-catalog repository'
      url: 'https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/README.md'
    - title: 'Knowledge Catalog (repository README)'
      url: 'https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/README.md'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; the spec and READMEs were read as raw files from the same repository. The homepage is the repository the okf/README names as the current home; it was not opened.'
  status: draft
---
The Open Knowledge Format (OKF) is a specification for a knowledge corpus that lives as plain files. Google Cloud's Data Cloud team announced it on 12 June 2026 in a post by Sam McVeety and Amir Hormati, who describe it as a formalisation of the "LLM wiki" pattern: a folder of markdown that a model or agent reads as context and keeps up to date, as in Andrej Karpathy's gist of that name. The post says the makers wanted a format rather than another service, and that OKF is tied to no cloud, database, model provider or agent framework.

A bundle is a directory tree. Each markdown file is a concept, which can be a table, a dataset, a metric, a runbook, an API or an idea; the file's path is its identity. A YAML frontmatter block carries a few queryable fields, and the only required one is `type`. Recommended fields are `title`, `description`, `resource` (a URI for the asset the file describes) and `tags`. Ordinary markdown links between files make the directory a graph; the kind of relationship is carried by the surrounding prose, not by the link. Two filenames are reserved: `index.md`, a listing of a directory for progressive disclosure, and `log.md`, a dated history of changes. Version 0.2 of the spec adds optional families for provenance (a `sources` list with per-source signals such as author, usage count and last-modified date), trust (`generated` and `verified`, from which a reader derives a tier of unverified, machine-confirmed or human-reviewed), lifecycle (`status` and `stale_after`) and a concept type called Attested Computation, which pins down how a figure is meant to be calculated so that a consumer can check a reported number against that recipe. Consumers must accept unknown types, unknown keys, missing optional fields and broken links.

Bundles ship as a git repository, an archive or a subdirectory of a larger repository, and need no tooling beyond a text editor to read or write. Google published reference pieces alongside the spec: an enrichment agent that reads a BigQuery dataset, writes one concept file per table or view, and on a second pass adds citations, schemas and join paths from documentation it crawls; a single-file HTML visualiser that shows a bundle as a graph; and sample bundles for the GA4 e-commerce, Stack Overflow and Bitcoin public datasets. Google Cloud's Knowledge Catalog, formerly Dataplex, can ingest OKF bundles. The repository that holds the spec and reference code is under the Apache 2.0 licence and carries a disclaimer that it is not an official Google product.

The spec is at version 0.2. Its canonical home has moved to a repository of its own, GoogleCloudPlatform/open-knowledge-format; the copy under knowledge-catalog is a frozen snapshot. The makers describe the format as a starting point that will change as producers and consumers appear.

It sits on this shelf because it is a way to keep a vocabulary and its relations as plain files beside the data they describe, readable by a person and by a model. It gives no help choosing the terms themselves: OKF fixes the file conventions and leaves the types and their relations to whoever writes the bundle, which is the work that a method such as the [Ontology Pipeline](/ontologies/the-ontology-pipeline/) sets out.
