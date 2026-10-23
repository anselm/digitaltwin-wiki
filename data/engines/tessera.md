---
about:
  label: TESSERA
  description: >-
    Open Earth observation foundation model from the University of Cambridge:
    one 128-number summary of a year of Sentinel-1 and Sentinel-2 imagery for
    every 10 metre square of land, with the embeddings free to download.
  tags:
    - satellite
    - foundation model
    - embeddings
    - sentinel
    - land cover
tool:
  form: open model and open embeddings dataset
  group: Earth observation and AI
  homepage: 'https://geotessera.org/'
  licence: MIT (model and code); CC0 (embeddings)
  cost: free
domains:
  - places
  - ecology
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: MIT; CC0 for embeddings
  note: Version 2 embeddings are given out on request while the team builds up compute for them.
relations:
  - predicate: alternative_to
    target: engines/alphaearth-prithvi
provenance:
  origin: agent
  sources:
    - title: 'TESSERA: A pixel-wise earth observation foundation model'
      url: 'https://geotessera.org/'
    - title: 'TESSERA: Temporal Embeddings of Surface Spectra for Earth Representation and Analysis (arXiv 2506.20380)'
      url: 'https://arxiv.org/abs/2506.20380'
    - title: 'ucam-eo/geotessera (README)'
      url: 'https://github.com/ucam-eo/geotessera'
    - title: 'ucam-eo/tessera'
      url: 'https://github.com/ucam-eo/tessera'
    - title: AlphaEarth Foundations helps map our planet in unprecedented detail
      url: 'https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A colour photograph stores three numbers per pixel. TESSERA stores 128 per 10 metre square of ground, and those numbers describe how the square behaved over a whole year.[^1] The input is dozens of passes a year of Sentinel-2, which sees colour and infrared, and Sentinel-1, a radar that sees through cloud.[^1,2] A field that greens in spring and turns gold in autumn ends up with a different embedding from an evergreen forest, even when a single summer image of the two looks alike.[^1]

The name stands for Temporal Embeddings of Surface Spectra for Earth Representation and Analysis.[^1] The team is in the Department of Computer Science and Technology and the Department of Plant Sciences at Cambridge. Srinivasan Keshav, David Coomes, Anil Madhavapeddy and Sadiq Jaffer lead it, and Zhengpeng Feng is the lead researcher.[^1] The first paper appeared on arXiv in June 2025.[^2]

Training needs no human labels. The encoder compares random samples of the same pixel taken at different times of year and learns what stays constant.[^1,2] Labels come in later and in small numbers: a user trains a small classifier on the embeddings to map crops, land cover, canopy height or solar panels.[^1,2] The team reports that over 90 per cent of final accuracy can be reached with under 1 per cent of the labelled data, and that this step runs on an ordinary CPU.[^1]

What is published:

- version 1, global coverage for 2017 to 2025[^1]
- version 1.1, retrained for steadier results year to year and wider coastal coverage, streamed over HTTPS as Zarr[^1]
- a version 2 beta with variable-length embeddings, on request[^1]
- version 2 for the whole land surface over Zarr, planned for early 2027[^1]

The geotessera Python library downloads a bounding box for a year as GeoTIFFs, one per UTM zone.[^3] It can also paint three of the 128 bands as red, green and blue on a web map.[^3] Looking at that map for your own area shows quickly whether the embeddings tell apart the things you care about. The model code is MIT licensed and the embeddings are CC0.[^1,4]

Google's AlphaEarth does something similar with 64 numbers per pixel inside Earth Engine ([AlphaEarth / Prithvi](/engines/alphaearth-prithvi/)).[^5] TESSERA's embeddings and weights can be taken away and run on your own machines.[^1,4]
