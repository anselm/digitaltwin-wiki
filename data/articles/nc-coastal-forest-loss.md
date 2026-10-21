---
about:
  label: Mapping coastal forest retreat using convolutional neural networks and different satellite imagery
  description: >-
    A 2026 PLOS One paper that classifies Landsat and Sentinel-2 imagery with
    convolutional neural networks to map forest loss to ghost forest and marsh
    on the North Carolina coastal plain from 1985 to 2021.
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
As sea level rises and salt water moves inland, coastal forests that depend on fresh water are turning into ghost forests (stands of dead trees), shrub and marsh. This paper asks how this is happening on the North Carolina coast and what drives the change. It appeared in PLOS One (volume 21, issue 9) on 15 September 2026. The authors are Titilayo T. Tajudeen, Marcelo Ardon, Mirela Tulbure and Katherine L. Martin of the Center for Geospatial Analytics at North Carolina State University.

The study area is 644,892 hectares of the Atlantic Coastal Plain between the Albemarle Sound and the Pamlico Sound. The authors call it a sea level rise hotspot.

They first compared convolutional neural networks, a kind of image-recognition model, for classifying land cover. One was trained on Landsat 8 surface reflectance and one on Sentinel-2. Both had extra inputs: multispectral, bi-seasonal, topographic and phenological indices. Phenology, the seasonal cycle of leaf-out and die-back, and topography made ghost forests easier to tell apart from other vegetation. For 2021, the one year both satellites covered, Sentinel-2 scored better than Landsat on F1, a combined accuracy measure: 96.3 against 93.4. Landsat's longer record let them map change from 1985 to 2021.

Over those 37 years 21 percent of the forest was lost, and the rate is rising. Between 2010 and 2021, 23,876 hectares became marsh, ghost forest or shrub. Between 1985 and 2010 the figure was 16,968 hectares. The main drivers were distance to channels, salinity and the accelerating rate of relative sea level rise. Low elevation and shallow slope also played a part.

The article is open access under a Creative Commons Attribution licence. The code is on GitHub and the data are in the Dryad repository, both linked from the paper's data availability statement. The imagery came from the Google Earth Engine catalog.
