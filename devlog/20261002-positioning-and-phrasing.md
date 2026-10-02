# 2026-10-02 — positioning and phrasing for the evergreen site

Point-in-time entry. Written by Claude in the twin-compendium room after
reading the survey draft and a summary Anselm pasted from another Claude chat.
Nothing here is published. All copy below is machine draft for his rewrite.

## Inputs

- Survey draft, "Digital Twins: A Survey", September 2026, at
  https://digital-twins-survey.anselm52491.chatgpt.site (fetched and read in
  full today: article, appendices A to G, 75 sources, a conference deck link
  and a Markdown download link in the footer).
- The summary of the other chat (pasted by Anselm). The original share link
  could not be read from this box; Cloudflare blocks it.
- Goal as he stated it: phrasing for an evergreen site that helps people get a
  feel for the digital twin space and also positions him as a solutions
  provider. His current contract ends late October 2026.

## What the survey already gives us

The strongest device in the draft is the applications table: each row is a
use, **a concrete question**, and the systems that answer it ("Where will
vehicles go after a closure, and can signal changes help a late bus?"). That
column is the phrasing spine for everything else:

- It is how a newcomer gets a feel for the field.
- It is how a buyer recognises their own problem.
- It is what a solutions provider sells: an answer to a question about a place.

So the reference site and the hire-me page can share one grammar (questions
about places) without the reference site ever having to sell.

## Where I disagree with the other chat's proposals

1. **"Bioregional twin" and "Planetary Twins" are the wrong names for this
   material.** The survey covers traffic, grids, housing, flooding, wildfire,
   national programs. "Bioregional" names perhaps a fifth of it and signals a
   subculture; "planetary" overshoots, since almost every entry is a city, a
   network or a region. The draft itself declines to pick a category word and
   says so in Appendix D. Buyers and their budget lines say "digital twin".
   Keep the term and qualify it by subject: twins **of places**.
   (Judgment, not measured: I have no search-volume data.)
2. **If a term is to be coined, coin it where the draft is original.** The
   draft already uses two phrases nobody else owns: "stewardship twin"
   (Appendix F) and "sensory landscape" (Appendix G). Those are concept pages
   that could tie a phrase to the site. "Bioregional twin" would be a label
   without a distinct idea behind it.
3. **Atlas and almanac promise the wrong thing.** An atlas promises maps, an
   almanac yearly tables. "Field guide" fits templated entries that help a
   reader identify what they are looking at. "Compendium" (this folder's name)
   is neutral and also fine. I lean field guide as the descriptor.
4. **"Technology agnostic" should never be stated.** The guide demonstrates
   it: fifty-odd tools described evenly, by someone who then offers to build.
5. **"Decision models"** is consultant language. "Working models of places"
   says the same thing in plainer words.

## Recommended naming

- **Title: Digital Twins of Places**
- **Descriptor: A field guide to models of cities, watersheds and regions**

Runner-up titles: "The Twin Compendium"; "Territorial Twins" (the established
EU umbrella per the draft's source 4, but opaque to a US reader, my judgment).
Domain availability not checked for any of these.

## Draft copy: the guide (neutral voice, no "I")

**Title and dek**

> Digital Twins of Places
> A field guide to models of cities, watersheds and regions: what each one can
> answer, who runs it, and what it is built from.

**Opening**

> A digital twin is a model of a real place, kept up to date with data from
> that place. A traffic twin can say where the cars go when a street closes. A
> watershed twin can say who runs short in a dry year.
>
> This guide describes the twins that exist, the engines underneath them, and
> the questions they can and cannot answer. Start with a question.

Then the question list from the applications table, one link per row, each
leading to a question page that lists the twins, engines and datasets behind
that answer.

**Entry template** (one page per tool, program, dataset, concept, case)

- Name, and one line: the question it answers
- Kind: engine / platform / operating twin / public program / dataset / concept
- Who uses it: utility, government, civic, research
- Open or commercial
- Evidence: a published evaluation if one exists, else "none found"
- Connects to: other entries
- Sources, and a "last reviewed" date

**Footer line, the only place he appears**

> Maintained by Anselm Hook. Corrections welcome from the people who build
> these systems.

His own river models go in as ordinary case entries with the same template.

## Draft copy: his own page (first person)

> **Working models of places.**
> Who gets water in a dry year, and what changes if the rules change? I build
> the model that answers a question like that, from public data and whichever
> engine fits, and put it on a web page where the people affected can try the
> alternatives themselves.

Then two or three worked examples (the Colorado River and Rio Grande
allocation pieces are the ones I know of), a line pointing to the guide
("I maintain Digital Twins of Places, a field guide to this field"), and a
contact path. The opening question should be one he has already answered in
public; I only know of the water ones.

## What moves out of the reference site

The second half of the draft (hyperobjects, nature models, the stewardship
argument) is essay, not reference. House rule is philosophy at top and bottom
only. On the guide it becomes two concept entries (stewardship twin, sensory
landscape) written flat; the argument itself belongs on Substack, linking in.
News items in the draft (the AMD and World Labs agreement, CReDO's September
showcase) will age; they belong in a dated yearly edition, not in entries.

## Open, his to decide

- Title and descriptor (my pick above), then domain.
- Which buyer the personal page addresses first. Water is where his public
  examples are, so I would start with water districts and basin NGOs. Guess.
- Static site from markdown in git (my default, matches house stack) versus a
  wiki engine.
- Whether the personal page lives on hook.org or its own name.

## Next step I would take

Split the survey Markdown (footer download link) into one file per entry
using the template above, so the phrasing can be judged on real pages.
