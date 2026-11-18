---
about:
  label: SeaSketch
  description: >-
    Open-source web software for planning the use of the sea with the people
    who use it: shared maps, map surveys, and zones anyone can draw and have
    measured. From a lab at UC Santa Barbara.
  depiction: communication/seasketch.jpg
  depiction_credit: 'SeaSketch: the top of its front page, captured on 18 November 2026.'
  tags:
    - marine spatial planning
    - participatory mapping
    - surveys
    - protected areas
    - open source
tool:
  form: Collaborative planning application
  group: Playing
  homepage: 'https://www.seasketch.org/'
open:
  source: open
  data: unknown
  api: 'yes'
  participation: open
domains:
  - water
  - people
relations:
  - predicate: answers
    target: questions/combining-proposals
  - predicate: alternative_to
    target: communication/geodesignhub
provenance:
  origin: agent
  sources:
    - title: SeaSketch. The platform for Marine Spatial Planning
      url: 'https://www.seasketch.org/'
    - title: SeaSketch Documentation
      url: 'https://docs.seasketch.org/seasketch-documentation'
    - title: Is SeaSketch free? SeaSketch Documentation
      url: 'https://docs.seasketch.org/seasketch-documentation/other-information/is-seasketch-free'
    - title: Sketch Classes. SeaSketch Documentation
      url: 'https://docs.seasketch.org/seasketch-documentation/administrators-guide/sketch-classes'
    - title: Surveys. SeaSketch Documentation
      url: 'https://docs.seasketch.org/seasketch-documentation/administrators-guide/surveys'
    - title: Offline Support. SeaSketch Documentation
      url: 'https://docs.seasketch.org/seasketch-documentation/administrators-guide/offline-support'
    - title: 'seasketch/next. GitHub'
      url: 'https://github.com/seasketch/next'
    - title: 'seasketch/geoprocessing: Serverless geoprocessing system. GitHub'
      url: 'https://github.com/seasketch/geoprocessing'
    - title: 'SeaSketch helps stakeholders explore changes to MPAs. Sonia Fernandez, UC Santa Barbara news, 7 March 2025'
      url: 'https://news.ucsb.edu/2025/021790/seasketch-helps-stakeholders-explore-changes-mpas'
  created: '2026-11-18'
  reviewed: '2026-11-18'
  reviewed_by: 'Claude, from the sources listed; the documentation was read in part and the software was not used. Howard Silverman sent the site to Anselm.'
  status: draft
---
SeaSketch is web software for deciding, with the people affected, which parts of the sea are used for what. A government or a non-profit sets up a project for its waters, loads its maps, and invites fishers, tour operators, scientists and residents to mark where they use the sea and to draw the zones they would propose.[^1] Each drawn zone comes back with a report measuring it against the project's goals.[^1] It is a planning tool, not a simulator, and it is in this catalogue as a working, open example of putting a model's numbers in front of the people a plan will affect.

## The three parts

- **Map portal:** a project's vector and raster layers, hosted and styled in the browser, with access set by role. Ten gigabytes of storage are included.[^1]
- **Ocean use surveys:** a questionnaire in which some answers are shapes drawn on the map. A survey can be open to anyone or run by a facilitator, in several languages, and on a phone.[^1,5] Offline collection exists for surveys only and has to be switched on by the lab's developers.[^6]
- **Sketching and analysis:** a participant draws a polygon, such as a proposed protected area or an aquaculture zone, fills in its attributes, and receives a report. Sketches can be grouped into collections that are analysed as a whole plan, shared, and argued over in the project's discussion forum.[^1,4]

## What the analysis is

Two kinds of service attach to a class of sketch. A preprocessing service corrects the shape, for example by "erasing land from a polygon intended to overlap water" or by keeping a zone inside a country's exclusive economic zone.[^4] A geoprocessing service produces the report, "such as calculating the amount of overlap with seafloor habitats or human activities".[^4] The geoprocessing framework is a separate open project: small functions written in TypeScript and run on Amazon's Lambda service, which the project says costs close to nothing when idle, reading map data in formats that can be fetched in pieces over the web.[^8]

This wiki's reading: the analysis measures overlap. A drawn zone is laid over habitat, fishing and other layers, and the report says how much of each it covers and how far that goes toward a stated target. Nothing is stepped through time, so the tool does not say what a closed area will do to fish stocks or to a fishing fleet's income in ten years. [UrbanFootprint](/engines/urbanfootprint/) does the same kind of arithmetic for land. The difference lies in who draws: in SeaSketch the people affected draw the proposals themselves. [Geodesignhub](/communication/geodesignhub/) is the nearest equivalent on land.

Two limits come from the documentation. Building the reports for a new project "becomes quite complex" and needs someone who knows Amazon Web Services and JavaScript.[^2] Survey results cannot be analysed inside SeaSketch and have to be exported, as CSV or GeoJSON, to other tools.[^5] Several documentation pages were last updated two or three years before this entry was written, and the page for the newer report builder says its documentation "is coming soon", so the current software may do more than these pages describe.

## Who makes it, and who uses it

The McClintock Lab at the University of California, Santa Barbara builds it; Will McClintock is a scientist at the university's National Center for Ecological Analysis and Synthesis.[^3,9] It descends from MarineMap, which California used when it first drew its network of marine protected areas, and California uses SeaSketch again to let the public examine petitions to change that network.[^9] The front page lists case studies from the Azores, Belize, Brazil, the Maldives, the Federated States of Micronesia, Kiribati and California, and gives totals of more than twenty countries and 100,000 polygons drawn and analysed.[^1] Those totals are the project's own.

## What is open

The code of the current version is on GitHub under the BSD 3-Clause licence.[^7] The repository was created in February 2020 and was last changed on 17 November 2026, the day before this entry was written.[^7] It is a GraphQL server on PostgreSQL, a React client, and a definition of the hosting on Amazon Web Services.[^7] The report code for individual countries is in public repositories of the same GitHub organisation. Running a private copy was not tried for this entry.

Most projects will not need to. The hosted service is "free for educational and non-profit use", a new project is created from a form on the site, and the lab can be contracted to configure a project, design surveys or facilitate meetings.[^2,3]

## For a model of a place

The pattern carries over to land, rivers and cities. Collect the layers in one place, ask people where they are and what they value with a map and not a form, let them draw proposals, and return the same few measures for every proposal so that the proposals can be compared. A simulation can sit behind the report in place of an overlay; the geoprocessing framework runs whatever function it is given within the limits of a short cloud job.[^8] That last point is this wiki's inference from how the framework is described, and no project doing so was found.
