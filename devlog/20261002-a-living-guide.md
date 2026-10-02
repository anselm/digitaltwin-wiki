# 2026-10-02 — the guide as a living thing, not a static wiki

Point-in-time entry, second of the day. Written by Claude after Anselm
widened the brief: the site should serve an emerging community, carry process
knowledge as well as a catalogue, and be usable by LLMs as well as people.
Follows `20261002-positioning-and-phrasing.md`. Proposal only; nothing built.

## His prompt, compressed

- Enumerate tools, technologies and techniques.
- Carry the meta-level process of a real deployment as flow diagrams and
  checklists: interviewing stakeholders, technology decisions, identifying
  data sources, verifying results, protecting privacy.
- Be conversational; expose harnesses or scripts that LLMs can fetch and use.
- A modern wiki can be alive: an expert that collects, annotates and curates.

## The main idea: one corpus, three readers

Keep one structured corpus in git (markdown with frontmatter). Everything
else is a rendering of it for a different reader.

1. **A person browsing.** Pages, diagrams, the question index.
2. **A person's own LLM.** The same entries as plain markdown at stable URLs,
   an `llms.txt` index, a JSON index, and a downloadable skill.
3. **The site's own agents.** A curator that keeps the corpus current and a
   guide that answers questions from it.

No reader gets content the others cannot see. That keeps the "expert" honest:
it can only say what an entry says, and it cites the entry.

## Three kinds of content

- **Catalogue.** Tools, engines, platforms, datasets, standards, techniques
  (agent-based modeling, system dynamics, co-simulation, backcasting,
  multi-objective search). One templated entry each. This is the survey's
  Appendix A, split up and extended.
- **Playbook.** The process of building a twin, as stages. Each stage is a
  page with a small flow diagram, a checklist, the questions to ask, the
  common ways it goes wrong, and links into the catalogue.
- **Cases.** Real deployments described against the playbook stages: what
  question, whose data, which engine, how it was checked, who maintains it.

The playbook is the part the other chat missed, and it does the positioning
work. A catalogue shows he has read widely. A published method shows how he
works, which is what someone hiring a builder wants to know.

## Draft playbook stages (my proposal, to be argued with)

1. Name the question and who is asking it. Includes "do you need a twin at
   all, or a spreadsheet?"
2. Interview the people affected: operators, agencies, residents, landholders.
3. Inventory the data: what exists, who holds it, on what terms, how fresh.
4. Choose the kind of model, then the engine. Buy, adapt or build.
5. Build the smallest version that answers the question.
6. Check it: backcast against recorded outcomes, state the uncertainty.
7. Protect people: privacy, consent, data that can identify a household,
   Indigenous data rights.
8. Put it in front of its users: professional and public interfaces.
9. Keep it alive: who maintains the data connections, and who pays.

Appendix B of the survey (the cycle-lane walk-through) and Appendix F (the
stewardship stack) are already two worked passes through these stages.

## The playbook is also the harness

Each stage checklist gets written once, in a form both a person and a model
can run. Packaged as a skill (a `SKILL.md` plus the stage files), a group can
load it into their own Claude or other agent and be interviewed through
scoping: what is your place, what is your question, who holds the data. The
output is a scoping brief in a fixed format.

That is "scripts LLMs can fetch and use" in a concrete form, and it costs
nothing to run because the visitor's own model does the work. An MCP server
(search entries, get entry, entries for a question) is the same corpus behind
a tool interface, for agents that prefer that.

The scoping brief is also the natural contact path: a group that has produced
one has something specific to send to a builder. The site should say plainly
that the maintainer builds these, once, in one place.

## The living part

- **Curator agent.** Runs on a schedule. Rechecks every entry's sources,
  flags dead links and changed facts, watches a short list of feeds for new
  tools and programs, and drafts entries. It only proposes. A human promotes.
  This is the house rule (machines propose, humans promote) and it is also
  what makes the guide trustworthy.
- **Annotations from the field.** People who build a listed system can
  correct or extend its entry. Signed corrections fit attest (passkey
  sign-in, signed attestations), which exists for exactly this. No cookies.
- **Provenance on every claim.** Each entry carries its sources and a "last
  reviewed" date, and says whether a human or the curator last touched it.
- **On-site conversation.** A guide that answers only from entries, cites
  them, and says "not in the guide" otherwise. Every question it cannot
  answer is logged as a gap for the curator. This costs money per visitor, so
  it comes last.

## Order of work, cheapest first

1. Corpus: split the survey into entries; write the playbook stages.
2. Static site from the corpus, with the per-entry markdown, `llms.txt` and
   JSON index generated in the same build. No running cost.
3. The scoping skill, and an MCP server.
4. Curator agent on a schedule, proposing into a review queue.
5. Annotations through attest.
6. On-site conversational guide.

Steps 1 to 3 can exist before the contract ends in late October. I have not
estimated 4 to 6.

## Effect on the phrasing

Title stands: Digital Twins of Places. The descriptor changes because the
site now does three things. Draft front-page verbs:

> **Look up** a tool, a technique or a dataset.
> **Plan** a twin for your own place, stage by stage.
> **Ask**, or point your own AI at the guide.

## Risks I see

- A site that talks can invent. Rule: no entry, no answer.
- A curator that auto-publishes turns the guide into slop within months.
- Catalogue breadth is cheap to fake and expensive to keep true; fewer
  entries with evidence fields filled in beat many thin ones.
- The playbook stages are my proposal from general practice and from the
  survey's appendices. They are not drawn from a cited methodology and should
  be checked against how he actually ran the river projects.
