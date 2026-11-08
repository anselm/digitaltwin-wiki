---
about:
  label: GeoMIP
  description: >-
    Shared experiments in which the world's climate models simulate cooling
    the planet with stratospheric aerosols or brighter clouds; output sits in
    the CMIP archive.
  aliases:
    - Geoengineering Model Intercomparison Project
    - GeoMIP6
  tags:
    - geoengineering
    - solar radiation modification
    - stratospheric aerosol injection
    - marine cloud brightening
    - climate models
    - model intercomparison
    - netCDF
datasource:
  coverage: global; scenarios of solar radiation modification against CMIP baselines
  resolution: unknown (set by each model)
  cadence: a set of experiments for each CMIP phase; GeoMIP6 in CMIP6, new protocols for CMIP7 published September 2026
  access: CMIP6 GeoMIP output through the Earth System Grid Federation search portals and API; free
  format: netCDF (CMIP6 conventions)
  homepage: 'https://climate.envsci.rutgers.edu/GeoMIP/'
  cost: free
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
provenance:
  origin: agent
  sources:
    - title: 'The Geoengineering Model Intercomparison Project (GeoMIP), Rutgers University'
      url: 'https://climate.envsci.rutgers.edu/GeoMIP/'
    - title: 'The Geoengineering Model Intercomparison Project (GeoMIP) (Kravitz et al., Atmospheric Science Letters, 2011)'
      url: 'https://doi.org/10.1002/asl.316'
    - title: 'The Geoengineering Model Intercomparison Project Phase 6 (GeoMIP6): simulation design and preliminary results (Kravitz et al., Geoscientific Model Development 8, 3379, 2015)'
      url: 'https://doi.org/10.5194/gmd-8-3379-2015'
    - title: 'The Geoengineering Model Intercomparison Project (GeoMIP) contribution to CMIP7: description of new experimental protocols and preliminary results (Visioni et al., Geoscientific Model Development 19, 8469-8499, 2026)'
      url: 'https://doi.org/10.5194/gmd-19-8469-2026'
    - title: 'ESGF search at CEDA, CMIP6 datasets with activity GeoMIP (queried 8 November 2026)'
      url: 'https://esgf.ceda.ac.uk/esg-search/search?project=CMIP6&activity_id=GeoMIP&type=Dataset&limit=0&facets=experiment_id,source_id'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed; the GMD 2026 paper was read in full except its reference list'
  status: draft
---
GeoMIP asks the climate models that take part the same questions about deliberately cooling the planet, so that the answers can be compared.[^1] Its subject is solar radiation modification, also called radiation management: changing how much sunlight the Earth absorbs or how much heat escapes, by dimming the sun in a model, putting sulfate aerosols into the stratosphere, brightening marine clouds or thinning cirrus.[^1] It leaves out carbon dioxide removal, which has its own intercomparison, CDR-MIP.[^1] Its site says it neither endorses nor advocates testing or using geoengineering.[^1]

The project was described in 2011 by Ben Kravitz, Alan Robock and colleagues.[^2] For CMIP6 it set out a second round, GeoMIP6, which added questions about extreme events, geoengineering as one part of a wider response to climate change, and cirrus thinning. It also set up a testbed where a few models try a proposed experiment before it becomes a core one.[^3]

The CMIP6 output is in the same archive as the rest of CMIP6. On 8 November 2026 the CEDA index of the Earth System Grid Federation listed GeoMIP datasets from eight models (CESM2-WACCM, CNRM-ESM2-1, CanESM5, IPSL-CM6A-LR, MPI-ESM1-2-HR, MPI-ESM1-2-LR, NorESM2-LM and UKESM1-0-LL) for four experiments: G1, G6solar, G6sulfur and G7cirrus.[^5] Anyone can download them the same way as other [CMIP6](/data-sources/cmip6/) output.

The protocols for CMIP7 were published in September 2026, led by Daniele Visioni with 25 co-authors.[^4] They come in three groups: preparatory experiments to see how models respond, Tier 1 runs that every participating model should do, and Tier 2, a framework for exploring uncertainty that includes temporary overshoot and tipping elements.[^4] The four Tier 1 runs each hold global temperature near 1.5 °C above preindustrial:[^4]

- **G7-1.5K-SAI:** stratospheric aerosol injected at 30° N and 30° S, 21.5 km up, from 2035.
- **G7-1.5K-SAI-End:** the same, with injection stopped abruptly at the end of 2084 and the model run on for at least fifteen years, to see what follows.
- **G7-1.5K-HiLLA:** injection at 60° N and 60° S, lower down at 15 km, in spring and early summer.
- **G7-1.5K-MCB:** sea salt added over five midlatitude ocean regions to brighten clouds.

Modelling groups are invited to propose their own experiments built on the Tier 1 runs.[^4] The paper's own figure data and analysis code are on Zenodo and GitHub.[^4] GeoMIP holds a workshop each year, and anyone can join its mailing list.[^1,4]
