---
about:
  label: SPZ
  description: >-
    An open file format for compressed 3D Gaussian splats, from Niantic
    Spatial, about ten times smaller than the usual PLY files; MIT licence,
    with C++ and TypeScript libraries.
  tags:
    - gaussian splat
    - file format
    - 3d capture
    - compression
    - open source
tool:
  form: open file format with an open-source library
  group: 3D cities and mapping
  homepage: 'https://github.com/nianticlabs/spz'
  cost: free
  licence: MIT
domains:
  - places
open:
  source: open
  data: unknown
  api: unknown
  participation: open
  note: 'Code, format notes and extensions are on GitHub.'
provenance:
  origin: agent
  sources:
    - title: 'nianticlabs/spz (README)'
      url: 'https://github.com/nianticlabs/spz'
    - title: 'SPZ 4 is here: leaner, faster, and more future-proof'
      url: 'https://www.nianticspatial.com/blog/spz4'
  created: '2026-10-21'
  reviewed: '2026-10-21'
  reviewed_by: >-
    Claude, from the README and the SPZ 4 announcement of 5 May 2026. Mike
    Liebhold's synthesis of Niantic's work pointed to it.
  status: draft
---
A Gaussian splat is a way to store a scanned place as millions of small coloured blobs instead of a mesh of triangles. Splats look close to a photograph from any angle. The usual container is a PLY file, and those files are large.

Niantic released SPZ as open source in late 2024 and called it "JPG for 3D Gaussian splats". An SPZ file is typically about ten times smaller than the matching PLY, with little visible difference. The library is C++ and also builds to TypeScript through WebAssembly, so a browser viewer can load the files directly. The licence is MIT.

Version 4, released in May 2026, encodes about three times faster on a large test scan and lets other companies add their own fields without breaking older readers. One extension so far, named for Adobe, lets a file record which way its axes point.

Coordinate systems are the trap for anyone joining splats with other city data. SPZ stores right, up, back by default, the convention of OpenGL and three.js. PLY files usually use a different one and glTF another, so the reader should say which system the data is in when saving and loading.
