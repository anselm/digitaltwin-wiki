---
about:
  label: CESM
  description: >-
    NCAR's community Earth system model; its whole-atmosphere option WACCM
    carries stratospheric chemistry, which made it the model behind the GLENS
    and ARISE-SAI aerosol injection ensembles.
  aliases:
    - Community Earth System Model
    - CESM2
    - WACCM
    - Whole Atmosphere Community Climate Model
  tags:
    - climate model
    - Earth system model
    - stratosphere
    - geoengineering
    - stratospheric aerosol injection
    - CMIP6
    - Fortran
tool:
  tier: 2
  form: open-source Earth system model (Fortran, run on supercomputers)
  group: Weather and climate
  homepage: 'https://www.cesm.ucar.edu/'
  licence: 'UCAR copyright notice with a warranty disclaimer; bundled components under their own licences (LGPL-3.0 for CISM, NCSA for ESMF)'
  cost: free
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: 'UCAR copyright notice; no single named licence for the whole model'
domains:
  - climate
relations:
  - predicate: alternative_to
    target: engines/e3sm
  - predicate: cites
    target: terms/geoengineering
  - predicate: cites
    target: data-sources/geomip
  - predicate: cites
    target: data-sources/cmip6
  - predicate: answers
    target: questions/weather-and-climate
  - predicate: answers
    target: questions/cooling-the-planet
provenance:
  origin: agent
  sources:
    - title: 'Community Earth System Model (CESM), home page'
      url: 'https://www.cesm.ucar.edu/'
    - title: 'CESM Models'
      url: 'https://www.cesm.ucar.edu/models'
    - title: 'ESCOMP/CESM (README)'
      url: 'https://github.com/ESCOMP/CESM'
    - title: 'ESCOMP/CESM LICENSE.txt'
      url: 'https://raw.githubusercontent.com/ESCOMP/CESM/master/LICENSE.txt'
    - title: 'Community Earth System Model 3 (CESM3): Plans, progress, timelines (18 November 2025)'
      url: 'https://www.cesm.ucar.edu/news/community-earth-system-model-3-cesm3-plans-progress-timelines'
    - title: 'CESM October 2026 Newsletter Issue'
      url: 'https://www.cesm.ucar.edu/news/newsletter/2026/september'
    - title: 'ESCOMP/CESM releases'
      url: 'https://github.com/ESCOMP/CESM/releases'
    - title: 'The Community Earth System Model Version 2 (CESM2) (Danabasoglu et al., Journal of Advances in Modeling Earth Systems 12, 2020), Crossref record'
      url: 'https://api.crossref.org/works/10.1029/2019MS001916'
    - title: 'The Whole Atmosphere Community Climate Model Version 6 (WACCM6) (Gettelman et al., Journal of Geophysical Research: Atmospheres 124, 12380-12403, 2019), Crossref record'
      url: 'https://api.crossref.org/works/10.1029/2019JD030943'
    - title: 'Geoengineering Large Ensemble Project (GLENS), CESM community project page'
      url: 'https://www.cesm.ucar.edu/community-projects/glens'
    - title: 'Assessing Responses and Impacts of Solar intervention on the Earth system with Stratospheric Aerosol Injection (ARISE-SAI), CESM community project page'
      url: 'https://www.cesm.ucar.edu/community-projects/arise-sai'
    - title: 'ESGF search at CEDA, CMIP6 datasets with activity GeoMIP (queried 8 November 2026)'
      url: 'https://esgf.ceda.ac.uk/esg-search/search?project=CMIP6&activity_id=GeoMIP&type=Dataset&limit=0&facets=experiment_id,source_id'
    - title: 'CESM Simpler Models'
      url: 'https://www.cesm.ucar.edu/models/simpler-models'
    - title: 'CESM Whole Atmosphere Working Group'
      url: 'https://www.cesm.ucar.edu/working-groups/whole-atmosphere'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the 2019 and 2020 papers were read as
    their abstracts only, and the release dates of the CESM3 beta tags were
    read through the GitHub API
  status: draft
---
The Community Earth System Model (CESM) is a fully coupled global Earth system model developed with the research community and administered by the Climate and Global Dynamics Laboratory at NSF NCAR.[^1] The project is supported primarily by the National Science Foundation, and its chief scientist is David Lawrence.[^1] It simulates the Earth's past, present and future states with atmosphere, ocean, ice, land surface and carbon cycle components.[^1] Parts of the code come from outside NCAR. The licence file records that the CIME infrastructure is copyrighted jointly with Sandia and Argonne, and the FATES vegetation model with the US Department of Energy and the University of California.[^4]

## CESM2

The current production release is CESM 2.1.5; CESM 2.2.2 is the development release, and the project says the 2.2 series is not scientifically supported, so science should continue to use 2.1.[^2] CESM2 was described by Danabasoglu and co-authors in 2020.[^8] They evaluated it at 1° resolution with two atmospheres, a low-top one reaching 40 km and a high-top one reaching 130 km.[^8] Its equilibrium climate sensitivity of 5.1 to 5.3 °C is higher than CESM1's, mainly because of changes to cloud microphysics and boundary layer parameters.[^8] Its output went to [CMIP6](/data-sources/cmip6/).[^8] The component models are CAM 6.0 for the atmosphere, CLM 5.0 for land, CISM 2.1 for land ice, POP for the ocean and CICE for sea ice.[^2]

## WACCM

The Whole Atmosphere Community Climate Model (WACCM) is a configuration of CAM.[^2,10] It spans the range of altitude from the Earth's surface to the thermosphere, and its WACCM6 configurations use CAM6 physics in the lower atmosphere.[^14] Gettelman and 23 co-authors described WACCM6 in 2019 as a major update with improved physical, chemical and aerosol parameterizations.[^9] It reproduces the quasi-biennial oscillation, stratospheric sudden warmings and the evolution of Southern Hemisphere springtime ozone depletion over the twentieth century, and the authors attribute its improved high-latitude surface climate to the extended vertical domain and expanded aerosol chemistry.[^9] Both of NCAR's large ensembles of [stratospheric aerosol injection](/terms/geoengineering/) were run with WACCM as the atmosphere.[^10,11]

## Geoengineering ensembles

The Geoengineering Large Ensemble (GLENS) used CESM1 with WACCM as its atmosphere.[^10] It ran twenty members from 2020 to 2099 under the RCP8.5 greenhouse gas pathway.[^10] A feedback control strategy set annual sulfur injections at 30° N, 30° S, 15° N and 15° S so as to hold global mean surface temperature, and the interhemispheric and equator-to-pole gradients, at their 2020 values.[^10] A twenty-member control covers 2010 to 2030.[^10] The reference paper is Tilmes and co-authors in the Bulletin of the American Meteorological Society, 2018, and the data are available to the community under DOI 10.5065/3JCR-GC24.[^10]

ARISE-SAI (Assessing Responses and Impacts of Solar intervention on the Earth system with Stratospheric Aerosol Injection) used CESM2 with WACCM6.[^11] Its main set, ARISE-SAI-1.5, begins injection in 2035 under the SSP2-4.5 scenario, at a midpoint altitude of 21.6 km and at 15° S, 15° N, 30° S and 30° N.[^11] The same kind of controller as in GLENS aims to keep global mean surface air temperature near 1.5 °C above the preindustrial value.[^11] Two further sets vary the design: one delays the start to 2045, and one starting in 2034 aims at 1.0 °C; a ten-member SSP2-4.5 reference set has no intervention.[^11] Output is NetCDF, one variable per file, with monthly CMIP6-style fields for the atmosphere, land, ocean and sea ice and higher-frequency atmospheric output; it is held at the NSF NCAR Geoscience Data Exchange and in the AWS Open Data registry.[^11] The overview paper is Richter and co-authors in Geoscientific Model Development, 2022; the project was supported by NSF NCAR and by SilverLining's Safe Climate Research Initiative, and computed on the Cheyenne supercomputer.[^11]

CESM2-WACCM is also one of the eight models with [GeoMIP](/data-sources/geomip/) output in the CMIP6 archive: on 8 November 2026 the CEDA index of the Earth System Grid Federation listed its datasets for the G1, G6solar, G6sulfur and G7cirrus experiments.[^12]

## Code, licence and running

The code is on GitHub under the ESCOMP organisation. The CESM repository holds the tools that manage the component models, which are listed in its `.gitmodules`: a user clones it, checks out a tag and runs `git-fleximod` to fetch the components and the CIME infrastructure.[^3] Tags are coordinated by the software engineering group at NCAR.[^3] Building needs a Unix-like system, Python 3.8 or later, Perl 5, Fortran and C compilers, LAPACK and BLAS, NetCDF built with the same compiler and a working MPI library.[^3] The licence file opens with a 2018 copyright notice from the University Corporation for Atmospheric Research and a warranty disclaimer, and names no licence for the model as a whole.[^4] It then gives the terms of bundled components: ESMF is under the University of Illinois/NCSA licence, CISM under the GNU Lesser General Public License v3, and POP2 and CICE are copyrighted by Los Alamos National Security.[^4]

CESM is a supercomputer model, but from CESM 2.0 onward the project also releases and supports simpler configurations such as aquaplanets, dry and moist Held-Suarez atmospheres, radiative-convective equilibrium and a single-column atmosphere.[^13] A Jupyter tool, visualCaseGen, sets up idealised coupled cases.[^13] The CESM3 plans also list support for cloud and Docker containers.[^5]

## CESM3

NCAR published its plans for CESM3 on 18 November 2025, with a public release targeted for spring 2026 and timing that depends partly on updated CMIP7 forcings; CESM3 is intended to be the model NCAR uses for the CMIP7 DECK and Fast Track simulations.[^5] The atmosphere moves from the finite-volume dynamical core to spectral elements at a nominal 1° with a model top near 80 km.[^5] PUMAS replaces the MG microphysics to fix a bug that likely caused CESM2's large climate sensitivity.[^5] MOM6 replaces POP, whose development was discontinued, on a grid of about two thirds of a degree.[^5] CICE6 replaces the earlier sea ice model and calls Icepack for column physics, and WACCM and WACCM-X adopt the spectral element core.[^5] The driver and coupler move to ESMF with CMEPS and CDEPS.[^5] Runs at 3.75 km and regionally refined grids are supported.[^5] The October 2026 newsletter says NCAR is preparing to kick off the formal CESM3 preindustrial control run, so the model was not yet released at that point; the latest tag on GitHub, cesm3_0_beta10, is from 24 September 2026.[^6,7] As of 8 November 2026 the spring release date had passed without a release.

For a model of one place, CESM supplies boundary conditions and scenarios. The GLENS and ARISE output is what regional studies of a geoengineered climate start from.[^10,11] The Department of Energy's [E3SM](/engines/e3sm/) is the other large US Earth system model. See [Weather and climate](/questions/weather-and-climate/).
