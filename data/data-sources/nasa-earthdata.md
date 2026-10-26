---
about:
  depiction: data-sources/nasa-earthdata.jpg
  depiction_credit: 'Smoke from wildland fires in Kalimantan, Indonesia, seen by VIIRS on NOAA-21, from the Earthdata Worldview Image of the Week. NASA.'
  label: NASA Earthdata
  description: >-
    NASA's portal to its Earth science archive: satellite, airborne, field
    and model data from its data centres, free for any use, downloaded with
    a free Earthdata Login.
  tags:
    - satellite data
    - remote sensing
    - Earth science
    - open data
    - archive
    - cloud
datasource:
  coverage: global
  resolution: varies by dataset
  cadence: continuous; near real-time products for some missions
  access: free; Earthdata Search, HTTPS download and S3 in AWS us-west-2; a free Earthdata Login is needed to download
  format: varies by dataset
  homepage: 'https://www.earthdata.nasa.gov/'
open:
  source: open
  data: open
  api: 'yes'
  participation: closed
  note: NASA Earth science data have been free and open for any purpose since 1994; a few datasets ask the user to accept a licence agreement first.
domains:
  - places
  - climate
  - water
  - ecology
relations:
  - predicate: alternative_to
    target: data-sources/copernicus-data-space
    note: NASA's archive against the European Union's
provenance:
  origin: agent
  sources:
    - title: 'Your Gateway to NASA Earth Observation Data | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/'
    - title: 'About the ESDS Program | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/about'
    - title: 'ESDIS Project | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/about/esdis'
    - title: 'Centers | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/centers'
    - title: 'Data and Information Guidance | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-information-policy'
    - title: 'Earthdata Login | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/data/earthdata-login'
    - title: 'Earthdata Search | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/data/tools/earthdata-search'
    - title: 'Earthdata Developer Portal | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/engage/open-data-services-software/earthdata-developer-portal'
    - title: 'Fires Causing Persistent Haze Across Southeast Asia | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/news/worldview-image-archive/fires-causing-persistent-haze-across-southeast-asia'
    - title: 'Guidelines for using NASA Images and Media'
      url: 'https://www.nasa.gov/nasa-brand-center/images-and-media/'
    - title: 'Data From SEDAC Are Available Again in Earthdata Search | NASA Earthdata'
      url: 'https://www.earthdata.nasa.gov/news/data-from-sedac-available-again-earthdata-search'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
NASA Earthdata is the website of NASA's Earth Science Data Systems program, which looks after the agency's Earth science data from processing through archiving to distribution.[^2,3] Behind it is the Earth Observing System Data and Information System (EOSDIS), run by the ESDIS Project at NASA's Goddard Space Flight Center.[^3] The data are held by Distributed Active Archive Centers (DAACs), each with its own speciality: the Alaska Satellite Facility in radar, the Global Hydrometeorology Resource Center in hazardous weather, and the Goddard Earth Sciences center in atmospheric composition, precipitation and climate, for example.[^4]

The archive holds satellite data, airborne and field measurements, near real-time data, model output, imagery and visualisations.[^3] NASA's pages give its size differently: more than 100 petabytes on the ESDIS page, more than 119 petabytes on the Earthdata Search page, and more than 178 petabytes in the program's 2025 figures.[^1,3,7] Earthdata Search covers more than 54,000 collections, and through it can also be found data from NOAA, the European Space Agency, Japan's JAXA and India's ISRO.[^7] Since June 2025 it also holds the more than 350 collections previously curated by [SEDAC](/data-sources/sedac/).[^11] The data are moving into Amazon's cloud, in the AWS us-west-2 region, where they can be read directly through S3, while ordinary HTTPS downloads still work.[^3]

NASA Earth science data have been free and open to all users for any purpose since 1994, with no period of exclusive access, and the source code of NASA's standard data products is published with them.[^2,5] Downloading needs an Earthdata Login, a free registration with a username, password and email address; browsing the sites does not.[^6] A few datasets also ask the user to sign a licence agreement in their Earthdata Login profile.[^7] Earthdata Search lets a user pick an area on a map and a time range, filter by instrument, resolution and format, subset some datasets before download, and subscribe to be told when new data arrive.[^7] Programs can use open APIs. The Common Metadata Repository (CMR) holds the catalogue records that Earthdata Search runs on, and GIBS serves full-resolution satellite imagery for maps.[^7,8] Topic pages and tools such as Worldview, the FIRMS fire maps and AppEEARS help with particular kinds of data.[^1]

For someone modelling a place, Earthdata is where to find NASA's records of that place's land surface, vegetation, oceans, atmosphere, and snow and ice, and where to download them once found.[^1,7] Earthdata Search finds the collections for an area and time span, and an Earthdata Login lets a script or a person fetch the files.[^6,7] The European counterpart is the [Copernicus Data Space](/data-sources/copernicus-data-space/).
