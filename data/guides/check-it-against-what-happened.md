---
about:
  label: Check it against what happened
  description: >-
    Run the model on a past event and compare it with what actually happened,
    before anyone decides on it.
guide:
  stage: 6
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
Every model can produce a convincing map. The only way to know whether to believe it is to point it at something that already happened and see how close it comes. Do this before anyone makes a decision on it, and do it again whenever the model or the data changes.

## Pick a past event

A flood with photographs, a closure with traffic counts, a fire with a mapped perimeter, a heatwave with temperature readings. The [people you talked to](/guides/talk-to-the-people-affected/) will know the one that matters, and they will remember where the water came up.

## Run the model as if it were then

Feed it the conditions of that day, the rain, the wind, the closure, and nothing it could not have known. Then compare the output with the record, place by place.

## Say how close, in plain words

Not a statistic alone, but a sentence: "The model flooded nine of the twelve streets that flooded in 2019, and flooded two that did not." That sentence belongs in every presentation of the model, and the audience should hear it before they see the scenarios.

## Decide whether it is good enough

Go back to what you wrote in [the first guide](/guides/name-the-question/) about what would change the decision. If the model's error is bigger than the difference between the options, it cannot choose between them, and saying so is the honest result. Often the fix is in the data rather than the engine.

## Keep the check

Store the event, the inputs and the comparison with the model. When the model is changed, run it again. A model that was once checked and has since been edited is unchecked.

## What the public can do

Published models can be checked by anyone with the record. Fire perimeters, flood extents and traffic counts are often public, and a reporter or a resident with an hour can ask the question this guide asks. That is how it should be.

## Next

[Protect people's privacy](/guides/protect-people-s-privacy/).
