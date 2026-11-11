# A voice for the wiki, and a pass over its editorial prose (2026-11-11)

Anselm, reading the objections page the day after it went up:

> I notice a lot of Claudeisms such as "answered so the easy ones can be set
> aside and the hard ones reached" or "One thing belongs before all of them,
> because it is plainer than anything that follows". Do you appreciate why
> these kinds of utterances come across as patronizing or editorializing?
> It's not the core point per se but the grandiloquence of the phrasing. I
> think we need to define a voice for the wiki. What is the editorial tone
> and voice? [...] I think what we need to do is a fresh internet research,
> not just on avoiding ai style but also science style writing - a search on
> how to write - and add that to our devlog and or some deeper general policy
> for the website. Maybe even visible to the end user - we need to formalize
> a tone and policy. This enumeration of writing tips or style guide needs to
> be part of the Claude context. Then we need to grind through pages that
> have substantial editorial prose and improve them. Reducing circular
> argument, polemic, empty statements.

Claude (Fable 5.1, session 01QvbEMPfgTgBCEh7BrFsFv1) did the work below on
11 November. The research files (the fetched text of each source, the
before and after census, the brief given to the agents, the objections page
as it was) are in that session's scratchpad under `voice/`; the scratchpad
is temporary, and what matters from it is written here.

## Why those two sentences grate

Both sentences talk about the text instead of the subject. The first ranks
the objections before the reader has met one (easy ones, hard ones). The
second announces that something is coming and grades it (plainer than
anything that follows). The reader is told what to think of a thing before
being shown it, by a writer who has put himself above both the material and
the reader. Deleting each sentence loses no fact. That is the test this
entry settles on: a sentence about the page, or about how good the next
sentence is, goes.

## What was read

Each of these was opened on 11 November. A quotation on the style page was
checked against the fetched text, not against a summary of it.

- Anselm's own essay, How to write less bad (Substack, 9 September 2026):
  thirteen slop patterns, and the two adversarial checks used here, negate
  the sentence and cash out the metaphor.
- Wikipedia, Signs of AI writing: the fullest public list of machine
  shapes, kept by editors who clean it up daily. Foils ("not X but Y", and
  the newer "Y rather than X"), rule of three, editorialising words,
  promotional tone.
- Wikipedia, Manual of Style, Instructional and presumptuous language, and
  Words to watch, Editorializing: the list that begins "notably, it should
  be noted, arguably", and "Simply present sourced facts neutrally and let
  readers draw their own conclusions."
- Wikipedia, Writing better articles: "It is not Wikipedia's role to try to
  convince the reader of anything, only to provide the salient facts as
  best they can be determined, and the reliable sources for them."
- Jochen Madler, SlopShape (arXiv 2609.15369, September 2026), abstract
  only: 2,250 human blog posts against 11,250 machine-written ones; the
  machine posts "share a tidy, self-announcing shape".
- Erich Grunewald, Why You Should Almost Never Use AI to Write Anything
  Substantive (6 August 2026): the empty sentence, with "export controls
  are only as strong as their enforcement" as the specimen.
- Bryan Cantrill, Your intellectual fly is open (5 December 2025).
- George Orwell, Politics and the English Language (1946): the six rules.
- George Gopen and Judith Swan, The Science of Scientific Writing (American
  Scientist, 1990): subject then verb soon, old information first and new
  information last.
- Mastrandrea and colleagues, the IPCC AR5 guidance note on uncertainty
  (2010): the calibrated likelihood scale, and the warning against
  findings "so general that they lose substantive meaning".
- Digital.gov, Plain language guide, Writing for understanding.
- Thomas and Turner, Clear and Simple as the Truth: the publisher's
  description only, for "the reader is an intellectual equal, and the
  occasion is informal".

Not read, so not cited: GOV.UK's writing guidance (the address redirected
twice and the page on clear language returned 404); Nature's guide for
authors (the address redirected to a sign-in); The Economist's style guide,
known here only through Anselm's essay. The Princeton page renders by
script and could not be checked with a plain fetch; the quotation rests on
the fetch tool's reading of the page and a search snippet that agrees.

## The voice

The public statement is `data/about/style.md`, at /about/style/. In short:
dry and specific; level with the reader, who is an equal; the reader draws
the conclusion; one pitch for a flood and a file format; anonymous. Entries
take no side. The few position pages on the About shelf state the site's
view once, give the evidence, and concede what is true in the other case.

Nine things stay out: announcements, grades given in advance, verdict
words, directions to the reader, rhetorical questions, closing morals,
foils, the page describing itself, rhythm for its own sake. Six go in: a
claim that could be false, the figure, who says so, how sure (once), one
argument once, a metaphor that cashes out. Six sentence rules follow from
Gopen and Swan, Orwell and Digital.gov.

`CLAUDE.md` carries the same rules in short form under "Voice and style",
with a tenth exclusion, polemic, that the public page folds into the voice
section. Every session and every subagent in this folder loads it.

## The linter

`tools/tells.js` has ten new rows: announcement, advance-verdict,
self-reference, exhortation, verdict-word, rhetorical-question, not-tail,
not-x-it-is-y, kicker, aphorism-close. A new unit, rawparagraph, keeps the
fragments of one to three words that the other units drop, since a kicker
is often two words ("Dam, fish, people.").

The census before any rewriting, over 654 files and 12,219 sentences:

| tell | hits | files |
| --- | --- | --- |
| announcement | 12 | 1 |
| advance-verdict | 21 | 7 |
| self-reference | 28 | 10 |
| exhortation | 11 | 11 |
| verdict-word | 12 | 12 |
| rhetorical-question | 176 | 60 |
| not-tail | 90 | 73 |
| not-x-it-is-y | 13 | 8 |
| kicker | 78 | 66 |
| aphorism-close | 111 | 97 |

The finding was lopsided. The objections page alone had 81 voice hits,
including all twelve announcements; the next file had twelve, most of them
real questions. The corpus had been through the October pass
(`20261020-prose-tells.md`), and the objections page was written after it,
quickly, in argument with a reader. Most rhetorical-question hits are the
questions a scenario puts to a model, which are the structure of those
pages and stay. The last three rows are loose regex shapes with many false
positives; they point a reader at a paragraph and decide nothing.

Regexes do not find circular argument, polemic or an empty sentence. Those
need a reader, which is the next section.

## The pass

The objections page was rewritten by hand first. Every link, picture,
footnote and position was kept. Gone: the three framing paragraphs' talk
about method and order, "the honest form", "the strongest objection on
this page", "the hardest one to argue with", the question volleys, "Dam,
fish, people.", "One dimension, done well.", "Let's not give up.", the
oracle and the shadows. Voice hits went from 81 to 11, the remainder being
the site stating its view on a position page and four false positives.

Reading it sentence by sentence turned up errors of fact that the wrapping
had been hiding, all Claude's from the day before:
- "The weather has a dozen models", "several times a day" and "a
  supercomputer's week is becoming a workstation's afternoon" had no source.
  All three are removed.
- The Dangermond Preserve was called "Esri's founders' land". The Nature
  Conservancy owns it; Esri's founders gave the money. Corrected from the
  site's own entry.
- The Bali model was said to have "surprised the people who had been told
  the temples were superstition" and to have done "more for the farmers
  than any appeal to reverence had". The entry on the paper supports
  neither. Both now say what the entry records: the temple schedules gave
  the best harvests.
- "Promising but in its infancy" stood in quotation marks, and the entry on
  that paper gives it as a paraphrase. The marks are removed.

That page went live on its own at Anselm's word, in commit 29c2fb0, with
the style page, the linter rows and the rules in `CLAUDE.md`.

The rest was done by seven agents on disjoint sets of files, each given the
same brief: the ten exclusions, three reading tests (a reason that only
restates its conclusion, a sentence whose opposite nobody would assert, an
argument made twice), and hard limits (keep every fact, number, link,
footnote and source; add nothing; leave a file byte-identical if it needs
nothing; report a doubtful fact and do not fix it). The sets: the About
shelf, the home page and the shelf index pages; guides and use cases;
everyday questions; terms; the site's two essays with the ontologies,
presentation, flows and stories shelves; scenarios; and the catalogue
shelves, where the agent worked from the census hits and did not read
every entry.

### What the agents changed

| set | read | changed |
| --- | --- | --- |
| About shelf, home page, shelf index pages | 75 | 11 |
| guides and use cases | 20 | 10 |
| everyday questions | 9 | 6 |
| terms | 21 | 5 |
| the two essays, ontologies, presentation, flows, stories | 37 | 8 |
| scenarios | 34 | 7 |
| catalogue shelves, from census hits | 155 | 30 |

77 files were changed out of 351 read (a few folder entries were read by
two agents), and the rest were left byte-identical. Two
more were changed by hand afterwards: the land-use-change use case, which
fell between two sets, and the GREASYPOP-CO entry ("The README is plain
about limits."). The home page, written by Anselm, was read and not
touched.

The cuts are of a few kinds, the same on every shelf:
- A sentence that introduces the next one. "Two ways of handling time run
  through the report." "The rest of the paper is about what surrounds the
  models." "Aluminium shows what a summary holds." "The fuller answer turns
  on more than the line."
- A grade given before the fact. "The most portable finding is a timing
  window." "The method is the part worth borrowing." "It matters more than
  anything else on this page." "The lab is plain about its limits."
- A page talking about itself. "This page is the guide's statement of
  intent." "This shelf is about". "known to this entry".
- A closing line that restates the paragraph. "They describe a city, not a
  street." "The farmers already knew." "The deficit and the severity are
  the same story told twice." "an answer that never reaches them has not
  been given".
- An opening question that repeats the page's title, on three everyday
  pages.
- A foil with nobody holding the other view. "a toolkit, not a model of
  any population". "a backdrop, not data". "not something to run
  casually".

Contrasts were kept where a named source draws them (CAL FIRE's hazard and
risk, Jessica Talisman's "maintenance is the project") or where the reader
needs the distinction (a right of use and the water; a detection pixel and
the fire).

### Checking the agents

`voice/audit.py` in the session scratchpad compared every changed file with
the last commit for links, footnote markers, figures and frontmatter. Every
link and every figure in a body survived. Two footnote markers were split
so each half of a divided sentence carries its own sources (synthetic
people: `[^4,31,32,33]` became `[^31,32]` and `[^4,33]`, checked against the
order of the source list; solar: `[^1,4]` now appears twice). Three
descriptions changed: the FAQ lost "Plain", the flow's two fragments became
one sentence, and the rules-layer term gained its full stop. I read the
word-level diff of all 77 files. Four cuts looked as if they removed a fact
(FEMA, LANDFIRE, DHI, Parable of the Polygons); in each the fact is stated
elsewhere in the entry, so they stand.

### The linter after tuning

The catalogue agent reported what each row caught on its shelves. The
sharp rows had missed most of the real faults, and the loose rows were
nearly all false positives: kicker 0 real of 53, aphorism-close 2 of 66,
not-tail 5 of 53. The kicker row was firing on "Pricing is not published."
and "Licence Apache-2.0.", and the self-reference row on "the page says",
where the page is the source's. The rows were changed to match:
- announcement gains "shows what a ... holds", "N things stand out", "run
  through the report", "The rest of the paper is about", "comes down to a
  few things".
- advance-verdict gains "most portable finding", "worth borrowing", "a
  plain question", "is plain about", "says plainly", "the purest case",
  "the strongest result".
- self-reference gains "this entry covers", "known to this entry",
  "described below", "(below)"; "says" now needs "this" before the noun.
- rhetorical-question skips a question inside quotation marks.
- exhortation skips reported speech ("They note that").
- kicker skips a list lead-in, a line with a number in it and short
  catalogue facts; aphorism-close skips "No licence is stated." and its
  kind.

The same tuned linter over the tree as it stood before the pass (commit
29c2fb0^, 12,219 sentences) and over the tree now (12,197 sentences):

| tell | before | after |
| --- | --- | --- |
| announcement | 20 | 2 |
| advance-verdict | 34 | 8 |
| self-reference | 37 | 16 |
| exhortation | 3 | 2 |
| verdict-word | 12 | 11 |
| rhetorical-question | 167 | 158 |
| not-tail | 90 | 68 |
| not-x-it-is-y | 13 | 7 |
| kicker | 42 | 36 |
| aphorism-close | 94 | 87 |
| total | 512 | 395 |

What remains was read. The two announcements and several of the others are
the style page quoting its own examples. The self-references are the
objections page stating the site's view, which the rules allow on a
position page, and statements of scope ("This page is about the United
States"). The verdict words are inside quotations or are the plain adverb
("asked clearly"). The questions are the ones the use-case and scenario
pages are built on. not-tail, kicker and aphorism-close are still mostly
false positives and still only point a reader at a paragraph.

The number understates the change in one way and overstates it in another.
Most real faults were found by reading and were in shapes no row matched
until afterwards, so "before" would have been higher with a better linter.
And a count of shapes says nothing about whether the prose is now good. It
says the wrapping is thinner.

### What the pass did not do

- No source was opened. The agents reported some forty statements that
  look stale, unsourced or contradicted by another entry, and changed none
  of them. They are in `todo.md` under "Facts and wording flagged in the voice
  pass".
- The catalogue agent read only the 155 entries with a census hit. Entries with faults in shapes the linter did not know were not seen.
  The tuned rows would find some of them now; that sweep has not been run
  as an editing pass.
- Circular argument and repeated argument were looked for by readers on the
  editorial shelves and not on the catalogue.
- The style page is still `proposed`.

### Anselm's to decide

- Whether `/about/style/` is promoted from proposed to public.
- The revised wording of the objections page, which he has not read.
- The heading "What you are really asking" on all 13 use-case pages.
  "Really" is on the list of verdict words; changing a shelf-wide heading
  is his call.
- People entries that end "On the wiki he is..." and the phrases "On this
  site" and "the picture above" were left as a linking convention. The
  rules as written would cut them.
- The home page: "The big question is can digital twins help us live...?"
  and "a starting point as of October 2026, not a finished reference" have
  shapes the rules name. They are his words and were left.
- Whether `AGENTS.md` should carry the full rules or the pointer it has now.

### Where the work is

Session https://claude.ai/code/session_01QvbEMPfgTgBCEh7BrFsFv1 on canada1,
Claude Fable 5 with seven general-purpose subagents. The brief, the
before-copies of each set, the edit scripts and the census files were in
the session scratchpad under `voice/`, which does not outlive the session;
the commits are the durable record.
