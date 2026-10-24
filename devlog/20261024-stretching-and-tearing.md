# Stretching and tearing, and isolated pools (2026-10-24)

Anselm, 2026-10-24, passing on Wlodek Bogucki's LinkedIn essay "The Green
Movement's Incrementalism Is Not Just Ecologically Inadequate. It Is
Scientifically Wrong." (24 October 2026,
https://www.linkedin.com/pulse/green-movements-incrementalism-just-ecologically-wrong-wlodek-bogucki-eldue/):

> Here is an article that discusses making phase transitions more visible.
> One problem with many models is they can indicate 'stretching' but not
> very clearly indicate 'tearing'.

> Also the article makes a good point about the piecemeal nature of the
> environmental movement. It is like many isolated pools of water not yet
> connected together.

> I feel like it is good fuel. I wish it existed somewhere readable and we
> could cite it as a post.

It does: LinkedIn serves the full text of a Pulse article without a login
(a plain fetch returned all of it on 2026-10-24), so it is cited at its own
address.

## What came of it

- `articles/bogucki-incrementalism-complexity`: what the essay argues,
  attributed to him, with the primaries behind his borrowed facts (Meadows,
  Rittel and Webber, the Amazon's own rainfall) where an agent could open them.
- `terms/tipping-points`: the stretching-versus-tearing point as a term.
  The science has a name for showing the tear before it happens:
  early-warning signals of critical transitions (slowing recovery, rising
  variance). It also has honest limits (false alarms; tipping driven by
  noise or by the rate of change, with no slowing to warn).

## Threads for later

- Stretching versus tearing as a presentation problem: a model of a place
  that shows distance to a threshold, not only the value of a variable.
  Candidate for the Communication or Presentation shelves, or a Vitals
  experiment (an early-warning indicator computed on one of our series).
- Isolated pools: Bogucki's "parallel probes" need system-level feedback
  that connects each experiment's outcome to where resources go. That is
  close to what this wiki and the twins it describes are for; worth an
  essay of Anselm's own if he wants one. Not drafted.

# The rules layer (2026-10-24, same day)

Anselm, after PNNL's news item on PermitAI
(https://www.pnnl.gov/news-media/permitai-team-delivers-one-stop-shop-federal-permitting-data):

> I was quite fascinated by federal permitting data - we don't really have
> a section for this? Part of a real digital twin is understanding the
> invisible landscape of land use laws and policy - much of the real
> physical world we see is defined by our laws on top of it.

There was no section. Nothing on the site treated law as a layer; zoning
and parcels came up only in passing (Housing and land use, a few engines).

What is being added, by two agents writing from the agencies' own pages:
a term, `terms/rules-layer`, that names the layer and its kinds (zoning,
parcels, permits and environmental review, protected areas, legal flood
zones, water rights); and data entries for PermitAI, the National Zoning
Atlas, USFWS IPaC, the National Wetlands Inventory, FEMA's National Flood
Hazard Layer and PAD-US. The four federal layers were picked from the
data probes in Anselm's EcoPermit devlog (`~/projects/2026/ecopermit/devlog/20260729-data-probes.md`),
which screens a site against exactly these; EcoPermit is not named on the
wiki (house rule: his own work stays out unless cited).

Where it sits in the stack (`devlog/20261019-stack.md`): rules are data
(the maps of zones) and ontology at once (the legal categories that say what
a parcel is and what may happen on it), and they are mostly published as
text, not data. Whether that earns its own shelf, or a group on Data once
the Data shelf has groups, is Anselm's call; for now it is a term plus
tagged data entries.
