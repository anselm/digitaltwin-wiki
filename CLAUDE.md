# twin-compendium

Project-specific orientation only. House policy (devlog, git, UX, writing,
deploy) comes from the harness and is not repeated here.

## What this is

A free, open reference for people who build digital twins of places (cities,
watersheds, regions): a catalogue of tools and techniques, a playbook for
building one, worked cases and reusable material, readable by people and by
their LLMs. Intended as a civic good for practitioners, not a sales site.
Seeded from Anselm's survey draft at
https://digital-twins-survey.anselm52491.chatgpt.site. Staging at
https://digitaltwins.wiki; the plan of record is `devlog/20261015-do-over-plan.md`.

Three things Anselm said on 2026-10-18 that shape every choice here:

1. It is an evergreen site of real resources real people can use to build
   models of their own issues; some readers are not technical. It showcases
   best practices and illuminates the space; it does not try to cover every
   mention.
2. The space is too big for a person to track, so external news (the
   scanner, the inbox) is fuel for the wiki, not the product.
3. "Digital twin" is his shorthand for models and simulations of places in
   general. Do not fixate on the phrase in web copy, labels or searches.

## Where things are

- Code: this folder. Repo: `anselm/twin-compendium`.
- Principles, the bar an entry must clear, and how to write one:
  `devlog/20261015-principles.md`. Who the site is for, as stories:
  `devlog/20261018-patrons.md`. The data model:
  `devlog/20261015-data-design.md`. Read them before writing or promoting
  anything. There is no `meta/` folder; thinking goes in dated devlog
  entries, revised in place.
- Devlog: `devlog/` (dated entries; read the tail first).
- Deploy: see `project.toml`.

## Project-specific facts

(APIs, credentials locations, quirks, anything a fresh session must know that
is not derivable from the code)
