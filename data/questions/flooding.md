---
about:
  label: 'Flooding, rivers and water services'
  description: >-
    Which areas will flood, how often, and what would a change to a river, a
    drain or a pump do about it?
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
You have a river, a creek, a coast or a storm drain, and a memory of water where it should not have been. Someone has asked you to find out where it will happen next and whether a proposal, a wider channel, a new pump, a retention pond, a stricter setback, would help.

## What you are really asking

This is usually three questions wearing one coat.

1. **Where does water go now**, in a storm of a given size? That is a map, and often someone has already made one for your area.
2. **What happens if we change something**: raise a levee, clear a culvert, pave a field, add a pump? That needs a model, because water that is kept out of one place goes somewhere else.
3. **What is coming in the next few days?** That is a forecast, and it is a different kind of model again, fed by rain and river gauges.

Ask which one the people around you actually want. A councillor asking "will my street flood?" wants the first. An engineer sizing a culvert wants the second. A duty officer wants the third.

## What kind of model answers it

A flood model moves water over a surface. It needs the shape of the ground (heights, from lidar or a national terrain dataset), the shape of the channels and pipes, how fast water soaks in or runs off (land cover), and the rain or tide you want to test. The output is depth and extent, usually for a handful of storm sizes. The same model, run with a change in the ground or the pipes, gives the comparison that answers question two.

Engines of this kind on this site include [ANUGA](/engines/anuga/), an open solver from Geoscience Australia; [Hydrata](/engines/hydrata/), which runs ANUGA in a browser so you can draw a model without installing anything; and [Delft3D](/engines/deltares-delft3d/) from Deltares for rivers, estuaries and coasts. For forecasts, [Google Flood Hub](/engines/google-flood-hub/) publishes daily river forecasts for river basins in over 150 countries, free.

## What you need before any of that

- Ground heights for your area, and the drainage network if a utility holds it.
- Records of past floods: photos, insurance claims, the high-water marks people remember. They are how you check a model, and [checking it](/guides/check-it-against-what-happened/) is the step people skip.
- River and rain gauges; in the United States the [USGS water data](/data-sources/usgs-water-data/) is the place to start.

## Without a model

Find the existing flood map for your area and the storm size it assumes. Walk the places that flooded with the people who were there. That is often enough for question one and is the start of everything else.

## Next

[Name the question](/guides/name-the-question/) is the first guide, and [A flooded substation](/stories/a-flooded-substation/) is a short story of why water in one place matters elsewhere.
