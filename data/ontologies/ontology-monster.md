---
about:
  label: ontology.monster
  description: >-
    An experiment by Anselm Hook in which a machine reads the news, finds the
    things each story is about and grows a vocabulary of kinds and parts from
    the text, with the things mapped over time.
  tags:
    - ontology
    - entity extraction
    - knowledge graph
    - news
    - open source
    - experiment
tool:
  form: open-source service, hosted
  group: Research infrastructure
  homepage: 'https://ontology.monster/'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  note: 'Code on GitHub; analysis can be donated by anyone with a model.'
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'ontology.monster · the things the news is about, on a map, over time'
      url: 'https://ontology.monster/'
    - title: 'anselm/ontology-scraper (README)'
      url: 'https://github.com/anselm/ontology-scraper'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; the maker runs this wiki, so the entry should be read with that in mind'
  status: draft
---
The site is the public face of ontology-scraper. On a schedule, a machine polls news feeds and fetches each article. A language model then reads the article against a fixed schema:

- a summary
- when it happened
- every entity mentioned
- each entity's top kind (agent, place, thing, event or work) and a proposed finer kind
- aliases
- where it was
- the relations between entities

Mentions are resolved into entities, linked conservatively to Wikidata and placed. Wikidata is an open knowledge base run by the Wikimedia Foundation. Countries, provinces and seas draw as regions. Once enough new kinds exist, a model receives a census of the parts each kind carries and proposes merges, a hierarchy and new parts. These are recorded as proposals, not applied silently.

The site shows its working:

- a map of every placed thing in a window of time
- a graph of their relations
- the kinds proposed so far, with their members
- the components that kinds share, such as a lifespan and roles for a person, or a location and an extent for a place
- dated notes
- the state of each source in the pipeline

Most knowledge graphs begin with a schema and fit the world to the schema. This one starts from text, lets kinds and parts emerge, and revises them when they strain. Five top kinds are fixed; everything below them is data. A twin of a place meets the same problem, building kinds from observation up, when it joins data from several sources.

The code is public. The README describes how anyone with a model can donate analysis of unread articles. The opposite approach, building the vocabulary first and in order, is the subject of [The Ontology Pipeline](/ontologies/the-ontology-pipeline/).
