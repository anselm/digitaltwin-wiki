---
about:
  label: ontology.monster
  description: >-
    An experiment by Anselm Hook in which a machine reads the news, finds the
    things each story is about, decides what kinds of things they are, and
    lets the vocabulary of kinds and parts grow from the text; the things on a
    map over time, with the source code public.
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
The site is the public face of ontology-scraper. On a schedule a machine polls news feeds, fetches each article, and has a language model read it against a fixed schema: a summary, when it happened, every entity mentioned, each entity's top kind (agent, place, thing, event or work), a proposed finer kind, aliases, where it was, and the relations between entities. Mentions are resolved into entities, linked conservatively to Wikidata, and placed; countries, provinces and seas draw as regions. Once enough new kinds exist, a census of the parts each kind actually carries goes back to a model, which proposes merges, a hierarchy and new parts. Proposals are recorded as proposals rather than applied silently.

The site shows its working: a map of every placed thing in a window of time, a graph of their relations, the kinds proposed so far with their members, the components that kinds share (a person has a lifespan and roles, a place has a location and an extent), dated notes, and the state of each source in the pipeline.

The stated aim is discovery rather than fit: most knowledge graphs start from a schema and fit the world into it, while this one starts from text and lets kinds and parts emerge and be revised when they strain. Five top kinds are fixed; everything below them is data. It is on this shelf as a live example of ontologies being built the other way round, from observation up, which is the problem a twin of a place has to solve when it joins data from several sources. The code is public and the README describes a way for anyone with a model to donate analysis of unread articles. The opposite approach, building the vocabulary first and in order, is the subject of [The Ontology Pipeline](/ontologies/the-ontology-pipeline/).
