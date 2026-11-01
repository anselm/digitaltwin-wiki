# Engines by standing

Anselm, 2026-11-01, on the method sort of the day before: "I would group
the engines by some measure of power utility relevance or speciality -
most of these engines are just toys, or obsolete or never widely
supported - some are just detectors or 3d capture tools - the 'method'
per se or language or how a goal is achieve is less important. Things
that are not engines should go elsewhere yes. Basically it's hard for a
human to look at a page of 153 'engines' and pick one. Probably only a
few of them are actually useful."

## What was done

1. 59 entries left the engines shelf (an agent, links rewritten, no
   redirects): 24 to a new Capture and detection shelf (detectors,
   imagery mapping, 3D capture), 12 to a new Platforms shelf (ArcGIS,
   Earth Engine, iTwin, cloud twin services, Planetary Computer,
   Nextstrain), 5 to Data, 5 to Presentation, 4 to Organizations, 2 to
   Communication, 7 to Twins (Destination Earth, DT-GEO, BioDT, Digital
   Reefs, CReDo, and two poor fits: WANSEC and the Gran Chaco drone
   seeding pilot). Both new shelf pages are `proposed`.
2. The 99 that remain carry `tool.tier`, set by three agents from
   evidence gathered on 2026-11-01 (GitHub activity, latest release,
   OpenAlex citations, users named by the maker, access). The table with
   evidence and a reason per engine is `20261101-engines-by-standing.tsv`.
   The shelf now shows four bands; within a band, tools on the same
   subject sit together.

| tier | band | n |
|---|---|---|
| 1 | Widely used | 20 |
| 2 | Specialist | 37 |
| 3 | New or unproven | 30 |
| 4 | Research, dormant or closed | 12 |

Widely used: AnyLogic, Simulink, Vensim, NetLogo, Mesa, MATSim, SUMO,
Aimsun, UrbanSim, GCAM, PyPSA, Delft3D, OpenFOAM, the National Water
Model, DSSAT, Ecopath with Ecosim, InVEST, Circuitscape, CadnaA,
Radiance. Isaac Sim was put there by its agent and moved down by hand
because it simulates robots, not places.

## Soft calls

- Aimsun, CadnaA and AnyLogic rest on makers' own adoption claims;
  Radiance, Simulink and InVEST on the agents' judgement that they are
  the first name in their field, without user counts.
- MESSAGEix and MAGICC are IPCC standards but tier 2 (expert setup, a
  GAMS licence, registration). AIFS is operational at ECMWF but tier 2,
  since most people use its forecasts, not the model.
- MiroFish (83k GitHub stars, no shown use) and Aurora (research only by
  Microsoft's own statement) are tier 3. Generative Agents (2,188
  citations, code idle since 2023-24) and TimeLike (unreleased) are
  tier 4.

The bands are judgements and say so on the shelf page; a tier is a
field in each entry, changed by hand when the evidence changes.

## Twins, the same way (2026-11-01)

Anselm: "Leave those two in twins - twins also could be sorted by
quality." An agent gathered evidence for all 26 (live or not, who relies
on it, what is open, end dates); table in `20261101-twins-by-standing.tsv`.
Bands: Running and relied on 3 (Chesapeake CAST, the NSW Spatial Digital
Twin, the Tees Valley traffic twin), Running 9, Pilot or prototype 6,
Ended, dormant or other 8. Soft calls between bands 1 and 2: eReefs (its
near-real-time runs paused since January 2024), Destination Earth,
Virtual Singapore, Zürich, Boston, 3D Amsterdam. He also said shelf pages
should not editorialise or describe the site's wider structure ("we may
insert or remove layers"), so the shelf intros now describe only their
own shelf.
