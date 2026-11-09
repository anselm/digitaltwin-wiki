---
about:
  label: Google Open Buildings
  description: >-
    1.8 billion building footprints from satellite imagery across Africa,
    South and South-East Asia, Latin America and the Caribbean, with a
    confidence score each; CC BY 4.0 or ODbL.
  aliases:
    - Open Buildings
    - Open Buildings V3
    - Open Buildings 2.5D Temporal Dataset
  tags:
    - buildings
    - footprints
    - building heights
    - settlements
    - exposure
    - satellite
    - Earth Engine
datasource:
  coverage: 58 million km² across Africa, South Asia, South-East Asia, Latin America and the Caribbean; a country list on the site
  resolution: individual footprint polygons from 50 cm imagery; the temporal rasters have an effective resolution of about 4 m
  cadence: v1 April 2021, v2 August 2022, v3 May 2023; the temporal set is annual, 2016 to 2023
  access: CSV files from Google Cloud Storage without an account, a Colab notebook for one country or region, HDX country extracts, and Earth Engine collections
  format: CSV with WKT polygons, sharded by S2 level-4 cell; Earth Engine FeatureCollection and ImageCollection
  homepage: 'https://sites.research.google/open-buildings/'
open:
  source: unknown
  data: open
  api: 'no'
  participation: unknown
  licence: CC BY 4.0 or ODbL 1.0, at the user's choice
domains:
  - places
relations:
  - predicate: answers
    target: questions/housing-and-land-use
    note: where the buildings are, and how many, in regions where no cadastre is open
  - predicate: answers
    target: questions/flooding
    note: the buildings a modelled flood would reach, with heights from the temporal set
  - predicate: needs
    target: platforms/google-earth-engine
    note: served there as a FeatureCollection and, for the temporal set, an ImageCollection
provenance:
  origin: agent
  sources:
    - title: Open Buildings - Google Research
      url: 'https://sites.research.google/open-buildings/'
    - title: 'Open Buildings V3 Polygons | Earth Engine Data Catalog'
      url: 'https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings_v3_polygons'
    - title: 'Continental-Scale Building Detection from High Resolution Satellite Imagery (Sirko et al., arXiv 2107.12283, 2021)'
      url: 'https://arxiv.org/abs/2107.12283'
    - title: Open Buildings 2.5D Temporal Dataset - Google Research
      url: 'https://sites.research.google/gr/open-buildings/temporal/'
    - title: 'Open Buildings Temporal V1 | Earth Engine Data Catalog'
      url: 'https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings-temporal_v1'
    - title: 'Attribution and Licensing | Overture Documentation'
      url: 'https://docs.overturemaps.org/attribution/'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the temporal dataset's technical report
    (arXiv 2310.11622) was not read, and Microsoft's footprints were not
    compared beyond Overture's attribution page
  status: draft
---
Open Buildings is a dataset of building outlines drawn by a deep learning model from high-resolution satellite imagery, published by Google Research from a project based in its Ghana office.[^1] The current version, v3, holds 1.8 billion building detections across an inference area of 58 million km² covering Africa, South Asia, South-East Asia, Latin America and the Caribbean.[^1] For each building there is the polygon of its footprint, a confidence score, and a Plus Code for its centre; there is no building type, address or any other attribute.[^1] The buildings on Google Maps come partly from the same model, but the two sets of footprints are not the same.[^1]

The method is described for the first version in a 2021 technical report by Wojciech Sirko and nine colleagues.[^3] They trained a U-Net model on 50 cm imagery, using 100,000 satellite images across Africa with 1.75 million hand-labelled buildings plus further data for pre-training and self-training, and used it to make the first release of 516 million footprints for the continent.[^3] Versions since then have improved the model.[^1] v1 was run in April 2021 on 19.4 million km² of Africa; v2 in August 2022 on 39.1 million km², adding South and South-East Asia; v3 in May 2023 on 58 million km², adding Latin America and the Caribbean.[^1] A country list on the site includes Nepal, India and Bangladesh.[^1] Earlier versions stay in the cloud bucket under their own version names.[^1]

The dataset keeps only detections with a confidence of 0.65 or more, and the choice of threshold above that trades precision against recall.[^1] Because quality varies by place, a separate CSV gives, for each S2 level-4 cell, the confidence threshold that yields an estimated 80%, 85% or 90% precision there, and the number of buildings above each.[^1] Google recommends the 90% threshold for anyone adding buildings to OpenStreetMap.[^1] Known weaknesses are rocks and vegetation taken for buildings, settlements of contiguous buildings without clear divisions, buildings only a few pixels wide, rural and desert buildings of natural materials that blend into the ground, and high-rise roofs offset from their bases by the viewing angle.[^1] Freshness follows the source imagery, which in some places was several years old or missing, and the imagery itself is not part of the dataset.[^1]

The data come as CSV files, one per S2 level-4 cell, with latitude, longitude, area in square metres, confidence, the polygon as WKT, and the Plus Code; the polygons total 178 GB and a points version 48 GB, both copied with gsutil from gs://open-buildings-data/v3/.[^1] A Colab notebook cuts out one country or region, and the UN's Humanitarian Data Exchange carries curated extracts for 20 countries.[^1] In [Google Earth Engine](/platforms/google-earth-engine/) the polygons are the FeatureCollection GOOGLE/Research/open-buildings/v3/polygons.[^2] The data are released under both CC BY 4.0 and the Open Database License 1.0, and the user picks either; the second was added for the OpenStreetMap community, whose data carry the ODbL.[^1]

A companion set, the Open Buildings 2.5D Temporal Dataset, gives annual rasters for 2016 to 2023 of building presence, fractional building count and building height over the same 58 million km², made from stacks of 32 Sentinel-2 images centred on 30 June each year.[^4] Its effective resolution is about 4 m, though the files are written at 50 cm.[^4,5] Height error averages 1.5 m, but that was measured only in North America, Europe and Japan, where the height training data came from; heights are capped at 100 m and should be masked by the presence raster.[^4] Confidence values are uncalibrated, detections jitter between years, counts over an area can be unstable, and tile edges can show.[^4] It is the Earth Engine ImageCollection GOOGLE/Research/open-buildings-temporal/v1, also downloadable from Google Cloud Storage, under the same two licences.[^4,5]

[Overture Maps](/data-sources/overture-maps/) folds Open Buildings, under CC BY 4.0, into its buildings theme alongside OpenStreetMap and Microsoft's Global ML Building Footprints, which Microsoft licenses under the ODbL.[^6] For someone modelling a place in the covered regions, Open Buildings gives the count, size and position of buildings where no cadastre is open, for example the structures a modelled flood would reach, with the temporal set adding how settlement has grown and roughly how tall it is.[^1,4] The confidence threshold should be chosen per area from the thresholds file rather than left at the floor.[^1]
