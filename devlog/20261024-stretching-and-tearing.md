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

# Law as a shelf; phase transitions and Vitals (2026-10-24, later)

Anselm: "lets add law as a shelf." Done: `data/law/`, Technologies,
between Data and Ontologies; the six rules-layer entries moved there with
redirects.

Anselm: "i think we are missing a concept of phase transitions. should it
be in vitals? i tried very hard with the hormuz.exe.xyz simulation to try
surface tearing in different countries as a function of scarcity - it's
just so hard to understand where countries or bioregions 'tear'."

My answer, and what is being built:

- Vitals shows global variables, and a global variable can only stretch.
  Running early-warning statistics (autocorrelation, variance) on a global
  mean would be misleading: the signals belong to a single system near a
  single threshold, and a global average blends many. So Vitals should not
  pretend to detect tearing.
- What Vitals can honestly show is the distance to known tears: the 2022
  reassessment's warming thresholds for the sixteen tipping elements, drawn
  as a ladder of ranges beside the global temperature line. The line is
  the stretching; the ladder is where the tears are thought to be. An
  agent is gathering the numbers from a page it can read (`data/vitals/thresholds.json`).
- The harder half is the one Hormuz ran into. Hormuz modelled a breaking
  point as a threshold with a named consequence (country, flow, the
  function that needs it, the line below which the function fails, what
  fails; `~/projects/2026/hormuz/devlog/20260923-breaking-points-and-the-through-line.md`).
  A country tears where a function fails, and that line is set by
  dependence and by time windows (a planting season, months of import
  cover), not by a physical constant, which is why it is so hard to see
  from the variables. Two places where people already classify such tears
  in human terms: the Regime Shifts DataBase (social-ecological regime
  shifts with their drivers and feedbacks) and the IPC famine phases.
  Both are being added as data entries, and the Tipping points term gains
  a section on societies and economies.
- Not done, and maybe the real piece: a page (Communication or
  Presentation) on how to show a tear, using Hormuz's two axes
  (dependence and stress) as one worked approach. Anselm's call whether
  that is his essay or a wiki entry.

# No redirects; bioregional tearing needs real models (2026-10-24, later)

Anselm: "oh lets not do redirects - its ok to hard switch over still -
lets get it right before it is popular." All eight redirect stubs are gone
(the six law moves, admin to todo, books to media). The rule is in
CLAUDE.md. The code that drew redirects stays, unused.

Anselm: "we do not have bioregional tearing yes. that may be where we
actually need to run real models."

So the gap is named: the wiki can show global distance to known
thresholds (Vitals), classified tears in human terms (IPC), and catalogued
regime shifts (the database), but nothing that says where a bioregion
tears. That cannot be looked up; it has to be run. A bioregional model
would couple the physical layer (water, soil, fire, a forest's own
rainfall) to the dependence layer Hormuz modelled (what the region needs
from outside, its stocks, its time windows) and look for the runs that
flip. It is the same kind of self-contained experiment as the town twin
(`devlog/20261023-town-twin-experiment.md`), one scale up, and the
candidates already on the Scenarios shelf at bioregional scale (the
Indonesian peat fires, San Joaquin groundwater, the Delta, Alwar's
johads) each have a known threshold to test against. Anselm's call which,
and when.
