# Objections rewritten, style page reduced, the 11 November pass re-reviewed (2026-11-12)

Written by Claude (Fable 5.2) in the twin-compendium room, session
https://claude.ai/code/session_018TGCFhFpKfqJ5fkxug9aM4. This is the fresh
session that `20261112-writing-guidance-handoff.md` asked for. The standard
throughout is the harness writing skill as revised on 12 November.

## What Anselm asked

> reduce /about/style - i think that the wiki doesn't need to belabor style
> very much - does not have to prosecute the basic points made in the harness
> - it can describe the wiki voicing

> my main goal is an aggressive re-write or revisit of the objections page,
> including looking at the git history. the original version had issues, but
> the last version is just awful - very boring. i effectively want a rewrite -
> lifting the ideas up out of the text, and re-landing them. [...] we really
> did over-digest or reduce the objections page to pablum; with many very
> small words that nevertheless required huge cognitive load.

> i had allowed claude to rewrite many pages after a recent style guidance
> change - can you re-review that large bundle of changes?

## What was done

**Objections page** (`data/about/objections.md`). Rewritten from two
versions: the one live this morning and the one at commit dfb0823, before the
11 November rules were applied. Changes a reader will notice:

- The 22 objections sit under five headings: what is being proposed, it
  already exists, it cannot be done, nobody would use it, it is not needed or
  not wanted. The "done in the 1970s" answer now closes the "already exists"
  group, where the narrow claim (no running model of one named place with
  water, life, buildings and people in one loop) is the conclusion of the
  product-by-product answers before it.
- The introduction says what a whole-system model is by following one
  invented case, a town on an estuary asked to approve a gas terminal. The
  page labels it as invented. It returns in the Esri answer, where the old
  text already had "one small town" and a gas terminal.
- Arguments of Anselm's that the 11 November pass cut are back: a thing
  described is not a thing dealt with; if the models are worth hiding they are
  worth having; hard is not a reason; moving into the future blind, shadows
  and a light switched on; whoever says nothing is wrong is arguing with the
  instruments; "what do you propose?".
- The Bali answer now gives the result the entry records, including the run
  in which the authors expected chaos and got cooperative networks.
- Not brought back: the two sentences he flagged as patronising on 11
  November, and the three unsourced claims removed that day.

A script compared the new page with the old: 76 links, 17 footnote markers
and every figure are all still present. No source was opened. The page grew
from about 3,900 words of body to about 5,900.

**Style page** (`data/about/style.md`). Reduced from twenty-one rules with
thirteen sources to seven short paragraphs: who the reader is, what an entry
does, what a position page does, and one paragraph saying the rules existed
for a day and why they went. Status is still `proposed`.

**The 11 November pass** (commit 07722fb, 76 files). Four agents each took a
quarter of the 73 entries other than objections, style and changes. For each
edit the pass had made they read the diff in context and either kept it or
repaired it, usually by restoring the earlier wording. Of 153 edits judged,
82 were kept and 70 repaired, across 50 files; one was in frontmatter and
left alone. The pattern all four reported independently:

- About half the pass was sound: grades, intensifiers, self-reference and
  repeated titles removed.
- Most of the damage was one kind. A short sentence that told the reader why
  the next facts were there ("Three decisions fall close together", "The
  district as a whole tells a different story") had been cut as an
  announcement, leaving a run of facts.
- The second kind was a contrast flattened under the "X, not Y" rule when the
  contrast was the point ("a backdrop, not data", "They describe a city, not
  a street"). In the LANDFIRE entry that had removed a sourced statement.
- Clipped short-word substitution was rare outside the objections page.

A script confirmed that no repaired file changed its frontmatter, links,
footnote markers or figures, and none gained an em-dash.

Also: `CLAUDE.md`, the header of `tools/tells.js` and one line of `todo.md`
no longer describe the withdrawn rules as current; the change record has a
12 November paragraph.

## Checked

`npm run after` on the objections page (corpus check clean; the tell count is
a census and is high, as expected, because its voice rows count shapes the
current guidance allows). `npm run build` passes. The objections and style
pages were rendered from the build and looked at, desktop width.

## Waiting on Anselm

- Reading the new objections page. It is his position and he has not read
  this wording.
- Whether `/about/style/` moves from proposed to public, or goes.
- `tools/tells.js`: its ten voice rows encode the withdrawn rules. Remove the
  rows, or keep the census as it is.
- Three taste calls the reviewers kept and flagged: the fire-insurance label
  "The retreat, in numbers." (now "FAIR Plan growth and non-renewals."), the
  cut "Ice is the second lever." on the Great Lakes item, and the count-less
  lead-in on the ecosystem-research article.
- Only two commits applied the withdrawn rules: 29c2fb0 (the objections page,
  the style page and the tell counter) and 07722fb (the 76 files above). Both
  are now covered.
- Nothing is pushed or deployed.
