# 2026-10-02 — home page mockup; how the data sits on disk

Point-in-time entry, seventh of the day. Written by Claude.

## Home page mockup

`mock/home.html`, a single static file, phone first, light and dark.
Screenshotted once in both themes at 400px; that showed the menu stuck open
and the filters not hiding rows (a missing `[hidden]` rule), which I fixed
and did not re-screenshot. Published as a private artifact for viewing from
the phone: https://claude.ai/artifact/4jwp87rtaGXZVBUchiHp3c. It is a layout
study, not the site.

Order of the page, top to bottom:

1. A question box: "What do you want to understand about your place?"
2. Four doors by situation: land, town or agency, community, builder.
3. The ten questions from the survey, narrowed by the box and the doors.
4. A ladder of effort: look, use, adapt, commission.
5. Three instrument cards showing the two-layer entry, with "not yet
   reviewed" shown where the corpus says `unknown`.
6. The nine build stages as a strip.
7. The machine door: `llms.txt`, per-entry markdown, JSON, the scoping skill.
8. A dated "what changed" list.

Chrome is a floating menu top right. Design notes sit in the page and can be
switched off from the menu. All content is from the survey; nothing invented.
The question wording is the survey's and still reads as professional prose.

## How the data sits on disk

Anselm asked how to organise this extensibly, given that conversational
interfaces are coming. Proposal:

```
corpus/                 the canon. Hand-edited or approved. One file per thing.
  catalogue/<id>.md
  techniques/<id>.md
  questions/<id>.md
  playbook/<nn>-<id>.md
  cases/<id>.md
  artefacts/<id>.md
  concepts/<id>.md
  people/<id>.md
  news/<yyyy-mm-dd>-<id>.md
schema/                 one schema per kind, plus shared word lists
  catalogue.json ...    (domains, skill levels, audiences, link types)
inbox/                  proposals, same file format as corpus, not yet approved
  entries/              drafted by the curator or sent by a practitioner
  gaps.jsonl            questions the guide could not answer
media/                  images with a credit and licence file beside each
seed/                   original imports, kept as they arrived
build/                  generated, never edited, not in git
  index.json            every entry's frontmatter
  graph.json            every link between entries
  search/               text index, and embeddings when needed
  public/               the site, llms.txt, per-entry markdown
modules/                code: corpus, site, machine, skill, mcp, curator, guide
devlog/
```

### Rules that make it extensible

1. **One file per thing; the filename is the id; the id is the URL.** Ids
   never change. A rename leaves a redirect stub.
2. **Adding a kind is adding a folder and a schema file.** No other code
   changes: the corpus module reads kinds from `schema/`.
3. **Links are typed and live in frontmatter.** `answers: [flooding]`,
   `built_on: [sumo]`, `example_of: [backcasting]`. The graph is derived
   from them, never stored by hand.
4. **Every body has the same two sections**, `## Plain` and `## Detail`. A
   card, a page and a chat answer each pick the layer they need.
5. **Unknown is a value.** A field the guide has not checked says `unknown`,
   and the build counts them so the gaps are visible.
6. **Canon and proposals never mix.** Agents and outside contributors write
   only to `inbox/`. Moving a file from `inbox/` to `corpus/` is the human
   act of approval, and git records who did it.
7. **Everything in `build/` can be deleted and rebuilt.** Indexes,
   embeddings and the site are caches of the corpus.
8. **Git is the history.** "What changed" comes from `news/` entries and
   from the commit log, so there is no separate changelog to maintain.

### Where conversation fits

House principle: deterministic core, generative edge. The corpus module
exposes four functions: search, get, related, filter. Every reader uses the
same four.

- The site's pages call them at build time.
- The MCP server exposes them to a visitor's own assistant.
- The on-site conversation is a model that can only call those four, so it
  answers from entries and cites their ids. A question with no matching
  entry is appended to `inbox/gaps.jsonl`.

Conversation is a lens over the structured data and not a second copy of it.
In the interface, a reply is a short sentence plus the same entry cards the
page uses, and the conversation sets the same filters the doors and the
question box set. A person can always carry on by tapping instead of typing,
and every state has a link that can be shared.

### When a database arrives

Not yet. A few hundred files load in milliseconds and git gives review and
history for free. A server and a store come in when there is per-person
state: signed annotations, saved scoping briefs, conversation. At that point
one store module mediates all access (house policy), the server speaks
socket.io, and the corpus stays in git as the canon the store indexes.

## State of the repo against this layout

`corpus/catalogue/` has 36 entries with the first schema, written before the
`## Plain` / `## Detail` rule and without typed links. `schema/`, `inbox/`,
`media/`, `modules/` do not exist yet. `tools/split-survey.py` is a one-off
importer and would move under `modules/corpus/import/` or be retired.
