---
about:
  label: Nemotron-Personas
  description: >-
    NVIDIA's open collection of synthetic adult personas, one dataset per
    country, each sampled to match that country's census statistics and then
    written out as short text profiles by a language model.
  tags:
    - personas
    - synthetic population
    - language models
    - census
    - survey simulation
datasource:
  coverage: one dataset per country; released for the USA, Japan, India, Brazil, Singapore, France, Korea, El Salvador, Vietnam, Belgium, the UK and Germany as of October 2026
  resolution: individual adults, with location fields (city, state and postcode in the US data)
  cadence: new countries added through 2025 and 2026; updates per dataset
  access: free download from Hugging Face; extended versions through NVIDIA NGC for use in NeMo Data Designer
  format: Hugging Face dataset of text and categorical fields
  homepage: 'https://huggingface.co/datasets/nvidia/Nemotron-Personas-USA'
open:
  source: partly
  data: open
  api: unknown
  participation: unknown
  licence: CC BY 4.0
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'nvidia/Nemotron-Personas-USA (dataset card)'
      url: 'https://huggingface.co/datasets/nvidia/Nemotron-Personas-USA'
    - title: 'nvidia/Nemotron-Personas-UK (dataset card)'
      url: 'https://huggingface.co/datasets/nvidia/Nemotron-Personas-UK'
    - title: 'Hugging Face datasets API: nvidia, Nemotron-Personas'
      url: 'https://huggingface.co/api/datasets?author=nvidia&search=Nemotron-Personas&limit=50'
    - title: 'Person Sampling | NeMo Data Designer'
      url: 'https://docs.nvidia.com/nemo/datadesigner/concepts/person-sampling'
    - title: 'NVIDIA-NeMo/DataDesigner (README)'
      url: 'https://github.com/NVIDIA-NeMo/DataDesigner'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Nemotron-Personas is a set of datasets of invented people, one per country, from NVIDIA.[^1,3] Each record is an adult with structured attributes, such as age, sex, marital status, education, occupation and place, plus several short paragraphs describing them: their working life, sports, arts, travel, food, cultural background, skills, hobbies and goals.[^1,2] Unlike a persona list written freely by a language model, the attributes are first drawn from a statistical model fitted to the country's census, so the ages, education levels and jobs come out in roughly the real proportions.[^1,2] A language model then writes the text around them.[^1,2] Minors are excluded.[^1,2]

The first, for the United States, appeared on 9 June 2025 and was built from the American Community Survey and a published dataset of names by race and ethnicity.[^1] Version 1.1, on 28 October 2025, grew it to one million records holding about six million persona descriptions, spread over about 29,000 postcode areas.[^1] Datasets for eleven more countries followed, the latest for Germany and the UK in October 2026.[^3] The UK one was built with Locai Labs from the 2021 and 2022 censuses of the four nations.[^2] The US and UK sets were made with NeMo Data Designer, NVIDIA's open-source (Apache-2.0) synthetic data tool,[^1,2,5] whose person sampler can draw from extended versions of these datasets for supported countries.[^4]

The datasets are CC BY 4.0 and free for commercial use, and load in one line with the Hugging Face datasets library.[^1,2] NVIDIA states the purpose as training and evaluating language models: more varied synthetic training data, less bias, and avoiding the decline in quality that comes from training models on other models' output.[^1,2]

The limits are in the cards. The statistical model behind the US data is proprietary and makes simplifying assumptions; for example, occupation is taken as independent of postcode once education, age and sex are known.[^1] Sensitive fields such as ethnicity, religion and disability are used in the UK sampling but left out of the release, and names and addresses are left out of both.[^1,2] The persona text is written by a language model and inherits its habits.[^1,2] The cards measure how well the personas match census proportions, not whether they answer questions the way real residents would,[^1,2] and they are not built as a complete population of any one town.
