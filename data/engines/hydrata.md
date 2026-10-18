---
about:
  label: Hydrata
  description: >-
    Browser-based flood modelling platform that runs the open-source ANUGA
    solver in the cloud; users draw a model, run scenarios and compare the
    results with historic floods, free when the model is shared publicly.
  tags:
    - flood
    - hydraulics
    - anuga
    - cloud
    - modelling
    - browser
tool:
  homepage: 'https://hydrata.com/'
  form: hosted platform
  group: Water and flooding
  cost: 'free for public models; paid for private collaboration and expert review'
provenance:
  origin: agent
  sources:
    - title: 'Hydrata - Hydraulic Model Verification'
      url: 'https://hydrata.com/'
    - title: 'Validation - Hydrata Documentation'
      url: 'https://hydrata.com/docs/validation/'
    - title: 'GitHub - Hydrata/run_anuga: Run an ANUGA simulation using hydrata.com format.'
      url: 'https://github.com/Hydrata/run_anuga'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT027
  kind: scenario_platform
  family: models_simulations_and_forecasts
  priority: high
  verified: true
  posts:
    - P117
  posters:
    - David Kennewell
domains:
  - water
relations:
  - predicate: built_on
    target: engines/anuga
    note: uses solver (source_claim; exact implementation not independently tested)
---
Hydrata is a web platform for building and checking flood models. A user imports topography, draws the model boundary in the browser, sets friction and rainfall and adds scenarios; the simulation runs in the cloud on ANUGA, the shallow-water solver developed by Geoscience Australia and the Australian National University, and results stream back to a live portal where they can be compared with historic flood event data for the place. Models can be public or private. The site addresses consultancies, local authorities, dam owners, water utilities and researchers. It does not say who runs Hydrata or where it is based.

Hydrata's case for trusting its results is that it runs the unmodified open-source solver through the same pipeline, so a run on the platform should match a local ANUGA run of the same version on the same inputs. Its validation page points to ANUGA's suite of more than thirty benchmark problems (laboratory flumes, field observations and analytical solutions), its use in over a hundred peer-reviewed papers and in Geoscience Australia's national tsunami risk assessments, and lists the Merewether urban flood in Newcastle, New South Wales, as a benchmark verified on Hydrata against observed flood marks.

Publicly shared models are free; private collaboration needs a paid plan, and a further paid service has a Hydrata analyst verify a model and deliver a chartered-engineer advisory in a review portal. A model's scenario file can be exported and run locally with run_anuga, an MIT-licensed tool on GitHub for Windows and Linux that needs no Python install, takes a folder with a scenario.json, a DEM, boundary lines and rainfall polygons, and writes GeoTIFF rasters of depth, velocity and stage plus a NetCDF time series. Its README calls it an early version without culverts, bridges, hazard classification or a GUI.

Status: an active product with sign-up and paid plans; no version or launch date is stated.
