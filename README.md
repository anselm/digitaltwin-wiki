# Digital Twins Wiki

A free, open, evergreen reference for people who want to understand a place
by modelling it: a city, a watershed, a coast, a region. Staging is at
https://digitaltwins.wiki. The repository is the site: every entry is a
markdown file, the site is built from them, and anyone, person or agent, can
propose a change by pull request.

"Digital twin" is the shorthand. The site covers models and simulations of
places in general: flood and fire models, transport and land-use models,
agent-based and system-dynamics models, weather and climate models, 3D city
models, and the live, sensor-fed twins the phrase strictly means.

## The idea

Advances in computation, open data and AI have made it possible for a small
team, and increasingly for one person, to build a working model of the place
they care about and ask it what a change would do. The tools, data and
practice to do that exist, but they are scattered across disciplines,
vendors and papers, and the people who most need them, someone at a city
with a mandate, a student with a question about their own neighbourhood, a
reporter with a council vote next week, cannot find or judge them.

This site collects them in one place, evenly described, with sources, and
arranges them by the question a person is trying to answer. It is meant to
be **actionable**: a guest arrives with a problem and leaves with a next
step. It is meant to be **evergreen**: it describes tools, data and practice
that will still be true in a year, and treats the news as fuel for the
wiki, not the product. And it is meant to be **collaborative**: machines
find and draft, people check and promote, and the whole thing is plain
text in a public repository that other people and their AI assistants can
read, cite and build on.

It is a civic good, not a sales site. No vendor is favoured, nothing is
ranked by popularity, and every entry names the pages it was written from.

## Who it is for

Seven people, told as stories in `devlog/20261018-patrons.md`, stand for
the guests the site serves. In short:

- **Someone with a mandate and no modelling background**, told to "look
  into a digital twin" or "model our flood risk". They need plain words,
  the kinds of model that exist, who has done it for a place like theirs,
  what it costs and takes, and what to ask a vendor.
- **A builder**: a student, researcher or engineer who can code and has
  weeks, not years. They need open engines with real documentation, data
  they can download, a worked example to copy, and the books that set the
  practice.
- **A practitioner keeping up**, who wants what is new and credible, with
  sources they can cite, and may pull the site's exports into their own
  tools.
- **A reporter, a teacher, a neighbour** with an hour and a specific
  question: what kind of model is this, what can it not know, what should
  I ask.

Vendors, completists and the site's own editors are real people who also
arrive, and are not who the site is for.

## How it is arranged

- **Guides.** Nine stages, in order, from naming the question to keeping
  the model alive, written for the person with a mandate.
- **Mandates.** The targets, laws and pledges that send people to a model:
  who issued each, whom it binds, what it requires by when, how progress is
  counted, and the use case it turns into.
- **Use cases.** Questions people bring to a model of a place, each split
  into what it is really asking, the kind of model that answers it, the
  data it needs, what to do without a model, and what to do next.
- **Engines.** Tools, platforms and models, shelved by the task a guest is
  trying to do: water and flooding, transport and crowds, weather and
  climate, 3D cities and mapping, and so on. Each entry says who makes it,
  what it is used for, how it runs and whether it is open.
- **Notable twins.** Models of real places that people run and publish.
  Every twin, engine and data source carries an `open` block on the three
  Open³ axes (opencubed.org), source, data and participation, plus whether
  it has an API, so a reader can see what is reusable and what is closed.
- **Data.** Sources a model can be fed with: what they cover, how to get
  them, on what terms.
- **Books, articles, terminology, organizations, events, stories.** The
  practice, the words, the people and the short true accounts of what a
  model let someone see.
- **Vitals.** Six running measurements of the planet, refreshed at every
  deploy.

Everything is also published for machines: `llms.txt`, `index.json` and
`graph.json` at the site root, and every entry as markdown at
`/m/<id>.md`.

## How it is made

The sidebar reads in areas: what is new, practice (guides, use cases,
notable twins), technologies (engines, data), theory (books, articles,
terminology) and resources.

Entries live in `data/` as markdown with YAML frontmatter. Each top-level
key is a component; the kind of a thing (tool, twin, datasource, guide,
question, …) is a component, never a folder. A generic knowledge store,
`packages/knowledge`, loads, validates, queries and exports the tree; the
site, `packages/site`, is a static SvelteKit build over it. The data model
is written up in `devlog/20261015-data-design.md`.

Every entry carries provenance: who wrote it, from which pages, when, and
a status. **Machines propose, people promote.** Agents (a scanner that
polls papers, code, news, video and podcasts into an inbox; sessions that
read pages and draft entries) write only drafts. A person promotes an entry
to proposed or public after reading its sources. Production shows only
promoted entries; staging shows everything with drafts marked.

The bar an entry must clear is Wikipedia's rather than a test per kind:
factual and neutral, sourced from pages actually read, written in the house
voice rather than under a byline, and included because a guest could use
the thing or learn from it. The rules for writing one are in
`devlog/20261015-principles.md`.

## For agents

If you are an AI agent working in this repository, read these before you
write anything, in this order:

1. `CLAUDE.md` (also `AGENTS.md`): orientation and the three principles.
2. `devlog/20261015-principles.md`: the rules, the bar, how to write an
   entry.
3. `devlog/20261018-patrons.md`: who you are writing for, as people, and
   the benchmark the site is measured against.
4. The tail of `devlog/`: the most recent entries say what is in flight
   and what is the owner's to decide.
5. `todo.md`: the one open list, who each item waits on.

The devlog is the project's memory and its method. Thinking goes in dated
entries, `devlog/YYYYMMDD-topic.md`, never in an undated "canonical" file,
because ideas are situated in time and the sequence is itself the record.
Entries are revised in place while they are live, so that the devlog reads
as a speedrun of the thinking that led to the present; when an entry is
superseded, the new one names it. Read the tail before working, write an
entry when you decide something, and put status and plans there rather
than in a README or a root file.

Hard rules for agents: never invent a fact, date, URL, author or title; if
a source does not state it, leave it out and say so. Never promote an
entry. Never push. Commit often with a message that says what changed and
why.

## Running it

```
npm install
npm run check        # validate the corpus
npm run dev          # site with everything shown, drafts marked
SHOW=public,proposed npm run build   # what production shows
node tools/scan.js   # poll the sources into inbox/<date>.md
```

Deploy is manual: `deploy/deploy.sh <vm>`, see `project.toml`.

## Contributing

Open a pull request that adds or changes a markdown file under `data/`.
Follow the writing rules in `devlog/20261015-principles.md`: plain words,
a verb, the maker named, no marketing, every claim on a page you read and
listed under `provenance.sources`. Leave `status: draft`; a maintainer
promotes it. Corrections to existing entries are the most valuable
contribution: if an entry talks over your head, favours a vendor, states
something without a source, or leaves you with nowhere to go, say which
one.

## Licence and credit

The text of the wiki is free to read and reuse. Entries describe other
people's work and link to it; the credit is theirs. The visual grammar of
the ten domains is the site's own.
