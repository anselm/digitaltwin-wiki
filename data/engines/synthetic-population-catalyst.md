---
about:
  label: Synthetic Population Catalyst (SPC)
  description: >-
    Open tool from The Alan Turing Institute that assembles a synthetic
    population of Great Britain for a chosen area, with each person's
    household, health, pay, daily activities and the venues they visit, in
    one file, with ready-made downloads by county.
  tags:
    - synthetic population
    - Great Britain
    - census
    - agent-based
    - epidemics
    - Rust
tool:
  form: open-source tool with pre-built regional data
  group: People and populations
  homepage: 'https://alan-turing-institute.github.io/uatk-spc/'
  licence: MIT
  cost: free
domains:
  - people
  - places
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: MIT
provenance:
  origin: agent
  sources:
    - title: 'Synthetic Population Catalyst'
      url: 'https://alan-turing-institute.github.io/uatk-spc/'
    - title: '1 Getting started – Synthetic Population Catalyst'
      url: 'https://alan-turing-institute.github.io/uatk-spc/using_getting_started.html'
    - title: '13 Data sources – Synthetic Population Catalyst'
      url: 'https://alan-turing-institute.github.io/uatk-spc/understanding_data_sources.html'
    - title: 'alan-turing-institute/uatk-spc (README)'
      url: 'https://github.com/alan-turing-institute/uatk-spc'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Synthetic Population Catalyst saves a researcher the work of joining many British datasets into one population for a model.[^1] You choose an area made of middle-layer census areas in England and Wales, or intermediate zones in Scotland.[^2] SPC produces a single file describing every synthetic resident: age, sex, ethnicity, socio-economic class, household and housing, health, pay, a typical day's activities, and the schools, shops and workplaces they go to.[^1,3] People are placed at the level of the census output area, about 150 households.[^2] The README describes the tool as covering England; the documentation now says Great Britain.[^1,4]

It was built at The Alan Turing Institute with funding from UKRI's Strategic Priorities Fund through an EPSRC grant, under the "Ecosystem of Digital Twins" and "Shocks and Resilience" themes.[^1] It grew out of DyME, a dynamic model of epidemics first written in R, whose set-up code was later ported to Rust as this separate tool.[^4] The makers name pandemic spread and segregation as the kind of models it is meant to feed.[^4] A paper describing it was published in Environment and Planning B.[^1]

You can start without running anything: pre-built files for areas of Great Britain can be downloaded and opened in a web explorer, and county-level population files are published for 2012, 2020, 2022, 2032 and 2039.[^2,3] The base data are mainly the 2011 census, the UK Time Use Survey 2014-15 and the health surveys of England, Wales and Scotland.[^3] The SPENSER microsimulation model spreads census people into synthetic households, and pay and body mass index are modelled on top.[^3] Outputs are in protocol buffer format, with export to CSV or JSON.[^1,4] For a custom area you build and run the tool yourself.[^2]

The README warns that synthetic data can carry the biases of its sources, add new ones, or smooth away real outliers, and points to the ONS ethical guidance on synthetic data.[^4] Each modelling module is validated separately.[^4] The population rests on the 2011 census, which the SPENSER model distributes and projects forward for the later years.[^3] The code is MIT-licensed; the last GitHub release is v2.1.0 from October 2023 and the last commit August 2026.[^4]
