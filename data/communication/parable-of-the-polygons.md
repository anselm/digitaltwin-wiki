---
about:
  group: Playing
  label: Parable of the Polygons
  description: >-
    Playable post by Vi Hart and Nicky Case, 2014, built on Thomas Schelling's
    segregation model, in which readers move shapes, set their bias and watch
    a mixed neighbourhood sort itself apart.
  tags:
    - Schelling model
    - segregation
    - agent-based model
    - explorable explanation
    - playable post
    - neighbourhoods
story: {}
domains:
  - people
  - places
open:
  source: open
  data: unknown
  api: no
  participation: open
  licence: CC0-1.0
relations:
  - predicate: cites
    target: communication/explorable-explanations
provenance:
  origin: agent
  sources:
    - title: 'Parable of the Polygons - a playable post on the shape of society'
      url: 'https://ncase.me/polygons/'
    - title: 'ncase/polygons README (makers and public domain dedication)'
      url: 'https://raw.githubusercontent.com/ncase/polygons/gh-pages/README.md'
    - title: "Nicky Case's projects list (Parable of the Polygons under 2014)"
      url: 'https://ncase.me/projects'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Parable of the Polygons is a "playable post" by Vi Hart and Nicky Case, listed among Case's projects for 2014.[^2,3] It runs in a web page and is a short story told through a series of small simulations of a town of triangles and squares.[^1]

Each shape wants to move if fewer than a third of its neighbours share its shape.[^1] At first the reader drags each unhappy shape to an empty spot by hand until nobody is unhappy, and the town ends up sharply divided even though every shape would be content in a mixed neighbourhood.[^1] Later panels move the shapes automatically and add a graph of how segregated the town is over time.[^1] A slider sets the shapes' bias, so the reader can lower it to zero; in a town that starts segregated, nothing changes.[^1] Another setting gives the shapes a small wish for variety, and then the town mixes again.[^1] A large sandbox at the end lets the reader set both values freely.[^1]

The simulation is based on Thomas Schelling's 1971 paper "Dynamic Models of Segregation".[^1] Hart and Case write that what they added was showing how a small demand for diversity can undo the segregation.[^1] They note that real life is more nuanced and link to W.A.V. Clark's 1991 test of the Schelling model against real data.[^1] They say the post was inspired by Bret Victor's [Explorable Explanations](/communication/explorable-explanations/) and by Ian Bogost's idea of procedural rhetoric.[^1] The page links translations into more than fifteen languages and versions others built from it, and the playable post is dedicated to the public domain under CC0, with the makers inviting people to use it in classrooms, make adaptations or modify the source code.[^1,2]

Here a published model of how neighbourhoods sort is small enough that a reader with no background can run it by hand. The result for the town is one no single shape asked for.
