---
about:
  label: Google Earth Engine
  description: >-
    Google's cloud platform for analysing satellite imagery and map data from
    its own catalogue, through a browser code editor or Python; free for
    noncommercial use within quotas, paid otherwise.
  tags:
    - satellite imagery
    - remote sensing
    - land cover
    - Python
    - JavaScript
    - cloud
tool:
  form: hosted analysis platform with JavaScript and Python APIs
  group: Earth observation and AI
  homepage: 'https://earthengine.google.com/'
  licence: 'client library Apache-2.0; the service is Google''s'
  cost: >-
    free for noncommercial use within monthly compute quotas; commercial use
    billed by usage, with plans from $500 a month
open:
  source: partly
  data: partly
  api: yes
  participation: closed
  licence: Apache-2.0
  note: The Python and JavaScript client libraries are open source; the platform that runs the analysis is not.
domains:
  - places
  - ecology
  - water
relations:
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: 'Google Earth Engine'
      url: 'https://earthengine.google.com/'
    - title: 'FAQ – Google Earth Engine'
      url: 'https://earthengine.google.com/faq/'
    - title: 'About Google Earth Engine'
      url: 'https://developers.google.com/earth-engine/guides'
    - title: 'Earth Engine Data Catalog'
      url: 'https://developers.google.com/earth-engine/datasets'
    - title: 'Earth Engine Code Editor'
      url: 'https://developers.google.com/earth-engine/guides/playground'
    - title: 'Python Installation'
      url: 'https://developers.google.com/earth-engine/guides/python_install'
    - title: 'Noncommercial – Google Earth Engine'
      url: 'https://earthengine.google.com/noncommercial/'
    - title: 'Earth Engine Noncommercial Tiers'
      url: 'https://developers.google.com/earth-engine/guides/noncommercial_tiers'
    - title: 'Google Earth Engine pricing'
      url: 'https://cloud.google.com/earth-engine/pricing'
    - title: 'google/earthengine-api (GitHub)'
      url: 'https://github.com/google/earthengine-api'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Google Earth Engine is a Google Cloud product that pairs a large catalogue of satellite imagery and geospatial datasets with Google's computing, so an analysis runs on Google's servers instead of on the user's own machine.[^3] Google describes its users as researchers, nonprofits, educators and government agencies, who use it to detect changes, map trends and measure differences on the Earth's surface.[^1,2] The paper to cite is Gorelick and co-authors, "Google Earth Engine: Planetary-scale geospatial analysis for everyone", in Remote Sensing of Environment, 2017.[^2]

The public catalogue holds more than eighty petabytes of data and is updated and expanded daily.[^1] Google's pages put its reach back in time at more than thirty years on the home page and more than forty years in the catalogue and FAQ.[^1,2,4] It includes the whole USGS and NASA Landsat archive, which has imaged the Earth since 1972 and now covers the surface at 30-metre resolution about every two weeks.[^2,4] Alongside it are daily MODIS imagery going back to 1999 and Sentinel radar and optical imagery.[^4] There is US aerial photography at one metre (NAIP) and global elevation at 30 metres (SRTM).[^4] Land cover maps include Dynamic World and ESA WorldCover.[^4] Weather and climate data run from forecasts through reanalysis to downscaled climate projections.[^4] The Satellite Embedding Dataset, built with Google's [AlphaEarth Foundations](/engines/alphaearth-prithvi/) model, packs a year of data from several sources into every 10-metre pixel.[^1] Users can upload their own raster and vector data, such as GeoTIFFs and shapefiles.[^2]

There are two ways to work. The Code Editor is a web page for writing JavaScript, with a map, a console, a task list, drawing tools for marking areas, and a link button to share a script.[^5] The Python client library, `earthengine-api`, is already installed in Google Colab and otherwise installs with pip or conda; it has to be authenticated and tied to a Google Cloud project before use.[^6] Work can run interactively for quick looks or as batch jobs for large ones.[^3] Results can be exported to Google Drive or Cloud Storage, downloaded into Python's data tools, or published as small web apps.[^3] Machine-learning tools for classification, regression and image segmentation are built in.[^3] Google says the scripts a user writes and the results of the analysis belong to the user.[^2] The client libraries are open source under Apache-2.0; the processing itself happens on Google's side.[^5,10]

Access starts by registering a Google Cloud project.[^2] It is free for noncommercial use by nonprofits, by students and staff at schools and universities for research or teaching, by news organisations, by trainers and trainees during a course, and by individuals.[^7] A government agency gets it free if it is in a UN Least Developed Country, is a recognised Indigenous government, or is doing scholarly research.[^7] Government work that is maintained on an ongoing basis needs a commercial licence.[^7] Free users may not use it for paid fee-for-service work.[^7] Since 27 April 2026 Google has been rolling out a monthly compute quota for each noncommercial project, counted in EECU-hours (an hour of one Earth Engine compute unit, Google's measure of processing power).[^8] The default Community tier allows 150 a month.[^8] The Contributor tier allows 1,000 and needs a billing account, though noncommercial use is not charged.[^8] The Partner tier allows 100,000 and is by application, for climate and nature work.[^8] Past the quota, work still runs but more slowly, and noncommercial status has to be reverified every year.[^8] Commercial use can be pay-as-you-go on the Limited plan, or a monthly plan: Basic at $500 and Professional at $2,000, each with some compute and storage included, and Premium priced on request.[^9] Compute beyond that costs $0.40 per EECU-hour, falling to $0.28 and $0.16 at higher monthly volumes.[^9]

For someone modelling a place, Earth Engine gets the ground under the model without downloading whole archives.[^3] Land cover, elevation and decades of imagery can be clipped to a watershed or county and exported as inputs.[^3,4] Whether that is free depends on who is doing it and why: a nonprofit's or a student's noncommercial project qualifies, while a government agency running it as an ongoing service needs a commercial licence.[^7]
