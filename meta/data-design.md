# Data design

How knowledge is represented in this repository, and in any project that
reuses `packages/knowledge`. Written 2026-10-15 by Claude from Anselm's
brief (`devlog/20261015-do-over-brief-from-anselm.md`), his earlier design
note for social-knowledge-service
(https://github.com/anselm/social-knowledge-service/blob/main/packages/knowledge/DESIGN.md,
November 2025) and the ontology survey done for ontology-scraper on
2026-10-14. This file is the current rule; the devlog holds the history.

## Why this shape

There is no one right way to partition the world into things. Every scheme
is a working approximation made on a budget, and every scheme produces
platypuses. So the model here does not try to be an ontology. It is a
pragmatic layout with four commitments:

1. **An entity is a bag of components, not an instance of a class.** The
   entity-component pattern from games: an entity is an id; everything it
   "is" comes from the components it carries. A tool that is also a
   dataset carries both components. Nothing has to be the subclass of
   anything.
2. **Files first.** Each entity is one file a person can open and edit.
   The folder tree is the one hierarchy we commit to; everything else is
   tags and relations. A static site needs no database; large assets sit
   beside the entity; git is the audit trail.
3. **Provenance on everything.** Where a fact came from, when, and who
   last looked at it. Agents will write most entries; readers need to know
   which ones a person has checked.
4. **The model is not the storage.** The loader is the only code that
   reads files. A Mongo store or a server can replace it behind the same
   query API without touching entities or views.

## An entity

```
data/tools/matsim/index.md        ← id is "tools/matsim"; also the URL
data/tools/matsim/screenshot.png  ← assets live beside the entity
data/terms/digital-twin.md        ← shorthand for terms/digital-twin/index.md
```

```markdown
---
about:
  label: MATSim
  description: Large-scale agent-based transport modeling.
  tags: [open-source, agent-based]
  depiction: screenshot.png
tool:
  form: simulation framework
  cost: free
  homepage: https://matsim.org/
domains: [mobility]
relations:
  - { predicate: answers, target: questions/after-a-closure }
provenance:
  origin: survey
  sources:
    - { title: "MATSim", url: "https://matsim.org/", date: 2026-09 }
  reviewed: 2026-09
  reviewed_by: survey draft, not yet rechecked
  status: proposed
---

Body text in markdown. This is the entity's content.
```

Rules:

- **id = path** under `data/`, without `index.md` or `.md`. Lowercase,
  hyphens, slashes. Stable: renaming an entity is a move, and moves should
  leave a `redirect` component behind in a stub at the old path.
- **Every top-level frontmatter key is a component.** Unknown components
  are allowed and reported by the validator as unknown, not rejected: an
  entity may carry a component before the schema for it exists.
- **Body is content.** Markdown. It belongs to the entity, not to any
  component, because most entities have one body and it is what humans
  write.
- A folder's own `index.md` describes the folder. `data/tools/index.md` is
  the entity "tools" and usually asks for the `list` view.

## Base components

Every entity may carry these; `about` is required.

| component | fields | notes |
|---|---|---|
| `about` | `label` (required), `description` (one sentence), `tags[]`, `depiction`, `view`, `pinned`, `aliases[]` | `view` is the hint the site uses to choose how to show this entity. `depiction` is a path beside the entity or a URL. |
| `provenance` | `origin` (survey, human, agent, import), `author`, `sources[{title,url,date}]`, `created`, `updated`, `reviewed`, `reviewed_by`, `status` | `status` is draft, proposed or public. Public builds show public only. An entity with no sources is reported. |
| `location` | `lat`, `lon`, `rad`, `place` (free text) | Point and radius, enough for a map view. Extent geometry can come later as a separate component. |
| `time` | `begins`, `ends` | ISO dates. For events, editions, project lifetimes. |
| `relations` | list of `{predicate, target, note?}` | `target` is an entity id. Predicates are declared below. Reverse links are computed, never written. |
| `domains` | list of domain ids | The survey's ten themes. Kept as its own component because the whole visual grammar hangs off it. |
| `redirect` | `to` | Left at an old path after a move. |

## Kind components

Kind is a component. An entity is a tool because it has a `tool` component,
even an empty one. Kind components for the digital-twins use case, as
declared in `packages/knowledge/schemas/twins.json`:

| component | typical fields | folder |
|---|---|---|
| `tool` | form (engine, platform, model, library, service), cost, skill, homepage, licence, maker → organization | `tools/` |
| `datasource` | coverage, resolution, cadence, access, format, homepage | `data-sources/` |
| `person` | affiliation → organization, role, homepage, handles | `people/` |
| `organization` | form (company, agency, consortium, lab, programme), homepage, country | `organizations/` |
| `book` | authors, publisher, year, isbn, url | `books/` |
| `website` | url, kind (blog, newsletter, community, directory) | `sites/` |
| `article` | url, published, publisher, authors | `posts/` and `articles/` |
| `guide` | stage, audience | `guides/` |
| `term` | aka[] | `terms/` |
| `usecase` | sector, scale, operational (yes, pilot, proposal) | `use-cases/` |
| `question` | | `questions/` |
| `event` | url, venue | `events/` |
| `story` | | `stories/` |
| `flow` | steps | `flows/` |

The folder is a convention for where such entities usually live, not a
rule: kind comes from the component, never from the path.

When does something deserve a component rather than a tag? When it brings
fields of its own that other entities do not have (the Noy and McGuinness
test from Ontology Development 101). "pinned" is a tag; "book" is a
component because it has an ISBN.

## Relations

Written on the entity as `relations: [{predicate, target}]`. Declared
predicates and their computed reverses:

| predicate | means | reverse |
|---|---|---|
| `answers` | helps answer this question | answered with |
| `needs` | requires this data or input | needed by |
| `built_on` | uses this engine, platform or technique | used by |
| `example_of` | is an instance of this concept or technique | examples |
| `alternative_to` | does a similar job | alternative to |
| `stage` | is relevant at this guide stage | useful at this stage |
| `tells` | is a story that shows this | told in |
| `made_by` | tool, dataset or work produced by this organization or person | makes |
| `member_of` | person belongs to organization or group | members |
| `cites` | refers to this entry as a source | cited by |
| `about` | is about this entity | discussed in |
| `part_of` | is a part of this larger thing | parts |

Add a predicate here before using it; the validator reports undeclared
ones. A relation that needs its own provenance or dates is written as a
separate entity carrying a `relation` component (`subject`, `predicate`,
`object`, `begins`, `ends`) and whatever `provenance` it needs.

## Identity

The path is the id within one store. A `kid` (UUID v7) can be added to
`about` when an entity must be referred to from outside this repository or
survive a move; it is optional here because the store is one git tree and
moves leave redirects. The earlier design's `kid:<uuid>:<domain>/<path>`
form is compatible and not used yet.

## What is deliberately left out

- No class hierarchy, no inheritance between kinds.
- No confidence scores on components yet. The ontology-scraper work
  explores scored kind claims; if an agent pipeline needs them here they go
  in a `claims` component, not in `about`.
- No permissions in the data. Who may edit is a property of the repository
  (git) or of a server in front of it, not of the entity.
