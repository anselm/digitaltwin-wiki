# Engines by method

Anselm, 2026-10-31: the core mission is to identify the simulation
modelling engines, perhaps split into sections, with a slightly novel
class singled out: tools where a person supplies rich context (global,
bioregional, local) and the tool predicts near-term outcomes for a
complex whole system, as weather forecasting already does for the
atmosphere. His words are in `20261015-principles.md`.

Until now the engines shelf has been grouped only by subject
(`tool.group`: Water and flooding, People and populations, and so on).
That says what an engine models, not how. A Claude agent read every
engine entry (153, counting the three kept as folders) and sorted it by
method. Nothing was edited; the table is `20261031-engines-by-method.tsv`
(slug, section, reason, confidence).

## Sections and counts

| | Section | n |
|---|---|---|
| A | Build-your-own frameworks: compose a model from components or equations | 5 |
| B | Agent-based toolkits: rule-based agents | 6 |
| C | System dynamics: stocks and flows | 3 |
| D | Ready-made process models of one domain, set up for a place | 49 |
| E | Learned forecasters and foundation models | 18 |
| F | Context-to-forecast whole-system engines (the novel class) | 3 |
| G | Not a simulation engine | 55 |
| H | Simulated people with language-model agents | 8 |
| I | Synthetic populations: inputs for agent and transport models | 6 |

H and I were the agent's proposals; the corpus has clear clusters there.
A will grow by five with the entries drafted on 2026-10-31 (Simulink,
ModelingToolkit, JAMES II, Simkit, AgentPy goes to B).

## The novel class is nearly empty

Read strictly, only MiroFish clearly does it today: a seed document and a
question in plain language, a population of language-model agents, a
report on how the event will likely unfold. The Planetary Prediction
Engine takes local context but learns one outcome. TimeLike aims at it
but is unreleased. Near misses: Aaru and Simile (population response,
not a whole system), Destination Earth (a whole-Earth physics twin a
user cannot feed context to), Macrocosm (a fixed economic model). That
emptiness is itself a finding for the site: the class exists for weather
and barely anywhere else.

## A third of the shelf is not engines

55 entries in G: detectors (MegaDetector, SKAI), capture and
reconstruction (VGGT, DeepReefMap), platforms (ArcGIS, Earth Engine),
and things that belong on other shelves (Walk Score and CoastSat as data
sources; CoMSES Net and the UK NDTP as organizations; bmap as
presentation). Also suggested: Destination Earth, DT-GEO, BioDT, Digital
Reefs and CReDo are projects built from models and may sit better on
twins.

## Open, his to decide

1. Show the engines shelf grouped by method, with the subject kept as a
   chip.
2. Move the G entries that belong elsewhere (no redirects; links
   rewritten), and keep detectors, capture and platforms as a
   "Supporting tools" section.
3. Move the five place-twin projects to twins.
