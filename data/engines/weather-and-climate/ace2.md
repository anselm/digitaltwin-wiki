---
about:
  label: ACE2 (Ai2 Climate Emulator)
  description: >-
    Open machine-learning emulator of the global atmosphere from the Allen Institute for AI, trained on reanalysis or on a physics-based model's output; runs about 1,500 simulated years a day.
  tags:
    - climate
    - emulator
    - machine learning
    - global
    - atmosphere
tool:
  tier: 3
  form: open-source Python package with pretrained models
  group: Weather and climate
  homepage: 'https://github.com/ai2cm/ace'
  licence: 'code Apache 2.0'
  cost: free
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'Apache 2.0 (code)'
relations:
  - predicate: needs
    target: data-sources/era5
  - predicate: alternative_to
    target: engines/weather-and-climate/neuralgcm
provenance:
  origin: agent
  sources:
    - title: 'ACE2: accurately learning subseasonal to decadal atmospheric variability and forced responses (Watt-Meyer et al., npj Climate and Atmospheric Science 8, 2025; read in the arXiv full text)'
      url: 'https://arxiv.org/abs/2411.11268'
    - title: 'ai2cm/ace'
      url: 'https://github.com/ai2cm/ace'
  created: '2026-11-15'
  reviewed: '2026-11-15'
  reviewed_by: 'Claude, from the sources listed; not yet read by Anselm'
  status: draft
domains:
  - climate
---
An emulator is a learned model trained to reproduce the behaviour of another model, or of a record, at much lower cost. ACE2 is "a 450M-parameter autoregressive machine learning emulator" of the global atmosphere, working at 1 degree with eight vertical layers and a six-hour time step.[^1] It is made by the climate modelling group at the Allen Institute for AI (Ai2).[^2]

There are two trained versions.[^1] ACE2-ERA5 was trained on the [ERA5](/data-sources/era5/) reanalysis from 1940 onward. ACE2-SHiELD was trained on output from SHiELD, a physics-based atmosphere model from the US Geophysical Fluid Dynamics Laboratory, which had been run with observed sea surface temperatures and greenhouse gases for 1940 to 2021. In both, the user prescribes sea surface temperature, sea ice, carbon dioxide and incoming sunlight, and the emulator computes how the atmosphere responds.[^1]

The authors report that ACE2 "can be stepped forward stably for arbitrarily many steps" and runs at "about 1500 simulated years per wall clock day".[^1] It reproduces the atmosphere's response to El Niño and the global temperature trend of the past eighty years, and it produces tropical cyclones.[^1] It is built to conserve dry air mass and moisture exactly.[^1]

The paper states these limits:[^1]

- It does not exactly conserve energy.
- It has no ocean or sea ice of its own.
- Its "sensitivities to separately changing sea surface temperature and carbon dioxide are not entirely realistic". The authors' explanation is that the two rose together throughout the training period, so the data does not show what either does alone.
- "We do not expect ACE2 to be able to properly simulate the response to strong climate change", because it was trained on the last eighty years.

The code is the `fme` Python package, installed with pip and licensed under Apache 2.0, and pretrained checkpoints are on Hugging Face under `allenai`.[^2] The repository page does not state a licence for the checkpoints.[^2] The same repository holds the group's other models, among them ACE2-SOM, SamudrACE and HiRO-ACE.[^2]

[Learned models of the Earth, and what they are trained on](/articles/learned-models-of-the-earth/) uses ACE2 as its example of emulation and of the limits of learning from a single historical record.
