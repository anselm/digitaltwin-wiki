---
about:
  label: 'Emergent Properties of Balinese Water Temple Networks: Coadaptation on a Rugged Fitness Landscape'
  description: >-
    American Anthropologist paper, 1993, by J. Stephen Lansing and James N.
    Kremer: a simulation of 172 Balinese irrigation groups along two rivers
    which, as Lansing later told it, showed the water temples' shared planting
    schedules balancing water against rice pests better than planting as
    often as possible.
  tags:
    - Bali
    - subak
    - irrigation
    - rice
    - water temples
    - agent-based model
    - pest control
    - Green Revolution
    - self-organization
article:
  url: 'https://doi.org/10.1525/aa.1993.95.1.02a00050'
  published: '1993-03'
  publisher: American Anthropologist (Wiley)
  authors:
    - J. Stephen Lansing
    - James N. Kremer
domains:
  - water
  - food
  - ecology
  - people
open:
  source: unknown
  data: unknown
  api: unknown
  participation: unknown
  licence: unknown
  note: The paper is behind a paywall; the abstract is public.
provenance:
  origin: agent
  sources:
    - title: 'Emergent Properties of Balinese Water Temple Networks (Crossref record with abstract; American Anthropologist 95 (1) 97-114)'
      url: 'https://api.crossref.org/works/10.1525/aa.1993.95.1.02a00050'
    - title: "This Week's Finds in Mathematical Physics (Week 303), John Baez, quoting the opening of Lansing's Perfect Order"
      url: 'https://math.ucr.edu/home/baez/week303.html'
    - title: 'Perfect Order: Recognizing Complexity in Bali (Princeton University Press)'
      url: 'https://press.princeton.edu/node/52284'
    - title: 'Adaptive self-organization of Bali’s ancient rice terraces (PNAS 114 (25) 6504-6509, 2017)'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5488911/'
    - title: 'Coordination in irrigation systems: An analysis of the Lansing-Kremer model of Bali (Janssen 2007, CoMSES catalogue)'
      url: 'https://catalog.comses.net/publications/1668'
    - title: 'Coordination in irrigation systems (Crossref record; Agricultural Systems 93, 170-190)'
      url: 'https://api.crossref.org/works/10.1016/j.agsy.2006.05.004'
    - title: 'Stephen Lansing, Long Now seminar, 13 February 2006'
      url: 'https://longnow.org/talks/02006-lansing/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: "Claude, from the paper's abstract and Lansing's own account of the model in Perfect Order (2006) as quoted by John Baez; the publisher refused a request for the full text, so the paper itself was not read"
  status: draft
---
Balinese rice farmers belong to irrigation groups called subaks, and the subaks along a river meet in water temples that set when each one plants. In this paper the anthropologist J. Stephen Lansing and the systems ecologist James N. Kremer built a computer model to ask what the temples do for the ecology of the rice terraces. The abstract's answer is that the temple networks shape the "adaptive landscape" the farmers work in, and may be one of a class of complex adaptive systems that evolved to manage farming.

The trade-off the model captures is between water and pests. A subak upstream that takes water when it likes leaves less for the subaks below. But if many neighbouring subaks plant and then leave their fields fallow and flooded at the same time, the rice pests lose their habitat across a large block and their numbers fall. Each subak's choice changes both the water and the pests for its neighbours.

Lansing tells how the model was built in his 2006 book Perfect Order, and the details below are from that telling rather than from the paper. The two plotted all 172 subaks between the Oos and Petanu rivers in central Bali. They gathered rainfall, river flows and irrigation schedules, the water use of rice and vegetables, and the population dynamics of the main rice pests. Each simulated year, every subak is given a twelve-month planting schedule; the model then runs rainfall from historic records, river flow, crop growth and pest damage, and reports harvests, water shortages and pest losses. Tested against real yields for about half the subaks over two cropping seasons, it predicted most of the variation in yield from one subak to the next.

They then compared ways of running the watershed. When every subak planted rice as often as possible and ignored the temples, the Green Revolution approach, the model lost large parts of the crop to pests and water shortages, as had happened in Bali. The water temple schedules gave the best harvests. Lansing presented the model at the Santa Fe Institute in 1992, and he writes that consultants evaluating the Asian Development Bank's irrigation project in Bali later acknowledged the conclusions.

The next step, in the book's telling, came from a question after that lecture: the researcher Walter Fontana asked whether the temple networks could organise themselves. Lansing and Kremer gave each simulated subak one rule: after each harvest, compare your harvest with your four nearest neighbours and copy the best of them if any did better. They expected chaos. Within about a decade of simulated years, the subaks had formed cooperative networks that closely resembled the real ones. Janssen's 2007 abstract credits the 1993 paper with showing that the coordination problem can be solved by simple local rules for each subak's decisions; the four-neighbour rule and the decade come from the book.

The work has been tested and extended since. Marco Janssen re-ran the model in Agricultural Systems in 2007 and found that the subaks' ability to organise themselves depends on the pest dynamics and on how the farmers are assumed to decide. A 2017 PNAS paper by Lansing and six co-authors proposed an evolutionary game of the farmers' decisions and matched the spatial patterns of planting it predicts against multispectral satellite images of six rice-growing regions. It also sets out the history: by 1977, 70% of southern Bali's rice terraces were planted with Green Revolution rice, and within two years irrigation workers were reporting "chaos in water scheduling" and "explosions of pest populations". Harvests began to recover only when farmers returned to synchronised planting.

The paper is a small, complete model of a place that was used in a policy argument: one watershed, a few coupled processes, local data, a test against real harvests, and a comparison of the way things were run against the way planners proposed.
