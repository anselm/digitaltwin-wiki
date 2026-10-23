# Cards, a toolset policy, and a status page (2026-10-23)

Three requests from Anselm in one stretch of the afternoon:

1. "Small cards that people could embed somewhere, like on x.com", for the
   Vitals series and then for every page, with "an SEO pass over the entire
   site". Done: `tools/share.js` renders a 1200×630 card per entry and per
   Vitals series at every build, writes sitemap.xml and robots.txt, and
   reports pages that will share poorly. Each page's head now carries Open
   Graph and Twitter card tags, a canonical link and a description. Each
   Vitals series has its own page (`/vitals/<id>/`) so one chart can be
   shared.
2. "We probably want a tool that we can run over and over", then: "the site
   probably wants a set of tools that are available for use - and that it
   knows it can use them - after updating a page - like this feels like
   general policy." Done: the policy and the list of tools are in
   `CLAUDE.md`; `npm run after` is the pass to run after changing entries.
3. "A /admin page that isn't actually hidden from users but is an internal
   status - tracking which pages are the most mature, need the most work,
   effectively our priorities", because many of his conversations with
   Claude are about priorities and `todo.md` is not always kept up. Done:
   `tools/status.js` scores every entry and `/admin/` shows the shelves,
   the weak pages most linked to, the drafts closest to ready, orphans, and
   `todo.md`. Not in the navigation or the sitemap.

What the first run says: 376 entries, 1 public, 21 proposed, 354 draft;
mean maturity 32 of 100; 199 entries nothing links to; 173 descriptions
longer than a search result shows.

His call, and it decides whether the search half of this matters yet: the
Caddyfile still sends `X-Robots-Tag: noindex, nofollow` on every response
(todo.md: "Decide whether to drop noindex and the staging badge"). Link
previews on X and elsewhere work regardless; search engines will not list
the site until that header goes.

Next, without being asked: when a scenario or entry is written, the
after-edit pass flags long descriptions; the backlog of 173 can be cut down
shelf by shelf, starting with the pages /admin/ lists as most linked.

## A fifth layer: communication (later the same afternoon)

Anselm, after looking at Climate Central's Climate Local and Climate
Matters: "a full stack isn't just data, and engines, and even web based
interfaces to engines, but also communications?" Then: showing is half of
communicating, and tools that make motion graphics have changed it; the
other half, "consumer or mass market facing experiences that are not
merely presentations but are interactive", is where "very little done yet"
lives. "We have to let the stakeholders actually play with the scenarios -
not merely be passive - i feel like participation is the key." He wants the
shelf to represent the field, not his own work.

So the stack in `devlog/20261019-stack.md` gains a fifth layer after
presentation, and the site a Communication shelf (`data/communication/`)
in two groups, Showing and Playing: Climate Matters, Climate Local, the
Climate Shift Index, Manim and Remotion; Victor's Explorable Explanations,
Parable of the Polygons, the NYT's You Draw It, En-ROADS workshops and the
Climate Action Simulation, the World Climate Simulation, companion
modelling, and the FT climate game. Twelve entries, each written from its
own pages and refuted. The point most worth carrying into the engine:
Victor's 2024 postscript says he had already given up on the screen as the
medium for discussion grounded in models.
