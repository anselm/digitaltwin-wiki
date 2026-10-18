---
about:
  label: Wildfire and exposure
  description: >-
    Where might a fire spread from here, what is exposed, and where would
    clearing, burning or hardening help most?
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
A community, a utility or an agency in fire country wants to know where it is most exposed and what to do first.

## What you are really asking

- **Behaviour**: given an ignition, a wind and the fuel on the ground, where does the fire go and how fast? This is the question for a day of high danger and for planning evacuation routes.
- **Exposure**: which homes, lines, roads and water supplies lie in the paths a fire could take? This is the question for a budget.
- **Mitigation**: which treatment, a fuel break, a prescribed burn, hardened structures, buried lines, changes the answer most per dollar?

## What kind of model answers it

**Fire spread models** take fuel, terrain and weather and simulate the fire front across the landscape. They are mature, and fire agencies run them operationally. **Risk models** run many spread simulations under many weather days and combine the results with where assets are, producing maps of likelihood and exposure. Both depend on the fuel map, and the fuel map is where most of the uncertainty hides; new lidar-based fuel data is changing that.

On this site, [Technosylva](/engines/technosylva/), [FireVision](/engines/firevision-opalai/) and [FLAIM](/engines/flaim-earthdaily-fire-likelihood-ai-model/) are commercial platforms used by agencies, utilities and insurers. The [CTrees 3D fuels model](/data-sources/ctrees-3d-fuels-model/) is an open lidar-derived fuel dataset for fire models to read. Open spread engines exist and are not yet on this site.

## What you need

- A fuel map, and an honest statement of how old it is.
- Terrain.
- Weather: the historical record of wind and humidity on bad days, and the forecast.
- Where the assets and the people are, including the ones who cannot leave quickly.
- Past fire perimeters, to check the model against.

## Without a model

Your state or national fire agency has already published a hazard map. Start there, overlay your assets, and drive the evacuation routes on a windy afternoon.

## Next

[Check it against what happened](/guides/check-it-against-what-happened/), because fire models are checked against past fires and the perimeters are public.
