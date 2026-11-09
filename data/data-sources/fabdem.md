---
about:
  label: FABDEM
  description: >-
    Global 30 m elevation map from the University of Bristol and Fathom
    that strips forests and buildings from the Copernicus DEM, giving bare
    ground for flood models; free for non-commercial use.
  aliases:
    - Forest And Buildings removed Copernicus DEM
    - FABDEM V1-2
  tags:
    - elevation
    - terrain
    - DEM
    - DTM
    - bare earth
    - flood
    - raster
  depiction: data-sources/fabdem.jpg
  depiction_credit: >-
    Six elevation models of the Miami area, with the US National Elevation
    Dataset as the reference, from figure 4 of Hawker and colleagues, 2022,
    Environmental Research Letters, CC BY 4.0.
datasource:
  coverage: land between 60° S and 80° N; Fathom's page puts it as the globe excluding Greenland and Antarctica
  resolution: 1 arc-second (about 30 m at the equator)
  cadence: V1-0 published with the paper in 2022; V1-2 published 18 January 2023; no regular updates
  access: zip files per 10° by 10° block from the University of Bristol data repository, no account needed; 296.7 GiB in all
  format: Cloud Optimized GeoTIFF in 1° tiles (V1-2); a GeoJSON of tile footprints
  homepage: 'https://data.bris.ac.uk/data/dataset/s5hqmjcdj8yo2ibzi9b4ew3sn'
open:
  source: unknown
  data: partly
  api: 'no'
  participation: unknown
  licence: CC BY-NC-SA 4.0; commercial use through Fathom
  note: >-
    The dataset page states CC BY-NC-SA 4.0 and its license.txt is that
    licence, while the page's licence field reads Non-Commercial Government
    Licence; the page does not reconcile the two. Both are non-commercial.
domains:
  - places
  - water
relations:
  - predicate: built_on
    target: data-sources/copernicus-dem
    note: the Copernicus GLO-30 surface model with forests and buildings removed, V1-2 from the 2021_1 release
  - predicate: answers
    target: questions/flooding
    note: bare-earth terrain at 30 m for a flood model where no lidar exists
provenance:
  origin: agent
  sources:
    - title: 'A 30 m global map of elevation with forests and buildings removed (Hawker et al., Environmental Research Letters 17, 024016, 2022)'
      url: 'https://iopscience.iop.org/article/10.1088/1748-9326/ac4d4f'
    - title: FABDEM V1-2 - Datasets - data.bris
      url: 'https://data.bris.ac.uk/data/dataset/s5hqmjcdj8yo2ibzi9b4ew3sn'
    - title: FABDEM-V1-2 Changelog (PDF)
      url: 'https://data.bris.ac.uk/datasets/s5hqmjcdj8yo2ibzi9b4ew3sn/FABDEM-V1-2%20Changelog.pdf'
    - title: license.txt (FABDEM V1-2)
      url: 'https://data.bris.ac.uk/datasets/s5hqmjcdj8yo2ibzi9b4ew3sn/license.txt'
    - title: 'FABDEM+ - Globally Consistent & Accurate DEM | Fathom'
      url: 'https://www.fathom.global/product/fabdem/'
    - title: Crossref record for 10.1088/1748-9326/ac4d4f
      url: 'https://api.crossref.org/works/10.1088/1748-9326/ac4d4f'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the paper's supplementary tables, which
    list the reference lidar countries and predictor datasets, were not read
  status: draft
---
FABDEM, the Forest And Buildings removed Copernicus DEM, is a global elevation map that takes the [Copernicus GLO-30](/data-sources/copernicus-dem/) model and removes the heights of buildings and trees from it.[^2] The Copernicus DEM is a surface model: its heights include roofs and canopy.[^1] FABDEM estimates the bare ground beneath them, at 1 arc second grid spacing, about 30 m, between 60° S and 80° N.[^1] It was made by Laurence Hawker and six colleagues at the University of Bristol and the flood risk company Fathom, and described in Environmental Research Letters on 3 February 2022.[^1,6] The paper is open access under CC BY 4.0.[^1]

The correction uses random forest regression, chosen after trials of generalised linear and additive models.[^1] Two separate models predict the difference between the Copernicus height and the true ground height, one for forests and one for built-up areas, and the predicted difference is subtracted.[^1] The forest model's inputs are a 2019 global canopy height map built from GEDI lidar and Landsat, and north of 52° N the canopy heights measured by ICESat-2.[^1] The building model's inputs are population density from WorldPop, travel times, night-time lights, the World Settlement Footprint, and built-up area per capita, GDP and average greenness from the GHS Urban Centre Database; OpenStreetMap buildings were left out because their coverage is not consistent across the world.[^1] The models were trained on lidar terrain data with better than 1 m accuracy from 12 countries across a range of climates and city types.[^1] Post-processing merges the two corrected layers, fills unrealistic pits and smooths the result.[^1]

In the paper's own evaluation, mean absolute error in built-up areas fell from 1.61 m in the Copernicus DEM to 1.12 m in FABDEM, in forests from 5.15 m to 2.88 m, and in boreal forests from 3.49 m to 2.55 m, while the mean error dropped from 0.86 m and 2.93 m to about zero.[^1] This evaluation reused the training lidar, as the authors note; on a held-out quarter of the samples, before post-processing, the urban error was 1.35 m against 1.72 m uncorrected, and the forest error south of 52° N was 6.55 m against 7.2 m.[^1] Against ICESat-2 ground heights sampled worldwide, the gain was largest in the densest places, where the median error was 0.19 m against 1.90 m in the Copernicus DEM.[^1] Biases remain in steep terrain, and some building artifacts survive along the Miami coast in the paper's comparison.[^1]

Two versions exist. V1-0 was published with the paper.[^1,2] V1-2, published by the University of Bristol on 18 January 2023 with Neal and Hawker as creators, rebuilt the map on the 2021_1 release of the Copernicus DEM, aligned the high-latitude tiles, where the Copernicus grid spacing changes above 50°, with the rest, and changed the files to Cloud Optimized GeoTIFF with DEFLATE compression, about 40% smaller.[^2,3] An unreleased V1-1 fixed discontinuities at tile edges in large forests such as the Amazon and Congo, where valleys had been filled by about 20 m because the tile buffer used uncorrected heights.[^3] The data come as zip files per 10° by 10° block, named like N00E000-N10E010_FABDEM_V1-2.zip, 296.7 GiB in all, with a GeoJSON of tile footprints and a changelog beside them.[^2]

The dataset page states that FABDEM is under CC BY-NC-SA 4.0 and directs commercial queries to fabdem@fathom.global; its license.txt is the CC BY-NC-SA 4.0 text, while the page's licence field names the Non-Commercial Government Licence.[^2,4] The paper's data statement says the data are freely available for non-commercial use.[^1] Fathom sells FABDEM+, which blends FABDEM with lidar from more than 30 countries covering over 10 million km², at up to 1/3 arc second where lidar exists, through an API and a portal; its page says FABDEM covers the globe except Greenland and Antarctica, and that Fathom released a successor, FathomDEM+, in 2026.[^5]

The paper's reason for the work is flood simulation, where terrain determines where water goes, and it finds that FABDEM resolves floodplain features that the SRTM-based global DEMs do not.[^1] Where a place has no lidar, FABDEM is a bare-earth terrain for a two-dimensional flood model such as [HEC-RAS](/engines/hec-ras/); the Copernicus DEM remains the choice when the tops of buildings and trees are wanted. Paid products need Fathom's agreement under the non-commercial licence.[^2]
