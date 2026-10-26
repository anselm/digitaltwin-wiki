# Gaps from "Simulate the World" (Anselm's primer)

2026-10-26. Anselm: "if we want a rich source of fuel for engines and other resources on the orbital-sim.exe.xyz we wrote a simply gigantic pdf a while back - that was a summary of all of our earlier thinking over the last couple of years regarding simulations."

The book is `~/projects/2027/orbital/orbital-primer` (256-page PDF in build/, built 2026-07-15; markdown in chapters/; also served from orbital-sim and orbital.foundation as simulate-the-world.pdf). It is his own work, so it is fuel, not a citation: entries are written from each project's own pages. tools/coverage.js found nothing because the reference chapters name tools without links; the list below is chapters 81 (tools, institutions, people) and 91 (data sources) checked by name against data/ on 2026-10-26. Names already with an entry (NetLogo, Mesa, GAMA, AnyLogic, GCAM, Copernicus Data Space) are left out.

Further fuel not yet read: chapter 05 (landscape of simulation), 80 (scenario library), 82 (media companion), and `~/projects/2027/orbital/orbital-wiki/theory/20260501-sims-existing-authors-tools.md` (220 lines).

## Engines with no entry

- System dynamics: Vensim, Stella Architect, PySD (runs Vensim and Stella models in Python)
- Agent-based: Agents.jl, Repast HPC, FLAME GPU 2
- Exploratory modelling under deep uncertainty: EMA Workbench
- Reduced-complexity climate: FaIR, MAGICC, Hector
- Integrated assessment: DICE, MESSAGE, REMIND (GCAM exists)
- Economy: EXIOBASE (multi-regional input-output), GTAP (trade, CGE)
- Platforms: Google Earth Engine, Microsoft Planetary Computer, CoMSES Net / OpenABM model library
- Macrocosm (Doyne Farmer's agent-based economy and climate company)

## Data with no entry

- Trade and economy: UN Comtrade, Observatory of Economic Complexity, OECD input-output tables
- Food and minerals: FAOSTAT, USGS Mineral Commodity Summaries
- Climate: ERA5 on the Copernicus Climate Data Store, CMIP6 via ESGF, NASA Earthdata, NOAA NCEI
- Terrain and ocean: Copernicus DEM, SRTM, GEBCO, Natural Earth
- Ocean: NOAA Coral Reef Watch, Global Fishing Watch, Copernicus Marine
- Land: NLCD, LANDFIRE (fuels; the fire entry would use it), Hansen Global Forest Change, Global Forest Watch
- People: WorldPop, SEDAC, UN World Population Prospects
- Biodiversity: IUCN Red List, GBIF, Living Planet Index (eBird is being written for the Kankakee birds)

## Organizations and people

- Santa Fe Institute, Stockholm Resilience Centre, PIK, CASA at UCL
- Jay Forrester, Donella Meadows, Doyne Farmer, Kate Raworth, Mike Batty, Daniel Christian Wahl, Bret Victor

## Suggested first wave (Claude)

The ones a place modeller reaches for first, and that existing entries already lean on: Google Earth Engine, ERA5, GBIF, WorldPop, LANDFIRE, NLCD, Global Fishing Watch, FaIR, PySD, CoMSES Net. Written from each project's own pages, with a refute pass, as drafts.
