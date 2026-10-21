---
about:
  label: 'Who Drinks the River?'
  description: >-
    Scrolling story and playable water-allocation model of the Colorado River
    basin by Anselm Hook, in which readers set the flow, choose the cut rule,
    retire irrigation and share the result as a link.
  tags:
    - colorado river
    - water allocation
    - interactive
    - journalism
    - scenario
    - drought
story: {}
provenance:
  origin: agent
  sources:
    - title: 'Who Drinks the River?'
      url: 'https://colorado.exe.xyz'
    - title: 'Who Drinks the River? — the essay'
      url: 'https://colorado.exe.xyz/essay.html'
    - title: >-
        GitHub - orbitalfoundation/colorado: Who Drinks the River? — a working
        model of Colorado River allocation
      url: 'https://github.com/orbitalfoundation/colorado'
    - title: 'Computational Journalism: The Futures Desk - by Anselm Hook'
      url: 'https://anselm.substack.com/p/computational-journalism'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT070
  kind: scenario_story
  family: models_simulations_and_forecasts
  priority: high
  verified: false
  posts:
    - P138
    - P145
  posters:
    - Anselm Hook
domains:
  - water
  - places
  - people
---
The page opens on a satellite image of the dry delta. A map of the basin, tributaries and canals runs under the text, and a timeline from 1906 to 2056 has a seam at the present. Left of the seam is the Bureau of Reclamation's record of flow, reservoir storage and the promises made against that flow. Right of the seam, the model runs forward under the reader's settings. The essay, the open model and the playable app are one web page, published under the Orbital Foundation GitHub organisation.

Hook calls the form computational journalism: a live public argument, an open model and a page to play with, shipped together. He keeps it for fights where a conserved and measured quantity like water lets a model settle something.

The piece starts from a social-media claim about cattle feed and alfalfa. It shows the two denominators behind that claim: about half of direct human use, and a third of total consumption, both from the Richter 2024 water budget. Then the reader gets the levers:

- river flow as a share of the 2000 to 2024 average
- how much cattle-feed and other irrigation to fallow or retire
- urban conservation
- which rule decides who takes the cut: proportional, a stylised seniority, or the federal 2027 to 2028 framework

Retiring farmland is a one-way slider on purpose, to make irreversibility felt. Each future a reader configures is saved into a shareable link.

The page runs in the browser with no account. The repository holds the code, the data pipelines (Richter 2024 tables, Lees Ferry natural flows) and a verification ledger. It also holds validation and backtest scripts against the 2000 to 2024 drawdown. The model is deliberately small: four parties, no groundwater, no return flows, no crop economics beyond published prices.

The page, a staged prototype, is dated August 2026, and the essay is marked a working draft. Hook plans it as the first of a series of standalone pieces, with the Rio Grande next.
