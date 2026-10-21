---
about:
  depiction: engines/hydrata.jpg
  label: Hydrata
  description: >-
    Browser-based flood modelling service that runs the open-source ANUGA
    solver in the cloud, free for models shared publicly.
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
open:
  source: partly
  data: partly
  api: unknown
  participation: unknown
  licence: 'MIT (run_anuga)'
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
A user imports topography, draws the model boundary in the browser, sets friction and rainfall and adds scenarios. The simulation runs in the cloud on ANUGA, a shallow-water solver developed by Geoscience Australia and the Australian National University. A shallow-water solver computes how water spreads over ground. Results stream back to a live portal, where they can be compared with historic flood event data for the place. Models can be public or private. The site is aimed at consultancies, local authorities, dam owners, water utilities and researchers.

Hydrata runs the unmodified open-source solver through the same pipeline, and says a run on the site should match a local ANUGA run of the same version on the same inputs. ANUGA has a suite of more than thirty benchmark problems: laboratory flumes, field observations and analytical solutions. It has been used in over a hundred peer-reviewed papers and in Geoscience Australia's national tsunami risk assessments. Hydrata's validation page lists the Merewether urban flood in Newcastle, New South Wales, as a benchmark verified on Hydrata against observed flood marks.

Publicly shared models are free. Private collaboration needs a paid plan. A further paid service has a Hydrata analyst verify a model and deliver a chartered-engineer advisory in a review portal.

A model's scenario file can be exported and run locally with run_anuga, an MIT-licensed tool on GitHub for Windows and Linux that needs no Python install. Its input is a folder with a scenario.json, a DEM (digital elevation model, a grid of ground heights), boundary lines and rainfall polygons. Output is GeoTIFF rasters of depth, velocity and stage, plus a NetCDF time series. run_anuga is an early version, without culverts, bridges, hazard classification or a GUI.
