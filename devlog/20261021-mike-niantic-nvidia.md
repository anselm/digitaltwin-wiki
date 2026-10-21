# Two more syntheses from Mike Liebhold: Niantic Spatial and NVIDIA (2026-10-21)

Mike sent two Google Docs exports, *Niantic Spatial's digital twin
ecosystem* (6 pages) and *Nvidia digital twin architectures and
ecosystems* (8 pages). Both read like research-assistant output: no
links at all (no URI annotations in either PDF), headings for an
"interactive architecture diagram" and "videos" with nothing under them.
Same rule as his DestinE piece (`20261020-forests-and-destine.md`): a
map to primary pages, never a source.

## Niantic: checked against Niantic Spatial's own blog

Niantic's blog has a post for nearly every item. Read today:
largegeospatialmodel, flexion-humanoid-real2sim-sim2real, vantor,
uscg-simulator, exxonmobil-visual-positioning-field-operations,
kojima-productions-partnership, vps-snap-investment, placeit3d, spz4,
rancho-cordova-hmci-city-scale-digital-twin-physical-ai,
singapore-land-authority, plus the SPZ README on GitHub.

Holds: 50 million local networks and 150 trillion parameters (the LGM
post); Flexion RGB-only navigation policy transferring zero-shot to a
real office; Vantor's Raptor joined with Niantic's VPS for a shared
GPS-free coordinate system; the Aechelon and Coast Guard partnership;
Snap's investment and VPS in Snapchat and Spectacles; Kojima (23
September 2025); PlaceIt3D at ICCV 2025, with KAUST; SPZ about ten
times smaller than PLY.

Slips: the "30 billion posed images" figure is not on the LGM page.
The Flexion post's 1,024 is evaluation rollouts per policy, not
training rollouts. Vantor's post says nothing about NGA or the Maxar
rebrand. The ExxonMobil post is an interview and says nothing about
serial numbers. Scaniverse Enterprise and its April 2026 relaunch are
not on the Scaniverse post read; not checked further. Cross-View
Splatter and ACE-G were not checked.

What fits the wiki, which is about models of places, not robots or
games: the Rancho Cordova city twin (drafted) and SPZ, the open splat
format (drafted, on the Ontologies shelf beside CityJSON). Worth a look
later: the Singapore Land Authority national VPS map, and Cross-View
Splatter if its paper says what the synthesis claims (city twins from
ground photos plus satellite images).

## NVIDIA: not checked yet

The NVIDIA synthesis covers Omniverse, Cosmos, Earth-2, factory and data
centre twins, telecom ray tracing and healthcare. Most is out of scope.
What touches places: Earth-2 (we have `engines/weathernext-nvidia-earth-2`)
and its named users, Taiwan's Central Weather Administration and the
Southwest Power Pool; a claim about street-level microclimate with PALM
and Cesium tiles in Omniverse, which names no city; and the Aerial
Omniverse Digital Twin, a city-scale radio model. Each needs NVIDIA's own
pages before anything is written.

## A third: US federal digital twins

Mike's third export, titled with its own prompt ("Please write a paper
describing and detailing all ..."), surveys US federal digital twins in
nine pages, again with no links. Most of it is defence, intelligence and
health. Six candidates fit a wiki about places; each went through
read-then-refute from the agency's own pages:

- Kept: the National Academies report *Foundational Research Gaps and
  Future Directions for Digital Twins* (2024; highlights dated December
  2023), NASA ESTO's Earth System Digital Twins under AIST, NOAA's
  National Water Model, and SAWGraph, the NSF Proto-OKN knowledge graph
  on PFAS in water, soil and farms. The refuters' corrections were hedges
  and scope: "likely heavily empirical", proposals written up as built
  work, the 2.7 million reaches being continental US only.
- Dropped, and the reason matters: the synthesis names a NITRD "National
  Digital Twins R&D Strategic Plan". nitrd.gov has only a June 2024
  request for information about such a plan. It names a NOAA "Digital
  Twin Earth Framework Specification (DTE-FS)" with a "Knowledge Mesh";
  no NOAA page read mentions either. Both look invented. The synthesis
  also gives the Genesis Mission an executive order number, which no
  page here confirms.

That makes three syntheses from Mike, and one rule holds for all three:
the programme names are mostly real and worth chasing, but the
sentences around them are not to be trusted until checked.
