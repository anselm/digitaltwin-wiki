# Where findings about the state of the world go: an Observations shelf

27 November 2026. Claude, in a cloud session.

## What Anselm asked

With a link to Zhang and others, "Abrupt surface water decline during
2023–2024 record warming" (Science, 26 November 2026): "The wiki is
missing a feel for the burgeoning environmental crisis - is this an area?
Or just news? In a sense these are data points or fuel for models -
relationships - how do we ingest and organize important observations like
this?"

## The answer given, and built as a draft for him to accept or remove

It is an area, and the test that separates it from news is his own
phrase, fuel for models. A finding is kept when it gives a model one of
three things: a target (a number to reproduce), a relationship (one
quantity tied to another) or a threshold. A finding with none of these is
news and stays on the News shelf by date.

The wiki already held such findings, scattered through Articles with
nothing gathering them. Three existing places sit beside the new one and
keep their jobs: Vitals for series measured continuously, Scenarios for
a problem in one named place worth modelling (his correction of 21
November stands), and the tipping-points term for thresholds as a
subject.

Built:

- `data/observations/index.md`: a tagged shelf, tag `observation`, in the
  Resources area after Vitals. Draft.
- Eleven existing articles tagged: the 2026 state of the climate report,
  Climate Central on extreme water levels, Foster and Rahmstorf on
  accelerated warming, Gohr on biosphere reserves, the deep pelagic
  decline, the Living Planet Index explainer, the restoration count, North
  Carolina ghost forests, the fire deficit, tropical forest temperature
  thresholds, the WMO greenhouse gas bulletin.
- Not tagged, because they are projections and not measurements: fire
  risk to 2060, moderate warming and extreme outcomes, Thwaites, the
  derailment-risk paper.
- `articles/zhang-abrupt-surface-water-decline-2023-2024`, written to the
  shape proposed for the shelf: what was observed, how it was measured,
  what drove it, what a model would have to reproduce (marked as the
  wiki's reading), what was not read.

To undo: delete the shelf's index.md and the tag from twelve entries.

## Limits

- The water paper is closed access and science.org refused automated
  reading. The entry is from the abstract in the Crossref record only.
  Anselm may have access to the full text.
- The eleven older entries were tagged from their descriptions. Their
  bodies were not rewritten to the new shape, and most do not have a
  section on what a model would have to reproduce.
- The name "Observations" and the placement beside Vitals are Claude's
  choices.

## Open, for Anselm

- Whether the shelf should carry structured fields (quantity, baseline,
  period, region, driver) so that observations can be listed, sorted and
  read by a model, the way scenarios carry pace, role and scale. That
  would make them usable as fuel in the literal sense and is a schema
  change.
- Whether an observation should link to the Vitals series nearest its
  cause, as this one does in prose.
- Ingest: `tools/scan.js` puts new items in `inbox/`. Nothing yet sorts
  an inbox item as observation, news or neither.
