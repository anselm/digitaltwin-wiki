---
about:
  label: How to write your own digital twin
  description: >-
    One long page on how to build a simulation of a real place, written to
    be loaded whole into a language model. From the documentation of esimv1,
    by this wiki's maintainer.
  tags:
    - how to build
    - simulation design
    - calibration
    - visualisation
    - machine-readable
article:
  tier: 2
  url: 'https://esimv1.exe.xyz/docs/guides/writing-a-digital-twin'
  published: '2026-11-21'
  publisher: esimv1 documentation
  authors:
    - Anselm Hook
domains:
  - places
  - people
relations:
  - predicate: about
    target: articles/inside-an-engine
  - predicate: about
    target: articles/parts-of-a-twin
provenance:
  origin: agent
  sources:
    - title: 'How to write your own digital twin. esimv1 documentation, revision 1, 21 November 2026 (Markdown file)'
      url: 'https://esimv1.exe.xyz/docs/guides/writing-a-digital-twin.md'
    - title: 'anselm/esimv1. GitHub repository'
      url: 'https://github.com/anselm/esimv1'
  created: '2026-11-21'
  reviewed: '2026-11-21'
  reviewed_by: 'Claude, from the Markdown file of the guide, read in full, and the repository record for its licence. Anselm sent the page.'
  status: draft
---
This is a single page of about 4,700 words on how to build a running model of a real place.[^1] It belongs to the documentation of esimv1, an open simulator (MIT licence) made by Anselm Hook, who also maintains this wiki.[^2] The page's source file names Claude as its author, working to his order.[^1] It says it is "not a manual for esimv1": where that simulator made a choice, the text says so and gives the reason.[^1]

It follows much the same order as this wiki's nine [guides](/guides/) and points to them. The difference is in form and depth. The guides here are short and written for someone who commissions a model. This page is one file for the person who writes the model, or for a language model helping them, and its plain Markdown version is meant to be pasted into a model's context whole.[^1]

## What it covers that the guides here do not

- **A simulator is not a replay.** A recording of a fire or a flood, however well drawn, cannot answer "what if". The page gives three tests, the first being: change an input, and if the output cannot change, it is a replay.[^1]
- **How good and how fast.** State the tolerable error for the decision, and decide early whether the model must run faster than the event, for operations, or may take hours, for planning. "The same model rarely serves both."[^1]
- **How to arrange the code.** Shared data behind one layer; modules that each own one kind of state; a choice of representation for each part (field, individual agents, network or aggregate); time steps and messages; and a manifest, a document that fully describes one scenario so that "what if" is a second manifest.[^1] [Inside an engine](/articles/inside-an-engine/) covers the middle of this list in more detail.
- **Habits that catch errors.** Pass every movement of a conserved quantity through an account that must close, draw randomness from a seeded stream, and show a spread over many runs.[^1]
- **Staying tied to the world.** Live sensors, simple data assimilation, dated forecasts kept unchanged and later checked, and reference runs repeated on every change.[^1]
- **Intentions, outcomes and bottom lines.** Named interventions in place of a panel of sliders; outcomes reported on several separate accounts (lives, homes, livelihoods, ecosystems) and not folded into one index; and the difference between a system stretching and a system tearing, with thresholds reported as events.[^1]
- **Instructions for a language model.** Twelve rules for a model helping someone build a twin, among them: mark each number as sourced, recalled or a guess, and never call a run past the record a forecast.[^1]

It also lists questions to answer in writing before building, on purpose, people, data and upkeep, and an order of work in eleven steps.[^1]

## What it rests on

The page states its own basis. It cites this wiki for [The Grammar of Simulation](/articles/the-grammar-of-simulation/) and says the paper itself was not read. Of the rest it says: "It cites no source and should be read as experienced opinion."[^1] The examples come from building esimv1's fire model, including a grid laid half a pixel off its source and a fit that failed until the model was given a way for a fire to stop.[^1]

It names what it leaves out: the methods of data assimilation, models learned from data, performance and parallel computing, and the cost of running a service.[^1] For the second of these see [Learned models of the Earth](/articles/learned-models-of-the-earth/).
