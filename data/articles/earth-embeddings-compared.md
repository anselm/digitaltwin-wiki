---
about:
  label: Choosing an Earth embedding
  description: >-
    Seven open sources of satellite embeddings set side by side, with the
    questions that decide between them: ready-made or run yourself, pixel or
    patch or place, one date or a year, and the licence.
  tags:
    - embeddings
    - foundation model
    - satellite
    - comparison
article: {}
domains:
  - places
  - ecology
relations:
  - predicate: about
    target: engines/tessera
  - predicate: about
    target: engines/alphaearth-prithvi
  - predicate: about
    target: engines/clay
  - predicate: about
    target: engines/olmoearth
  - predicate: about
    target: engines/terramind
  - predicate: about
    target: engines/satclip
  - predicate: about
    target: data-sources/major-tom
provenance:
  origin: agent
  sources:
    - title: 'OlmoEarth v1.3 Embeddings (Ai2 technical report)'
      url: 'https://allenai.org/papers/olmoearth-v1-3'
    - title: 'TESSERA'
      url: 'https://geotessera.org/'
    - title: 'AlphaEarth Foundations helps map our planet in unprecedented detail'
      url: 'https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/'
    - title: 'Clay Foundation Model documentation'
      url: 'https://clay-foundation.github.io/model/'
    - title: 'allenai/olmoearth_pretrain'
      url: 'https://github.com/allenai/olmoearth_pretrain'
    - title: 'IBM/terramind'
      url: 'https://github.com/IBM/terramind'
    - title: 'microsoft/satclip'
      url: 'https://github.com/microsoft/satclip'
    - title: 'ESA-PhiLab/Major-TOM'
      url: 'https://github.com/ESA-PhiLab/Major-TOM'
    - title: 'OlmoEarth Artifact License'
      url: 'https://github.com/allenai/olmoearth_pretrain/blob/main/LICENSE'
    - title: 'Clay v1.5 model specification'
      url: 'https://clay-foundation.github.io/model/release-notes/specification.html'
    - title: 'LGND Embeddings (Source Cooperative)'
      url: 'https://source.coop/clay/lgnd-embeddings'
    - title: 'NAIP data embedded with Clay v1.5 (Source Cooperative)'
      url: 'https://source.coop/clay/clay-v1-5-naip-2'
    - title: 'TerraMind 1.0 base model card'
      url: 'https://huggingface.co/ibm-esa-geospatial/TerraMind-1.0-base'
    - title: 'TerraMind documentation'
      url: 'https://ibm.github.io/terramind/'
    - title: 'SatCLIP-ViT16-L40 model card'
      url: 'https://huggingface.co/microsoft/SatCLIP-ViT16-L40'
    - title: 'Major TOM datasets on Hugging Face'
      url: 'https://huggingface.co/api/datasets?author=Major-TOM&full=true'
    - title: 'Major-TOM/Core-AlphaEarth-Embeddings'
      url: 'https://huggingface.co/datasets/Major-TOM/Core-AlphaEarth-Embeddings'
    - title: 'ucam-eo/geotessera'
      url: 'https://github.com/ucam-eo/geotessera'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the seven linked entries, each written from its project''s own pages and checked by a second reader'
  status: draft
---
An embedding is a list of numbers that a trained model gives to a piece of the Earth, chosen so that places that look alike get similar lists. With embeddings in hand, mapping crops or finding every quarry in a region comes down to labelling some examples and training a small classifier, which TESSERA's makers say runs on an ordinary CPU.[^2] Several groups now publish open models that make embeddings, and some publish the numbers already computed.[^1,2,3] Four questions decide between seven of them.

**Do you want the numbers ready-made, or will you run a model?** Ready-made is far easier. [TESSERA](/engines/tessera/) publishes yearly embeddings for the whole land surface from 2017 to 2025 under CC0, free to download.[^2] Google's [AlphaEarth](/engines/alphaearth-prithvi/) publishes yearly embeddings inside Earth Engine.[^3] The company lgnd.ai publishes monthly [Clay](/engines/clay/) embeddings of Sentinel-2 for the world from January 2017 to April 2026,[^11] and Clay has embedded the US NAIP aerial archive from 2010 to 2021.[^12] Ai2 publishes yearly [OlmoEarth](/engines/olmoearth/) embeddings on Source Cooperative, worldwide for 2023 to 2025 and for some countries back to 2017, with the earlier years still being computed.[^1] [TerraMind](/engines/terramind/) has to be run on imagery you choose.[^6,13]

**What does one embedding describe?** TESSERA, AlphaEarth and OlmoEarth's published set give one per 10 metre square.[^1,2,3] Clay and TerraMind give one per patch of pixels, so the ground each covers depends on the imagery and the settings, and so does OlmoEarth when you run it yourself.[^1,10,14] [SatCLIP](/engines/satclip/) is different in kind: it takes a longitude and latitude, needs no image at all, and describes the broad character of a region, so it suits regional questions such as temperature or population density rather than one field.[^7,15]

**One moment or a whole year?** TESSERA folds a year of radar and optical passes into each embedding, so a field that greens and browns is told apart from evergreen forest.[^2] AlphaEarth is also annual.[^3] Clay describes one place at one time, so seasons come from comparing dates.[^4] OlmoEarth reads a time series of monthly mosaics, and its published set is one embedding per year.[^1] TerraMind reads a single date unless wrapped for time series.[^6]

**What does the licence allow?** TESSERA's embeddings are CC0 and its code MIT.[^2] Clay's weights and TerraMind's are Apache 2.0, and SatCLIP's MIT, though its model cards say it is for research, not production.[^4,6,7,15] OlmoEarth's own licence, which covers its published embeddings as well as the weights, lets anyone use and change them free of charge.[^1,9] It bars military, surveillance and policing work and the extraction of oil, gas and minerals.[^9] Anything built from OlmoEarth carries the same limits.[^9]

| | Ready-made embeddings | One embedding per | Time | Numbers | Licence |
|---|---|---|---|---|---|
| TESSERA | yes, global, 2017 to 2025 | 10 m square | a year | 128 | MIT model, CC0 embeddings[^2] |
| AlphaEarth | yes, in Earth Engine | 10 m square | a year | 64 | see Earth Engine[^3] |
| Clay v1.5 | yes: S2 monthly global, NAIP US | patch of 8 pixels | one date | 1,024 | Apache 2.0; embeddings CC BY[^4,10,11,12] |
| OlmoEarth | yes, global 2023 to 2025, some countries earlier | 10 m square | a year | 128 (or the first 64) | own licence, with use limits[^1,9] |
| TerraMind | no | 16 by 16 pixel patch | one date | 768 (base) | Apache 2.0[^13,14] |
| SatCLIP | not needed | a coordinate | fixed | varies | MIT, research use[^7,15] |

To compare models on one place, ESA's Φ-lab runs [Major TOM](/data-sources/major-tom/). It cuts the world into cells about 10 km apart.[^8] Imagery, elevation, night lights and the embeddings of several models, among them Clay, SatCLIP and a subset of AlphaEarth, are all keyed to the same cells.[^8,16,17]

TerraMind does one thing the others do not: from an ordinary Sentinel-2 picture it can generate a radar image or a land-cover map, and use the imagined layer to improve its answer.[^6,14] Its model card warns against reading a generated layer as a reconstruction.[^13]

TESSERA's Python library can download a year for a small box and paint three of its 128 bands as a colour map.[^18] Looking at that map shows quickly whether fields, roofs or wetlands in your area stand apart.
