---
about:
  label: How would these people respond?
  description: >-
    Who lives here, what would a change do to their days, and how would they
    react to it, before anyone tries it on the real place?
question: {}
domains:
  - people
  - mobility
relations:
  - predicate: cites
    target: articles/synthetic-people
provenance:
  origin: agent
  reviewed: '2026-10-23'
  reviewed_by: >-
    Claude, from the entries linked here and the pages they cite; not yet read
    by Anselm
  status: draft
---
A city wants to move a bus line, close a street, raise a parking charge, or plan for a measles outbreak. A company wants to know how its staff would take a new schedule. A campaign wants to know how a town would vote. Each asks the same thing of a model: put the people in, make the change, and see what happens to them and what they do about it.

## What you are really asking

- **Who is here?** How many people, in which households, of what ages and incomes, where. This is the part a model can get right, because the census counts it.
- **What will the change do to their days?** Who loses a bus, who gains a commute, who is exposed to the outbreak. A model of daily life can answer this, if it has been checked against how people actually move.
- **How will they react?** Who switches mode, moves house, gets vaccinated, complains, votes. This is the hardest part, and the newest tools aim at it.
- **Who bears the cost?** The same change lands differently on different groups. A model that only reports averages hides that.

## What kind of model answers it

**A [synthetic population](/terms/synthetic-population/)** gives the model its residents, built to match the census. **Agent models of daily life** move them through work, school, shops and contacts: [ActivitySim](/engines/activitysim/) and [MATSim](/engines/matsim/) for travel, [Covasim](/engines/covasim-starsim/) and [JUNE](/engines/june/) for disease, [Mesa](/engines/mesa/) and [NetLogo](/engines/netlogo/) to build your own. **Language-model agents** give each resident a voice, so you can ask them questions or let them talk to each other: [Concordia](/engines/concordia/), [TinyTroupe](/engines/tinytroupe/) and [EDSL](/engines/edsl/) are open; companies such as [Simile](/engines/simile/) and [Aaru](/engines/aaru/) sell it as a service.

The first two are mature and used in public decisions. The third is not. Studies find that simulated respondents get the average answer of familiar groups roughly right and get the spread, minorities, other countries and new questions wrong. [Synthetic people](/articles/synthetic-people/) sets out the evidence.

## What you need

- Census tables for the area, and a sample of real records to build from.
- For travel: a street and transit network, and a travel survey to check against.
- For reactions: real answers from real people to compare with, on the same question. Without them a simulated poll cannot be checked.
- A plain statement of what the model leaves out.

## Without a model

Ask the people. A short survey of a few hundred residents, or a meeting with the groups most affected, often answers the question a simulated population would only estimate. [Talk to the people affected](/guides/talk-to-the-people-affected/) covers how.
