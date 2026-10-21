---
about:
  label: Housing and land use
  description: >-
    If zoning or a transport investment changes, where will homes and jobs go,
    and who gains and loses?
question: {}
domains:
  - places
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
A rezoning is on the table, or a new transit line, and someone wants to know what the city will look like in twenty years because of it: how many homes, where, at what price, and who moves.

## What you are really asking

Land use and travel are coupled. People choose where to live partly by how they can get to work. Developers build where people can get to. Both change what the roads and trains carry. So the question is **what this change does to the whole loop, over years**. Beneath it are the questions the council will argue about: how many homes, how affordable, how much traffic, and the effect on the tax base.

## What kind of model answers it

An **urban simulation** model represents households, jobs, buildings and land parcels and lets them change year by year under rules about development and location choice. It is usually run beside a transport model so that travel times feed back into where people choose to live. The outputs are maps of development and population by year under each scenario. They are only as good as the assumptions about how people and developers behave, and a model should state those assumptions.

On this site, [UrbanSim](/engines/urbansim/) is an open model of this kind, and [Urbanly CityCompass](/engines/urbanly-citycompass/) a hosted one.

## What you need

- Parcels and zoning, from the city.
- Where people and jobs are now: in the United States, the [Census APIs](/data-sources/census-apis/).
- The street and transit network, usually starting from [OpenStreetMap](/data-sources/openstreetmap-osm/).
- A written description of each scenario, agreed with the people who will argue about the results.

## Without a model

Count the parcels the rezoning touches and what the new rules allow on each. That arithmetic sets the upper bound on what can happen, and is often most of the answer. Ask who did a similar rezoning nearby and what was built.

## Next

[Name the question](/guides/name-the-question/) and [Talk to the people affected](/guides/talk-to-the-people-affected/).
