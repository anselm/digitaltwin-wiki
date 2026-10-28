---
about:
  depiction: articles/metcalfe-digital-twin-maturity-levels.jpg
  depiction_credit: 'Figure 4 of the paper: the maturity levels as a matrix, with tasks done by the twin in green and by the user in blue. Metcalfe et al. 2023, CC BY 4.0.'
  label: Digital twin maturity levels
  description: >-
    Four Wageningen researchers sort twins into five levels, from one that
    only reports status to one that acts on its own, so that a project can
    agree early on which kind it is building.
  tags:
    - maturity levels
    - requirements
    - project scoping
    - knowledge pyramid
    - life sciences
    - agriculture
    - definition
    - paper
article:
  url: 'https://doi.org/10.12688/f1000research.137262.1'
  published: '2023-08-10'
  publisher: F1000Research
  authors:
    - B. Metcalfe
    - H. C. Boshuizen
    - J. Bulens
    - J. J. Koehorst
domains:
  - ecology
  - food
relations:
  - predicate: about
    target: terms/digital-twin
provenance:
  origin: agent
  sources:
    - title: 'Digital twin maturity levels: a theoretical framework for defining capabilities and goals in the life and environmental sciences (F1000Research 12:961, version 1)'
      url: 'https://doi.org/10.12688/f1000research.137262.1'
    - title: 'Digital twin maturity levels, article page with full text and referee reports, F1000Research'
      url: 'https://f1000research.com/articles/12-961/v1'
    - title: 'Digital twins as a tool for ecosystem research (Trends in Ecology & Evolution 41(8), 715-725)'
      url: 'https://doi.org/10.1016/j.tree.2026.04.016'
  created: '2026-10-28'
  reviewed: '2026-10-28'
  reviewed_by: 'Claude, from the full text and the three referee reports on F1000Research; Anselm asked for the papers behind Digital twins as a tool for ecosystem research'
  status: draft
---

The four authors work at Wageningen University & Research, and the framework came out of the university's investment programme on digital twins.[^2] It is open under CC BY 4.0.[^2] They start from two questions a project should answer before building: "What will the DT capabilities be?" and "What will the DT do?" They argue that loose definitions lead to vague goals, expectations set too high and too little involvement from stakeholders.[^2]

**What counts as a twin.** They require four parts: a physical asset, a virtual representation of it, two-way communication between them, and feedback that feeds a decision.[^2] The feedback need not be automatic; it is enough that the twin's results are used in a decision.[^2] Several points in their definition are useful for places:
- The asset can be a part or a group, a herd of cows or a field, and one asset can have several twins sharing the same sensors.[^2]
- A twin does not need a 3D picture. What is shown should follow the data, the goal and the users, and can be a dashboard, graphs or simple icons.[^2]
- Parts of a twin can update at different rates. In their example of a city, traffic volume is updated continuously while the road layout changes rarely and is often updated by hand by cartographers.[^2]
- Before fixing how often data arrive, learn the asset's own rhythms, such as daily or seasonal cycles.[^2]

**Five levels.** Earlier schemes in industry and research ranked twins in similar ways, often borrowing the levels of self-driving cars, and the authors compare them in a figure.[^2] Their own scale follows the knowledge pyramid of information management, from data through information, knowledge and understanding to wisdom.[^2] The levels are:[^2]

| Level | Name | What the twin does |
|---|---|---|
| ML0 | No twin | Measurements are scattered or missing; any model is not linked to real data. |
| ML1 | Status | Captures data in real time and shows them. |
| ML2 | Informative | Adds historical data or benchmarks, giving the values context. |
| ML3 | Predictive | Couples the data to a machine-learning or process-based model that predicts. |
| ML4 | Optimisation | Lets the user explore "what if" scenarios to see the outcome of decisions. |
| ML5 | Autonomous | Picks the best scenario and acts on it. |

The picture above is their Figure 4. Moving right, tasks pass from the user (blue) to the twin (green).[^2]

**A house plant, worked through.** At ML1 a sensor reports light, soil moisture and room temperature to a display or a small web server. At ML2 a rule turns the numbers into "low", "dry" or "cold", perhaps with colour coding, and the owner decides what to do. At ML3 the twin forecasts when the soil will need water, perhaps with a sun-angle model for light and a time-series model for moisture, kept current with data assimilation, which blends new observations into the forecast. At ML4 it answers questions such as when to water to keep the soil evenly moist. At ML5 it waters the plant itself.[^2] Development goes level by level, each a cycle of building, testing, analysis and reflection.[^2]

**The right level, not the highest.** The authors say the levels are not a ranking, and a project should settle on the level that fits its problem.[^2] A use case may also have an upper limit set by law, ethics or technical feasibility. Where knowledge is uncertain and people do not agree on what values a variable ought to have, a status twin may be the right start; where knowledge is certain and values are agreed, an autonomous twin may be sensible.[^2] Maturity is also separate from technology readiness: where networked sensors do not yet exist, the data collection of the low levels may be out of reach while modelling from other or legacy datasets is not.[^2]

The article page shows version 1 with three referee reports, each "approved with reservations".[^2] One referee called the lack of detail on how the earlier maturity models were chosen a major flaw. Another wrote that the framework gives no explicit procedure for placing a twin on the scale.[^2]

For a team planning a model of a place, the table is a quick way to agree on scope before money is spent: whether the goal is a live status map, a forecast, a tool for comparing scenarios, or something that acts without a person. The point about update rates fits places well, since some layers change by the minute and others by the decade. The 2026 paper [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) cites this framework among the literature it draws on.[^3]
