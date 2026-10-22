---
about:
  label: CARS
  description: >-
    Open-source photogrammetry pipeline from CNES that builds digital surface
    models, rasters of ground and rooftop height, from two or more satellite
    images of the same place.
  tags:
    - photogrammetry
    - stereo
    - elevation
    - digital surface model
    - satellite
    - 3d
tool:
  form: open-source Python pipeline
  group: 3D cities and mapping
  homepage: 'https://cars.readthedocs.io/'
  licence: Apache-2.0
  cost: free; the satellite images it needs are not supplied
domains:
  - places
open:
  source: open
  data: partly
  api: unknown
  participation: open
  licence: Apache-2.0
  note: The Pléiades sample of Giza used in the quick start is under France's Etalab open licence.
provenance:
  origin: agent
  sources:
    - title: 'CNES/cars (README)'
      url: 'https://github.com/CNES/cars'
    - title: 'CARS, a satellite multi view stereo pipeline — CARS Documentation'
      url: 'https://cars.readthedocs.io/en/stable/'
    - title: 'Technical Foundations — CARS Documentation'
      url: 'https://cars.readthedocs.io/en/stable/technical_foundations/index.html'
    - title: 'Installation — CARS Documentation'
      url: 'https://cars.readthedocs.io/en/stable/installation.html'
    - title: 'Sensor examples — CARS Documentation'
      url: 'https://cars.readthedocs.io/en/stable/sensor_examples/index.html'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Two eyes judge depth from how far a thing shifts between them, and two satellite images taken from different angles do the same for the ground. From such pairs CARS builds a digital surface model, a raster grid in which each cell holds the height of the surface seen from above. A grid of heights is not a full 3D mesh, so it is often called 2.5D.

CNES maintains it on GitHub. It is the core of the 3D image processing chain for the CO3D satellite mission, and the AI4GEO and Evoland projects use it too. It handles large production runs on a computing cluster and also runs on a personal computer. The current pipeline is described in a 2026 paper in the ISPRS Archives by D. Youssefi and colleagues. Release 1.3.0 came out in October 2026.

The work goes in four steps. First the images are resampled so that a point can move only along one line between them, and the search for a match becomes one-dimensional. Matching then finds each pixel's partner in the other image. Crossing the two lines of sight places the point in space, with a longitude, latitude and altitude. Last, every point is projected onto a grid of heights and colours. Any image GDAL can read will do, as long as it comes with RPC coefficients, a compact formula linking image pixels to ground positions. Example setups exist for Pléiades, SPOT 6 and 7, Pléiades Neo and Maxar WorldView.

Matching can fail on moving objects such as vehicles, in shadows, where one viewpoint is blocked, and on surfaces with too little texture. Installing takes `pip install cars` on Linux or the `cnes/cars` Docker image. The quick start runs on a free Pléiades sample of the pyramids at Giza.

For a model of a city or a valley, CARS gives the height of the ground and what stands on it from the stereo images the user brings. The code is under the Apache 2.0 licence.
