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
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the seven linked entries, each written from its project''s own pages and checked by a second reader'
  status: draft
---
An embedding is a list of numbers that a trained model gives to a piece of the Earth, chosen so that places that look alike get similar lists. With embeddings in hand, mapping crops or finding every quarry in a region comes down to labelling some examples and training a small classifier, which TESSERA's makers say runs on an ordinary CPU. Several groups now publish open models that make embeddings, and some publish the numbers already computed. Four questions decide between seven of them.

**Do you want the numbers ready-made, or will you run a model?** Ready-made is far easier. [TESSERA](/engines/tessera/) publishes yearly embeddings for the whole land surface from 2017 to 2025 under CC0, free to download. Google's [AlphaEarth](/engines/alphaearth-prithvi/) publishes yearly embeddings inside Earth Engine. The company lgnd.ai publishes monthly [Clay](/engines/clay/) embeddings of Sentinel-2 for the world from January 2017 to April 2026, and Clay has embedded the US NAIP aerial archive from 2010 to 2021. [OlmoEarth](/engines/olmoearth/) and [TerraMind](/engines/terramind/) have to be run on imagery you choose, though OlmoEarth's hosted platform lets you do that without writing code.

**What does one embedding describe?** TESSERA and AlphaEarth give one per 10 metre square. Clay, OlmoEarth and TerraMind give one per patch of pixels, so the ground each covers depends on the imagery and the settings. In OlmoEarth's tutorial a patch is 40 metres across. [SatCLIP](/engines/satclip/) is different in kind: it takes a longitude and latitude, needs no image at all, and describes the broad character of a region, so it suits regional questions such as temperature or population density rather than one field.

**One moment or a whole year?** TESSERA folds a year of radar and optical passes into each embedding, so a field that greens and browns is told apart from evergreen forest. AlphaEarth is also annual. Clay describes one place at one time, so seasons come from comparing dates. OlmoEarth reads a time series of monthly mosaics, up to a year. TerraMind reads a single date unless wrapped for time series.

**What does the licence allow?** TESSERA's embeddings are CC0 and its code MIT. Clay's weights and TerraMind's are Apache 2.0, and SatCLIP's MIT, though its model cards say it is for research, not production. OlmoEarth's own licence lets anyone use and change the weights free of charge. It bars military, surveillance and policing work and the extraction of oil, gas and minerals. Anything built from OlmoEarth carries the same limits.

| | Ready-made embeddings | One embedding per | Time | Numbers | Licence |
|---|---|---|---|---|---|
| TESSERA | yes, global, 2017 to 2025 | 10 m square | a year | 128 | MIT model, CC0 embeddings |
| AlphaEarth | yes, in Earth Engine | 10 m square | a year | 64 | see Earth Engine |
| Clay v1.5 | yes: S2 monthly global, NAIP US | patch of 8 pixels | one date | 1,024 | Apache 2.0; embeddings CC BY |
| OlmoEarth | no, run it or use the platform | patch (40 m in the tutorial) | up to a year | 128 to 1,024 | own licence, with use limits |
| TerraMind | no | 16 by 16 pixel patch | one date | 768 (base) | Apache 2.0 |
| SatCLIP | not needed | a coordinate | fixed | varies | MIT, research use |

To compare models on one place, ESA's Φ-lab runs [Major TOM](/data-sources/major-tom/). It cuts the world into cells about 10 km apart. Imagery, elevation, night lights and the embeddings of several models, among them Clay, SatCLIP and a subset of AlphaEarth, are all keyed to the same cells.

TerraMind does one thing the others do not: from an ordinary Sentinel-2 picture it can generate a radar image or a land-cover map, and use the imagined layer to improve its answer. Its model card warns against reading a generated layer as a reconstruction.

TESSERA's Python library can download a year for a small box and paint three of its 128 bands as a colour map. Looking at that map shows quickly whether fields, roofs or wetlands in your area stand apart.
