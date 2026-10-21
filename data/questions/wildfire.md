---
about:
  label: Wildfire and exposure
  description: >-
    Where might a fire spread from here, what is exposed, and where would
    clearing, burning or hardening give the most protection?
question: {}
domains:
  - fire
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
Communities, utilities and agencies in fire country ask it to learn where they are most exposed and what to do first.

## What you are really asking

- **Behaviour**: given an ignition, a wind and the fuel on the ground, where does the fire go and how fast? This is the question for a day of high danger and for planning evacuation routes.
- **Exposure**: which homes, lines, roads and water supplies lie in the paths a fire could take? This is the question for a budget.
- **Mitigation**: which treatment changes the answer most per dollar? A fuel break, a prescribed burn, hardened structures, buried lines.

## What kind of model answers it

**Fire spread models** simulate the fire front across the landscape from fuel, terrain and weather. They are mature, and fire agencies run them operationally. **Risk models** run many spread simulations under many weather days and combine the results with where assets are, producing maps of likelihood and exposure. Both depend on the fuel map, which holds most of the uncertainty. Lidar, laser scanning that measures the shape of vegetation from the air, is producing new fuel data that is changing that.

On this site, [Technosylva](/engines/technosylva/), [FireVision](/engines/firevision-opalai/) and [FLAIM](/engines/flaim-earthdaily-fire-likelihood-ai-model/) are commercial services used by agencies, utilities and insurers. The [CTrees 3D fuels model](/data-sources/ctrees-3d-fuels-model/) is an open lidar-derived fuel dataset for fire models to read. Open spread engines exist and are not yet on this site.

## What you need

- A fuel map, and a plain statement of how old it is.
- Terrain.
- Weather: the historical record of wind and humidity on bad days, and the forecast.
- Where the assets and the people are, including the people who cannot leave quickly.
- Past fire perimeters, to check the model against.

## Without a model

Your state or national fire agency has already published a hazard map. Start there, overlay your assets, and drive the evacuation routes on a windy afternoon.

## Next

[Check it against what happened](/guides/check-it-against-what-happened/). Fire models are checked against past fires, and the perimeters are public.
