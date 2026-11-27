---
about:
  label: Copernicus Marine Service
  description: >-
    The European Union's free ocean data service, run by Mercator Ocean
    International: forecasts, reconstructions and observations of the
    global ocean and European seas.
  aliases:
    - CMEMS
    - Copernicus Marine Environment Monitoring Service
  tags:
    - ocean
    - currents
    - sea temperature
    - sea ice
    - ocean forecasts
    - reanalysis
datasource:
  coverage: global ocean, plus the Arctic, Baltic, North West Shelf, Iberia-Biscay-Ireland, Mediterranean and Black Sea
  resolution: varies by product; the global physics forecast and reanalysis are on a 1/12° grid (about 8 km) with 50 depth levels
  cadence: varies by product; the global physics forecast runs 10 days ahead and is updated daily; the global physics reanalysis runs from 1993
  access: free account; web catalogue and MyOcean viewer, the copernicusmarine toolbox (command line and Python) with no volume quotas, a STAC catalogue
  format: NetCDF, ARCO Zarr, CSV for some datasets
  homepage: 'https://marine.copernicus.eu/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: unknown
  licence: Copernicus Marine Service licence (free, royalty-free, redistribution and derived products allowed, with credit and DOIs)
domains:
  - water
  - climate
  - ecology
relations:
  - predicate: contributes_to
    target: twins/edito
    note: Mercator Ocean International runs the service and co-develops the European Digital Twin of the Ocean
  - predicate: answers
    target: questions/after-an-oil-spill
    note: ocean currents, surface and at depth, for trajectory and circulation models
provenance:
  origin: agent
  sources:
    - title: About | Copernicus Marine Service
      url: 'https://marine.copernicus.eu/about'
    - title: Service Commitments and License | CMEMS
      url: 'https://marine.copernicus.eu/user-corner/service-commitments-and-licence'
    - title: Copernicus Marine Toolbox - Introduction | Copernicus Marine Help Center
      url: 'https://help.marine.copernicus.eu/en/articles/7949409-copernicus-marine-toolbox-introduction'
    - title: Global Ocean Physics Analysis and Forecast (STAC metadata)
      url: 'https://stac.marine.copernicus.eu/metadata/GLOBAL_ANALYSISFORECAST_PHY_001_024/product.stac.json'
    - title: Global Ocean Physics Reanalysis (STAC metadata)
      url: 'https://stac.marine.copernicus.eu/metadata/GLOBAL_MULTIYEAR_PHY_001_030/product.stac.json'
    - title: Copernicus Marine Data Store (STAC catalogue)
      url: 'https://stac.marine.copernicus.eu/metadata/catalog.stac.json'
    - title: Copernicus Marine Service
      url: 'https://marine.copernicus.eu/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the data catalogue's product pages render
    by script, so two products were read through their STAC metadata
  status: draft
---
The Copernicus Marine Service is the ocean part of the European Union's Copernicus Earth observation programme.[^1] It is funded by the European Commission and run by Mercator Ocean International.[^1] Mercator is an ocean forecasting centre in Toulouse, owned by ten public research institutions and foundations, and also co-develops the European Digital Twin of the Ocean.[^1] It gives free, open information on the physical ocean, sea ice and ocean biogeochemistry (the chemistry and biology of the water).[^1]

The catalogue holds three kinds of product: forecasts, near-real-time model output and observations, and multi-year products, which are reanalyses (past ocean reconstructed by a model checked against observations) and reprocessed observations.[^2] They come from numerical models and from satellite and in situ observations, those taken in the water itself.[^3] They cover seven areas: the global ocean, the Arctic, the Baltic, the North West Shelf seas, the Iberia-Biscay-Ireland seas, the Mediterranean and the Black Sea.[^2] Its STAC catalogue, a standard machine-readable listing, held 316 products in October 2026.[^6] Two show the range. The Global Ocean Physics Analysis and Forecast gives ten-day forecasts of temperature, salinity, currents, sea level, mixed layer depth and sea ice, updated daily.[^4] Its grid is 1/12 of a degree, with 50 depth levels from the surface to 5,500 m.[^4] It adds hourly surface fields and a surface current product that includes the drift caused by waves and tides.[^4] The Global Ocean Physics Reanalysis, GLORYS12V1, reconstructs the same quantities on the same grid from 1993, by running the NEMO ocean model and correcting it with satellite and in situ observations.[^5] The service also publishes ocean monitoring indicators, for example of sea level, ocean heat, acidification, marine heatwaves and coral health.[^2] A yearly Ocean State Report assesses the state of the global ocean and European seas.[^2,7]

The service level agreement makes the products free of charge, with costs covered under the EU's Copernicus regulation, until the planned end of the current service on 30 June 2028.[^2] Access needs a free account.[^2,3] The licence allows internal copies, redistribution of products in their original form, and derived products for any purpose, as long as the Copernicus Marine Service is credited and each product's DOI cited.[^2] Data can be browsed in the MyOcean viewer and downloaded from the web catalogue.[^2] The copernicusmarine toolbox, used from the command line or Python, lists the catalogue, cuts out a chosen area, depth range and period as NetCDF or Zarr files, or fetches the original files, with no limits on volume.[^3]

The service names marine protection, climate monitoring, pollution tracking, maritime safety, sustainable use of marine resources and renewable ocean energy among its uses.[^1] For someone modelling a coast or a stretch of sea, it supplies the temperatures, salinity, currents and sea levels of the surrounding ocean, as forecasts ten days ahead or as a daily record back to 1993.[^4,5] The global grid is about 8 km across, and separate products cover the European regional seas.[^2,5]
