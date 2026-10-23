---
about:
  label: CyFi
  description: >-
    Open-source command line tool from DrivenData that estimates cyanobacteria
    density in small lakes and reservoirs from Sentinel-2 imagery, for a given
    point and date.
  tags:
    - algal bloom
    - cyanobacteria
    - water quality
    - lakes
    - sentinel-2
    - machine learning
tool:
  form: open-source command line tool and Python package
  group: Water and flooding
  homepage: 'https://cyfi.drivendata.org/'
  licence: MIT
  cost: free
domains:
  - water
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: MIT
provenance:
  origin: agent
  sources:
    - title: 'CyFi: Cyanobacteria Finder'
      url: 'https://cyfi.drivendata.org/'
    - title: 'Background - cyfi'
      url: 'https://cyfi.drivendata.org/about/'
    - title: 'drivendataorg/cyfi (README)'
      url: 'https://github.com/drivendataorg/cyfi'
    - title: 'drivendataorg/cyfi release v1.2.0'
      url: 'https://github.com/drivendataorg/cyfi/releases/tag/v1.2.0'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Cyanobacteria are microscopic algae that multiply fast in warm water rich in nutrients, often turning a lake blue or green.[^2] Some make toxins that poison people, pets and livestock.[^2] Water managers usually find them by going out and sampling. That is accurate but slow, and hard to do often.[^2] CyFi, short for Cyanobacteria Finder, gives an estimate from satellite imagery in seconds, so a manager can decide where to sample first and when a health warning may be needed.[^1,2]

It comes from DrivenData, which ran a machine learning competition called Tick Tick Bloom to detect cyanobacteria blooms in small inland water bodies and classify how severe they are.[^1,2] The labels were samples collected on the water by many organisations across the United States.[^1,2] CyFi's model is built from the winning entries, reworked to generalise better and run faster.[^1,2] The method is written up in the 2024 proceedings of the Python in Science Conference by E. Dorne, K. Wetstone, T. B. Cerquera and S. Gupta.[^1,2]

You install it with pip or conda and give it a CSV of latitude, longitude and date, or a single point at the command line.[^1] For each point it looks for the most recent Sentinel-2 image from the 30 days up to that date with under 5 per cent cloud in a 2 kilometre box around the point.[^1] Keeping only the water pixels, it computes summary statistics and colour ratios across the image bands, then adds a land cover class from the European Space Agency's land cover map.[^1] A gradient-boosted decision tree model (LightGBM) turns these into a density in cells per millilitre.[^1] The imagery comes through Microsoft's Planetary Computer.[^1]

Each estimate also carries a severity level from World Health Organization thresholds:[^1,3]

- low, under 20,000 cells per millilitre
- moderate, 20,000 to 100,000
- high, over 100,000[^1,3]

Users are free to apply their own thresholds instead.[^1,3] A companion viewer, the CyFi Explorer, shows the satellite image behind each estimate.[^1,3]

For a model of a watershed, CyFi puts a bloom estimate on small lakes and reservoirs, working from Sentinel-2 bands as sharp as 10 metres.[^1] NOAA's Harmful Algal Bloom Monitoring System and the Cyanobacteria Assessment Network do similar work from Sentinel-3 imagery at 300 metres.[^2] Its training labels all came from the United States.[^1,2] The code is MIT licensed, and version 1.2.0 was released in October 2026.[^3,4]
