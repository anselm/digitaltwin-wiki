---
about:
  label: Manim
  description: >-
    Open-source Python engine for precise, programmatic animations, begun by
    Grant Sanderson for his 3Blue1Brown math videos and forked in 2020 into a
    community edition.
  tags:
    - animation
    - explanatory video
    - mathematics
    - python
    - open source
tool:
  form: open-source Python library and command-line renderer
  group: Showing
  homepage: 'https://www.manim.community/'
  licence: MIT
  cost: free
open:
  source: open
  data: unknown
  api: 'yes'
  participation: open
  licence: MIT
  note: >-
    Two versions: the community edition (package manim) and Grant Sanderson's
    own ManimGL (package manimgl), each with its own install instructions.
relations:
  - predicate: alternative_to
    target: communication/remotion
    note: both make video from code; Manim in Python, Remotion in React
provenance:
  origin: agent
  sources:
    - title: 'GitHub - ManimCommunity/manim'
      url: 'https://github.com/ManimCommunity/manim'
    - title: 'GitHub - 3b1b/manim'
      url: 'https://github.com/3b1b/manim'
    - title: 'Installation FAQ: why are there different versions of Manim? (Manim Community docs)'
      url: 'https://docs.manim.community/en/stable/faq/installation.html'
    - title: 'ManimCommunity/manim LICENSE'
      url: 'https://raw.githubusercontent.com/ManimCommunity/manim/main/LICENSE'
    - title: '3b1b/manim LICENSE.md'
      url: 'https://raw.githubusercontent.com/3b1b/manim/master/LICENSE.md'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Manim is a Python library for making animations precisely, in code, the kind used to explain mathematics. Instead of moving shapes by hand on a timeline, a person writes a short script that describes a scene: draw a square, turn it, change it into a circle. Manim renders the script to a video file. A quick low-quality render lets the author check a scene before the final one, and the community edition can also run inside Jupyter notebooks and in an online Jupyter environment without installing anything.

Grant Sanderson wrote it as a personal project to animate the videos on his YouTube channel, 3Blue1Brown, and released it as open source. The GitHub repository dates from March 2015. As the channel grew, other people wanted the same style for their own work, but the tool was hard to install and use. In mid-2020 a group of developers forked it into the community edition, aiming to make it more stable, better tested and documented, and quicker to take in contributions. Sanderson still maintains his own version, now called ManimGL, which renders through OpenGL and has more experimental features; the community recommends its edition especially for beginners. The two are installed differently and their instructions should not be mixed.

Both are under the MIT licence; both licence files name 3Blue1Brown LLC as the copyright holder. ManimGL needs FFmpeg and OpenGL, with LaTeX optional for typeset formulas. The community edition also publishes a Docker image.

Manim is built for explanation: each object on screen is placed and moved exactly, so the same script can be run again when the numbers change.
