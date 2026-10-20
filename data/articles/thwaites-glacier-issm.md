---
about:
  label: Sea-level contribution from Thwaites Glacier doubles in an observation-constrained ice-sheet model
  description: >-
    Paper in Nature Communications by Mattia Poinelli, Eric Rignot, Hélène
    Seroussi and colleagues that calibrates the ISSM ice-sheet model of
    Thwaites Glacier, West Antarctica, to observations from 1996 to 2023 and
    runs it forward to 2100.
  tags:
    - glacier
    - ice sheet
    - sea level
    - Antarctica
    - calibration
    - ISSM
article:
  url: 'https://doi.org/10.1038/s41467-026-77976-1'
  published: '2026-10-12'
  publisher: Nature Communications
  authors:
    - Mattia Poinelli
    - Eric Rignot
    - Hélène Seroussi
    - Joshua Cuzzone
    - Tyler Pelle
    - Eric Larour
domains:
  - climate
  - water
provenance:
  origin: agent
  sources:
    - title: Sea-level contribution from Thwaites Glacier doubles in an observation-constrained ice-sheet model
      url: 'https://www.nature.com/articles/s41467-026-77976-1'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the abstract, the results text, the data and code availability statements and the page metadata'
  status: draft
---

A paper in Nature Communications (published 12 October 2026) by Mattia Poinelli, Eric Rignot, Hélène Seroussi, Joshua Cuzzone, Tyler Pelle and Eric Larour, with authors at UCLA, the Jet Propulsion Laboratory, UC Irvine, Dartmouth and Scripps. It asks why ice-sheet models have struggled to reproduce the retreat of Thwaites Glacier in West Antarctica, and whether the answer lies at the grounding line, where ice stops resting on bedrock and starts to float.

Most models treat that line as a sharp boundary. The authors instead represent it as a grounding zone a few kilometres wide, inside which seawater gets beneath ice that is still grounded and melts it from below. They build this into the Ice-sheet and Sea-level System Model (ISSM), start it from a mid-1990s state, and calibrate it by a Bayesian approach against observed surface velocity, ice thickness and grounding-line positions from 1996 to 2023.

The abstract states that the observed retreat, thinning and acceleration over nearly three decades can only be reproduced when grounding zones are represented as 2-5 km wide regions, and that running the calibrated model forward gives detachment from stabilising seafloor ridges as early as 2038 and up to 30 ± 6 mm of global mean sea-level rise by 2100, roughly double earlier projections, without added climate warming.

What a reader can take from it: the ISSM model and the grounding-zone parameterisation are on GitHub and Zenodo, the code and model output to reproduce the runs are on Zenodo, and the velocity, elevation-change and grounding-line observations are each available through a cited reference. The article is open access under CC BY 4.0. Model runs without a grounding zone are four times less likely to reproduce the historical retreat than runs with one a few kilometres wide. It is a worked example of calibrating a place-scale physical model against a long observational record before using it to project.
