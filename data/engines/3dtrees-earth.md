---
about:
  label: 3Dtrees.earth
  description: >-
    Open platform from the GeoSense group at the University of Freiburg, with
    GFZ and partner institutes, where researchers upload laser scans of
    forests, have them processed into segmented trees, inspect them in the
    browser and download them.
  tags:
    - forest
    - lidar
    - point cloud
    - trees
    - open data
    - research
tool:
  homepage: 'https://3dtrees.earth/'
  form: hosted platform
  group: Ecosystems and land
open:
  source: unknown
  data: partly
  api: unknown
  participation: open
  note: >-
    Contributors choose whether a dataset is public, view-only or private;
    public datasets can be browsed without an account and downloaded with
    one, and private downloads need the owner's approval. The site does not
    say what licence datasets carry. Documented programmatic access is on
    the roadmap, not yet offered.
domains:
  - ecology
provenance:
  origin: agent
  sources:
    - title: Explore your forests in 3D
      url: 'https://3dtrees.earth/'
    - title: 'About: An open platform for 3D forest scans'
      url: 'https://3dtrees.earth/about'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: >-
    Claude, from the sources listed; the site is a single-page app, so the
    pages were rendered in a headless browser to read them
  status: draft
---
3Dtrees.earth is a web platform for sharing and processing three-dimensional laser scans of forests. It is developed at the Chair of Sensor-based Geoinformatics (GeoSense) at the University of Freiburg, with the university's Forest Growth and Dendroecology chair, Galaxy Europe and the GFZ Helmholtz Centre for Geosciences; those institutions form its governance board. Further partners include NIBIO, Fraunhofer IPM, NFDI4Earth and the Future Forest cluster. The team says it builds on its experience with deadtrees.earth.

The aim is a shared reference collection for the 3D structure of trees. A scanner on a tripod, a backpack or a drone can resolve a stand to the level of individual branches, but each survey produces a large file in its own format and conditions, and nobody can easily find or compare them; the platform's answer is to collect the scans in one place with notes on how each was taken and to process them all the same way. Contributors upload LAS or LAZ files from terrestrial, mobile or drone scanning; the platform stores the metadata, runs processing pipelines on Galaxy (including tree segmentation and tree species identification), shows the result as a point cloud in the browser and packages datasets for download on request. A map lists the public datasets; on 19 October 2026 the home page counted 2,444 datasets from 733 contributors covering 15,408 hectares, from forest plots in Germany, Spain, Kenya, Canada and elsewhere. Public datasets can be viewed without an account; uploading and downloading need one.

The maker does not say whether the platform's own code is open, nor what licence datasets carry. Each dataset can be public, view-only or private, and the project describes its goal as open, FAIR forest data. The platform is registered in re3data under DOI 10.17616/R31NJO12. The roadmap, last updated July 2026, lists automatic DOIs for published datasets, fine-grained sharing, an audited reference release, raster products such as canopy height, and programmatic data access as work in progress or ahead. The team holds a quarterly open town hall and is preparing a first manuscript about the platform.

In this wiki's stack it is a data-and-processing layer for forest structure: a place to get tree-level point clouds that an ecosystem or fire model could use as input.
