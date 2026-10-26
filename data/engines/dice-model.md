---
about:
  label: DICE
  description: >-
    William Nordhaus's one-world model of economic growth and climate, used
    to weigh the cost of cutting emissions against climate damages and to
    estimate the social cost of carbon.
  aliases:
    - Dynamic Integrated model of Climate and the Economy
    - DICE-2023
    - RICE
  tags:
    - integrated assessment
    - social cost of carbon
    - carbon price
    - economics
    - cost-benefit
tool:
  form: research model (GAMS and Excel)
  group: Weather and climate
  homepage: 'https://yale.box.com/s/whlqcr7gtzdm4nxnrfhvap2hlzebuvvm'
  cost: 'free to download; the GAMS version needs a paid GAMS licence'
open:
  source: partly
  data: open
  api: 'no'
  participation: closed
  licence: 'none stated; files carry a copyright notice'
domains:
  - climate
relations:
  - predicate: built_on
    target: engines/fair-climate-model
provenance:
  origin: agent
  sources:
    - title: 'Revision Notice and Background on DICE models (ReadMe DICE files, May 23, 2024), Nordhaus-OPEN folder'
      url: 'https://yale.box.com/s/whlqcr7gtzdm4nxnrfhvap2hlzebuvvm'
    - title: 'The Economic Consequences of Climate Change: An Interview with Nobel Laureate William Nordhaus (Yale Department of Economics)'
      url: 'https://economics.yale.edu/news/240321/economic-consequences-climate-change-interview-nobel-laureate-william-nordhaus'
    - title: 'Policies, projections, and the social cost of carbon: Results from the DICE-2023 model'
      url: 'https://doi.org/10.1073/pnas.2312030121'
    - title: 'William Nordhaus | Yale Department of Economics'
      url: 'https://economics.yale.edu/people/william-nordhaus'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the PNAS paper was read in full through
    its open-access copy on Europe PMC (PMC10990119); Nordhaus's own site,
    williamnordhaus.com, did not respond
  status: draft
---
The Dynamic Integrated model of Climate and the Economy (DICE) is an integrated assessment model.[^2,3] In one model it runs from economic activity to emissions, through the carbon cycle and climate, to damages and back to policy.[^2,3] William Nordhaus of Yale built it; the original was published at Yale in 1992.[^2,4] It has been revised several times, and the latest version, DICE-2023, is described by Lint Barrage and William Nordhaus in the Proceedings of the National Academy of Sciences, March 2024.[^1,3] A regional version, RICE, divides the world into regions; its current version was developed by Zili Yang.[^1,3]

The core is a model of economic growth (the Ramsey model) in which society can give up some consumption today to cut emissions and so be better off later through damages avoided.[^3] It is built mainly to find the best policy: it chooses the path of emissions cuts that maximises economic well-being over time, though it can also score a given policy.[^3] Damages grow with the square of the rise in global temperature since pre-industrial times.[^3] The 2023 review of studies puts them at 1.6% of world output at 3 °C of warming, though those studies leave out many impacts, such as biodiversity loss, ocean acidification and extreme events.[^3] For its carbon cycle the 2023 version uses DFAIR, adapted from the [FAIR](/engines/fair-climate-model/) impulse-response model.[^3] Emission cuts can deepen by at most 12 percentage points in each five-year period, and every scenario assumes all countries take part with one harmonised carbon price, an assumption the paper calls highly optimistic.[^3]

Its best-known output is the social cost of carbon: the damage, in today's money, done by one more tonne of carbon dioxide.[^3] DICE-2023 puts it at $66 per tonne for 2020.[^3] The US and other governments have used DICE to calculate this figure.[^2,3] The same paper projects 3.6 °C of warming by 2100 under current policies, measured from 1765.[^3]

The model is published in a public Yale folder linked from the paper.[^1,3] It holds the GAMS code (DICE2023-b-4-3-10) and an Excel version kept in step with it.[^1] Beside them are background notes on discounting, damages, non-CO2 gases and DFAIR, and a draft third edition of the user's manual dated May 2024.[^1] GAMS is a commercial modelling language; the folder's notes say a licence costs around $1000, and free trials are limited in model size.[^1] The code is marked as copyright, with no open licence.[^1]

DICE has no places in it, only one world economy with a single commodity.[^3] What it offers someone working on a place is the reasoning behind a carbon price or a social cost of carbon used to value a local project's emissions, and how much that figure moves with the discount rate and the damage estimate.[^3] For models that represent energy technologies and regions in detail, see [GCAM](/engines/gcam/), [MESSAGEix](/engines/messageix/) and [REMIND](/engines/remind-model/).
