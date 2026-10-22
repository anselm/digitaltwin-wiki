---
about:
  label: Forest Typology (ForTy)
  description: >-
    Google's global map of forest types at 10 m: for every patch of land, the
    probability that it is primary forest, regrowing forest, planted forest,
    plantation, tree crops, or other land, as of 2020, with an early yearly
    series for 2017 to 2025.
  tags:
    - forests
    - primary forest
    - plantations
    - deforestation
    - EUDR
    - land use
    - satellite
datasource:
  homepage: 'https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_forest_typology_forest_typology_2020_v1_0_collection'
  coverage: global, all land
  resolution: 10 m pixels; the catalogue notes the effective resolution of the inputs may be coarser
  cadence: a 2020 baseline map (v1.0); an early-release yearly series for 2017 to 2025 that the authors say they will keep improving
  access: Google Earth Engine, as ee.ImageCollection("projects/nature-trace/assets/forest_typology/forest_typology_2020_v1_0_collection"); download from figshare; two Earth Engine viewer apps
  format: raster, five probability bands (0 to 250); the sixth class, other land, is 250 minus their sum
  cost: free
domains:
  - ecology
  - climate
  - food
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: CC BY 4.0 (Earth Engine catalogue)
  note: The probabilities are not calibrated, so a user picks a threshold to suit the purpose.
relations:
  - predicate: built_on
    target: engines/alphaearth-prithvi
provenance:
  origin: agent
  sources:
    - title: "Beyond tree cover: mapping the world's forest types (Google DeepMind blog, 22 October 2026)"
      url: 'https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/'
    - title: 'Forest Typology 2020 v1.0 (Earth Engine Data Catalog, Nature Trace publisher catalogue)'
      url: 'https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_forest_typology_forest_typology_2020_v1_0_collection'
    - title: 'Forest Typology 2020 v1 (figshare)'
      url: 'https://plus.figshare.com/articles/dataset/_i_Forest_Typology_2020_v1_i_/32288616'
  created: '2026-10-22'
  reviewed: '2026-10-22'
  reviewed_by: 'Claude, from the blog post and the catalogue page; the Scientific Data paper was behind a login and was not read'
  status: draft
---
Most global forest maps answer one question: are there trees here? ForTy asks what kind of forest it is. For every 10 metre square of land it gives a probability for six classes, following the FAO's definitions: primary forest with no visible sign of human disturbance; naturally regenerating forest, growing back after logging or fire; planted forest, managed over long cycles; plantation forest, the fast single-species tree farms; tree crops and agroforestry, such as oil palm, rubber, cocoa and fruit; and other land.

The map was made by Google DeepMind and Google Research with the World Resources Institute and IIASA. It builds on Google's earlier Natural Forests of the World 2020 map, which split natural forest from other tree cover. The model learned from about 1.7 million labelled locations, drawn from expert surveys, national and regional datasets, and reviews of hard places, and it reads [AlphaEarth](/engines/alphaearth-prithvi/) embeddings as a main input. Two trained experts checked each of more than 9,000 random sites; the post reports the right forest type 90% of the time and forest against non-forest 95% of the time.

The 2020 map is meant as a baseline for the EU deforestation regulation, which asks whether coffee, cocoa, palm oil and wood came from land cleared after 2020. The early yearly series for 2017 to 2025 shows changes the tree-cover maps miss, such as a natural forest logged and replanted as a plantation.

Some of these classes are about how land is used, not how it looks, and the catalogue is plain about where that bites. Old secondary forest can look exactly like primary forest. Shaded cocoa and coffee can pass for natural forest in some regions. Planted forest is the weakest class, with an F1 score of 58.2%. Freshly cut stands may show up as other land, and after a wildfire the use of the land is not always knowable. Scrub and open woodland are folded into other land, and in smallholder country one pixel may hold several things.

Because the output is a probability per class, a company checking a supply chain might set a strict threshold, while a researcher estimating total forest might use the whole range. A model of a watershed or a fire landscape could take it as the layer that says which trees are old and which were planted.

The data is under CC BY 4.0 in Earth Engine and on figshare. The paper is "Global forest typology at 10-meter resolution for forest and land-use monitoring" by Maxim Neumann and colleagues, in Scientific Data, with a preprint at doi.org/10.31223/X58R27.
