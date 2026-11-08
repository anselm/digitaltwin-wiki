---
about:
  label: Irrecoverable carbon
  depiction: data-sources/irrecoverable-carbon.jpg
  depiction_credit: 'Irrecoverable carbon in Earth''s ecosystems, Figure 1 of Noon and colleagues, Nature Sustainability, 2021. CC BY 4.0.'
  description: >-
    Global 300 m maps, led by Conservation International, of the ecosystem
    carbon that land-use change could release and that would not regrow by
    2050, for 2010 to 2024; free on Zenodo under CC BY-NC 4.0.
  tags:
    - carbon
    - land use
    - peatlands
    - mangroves
    - forests
    - protected areas
    - global
datasource:
  coverage: global; terrestrial and coastal ecosystems
  resolution: about 300 m
  cadence: 'mapped for 2010 and 2018 in 2021; extended to 2022, 2023 and 2024 in 2025'
  access: free download from Zenodo, no login; web map on the Resilience Atlas
  format: 'rasters of carbon density in Mg C per hectare, WGS 1984, float, zipped; 1.5 to 4.8 GB per layer'
  homepage: 'https://zenodo.org/records/17645053'
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: 'CC BY-NC 4.0 for the data; the 2021 paper is CC BY 4.0'
  note: the first Zenodo version carries the Google Earth Engine code; two inputs, the IPLC lands map and planted-tree data for China and Papua New Guinea, are available only on request from their providers
domains:
  - ecology
  - climate
relations:
  - predicate: made_by
    target: organizations/conservation-international
  - predicate: answers
    target: questions/land-use-change
    note: the vulnerable layer is what a conversion releases; the irrecoverable layer is what no restoration recovers by 2050
provenance:
  origin: agent
  sources:
    - title: 'Mapping the irrecoverable carbon in Earth''s ecosystems (Noon and colleagues, Nature Sustainability 5, 37-46, 18 November 2021)'
      url: 'https://doi.org/10.1038/s41893-021-00803-6'
    - title: 'Mapping the irrecoverable carbon in Earth''s ecosystems, Zenodo record 17645053'
      url: 'https://zenodo.org/records/17645053'
    - title: 'Irrecoverable Carbon Data Update, 2025 (PDF in the Zenodo record)'
      url: 'https://zenodo.org/records/17645053/files/21_Irrecoverable%20Carbon%20Data%20Update%20Summary_2025.pdf'
    - title: 'Irrecoverable Carbon, Conservation International'
      url: 'https://www.conservation.org/irrecoverable-carbon'
    - title: 'Protecting irrecoverable carbon in Earth''s ecosystems (Goldstein and colleagues, Nature Climate Change 10, 287-295, 2020)'
      url: 'https://doi.org/10.1038/s41558-020-0738-8'
    - title: 'Mapping the irrecoverable carbon in Earth''s ecosystems, Zenodo record 4091029 (version 1.0, 13 September 2021)'
      url: 'https://zenodo.org/records/4091029'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed; the three DOIs checked on Crossref; the Zenodo records read through the API; the project page URL given as conservation.org/projects/irrecoverable-carbon redirects to the one listed'
  status: draft
---
Irrecoverable carbon is carbon held in nature that human activity could release and that, once lost, could not be restored by 2050, the year by which the world needs net-zero emissions.[^4] The map arrives at it by three tests in turn. Manageable carbon is the carbon in terrestrial and coastal ecosystems that a land-use conversion could reach. Vulnerable carbon is the part a typical conversion would release. For grasslands, wetlands and tropical forests that conversion is clearing for agriculture; for boreal and temperate forests it is forestry; for coasts it is aquaculture or building. Irrecoverable carbon is the part of the vulnerable carbon that restoring the original cover could not put back within 30 years.[^1,2] The second test describes what a conversion would release, not how likely one is.[^1]

Goldstein and colleagues set out the concept in Nature Climate Change in 2020 from ecosystem-level estimates.[^1,5] Noon and colleagues mapped it worldwide at 300 m in Nature Sustainability on 18 November 2021, in a team led by Conservation International.[^1,4] They found 139.1 Gt remaining. Of that, 23.0% was inside protected areas and 33.6% on lands managed by Indigenous peoples and local communities, and half of it lay on 3.3% of the land. Since 2010, agriculture, logging and wildfire had released at least 4.0 Gt.[^1] Conservation International's page rounds these to 139 billion tonnes, 24% and 33%. The same page gives two figures for how concentrated the carbon is: its headline panel puts 75% on 7.5% of the land, and its text on areas also rich in species puts 75% on less than 14%.[^4] Most of it is in mangroves, peatlands, old-growth forests and marshes. Mangroves have the highest density, over 210 tonnes per hectare on average.[^4]

## What went into it

Soil carbon comes from SoilGrids 250 m v2.0, to 30 cm depth in forests and grasslands and to 100 cm in wetlands and on coasts, with 30 m mangrove soil carbon from Sanderman and colleagues and default values for seagrass and salt marsh.[^1] Ecosystem extents come from ESA land cover classes, with plantations and tree crops removed using WRI's Spatial Database of Planted Trees.[^1] Recent loss was found by intersecting the map with the Hansen tree cover loss series for 2011 to 2019, which covers 83% of the stock.[^1] Risk is assessed by ecoregion, not by pixel: land-use pressure from the Human Footprint Index, and climate risk from a Climate Stability Index computed from WorldClim v2 and CMIP6 projections for 2040 to 2060.[^1]

## The 2025 update

In 2025 the team extended the map through 2024. The ESA Climate Change Initiative land cover series shows where natural land has turned to urban, agricultural or other use, and the carbon on that land is counted as committed loss. The World Database on Protected Areas shows new protection between January 2023 and October 2025.[^3] The update also redrew coastal ecosystems from Global Mangrove Watch 2022 and the UNEP-WCMC 2022 seagrass and salt marsh data. It fixed a code error that had overstated the carbon in Asian boreal grasslands and shrublands, so the corrected 2018 total is 135.3 Gt, not 139.1.[^3] Against that figure, 7.4 Gt (5.4%) was lost between 2018 and 2024, leaving 128.0 Gt. Loss was 2.1% inside protected areas, 4.4% on IPLC lands and 7.2% outside protection. Russia lost the most, 1.43 Gt, then Brazil at 0.83 Gt.[^3] Newly conserved areas since 2023 added 376 Mt, under 0.3% of the total.[^3] By definition the stock can only fall.[^3]

## Getting the data

The current Zenodo record was uploaded in December 2025 under the paper's concept DOI 10.5281/zenodo.4091028.[^2] It holds:[^2]

- irrecoverable carbon totals for 2010, 2018, 2022, 2023 and 2024
- vulnerable and manageable carbon totals for 2010, 2018 and 2024
- uncertainty layers for irrecoverable, recoverable, vulnerable and manageable carbon
- ecosystem and peat extent layers
- two ArcGIS layer files that refer to .tif rasters, a spreadsheet of asset links, and the update summary

Values are carbon density in Mg per hectare at about 300 m, WGS 1984, float. Each zipped layer is 1.5 to 4.8 GB. The licence is CC BY-NC 4.0.[^2] Version 1.0 of 13 September 2021 held the 2010 and 2018 maps, a README and the Google Earth Engine code, and the paper points to it for all code and outputs.[^1,6] The maps can be viewed on Conservation International's Resilience Atlas, and the project page links a Shiny app for overlap with biodiversity by country or custom boundary and a 19 MB report.[^2,4]

## For a model of a place

Cut the three layers to the boundary. Manageable carbon says how much is at stake, vulnerable carbon says what each hectare would release on conversion, and irrecoverable carbon says which part of that no restoration would recover within a 2050 horizon. A land-use scenario can be charged per hectare converted with the vulnerable figure, and the irrecoverable share is the part that planting elsewhere does not offset in time. Four limits apply.[^1,2]

- The pixels are 300 m, so a single parcel is a handful of cells.
- The layers are snapshots of 2018 or 2024 land cover.
- The likelihood of conversion is not in the data. The authors say it would need assessing separately.
- Climate risk exists only at ecoregion level.
