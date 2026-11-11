---
about:
  label: Cooling the planet
  description: >-
    Could sunlight be reflected, or carbon pulled back out of the air, to hold
    warming down? And what would that do to the weather where I live?
question: {}
domains:
  - climate
provenance:
  origin: agent
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the entries linked on this page'
  status: draft
---
No one can run this experiment on the planet, so the model is the only laboratory for asking what would follow.

## What you are really asking

- **The global lever**: how much cooling a given amount of aerosol in the stratosphere, or of brightened cloud, would give, and how quickly. Earth system models answer it, and dozens of them have run the same experiments so their answers can be compared.
- **The local consequence**: what it would do to rain, the monsoon, the growing season or summer heat where you live. The same models answer that on a grid of about a hundred kilometres, and their confidence at that scale is low. The work in a local study is bringing the result down to a place and carrying the disagreement between models with it.
- **The exit**: what happens if it is started and then stopped. The experiments that switch it off answer that.
- **The other branch**: taking carbon dioxide back out of the air rather than reflecting sunlight. It is a different modelling problem, with its own experiments.

[Geoengineering](/terms/geoengineering/) sets out the methods, the names, the volcanic analogue and the assessments.

## What kind of model answers it

The sunlight branch is run in the [Earth system models](/terms/earth-system-model/) that also produce the climate projections, under the shared experiments of [GeoMIP](/data-sources/geomip/). The first of those, G1, offset a quadrupling of carbon dioxide with a uniform dimming of the sun; twelve models ran it, and all agreed that one dimming could not restore temperature and rainfall at the same time. The protocol for the current round holds the world at 1.5 °C above preindustrial with aerosol or brighter clouds from 2035, and one run stops the aerosol at the end of 2084 to see what follows.

Aerosol in the stratosphere asks for a model whose atmosphere reaches well above it. NCAR's [CESM](/engines/cesm/) with its WACCM atmosphere, which extends from the surface to the thermosphere, is the model behind the two large American ensembles, [GLENS and ARISE-SAI](/data-sources/glens-and-arise-sai/). ARISE-SAI is free to download without an account. Because a single run cannot tell the effect of the intervention from a run of hot or cold years, the main studies are ensembles: the same model run many times from slightly different starts.

Between the global model and your place sit two more layers: emulators trained on the big runs, which answer a new injection strategy in seconds, and downscaling, which brings a hundred-kilometre grid down to ten or less. The term's section on the rest of the stack names the current ones, with what their authors say they cannot do.

The carbon branch has its own intercomparison, [CDRMIP](/data-sources/cdrmip/), whose experiments put carbon dioxide back into or take it out of a model's atmosphere and watch how far the climate reverses.

## What you need

- An ensemble, if the question is local: [ARISE-SAI](/data-sources/glens-and-arise-sai/) has ten members of each run, so the year-to-year noise can be measured against the signal.
- The GeoMIP output itself, which is free through the same Earth System Grid Federation portals as [CMIP6](/data-sources/cmip6/), in the same netCDF files. In November 2026 the archive held four experiments from eight models.
- The experiment's own baseline. Every GeoMIP run is defined against a scenario without intervention, and the signal is the difference between the two, taken over your region.
- More than one model. Where the models disagree about your region, that disagreement is the finding.
- Your region's climate projection without intervention, so the result has something to be compared with. [Weather and climate](/questions/weather-and-climate/) covers where to find it.

## Without a model

The nearest thing to a real experiment is a large volcanic eruption. Mount Pinatubo in June 1991 put about fifteen million tons of sulphur dioxide into the stratosphere and cooled the world by about half a degree for the next year or two. The weather records of your own region for 1991 to 1993 are the closest observation there is of what a cooled stratosphere does locally, with the caution that one eruption is not a sustained programme.

## Next

Read [Geoengineering](/terms/geoengineering/). Then read the GeoMIP protocol paper linked from [GeoMIP](/data-sources/geomip/); it defines each experiment exactly.
