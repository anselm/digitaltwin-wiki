---
about:
  label: CADI, Climate-Driven Agricultural Decline Index
  description: >-
    Global 10 km map of observed and projected change in attainable crop
    yields under climate change, from a team at IAE-CSIC and the
    Barcelona School of Economics, expressed as the number of people each
    grid cell could feed.
  tags:
    - crop yields
    - food security
    - climate projections
    - agriculture
    - SSP scenarios
    - GAEZ
datasource:
  coverage: global
  resolution: grid cells of roughly 10 by 10 km
  cadence: 20-year periods; 1981–2000 and 2001–2020 observed, 2021–2100 projected
  access: web map explorer; a data download is not stated on the site
  homepage: 'https://cadi.econai.org/'
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
  note: The site offers interactive maps only; no download, licence or API is stated.
domains:
  - food
  - climate
provenance:
  origin: agent
  sources:
    - title: CADI – Climate-Driven Agricultural Decline Index
      url: 'https://cadi.econai.org/'
    - title: CADI – Map Explorer
      url: 'https://cadi.econai.org/ssp370_absolute.html'
    - title: CADI – Team
      url: 'https://cadi.econai.org/team.html'
    - title: CADI – Results
      url: 'https://cadi.econai.org/results.html'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; the map pages carry the data inline and were read for their text, not their numbers'
  status: draft
---

CADI maps where climate change has already cut, and is expected to cut, the amount of food a place can grow. The team is Laura Mayoral, Hannes Mueller, Björn Komander and János Szentistványi, at the Institute for Economic Analysis (IAE-CSIC), the Barcelona School of Economics, IIIA-CSIC, RMIT University Melbourne and IDEA.

For each grid cell of about 10 km the project computes attainable yield, the most a location could produce under its biophysical conditions, using the Global Agro-Ecological Zones model (GAEZ v5). The crop mix in each cell is held fixed at the baseline, so only climate varies; this is a no-adaptation assumption. Attainable production for the main crops is converted to calories and reported as the number of people a cell could feed per year at 2,000 calories a day. Observed change compares the 1981–2000 climate with 2001–2020, using the AgERA5 weather data set. Projections run from 2021 to 2100 relative to the 2001–2020 baseline under the IPCC scenarios SSP3-7.0 and SSP5-8.5.

The site presents the results as an interactive map explorer with a slider over time periods, switchable between observed and projected change and between absolute and percentage values. It is aimed at policymakers, development practitioners and researchers planning adaptation. The site states no download, licence or API for the underlying grid.

The key findings reported on the site include that more than 640 million people live in agricultural areas where the number of people that can be fed has fallen by more than 10% over 30 years, and that by 2041–2060 under SSP3-7.0 about 49% of the world's population would live in cells with at least a 5% decline. A full paper is described as forthcoming; the site is dated 2026. In this wiki's stack it is a data layer.
