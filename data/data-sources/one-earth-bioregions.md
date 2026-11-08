---
about:
  label: One Earth Bioregions Framework
  description: >-
    One Earth's Bioregions 2023 map of 185 bioregions in 52 subrealms and 14
    realms, assembled from the 2017 terrestrial ecoregions; shapefile by
    request under CC BY-NC 4.0.
  tags:
    - bioregions
    - ecoregions
    - biomes
    - realms
    - conservation planning
    - global
datasource:
  coverage: global land, each coastal bioregion extended to the adjoining exclusive economic zone; the high seas are not included
  resolution: 185 polygons with an average land area of about 715,000 km2
  cadence: 'one release, Bioregions 2023; no update schedule stated'
  access: shapefile sent as a download link after a request form on oneearth.org; the attribute table as a CSV on datahub.io; browsable in the One Earth Navigator
  format: shapefile; CSV of codes, names, realms and subrealms
  homepage: 'https://www.oneearth.org/bioregions-2023/'
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'CC BY-NC 4.0; commercial use by a separate licence from One Earth'
domains:
  - ecology
relations:
  - predicate: made_by
    target: organizations/one-earth
provenance:
  origin: agent
  sources:
    - title: 'One Earth Bioregions Framework, One Earth'
      url: 'https://www.oneearth.org/bioregions-2023/'
    - title: 'Bioregions: Nature''s Map of the Earth, One Earth'
      url: 'https://www.oneearth.org/bioregions/'
    - title: 'Download the One Earth Bioregions Framework, One Earth'
      url: 'https://www.oneearth.org/datasets/'
    - title: 'Bioregions 2023, DataHub'
      url: 'https://datahub.io/climate-and-environment/bioregions-2023'
    - title: 'An Ecoregion-Based Approach to Protecting Half the Terrestrial Realm (Dinerstein and colleagues, BioScience 67, 534-545, 2017)'
      url: 'https://doi.org/10.1093/biosci/bix014'
    - title: 'From research to restoration: Nine ways people are using the One Earth Navigator, One Earth, 3 November 2026'
      url: 'https://www.oneearth.org/nine-ways-people-are-using-the-one-earth-navigator/'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed; the DOI checked on Crossref and the abstract read on Europe PMC; the shapefile itself not downloaded; the framework page carries the date 11 September 2026 and does not say when the framework was first published, beyond the 2023 in its name and citation'
  status: draft
---
Bioregions 2023 divides the world's land into 185 bioregions, each inside one of 14 realms and grouped into 52 habitable subrealms, with Antarctica as a 53rd.[^1] The framework is One Earth's own. Its page is by Karl Burkart, who is also credited for the maps, and the citation One Earth asks for is "One Earth Bioregions Framework, One Earth. {2023} Los Angeles, CA. oneearth.org".[^1,3] It was drawn with input from field scientists, conservation experts and geographers, and is meant for research, governance, grantmaking, advocacy and teaching.[^1]

## How the levels fit

A bioregion here is smaller than a realm and larger than an ecoregion.[^1] Realms are the broadest divisions of the land within which organisms share an evolutionary history. One Earth splits the eight classical realms into 14. The Nearctic becomes Subarctic America and Northern America, the Neotropic becomes Central America and Southern America, and the Palearctic becomes Subarctic, Western, Central, Eastern and Southern Eurasia. The other five keep one realm each.[^1,4] The top organising principle is the biome, of which One Earth uses the 14 widely held types, from deserts to tundra. Bioregions are subdivisions of biomes, cut by mountain ranges, plains, plateaus, basins and climate zones.[^1]

The building blocks are the terrestrial ecoregions of Dinerstein and colleagues, published in BioScience in 2017, which can be explored in a web application built by RESOLVE and Google Earth Engine with profiles written by One Earth.[^1] One Earth counts 844 ecoregions; the paper's abstract works from a map of 846.[^1,5] That paper measured progress toward protecting half the land. It found 98 ecoregions already more than half protected, 313 short of it but with enough habitat left to get there, and 207 with on average 4% of natural habitat remaining. It proposed a Global Deal for Nature as a companion to the Paris agreement.[^5] One Earth's reason for grouping ecoregions is that they are too small and too many for public engagement and resource allocation, and some sit inside others, as the Apennine forests sit inside the Mediterranean woodlands of Italy.[^1]

Five rules set the boundaries:[^1]

- A bioregion lies within one realm and never crosses to another.
- Bioregions are mainly subdivisions of biomes, cut by large geological structures and climate zones; the Great Plains become three, north, central and south.
- A bioregion is usually one biome, but ecoregions of another biome are taken in when they are embedded or closely linked, as the Guianan savanna is with the Guianan forests.
- An ecoregion is never split between two bioregions, except mangroves, which span several.
- Marine waters beyond the coast are included out to the exclusive economic zone line; the 62 marine provinces of Spalding and colleagues (2007) sometimes guide the grouping.

Rivers and lakes inside a terrestrial ecoregion belong to its bioregion, and a watershed's footprint sometimes shapes the grouping.[^1] One Earth notes that EEZs are administrative lines, used because most fishing and industry happen inside them; the high seas are left out.[^1] Bioregions average about 715,000 km2 of land. Thirty are small islands, the smallest Bermuda at 39 km2; the largest, Siberian Boreal Forests & Mountain Tundra, is 7.7 million km2 in three sections.[^1]

## Getting the boundaries

The shapefile is under CC BY-NC 4.0, for any non-commercial use with a citation of One Earth. A form on the datasets page requests a download link; commercial use needs a licence from One Earth, and the page points to its policy on reliance on data.[^1,3] The 14 realm pages describe each subrealm and bioregion, and the One Earth Navigator shows them on a map with the species and ecoregions inside each.[^2,6]

A CSV on DataHub holds the attribute table without geometry, also under CC BY-NC 4.0.[^4] Its 185 rows carry a code, the name, the classical realm, the One Earth realm and the subrealm. The code is a two-letter prefix for the classical realm (NA, NT, PA, AT, IM, AU, OC or AN) followed by a number.[^4] By classical realm it counts 53 Palearctic, 31 Nearctic, 29 Neotropical, 24 Afrotropical, 18 Indomalayan, 16 Australasian, 11 Oceanian and 3 Antarctic bioregions.[^4]

## Uses

One Earth's November 2026 article lists what people who downloaded the framework did with it. Researchers used it in species distribution models and global biomass mapping, matched forest plots to bioregions to study growth under climate change, studied wildfire in Central Asia and rodent sampling for zoonotic pathogens. A plant conservation team used it to work across borders. Teachers used it in classrooms from primary school to university.[^6] For a model of a place, a bioregion polygon is a study boundary that follows ecology and reaches offshore, and its code is a key for joining other data organised the same way. For a town or a single watershed the component ecoregion is usually the better fit.

The word bioregion is also used for a practice of organising communities and governance around watersheds and landscapes; [Bioregioning Earth](/data-sources/bioregioning-earth/) catalogues organizations in that work and is a separate project.
