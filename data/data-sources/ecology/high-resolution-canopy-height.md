---
about:
  label: High Resolution Canopy Height Maps
  description: >-
    Tree height maps from Meta and the World Resources Institute, estimated
    from half-metre satellite imagery with an open model; global and regional
    maps are free to download as GeoTIFF.
  tags:
    - forests
    - canopy height
    - trees
    - carbon
    - satellite
    - lidar
datasource:
  homepage: 'https://registry.opendata.aws/dataforgood-fb-forests/'
  coverage: global, with separate maps for California, the state of São Paulo and sub-Saharan Africa
  resolution: model run on 0.5 m RGB imagery; the resolution of each published map is not stated on the registry page
  cadence: no update schedule (the registry lists it as TBD); the paper's model was trained on Maxar imagery from 2017 to 2020
  access: public Amazon S3 bucket, no AWS account needed; a viewer on Google Earth Engine from Meta and WRI
  format: GeoTIFF rasters, with GeoJSON files giving the observation date of the imagery
  cost: free
domains:
  - ecology
  - climate
  - places
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: CC BY 4.0 for the maps; Apache 2.0 for the code and model weights
  note: The released code leaves out the step that corrects heights against GEDI spaceborne lidar, which the paper used. Source imagery is credited to Maxar.
provenance:
  origin: agent
  sources:
    - title: 'High Resolution Canopy Height Maps by WRI and Meta (Registry of Open Data on AWS)'
      url: 'https://registry.opendata.aws/dataforgood-fb-forests/'
    - title: 'facebookresearch/HighResCanopyHeight (README)'
      url: 'https://github.com/facebookresearch/HighResCanopyHeight'
    - title: 'Every tree counts: Large-scale mapping of canopy height at the resolution of individual trees'
      url: 'https://research.facebook.com/blog/2023/4/every-tree-counts-large-scale-mapping-of-canopy-height-at-the-resolution-of-individual-trees/'
    - title: 'Very high resolution canopy height maps from RGB imagery using self-supervised vision transformer and convolutional decoder trained on Aerial Lidar (arXiv 2304.07213)'
      url: 'https://arxiv.org/abs/2304.07213'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A canopy height map gives, for each patch of ground, how tall the trees on it stand. Measuring it directly takes lidar, a laser scanner flown on a plane, and good aerial lidar does not exist for most of the world.[^3] Meta's researchers, working with the World Resources Institute (WRI), trained a model to estimate tree height from ordinary colour satellite photographs at half a metre per pixel, sharp enough to pick out single trees.[^2,3]

The model learned in two stages. It first studied about 18 million satellite images with no labels at all, using Meta's DINOv2 method on pictures chosen to show mostly vegetation.[^2] It was then taught height from aerial lidar covering a few thousand square kilometres of US forest.[^2] The satellite images were Maxar's, from 2017 to 2020.[^4] The paper, published in Remote Sensing of Environment in 2024, reports an average error of 2.8 metres.[^4] The model also works on photographs from planes or drones at the same resolution.[^3]

The first maps covered California and the state of São Paulo in Brazil, released in April 2023.[^3] A global map and one for sub-Saharan Africa have followed.[^1] All of them sit in a public Amazon S3 bucket as GeoTIFF files, each with a GeoJSON file giving the date of the imagery underneath, and Meta and WRI run a viewer for them on Google Earth Engine.[^1,2]

Tree height is a step towards how much carbon a forest holds, and a map at the scale of single trees can follow small woodlots and trees on farms as well as whole forests.[^3] A model of a watershed, a city's heat or a fire landscape could take it as its canopy layer. Each height is an estimate from a photograph taken on a particular day, and the date files say which.[^1]

The maps are under CC BY 4.0, free for any use with credit to Meta and WRI and to Maxar for the imagery.[^1] The inference code and the trained weights are under Apache 2.0 on GitHub; the correction against GEDI, a space-borne lidar, that the paper applied to its maps is not part of that release.[^2,4]
