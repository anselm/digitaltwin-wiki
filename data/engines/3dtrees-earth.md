---
about:
  depiction: engines/3dtrees-earth.jpg
  label: 3Dtrees.earth
  description: >-
    Website from the University of Freiburg's GeoSense group, with GFZ and
    partner institutes, that collects laser scans of forests, segments them
    into individual trees and serves them for viewing and download.
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
    - title: 'Governance'
      url: 'https://3dtrees.earth/about/governance'
    - title: 'How we process your data'
      url: 'https://3dtrees.earth/docs/methods/processing'
    - title: 'Frequently Asked Questions'
      url: 'https://3dtrees.earth/docs/faq'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: >-
    Claude, from the sources listed; the site is a single-page app, so the
    pages were rendered in a headless browser to read them
  status: draft
---
It is developed at the Chair of Sensor-based Geoinformatics (GeoSense) at the University of Freiburg, with the university's Forest Growth and Dendroecology chair, Galaxy Europe and the GFZ Helmholtz Centre for Geosciences.[^2] Those four institutions form its governance board.[^2,3] Further partners include NIBIO, Fraunhofer IPM, NFDI4Earth and the Future Forest cluster.[^2] The team builds on its experience with deadtrees.earth.[^2]

The aim is a shared reference collection for the 3D structure of trees.[^2] A laser scanner on a tripod, a backpack or a drone can resolve a stand down to individual branches, but each survey produces a large file in its own format and conditions, and the files are hard to find or compare.[^2] The platform collects the scans in one place, with notes on how each was taken, and processes them all the same way.[^2]

Contributors upload LAS or LAZ files, standard formats for point clouds (the sets of 3D points a scanner records), from terrestrial, mobile or drone scanning.[^5] The platform stores the metadata and runs processing pipelines on Galaxy, including tree segmentation (separating the cloud into individual trees) and species identification.[^1,4] Results show as a point cloud in the browser, and datasets are packaged for download on request.[^1,4] A map lists the public datasets.[^1] On 19 October 2026 the home page counted 2,444 datasets from 733 contributors covering 15,408 hectares, including forest plots in Germany, Spain, Kenya and Canada.[^1] Viewing public datasets needs no account; uploading and downloading do.[^5]

Each dataset can be public, view-only or private.[^1,5] The project's goal is open, FAIR forest data (findable, accessible, interoperable and reusable).[^1] The platform is registered in re3data, a registry of research data repositories, under DOI 10.17616/R31NJO12.[^2] The July 2026 roadmap lists these as in progress or ahead:[^1]

- automatic DOIs for published datasets
- fine-grained sharing
- an audited reference release
- raster products such as canopy height
- programmatic data access[^1]

The team holds a quarterly open town hall[^3] and is preparing a first manuscript about the platform.[^1]
