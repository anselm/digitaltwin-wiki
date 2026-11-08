---
about:
  label: CDRMIP
  description: >-
    Shared experiments in which Earth system models take carbon dioxide out
    of the air, by direct removal, forests or ocean alkalinity, to see how far
    the climate reverses; output in the CMIP archive.
  aliases:
    - Carbon Dioxide Removal Model Intercomparison Project
    - CDR-MIP
  tags:
    - geoengineering
    - carbon dioxide removal
    - direct air capture
    - afforestation
    - ocean alkalinity enhancement
    - climate models
    - model intercomparison
    - netCDF
datasource:
  coverage: global; idealised removals and overshoot scenarios against CMIP6 baselines, some runs to 2300 or for thousands of years
  resolution: unknown (set by each model)
  cadence: a set of experiments for CMIP6; a second phase for CMIP7 in design
  access: CMIP6 CDRMIP output through the Earth System Grid Federation search portals and API; free
  format: netCDF (CMIP6 conventions)
  homepage: 'https://www.geomar.de/en/cdrmip'
  cost: free; the project asks users to offer co-authorship to the modelling group whose output they use
open:
  source: unknown
  data: open
  api: 'yes'
  participation: 'yes'
domains:
  - climate
relations:
  - predicate: part_of
    target: data-sources/cmip6
  - predicate: about
    target: terms/geoengineering
  - predicate: answers
    target: questions/cooling-the-planet
provenance:
  origin: agent
  sources:
    - title: 'The Carbon Dioxide Removal Model Intercomparison Project (CDRMIP): rationale and experimental protocol for CMIP6 (Keller et al., Geoscientific Model Development 11, 1133-1160, 2018)'
      url: 'https://doi.org/10.5194/gmd-11-1133-2018'
    - title: 'Carbon Dioxide Removal Model Intercomparison Project, project site (Wayback copy of 18 October 2025)'
      url: 'http://web.archive.org/web/20251018081435/https://cdrmip.carbondioxide-removal.eu/'
    - title: 'CDRMIP, GEOMAR Helmholtz Centre for Ocean Research Kiel'
      url: 'https://www.geomar.de/en/cdrmip'
    - title: 'CDRMIP: Experimental Design, GEOMAR Helmholtz Centre for Ocean Research Kiel'
      url: 'https://www.geomar.de/en/cdrmip/experimental-design'
    - title: 'ESGF search at CEDA, CMIP6 datasets with activity CDRMIP (queried 8 November 2026)'
      url: 'https://esgf.ceda.ac.uk/esg-search/search?project=CMIP6&activity_id=CDRMIP&type=Dataset&limit=0&facets=experiment_id,source_id&format=application%2Fsolr%2Bjson'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the 2018 paper was read in full from its
    PDF; the project's old address, cdrmip.carbondioxide-removal.eu, no longer
    served the project on 8 November 2026, so its page is cited from the
    Wayback copy that pointed to the GEOMAR site
  status: draft
---
CDRMIP is the model intercomparison for the other branch of [geoengineering](/terms/geoengineering/): taking carbon dioxide out of the atmosphere rather than reflecting sunlight, which [GeoMIP](/data-sources/geomip/) covers. The protocol paper of 2018, by David Keller and nine co-authors, gives the reason for the project: there was little consensus on the climate impacts of the proposed removal methods or on how much they would lower atmospheric CO2.[^1] Scenarios that stay well below 2 °C, and all that stay under 1.5 °C by 2100, require some form of removal.[^1] Its first set of experiments is formally part of [CMIP6](/data-sources/cmip6/).[^1] The project's site put its questions as climate reversibility, in the sense of using removal to bring a high future CO2 concentration back to a present-day or preindustrial level, and the efficacy, feedbacks, timescales and side effects of the different methods.[^2]

The project invites Earth system models, Earth system models of intermediate complexity and even box models, because no single class of model can answer all of its questions.[^1] Full Earth system models are suited mainly to the coming century because of their cost. The simpler models are asked to carry the pulse experiments on for a thousand years or more.[^1] Only models that meet the CMIP6 requirements take part in an official CMIP6 capacity.[^1]

## The experiments

The paper sets out six experiments, each made of several named simulations, in three tiers:[^1]

- **CDR-reversibility** (Tier 1): CO2 is prescribed to rise at 1 per cent a year to four times preindustrial, as in the standard CMIP 1pctCO2 run. It then falls at 1 per cent a year until it is back at 284.7 ppm, where it is held for as long as possible. The removal leg is the simulation 1pctCO2-cdr. The question is whether, and on what timescales, the climate reverses, and what role hysteresis plays.
- **CDR-pi-pulse** (Tier 1): 100 Gt of carbon is removed from a steady preindustrial atmosphere in a single time step (esm-pi-cdr-pulse), and in a paired run the same amount is added (esm-pi-CO2pulse), to compare the response to removal with the response to emission. Earth system models run on for at least 100 years, simpler models for 1,000 to 5,000.
- **CDR-yr2010-pulse** (Tier 3): the same pulses applied to a near present-day atmosphere already out of equilibrium.
- **CDR-overshoot** (Tier 2): the emissions-driven SSP5-3.4 overshoot scenario, in which emissions are high, then cut sharply and turn negative, run to 2300 (esm-ssp534-over) and, where resources allow, for another thousand years or more at 2300 forcing.
- **CDR-afforestation** (Tier 2): a long extension of a LUMIP experiment that combines the high-emissions SSP5-8.5 with land use from SSP1-2.6, which has much more afforestation and reforestation.
- **CDR-ocean-alk** (Tier 2): under SSP5-8.5, 0.14 Pmol of alkalinity a year is added to the ocean surface between 70° N and 60° S from 2020 (esm-ssp585-ocn-alk), with optional runs that stop the addition in 2070 (esm-ssp585-ocn-alk-stop) and extend the control (esm-ssp585ext).

Most of these perturbations are the opposite in sign to earlier CMIP experiments, in which CO2 was added. Whether the response to removal mirrors the response to addition is itself one of the questions.[^1]

## The data

Gridded output is netCDF written to the CMIP6 requirements for frequency and structure, so that the standard CMOR software can produce the files, at a resolution as close to each model's native grid as possible.[^1] It is distributed through the Earth System Grid Federation with DOIs; box-model output goes through the project site.[^1] The project's data policy asks anyone who uses a model's output to contact the modelling group and offer them the chance to contribute as authors, since the groups know their models and the intricacies of the runs.[^1] Licences for CMIP6 output are those of each model; see [CMIP6](/data-sources/cmip6/).

On 8 November 2026 the CEDA index of the Earth System Grid Federation listed 27,707 CMIP6 datasets under the activity CDRMIP.[^5] They come from thirteen models: ACCESS-ESM1-5, AWI-ESM-1-REcoM, CAS-ESM2-0, CESM2, CNRM-ESM2-1, CanESM5, CanESM5-CanOE, GFDL-ESM4, GISS-E2-1-G-CC, MIROC-ES2L, MPI-ESM1-2-LR, NorESM2-LM and UKESM1-0-LL.[^5] They cover eleven experiments: 1pctCO2-cdr, esm-1pctCO2, esm-pi-cdr-pulse, esm-pi-CO2pulse, esm-ssp534-over, esm-ssp585-ocn-alk, esm-ssp585-ocn-alk-stop, esm-ssp585ext, and three branches of the 1 per cent run at 750, 1,000 and 2,000 Pg of carbon emitted, named esm-1pct-brch-750PgC, -1000PgC and -2000PgC.[^5] The last three were not in the 2018 paper; the project's site lists ZECMIP beside its own pages, but which project those runs belong to is unknown here.[^2] Anyone can download them the same way as other CMIP6 output.

## The second phase

The project's own site now points to pages at GEOMAR in Kiel.[^2,3] Those pages describe a second phase in preparation for CMIP7, with three kinds of experiment:[^3,4]

- **Asymmetry**: how the Earth system responds to a removal of 300 Pg of carbon compared with an emission of the same size, at different climate states, built on the esm-flat10 runs.
- **Efficiency**: how much CO2 each activity-driven method removes under net zero, with bioenergy with carbon capture and storage, afforestation and reforestation, and ocean alkalinity enhancement in Tier 1 and other methods in Tier 3.
- **Scenarios**: activity-driven removal inside integrated assessment scenarios, rerunning ScenarioMIP's low-to-negative experiment with bioenergy with carbon capture and storage resolved in the Earth system model.

The first phase was initiated for and endorsed by CMIP6.[^4] Whether these CMIP7 runs have been published is unknown here.

For a study of one place, CDRMIP's runs answer a different question from the solar ones: not what a cooled stratosphere does locally, but how much of the change already made would come back if the carbon were removed, and how slowly. See [Cooling the planet](/questions/cooling-the-planet/).
