---
about:
  label: 'Ontology Pipeline, the book: a review'
  description: >-
    Jessica Talisman's 2026 book from Technics Publications, setting out a
    six-stage method for building a knowledge system from controlled
    vocabulary to knowledge graph, with a browser Studio and a SKOS editor.
  tags:
    - ontology
    - taxonomy
    - knowledge graph
    - controlled vocabulary
    - skos
    - review
    - method
  depiction: cover.jpg
book:
  authors:
    - Jessica Talisman
  publisher: Technics Publications
  year: 2026
  isbn: '9798898161392'
  url: 'https://www.ontologypipeline.com/bookpage'
relations:
  - predicate: cites
    target: terms/ontology
provenance:
  origin: agent
  sources:
    - title: 'Ontology Pipeline — A Framework for Building Knowledge Infrastructures (book page)'
      url: 'https://www.ontologypipeline.com/bookpage'
    - title: 'Ontology Pipeline – Technics Publications (the cover image is the publisher''s)'
      url: 'https://technicspub.com/ontology-pipeline/'
    - title: 'Ontology Pipeline (home)'
      url: 'https://www.ontologypipeline.com/'
    - title: 'Ontology Pipeline Studio'
      url: 'https://jesstalisman-ia.github.io/ontology-pipeline/'
    - title: 'Intentional Arrangement (SKOS) | Ontology Pipeline'
      url: 'https://www.ontologypipeline.com/intentional-arrangement'
    - title: 'The Ontology Pipeline™, Refresh (Modern Data 101, 4 May 2026)'
      url: 'https://moderndata101.substack.com/p/the-ontology-pipeline-refresh'
    - title: 'The Ontology Pipeline™, Refresh (Intentional Arrangement, 25 March 2026)'
      url: 'https://jessicatalisman.substack.com/p/the-ontology-pipeline-refreshed'
    - title: 'The Ontology Pipeline® (Intentional Arrangement, 26 May 2025)'
      url: 'https://jessicatalisman.substack.com/p/the-ontology-pipeline'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: >-
    Claude, from the pages and posts listed; the book itself was not read. The
    year rests on the publisher's listing and reader reviews dated from
    September 2026 on the book page; the pages carry no publication date.
    Suggested by Anselm.
  status: draft
---
**The book.** *Ontology Pipeline: A Framework for Knowledge Engineering* is [published by Technics Publications](https://technicspub.com/ontology-pipeline/) in print and as a PDF, ISBN 9798898161392. The [book's own page](https://www.ontologypipeline.com/bookpage) lists sellers in the US and Australia. The publisher's table of contents opens with an introduction and a chapter called "Enter the librarians". One chapter follows for each stage of the method. Controlled vocabularies then get a detailed treatment: precision and recall as metrics, what a controlled vocabulary is not, how to build one, and corpus analysis from actual usage.

The book also covers SKOS taxonomies, thesauri, RDF, OWL, SHACL and SPARQL, the W3C standards for writing down vocabularies, data and rules and for querying them. It also covers competency questions (what an ontology must be able to answer) and semantic validation. Under governance come semantic debt, staffing, funding and change management. The audience named is data leaders, semantic engineers, taxonomists, knowledge managers, librarians and AI architects.

**The method.** Six stages, in a fixed order, each preparing the next:

1. Controlled vocabulary: align labels, definitions and synonyms.
2. Metadata schema: describe the structure and context of a record.
3. Taxonomy: a navigable hierarchy.
4. Thesaurus: richer relations between terms, and mappings to outside vocabularies.
5. Ontology: formal classes, properties and rules, started from competency questions.
6. Knowledge graph: the stages brought together and queried.

Talisman holds that the order cannot be skipped. A taxonomy built on an undefined vocabulary is not sound, and a knowledge graph built without the stages beneath it will not reason reliably. She first published the framework [as a post](https://jessicatalisman.substack.com/p/the-ontology-pipeline) in 2025, drawing on library and information science and the Semantic Web. She says it was codified from implementations at six institutions over ten years.

A [2026 refresh](https://moderndata101.substack.com/p/the-ontology-pipeline-refresh), on Modern Data 101 and [on her own newsletter](https://jessicatalisman.substack.com/p/the-ontology-pipeline-refreshed), keeps the stages and adds two disciplines around them. Governance keeps an ontology coherent as the organisation changes. In AI partnership, a model surfaces candidate terms, flags inconsistencies and runs tests while a person keeps the modelling judgement. The refresh also takes the field to task: AI-generated taxonomies sold as strategy, the word ontology attached to product category trees, and too few people who know the method as well as the vocabulary.

**The tools beside it.** [Ontology Pipeline Studio](https://jesstalisman-ia.github.io/ontology-pipeline/) is a browser app that walks the six stages with the book's worked example and a second domain. It shows the RDF being built and exports it, and work stays in the browser. [Intentional Arrangement](https://www.ontologypipeline.com/intentional-arrangement) is a SKOS taxonomy editor in a single static web page. It validates as you type and exports to seven formats. It is source-available, not open source, and free for organisations under 75 people. Both are free to use without an account.

**What it offers someone modelling a place.** Nothing in the book is about places; the setting is enterprise content, product data and retrieval. The transfer is still direct. A twin of a city or a watershed joins data from several owners who name the same things differently. Before an engine can run over the joined data, those names have to be reconciled, and the six stages describe that work in order: agree what the words mean, the fields, the hierarchy and the synonyms, then write down the kinds and relations. Standards such as [CityJSON](/ontologies/cityjson/) are the ontology stage done once for everyone in a domain.

The refresh closes on five questions. What problem does this solve? What is the system designed to answer? Who can change what, and when? How will disciplines collaborate? How will the work be sustained? They make a checklist for the [Name the question](/guides/name-the-question/) stage of a twin. The refresh's point that an ontology starts to drift the day it is deployed belongs with [Keep it alive](/guides/keep-it-alive/). The AI-partnership chapter describes, in enterprise terms, what [ontology.monster](/ontologies/ontology-monster/) tries from the other end: a machine proposes kinds and parts from text, and the proposals are recorded for review before anything is applied.

**Where it is thin for this use.** The order is presented as necessary, and for a place it is often reversed in practice. A builder starts from data someone else structured, reads the ontology out of it, and works back to a vocabulary. From the pages read, the method does not say how two finished ontologies are reconciled, the common case for a twin. The examples in the Studio are an enterprise workflow and a second generic domain, not a river or a street. The name is a registered mark, and the business around it sells consulting and courses.

**Where to go next.** The book, the Studio and the SKOS editor are the practical path. The term entry [Ontology](/terms/ontology/) asks why a world has to be cut into kinds at all. [The parts of a digital twin](/articles/parts-of-a-twin/) shows where the ontology layer fits in a running twin. The [World–Earth taxonomies](/ontologies/world-earth-taxonomies/) paper orders the subsystems of a place or a planet instead of an enterprise's content.
