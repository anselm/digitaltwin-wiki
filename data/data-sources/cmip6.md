---
about:
  label: CMIP6
  description: >-
    The world's climate models run through common experiments of past and
    future climate, with the output shared under CC BY 4.0 through the Earth
    System Grid Federation.
  aliases:
    - Coupled Model Intercomparison Project Phase 6
    - CMIP
    - CMIP7
  tags:
    - climate projections
    - climate models
    - scenarios
    - netCDF
    - gridded
datasource:
  coverage: global, 1850 to near present in the historical runs, and future scenarios
  resolution: unknown (set by each model)
  cadence: a completed phase of coordinated runs; datasets are versioned and corrections logged in an errata service; CMIP7 under way
  access: Earth System Grid Federation search portals and search API; free; an ESGF account for Globus bulk downloads
  format: netCDF, one variable per file, following the CF conventions
  homepage: 'https://wcrp-cmip.org/cmip-phases/cmip6/'
  cost: free; users must cite and acknowledge the models and WCRP
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  licence: CC BY 4.0
domains:
  - climate
relations:
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'CMIP Phase 6 (CMIP6), WCRP CMIP (Wayback copy of 22 September 2026)'
      url: 'https://web.archive.org/web/20260922195624/https://www.wcrp-cmip.org/cmip-phases/cmip6/'
    - title: 'CMIP6 Guide for data users (PCMDI)'
      url: 'https://pcmdi.llnl.gov/CMIP6/Guide/dataUsers.html'
    - title: 'CMIP6: Terms of Use (PCMDI)'
      url: 'https://pcmdi.llnl.gov/CMIP6/TermsOfUse/TermsOfUse6-2.html'
    - title: 'Federated ESGF Nodes'
      url: 'https://esgf.github.io/nodes.html'
    - title: 'Earth System Grid Federation'
      url: 'https://esgf.llnl.gov/'
    - title: 'Overview of the Coupled Model Intercomparison Project Phase 6 (CMIP6) experimental design and organization (Crossref record)'
      url: 'https://api.crossref.org/works/10.5194/gmd-9-1937-2016'
    - title: 'CMIP Phase 7 (CMIP7), WCRP CMIP (Wayback copy of 22 September 2026)'
      url: 'https://web.archive.org/web/20260922235114/https://www.wcrp-cmip.org/cmip-phases/cmip7/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; wcrp-cmip.org blocked automated reading,
    so its CMIP6 and CMIP7 pages were read as Wayback copies of 22 September
    2026; the 2016 overview paper was read as its abstract only
  status: draft
---
The Coupled Model Intercomparison Project (CMIP) is a project of the World Climate Research Programme (WCRP) that coordinates the design and sharing of simulations by the world's climate modelling groups, run through common experiments so their results can be compared.[^1,6] WCRP's Working Group on Coupled Modelling oversees the project.[^2] CMIP and its data have become essential to the IPCC and to other national and international climate assessments.[^1] CMIP6 is its sixth phase, and its design is set out by Eyring and co-authors in Geoscientific Model Development, 2016.[^1,6] On this site, the [IPCC](/organizations/ipcc/) entry covers the atlas that maps CMIP6 results region by region.

Every model in CMIP6 runs a small common set: the DECK (Diagnostic, Evaluation and Characterization of Klima) experiments, such as a steady pre-industrial climate and an abrupt quadrupling of carbon dioxide, and a historical simulation from 1850 to near the present.[^2,6] Beyond those, each group chooses which of the CMIP6-Endorsed Model Intercomparison Projects (MIPs) to join; WCRP lists 23, each addressing its own set of questions.[^1,2,6] The project set out three questions: how the Earth system responds to forcing, where the systematic biases of models come from and what they do, and how to assess future change given natural variability, predictability and uncertain scenarios.[^1,6] A data request defines which variables each experiment should report and at what time intervals.[^2]

The output is written as netCDF files, one variable per file, following the CF conventions, with names and metadata from shared controlled vocabularies that make the archive searchable by model, experiment and variable.[^2] It is held by the Earth System Grid Federation (ESGF), an international network of data nodes at modelling and data centres, searched as if it were one archive.[^2,5] As of May 2025 ESGF is between search systems and split into two domains: US nodes at Oak Ridge (the main site) and NERSC, and European and Australian nodes at CEDA, DKRZ and NCI.[^4] Not all data is copied to both, so a dataset missing in one may be found in the other.[^4] There is a search API, and Globus can move large volumes; Globus needs an ESGF account.[^2] Known errors are logged in an errata service.[^2]

In October 2022 all the modelling groups relaxed the licences on their CMIP6 output, and the standard licence is now CC BY 4.0; a licence page lists each model's terms and takes precedence over the licence written into each file's header.[^3] Users must cite the CMIP6 overview papers and each dataset they use, with its version, acknowledge WCRP, the modelling groups and ESGF, list the models used, and register papers in the CMIP6 publications database.[^2,3] The terms warn that the archive holds simulations subject to many kinds of error, in data handling, in the models and in how experiments were set up.[^3]

CMIP7 is the phase now under way.[^7] WCRP describes CMIP as moving to a more continuous approach, with small "fast track" sets of experiments added to the DECK.[^7] The first, the Assessment Fast Track, is meant to serve climate assessments including the IPCC's Seventh Assessment Report, and regional downscaling, impact modelling and climate services.[^7] Modelling centres have told WCRP when they plan to run their CMIP7 simulations and start publishing data, and WCRP keeps that in a table on its page.[^7] New scenarios for CMIP7 were published in 2026; WCRP says the highest of them is lower than CMIP6's highest, and the lowest no longer keeps warming below 1.5 °C.[^7]

CMIP output is the raw material for regional downscaling, impact modelling and climate services.[^7] A study of one place will usually start from one of those products, or from a summary such as the IPCC's atlas, rather than from the raw files. The spread between models is a guide to how sure a projection is; see [Weather and climate](/questions/weather-and-climate/).
