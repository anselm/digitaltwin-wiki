---
about:
  depiction: engines/vensim.jpg
  label: Vensim
  description: >-
    Desktop software from Ventana Systems for building, calibrating and
    sharing system dynamics models of stocks, flows and feedback; free for
    education, with paid editions for other work.
  tags:
    - system dynamics
    - stocks and flows
    - feedback
    - policy simulation
    - teaching
tool:
  form: commercial desktop modelling software
  group: Agents and system dynamics
  homepage: 'https://vensim.com/'
  licence: proprietary
  cost: free for education (PLE); paid editions from $50
open:
  source: closed
  data: unknown
  api: 'yes'
  participation: unknown
domains:
  - people
relations:
  - predicate: alternative_to
    target: engines/stella-architect
  - predicate: alternative_to
    target: engines/anylogic
provenance:
  origin: agent
  sources:
    - title: 'Ventana Systems'
      url: 'https://vensim.com/'
    - title: 'Software – Ventana Systems'
      url: 'https://vensim.com/software/'
    - title: 'Purchase – Ventana Systems'
      url: 'https://vensim.com/purchase/'
    - title: 'Free Downloads – Ventana Systems'
      url: 'https://vensim.com/free-download/'
    - title: 'Vensim® History – Ventana Systems'
      url: 'https://vensim.com/vensim-history/'
    - title: 'Structure of the PySD library (PySD documentation)'
      url: 'https://pysd.readthedocs.io/en/latest/structure/structure_index.html'
    - title: 'EMA Workbench documentation'
      url: 'https://emaworkbench.readthedocs.io/en/latest/'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Vensim is desktop software for developing, analysing and packaging dynamic feedback models, the kind of model known as system dynamics.[^2] Such a model treats a system as stocks, quantities that build up or drain away, connected by flows and feedback loops; the picture above, from Ventana's site, shows one for the adoption of a product, drawn beside its result.[^1] It is made by Ventana Systems of Harvard, Massachusetts. The company was formed in 1985, wrote Vensim as its own simulation language, and first released it publicly as version 1.50 in 1991.[^5] The current release is 10.4.0.[^2]

There are four editions.[^2,3] The Personal Learning Edition (PLE) is free for educational use and $50 for commercial use; PLE Plus adds data connections, Monte Carlo sensitivity runs (many runs with randomly varied inputs) and controls for building a simple user interface.[^2,3] Professional, for large models, adds Causal Tracing of a model's structure and behaviour, optimisation, and subscripts (arrays).[^2] DSS adds a tool for building management flight simulators, interactive games played on top of a model, along with compiled simulations.[^2] Ventana emphasises calibration against data, and SyntheSim, which simulates fast enough to show results instantly.[^2,5]

Commercial prices per user are $169 for PLE Plus, $1,195 for Professional and $1,995 for DSS, with lower prices for public research and academic use.[^3] A licence is perpetual for the version bought and includes a year of updates.[^3] Ventana asks commercial and government users to buy a licence for anything beyond evaluation, including research with no educational component.[^4] Downloads are for Windows and macOS, and the download link is sent by email.[^4] The free Vensim Model Reader can be handed out with a model, including commercially, so others can run it without buying Vensim.[^2,4]

For someone modelling a place, Vensim suits questions about totals that change over years: how a town's housing stock, a reservoir or a fish population responds to a policy, and where the feedback loops push back. Models saved in Vensim's .mdl format can be run in Python with [PySD](/engines/pysd/), and the [EMA Workbench](/engines/ema-workbench/) can drive a Vensim model through many experiments.[^6,7] For a similar tool, see [Stella Architect](/engines/stella-architect/).
