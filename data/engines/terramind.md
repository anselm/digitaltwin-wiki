---
about:
  label: TerraMind
  description: >-
    Open generative foundation model for Earth observation from IBM and the
    European Space Agency: it reads radar, optical, elevation and land-cover
    layers and can generate any one of them from the others.
  tags:
    - satellite
    - foundation model
    - embeddings
    - sentinel
    - generative
tool:
  form: open model
  group: Earth observation and AI
  homepage: 'https://ibm.github.io/terramind/'
  licence: Apache-2.0 (code and weights)
  cost: free
domains:
  - places
  - ecology
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: Apache-2.0
  note: Weights for tiny, small, base and large models are on Hugging Face; fine-tuning runs through IBM's TerraTorch toolkit.
relations:
  - predicate: alternative_to
    target: engines/tessera
  - predicate: alternative_to
    target: engines/alphaearth-prithvi
provenance:
  origin: agent
  sources:
    - title: 'TerraMind (project page)'
      url: 'https://ibm.github.io/terramind/'
    - title: 'IBM/terramind (README)'
      url: 'https://github.com/IBM/terramind'
    - title: 'ibm-esa-geospatial/TerraMind-1.0-base (Hugging Face model card)'
      url: 'https://huggingface.co/ibm-esa-geospatial/TerraMind-1.0-base'
    - title: 'IBM and ESA open-source TerraMind, the best performing generative AI model for Earth observation'
      url: 'https://research.ibm.com/blog/terramind-esa-earth-observation-model'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
TerraMind summarises satellite imagery as numbers, like other Earth observation foundation models, and it can also generate one kind of layer from another: a radar image or a land-use map from an ordinary Sentinel-2 picture, for instance. A generated layer is the model's guess at what that layer would show, and the model card warns against reading it as a reconstruction. On the project page, a Sentinel-2 scene of Singapore becomes a radar image in which ships and runways show and the clouds are gone.

It was built by IBM, the European Space Agency's Φ-lab and the FAST-EO project, and released on Hugging Face on 22 April 2025. KP Labs, the Jülich Supercomputing Centre, where it was trained, and the German Aerospace Center (DLR) also took part. The paper appeared at ICCV 2025, a computer vision conference. It is a separate model from the Prithvi models IBM makes with NASA ([AlphaEarth / Prithvi](/engines/alphaearth-prithvi/)); IBM's announcement names both as part of its work applying AI to the planet, and says NASA experts helped validate TerraMind.

It was trained on TerraMesh, nine million matched samples from around the world in nine kinds of data. These include Sentinel-1 radar, Sentinel-2 optical imagery, land use and land cover, a vegetation index, elevation, coordinates and short text descriptions. As an input it accepts Sentinel-2 at two processing levels, Sentinel-1 in two radar formats, an elevation model or a plain colour image, and it copes when some of these are missing.

Run as an encoder on your own imagery, the base model gives 768 numbers for each 16 by 16 pixel patch of a 224 by 224 pixel input, averaged across the input layers by default. Fine-tuning goes through IBM's TerraTorch toolkit, with example settings for flood mapping, burn scars and crop types, and multi-date data goes through a time-series wrapper in that toolkit. An option called Thinking-in-Modalities has the model first imagine a missing layer, land cover by default, and then use it to improve its answer.

Code and weights are under Apache 2.0 and come in tiny, small, base and large sizes.
