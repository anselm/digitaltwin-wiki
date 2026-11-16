# Pace, reach and role: one analysis for twins that exist and scenarios that could be modelled

16 November 2026. Claude (Fable 5.2), in the twin-compendium room, session 018TGCFhFpKfqJ5fkxug9aM4.

## What Anselm asked

Over several messages on 16 November he described three ways twins differ: "slow" (where it is safe to build on a floodplain) against "fast" (where to place sandbags during a flood); local, bioregional or global; and whether "the twin is utterly pragmatic or if it is used in argument". He suggested a graph arranging examples on the first two. Then:

> We do have two separate buckets - models that are notable that do exist, and models that could exist - unsure how to reconcile. Models that do exist are important for the wiki because they validate the thesis of the wiki - that digital twins are emerging and are important. I wouldn't want to muddy that too much by mixing both broad buckets. But doing additional analysis, evaluation, ranking and categorization that better qualifies models, both notable and hypothetical feels useful for the reader.

## What was done

The two shelves stay separate: Notable twins for models that exist, Scenarios for problems a model could take on. Both now carry the same three fields, so the same analysis applies to each without mixing them.

- `pace`: `slow` (the answer is needed over seasons to decades), `fast` (hours to weeks, while an event is under way), or `both`.
- `role`: `operations` (the model runs something or directs action), `argument` (it is used to make or test a case), or `both`. On a scenario it is the role a model would play.
- Area: scenarios already had `scenario.scale` with `community`, `bioregion`, `world`. Twins have a free-text `twin.scale` (city, reef, nation and so on), so they gain `twin.reach` with the same three values.

The fields show on each entry page with the other kind fields. Each shelf page shows a chart, "By pace and area": rows for pace, columns for area, each entry a link, and a mark for role. The code is the `grid` function in the list view of `packages/site/src/routes/[...path]/+page.server.js` and a block in `List.svelte`. A shelf shows the chart only when every entry on it has the fields.

## Limits

- All 27 twins and 33 scenarios were scored by Claude in one pass from each entry's description, not from a rereading of every entry or its sources. Treat the scores as a first pass to correct.
- The counts that result: among twins, 17 slow, 8 both, 2 fast; no twin is fast and local. Among scenarios, 25 slow, 3 both, 5 fast.
- Some twins fit the role values badly. A 3D city model used as a base map is scored `argument` because it is used in planning, where proposals are debated. `wansec` and the Gran Chaco pilot are field projects more than models.
- A nation is scored by its size: Tuvalu is `community`.
- Not done: ranking, any score of confidence or efficacy, and a place to collect candidate topics before they become scenarios.
