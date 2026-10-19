---
about:
  label: 'Ontology Pipeline, the book: a review'
  description: >-
    Jessica Talisman's 2026 book from Technics Publications sets out a method
    for building a knowledge system in six stages, from controlled vocabulary
    through taxonomy and thesaurus to ontology and knowledge graph, with a
    browser Studio and a SKOS editor beside it; read here for what it offers
    someone modelling a place.
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
**The book.** *Ontology Pipeline: A Framework for Knowledge Engineering*, by Jessica Talisman, [published by Technics Publications](https://technicspub.com/ontology-pipeline/) in print and as a PDF, ISBN 9798898161392. The [book's own page](https://www.ontologypipeline.com/bookpage) lists sellers in the US and Australia. The publisher's table of contents runs from an introduction and a chapter called "Enter the librarians" through one chapter per stage of the method, then controlled vocabularies in detail, with sections on precision and recall as metrics, what a controlled vocabulary is not, how to build one, and corpus analysis from actual usage. The book page says the book covers SKOS taxonomies, thesauri, RDF, OWL, SHACL and SPARQL; competency questions and semantic validation; and governance, meaning semantic debt, staffing, funding and change management. It is written for data leaders, semantic engineers, taxonomists, knowledge managers, librarians and AI architects.

**The method.** Six stages in a fixed order, each preparing the next: controlled vocabulary (align labels, definitions and synonyms), metadata schema (describe the structure and context of a record), taxonomy (a navigable hierarchy), thesaurus (richer relations between terms, and mappings to outside vocabularies), ontology (formal classes, properties and rules, started from competency questions), and knowledge graph (the stages brought together and queried). The claim is that the order cannot be skipped: a taxonomy built on an undefined vocabulary is not sound, and a knowledge graph built without the stages beneath it will not reason reliably. Talisman first published the framework [as a post](https://jessicatalisman.substack.com/p/the-ontology-pipeline) in 2025, drawing on library and information science and the Semantic Web, and says it was codified from implementations at six institutions over ten years. A [2026 refresh](https://moderndata101.substack.com/p/the-ontology-pipeline-refresh), on Modern Data 101 and [on her own newsletter](https://jessicatalisman.substack.com/p/the-ontology-pipeline-refreshed), keeps the stages and adds two disciplines around them: governance, the practice that keeps an ontology coherent as the organisation changes, and AI partnership, in which a model surfaces candidate terms, flags inconsistencies and runs tests while a person keeps the modelling judgement. The refresh is also a plain-spoken reckoning with the field: AI-generated taxonomies sold as strategy, the word ontology attached to product category trees, and a shortage of people who know the method rather than the vocabulary.

**The tools beside it.** [Ontology Pipeline Studio](https://jesstalisman-ia.github.io/ontology-pipeline/) is a browser app that walks the six stages with the book's own worked example and a second domain, shows the RDF being built, and exports it; work stays in the browser. [Intentional Arrangement](https://www.ontologypipeline.com/intentional-arrangement) is a SKOS taxonomy editor that runs as a single static page in the browser, validates as you type, and exports to seven formats; it is source-available rather than open source, free for organisations under 75 people. Both are free to use without an account.

**What it offers someone modelling a place.** Nothing in the book is about places; the setting is enterprise content, product data and retrieval. The transfer is still direct. A twin of a city or a watershed joins data from several owners who name the same things differently, and the six stages are a plain description of the reconciliation that has to happen before an engine can run over the joined data: agree what the words mean, agree the fields, agree the hierarchy, agree the synonyms, then write down the kinds and relations. Standards such as [CityJSON](/ontologies/cityjson/) are the ontology stage done once for everyone in a domain. The refresh's five closing questions, what problem this solves, what the system is designed to answer, who can change what and when, how disciplines will collaborate, how the work will be sustained, are a good checklist for the [Name the question](/guides/name-the-question/) stage of a twin, and the point that an ontology starts to drift the day it is deployed belongs beside [Keep it alive](/guides/keep-it-alive/). The AI-partnership chapter describes, in enterprise terms, what [ontology.monster](/ontologies/ontology-monster/) tries from the other end: a machine proposes kinds and parts from text, and the proposals are recorded for review rather than applied.

**Where it is thin for this use.** The order is presented as necessary, and for a place it is often reversed in practice: a builder starts from data someone else structured, reads the ontology out of it, and works back to a vocabulary. From the pages read, the method does not say how two finished ontologies are reconciled, which is the common case for a twin. The examples in the Studio are an enterprise workflow and a second generic domain, not a river or a street. The name is a registered mark and the business around it sells consulting and courses, which does not change the method but is worth knowing when reading the site.

**Where to go next.** The book, the Studio and the SKOS editor are the practical path. For the question of why a world has to be cut into kinds at all, see the term entry [Ontology](/terms/ontology/); for how the ontology layer sits in a running twin, [The parts of a digital twin](/articles/parts-of-a-twin/); for a scheme for ordering the subsystems of a place or a planet rather than an enterprise's content, the [World–Earth taxonomies](/ontologies/world-earth-taxonomies/) paper.
