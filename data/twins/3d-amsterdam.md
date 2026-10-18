---
about:
  label: 3D Amsterdam
  description: >-
    The City of Amsterdam's browser 3D viewer of the city, which runs on
    Netherlands3D, an open-source Unity digital-twin framework begun for
    3D Amsterdam and 3D Utrecht and now developed for the whole Netherlands.
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
    - title: 'NL3D | 1.0.184'
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
3D Amsterdam is the City of Amsterdam's 3D viewer at 3d.amsterdam.nl. The page titles itself NL3D and loads Netherlands3D, a Unity WebGL application; the city's GitHub repository describes Netherlands3D as a library of Unity systems and prefabs first developed for 3D Amsterdam and 3D Utrecht, and says development has since moved to the github.com/netherlands3d organisation.

Netherlands3D, as its own site describes it, is an open-source digital-twin framework for the Netherlands aimed at data visualisation: it combines a few national base datasets (the 3D BAG building model, the 3D Basisvoorziening and tree locations from the BGT) into one consistent 3D picture of the country, and lets a user add their own layers from GeoJSON, WMS, WFS or 3D Tiles links, from a local server, from the national PDOK portal or from municipal and provincial data portals. It is also meant as a front end for the input and output of calculation and simulation tools, and organisations can set up a tailored instance with their own start location, tools and datasets. The pages read give no named use case for Amsterdam itself.

What is open: the framework's code is on GitHub under the EUPL-1.2 licence, installable as a Unity package, and the repository invites other Dutch municipalities to contribute. Whether the city's own data layers in the viewer can be downloaded, and whether the viewer exposes an API, is not stated on the pages read.

Status: operational; the viewer reports version 1.0.184 and warns that it is not yet optimised for mobile devices.
