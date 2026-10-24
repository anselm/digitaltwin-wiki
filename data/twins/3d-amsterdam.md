---
about:
  label: 3D Amsterdam
  description: >-
    The City of Amsterdam's browser 3D viewer, running on Netherlands3D, an open-source Unity digital-twin framework begun for 3D Amsterdam and 3D Utrecht and now developed for the whole country.
  tags:
    - Amsterdam
    - city model
    - open source
    - Unity
    - Netherlands3D
twin:
  place: 'Amsterdam, Netherlands'
  scale: city
  operational: operational
  homepage: 'https://3d.amsterdam.nl/'
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  licence: EUPL-1.2
  note: >-
    The Netherlands3D framework the viewer runs on is on GitHub under
    EUPL-1.2 and asks municipalities to contribute; the viewer's own data
    terms are not stated on the pages read.
domains: [places]
provenance:
  origin: agent
  sources:
    - title: 'NL3D | 1.0.335'
      url: 'https://3d.amsterdam.nl/'
    - title: 'GitHub - Amsterdam/Netherlands3D'
      url: 'https://github.com/Amsterdam/Netherlands3D'
    - title: Netherlands3D
      url: 'https://netherlands3d.eu/'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The viewer at 3d.amsterdam.nl titles itself NL3D.[^1] It loads Netherlands3D as a Unity WebGL application: Unity is a game engine, and WebGL lets it run in a web browser.[^1] The city's GitHub repository calls Netherlands3D a library of Unity systems and prefabs, first developed for 3D Amsterdam and 3D Utrecht.[^2] Development has since moved to the github.com/netherlands3d organisation.[^2]

Netherlands3D is an open-source digital-twin framework for visualising data about the Netherlands.[^3] It combines a few national base datasets into one consistent 3D picture of the country:[^3]

- the 3D BAG building model
- the 3D Basisvoorziening
- tree locations from the BGT

Users can add their own layers from links in common web map formats (GeoJSON, WMS, WFS or 3D Tiles), and layers can also come from a local server, the national PDOK portal, or municipal and provincial data portals.[^3] The framework is meant as a front end for the input and output of calculation and simulation tools too.[^3] Organisations can set up a tailored instance with their own start location, tools and datasets.[^3]

The framework's code is on GitHub under the EUPL-1.2 licence and installs as a Unity package.[^2] The repository invites other Dutch municipalities to contribute.[^2]

The viewer reported version 1.0.335 in October 2026 and warns that it is not yet optimised for mobile devices.[^1]
