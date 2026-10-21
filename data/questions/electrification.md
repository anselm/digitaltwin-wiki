---
about:
  label: Electricity and energy transitions
  description: >-
    As heating, driving and industry move to electricity, where will the network
    run short, and what mix of wires, storage and generation would close the gap?
question: {}
domains:
  - energy
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
The local wires and substations were built for other loads. Utilities, cities and regions want to know which will pinch first and what to build.

## What you are really asking

- **Where and when** will demand exceed what the local wires and substations can carry? It is answered feeder by feeder and hour by hour. A feeder is a line that runs from a substation out to the streets.
- **What mix** of new generation, storage, network upgrades and demand management meets the demand at least cost, and how does the answer change with the assumptions about adoption?
- **What does it cost, and who pays?**

## What kind of model answers it

**Energy system models** represent generation, storage and transmission as a network and find the cheapest way to meet demand hour by hour under given constraints, over years of investment. They answer the mix question. **Network models** represent the physical wires, poles and transformers of a distribution system and answer the where-and-when question for a particular street or substation. The two are often run separately and rarely talk to each other.

On this site, [PyPSA](/engines/pypsa-pypsa-eur/) is an open energy system model, and PyPSA-Eur its ready-made model of Europe. [Neara](/engines/neara/) is a commercial network model built from asset and spatial data. The [UK National Digital Twin Programme](/engines/uk-ndtp/) is a national programme to connect infrastructure data across sectors.

## What you need

- Demand by hour and by place: smart-meter data if the utility will share it, or published load profiles if not.
- The network itself: where the substations and feeders are and what they are rated for. This is the data most often locked up.
- Adoption scenarios for vehicles and heat pumps, stated as assumptions and argued openly.

## Without a model

Ask the utility for its list of constrained substations. Many publish one. Combine it with where new housing and chargers are going and you have the first map.

## Next

[Choose the kind of model](/guides/choose-the-kind-of-model/), because the two kinds here answer different questions. [A flooded substation](/stories/a-flooded-substation/) is the story of the network as a physical thing in a place.
