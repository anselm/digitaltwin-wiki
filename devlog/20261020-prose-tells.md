# Adversarial testing of the wiki's prose (2026-10-20)

Anselm, reading the domain descriptions: "there is a general cadence to
your speech". The shape he named: three or four bare nouns, then a last
item that grows a verb and ends on a pronoun pointing back at the subject.
"Energy: grids, generation, demand and the networks that carry it." All
ten domain descriptions had it. Then: "I wonder how we can adversarially
test all of our text - it's so frustrating to read."

## The method

Two halves, because the heckler matches words and this is about shapes.

1. **Readers.** A workflow of eight agents, each given one lens (closures,
   lists, gesture, metaphor, rhythm, openings, hedging, the non-technical
   reader) and about thirty entries, told the owner finds the prose
   tiring and to find recurring shapes with verbatim quotes and a regex if
   one exists. One agent merged the eight lists into 37 candidates. Then
   one agent per candidate ran its regex over `data/`, read ten hits,
   reported the false-positive rate, refined the regex, judged whether it
   is a machine tell or ordinary English, and rewrote one example flat.
   46 agents, 19 minutes, 3.2 M tokens. 31 kept, 6 thrown out.
2. **A linter.** `tools/tells.js`, zero dependencies, one row per shape,
   with units for a sentence, a paragraph, a run of sentences, the first
   sentence, the last sentence, the description line, and the
   description against the first sentence. It prints a census over every
   entry, the worst files, or every hit of one tell. It is a census, not a
   verdict; its job is to point a person at the sentences.

The readers' lists are the lab notebook: the workflow output is at
`/tmp/claude-1003/.../tasks/wqa327qpt.output` for this session only; the
kept shapes with their examples are in the linter's rows.

## What the census found (302 files, 2,705 sentences)

The shapes fall into families, and most trace to a cause.

**Template residue.** The entry template from the principles asks for a
status line, a "what is open" paragraph and honesty about what the pages
did not say. The drafts render those as prose: 56 entries end on a form
field read aloud ("Status: operational;", a one-word paragraph
"Operational."), 77 carry a sentence whose whole content is what the
writer failed to find ("not stated on the pages read"), 31 end with the
wiki filing the entry in its own taxonomy ("In this wiki's stack it is a
data layer"), and 16 cite page metadata as evidence of life ("the site
was last modified in September 2026"). The frontmatter already holds all
of that. These are the cheapest to fix and the most uniform.

**The source as speaker.** 90 files, 126 sentences by regex and more by
eye: "the licence page adds", "Odyssey describes it as", "in its own
words", "the report is careful to add". Born of the honesty rule; as the
default sentence shape it doubles the words and the tool never gets to be
the subject of its own entry. Close kin: "whose stated purpose is", "is
designed to" (28 files); the source's navigation tabs relayed with an
attribution verb (14 files); runs of partner names copied because every
name is safe to copy (20 files); a mini-biography wedged between every
proper noun and its verb (61 files).

**Closure devices.** The sentence that ends on a pointer (83 files, 110
sentences); ", which is what lets it..." tails carrying the moral (23
files); the "For a twin builder it is the deepest treatment" paragraph,
where the unsourced superlatives collect (20 files); the vendor's "so
that planners and the public can see" (7); and in the guides and question
pages a quotable maxim closing every section, which no regex finds. One
per guide is voice; one per section, nine guides running, is a drum roll.

**Lists and breath.** 221 sentences over 45 words in 117 files. 258
triplets. 34 semicolon ledgers, 23 sentences with two bracketed glosses,
27 counted leads ("has three parts:"), 21 files with the indefinite-article
triad ("a utility, a city or a region"), which opens four question pages
with the identical shape. "Turns A, B, C and D into E" is the house verb
for what a tool does, mostly in descriptions.

**The first sentence.** 42 entries open by repeating their description,
which the page already prints as a dek above the body, so the reader
reads the same sentence twice on one screen. 11 articles open on a
citation written out as prose with no main verb.

**Not shapes, but real.** The readers' largest finding has no regex:
technical terms used as if the reader knew them, in 164 files, because
the entry carried the maker's vocabulary across without translating it.
That is the mark of paraphrase, and the fix is a reader, not a rule.

Thrown out as ordinary English: "a model of a place" (the site's chosen
phrase), sentences full of figures (a catalogue reports figures), the
headless catalogue-card description (that is the register of a shelf),
indirect-question lists (naming the questions a tool answers is the
genre), book-review verbs, and the owner's own named shape, which the
readers could not reproduce at the claimed rate once the regex was
tightened; it lives in descriptions and codas, not bodies.

## Where the tells come from

Three sources, in order of weight: the template (status, open, honesty
about absence) rendered as sentences; the honesty rule applied per
sentence instead of per entry; and a drafter that finishes every list
with a swell and every paragraph with a landing. The first two are policy
and can be fixed at the template: say once in provenance what was read,
keep status and openness in the frontmatter where the page already shows
them, and let the body be about the thing. The third is the writer.

## Done today

- The ten domain descriptions flattened to plain lists (Anselm's form:
  "Energy: electricity, grids, power generation, demand, networks").
- `tools/tells.js` with 34 rows.
- Memory: `feedback-noun-list-then-swelling-clause` in the harness store.

## Not done, Anselm's call

A site-wide rewrite touches about 250 entries, many public. The order
that pays most per hour: (1) strip the template residue by rule, which a
script can do for the status stamps and the shelf-filing closers and a
read-and-rewrite agent for the absence sentences; (2) one read-then-refute
pass per entry with the linter's hits as the brief and the rule that no
fact may be added or dropped; (3) the heckler and `tells.js` as the gate
on every new draft, in the workflow that writes them. Also a site fix: if
the dek stays, the body should not restate it, or the dek should go.
