---
about:
  label: GLENS and ARISE-SAI
  description: >-
    Two NCAR ensembles that inject sulphur dioxide into the stratosphere of a
    climate model many times over, so the effect of the intervention can be
    told from the weather of any one run.
  aliases:
    - GLENS
    - ARISE-SAI
    - Stratospheric Aerosol Geoengineering Large Ensemble
    - Assessing Responses and Impacts of Solar climate intervention on the Earth system with Stratospheric Aerosol Injection
  tags:
    - geoengineering
    - solar radiation modification
    - stratospheric aerosol injection
    - climate models
    - large ensemble
    - CESM
    - netCDF
datasource:
  coverage: global; GLENS 2010 to 2099 under RCP8.5, ARISE-SAI-1.5 2035 to 2069 under SSP2-4.5
  resolution: 0.9° latitude by 1.25° longitude in the atmosphere, 70 levels
  cadence: completed sets of runs; monthly for every model component, with daily and sub-daily atmospheric output
  access: NSF NCAR Geoscience Data Exchange (sign-in for downloads); ARISE-SAI also as an AWS Open Data bucket with no account needed
  format: netCDF, time series with one variable per file
  homepage: 'https://www.cesm.ucar.edu/community-projects/arise-sai'
  cost: free; users are asked to cite the overview paper and the dataset DOIs
open:
  source: unknown
  data: open
  api: unknown
  participation: 'yes'
  licence: CC BY 4.0 (GLENS); UCAR terms of use (ARISE-SAI)
domains:
  - climate
relations:
  - predicate: about
    target: terms/geoengineering
  - predicate: answers
    target: questions/cooling-the-planet
  - predicate: cites
    target: data-sources/geomip
  - predicate: built_on
    target: engines/cesm
provenance:
  origin: agent
  sources:
    - title: 'Geoengineering Large Ensemble Project (GLENS), CESM community projects (NSF NCAR)'
      url: 'https://www.cesm.ucar.edu/community-projects/glens'
    - title: 'CESM1(WACCM) Stratospheric Aerosol Geoengineering Large Ensemble Project (Tilmes et al., Bulletin of the American Meteorological Society 99(11), 2361-2371, 2018, doi:10.1175/BAMS-D-17-0267.1), OSTI copy'
      url: 'https://www.osti.gov/biblio/1497049'
    - title: 'CESM1 Stratospheric Aerosol Geoengineering Large Ensemble project (GLENS), dataset d651064, NSF NCAR Geoscience Data Exchange (doi:10.5065/3JCR-GC24)'
      url: 'https://gdex.ucar.edu/datasets/d651064/'
    - title: 'Assessing Responses and Impacts of Solar intervention on the Earth system with Stratospheric Aerosol Injection (ARISE-SAI), CESM community projects (NSF NCAR)'
      url: 'https://www.cesm.ucar.edu/community-projects/arise-sai'
    - title: 'Assessing Responses and Impacts of Solar climate intervention on the Earth system with stratospheric aerosol injection (ARISE-SAI): protocol and initial results from the first simulations (Richter et al., Geoscientific Model Development 15, 8221-8243, 2022)'
      url: 'https://doi.org/10.5194/gmd-15-8221-2022'
    - title: 'ARISE-SAI-1.5, dataset d651059, NSF NCAR Geoscience Data Exchange (doi:10.5065/9kcn-9y79)'
      url: 'https://gdex.ucar.edu/datasets/d651059/'
    - title: 'Community Earth System Model v2 ARISE (CESM2 ARISE), Registry of Open Data on AWS'
      url: 'https://registry.opendata.aws/ncar-cesm2-arise/'
    - title: 'Listing of the ncar-cesm2-arise bucket, raw/ prefix (queried 8 November 2026)'
      url: 'https://ncar-cesm2-arise.s3.us-east-2.amazonaws.com/?delimiter=/&list-type=2&prefix=raw/'
    - title: 'Terms of use for UCAR data repositories'
      url: 'https://www.ucar.edu/terms-of-use/data'
    - title: 'Comparison of UKESM1 and CESM2 simulations using the same multi-target stratospheric aerosol injection strategy (Henry et al., Atmospheric Chemistry and Physics 23, 13369-13385, 2023)'
      url: 'https://doi.org/10.5194/acp-23-13369-2023'
    - title: 'UKESM1 ARISE-SAI climate simulations (Haywood, Jones and Dalvi, 2022), CEDA data catalogue record'
      url: 'https://catalogue.ceda.ac.uk/uuid/26b89d8d76bd40bfbaf9fedfa383e9cf'
    - title: 'Kicking the can down the road: understanding the effects of delaying the deployment of stratospheric aerosol injection (Brody et al., Environmental Research: Climate 3, 035011, 2024), Crossref record'
      url: 'https://api.crossref.org/works/10.1088/2752-5295/ad53f3'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the GLENS paper was read as the OSTI
    copy because the journal's site refused scripted reads, the Brody paper
    as its abstract only because the publisher's site put up a bot check, and
    the ARISE-SAI-1.5 record at the Geoscience Data Exchange carries no
    licence statement, so the licence given is the registry's and UCAR's
  status: draft
---
These are two sets of climate model runs from the National Center for Atmospheric Research in which sulphur dioxide is injected into the stratosphere to hold the planet's temperature down, the method the [Geoengineering](/terms/geoengineering/) term describes as stratospheric aerosol injection. Both use the [Community Earth System Model](/engines/cesm/) with the Whole Atmosphere Community Climate Model as its atmosphere, and both are large ensembles: the same experiment run many times from slightly different starting states.[^1,4] They are single-model studies, unlike [GeoMIP](/data-sources/geomip/), where many models run one protocol, and the ARISE protocol is written so that other models can repeat it.[^5]

## Why an ensemble

A single run of a climate model mixes the effect of the intervention with the model's own weather, the run of warm and cold years that would have happened anyway. Judging whether a regional change is significant and robust, and seeing the range of futures that forcing and internal variability could produce together, takes many members, the GLENS paper argues.[^2] Its twenty were "the amount possible with the available computer resources", enough for a more robust assessment of the regional response within the variability of the climate system.[^2] Each member starts from the atmospheric state of a different year between 2008 and 2012, with a round-off perturbation to air temperature. Land, sea ice and ocean start from the same state in every member, which samples atmospheric variability reasonably but undersamples the ocean.[^2] The ARISE protocol sets a minimum of three members and says more allow a more thorough evaluation of impacts on variability; NCAR ran ten.[^5]

## GLENS

The Stratospheric Aerosol Geoengineering Large Ensemble is twenty geoengineering runs from 2020 to 2099 and twenty control runs from 2010 to 2030, with CESM1(WACCM), all under the RCP8.5 high-emissions pathway.[^1,2] Three of the controls were continued to at least 2097, and only one of those to 2099, because the model became unstable late in the century under RCP8.5.[^2] The goal was to hold the global mean surface temperature, the interhemispheric temperature difference and the equator-to-pole gradient at their 2020 values.[^1,2] Sulphur dioxide is injected at 15° N and 15° S at 25 km and at 30° N and 30° S at 22.8 km, all at 180° longitude.[^2] The targets, derived from the first thirteen control members averaged over 2015 to 2025, were a global mean of 288.21 K, an interhemispheric difference of 0.59 K and an equator-to-pole gradient of minus 6.01 K.[^2] A feedback controller adjusts the injection at each location every year from the previous years' departures from these targets, separately for each member.[^1,2] Holding the climate at 2020 against RCP8.5 needed about 52 Tg of sulphur dioxide a year by the end of the century, roughly five times the sulphur that reached the stratosphere from Pinatubo in 1991.[^2] The response was close to linear, about 1 °C of cooling per 10 Tg a year.[^2] The setup is not meant as a realistic application; it is there to find the side effects and limits of the method in one model.[^2] The atmosphere runs on a 0.9° by 1.25° grid with 70 levels up to 140 km and interactive stratospheric chemistry; the whole set took 22.8 million core hours for 2,227 simulated years.[^2]

The output is dataset d651064 at the Geoscience Data Exchange: 608 TB of netCDF under CC BY 4.0. The atmosphere comes in monthly, daily, six-hourly and ten-day files, the ocean in monthly and daily files, and land, ice and river runoff monthly.[^3] NCAR asks that the 2018 paper and the dataset DOI, 10.5065/3JCR-GC24, be cited together.[^1]

## ARISE-SAI

ARISE-SAI is the later set with CESM2(WACCM6), written to be more relevant to policy than the earlier ensembles: a moderate emissions pathway, SSP2-4.5, and a start in 2035, when the model's global temperature passes 1.5 °C above preindustrial.[^4,5] The first set, ARISE-SAI-1.5, injects sulphur dioxide at about 21.5 km at the same four latitudes as GLENS, at 180° longitude, with the GLENS controller holding the global mean near 1.5 °C above preindustrial along with the two gradients.[^4,5] Ten members run from 2035 to 2069: about ten years of transition, then at least twenty years of quasi-equilibrium after the controller converges.[^5] Members six to ten start from the same states as one to five with a small temperature perturbation.[^5] Most of the injection falls at 15° S, rising from about 0.5 Tg a year in 2035 to 6 Tg in 2069; the controller puts very little at 30° N.[^5] A ten-member SSP2-4.5 ensemble without intervention is the reference: five members made for [CMIP6](/data-sources/cmip6/) running 2015 to 2100, and five more to 2069 with the extra output the ARISE runs have.[^4,5] The atmosphere's grid and vertical levels are as in GLENS.[^5]

Two further sets exist. ARISE-SAI-1.5-2045 starts injection in 2045; NCAR notes that its target was in fact 1.37 °C, a little below the name.[^4] Brody and colleagues compared the 2035 and 2045 starts and found the delayed start needed about 20 per cent more sulphur dioxide even after temperatures converged, while many surface differences in the following ten to twenty-five years were small.[^12] ARISE-SAI-1.0 starts in 2034 and aims at 1.0 °C above preindustrial.[^4] On 8 November 2026 the AWS bucket listed ten member directories for each of these two sets under its raw/ prefix; NCAR warns that both have duplicate time entries at the end of each year.[^4,8]

The ARISE-SAI-1.5 output is dataset d651059 at the Geoscience Data Exchange (DOI 10.5065/9kcn-9y79) and the reference ensemble is d651045 (DOI 10.26024/0cs0-ev98); NCAR asks that both DOIs and the 2022 paper be cited.[^4,6] Everything is netCDF time series with one variable per file: monthly means in the CMIP6 set of variables for atmosphere, land, ocean and sea ice, and daily, three-hourly and hourly atmospheric output, with three-dimensional fields on the model's 70 levels.[^4] The same data, with the 2045 and 1.0 sets, are in the AWS Open Data bucket ncar-cesm2-arise in region us-east-2, which can be listed and read without an AWS account.[^7] The registry gives UCAR's data terms as the licence. Those grant CC BY 4.0 on anything copyrightable and ask for the repository's citation format.[^7,9] A public analysis registry lets groups say what they are studying to avoid duplicate work.[^4]

## The same protocol in another model

The ARISE-SAI-1.5 protocol has been run in the UK Earth System Model. Henry and colleagues compared five UKESM1 members with the ten CESM2 members, both from 2035 under SSP2-4.5 with injection at 21.5 km at the four latitudes; UKESM1 runs to 2070.[^10] CESM2 reached its targets while UKESM1 kept considerable residual Arctic warming, which the authors attribute to feedbacks in UKESM1 that favour strong Arctic amplification, and tropical land precipitation differed between the models even under greenhouse gases alone.[^10] The UKESM1 runs are at the Centre for Environmental Data Analysis as netCDF in the CMIP6 conventions, with the activity set to ARISE and the experiment to arise-sai-1p5, under the Open Government Licence v3.[^11]

For a study of one place, the local effect of the intervention in this model is the difference between each ARISE member and its reference member over the same years, taken across all ten pairs. The spread between the ten is how far weather alone could move it. Where two models disagree, as UKESM1 and CESM2 do over the Arctic, that disagreement is part of the answer. See [Cooling the planet](/questions/cooling-the-planet/).
