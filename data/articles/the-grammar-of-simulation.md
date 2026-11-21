---
about:
  label: The Grammar of Simulation
  description: >-
    An open atlas that takes 179 simulation games apart into 199 shared
    mechanics, from needs decay to supply-demand pricing, and maps where AI
    techniques could change them. By Yohei Nakajima and others.
  aliases:
    - simgrammar
  tags:
    - simulation games
    - mechanics
    - taxonomy
    - legibility
    - open data
    - machine-readable
article:
  tier: 2
  url: 'https://simgrammar.com/'
  published: '2026-11-04'
  publisher: simgrammar.com
  authors:
    - Yohei Nakajima
    - Pedro Lucca
    - Shrey Kothari
domains:
  - people
  - places
relations:
  - predicate: about
    target: articles/inside-an-engine
provenance:
  origin: agent
  sources:
    - title: 'The Grammar of Simulation. simgrammar.com, front page'
      url: 'https://simgrammar.com/'
    - title: 'The Grammar of Simulation: a machine-readable atlas of simulation game mechanics. Nakajima, Lucca and Kothari, version 0.8, 4 November 2026 (paper.md)'
      url: 'https://simgrammar.com/dist/paper/paper.md'
    - title: 'yoheinakajima/simgrammar. GitHub: README and LICENSE'
      url: 'https://github.com/yoheinakajima/simgrammar'
  created: '2026-11-21'
  reviewed: '2026-11-21'
  reviewed_by: 'Claude, from the sources listed. Of the paper, the abstract, sections 2.1, 2.5, 2.6, 4.1 and the opening of 6 were read; the rest, the book and the videos were not. Anselm sent the site.'
  status: draft
---
The Grammar of Simulation takes 179 simulation games, from 1968 to 2026, apart into the rule-systems they share, and finds 199 of them.[^2] SimCity, The Sims, Dwarf Fortress, Factorio and RimWorld are among the games.[^1] The parts have names a designer would recognise: needs decay, supply-demand pricing, traffic congestion, service coverage, weather, land value.[^1] It is about games, not models of real places. It is on this shelf because game designers have spent fifty years on a problem every model of a place meets, which is making a complicated simulation something a person can read and steer, and this is the most thorough inventory of how they did it.

## What counts as a part

A mechanic has to pass four tests. It is nameable: designers would recognise it in more than one game. It is atomic: it "owns one kind of state and one update rule". It is tunable, with at least two levers. It is removable: a game could drop it and keep running.[^2] Outcomes such as a death spiral are not mechanics. They are what coupled mechanics do, and are recorded as dynamics.[^2]

Each mechanic is filed in one of 21 families by the state it owns, such as economy and finance, agents and behaviour, logistics and networks, environment and ecology, governance and policy, or information and legibility.[^1,2]

## Six layers

The paper reads any simulation game through six layers.[^2]

1. **Substrate, what exists:** aggregate stocks, individual agents, fields on a grid, networks, or continuous bodies. "Aggregates are cheap and faceless, agents are expensive and legible."
2. **Dynamics, how it changes:** reinforcing loops of growth paired with balancing loops that resist it.
3. **Coupling, how subsystems touch:** through shared stocks, shared space and shared agents. "Depth comes less from the number of systems than from how many share state."
4. **Control, how intent enters:** acting directly, placing and zoning, setting parameters, issuing orders, writing programs.
5. **Legibility, how state leaves:** overlays, inspectors, tooltips, advisors, alerts, graphs and forecasts.
6. **Pacing and stakes:** when the player must look, and what a mistake costs.

The first three match what this wiki's [Inside an engine](/articles/inside-an-engine/) says of engines for real places: the substrates are nearly its list of kinds of process, and coupling is the same word. The two lists were made separately, from different material. The last three are where the games go further than this wiki's engine entries do, and they bear on the [Communication](/communication/) shelf: how a person puts an intention into a model, and how the model shows why something happened.

## Findings that carry over

- **Old parts, reused.** Of the mechanic uses in games released since 2010, 84 per cent are of mechanics already in a game by 2000.[^1]
- **Variety costs readability.** Mechanics rated as producing more unscripted variety are rated harder to read, with a rank correlation of -0.42.[^2] The paper calls legibility one of five ceilings on what a simulation can be, with compute per tick, authoring cost, determinism and the believability of agents.[^2]
- **Explanation is the first use for language models.** The authors' top-ranked opportunity keeps the simulation symbolic and has a model answer a player's "why did that happen?" from the game's own event log.[^2] A public model of a flood or a housing market faces the same question from a resident.
- **Half of what games use is untouched by AI techniques.** Of the 199 mechanics, 97 have no AI technique linked to them, and those carry 49 per cent of all mechanic uses.[^2]

## How it was made

The repository is the research: one file per record, from which the site, the paper, a book and tables are all built.[^3] Every number in the prose is filled in from the data when the site is built, and 850 assertions stop the build if the data cease to support a sentence.[^2] AI agents produced the dataset under human operators, in 102 logged runs, 98 of them by one model.[^2]

The authors state the limits this brings. Most scores come from that one model as rater. A second model agreed well on which family a mechanic belongs to and poorly on some scores, as low as 0.1 on the scale for emergence. No second person has coded any of it. The catalogue of games leans to commercial, English-language, PC titles.[^2] The correlations above are therefore associations in one rater's reading.

## What is open

The code is under Apache 2.0 and the data and text under CC BY 4.0.[^3] The tables, the graph and the full records can be downloaded, and the repository takes contributions.[^3] The repository was created on 25 October 2026.[^3]

## For a model of a place

The mechanic pages can be read as a parts list. A team building a model of a town for residents can look up how games have handled land value, service coverage or traffic, what levers each has, and how each fails. The limit is that a game's mechanic is tuned to be playable, not to match a measured place, and nothing in the atlas is calibrated against the world.
