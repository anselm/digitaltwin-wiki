---
about:
  label: OlmoEarth
  description: >-
    Family of Earth observation foundation models from the Allen Institute for
    AI (Ai2), trained on Sentinel-1, Sentinel-2 and Landsat time series, with
    open weights under a licence that bars military and extractive uses.
  tags:
    - satellite
    - foundation model
    - embeddings
    - sentinel
    - fine-tuning
tool:
  form: open-weights model family, precomputed embeddings and hosted platform
  group: Earth observation and AI
  homepage: 'https://olmoearth.allenai.org/'
  licence: OlmoEarth Artifact License (weights, code and published embeddings); CC-BY-4.0 (pretraining dataset)
  cost: free model and code; platform access by sign-up
domains:
  - places
  - ecology
open:
  source: partly
  data: partly
  api: yes
  participation: open
  licence: OlmoEarth Artifact License
  note: Free to use, change and share, but not for military or defence uses (including intelligence gathering and human surveillance and policing), or for extracting oil, gas or minerals by means such as drilling, mining or deforestation; anything built from it must carry the same restrictions.
relations:
  - predicate: alternative_to
    target: engines/tessera
  - predicate: alternative_to
    target: engines/alphaearth-prithvi
provenance:
  origin: agent
  sources:
    - title: 'allenai/olmoearth_pretrain (README)'
      url: 'https://github.com/allenai/olmoearth_pretrain'
    - title: 'OlmoEarth Artifact License'
      url: 'https://github.com/allenai/olmoearth_pretrain/blob/main/LICENSE'
    - title: 'OlmoEarth v1.3 Embeddings (Ai2 technical report)'
      url: 'https://allenai.org/papers/olmoearth-v1-3'
    - title: 'OlmoEarth embeddings (Ai2 story page)'
      url: 'https://narrative.allen.ai/olmoearth-embeddings'
    - title: 'OlmoEarth Documentation'
      url: 'https://docs.olmoearth.allenai.org/'
    - title: 'Changelog | OlmoEarth'
      url: 'https://docs.olmoearth.allenai.org/changelog'
    - title: 'allenai/OlmoEarth-v1_2-Base (Hugging Face model card)'
      url: 'https://huggingface.co/allenai/OlmoEarth-v1_2-Base'
    - title: 'Computing Embeddings using OlmoEarth (rslearn)'
      url: 'https://github.com/allenai/rslearn/blob/master/docs/examples/OlmoEarthEmbeddings.md'
    - title: 'allenai/olmoearth_projects (README)'
      url: 'https://github.com/allenai/olmoearth_projects'
    - title: 'allenai/olmoearth_pretrain_dataset (Hugging Face dataset card)'
      url: 'https://huggingface.co/datasets/allenai/olmoearth_pretrain_dataset'
    - title: 'OlmoEarth Platform (Ai2 page, with its Request access link)'
      url: 'https://olmoearth.allenai.org/platform'
  created: '2026-10-21'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
OlmoEarth is a set of models from the Allen Institute for AI (Ai2), trained once on a large body of satellite imagery and then fine-tuned for particular mapping tasks.[^1,5] The first release, on 4 November 2025, came with the OlmoEarth Platform.[^6] Version 1.1 in May 2026 cut the computing cost by up to three times, and version 1.2 in June 2026 added a Small size between Tiny and Base.[^6] In version 1 the sizes ran from Nano, with 1.4 million parameters in its encoder, to Large, with 308 million.[^1]

The models read Sentinel-2 optical imagery, Sentinel-1 radar and Landsat, either as single images or as time series.[^7] Training also showed them six existing maps: OpenStreetMap, ESA WorldCover, the USDA Cropland Data Layer, the SRTM elevation model, WRI's canopy height map and WorldCereal.[^1] The pretraining set of 285,288 squares, each 2.56 km on a side and spread around the world, can be downloaded from Hugging Face under CC BY 4.0.[^1,10]

To get embeddings, the lists of numbers that summarise each patch of ground, you pick an area and a period.[^8] Ai2's rslearn tool then fetches the imagery at 10 metres per pixel, one mosaic per 30 days, and writes the embeddings out as GeoTIFF files.[^8] A period of up to a year matches how the models were trained.[^8] The tutorial sets a patch size of 4, so it writes one embedding per 4 by 4 pixel patch, which at 10 metres per pixel works out to 40 metres on a side.[^8] Each embedding holds 128 numbers for Nano, 192 for Tiny, 768 for Base or 1,024 for Large.[^8]

Version 1.3 came with embeddings already computed, so many uses no longer need the model run at all.[^3,4] There is one embedding per 10 metre square per year, 128 numbers stored as small integers, and the first 64 work on their own for anyone short of storage.[^3] Each is built from a calendar year of Sentinel-1, Sentinel-2 and Landsat 8 and 9.[^3] The years 2023, 2024 and 2025 cover the world's land and coasts, though not Antarctica; 2017 to 2022 cover some countries so far, and Ai2 says it is still computing the rest.[^3] Ai2 puts one global year at roughly 150 TB.[^3] Source Cooperative hosts the set as a Zarr store that any Zarr client can read straight from storage, with no key.[^3] A free viewer at olmoearth.allenai.org/embeddings finds places that look like one you click, groups an area you draw, and exports either as a Python script.[^3,4] Ai2's technical report compares the 128-number version with AlphaEarth and TESSERA v2 on eleven tasks and finds it best on ten, with TESSERA v2 ahead in Ethiopia;[^3] no outside comparison has been published yet that we have seen.

The OlmoEarth Platform is the hosted side: OlmoEarth Studio for labelling data, fine-tuning and running models without writing code, and an API for the same work from a program.[^5] Access to the platform is by request, through a Request access button on the OlmoEarth site.[^11] Ai2 publishes fine-tuned models for live fuel moisture, the drivers of forest loss, mangroves, ecosystem types, and land use and land cover in southern Kenya.[^9]

The OlmoEarth Artifact License covers the weights, the code and the published embeddings.[^2,3] Anyone may use, change and redistribute them free of charge, and build new models from them, but not for military or defence purposes, which the licence spells out as including weapons, military operations, intelligence gathering, and human surveillance and policing.[^2] Extractive work is barred too: planning or helping the extraction of oil, gas or minerals through activities such as drilling, mining or deforestation.[^2] Anyone who passes on OlmoEarth must credit Ai2 and include the licence; anything built from it must carry the same restrictions unless Ai2 agrees otherwise in writing.[^2] The licence ends automatically on a breach or if the user sues anyone claiming the artifacts infringe a patent, other than in answer to a suit brought first.[^2]
