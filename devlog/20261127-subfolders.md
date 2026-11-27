# Large folders split into subfolders, starting with Engines

27 November 2026. Claude, in a cloud session.

The policy and Anselm's words are in `20261015-principles.md`. He also
asked whether entry files should carry the devlog's date prefix. Not
adopted: a file's name is its address, an entry has several dates
(published, observed, written, revised), and a prefix makes a folder
harder to search by name. He agreed and chose subfolders.

## Done: Engines

112 engines moved from `data/engines/` into 15 subfolders, one for each
value of `tool.group`, with their pictures and the three folder entries.
An engine's address is now `/engines/<group>/<name>/`. Each subfolder has
an `index.md` and so a page, for example `/engines/weather-and-climate/`.
175 files under `data/` had links, relations or picture paths rewritten.
The script used a pattern over `data/**/*.md`; the corpus check and a full
build, which fails on any link that goes nowhere, both pass.

Code: the list view in `+page.server.js` lists all entries beneath a shelf
when the shelf has subfolders, and passes the subfolders to `List.svelte`,
which shows them as "By subject" links above the list. Navigation counts
leave the subfolder pages out. `tools/fetch-depictions.js` writes a picture
beside its entry, and `tools/import-linkedin.js` has the four moved ids.

Things to know:

- `tool.group` and the folder now say the same thing twice. Nothing checks
  that they agree. When an engine changes group, move the file and change
  the field.
- Five groups hold four entries or fewer, one of them a single entry
  (Research infrastructure). The folders follow the existing groups; no
  group was merged.
- The subfolder pages have one-line descriptions written by formula
  ("Engines filed under ...") and no text.
- The breadcrumb in the structured data still runs home, Engines, entry,
  without the subfolder.
- Devlog entries, todo.md and the archive still give old addresses where
  they mention engines. They are a record and were not rewritten.
- Outside links to the old engine addresses now get the 404 page.

## Not done: the other large shelves

Counted on 27 November: Data sources 100, Articles 69, People 59,
Scenarios 34, Twins 28. None of these has a grouping field to follow, so
each needs a decision first.

- Data sources: the first-listed domain would give ecology 25, places 22,
  climate 16, people 12, water 7, fire 5, mobility 4, energy 2, food 2.
  But the first domain was never declared the main one, and 49 entries
  list more than one.
- Articles: the page groups by standing (tier), which changes as evidence
  comes in and so is a poor folder name. By first domain: people 18,
  ecology 15, climate 12, places 9, water 6, with 5 that have none.
- People: no domains and no grouping field at all.

The mechanism is general: any shelf can be
split by adding subfolders with an `index.md` carrying
`section: { nav: false }` and moving entries in.
