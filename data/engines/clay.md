---
about:
  label: Clay
  description: >-
    Open Earth observation foundation model, now a program of Renaissance
    Philanthropy: it turns satellite or aerial imagery with any number of
    bands, along with its place and date, into 1,024-number embeddings.
  tags:
    - satellite
    - foundation model
    - embeddings
    - sentinel
    - land cover
tool:
  form: open model
  group: Earth observation and AI
  homepage: 'https://clay-foundation.github.io/model/'
  licence: Apache-2.0 (code and weights); CC-BY-4.0 (documentation); ODC-BY (v0 embeddings); CC-BY (v1.5 embedding sets)
  cost: free
domains:
  - places
  - ecology
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: Apache-2.0; embeddings ODC-BY (v0) or CC-BY (v1.5)
  note: Source Cooperative holds precomputed embeddings for the v0 training data, for the whole NAIP archive (2010 to 2021) from v1.5, and for Sentinel-2 worldwide, one per month from January 2017 to April 2026, from v1.5 via lgnd.ai; for other imagery you run the model yourself.
relations:
  - predicate: alternative_to
    target: engines/tessera
  - predicate: alternative_to
    target: engines/alphaearth-prithvi
provenance:
  origin: agent
  sources:
    - title: 'Clay Foundation Model (documentation home)'
      url: 'https://clay-foundation.github.io/model/'
    - title: 'Clay-foundation/model (README)'
      url: 'https://github.com/Clay-foundation/model'
    - title: 'Model release notes (Clay v1.5 specification)'
      url: 'https://clay-foundation.github.io/model/release-notes/specification.html'
    - title: 'Training Data'
      url: 'https://clay-foundation.github.io/model/release-notes/data_sampling.html'
    - title: 'Explore embedding space of CLAY Encoder for different sensors'
      url: 'https://clay-foundation.github.io/model/tutorials/embeddings.html'
    - title: 'made-with-clay/Clay (Hugging Face model card)'
      url: 'https://huggingface.co/made-with-clay/Clay'
    - title: 'Clay Model v0 Embeddings (Source Cooperative)'
      url: 'https://source.coop/clay/clay-model-v0-embeddings'
    - title: 'NAIP data embedded with Clay v1.5 (rev2) (Source Cooperative)'
      url: 'https://source.coop/clay/clay-v1-5-naip-2'
    - title: 'LGND Embeddings (Source Cooperative)'
      url: 'https://source.coop/clay/lgnd-embeddings'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Clay reads a square of satellite or aerial imagery together with where and when it was taken, and returns an embedding: a list of 1,024 numbers that summarises what is on the ground in that square at that moment. Squares that look alike to the model get similar numbers, so the embeddings can be searched by similarity or fed to small classifiers. The model is a vision transformer, the same family of network used for photographs, trained without labels by hiding three quarters of each image and learning to fill it back in.

Versions v0 to v1.5 were a fiscally sponsored project of the non-profit Radiant Earth; Clay is now a program of Renaissance Philanthropy. The current release, v1.5, was trained in September 2024 on 70 million image chips chosen to cover the world's land cover types. Its sources were Sentinel-2, Sentinel-1 radar, Landsat 8 and 9 and MODIS worldwide, plus NAIP aerial photos of the USA and LINZ aerial photos of New Zealand, with ground detail from under half a metre to 500 metres per pixel. Instead of a fixed sensor, the model is told the wavelength of each band, so it accepts any number of bands from many kinds of sensor. The documentation credits Prithvi among the models whose design it drew on.

The code installs as a Python package from GitHub and the v1.5 weights download from Hugging Face; the encoder alone is 1.25 GB. It has three main uses:

- finding features such as surface mines, aquaculture or feedlots by similarity
- training a small model on the embeddings to classify crop type or land cover, estimate biomass, or detect change such as deforestation, wildfire, flooding or new building
- using Clay as the backbone of a larger model

Each embedding describes one place at one time, so following a place through the seasons means comparing embeddings from several dates. Some are already computed and published on Source Cooperative. Clay used v1.5 to embed the whole NAIP aerial archive of the USA from 2010 to 2021. The company lgnd.ai publishes monthly v1.5 embeddings of Sentinel-2 worldwide from January 2017 to April 2026, under CC BY 4.0. Embeddings for all the training data of the older v0 model are there too, under ODC-BY.

Code and weights are under Apache 2.0 and the documentation under CC-BY 4.0. The training data covered only land and coastal water, left out the poles, open ocean and night-time scenes, did not set out to include extreme events, and had at most six dates per location.
