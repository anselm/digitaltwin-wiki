---
about:
  label: Blue whales and vessel traffic in Chilean Patagonia
  description: >-
    Fifteen tagged whales, a movement model that fits in a minute, and the
    Chilean government's daily vessel positions, combined into a map of where
    each fleet is most likely to meet a whale.
  tags:
    - blue whale
    - movement model
    - telemetry
    - species distribution model
    - vessel traffic
    - ship strike
    - marine spatial planning
    - Patagonia
    - Chile
    - paper
article:
  tier: 2
  url: 'https://doi.org/10.1038/s41598-021-82220-5'
  published: '2021-02-01'
  publisher: Scientific Reports (Springer Nature)
  authors:
    - Luis Bedriñana-Romano
    - Rodrigo Hucke-Gaete
    - Francisco A. Viddi
    - Devin Johnson
    - Alexandre N. Zerbini
    - Juan Morales
    - Bruce Mate
    - Daniel M. Palacios
domains:
  - ecology
  - mobility
relations:
  - predicate: cites
    target: data-sources/blue-corridors-bluecorridors-org
provenance:
  origin: agent
  sources:
    - title: 'Defining priority areas for blue whale conservation and investigating overlap with vessel traffic in Chilean Patagonia, using a fast-fitting movement model (Bedriñana-Romano et al., Scientific Reports 11, 2709, 1 February 2021, CC BY 4.0)'
      url: 'https://doi.org/10.1038/s41598-021-82220-5'
    - title: 'Crossref record for the paper (queried 8 November 2026)'
      url: 'https://api.crossref.org/works/10.1038/s41598-021-82220-5'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the full text of the paper as supplied'
  status: draft
---
Northern Chilean Patagonia, between 41 and 47 degrees south, is the main summer feeding and nursing ground of the eastern South Pacific blue whale, a population numbering in the low hundreds.[^1] It is also home to one of the largest salmon farming industries in the world. The paper asks where the whales are, why, and which boats are most likely to meet them.[^1]

## The data

Fifteen whales carried Argos satellite tags, four from Corcovado Gulf in 2004 and eleven from the Chiloé inner sea between 2013 and 2019. Tracks within the region ran from 8 to 105 days and from 49 to 1,728 locations after filtering.[^1] Three ocean covariates came from NOAA's ERDDAP server: monthly MODIS Aqua chlorophyll at 4.64 km, from which the authors derived the distance to the previous spring's high-chlorophyll areas; daily MUR sea surface temperature at about 1 km; and thermal gradients computed from it.[^1]

The vessel side is the part that makes the study possible. Since 2020 the Chilean fisheries service, SERNAPESCA, has published daily GPS positions for every vessel in its industrial fishing, artisanal fishing, aquaculture and transport fleets, back to March 2019. The authors counted unique vessels per day in 8 km cells for the summer and autumn months of 2019 and 2020, fleet by fleet.[^1]

## The model

Rather than a state-switching model with preset behaviours, the authors fitted a continuous-time correlated random walk whose two parameters, the velocity scale and the directional persistence, vary in time as functions of the covariates. It estimates true positions from error-prone Argos fixes in the same step, using the Argos error ellipses. Fitted with the R package TMB, a track took 60 seconds on average on a laptop, and at most five minutes.[^1] Slow, unpersistent movement stands in for foraging; fast, persistent movement for transit. The paper's own warning is that very slow, very persistent stretches may be an artefact of location error swamping small movements.[^1]

The movement predictions were then combined with a species distribution model the same group had fitted earlier to ship surveys. Density times time spent gives the relative probability of encountering a whale in each cell; multiplied by vessel density, it gives the relative probability of a vessel encountering a whale, computed separately for each fleet. Schoener's D and Warren's I, from the R package dismo, measure how much each fleet's footprint overlaps the whales'.[^1]

## What it found

All but one whale slowed down near the previous spring's productive areas, and six slowed at thermal gradients of under one degree. The whales stayed in small coastal areas for up to three months.[^1] Four priority areas came out of both models: Ancud Gulf, the west coast of Chiloé, Corcovado Gulf with Moraleda Channel, and Adventure Bay.[^1]

The aquaculture fleet ran 602 to 729 active vessels a day, 83 percent of all traffic and an order of magnitude more than any other fleet, with up to 78 vessels a day crossing one cell. The artisanal fleet, confined by law to within 5 nautical miles of shore, had the highest spatial overlap with the whales (D = 0.34), but every fleet's risk concentrated in the inner sea around Puerto Montt, where three whale deaths from collisions have been reported in the press.[^1] Vessels without transponders, including international cargo, cruise ships and recreational boats, are not in the data at all.[^1]

## For a model of a place

The paper is a template for a marine risk surface built from three open parts: animal tracks, a government's vessel positions, and satellite oceanography pulled through ERDDAP. The model code (C++ for TMB), the raw telemetry and the covariates are in the supplementary information, and the paper is CC BY 4.0.[^1,2] Global whale migration routes are on this site under [Blue Corridors](/data-sources/blue-corridors-bluecorridors-org/).
