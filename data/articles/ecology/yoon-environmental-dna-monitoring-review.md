---
about:
  label: 'Environmental DNA as a way to measure a place: a 2025 review'
  description: >-
    A review of 160 papers on reading the DNA that organisms leave in air,
    soil, groundwater and water, what it can detect, where it misleads, and
    how it might feed a model.
  tags:
    - environmental DNA
    - biodiversity
    - monitoring
    - wastewater
    - invasive species
    - metabarcoding
    - review
    - paper
article:
  tier: 3
  url: 'https://doi.org/10.3390/bios15080494'
  published: '2025-08-01'
  publisher: Biosensors (MDPI)
  authors:
    - Hyo Jik Yoon
    - Joo Hyeong Seo
    - Seung Hoon Shin
    - Mohamed A. A. Abdelhamid
    - Seung Pil Pack
domains:
  - ecology
  - water
relations:
  - predicate: cites
    target: twins/biodt
provenance:
  origin: agent
  sources:
    - title: 'Bioinformation and Monitoring Technology for Environmental DNA Analysis: A Review (Yoon, Seo, Shin, Abdelhamid and Pack, Biosensors 15 (8): 494, 2025; open full text at PubMed Central)'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12384077/'
    - title: 'Global Ocean Sampling Expedition (J. Craig Venter Institute)'
      url: 'https://www.jcvi.org/research/gos'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the two sources listed. Of the paper, the introduction, the sections on airborne DNA and wastewater, the future directions and the conclusions were read in full; the sections on soil, sediment, groundwater and other water bodies were not. Mike Liebhold sent the paper to Anselm, who made the comparison with the Venter expedition.'
  status: draft
---
Every organism sheds genetic material into its surroundings, in skin, waste and secretions. Environmental DNA, usually written eDNA, is that material recovered from a sample of water, soil, sediment or air without catching or seeing the organism.[^1] This review, by five researchers funded by the National Research Foundation of Korea, covers the methods and their uses in each of those settings. It draws on 160 references published between 1995 and 2025, most of them since 2016.[^1]

For someone modelling a place, eDNA is a way of measuring what lives there. A few litres of filtered water can be sequenced to list the species whose DNA is present, from bacteria to fish, in one pass; the method is called metabarcoding.[^1] The review gives its advantages over netting, trapping and diver surveys as sensitivity to rare and hard-to-catch species, lower cost, and little disturbance to the habitat.[^1]

## What it has been used for

- **Water.** The technique became established in the mid-2000s for detecting fish and amphibians at low density, and the review counts biodiversity assessment and the early detection of invasive species as its main uses in rivers, lakes and the sea.[^1]
- **Wastewater.** Sewage carries genetic material from a whole community. The review describes its use to follow SARS-CoV-2 and norovirus infection in near real time and to profile genes for antibiotic resistance.[^1]
- **Air.** DNA from plants, insects, birds and mammals has been recovered from air samples. The review also reports studies in which the mix of airborne microbes shifted with particulate pollution, nitrogen oxides and heavy metals, which some researchers propose as a biological indicator of air quality.[^1]
- **Soil, sediment and groundwater.** The abstract lists pollution assessment and the study of how microbes break down contaminants.[^1] This article did not read those sections.

## Where it misleads

The review is direct about the limits. DNA in the environment breaks down quickly under heat, ultraviolet light and microbial activity, so a sample reflects a short window of time.[^1] Contamination can enter at every step from the field to the laboratory.[^1] A detection shows that DNA was present, and "does not necessarily mean that the organism is alive or reproducing in that environment".[^1] False positives come from contamination or from DNA carried in from elsewhere, and false negatives from scarce or degraded DNA and inefficient extraction.[^1] In wastewater the method cannot tell a viable pathogen from a dead one.[^1] Sampling and laboratory practice still vary enough between studies that results are hard to compare, despite published standards.[^1]

## How it might feed a model

The authors recommend joining eDNA data to remote sensing, geographic information systems and ecological models, to give early warning of biodiversity loss, pollution events and disease.[^1] They report machine-learning work in that direction, including one study in which a neural network forecast changes in coastal microbial communities up to a month ahead.[^1] Portable sequencers, field PCR kits and automated samplers are described as moving the method toward continuous measurement, in the review's words "may soon support high-resolution environmental monitoring networks".[^1] These passages describe what is being tried. The review does not assess how well any of the forecasts held up, and it reports no appraisal of the quality of the studies it includes.

[BioDT](/twins/biodt/) included a prototype for choosing where to take the next eDNA sample, which is one place the wiki already records the method being tied to a model.

## An earlier survey at sea

The idea of sequencing whatever is in a sample, without first isolating an organism, was demonstrated at scale by the Sorcerer II Global Ocean Sampling Expedition. After a pilot in the Sargasso Sea in 2003, J. Craig Venter and a team from his institute sailed around the world from 2004 to 2006, covering 32,000 nautical miles and sampling sea water along the way.[^2] The institute says the first results put more than 7.7 million sequences into the public domain, the largest such dataset released up to then, and that the expedition yielded millions of new genes.[^2] Later voyages in 2007 and 2008 sampled both coasts of the United States, and expeditions in 2017 examined the microbes that colonise plastic debris.[^2] The two differ in purpose, on this article's reading. The expedition sequenced the microbial DNA in each sample to discover what exists. The monitoring the review describes returns to the same places to see what has changed, and repeated measurement of that kind is what a model can be checked against.
