---
about:
  label: Protect people's privacy
  description: >-
    Models of places are models of the people in them. Decide what you will not
    collect, aggregate the rest, and say in public what you did.
guide:
  stage: 7
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
Travel, energy, health and location data describe individuals, and a model that needs them can expose people who never agreed to be in it. The rules differ by country; the practice does not.

## Decide what not to collect

Start from the question. If it can be answered with counts by block, do not take addresses. If it can be answered with a day's traffic, do not keep a year of trips. The data you never hold cannot leak.

## Aggregate early

Combine records to the coarsest unit that still answers the question: a block, an hour, a hundred households. Do it as the data arrives, and keep the raw records with the person or office that owns them rather than copying them.

## Watch the small cells

A count of one is a person. Suppress or merge cells below a threshold, and remember that a map with several small layers can identify someone no single layer does.

## Synthetic populations

Many agent-based models use a made-up population that matches the census in aggregate but contains no real person. This is a well-worn method and is usually enough. Say clearly that the agents are synthetic, so that nobody mistakes the model for surveillance.

## Say what you did

Write a short, public note: what data the model uses, where it came from, what was aggregated, who can see what. Put it beside the model. The people you [talked to](/guides/talk-to-the-people-affected/) should recognise their own data in it and be able to object.

## Live models

A twin fed by sensors is watching a place continuously. Decide who sees the live view, what is stored, for how long, and who can ask for it to stop. Decide this before the sensors go in.

## Next

[Put it in front of its users](/guides/put-it-in-front-of-its-users/).
