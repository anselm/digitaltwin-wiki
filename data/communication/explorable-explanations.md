---
about:
  label: Explorable Explanations
  description: >-
    Essay by Bret Victor, 2011, proposing documents whose reader can change
    the author's assumptions and see the consequences, with working examples
    built on his Tangle library.
  tags:
    - explorable explanations
    - interactive documents
    - reactive documents
    - active reading
    - scenario modelling
    - Bret Victor
article:
  url: 'https://worrydream.com/ExplorableExplanations/'
  published: '2011-03-10'
  publisher: worrydream.com
  authors:
    - Bret Victor
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'Explorable Explanations, Bret Victor (with a postscript from February 2024)'
      url: 'https://worrydream.com/ExplorableExplanations/'
    - title: 'Explorable Explanations, a hub for learning through play'
      url: 'https://explorabl.es/'
    - title: 'explorableexplanations.github.io README (credits and licence)'
      url: 'https://raw.githubusercontent.com/explorableexplanations/explorableexplanations.github.io/master/README.md'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Bret Victor published this essay on his site on 10 March 2011 and added a postscript in February 2024. It asks whether reading on a screen can let the reader do what an active reader tries to do on paper and cannot: answer their own questions, try alternatives and check the author's assumptions. Victor calls the project behind it Explorable Explanations, and the essay shows three ideas with examples that work in the page.

The first is the reactive document. Victor takes a real California ballot measure, Proposition 21, which would have added $18 to vehicle registration to fund state parks, and writes an analysis of it whose numbers are live. The reader drags the fee, the share of vehicles charged or the admission price, and the paragraph that follows rewrites itself: the parks budget, whether parks still close, how attendance changes. He says the analysis in the example is made up for the purpose. Victor notes that the proposition's authors surely had a spreadsheet answering the same questions. A spreadsheet, he writes, is a dataset and a model, not an explanation. The reactive document puts the model inside text an author has written. A hurried reader can skim it, a curious one can adjust the author's scenarios and an engaged one can try scenarios of their own. The author also has to disclose the model behind the argument, and Victor imagines both sides of a ballot fight being expected to publish their models.

The second is the explorable example: a textbook description of a digital audio filter whose parameters the reader can drag, watching six views of its behaviour change together, and finding along the way where the textbook's formula is only an approximation. The third is contextual information. The reader looks up a word in a passage about California's wind power without leaving the page, and finds the passage's main claim is out of date.

The examples are built with Tangle, a JavaScript library Victor released; his earlier prototype of a reactive document was called Ten Brighter Ideas. He ends by asking for more examples and for authoring tools that make this nearly as easy as writing plain text.

In the 2024 postscript Victor says the term is now used so broadly that it seems to mean any article with interactive pictures, mostly teaching pieces. He points to explorabl.es for a collection of these pieces. That site calls itself a hub for learning through play. Nicky Case designed and built it, others are credited with help, and it is dedicated to the public domain. It sorts its pieces by subject, civics and earth science among them, and lists tools and tutorials for authors. Victor writes that he had meant something narrower: a written argument resting on models the reader can see and edit, where the reader answers the author by changing the model. He adds that by the time of his later climate essay he had given up on the computer screen as a medium for discussion grounded in models, and that putting explorable models into everyday physical space remains one of his main motivations for Dynamicland.

The essay's ballot example is the case this shelf is about: a model of a public decision, put in front of the people who vote on it, in a form where they can move its assumptions themselves.
