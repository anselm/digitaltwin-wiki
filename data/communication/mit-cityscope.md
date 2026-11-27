---
about:
  label: CityScope
  description: >-
    MIT Media Lab's open-source table for planning in a group: people move
    tagged blocks on a model of a district and simulations of mobility,
    noise and energy redraw as they do.
  aliases:
    - MIT CityScope
    - CityScopeJS
  tags:
    - participation
    - tangible interface
    - urban planning
    - agent-based
    - open source
tool:
  form: Tangible table and web interface over simulation modules
  group: Playing
  homepage: 'https://cityscope.media.mit.edu/'
open:
  source: open
  data: unknown
  api: 'yes'
  participation: unknown
  licence: 'GPL-3.0 for the front end and the Python library; the server repository states no licence'
domains:
  - people
  - places
relations:
  - predicate: answers
    target: questions/combining-proposals
  - predicate: answers
    target: questions/housing-and-land-use
  - predicate: built_on
    target: engines/agents-and-system-dynamics/gama
    note: one of its simulation modules runs agent-based models in GAMA
  - predicate: built_on
    target: engines/transport-and-crowds/eclipse-sumo
    note: one of its modules runs traffic simulation in SUMO
provenance:
  origin: agent
  sources:
    - title: 'CityScope documentation: introduction and system architecture'
      url: 'https://cityscope.media.mit.edu/'
    - title: 'CityScope overview, MIT Media Lab City Science group'
      url: 'https://www.media.mit.edu/projects/cityscope/overview/'
    - title: 'Brix library documentation (CityScope archive)'
      url: 'https://cityscope.media.mit.edu/archive/brix/'
    - title: 'CityScoPy documentation'
      url: 'https://cityscope.media.mit.edu/tanglibe%20user%20interfaces/CityScoPy/'
    - title: 'CityScope on GitHub (repository licences and dates)'
      url: 'https://github.com/CityScope'
    - title: 'Projects using GAMA (HoanKiemAir and CityScope)'
      url: 'https://gama-platform.org/wiki/Projects'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the sources listed. The introduction, system page, and the Brix and CityScoPy pages of the documentation were read; the papers on CityScope were not. No evaluation of what a CityScope session changed in a decision was looked for.'
  status: draft
---
CityScope is a set of tools from the City Science group at the MIT Media Lab for working on urban design questions in a group.[^1,2] The group describes it as "a concept for shared, interactive computation for urban planning".[^2] Its best-known form is a table: a physical model of a district made of tagged blocks, with projections on and around it. The documentation calls a project a "table" for that reason.[^3]

## How a table works

A camera reads the grid of blocks. The scanning program, CityScoPy, captures and sends the arrangement of "uniquely tagged" bricks, each standing for a land use.[^4] When someone swaps a block, the new arrangement goes to a central server, CityIO, which holds the state of the table and passes it to every other part of the system.[^1]

Analysis modules listen for changes and send back indicators.[^3] The documentation gives three kinds: numbers, shown in a chart beside the table, such as density, diversity and proximity; map layers drawn on the table; and agent-based simulations shown as a moving layer.[^3] The modules it lists cover urban indicators, mobility simulation, noise, agent-based models run in [GAMA](/engines/agents-and-system-dynamics/gama/), and traffic run in [SUMO](/engines/transport-and-crowds/eclipse-sumo/).[^1] It says the modules "are developed by experts in each evaluation field".[^1]

A web front end, CityScopeJS, shows the same project in a browser, so a table is not required.[^1]

## Where it has been used

The Media Lab's page lists deployments in Andorra, Hamburg, Shanghai, the Champs-Élysées in Paris, the Volpe site in Cambridge, Massachusetts, and a tool for the reconstruction plan of Kharkiv.[^1,2] The GAMA project lists a related table in Hanoi, HoanKiemAir, which showed residents how closing streets around Hoan Kiem lake to traffic would move congestion and air pollution to neighbouring streets.[^6]

## Using it

The group says most of its work is free and open source.[^1] The front end and the Python library for writing modules are under GPL-3.0; the server repository states no licence.[^5] The documentation warns that it and the software "are works in progress".[^1] On GitHub the front end was last changed in May 2025, the Python library in August 2022 and the server in May 2021, so someone starting now should expect to do some repair.[^5]

A table shows the result of a change within seconds, and that sets what it can compute. The modules give quick indicators and short simulations. A flood or air-flow model that takes hours cannot answer while people stand around the table; its results would have to be computed in advance and looked up.

[Geodesignhub](/communication/geodesignhub/) and [companion modelling](/communication/companion-modelling/) are other ways of putting a model in front of a group.
