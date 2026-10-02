# 2026-10-02 — approach sketch

Point-in-time entry, fourth of the day. Written by Claude. Consolidates the
three earlier entries into one approach. Proposal; nothing built yet.

## What it is, in a sentence

A free, open reference for people who build digital twins of places (cities,
watersheds, regions): what exists, how to build one, worked examples, and
reusable material. Readable by people and by their LLMs, and kept current by
agents that propose and humans who approve.

Working title: Digital Twins of Places. Name, domain, licence and home are
his to decide and do not block the first slice.

## The corpus

One git repo of markdown files with frontmatter. Everything else is generated
from it.

```
corpus/
  catalogue/   tools, engines, platforms, datasets, standards, programmes
  techniques/  agent-based modeling, system dynamics, co-simulation, backcasting ...
  playbook/    one file per stage of building a twin
  cases/       real deployments, described against the playbook stages
  artefacts/   reusable templates: interview guide, data inventory, scoping brief ...
  concepts/    definitions and the vocabulary of the field
  people/      practitioners and organisations, including neighbours (DTC, DT Hub, EU LDT)
  questions/   "where does the traffic go when a street closes?" -> linked entries
```

Frontmatter common to every entry:

```
id, title, kind, summary (one line: the question it answers or the job it does)
domains: [water, mobility, energy, ...]      # the survey's ten themes
audiences: [utility, government, civic, research]
access: open | commercial | public-programme
evidence: published evaluation, or "none found"
links: [ids of related entries]
sources: [{title, url, date}]
reviewed: date, and by whom (human or curator)
```

A validator fails the build on a missing source, a dead internal link or a
missing review date. No entry without a source.

## Modules (each behind its own interface, per house policy)

1. **corpus**: schema, validator, loader. The only thing that reads the files.
2. **site**: static build in the house stack. Entry pages, the question
   index, playbook pages with flow diagrams, a graph of how entries connect.
3. **machine**: generated in the same build. Each entry as plain markdown at
   a stable URL, `llms.txt`, a JSON index.
4. **skill**: the playbook packaged so a group's own agent can interview them
   through scoping and write a scoping brief.
5. **mcp**: search and fetch over the corpus, for agents that use tools.
6. **curator**: scheduled agent. Rechecks sources, watches feeds, drafts
   entries into a review queue. Never publishes.
7. **annotations**: signed corrections from practitioners, through attest.
8. **guide**: on-site conversation, answering only from entries, citing them.

Modules 1 to 3 are the site. 4 and 5 make it usable by LLMs at no running
cost. 6 to 8 make it alive, and each needs his say before it runs.

## Seed material

The survey already holds about 45 catalogue entries (Appendix A), the
question table, two worked walk-throughs (Appendices B and F), the vocabulary
(Appendix D), and 75 dated sources. Splitting it is mechanical work with a
human-checkable result. The essay half (hyperobjects, stewardship) stays an
essay and is linked, not split.

## First slice, to judge the idea on real pages

- All of Appendix A as catalogue entries, sources carried over as they are.
- The ten question pages from the applications table.
- Two playbook stages written in full, with diagrams and checklists:
  "Name the question" and "Check it against recorded outcomes".
- One case: a river allocation model of his, if he supplies the facts. I will
  not write a case from guesswork.
- One artefact: the scoping brief template.
- The neighbours as entries: Digital Twin Consortium, Digital Twin Hub, EU
  Local Digital Twin Toolbox, each read properly first.
- Site build with `llms.txt` and per-entry markdown, run locally on canada1,
  checked by screenshot. Not deployed.

## Rules that keep it trustworthy

- No entry without a source; no answer without an entry.
- Agents propose, a human approves. Every entry shows who last reviewed it.
- Entries describe. Opinion lives in signed essays or a dated yearly edition.
- The maintainer's own work is listed with the same template as anyone's.
- No cookies, no tracking.

## Deferred, his call

- Name and domain (availability unchecked).
- Licence. I would suggest CC BY 4.0 for the text and MIT for the code.
- Home: orbital.foundation, a new name, or his own.
- Whether the playbook's nine stages match how he actually works.
- When to invite the first outside practitioners to correct their entries.

## Not yet

On-site chat, the curator on a schedule, a practitioner directory beyond the
neighbours, any public announcement.
