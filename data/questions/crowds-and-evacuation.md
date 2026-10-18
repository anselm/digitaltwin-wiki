---
about:
  label: Crowds and evacuation
  description: >-
    How will people move through a station, a stadium or a festival, and how
    long would it take to clear an area in an emergency?
question: {}
domains:
  - people
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
Someone is designing a concourse, planning an event, or writing an evacuation plan, and wants to know where people will bunch up, how long it takes, and what a wider gate or a second exit changes.

## What you are really asking

- **Flow**: how many people can pass a point per minute, and where do queues form?
- **Time to clear**: how long from alarm to empty, and what is the slowest group's experience?
- **Design**: which change, an exit, a barrier, a sign, a staff member at a corner, helps most?

## What kind of model answers it

**Agent-based pedestrian models** give each person a goal, a walking speed and simple rules for avoiding others, and let a crowd emerge from thousands of them. They show the bottlenecks that a floor plan hides. For a city-scale evacuation, by car as well as on foot, the same idea runs on the road network, and the hard part is the assumption about when people decide to leave.

On this site, [AnyLogic](/engines/anylogic/) is a commercial platform with pedestrian and transport libraries, and [GAMA](/engines/gama/) an open platform for spatial agent-based models including evacuation.

## What you need

- The floor plan or street network, with doors, stairs and widths right.
- How many people, where they start, and where they are going.
- For an emergency plan: who needs help to move, and where they are.
- Counts from a real event to check against.

## Without a model

Stand at the pinch point at peak time with a counter. Walk the evacuation route at the speed of the slowest person you are responsible for. Most of the answer is there.

## Next

[Build the smallest version](/guides/build-the-smallest-version/): one concourse, one scenario, before the whole venue.
