# Nobody models whole systems: a reading of the corpus

Anselm, 2026-11-10: "Of all the content we have is there anybody doing predictive models of whole systems? I don't see anybody doing it - maybe Google earth is getting close? My friend amber says esri does it. I challenge her on this." Then, on the survey below: "Right - I see many individual layers - weather being done best - but no whole systems."

Claude (Fable 5.1, session 01QvbEMPfgTgBCEh7BrFsFv1) read every twin, engine and platform description and the bodies of the candidates. The conclusion rests only on what the entries record from their sources.

## Esri

`platforms/esri-arcgis` rests on Esri's own digital-twin page: GIS, 3D, BIM and sensor feeds joined in one view that "shows past and future states". The future states are someone else's model loaded as a layer. The six named projects are viewers for decisions. `twins/dangermond-preserve-digital-twin`, Esri's founders' own land with the full stack on it, says in the team's own words that the tools in use are dashboards and a decision aid and that predictive work is proposed, not built. ArcGIS has single-process tools (viewshed, hydrology, suitability). No entry records an Esri product that runs a coupled simulation forward.

## Google

`engines/google-earth-ai`, `platforms/google-earth-ai-geospatial-reasoning-agent`, `engines/planetary-prediction-engine`: foundation models for weather, floods, population and imagery, an agent that chains them to answer a question, and an engine that fits a statistical model to a user's outcome data. Prediction without a process model. No mass balance, no agents, no feedback between the parts.

## Who runs coupled forward models of a whole place

- `twins/destination-earth`: two physical twins at kilometre scale on EuroHPC. Nearest thing to the real article; people enter only as scenarios.
- `twins/ereefs`: catchment to open ocean, hydrodynamics, sediment, waves and biogeochemistry coupled since 2012. No people.
- `engines/cesm`, `engines/e3sm`, and the integrated assessment models `engines/gcam`, `engines/messageix`, `engines/remind-model`: whole systems, global and coarse. The Dyke paper's point (`articles/dyke-derailment-risk-hothouse-earth`): the economy is in one, the carbon cycle in another, never the treasury and the ocean in one loop.
- `twins/biodt`: ten prototype biodiversity models, one coupling a landscape simulator with species models. Research prototypes.
- `twins/credo`: cascading failure across four infrastructure networks under weather. Infrastructure only; release planned 2028.
- `twins/moorea-idea`: the only entry that set out to simulate a social-ecological system of one place. The entry records the 2013 aim and the founding paper, not a running simulator.
- `engines/urbanly-citycompass`, `engines/urbansim`: households, firms, developers and traffic on real parcels. Whole urban system, no ecology.
- `articles/digital-twins-for-ecosystem-research`: Visser and colleagues surveyed the field and found that none of their fifteen candidate studies combines a process model with a data-driven one.

## The reading

Weather is the one layer where the whole pipeline exists: observations, assimilation, a coupled physical model, ensembles, verification, and machine-learned emulators of all of it (`engines/aifs`, `engines/aurora`, `engines/weathernext-nvidia-earth-2`). Every other layer takes weather as an input and stops. The coupling tools exist on the Engines shelf (`engines/helics-fmi`, `engines/timelike`, `engines/modelingtoolkit`) and nobody in the corpus has used them to close the loop around one place with people and nature in it. That gap is what Anselm's own esim work is aimed at; it is not indexed here (his own work, by the house rule).

Nothing on the site was changed for this. If it becomes a page, it belongs on the Everyday questions shelf as a question, with this entry as its first source.
