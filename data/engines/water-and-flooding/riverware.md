---
about:
  label: RiverWare
  description: >-
    Licensed river and reservoir model from the University of Colorado, in
    which operating policy is written as rules; the US Bureau of Reclamation
    plans the Colorado River with it.
  tags:
    - river basin
    - reservoirs
    - water policy
    - hydropower
    - water accounting
tool:
  tier: 2
  form: licensed desktop software for Windows
  group: Water and flooding
  homepage: 'https://www.riverware.org/'
  cost: 'first seat 8,000 US dollars for one year at standard prices from July 2026; academic, renewal and multi-year prices are lower'
open:
  source: closed
  data: unknown
  api: unknown
  participation: 'no'
domains:
  - water
  - energy
relations:
  - predicate: alternative_to
    target: engines/water-and-flooding/swat
provenance:
  origin: agent
  sources:
    - title: 'RiverWare (home page), CADSWES, University of Colorado Boulder'
      url: 'https://www.riverware.org/'
    - title: 'RiverWare overview: what RiverWare can do, rulebased simulation, applications, a supported software product'
      url: 'https://www.riverware.org/riverware/overview.html'
    - title: 'RiverWare licence prices, 1 July 2026 to 30 June 2027'
      url: 'https://www.riverware.org/riverware/LicensingRW/index.html'
    - title: 'Hyun, Huang, Yang, Tidwell and Macknick (2019), Using a coupled agent-based modeling approach to analyze the role of risk perception in water management decisions, Hydrology and Earth System Sciences 23:2261-2278 (abstract only)'
      url: 'https://doi.org/10.5194/hess-23-2261-2019'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: "Claude, from the maker's own pages. The overview pages on applications and capabilities are dated October 2015, so the list of users may be out of date. The licence agreement, the user guide and independent accounts of the software were not read. The 2019 paper was read as its abstract only."
  status: draft
---
RiverWare is software for modelling a river basin and its reservoirs, made by the Center for Advanced Decision Support for Water and Environmental Systems (CADSWES) at the University of Colorado Boulder.[^2] A basin is built by picking features such as reservoirs, reaches and diversions from a palette, linking them, and choosing the physical equations each one uses.[^2]

## Policy as rules

Its distinguishing feature is how it treats operating policy. In rulebased simulation the model is driven by prioritised "if-then" statements, written by the user in a language the program supplies, in place of fixed input values.[^2] The maker says the benefit is that "the rules represent policies as dynamic data, which can be viewed and modified outside the compiled code".[^2] Rules can be reordered and switched on and off between runs.[^2] The same basin can also be run as a plain simulation or as an optimisation, and a water accounting mode tracks whose water is where.[^2]

That makes it a tool for the question a managed river raises: under this set of rules and this hydrology, who gets how much water, and when.

## Who uses it

The maker's overview, last edited in 2015, lists these.[^2]

- **Colorado River.** The US Bureau of Reclamation replaced its long-term planning model and its mid-term operations model with RiverWare models, used "for policy negotiations" and to set monthly target operations for the basin. The wiki's scenario on [the Colorado River after 2026](/scenarios/colorado-river-after-2026/) rests on these models.
- **Tennessee Valley.** The Tennessee Valley Authority schedules more than 40 reservoirs and hydropower plants at a six-hour step, balancing flood control, navigation, aquatic life, recreation and power.
- **Upper Rio Grande.** A model run by three federal agencies tracks native and imported water against compact deliveries, treaty obligations, Indian water rights and private contracts.
- **San Juan Basin.** Operating policies meet water supply and flood control and improve habitat for two endangered fish.

## Using it

RiverWare is licensed, not open. The standard price for a first seat is 8,000 US dollars for one year from July 2026, with lower prices for further seats, renewals, longer terms and academic use, and the maker invites enquiries about discounts for lower-income countries.[^3] It says the university is not-for-profit and the revenue goes to maintaining the software.[^3] It runs on Windows 10 and later.[^3] Version 9.7.5 was released on 12 November 2026, and CADSWES runs training courses and a yearly user group meeting.[^1]

Two supporting programs are listed on the home page, a RiverWare Viewer and the RiverWare Interactive Scenario Explorer (RiverWISE).[^1] Their pages were not read for this entry; they may be the route by which someone without a licence can look at a model's results.

Because the agencies that run large western US rivers use RiverWare, a community that wants to test a proposal against the official model of its river has to work in it or with someone who does. The software does not simulate how farmers or cities respond to shortage; one research group coupled an agent-based model of irrigators' decisions to a RiverWare model of the San Juan basin in both directions, and reported that it reproduced historical changes in irrigated area and streamflow.[^4] [SWAT](/engines/water-and-flooding/swat/) covers the land side of a watershed: runoff, crops, sediment and nutrients.
