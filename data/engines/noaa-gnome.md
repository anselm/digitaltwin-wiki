---
about:
  label: GNOME (NOAA)
  description: >-
    NOAA's oil spill trajectory model: given a spill, it shows where wind and
    currents are likely to carry the oil, how uncertain that is, and how the
    oil weathers on the surface; free on the web as WebGNOME.
  tags:
    - oil spill
    - trajectory
    - ocean currents
    - emergency response
tool:
  form: web application (WebGNOME), part of the GNOME Suite
  group: Wildlife and oceans
  homepage: 'https://response.restoration.noaa.gov/oil-and-chemical-spills/oil-spills/response-tools/gnome.html'
  cost: free
domains:
  - water
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
  note: NOAA's page states no licence. The desktop version is no longer maintained and is offered "with no expectation of usefulness or continued functionality"; WebGNOME replaces it.
provenance:
  origin: agent
  sources:
    - title: 'GNOME (NOAA Office of Response and Restoration)'
      url: 'https://response.restoration.noaa.gov/oil-and-chemical-spills/oil-spills/response-tools/gnome.html'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the source listed'
  status: draft
---
GNOME, the General NOAA Operational Modeling Environment, was built by the Emergency Response Division of NOAA's Office of Response and Restoration to predict where a pollutant spilled on water will go. A user enters a spill, and GNOME moves it with wind, currents and other processes, shows how uncertain the forecast is given uncertain winds and currents, and estimates how the oil changes while it floats. The result is an animated map of the slick and running totals of oil on the beach, still afloat, or evaporated.

For a given coast, prepared location files hold the tides and currents. In diagnostic mode GNOME can instead read the output of outside ocean and weather models. It is a surface model: oil that sinks or travels at depth, as in the [Gulf of Mexico](/questions/after-an-oil-spill/), needs other models alongside it.

The desktop program, last released as version 1.3.10 in 2017, is no longer maintained. Its successor, WebGNOME, runs in a browser at gnome.orr.noaa.gov as part of NOAA's GNOME Suite.
