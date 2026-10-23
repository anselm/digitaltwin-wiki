# A town twin as a self-contained experiment (2026-10-23)

Anselm, after the YC discussion (`20261023-who-pays-for-a-civic-twin.md`):
"A digital twin of a town is not a bad idea. It is similar to digital twins
of islands - I think tuvalu was doing this." And: "I'm not opposed to
products per se. It is not a bad test (scenario?). Many small towns could
use some real intelligence - tenacious agents that can grind on whole town
problems - try many ideas virtually - score long term outcomes - think
about what are the real metrics to measure - it would be a good self
contained experiment."

Tuvalu is now on the Notable twins shelf (`twins/tuvalu-digital-nation`):
a whole country scanned by lidar, the capital mapped by drone and street
camera, machine learning on the imagery for shoreline change and rooftop
solar, and a constitutional and cultural purpose beside the practical one.
It is the nearest working example of a place small enough to hold whole.

## The experiment, as stated

A small town held whole in one model, with agents that do not tire:

1. **Hold the town.** Its people, households, budget, water system,
   roads, land, businesses, rules and obligations, from public records.
2. **Name the real metrics.** The hardest and most interesting step: not
   what is easy to count, but what the town would say it wants over
   twenty years (safe water every day, a solvent budget, young people
   staying, a school open, the next generation able to afford a house).
   The agents propose metrics; residents choose and weight them. This is
   the communication half of the stack at work, and the simulate.world
   requirement that the weights stay open to debate.
3. **Try many ideas virtually.** Agents generate and run many plans
   (repair or connect the water system, merge services with a neighbour,
   a grant strategy, a rate change) and score each against the chosen
   metrics over decades, keeping the reasoning and sources for every run.
4. **Check against history.** Run the model forward from some years ago
   and compare with what happened, before trusting a forecast.
5. **Show and play.** Put the best few plans, and the trade-offs between
   them, in front of the town in a form people can change themselves.

It is self-contained (one place, bounded data, a small population),
honest to test (the people there can say whether it is right), and
general (every small town has a version of it).

## Candidates

- Hartman, Colorado (`scenarios/hartman-colorado-water-system`): small
  enough, a sharp decision, the state's records already gathered in the
  abandonment order; but the town no longer exists as a government, so
  the questions belong to the county.
- A small town that still works and has a pressing decision, chosen with
  someone who knows it. That is the better test, because people there
  can play with it and say if it is wrong; finding it is Anselm's call.

## What it asks of the engine

Agents that run many plans and keep score is a search over plans, not a
single simulation: the engine needs a fast enough model to run thousands
of futures, a way to state a plan as data, metrics as functions the
residents can read and reweight, and a record of where every number came
from. That is a sharper first target than "an engine".
