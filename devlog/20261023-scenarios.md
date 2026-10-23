# Challenges: a shelf for concrete things to model (2026-10-23)

Anselm: "One of the real challenges in building a digital twin is having
extremely concrete use cases, applications, users. I notice that there's
a tendency to be nebulous about how a digital twin is used - people will
often retreat to 'well the co2 crisis is an example' - but thats both too
big a leap and too complex an issue to be trivially solved. So when I see
concrete multi-domain topics that can be modeled I am very interested in
tracking them." Then: "I'm surprised we don't have a clear category for
concrete topics to model, or multi-domain challenges."

## The shape

Use cases (`questions/`) are kinds of question: where will a flood go.
Challenges (`challenges/`, new, component `challenge` with `place` and
`since`) are one real instance in one place, with people waiting on the
answer. A challenge links to its use case with `example_of`, to the
studies with `cites`, to data with `needs`.

Each challenge page: what happened (numbers, dates, place); who needs an
answer and what decision; the domains it chains; what a model would let
people try; where to start. The test is his: concrete users, concrete
decisions, more than one domain.

First entry: the Gulf of Mexico's midwater after Deepwater Horizon, from
the PNAS paper Anselm pasted in full (pnas.org refuses our requests).

## His list

Saved verbatim at `inbox/2026-10-23-things-to-model.md`. Four writer
agents took it in groups (water; shipping and trade; land and livestock;
energy and the rest), each from pages read, X posts through
api.fxtwitter.com, then refuters. His own sites (hormuz.exe.xyz,
colorado.exe.xyz) and his essay are left out of public entries; whether
they should appear, as twins on the shelf or as links from the
challenges, is his call.

## Later the same day: Challenges become Scenarios, and a benchmark

Renamed to Scenarios (`data/scenarios/`, component `scenario`) the same
day, before anything linked to the old path. The what-if section on each
page is now "What a twin should let people try".

Anselm on why: "the colorado river and hormuz issue are good scenarios.
we don't have to be super specific about my own interest per se. why have
scenarios? because they are real and wicked problems - we have to solve
them. scenarios also exercise our mental model of what a digital twin can
do. any twin we write has to be able to tackle these scenarios. our goal
later is to build a digital twin tool - and we will measure that tool
against this."

So the shelf is a test suite for the engine, not only reading matter.
That argues for each scenario carrying, later, a short machine-readable
statement of what a twin must do to take it on: the domains to couple,
the spatial and time scales, the inputs, the what-ifs as runnable
questions, and how an answer would be checked against what happened. Not
done yet; the prose sections hold the same content for now.

Colorado River scenario commissioned (agent, from Reclamation's own
pages). Hormuz exists.

## Scale (Anselm, later the same day)

"In my mind scenarios are along a continuum, world scale issues,
bioregional issues, and local community issues." Each scenario now
carries `scenario.scale` (world, bioregion or community), and the shelf
groups by it in that order. The sorting of the 21 was Claude's
judgement; the Amazon soy moratorium went to world scale because its
decision-makers are global traders, though the forest is a bioregion.

## Why the local end matters most (Anselm, same day)

"The larger the issue, the more people that are interested - and the
smaller issues are actually more picky, pedantic, people are more
immediately aware of errors - so it is tempting to tackle world scale
issues where it is hard to critique, although it would be deeply
meaningful to accurately tackle local issues for real stakeholders who
have a very good local understanding."

For the benchmark: world-scale scenarios are hard to fail visibly, so
passing one proves little. Local scenarios come with people who can
mark the answer. When the benchmark spec is written, each local
scenario should name who could check a twin's output and against
what (a well record, a repair invoice, a count at the lagoon), and a
twin should be scored first on those.

## Scenarios from orbital-sim (Anselm, same day)

Anselm pointed to his own earlier work at https://orbital-sim.exe.xyz/
("an older paper i wrote - there are scenarios here"). Its feed
(/api/home) lists six: World Events (a globe of GDELT, UCDP and ACLED
conflict events), the Strait of Hormuz supply-chain cascade, IPCC AR6
global warming under four SSPs, Tenerife Futures (land use, water,
tourism), MENA Warming 2049 (from Malik et al. 2024) and Tuvalu Baseline
(freshwater lens, reef, fishery, population under sea-level rise). Only
the IPCC and MENA projects carry a written readme; the IPCC one is the
paper, an argument for "participatory computational argument": a
200-line energy balance model anyone can run, in the line of Cybersyn.

Hormuz is already on the shelf. Tuvalu and MENA warming are being
written as scenarios from primary pages, not from his sketches,
and without citing orbital-sim, per the rule that his own sites stay out
of public copy unless he asks. The IPCC global run is the "too big to act
on" case the shelf's intro sets aside, and World Events is a data view,
so neither becomes a scenario. Tenerife was started and dropped: Anselm
said it "was for fun"; the paper's argument belongs with the
engine, not on the wiki.

While reading it: the readme's expected-results table gives SSP1-2.6 CO2
at about 368 ppm in 2099, and says it peaks near 430 ppm in the 2040s.
Meinshausen et al. 2020 (GMD 13, 3571), the paper it cites, puts the
lowest of all SSPs (SSP1-1.9) at 393.5 ppm in 2100 and the lowest of all
in 2050 at 437.6 ppm, so both SSP1-2.6 figures are too low; the warming
in that row follows from them. Told Anselm; his repo is not touched.
