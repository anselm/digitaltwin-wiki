---
about:
  depiction: twins/tees-valley-traffic-twin.jpg
  label: Tees Valley Traffic Digital Twin
  description: >-
    A live model of the Tees Valley's roads, run by its combined authority,
    that forecasts traffic up to an hour ahead, spots late-running buses and
    switches signals to pre-approved timing plans.
  tags:
    - traffic
    - buses
    - signals
    - real-time
    - Tees Valley
twin:
  place: 'Tees Valley (Teesside, Darlington and Hartlepool), UK'
  scale: region
  operational: operational
  homepage: >-
    https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/
open:
  source: closed
  data: unknown
  api: unknown
  participation: unknown
  note: >-
    Runs on Aimsun Live, a commercial product; one of its inputs is the
    public Bus Open Data Service, but the pages read say nothing about the
    twin's own data or outputs being published.
domains:
  - mobility
relations:
  - predicate: built_on
    target: engines/aimsun
  - predicate: answers
    target: questions/after-a-closure
provenance:
  origin: agent
  sources:
    - title: 'Cutting-Edge Technology Set To Slash Wait Times And Boost Bus Reliability Across Our Region - Tees Valley'
      url: >-
        https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/
    - title: 'Aimsun Live – Aimsun'
      url: 'https://www.aimsun.com/aimsun-live/'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The model runs at the region's Urban Traffic Management and Control centre (UTMC), which Middlesbrough Council oversees.[^1] The centre coordinates the region's signs, cameras and signals.[^1] The twin is built on Aimsun Live, a commercial real-time traffic product.[^1,2] Inputs are live signal data, roadside data and the Bus Open Data Service, which is public.[^1,2]

Aimsun Live forecasts traffic and bus conditions up to 60 minutes ahead and picks out buses at risk of delay.[^2] It then triggers automated, pre-approved signal timing plans along a corridor.[^2] The authority says the twin started on ten key bus routes.[^1] Aimsun reports that in summer 2025 trials, buses returned towards normal speeds within 15 minutes of an intervention, and delays for all traffic fell by nearly 14 per cent.[^2] It calls the twin the first region-wide automated traffic twin in the UK connected directly to on-street signals.[^2]

The authority announced the twin alongside a separate adaptive signal control system, Yutraffic FUSION, and says it has invested more than two million pounds in the two projects together.[^1] On 14 August 2025 it said the twin was fully up and running, and that the UTMC would monitor and evaluate it over the following year.[^1]
