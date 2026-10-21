---
about:
  label: Build the smallest version
  description: >-
    One place, one scenario, one output, made quickly and shown to the people
    who asked. Then grow it only where they push.
  pinned: 4
guide:
  stage: 5
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
The first version should be embarrassingly small: one neighbourhood, one storm, one map. It tests whether the question, the data and the model fit together. It also gives the people who asked something to react to within weeks.

## What small means

- **One place**, the one where the question is sharpest and the data best.
- **One scenario**, the change people most want to see.
- **One output**, a single map or chart that answers the sentence you wrote in [the first guide](/guides/name-the-question/).
- **No live feed, no dashboard, no 3D** unless the question is about those things.

## How to do it

1. Set up the engine with its own example first. Every open engine ships with one; getting it to run teaches you the tool without your data in the way.
2. Replace the example's layers with yours, one at a time, checking each.
3. Run the baseline. Compare it with something you know happened. If it is wrong, stop here and fix the data or the setup; this is the [check](/guides/check-it-against-what-happened/) in miniature.
4. Run the scenario. Make the one output.
5. Show it to the people who asked, within the week. Write down what they said.

## What to copy

[Bay Layers](/twins/bay-layers/) is a worked example on this site: a few shared layers of one bay, in a browser, with the source published so it can be copied. Each [engine](/engines/) entry links to the maker's own page, with its examples and documentation.

## What you learn

Usually: the data is messier than it looked, the question shifts, and the people who asked want a different output. All three are cheap to learn now and expensive later. If the small version answers the question, you may be done.

## Next

[Check it against what happened](/guides/check-it-against-what-happened/).
