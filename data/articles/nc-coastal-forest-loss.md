---
about:
  label: Mapping coastal forest retreat using convolutional neural networks and different satellite imagery
  description: >-
    2026 PLOS One paper by Titilayo Tajudeen and colleagues at North Carolina
    State University that classifies Landsat and Sentinel-2 imagery with
    convolutional neural networks to track forest turning into ghost forest and
    marsh on the North Carolina coastal plain between 1985 and 2021.
  tags:
    - ghost forests
    - sea level rise
    - land cover
    - remote sensing
    - deep learning
    - coastal
article:
  url: 'https://doi.org/10.1371/journal.pone.0357346'
  published: '2026-09-15'
  publisher: PLOS One (Public Library of Science)
  authors:
    - Titilayo T. Tajudeen
    - Marcelo Ardon
    - Mirela Tulbure
    - Katherine L. Martin
domains:
  - ecology
  - water
provenance:
  origin: agent
  sources:
    - title: Mapping coastal forest retreat using convolutional neural networks and different satellite imagery
      url: 'https://doi.org/10.1371/journal.pone.0357346'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the abstract, study area, methods, data availability and conclusion of the paper'
  status: draft
---
A research article in PLOS One (volume 21, issue 9, published 15 September 2026) by Titilayo T. Tajudeen, Marcelo Ardon, Mirela Tulbure and Katherine L. Martin of the Center for Geospatial Analytics at North Carolina State University. It asks how coastal forests that depend on fresh water are turning into ghost forests, shrub and marsh as sea level rises and salt water moves inland, and what drives the change.

The study area is 644,892 hectares of the Atlantic Coastal Plain in North Carolina, between the Albemarle Sound and the Pamlico Sound, a region the authors describe as a sea level rise hotspot. The authors first compared convolutional neural networks trained on Landsat 8 and Sentinel-2 surface reflectance for land cover classification, adding multispectral, bi-seasonal, topographic and phenological indices. Phenology and topography made ghost forests easier to separate from other vegetation. Sentinel-2 scored better (F1 96.3) than Landsat (F1 93.4) for 2021, the one year both were available, but Landsat's long record let them map change from 1985 to 2021.

They find that 21 percent of the forest was lost over those 37 years and that the rate is rising: 23,876 hectares became marsh, ghost forest or shrub between 2010 and 2021, against 16,968 hectares between 1985 and 2010. Distance to channels, salinity and the accelerating rate of relative sea level rise were the main drivers, with low elevation and shallow slope also playing a part.

The article is open access under a Creative Commons Attribution licence. The code is on GitHub and the data are in the Dryad repository, both linked from the paper's data availability statement; the imagery was drawn from the Google Earth Engine catalog. For this wiki it is a worked example of the data and engine layers of a place model: public satellite archives classified by a trained model to give a time series of how a landscape is changing.
