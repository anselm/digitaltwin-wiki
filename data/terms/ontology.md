---
about:
  label: Ontology
  description: >-
    The set of things, kinds and relations a model admits: the decision about
    how to cut a continuous world into parts that can be named, counted and
    simulated.
  tags:
    - ontology
    - categories
    - data model
    - knowledge
term:
  aka:
    - data model
    - taxonomy
    - schema
    - vocabulary
relations:
  - predicate: cites
    target: ontologies/world-earth-taxonomies
  - predicate: cites
    target: ontologies/cityjson
provenance:
  origin: agent
  sources:
    - title: 'Prototype theory - Wikipedia'
      url: 'https://en.wikipedia.org/wiki/Prototype_theory'
    - title: 'Women, Fire, and Dangerous Things - Wikipedia'
      url: 'https://en.wikipedia.org/wiki/Women,_Fire,_and_Dangerous_Things'
    - title: 'John Muir - Wikiquote'
      url: 'https://en.wikiquote.org/wiki/John_Muir'
    - title: 'Taxonomies for structuring models for World–Earth systems analysis of the Anthropocene'
      url: 'https://esd.copernicus.org/articles/12/1115/2021/'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed, after a conversation with Anselm on 2026-10-19'
  status: draft
---
In software an ontology is the inventory of kinds a system knows, the properties each kind carries, and the relations allowed between them. A city data model says that a building has a footprint, a height and a use and stands on a parcel; a hydrological model says that a catchment drains through reaches to an outlet. Every model of a place has one, whether it is written down as a standard, implied by a database schema, or buried in the code.

The word is borrowed from philosophy, where it names the study of what exists, and the borrowing is apt. The world does not come in pieces. It is one continuous whole, and a "thing" is a region of it where relationships are so tightly entangled that it is useful to draw a boundary and give the inside a name: a dog, a river, a government, a storm. The boundary is a human convenience that more or less holds. John Muir put the other side of it in *My First Summer in the Sierra*: "When we try to pick out anything by itself, we find it hitched to everything else in the universe."

How people actually draw those boundaries is the subject of prototype theory. Eleanor Rosch's work from 1971 showed that membership in a category is graded, with some members more central than others, so that a robin is a better example of a bird than a penguin, and that categories form around a best example rather than a list of necessary features. George Lakoff's *Women, Fire, and Dangerous Things* (1987) built on this: categories are radial, structured around central cases with extensions, their boundaries are fuzzy, and they are shaped by idealised cognitive models that can differ between cultures. The book's title comes from a noun class in the Dyirbal language that groups women, water, fire, violence and certain animals.

For a builder this has a practical edge. A model's ontology is a bet about which boundaries matter for the question being asked, and two models of the same place drawn with different boundaries will not join without translation. Standards such as CityGML, encoded as [CityJSON](/ontologies/cityjson/), are shared bets that let one city's data be read by another's tools. At planetary scale, Donges and colleagues' [taxonomies for World–Earth models](/ontologies/world-earth-taxonomies/) propose three kinds of subsystem and a scheme for the interactions between them, so that components from different modelling traditions can be combined and the missing feedback loops named. Where the ontology sits in the whole is in [The parts of a digital twin](/articles/parts-of-a-twin/). For the work of actually building one, in order from an agreed vocabulary to a knowledge graph, see the review of Jessica Talisman's book [Ontology Pipeline](/ontologies/the-ontology-pipeline/).
