---
about:
  label: 'Who Drinks the River?'
  description: >-
    Scrolling story and playable water-allocation model of the Colorado River
    basin by Anselm Hook; readers set the flow, choose the cut rule and retire
    irrigation, then share the future they built as a link.
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
Who Drinks the River? is a single web page that combines an essay, an open model and a playable app about Colorado River water allocation, made by Anselm Hook and published under the Orbital Foundation GitHub organisation. The page opens on a satellite image of the dry delta, puts a map of the basin, tributaries and canals under the text, and runs a timeline from 1906 to 2056 with a seam at the present. Left of the seam is the Bureau of Reclamation's record of flow, reservoir storage and the promises made against it; right of the seam the same timeline is the model running forward under the reader's settings.

The author calls the form computational journalism: a live public argument, an open model and a page to play with, shipped together, chosen only for fights where a conserved and measured quantity like water lets a model settle something. The piece takes a claim from social media about cattle feed and alfalfa, shows the two denominators behind it (about half of direct human use, a third of total consumption, from the Richter 2024 water budget), and then hands over the levers: river flow as a share of the 2000 to 2024 average, how much cattle-feed and other irrigation to fallow or retire, urban conservation, and which rule decides who takes the cut (proportional, a stylised seniority, or the federal 2027 to 2028 framework). Retiring farmland is a one-way slider on purpose, to make irreversibility felt. Every configured future serialises into a shareable link.

It runs in the browser with no account. The code, the data pipelines (Richter 2024 tables, Lees Ferry natural flows) and a verification ledger are public in the repository, which also holds validation and backtest scripts against the 2000 to 2024 drawdown. The model is deliberately small: four parties, no groundwater, no return flows, no crop economics beyond published prices.

Status: a staged prototype, dated August 2026 on the page itself, with the essay marked a working draft. The author describes it as the first of a series of standalone pieces, with the Rio Grande named as the next.
