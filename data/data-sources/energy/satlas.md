---
about:
  label: Satlas
  description: >-
    Open global maps from AI2 made by running deep learning models over
    Sentinel-2 satellite imagery: offshore wind turbines and platforms,
    onshore wind turbines, solar farms and tree cover.
  tags:
    - satellite
    - sentinel
    - wind turbines
    - solar farms
    - tree cover
    - offshore
datasource:
  homepage: 'https://satlas.allen.ai/'
  coverage: global
  resolution: 10 m per pixel (Sentinel-2)
  cadence: marine infrastructure snapshots monthly from 2016 to January 2024, then every three months, the latest for July 2026; renewable energy snapshots end at January 2024; tree cover for January and July from 2016 to January 2023
  access: free download over HTTPS from a public Google Cloud bucket, with an index file listing every snapshot; interactive map at satlas.allen.ai
  format: GeoJSON, KML and shapefile points and polygons; GeoTIFF tiles for tree cover
  cost: free
domains:
  - energy
  - ecology
  - places
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: ODC-BY for the data products, the SatlasPretrain labels and the model weights; Apache-2.0 for the code
  note: The Hugging Face repository allenai/satlas-pretrain is tagged apache-2.0 in its metadata, but its own card releases the dataset and the weights under ODC-BY; the Apache licence covers the code in the GitHub repository.
provenance:
  origin: agent
  sources:
    - title: 'allenai/satlas (README)'
      url: 'https://github.com/allenai/satlas'
    - title: 'Geospatial Data (GeospatialDataProducts.md)'
      url: 'https://github.com/allenai/satlas/blob/main/GeospatialDataProducts.md'
    - title: 'ODC Attribution License (DataLicense)'
      url: 'https://github.com/allenai/satlas/blob/main/DataLicense'
    - title: 'Apache License 2.0 (LICENSE)'
      url: 'https://github.com/allenai/satlas/blob/main/LICENSE'
    - title: 'SatlasPretrain: A Large-Scale Dataset for Remote Sensing Image Understanding (SatlasPretrain.md)'
      url: 'https://github.com/allenai/satlas/blob/main/SatlasPretrain.md'
    - title: 'OngoingProjects.md'
      url: 'https://github.com/allenai/satlas/blob/main/OngoingProjects.md'
    - title: 'allenai/satlas-pretrain (Hugging Face)'
      url: 'https://huggingface.co/allenai/satlas-pretrain'
    - title: 'Marine infrastructure index'
      url: 'https://storage.googleapis.com/satlas-explorer-public/outputs/marine/index.txt'
    - title: 'Renewable energy infrastructure index'
      url: 'https://storage.googleapis.com/satlas-explorer-public/outputs/renewable/index.txt'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Satlas is a project of the Satlas team at AI2.[^6] It takes Sentinel-2 images, the free 10 metre pictures the European Space Agency takes of most land every week, and runs trained models over them to find particular things on the ground.[^1] The results are published as maps anyone can download.[^1,2]

There are three kinds of map. Offshore wind turbines and offshore platforms are points in dated snapshots, tagged by kind.[^2] Onshore wind turbines are points and solar farms are outlines.[^2] Tree cover is a 10 metre raster that grades each pixel in five steps of cover, the lowest meaning no trees.[^2] A combined file for the turbines and platforms gives each one a start and an end month, so a reader can see when something was built or taken down.[^2] The team publishes precision and recall for each model by continent in a validation report.[^1]

Files come as GeoJSON, KML or shapefile, and tree cover as GeoTIFF tiles, all from a public bucket with no account.[^2] An index file lists every snapshot with its date, so a script can fetch only what has changed.[^2,8] On the day this entry was written the offshore series ran to July 2026, while the onshore wind and solar series stopped at January 2024 and tree cover at January 2023.[^2,8,9] A model of a coast or an energy system could use the offshore points to count turbines and platforms through time; a city or watershed model could use the tree cover classes as a coarse canopy layer.

The models were first trained on SatlasPretrain.[^1] It holds 302 million labels in 137 categories, paired with satellite images from Sentinel-1, Sentinel-2 and Landsat and with US aerial photographs.[^5] It was shown at the ICCV computer vision conference in 2023.[^5,7] Models pretrained on it can be downloaded and fine-tuned to look for other things, and the fine-tuning labels and weights for the four Satlas maps are published as well.[^1,5]

The maps, the new SatlasPretrain labels and the model weights are under ODC-BY.[^2,5,7] That open data licence allows any use, commercial included, with attribution.[^3] The code is under Apache 2.0.[^4] The Hugging Face copy of SatlasPretrain carries an apache-2.0 tag in its metadata, but its own page puts the dataset and the weights under ODC-BY, as the GitHub pages do.[^5,7] Imagery and labels taken from other sources, such as OpenStreetMap under ODbL, keep their original licences.[^5]
