---
about:
  label: Traffic and public transport
  description: >-
    Where will traffic go when a road closes or a lane is taken, and can signals
    or a timetable change keep buses on time?
question: {}
domains:
  - mobility
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
A bridge is closing for repairs, a street is becoming a bike lane, a stadium is opening, and people want to know where the cars will go. Or a bus route is always late, and someone wonders whether the signals could be timed to help the buses.

## What you are really asking

- **Where will the traffic reroute?** The answer depends on what alternatives drivers have and how many stop making the trip.
- **What will it do to the people who do not drive?** Buses, bikes and people on foot are usually the ones hurt by a reroute and the ones helped by a well-designed change.
- **Can we operate our way out of it?** Signal timing, a temporary bus lane, a changed timetable. All three are cheap and reversible, and a model can rank the options.

## What kind of model answers it

Traffic models come in two sizes. A **microscopic** model moves individual vehicles, buses and pedestrians along a street network, second by second. It suits a closure, a junction or a signal plan. An **agent-based transport** model gives every person in a region a daily plan and lets each one choose routes and modes. It suits questions about where demand goes across a whole city.

On this site, [Eclipse SUMO](/engines/eclipse-sumo/) is the open microscopic engine and [MATSim](/engines/matsim/) the open agent-based one; [Aimsun](/engines/aimsun/) and [Replica](/engines/replica/) are commercial products in the same space. All of them start from a street network, most often [OpenStreetMap](/data-sources/openstreetmap-osm/).

## What you need

- The street network, with one-way streets and signal locations right. OpenStreetMap is usually close; check the blocks that matter.
- Traffic counts and transit ridership. The city or transit agency almost certainly keeps both.
- The timetable. Most agencies publish theirs in the standard GTFS format.
- A clear description of the change: which lanes, which hours, for how long.

## Without a model

For a short closure, a map of the alternative routes and a count on each one before and after is a model with a sample size of one, and is often what the decision needs. Talk to the bus drivers; they know where the delay is.

## Next

[A late bus](/stories/a-late-bus/) is the story version of this question. [Build the smallest version](/guides/build-the-smallest-version/) is the guide that applies.

![Building a transport twin: real-world inputs, shared geographic data, transport simulation, scenario runs, and professional and public interfaces, with connected models alongside.](/questions/after-a-closure/stack.svg)

*The stages of a transport twin, with the example of comparing a proposed cycle lane with the existing layout.*
