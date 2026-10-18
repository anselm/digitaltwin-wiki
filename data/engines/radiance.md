---
about:
  label: Radiance
  description: >-
    Open-source lighting simulation from Lawrence Berkeley National
    Laboratory; uses ray tracing to predict light levels and the appearance
    of a space before it is built, for daylight and electric light.
  tags:
    - lighting
    - daylight
    - ray tracing
    - glare
    - open source
tool:
  form: Open-source lighting simulation
  group: Sensory landscape
  homepage: 'https://www.radiance-online.org/'
open:
  source: open
  data: unknown
  api: unknown
  participation: partly
  licence: 'The Radiance Software License, Version 2.0'
  note: >-
    Source code and installers are free to download; the official tree is a
    CVS repository at LBNL, mirrored one-way to GitHub, so changes go through
    the maintainers rather than pull requests.
domains:
  - sensory
  - energy
relations:
  - predicate: answers
    target: questions/sensory-landscape
provenance:
  origin: agent
  sources:
    - title: 'Detailed Description — Radsite'
      url: 'https://www.radiance-online.org/about/detailed-description.html'
    - title: 'Radiance — Radsite'
      url: 'https://www.radiance-online.org/'
    - title: 'License.txt — Radsite'
      url: 'https://www.radiance-online.org/download-install/license.txt'
    - title: 'GitHub - LBNL-ETA/Radiance: A Validated Lighting Simulation Tool'
      url: 'https://github.com/LBNL-ETA/Radiance'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Radiance is a set of programs for predicting the light levels and appearance of a space before it is built, developed by Greg Ward at Lawrence Berkeley National Laboratory from 1985 and still maintained by him under contract to the lab. The user describes the geometry, materials and light sources of a scene; the engine traces rays backwards from a viewpoint to the sources, mixing Monte Carlo and deterministic methods, and produces radiance values that are usually arranged as an image. Light sources can carry measured photometric distributions, windows and skylights can be precomputed as secondary sources, and materials can be given arbitrary reflectance and transmittance functions.

It is meant for lighting designers and architects, and the lab's page also lists roadway accident reconstruction and space station design as uses. Information about illumination level and glare is available from an interactive low-resolution renderer; high-resolution renderings of a complex space can take hours and can be split across machines. The interface is command-line, in the Unix style, and the lab says it suits programmers and people with a high degree of computer proficiency more than menu-driven users.

It is free software. Source code and installers for Windows, macOS and Linux are downloaded from radiance-online.org or from the GitHub mirror, which is updated daily from the official CVS tree and publishes installers on each release. The licence is the Radiance Software License, Version 2.0, copyright 1990 to 2025 by the Regents of the University of California, which permits redistribution and use in source and binary form with attribution. Development was funded by the US Department of Energy and the California Energy Commission, with earlier support from Apple, the Swiss NEFF fund, the US Navy and the FAA.

Status: maintained; the licence text covers Radiance v6.0, the site home page was updated in February 2025, and the site lists a Radiance and HDR workshop in Lausanne for August 2025.
