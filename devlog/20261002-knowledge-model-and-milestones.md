# 2026-10-02 — knowledge model and milestones

Point-in-time entry, fourteenth of the day. Written by Claude. This is the
plan of record as of today; it folds in the earlier entries and supersedes
their sequencing. Proposal until Anselm agrees it.

## What he asked

What is needed to make this a fully functional site. Think carefully about
knowledge organisation: smaller morsels, in some kind of knowledge graph on
disk. He notes the argument between RAG and well-structured plain markdown
as LLM context, and a possible tension between an LLM knowledge graph and a
human-readable site. A site LLM is coming and should be a milestone.

## Position on RAG against plain markdown

For this corpus, structured markdown with typed links, read by a model that
can navigate it, is the right base. Embedding retrieval is an optional cache
added later if search by meaning proves weak.

Reasons:

- Scale. The guide will hold hundreds of morsels, perhaps low thousands. A
  generated map of all of them fits in a model's context many times over.
- Navigation beats similarity here. "What free tools answer a flooding
  question and what data do they need" is a walk along typed links, not a
  nearest-neighbour lookup. Chunk retrieval loses exactly that structure.
- Citations. A model that fetched a morsel by id can cite the id. A model
  handed anonymous chunks cannot do so reliably.
- One format to maintain. People edit markdown; nothing else is canon.

This is my judgment from how these systems behave, not a measured result on
this corpus. Milestone 5 includes the test that would show if it is wrong.

## The tension, and how it goes away

A human page and an LLM context are both compositions of the same morsels.
Nobody writes "a page". A question page is a query: the question morsel,
then every instrument, dataset, story and case linked to it, each shown in
its plain layer. The context handed to a model for that question is the
same query, as text. If the morsels are good, both are good.

## Morsels

- **One thing per file.** A tool, a dataset, a technique, a question, a
  story, a concept, a stage, a flow, a case, a person or body, a template.
- **Stands alone.** Read with nothing around it, a morsel still makes sense:
  it names its subject and does not lean on a parent page. This is the
  property that matters most for both readers.
- **Small.** Plain layer about 150 words at most. If it needs more, it is
  two things; split it and link them.
- **Two layers, addressable.** `## Plain` and `## Detail`. Any section can be
  cited as `id#section`.
- **Facts carry their source.** Checkable fields (cost, licence, who uses
  it) sit in the header with a source and a date, or say `unknown`.

## The graph

Edges are typed, written once, in the header of the morsel that owns the
claim. Reverse edges are generated. Starting vocabulary, kept short:

| Edge | Meaning | Example |
|---|---|---|
| `domain` | belongs to one of the ten domains | invest -> food |
| `answers` | helps answer a question | delft3d -> which-areas-flood |
| `needs` | requires this data or input | invest -> land-cover-data |
| `built_on` | uses this engine or technique | tees-valley-traffic -> aimsun |
| `example_of` | is an instance of a concept or technique | urbanly-backcast -> backcasting |
| `alternative_to` | does a similar job | sumo <-> matsim |
| `stage` | relevant at this playbook stage | scoping-brief -> name-the-question |
| `tells` | a story that shows this | late-bus -> tees-valley-traffic |
| `leads_to` | a flow exit | so-you-want-a-twin -> en-roads |

New edge types are added in `schema/edges.json`, never ad hoc in a file.

## What the build generates from the graph

- `index.json`: every header. `graph.json`: every edge, both directions.
- **Maps**: one generated morsel per domain, kind and question, listing what
  is there in one line each. A model reads the top map first, then the map
  it needs, then the entries. Three small reads instead of one large one.
- **Packs**: per question, the plain layers of everything one link away,
  joined. The question page and the model's context are both this pack.
- `llms.txt`, each morsel as markdown at a stable URL.
- A report: counts by kind, orphans (no links in or out), dangling links,
  `unknown` fields, entries past their review date.

## Milestones

"Fully functional site" is milestones 1 to 4. The site LLM is milestone 6.

**M0. Frame.** Done today: devlog, survey as seed, mockup, visual vocabulary,
statement of intent, 36 imported entries.

**M1. Knowledge model.** Schemas for each kind and the edge vocabulary.
Convert the 36 entries to morsels with layers and typed links; split the
paired ones. Loader, validator, graph build, maps, packs, report.
Done when: the check passes with no dangling links and the report prints.

**M2. Water seed, to public quality.** About fifteen morsels: two stories,
the water questions in plain words, six or so instruments with cost, skill
and try-it researched from their own sites, two or three free water tools
the survey lacks, the data sources, "what is a digital twin", two playbook
stages with their flows and templates, one case.
Needs him: facts for the case, a rewrite pass, promotion to public.
Done when: no `unknown` fields in the seed and he has read every page.

**M3. Site v1, static.** House stack. Pages composed from packs. Home as the
mockup: stories, question box, flow, doors, domain key, cards. One renderer
for all flows. Light and dark. Deep links. Machine outputs in the same build.
Done when: it runs locally and is checked by screenshot on phone and desktop.

**M4. Public launch of the seed.** Name, domain, licence, repo made public,
deploy. A "suggest a correction" path that needs no account. The
in-development list on the home page.
Needs him: every item in this milestone is his say.

**M5. The LLM door, at no running cost.** The scoping skill and an MCP
server over four functions: search, get, related, filter. A test set of
thirty or so real questions with the entries a good answer should cite, run
against the corpus with a model using only those four functions.
Done when: the test set passes at a rate he accepts. This is also the test
of the markdown-over-RAG position above.

**M6. The site LLM.** A conversation on the site, using the same four
functions and the same test set. Replies are a sentence plus entry cards;
flows can be walked in conversation; every reply cites ids; unanswered
questions go to the gap log. Server on fastify and socket.io. Model tiering
per house rule, with the tier labelled. A spending cap. No cookies.
Done when: test set passes on the live site and a month's cost is known.

**M7. Curator.** Scheduled agent: rechecks sources, watches feeds, drafts
morsels into `inbox/`. A review screen for approving them.

**M8. Community.** Signed corrections through attest, a practitioner
directory, teaching pages, credit for contributors.

**M9. Outwards.** The next domain after water, chosen with the community.
A dated yearly edition.

## Open risks

- M2 is the slow one. Research and his rewrite pass are human-paced.
- Over-splitting. Morsels too small to stand alone are worse than pages.
- The edge vocabulary will want to grow. Keep it under about a dozen.
