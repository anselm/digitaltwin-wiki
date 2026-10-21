---
about:
  label: 'Flooding, rivers and water services'
  description: >-
    Which areas will flood, how often, and what would changing a river, drain or
    pump do to the flooding?
  pinned: 3
question: {}
domains:
  - water
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: proposed
---
You remember water where it should not have been. Someone has asked where it will happen next, and whether a proposal would help: a wider channel, a new pump, a retention pond, a stricter setback.

## What you are really asking

This is usually three questions in one.

1. **Where does water go now**, in a storm of a given size? That is a map, and often someone has already made one for your area.
2. **What happens if we change something**: raise a levee, clear a culvert, pave a field, add a pump? That needs a model, because water that is kept out of one place goes somewhere else.
3. **What is coming in the next few days?** That is a forecast, and it is a different kind of model again, fed by rain and river gauges.

Ask which one the people around you want. A councillor asking "will my street flood?" wants the first, an engineer sizing a culvert the second, and a duty officer the third.

## What kind of model answers it

A flood model moves water over a surface. It needs four inputs:

- The shape of the ground. Heights come from lidar (laser scanning, usually from aircraft) or a national terrain dataset.
- The shape of the channels and pipes.
- How fast water soaks in or runs off, which depends on land cover.
- The rain or tide you want to test.

The output is depth and extent, usually for a handful of storm sizes. The same model, run with a change in the ground or the pipes, gives the comparison that answers question two.

[ANUGA](/engines/anuga/) is an open solver from Geoscience Australia, and [Hydrata](/engines/hydrata/) runs ANUGA in a browser, so a model can be drawn without installing anything. [Delft3D](/engines/deltares-delft3d/), from Deltares, covers rivers, estuaries and coasts. For forecasts, [Google Flood Hub](/engines/google-flood-hub/) publishes free daily forecasts for river basins in over 150 countries.

## What you need before any of that

- Ground heights for your area, and the drainage network if a utility holds it.
- Records of past floods: photos, insurance claims, the high-water marks people remember. They are how you check a model, and [checking it](/guides/check-it-against-what-happened/) is the step people skip.
- River and rain gauges. In the United States, start with the [USGS water data](/data-sources/usgs-water-data/).

## Without a model

Find the existing flood map for your area and the storm size it assumes, then walk the places that flooded with the people who were there. That is often enough for question one.

## Next

[Name the question](/guides/name-the-question/) is the first guide, and [A flooded substation](/stories/a-flooded-substation/) is a short story of why water in one place matters elsewhere.
