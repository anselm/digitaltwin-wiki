---
about:
  label: Ecosystems and land management
  description: >-
    If land changes use, farm to housing, forest to pasture, floodplain to park,
    what happens to water, habitat, carbon and food?
question: {}
domains:
  - food
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: proposed
---
Someone wants to know what a change of use does to the stream below, the species living there, the carbon stored or the food grown, and whether a different plan would do better.

## What you are really asking

Land is where the systems meet. Change the cover and you change how rain runs off, what lives there, what is stored in the soil and trees, and what the land yields. So the question splits by what you care about, and most people care about two or three at once:

- **Water**: runoff, erosion, what reaches the stream.
- **Habitat**: which species lose or gain, and whether the pieces still connect.
- **Carbon**: what is stored and what is released.
- **Food**: what the land can grow and how that changes with weather.

## What kind of model answers it

Models of **ecosystem services**, the benefits people get from land and nature such as clean water and stored carbon, take a land-cover map and estimate each of these for the current map and for an alternative. They are built to compare scenarios, not to forecast a number to the decimal, and their value is in showing which plan is better and where. Crop models go deeper on the food question, simulating growth under given weather, soil and management. Integrated assessment models connect land to energy, water and the economy at the scale of a region or the world, and suit a question about policy more than one about a single parcel.

On this site: [InVEST](/engines/invest/) for ecosystem services, [DSSAT](/engines/dssat/) for crops, [GCAM](/engines/gcam/) for the regional and global scale, and [Earth Index](/engines/earth-genome-earth-index/) for finding features in satellite imagery.

## What you need

- A land-cover map now and under each plan. Satellite data from [Copernicus](/data-sources/copernicus-data-space/) is free. The plan is yours to draw.
- Terrain and soils.
- Species records: [iNaturalist](/data-sources/inaturalist/) holds observations people have made in your area.
- What the land yields now, from the people who farm it.

## If a mandate sent you

The [30 by 30 target](/mandates/thirty-by-thirty/) makes this a counting question first: which land counts as conserved, where the gaps by habitat are, and what a change of use would do to coverage and connectivity. [Protected Planet](/data-sources/protected-planet/) is the record it is measured against.

## Without a model

Overlay the plan on the land-cover map and list what each parcel changes from and to, then walk it with an ecologist and a farmer. Most of the trade-offs are visible from that table.

## Next

[Find the data](/guides/find-the-data/). [Who Drinks the River?](/stories/computational-journalism-colorado-river-interactive/) shows a land-and-water question told as a playable story.

![A landscape is several systems at once: energy, water, living systems and food and land, and the relationships between them.](/questions/land-use-change/landscape.svg)

*A conceptual map of relationships a coupled model could examine. Connections vary by place, technology and season. Arrow widths carry no quantities. Icons via Noun Project, CC BY 3.0.*

![A national crop-type map of Czechia assembled from 2015 Sentinel and Landsat observations.](/questions/land-use-change/crops.jpg)

*Crop types across Czechia, classified from 2015 Sentinel and Landsat observations into a map a land-use model can use. Credit: ESA / DUE Sentinel-2 for Agriculture project; contains modified Copernicus Sentinel data (2015), [CC BY-SA 3.0 IGO](https://creativecommons.org/licenses/by-sa/3.0/igo/), [source](https://commons.wikimedia.org/wiki/File:Czech_Agriculture_from_Space_ESA360858.jpg).*
