---
about:
  label: Artificial upwelling and the bacteria that eat the gain
  description: >-
    A 2026 preprint pumps deep water to the surface of a model ocean to draw
    down carbon dioxide. Whether the ocean gains or loses carbon depends on
    whether plankton or bacteria win the nutrients.
  tags:
    - geoengineering
    - carbon dioxide removal
    - marine carbon dioxide removal
    - artificial upwelling
    - ocean
    - dissolved organic carbon
    - Earth system models
    - preprint
article:
  tier: 2
  url: 'https://doi.org/10.5194/egusphere-2026-6818'
  published: '2026-11-06'
  publisher: 'EGUsphere (Copernicus), a preprint under review for Biogeosciences'
  authors:
    - Benjamin Owusu
    - Takasumi Kurahashi-Nakamura
    - Lennard Montag
    - Wolfgang Koeve
    - Sinikka T. Lennartz
domains:
  - climate
  - ecology
  - water
relations:
  - predicate: answers
    target: questions/cooling-the-planet
provenance:
  origin: agent
  sources:
    - title: 'Accounting for Microbial–DOC Feedbacks Reveal Ecological Constraints on Artificial Upwelling for Atmospheric Carbon Dioxide Removal. Owusu, Kurahashi-Nakamura, Montag, Koeve and Lennartz, EGUsphere preprint, discussion started 6 November 2026: the preprint page'
      url: 'https://egusphere.copernicus.org/preprints/2026/egusphere-2026-6818/'
    - title: 'The same preprint, full text (PDF, 25 pages)'
      url: 'https://egusphere.copernicus.org/preprints/2026/egusphere-2026-6818/egusphere-2026-6818.pdf'
  created: '2026-11-24'
  reviewed: '2026-11-24'
  reviewed_by: 'Claude, from the preprint: the abstract, introduction, the model and simulation set-up, the results on carbon inventories and air-sea flux, the paragraphs of the discussion on likely cases and on magnitude, and the conclusions. The model equations, the sensitivity section, the supplement and the Zenodo archive were not read. Anselm sent the preprint.'
  status: draft
---
Artificial upwelling is a proposed way to remove carbon dioxide from the air using the ocean. Pipes bring deep, nutrient-rich water to the surface, where sunlight lets phytoplankton grow on it. Some of what grows sinks, and the carbon in it goes down with it.[^2] This preprint tests the idea in a model of the Earth and finds that the result turns on a contest the earlier models left out. Over a century of pumping, the model ocean takes up between 82 billion tonnes more carbon than it would have without the pipes and 5 billion tonnes less, and the only thing that differs between those runs is whether the phytoplankton or the bacteria get the benefit of the iron in the upwelled water.[^2]

The paper is a preprint. It was posted on 6 November 2026 and is under review for the journal Biogeosciences, so it has not yet passed peer review.[^1]

## What earlier models left out

Phytoplankton release part of what they fix as dissolved organic carbon, the largest pool of organic carbon in the sea at about 700 billion tonnes. Bacteria consume it and turn it back into carbon dioxide.[^2] Most ocean models simplify that consumption and do not represent the bacteria themselves, the authors say. Upwelled nutrients feed bacteria as well as phytoplankton, so a model without bacteria cannot show the pumping speeding up the loss as well as the gain.[^2]

## The model

The runs use the University of Victoria Earth System Climate Model, version 2.10. It is a model of intermediate complexity, with cells of 1.8 degrees of latitude by 3.6 of longitude and 19 levels in the ocean.[^2] The authors couple it to a model of their group's, MICDOC version 2.0, which adds bacteria, dissolved organic carbon and dissolved organic phosphorus as quantities the model carries and updates.[^2]

Upwelling is represented as water moved from the foot of a pipe to the surface at one centimetre a day, averaged over the grid cell, with a matching downward flow. Pipes are at most 1,200 m long. The model places them wherever surface phosphate is low and the upwelled nutrients, fully used, would lower the carbon dioxide in the surface water.[^2] That is deployment across every part of the ocean where it could help, which the authors chose in order to find the most the method could do.[^2]

Emissions follow a high pathway, SSP5-8.5, and the pumping runs from 2010 to 2110.[^2]

## Four cases

Earlier studies of upwelling assumed that the deep water brings iron and frees phytoplankton from a shortage of it. Whether a shortage of iron also holds back bacteria is not settled; the studies the authors cite conflict.[^2] The model does not simulate iron. It reads iron from a fixed monthly map, so the authors represent the arrival of iron as a change to growth rates and run each possibility:[^2]

| Case | Who gains from the iron | Extra carbon taken up by the ocean in 100 years |
| --- | --- | --- |
| P-Boost | phytoplankton only | 81.84 billion tonnes |
| PB-Boost | phytoplankton and bacteria | 62.18 |
| NO-Boost | neither | 8.93 |
| B-Boost | bacteria only, growing 20% faster | −4.95 |

The figures are differences from a run of the same model with no pipes.[^2] In the last case the pumped ocean holds less carbon than the ocean left alone.

The same model without the bacteria gives 64.81 billion tonnes, which falls inside the range.[^2] A single number from such a model hides a spread that runs from most of that figure to less than nothing.

The authors do not treat the four cases as equally likely. The case in which neither group gains "may closely represent a likely ecological response", they write, if iron released in the deep sea is quickly stripped out by sinking particles before it can be pumped up.[^2] That is the case with 8.93 billion tonnes.

## How large the best case is

The most favourable case removes about 0.82 billion tonnes of carbon a year, averaged over the century. The authors set that against present emissions of about 11 billion tonnes a year, of which it is about 7 per cent, and against the roughly 4 billion tonnes a year of emissions expected to remain under strict mitigation.[^2] They call it "an idealised upper-bound sensitivity rather than a deployment-level projection". The high-emissions pathway keeps raising carbon dioxide in the air, which pushes more of it into the sea; under a pathway with lower emissions the uptake would be smaller.[^2]

## What it does not show

- **Which case is real.** The paper says the present state of nutrient limitation in the ocean, for phytoplankton and for bacteria, is poorly known, and that no final conclusion can be drawn until it is. It asks for experiments on what limits bacteria, region by region.[^2]
- **Iron as a moving quantity.** Iron is a fixed map, and the boosts are stand-ins. The authors name coupling their bacteria to a model with a dynamic iron cycle as the next step.[^2]
- **A deployment anyone would build.** Pipes everywhere they could help, in one model, under one emissions pathway. The authors describe the runs as "the range of idealised ecological responses to artificial upwelling rather than as definitive predictions".[^2]

## For a builder of models

The structure of the study carries over to models of any place. A process had been simplified in earlier models. When it was allowed to respond to the intervention, the answer could change sign. Where the evidence could not say which way the process responds, the authors ran every combination and reported the spread, and the spread is the finding.

The article is open under CC BY 4.0.[^1] The paper says the model code and selected output are on Zenodo at doi:10.5281/zenodo.23405565; that archive was not opened for this entry.[^2] The wiki's [Geoengineering](/terms/geoengineering/) page sets out the carbon removal branch and its shared experiments, [CDRMIP](/data-sources/climate/cdrmip/).
