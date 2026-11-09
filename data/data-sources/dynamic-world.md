---
about:
  label: Dynamic World
  description: >-
    Near-real-time 10 m land cover from Google and the World Resources
    Institute, a probability for each of nine classes in every Sentinel-2
    scene since June 2015, in Earth Engine under CC BY 4.0.
  aliases:
    - GOOGLE/DYNAMICWORLD/V1
    - dynamicworld.app
  tags:
    - land cover
    - land use
    - Sentinel-2
    - Earth Engine
    - near real time
    - deep learning
    - global
  depiction: data-sources/dynamic-world.jpg
  depiction_credit: >-
    Sentinel-2 images and the Dynamic World classes for the same scenes in
    Brazil and Poland, April 2021, from figure 6 of Brown and colleagues,
    2022, Scientific Data, CC BY 4.0.
datasource:
  coverage: global, wherever Sentinel-2 images
  resolution: 10 m
  cadence: one prediction per Sentinel-2 L1C scene with 35% cloud or less, from 27 June 2015 to the present; about half the 2 to 5 day Sentinel-2 revisit
  access: Earth Engine ImageCollection GOOGLE/DYNAMICWORLD/V1 with a free Earth Engine account; the dynamicworld.app viewer; training and test tiles on Zenodo and PANGAEA
  format: Earth Engine images with nine probability bands and a label band
  homepage: 'https://dynamicworld.app/'
open:
  source: partly
  data: open
  api: 'yes'
  participation: unknown
  licence: CC BY 4.0, with a required attribution to Google, the National Geographic Society and the World Resources Institute
  note: >-
    The trained model and inference code are archived on Zenodo; the
    production pipeline runs inside Earth Engine.
domains:
  - places
  - ecology
relations:
  - predicate: answers
    target: questions/land-use-change
    note: what covers each 10 m of ground on any date since mid-2015, so change can be read between dates
  - predicate: needs
    target: platforms/google-earth-engine
    note: served and computed there
provenance:
  origin: agent
  sources:
    - title: 'Dynamic World V1 | Earth Engine Data Catalog'
      url: 'https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_DYNAMICWORLD_V1'
    - title: 'Dynamic World, Near real-time global 10 m land use land cover mapping (Brown et al., Scientific Data 9, 251, 2022)'
      url: 'https://www.nature.com/articles/s41597-022-01307-4'
    - title: Dynamic World - 10m global land cover dataset in Google Earth Engine
      url: 'https://dynamicworld.app/'
    - title: Crossref record for 10.1038/s41597-022-01307-4
      url: 'https://api.crossref.org/works/10.1038/s41597-022-01307-4'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Dynamic World is a land cover dataset at 10 m that is produced as the Sentinel-2 satellites image the Earth, rather than once a year.[^1,2] For each Sentinel-2 Level-1C scene with 35% cloud cover or less, a model gives every 10 m pixel a probability of being each of nine classes, and the outputs are added to a collection in [Google Earth Engine](/platforms/google-earth-engine/) that runs from 27 June 2015 to the present.[^1] It is produced by Google and the World Resources Institute, and its required attribution names the National Geographic Society as a partner.[^1] The paper describing it, by Christopher Brown, Steven Brumby, Brookie Guzder-Williams and fourteen colleagues, appeared in Scientific Data on 9 June 2022 under CC BY 4.0.[^2,4]

The nine classes are water, trees, grass, flooded vegetation, crops, shrub and scrub, built, bare, and snow and ice.[^1] Each is a band holding the estimated probability of complete coverage by that class, the nine sum to one, and a tenth band, label, holds the index of the most probable class.[^1] Clouds and their shadows are masked with the Sentinel-2 cloud probability product, the Cloud Displacement Index and a directional distance transform.[^1] Each Dynamic World image carries the name of the Sentinel-2 scene it came from, so the source image can be checked.[^1] Because of the cloud filter, images arrive at about half the 2 to 5 day Sentinel-2 revisit.[^2]

The class list was set after a review of the USGS Anderson system, the LUCAS land cover survey, MapBiomas and GlobeLand30.[^2] To train the model, the authors divided the world into three longitude bands and the 14 RESOLVE biomes and sampled Sentinel-2 tiles of 510 by 510 pixels from 2019.[^2] Twenty-five annotators with remote sensing experience labelled about 4,000 tiles, and 45 non-experts labelled about 20,000 more, drawing class boundaries over the image in Labelbox with a minimum unit of 50 by 50 m.[^2] The model is a fully convolutional neural network, almost a hundred times smaller than U-Net or DeepLab, applied to each image on its own with a small spatial window; it runs through Earth Engine and Cloud AI Platform.[^2]

Accuracy was measured on 409 tiles held out of training, each labelled by three experts and one non-expert.[^2] Where the experts agreed, the model's top class matched them 73.8% of the time, against 77.8% agreement between the non-experts and the experts.[^2] On the same tiles Dynamic World agreed with the experts better than every other land cover product compared except the regional LCMAP 2017, and 7.5 points better than the best global one, the Copernicus Global Land Service map at 100 m.[^2] It is strongest in temperate and tree-covered biomes and weakest in arid shrubland, where crops and shrub are confused; missed clouds come out as snow and ice and missed shadows as water.[^2] The catalogue advises thresholding the top probability to keep only confident pixels, and warns that classes defined partly by change over time, such as crops, can have a low probability in a single image.[^1] Its confusion matrices are not population estimates, the paper says, and users should assess their own derived maps.[^2]

The data are the Earth Engine ImageCollection GOOGLE/DYNAMICWORLD/V1, under CC BY 4.0 with the attribution above and the Copernicus Sentinel notice; a tutorial series covers composites, regional statistics and time series.[^1] The viewer at dynamicworld.app, built by Graphicacy for Google and WRI, shows the classes and worked changes such as the 2021 Caldor Fire turning trees to shrub and scrub within days.[^3] The 409 test tiles with expert labels are on Zenodo (10.5281/zenodo.4766508), the training set is in PANGAEA (10.1594/PANGAEA.933475), both are in Earth Engine as projects/wri-datalab/dynamic_world/v1/DW_LABELS, and the trained model with inference code is on Zenodo (10.5281/zenodo.5602141).[^2]

For someone modelling a place, Dynamic World gives what covers the ground on a chosen date or over a chosen span since mid-2015, at 10 m, anywhere, which serves as a roughness or imperviousness layer for a runoff or flood model and as the before and after of a change.[^1,2] The authors intend the probabilities to be composited and thresholded to a user's own definition rather than taken as a finished map.[^2]
