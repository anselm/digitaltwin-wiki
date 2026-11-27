---
about:
  label: Regime Shifts DataBase
  description: >-
    Stockholm Resilience Centre's catalogue of documented regime shifts in social-ecological systems, each with its drivers, feedbacks, impacts and management options
  tags:
    - regime shifts
    - tipping points
    - resilience
    - ecosystem services
    - case studies
    - global
datasource:
  homepage: 'https://www.regimeshifts.org/'
  coverage: global, local to global scale
  cadence: unknown
open:
  source: open
  data: partly
  api: 'no'
  participation: open
  licence: CC BY-NC-SA 4.0 (site); GPL-3.0 (GitHub repository)
  note: The data page offers the database for academic and educational use; anyone can propose a regime shift or case study, or edit the source files on GitHub.
domains:
  - ecology
  - people
  - places
relations:
  - predicate: about
    target: terms/tipping-points
    note: the shifts the database records
provenance:
  origin: agent
  sources:
    - title: 'Regime shifts'
      url: 'https://www.regimeshifts.org/'
    - title: 'About the Regime Shifts Database'
      url: 'https://www.regimeshifts.org/about'
    - title: 'Regime Shifts'
      url: 'https://www.regimeshifts.org/regime_shifts'
    - title: 'Datasets'
      url: 'https://www.regimeshifts.org/data'
    - title: 'How to contribute'
      url: 'https://www.regimeshifts.org/contribute'
    - title: 'Common pool resource harvesting'
      url: 'https://regimeshifts.netlify.app/rs22_common_pool_resource_harvesting.html'
    - title: 'The Regime Shifts Database: a framework for analyzing regime shifts in social-ecological systems (Ecology and Society 23(3):9, 2018)'
      url: 'https://www.ecologyandsociety.org/vol23/iss3/art9/'
    - title: 'juanrocha/RSDB'
      url: 'https://github.com/juanrocha/RSDB'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A regime shift is a large, lasting change in how a social-ecological system is built and how it works, with large effects on the ecosystem services it provides.[^1] The Regime Shifts DataBase collects the ones documented in the scientific literature.[^1,2] A social-ecological system takes people and nature together, such as a lake and its watershed with the people living there.[^7] It keeps to shifts with large effects on ecosystem services and human well-being.[^2] The Stockholm Resilience Centre leads it, with Reinette Biggs and Juan Rocha as its contacts.[^2,4]

Entries come at two levels. A generic type, such as freshwater eutrophication, bush encroachment or a sprawling versus compact city, sums up a shift seen in many places.[^3,5] A case study describes one shift in one place, such as eutrophication in the Baltic Sea.[^5] Each entry draws on the literature to set out what drives the shift and which feedbacks hold each state in place. It also covers the impacts on people and nature and the ways to manage the shift.[^7] The framework behind it gives each entry a causal loop diagram, a sketch of which causes push which effects, plus a narrative and a set of coded fields such as spatial scale, time scale, reversibility and the confidence in the evidence.[^6,7] Some entries, the common pool resource one among them, have no feedback analysis yet.[^6] Each description is reviewed by an expert before it goes online wherever possible.[^2]

The common pool resource entry shows what a record holds. Its two regimes are cooperation with healthy resource levels, and overharvesting.[^6] The shift comes when ostracising people who overharvest stops working, because the gains from overharvesting outweigh the cost of being shunned.[^6] It is marked as hard to reverse, its evidence comes only from models, and its existence is rated speculative.[^6]

The 2018 paper describing the database counted 28 generic types and more than 300 case studies.[^7] By October 2026 the map on the home page linked to more than 3,500.[^1] The database has been used in assessments for the Convention on Biological Diversity, IPBES and the Arctic Resilience Assessment.[^2] The original site was hacked, and the one now online is a development version.[^1]

The records for generic types and for case studies download as CSV or Excel files.[^4] The database is offered for academic and educational use under CC BY-NC-SA 4.0, a licence that rules out commercial use.[^1,4] The entries are also kept as R Markdown files in a GitHub repository under GPL-3.0, and changes can come in as pull requests.[^5,8] Each regime shift is a kind of [tipping point](/terms/tipping-points/).
