---
about:
  label: 'The Ontology Pipeline, refreshed: a review'
  description: >-
    Jessica Talisman's framework for building a knowledge system in order,
    from controlled vocabulary through taxonomy and thesaurus to ontology and
    knowledge graph, as restated in 2026 with governance and AI assistance
    added; read here for what it offers someone modelling a place.
  tags:
    - ontology
    - taxonomy
    - knowledge graph
    - controlled vocabulary
    - review
    - method
article:
  url: 'https://moderndata101.substack.com/p/the-ontology-pipeline-refresh'
  published: '2026-05-04'
  publisher: Modern Data 101
  authors:
    - Jessica Talisman
relations:
  - predicate: cites
    target: terms/ontology
provenance:
  origin: agent
  sources:
    - title: 'The Ontology Pipeline™, Refresh (Modern Data 101, 4 May 2026)'
      url: 'https://moderndata101.substack.com/p/the-ontology-pipeline-refresh'
    - title: 'The Ontology Pipeline™, Refresh (Intentional Arrangement, 25 March 2026)'
      url: 'https://jessicatalisman.substack.com/p/the-ontology-pipeline-refreshed'
    - title: 'The Ontology Pipeline® (Intentional Arrangement, 26 May 2025)'
      url: 'https://jessicatalisman.substack.com/p/the-ontology-pipeline'
    - title: 'Intentional Arrangement'
      url: 'https://jessicatalisman.substack.com/'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the three posts read; suggested by Anselm'
  status: draft
---
**What it is.** [The Ontology Pipeline](https://jessicatalisman.substack.com/p/the-ontology-pipeline) is Jessica Talisman's framework for building a semantic knowledge system in a fixed order: controlled vocabulary, metadata standards, taxonomy, thesaurus, ontology, knowledge graph. Each stage prepares the ground for the next, and the author's claim is that the order cannot be skipped: a taxonomy built on an undefined vocabulary is not sound, and a knowledge graph built without the stages beneath it will not reason reliably. She says the framework was codified from implementations at six institutions over ten years and draws on library and information science and the Semantic Web, where disambiguation, hierarchies and metadata standards were worked out long before the current interest in AI. The [2026 refresh](https://moderndata101.substack.com/p/the-ontology-pipeline-refresh), published on Modern Data 101 and [first on her own newsletter](https://jessicatalisman.substack.com/p/the-ontology-pipeline-refreshed), keeps the five stages and adds two disciplines around them: governance, the practice that keeps an ontology coherent as the organisation changes, and AI partnership, in which a model surfaces candidate terms, flags inconsistencies and runs tests while a person keeps the modelling judgement.

**What it argues.** The refresh is mostly a reckoning with the field since late 2022. Demand for semantic infrastructure has become a business imperative and the signal has dropped: AI-generated taxonomies sold as strategy, the word ontology attached to product category trees, "context graphs" as a job title without a method. Her line is blunt: a list without definitions, deduplication and a way of resolving synonyms and homonyms is not a controlled vocabulary, and the failures that follow, search that returns the wrong things and retrieval-augmented systems that hallucinate, are predictable consequences of skipping the work. The second argument is about people. The supply of practitioners who can do the work has not kept up with demand, the gap is filled by people who know the vocabulary and not the method, and the remedy she asks for is education and mentorship on real data, funded by employers. The post ends with five questions to ask before building: what problem this solves, what the system is designed to answer, who can change what and when, how disciplines will collaborate, and how the work will be sustained.

**What it offers someone modelling a place.** Nothing in the framework is about places; the setting is enterprise content, product data and retrieval. The transfer is still direct. A twin of a city or a watershed joins data from several owners who name the same things differently, and the stages of the pipeline are a plain description of the reconciliation that has to happen before an engine can run over the joined data: agree what the words mean, agree the fields, agree the hierarchy, agree the synonyms, then write down the kinds and relations. Standards such as [CityJSON](/ontologies/cityjson/) are the ontology stage done once for everyone in a domain. The five closing questions are a good checklist for the [Name the question](/guides/name-the-question/) stage of a twin, and the point that an ontology starts to drift the day it is deployed belongs beside [Keep it alive](/guides/keep-it-alive/). The AI-partnership section describes, in enterprise terms, what [ontology.monster](/ontologies/ontology-monster/) tries from the other end: a machine proposes kinds and parts from text, and the proposals are recorded for review rather than applied.

**Where it is thin for this use.** The order is presented as necessary, and for a place it is often reversed in practice: a builder starts from data someone else structured, reads the ontology out of it, and works back to a vocabulary. The framework does not say how two finished ontologies are reconciled, which is the common case for a twin. It is a method, not a tool or a dataset, and the name is trademarked; there is no code, schema or example to download. The posts are written for leaders who must fund the work, so the argument spends more time on why than on how; the original 2025 post is closer to the how.

**Where to go next.** The three posts are free to read, and the author's newsletter, [Intentional Arrangement](https://jessicatalisman.substack.com/), carries the running argument; a book of the same name is announced there for 2026. For the question of why a world has to be cut into kinds at all, see the term entry [Ontology](/terms/ontology/); for how the ontology layer sits in a running twin, [The parts of a digital twin](/articles/parts-of-a-twin/); for a scheme for ordering the subsystems of a place or a planet rather than an enterprise's content, the [World–Earth taxonomies](/ontologies/world-earth-taxonomies/) paper.
