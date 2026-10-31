---
about:
  label: Cal-Adapt
  description: >-
    California's public climate data platform, funded by the California
    Energy Commission, serving the 3 km projections behind the State's Fifth
    Climate Change Assessment.
  aliases:
    - 'Cal-Adapt: Analytics Engine'
    - 'Cal-Adapt: Data Explorer'
    - climakitae
    - LOCA2-Hybrid
  tags:
    - California
    - climate projections
    - downscaling
    - LOCA2
    - WRF
    - global warming levels
    - Zarr
    - netCDF
datasource:
  coverage: California at 3 km; WRF runs also over the western US and a wider 45 km domain; historical runs from 1950 (LOCA2) or 1980 (WRF) to 2100
  resolution: 3 km grid (WRF also 9 km and 45 km); daily (LOCA2-Hybrid) or hourly (WRF)
  cadence: infrequent and irregular releases of new datasets
  access: free; public S3 bucket readable without an AWS account; web tools and download packages for everyone; the hosted JupyterHub is limited to California energy-sector partners
  format: Zarr and netCDF in the cloud archive; CSV and EPW for climate-profile packages; STAC and intake-esm catalogues
  homepage: 'https://cal-adapt.org/'
open:
  source: open
  data: open
  api: 'yes'
  participation: partly
  licence: CC BY 4.0 for the LOCA2 and WRF collections; varies by dataset
  note: >-
    The AWS Open Data registry lists the licence as varying by dataset; the
    LOCA2, WRF and Typical Meteorological Year collections state CC BY 4.0.
    The climakitae Python library is BSD-3-Clause on GitHub. The Cal-Adapt
    home page names a Cal-Adapt API; no documentation for it was found on the
    pages read.
domains:
  - climate
  - energy
relations:
  - predicate: needs
    target: data-sources/cmip6
    note: its projections are CMIP6 global models downscaled over California
  - predicate: needs
    target: data-sources/era5
    note: hosts ERA5 dynamically downscaled with WRF as a historical reconstruction
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'Cal-Adapt (home page)'
      url: 'https://cal-adapt.org/'
    - title: 'Climate Science & Data for California – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/'
    - title: 'Our Project – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/about/our-project.html'
    - title: 'Data Catalog – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/data-tools/data-catalog.html'
    - title: 'Data Access Methods – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/data-tools/access-methods.html'
    - title: 'WRF vs. LOCA2-Hybrid – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/scientific-guidance/WRF-vs-LOCA2-Hybrid.html'
    - title: 'Uncertainty – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/scientific-guidance/uncertainty/'
    - title: 'How to Cite – Cal-Adapt: Analytics Engine'
      url: 'https://analytics.cal-adapt.org/general-resources/how-to-cite.html'
    - title: 'Data Download Tool - Cal-Adapt'
      url: 'https://cal-adapt.org/dashboard/data-download-tool'
    - title: "Co-Produced Climate Data to Support California's Resilience Investments - Registry of Open Data on AWS"
      url: 'https://registry.opendata.aws/caladapt-coproduced-climate-data/'
    - title: 'LOCA2 (STAC collection, stac.cal-adapt.org)'
      url: 'https://stac.cal-adapt.org/collections/loca2'
    - title: 'WRF (STAC collection, stac.cal-adapt.org)'
      url: 'https://stac.cal-adapt.org/collections/wrf-ucla'
    - title: 'cal-adapt/climakitae (GitHub)'
      url: 'https://github.com/cal-adapt/climakitae'
    - title: "Development of Climate Projections for California and Identification of General Use Projections – California's Climate Change Assessment"
      url: 'https://climateassessment.ca.gov/2748/'
    - title: "Climate-Informed Energy Sector Adaptation Planning Web Application via Cal-Adapt – California's Climate Change Assessment"
      url: 'https://climateassessment.ca.gov/2752/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: >-
    Claude, from the sources listed, read on 30 October 2026; the STAC
    collections were read as JSON and the climakitae licence through the
    GitHub API. The pages give different figures for the archive's size
    (about 1 PB, 2,500 TB, about 2.5 PB); the entry gives two of them with
    their sources.
  status: draft
---
Eagle Rock Analytics and the Geospatial Innovation Facility at the University of California, Berkeley built Cal-Adapt, with support from Lawrence Berkeley National Laboratory; the California Energy Commission (CEC) funds it and oversees it.[^1] It serves the climate projections made for California's Fifth Climate Change Assessment, written up on this site as [California's Fifth Climate Change Assessment](/articles/california-fifth-climate-change-assessment/).[^1,2,14] An earlier version built on the Fourth Assessment's CMIP5 data stays online at cmip5.cal-adapt.org.[^1,8]

It comes in two parts.[^3] The Data Explorer at cal-adapt.org is a set of web maps and tools open to everyone, working on desktop computers only.[^1] They include a Climate Metrics Map with the Fosberg Fire Weather Index, a Data Download Tool, and tools in testing for extreme heat, heating and cooling degree days, and renewable energy.[^1] The Analytics Engine is for detailed analysis of the full data.[^3] Its hosted JupyterHub, a browser-based workspace of notebooks with cloud computing, is open only to California energy-sector partners because the CEC funds it, but the notebooks and code are public on GitHub and the data can be reached by anyone in other ways.[^3,5]

**What it holds.** The core is two sets of downscaled projections. Downscaling turns the coarse output of global climate models from [CMIP6](/data-sources/cmip6/) into fine grids for one region.[^14]
- WRF, dynamical downscaling run by UCLA with the Weather Research and Forecasting model: 8 global models at 45 km, 9 km over the western US electricity region and 3 km over California, hourly, mostly under the SSP3-7.0 high-emissions scenario with a few SSP2-4.5 and SSP5-8.5 runs.[^4,6,12] The same grids carry [ERA5](/data-sources/era5/) reanalysis downscaled with WRF, a reconstruction of past weather.[^4]
- LOCA2, hybrid-statistical downscaling by the Scripps Institution of Oceanography: 15 global models at 3 km over California, daily, bias-corrected, under SSP2-4.5, SSP3-7.0 and SSP5-8.5.[^4,11] The guidance pages call this dataset LOCA2-Hybrid.[^6]

The catalogue also lists:[^4]
- climate profiles, hourly years for engineering and planning at weather-station locations (Typical Meteorological Year and Standard Year);
- about 15,000 historical weather stations across the western US, 1980 to 2022;
- hourly sea level projections for 13 tide stations on the coast and in San Francisco Bay, 1950 to 2100;
- daily hydrology from the VIC and Noah-MP models, driven by a subset of the projections;
- monthly counts of solar and wind "resource drought" days. The WRF and LOCA2 collections run from 1980 and 1950 respectively to 2100.[^11,12] The Assessment's own project page describes the WRF projections as more than 30 variables from eight models under one scenario, and the hybrid set as daily values of key variables for many models under three scenarios.[^14]

**Which to use.** Cal-Adapt's guidance says LOCA2-Hybrid suits most applications that need daily data inside California, because it samples many more models, ensemble members and scenarios.[^6] WRF suits work that needs hourly data, the wider western domain, more variables, or variables that stay physically consistent with each other, such as a dew point that never exceeds air temperature.[^6] It advises against merging the two into one ensemble without expert processing, since they were bias-corrected differently and some model runs appear in both.[^6] For WRF it recommends five models that were bias-corrected before downscaling.[^6] Another page sets out the three sources of uncertainty in projections (model differences, emissions scenario and natural variability) and says differences between models dominate over the 10 to 40 year horizon of most infrastructure decisions.[^7] Projections can be pulled by global warming level, a set amount of global warming, as well as by date; the Data Download Tool offers levels of 1.2, 1.5, 2.0 and 2.5 °C above 1850 to 1900.[^5,9]

**Getting the data.** The projections are free, in a public Amazon S3 bucket called cadcat listed in the AWS Registry of Open Data, readable without an AWS account.[^5,10] They come as cloud-optimised Zarr stores and netCDF files, catalogued in a STAC browser and an intake-esm catalogue, and can be opened directly with Python's xarray, copied with the AWS command line, or, for monthly or warming-level data, loaded in QGIS 3.40.10 or later.[^4,5] The climakitae Python library, open source under the BSD-3-Clause licence, adds subsetting by area and time, warming levels, heat indices and extreme-value analysis, and exports netCDF, CSV and Zarr.[^5,13] The Data Download Tool packages smaller pieces, such as climate profiles in EPW and CSV and LOCA2 data aggregated by county.[^9] The LOCA2 and WRF collections are licensed CC BY 4.0, while the AWS registry says licences vary by dataset.[^10,11,12] Cal-Adapt archives its formal outputs on Zenodo with DOIs and asks users to cite the specific version of climakitae they used.[^8]

Size is the main practical limit. The access guide says the bucket holds nearly a petabyte, one hourly 3 km WRF variable for one model and scenario is about 219 GB, and the whole LOCA2 netCDF store is 12.7 TB.[^5] The Assessment's page on the platform's upgrade puts it at 2,500 terabytes, a 250-fold increase in data volume.[^15] The library is changing: its older get_data() interface is being retired.[^2,5]

For someone modelling a California watershed, city or coast, Cal-Adapt is where the State's own projections can be cut to the study area, at the same grid, scenarios and warming levels the Fifth Assessment used, so local results line up with the State's. A model that runs on hourly weather can take WRF fields or a climate profile for the nearest station; a study of how often an extreme comes round can take the wider spread of LOCA2-Hybrid models.[^6]
