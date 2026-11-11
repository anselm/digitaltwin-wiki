---
about:
  label: How this site is written
  description: The voice of the wiki and the rules its pages are written to, each with the source it was taken from.
  tags:
    - style
    - voice
    - writing
    - editorial policy
provenance:
  origin: agent
  sources:
    - title: 'Wikipedia: Writing better articles'
      url: 'https://en.wikipedia.org/wiki/Wikipedia:Writing_better_articles'
    - title: 'Wikipedia: Manual of Style, Instructional and presumptuous language'
      url: 'https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style#Instructional_and_presumptuous_language'
    - title: 'Wikipedia: Manual of Style, Words to watch, Editorializing'
      url: 'https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Editorializing'
    - title: 'Wikipedia: Signs of AI writing'
      url: 'https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing'
    - title: 'Jochen Madler, SlopShape: Identifying AI-Generated Commercial Web Content (arXiv 2609.15369, September 2026)'
      url: 'https://arxiv.org/abs/2609.15369'
    - title: 'Erich Grunewald, Why You Should Almost Never Use AI to Write Anything Substantive (6 August 2026)'
      url: 'https://erichgrunewald.substack.com/p/why-you-should-almost-never-use-ai'
    - title: 'Anselm Hook, How to write less bad (9 September 2026)'
      url: 'https://anselm.substack.com/p/how-to-write-less-bad'
    - title: 'George Orwell, Politics and the English Language (Horizon, April 1946), at the Orwell Foundation'
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/'
    - title: 'George Gopen and Judith Swan, The Science of Scientific Writing (American Scientist 78, 550-558, 1990)'
      url: 'https://inpp.ohio.edu/~meisel/PHYS6751/file/ScientificWriting_GGopenJSwanAmSci1990.pdf'
    - title: 'Mastrandrea and colleagues, Guidance Note for Lead Authors of the IPCC Fifth Assessment Report on Consistent Treatment of Uncertainties (IPCC, 2010)'
      url: 'https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf'
    - title: 'Digital.gov, Plain language guide: Writing for understanding (US General Services Administration)'
      url: 'https://digital.gov/guides/plain-language/writing'
    - title: 'Francis-Noël Thomas and Mark Turner, Clear and Simple as the Truth (Princeton University Press), publisher''s description'
      url: 'https://press.princeton.edu/isbn/9781400887354'
    - title: 'Bryan Cantrill, Your intellectual fly is open (5 December 2025)'
      url: 'https://bcantrill.dtrace.org/2025/12/05/your-intellectual-fly-is-open/'
  created: '2026-11-11'
  reviewed: '2026-11-11'
  reviewed_by: 'Claude, from the sources listed, each opened on 11 November 2026; Anselm asked for a formal tone and policy and has not yet read this one'
  status: proposed
---
The wiki is a reference. A page says what a thing is, what it does, who uses it, what it needs and where it fails, and names the pages those facts were read from. Software agents draft most pages and a person checks them, so the rules here are also the instructions the agents work to. A linter in the repository, [tools/tells.js](https://github.com/anselm/digitaltwin-wiki/blob/main/tools/tells.js), counts the sentence shapes named below.

## The voice

- **Dry and specific.** A sentence gives a name, a number, a date or a mechanism.
- **Level with the reader.** In the style Thomas and Turner call classic, "the reader is an intellectual equal, and the occasion is informal."[^12] The writer has seen something and shows it. Nobody is taught, reassured or sold to.
- **The reader concludes.** Wikipedia's rule holds here: "It is not Wikipedia's role to try to convince the reader of anything, only to provide the salient facts as best they can be determined, and the reliable sources for them."[^1]
- **Even pitch.** A flood, an extinction and a file format are described in the same tone.
- **Anonymous.** No "I". "We" appears only on the About shelf, for what the maintainers do.

Two kinds of page follow these rules differently.

**Entries** describe a tool, a dataset, a model, a paper or a person. They take no side.

**Position pages** are the few on the About shelf where the site holds a view: that models of places which run forward in time are worth building in the open, and that people outside the professions are among their users. A position page states the view once, as the site's. It gives the evidence, puts the opposing case in the terms its holders would use, and concedes what is true in it.

## What stays out

1. **Announcements.** A sentence that says what the next sentences will do is deleted. "A note on method." "One thing belongs before all of them." "Three replies." Madler compared 2,250 human blog posts with 11,250 machine-written ones and found the machine posts "share a tidy, self-announcing shape".[^5]
2. **Grades given in advance.** "The plain answer", "the honest form", "the hardest objection", "the real question". The reader can see whether an answer is plain.
3. **Verdict words.** Wikipedia's list begins "notably, it should be noted, arguably, interestingly, essentially, utterly, actually, only, clearly, absolutely, of course".[^3] Its manual of style: "Do not tell readers that something is interesting, ironic, surprising, unexpected, amusing, curious, coincidental, etc. Simply present sourced facts neutrally and let readers draw their own conclusions."[^2]
4. **Directions to the reader.** "Note that", "remember that", "it is worth", "we must", "let's". The same manual calls these an unencyclopedic tone.[^2] Guides are the exception: a guide is a set of steps and uses the imperative for them.
5. **Rhetorical questions.** The manual of style says to avoid them.[^2] Questions appear on the use-case pages, where they are the questions a person brings to a model.
6. **Closing morals.** A paragraph ends on its last fact. No short punchy fragment, no maxim, no sentence that says again what the paragraph said.
7. **Foils.** "X, not Y" and "not just X but Y" define a thing against a position nobody took. Wikipedia's editors list both among the signs of machine writing, with the newer "Y rather than X".[^4] Say what the thing is. Keep the contrast only when someone named in the text holds the other view.
8. **The page describing itself.** "This page collects", "this site says so plainly".
9. **Rhythm for its own sake.** Em-dashes, three-item lists chosen for cadence, runs of sentences opening on It, This or That, paragraphs of equal-length sentences.[^4,7,13]

## What goes in

10. **A claim that could be false.** Negate the sentence. If nobody would assert the opposite, the sentence carries nothing and is cut.[^7] Grunewald's first example of machine prose is the statement that "export controls are only as strong as their enforcement".[^6]
11. **The figure.** The number, the year, the place and the unit replace the adjective. "A multi-hundred-billion-dollar trade" becomes the amount and where it was read.[^6]
12. **Who says so.** A measurement, a model result, a maker's claim and a guess are marked as what they are. Each source in a page's list was opened and read. What is not known is written as unknown.
13. **How sure, once.** Uncertainty is stated where it applies and at the precision the evidence supports. IPCC authors work to a fixed scale on which "likely" is a 66 to 100 percent probability and "very likely" is 90 to 100 percent, and are told to keep findings from becoming "so general that they lose substantive meaning."[^10] This wiki does not use that scale. It follows the practice: a hedge reports the state of the evidence, and a sentence that needs no hedge gets none.
14. **One argument, once.** A reason is a different statement from the conclusion it supports. The end of a paragraph does not restate its beginning.
15. **Metaphor that cashes out.** A figure of speech stays if the literal claim stands beside it.[^7] Orwell's first rule: "Never use a metaphor, simile or other figure of speech which you are used to seeing in print."[^8]

## Sentences

16. **Subject, then verb, soon.** Gopen and Swan: "Follow a grammatical subject as soon as possible with its verb", and "Articulate the action of every clause or sentence in its verb."[^9]
17. **Known first, new last.** The start of a sentence links back to what the reader has. The end carries the new fact, where readers expect the emphasis. "In general, provide context for your reader before asking that reader to consider anything new."[^9]
18. **Short words, fewer words.** "Never use a long word where a short one will do. If it is possible to cut a word out, always cut it out."[^8]
19. **Active voice.** "Active voice makes it clear who should do what."[^11]
20. **Terms explained once.** A technical term is explained in a clause at first use. Many readers are not specialists.
21. **One breath.** A sentence over 45 words is split.

## An example

The page of [objections](/about/objections/) once opened its third paragraph like this:

> One thing belongs before all of them, because it is plainer than anything that follows. Underneath the argument this is a science tool.

The first sentence announces the second and grades it. The rewrite keeps the claim and drops the introduction:

> A model of a place is a science tool.

## Limits

These rules catch habits. They do not make a page true or useful, and a page can pass every one and say nothing. Gopen and Swan say of their own principles that none "should be considered 'rules'", and Orwell's sixth rule is "Break any of these rules sooner than say anything outright barbarous."[^8,9] A reader who finds a page that lectures, sells or pads can report it through [Contributors](/about/contributors/).
