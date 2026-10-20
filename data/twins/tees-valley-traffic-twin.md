---
about:
  depiction: twins/tees-valley-traffic-twin.jpg
  label: Tees Valley Traffic Digital Twin
  description: >-
    Tees Valley Combined Authority runs a live model of the region's roads,
    built on Aimsun Live, at the traffic control centre in Middlesbrough; it
    spots late-running buses and triggers pre-approved signal timing changes.
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
The Tees Valley Traffic Digital Twin is a live model of the road network of Tees Valley, in the UK, run by Tees Valley Combined Authority at the region's Urban Traffic Management and Control centre (UTMC) in Middlesbrough, which Middlesbrough Council oversees. The centre coordinates the region's signs, cameras and signals. The twin runs on Aimsun Live, a commercial real-time traffic product from Aimsun, and takes live signal data, roadside data and the Bus Open Data Service as inputs.

Its job is to find buses that are running late and act on them. Aimsun's page says it forecasts traffic and bus conditions up to 60 minutes ahead, identifies buses at risk of delay, and triggers automated, pre-approved signal timing plans along a corridor; the authority says it started on ten key bus routes. Aimsun reports that in summer 2025 trials buses returned towards normal speeds within 15 minutes of an intervention and delays for all traffic fell by nearly 14 per cent, and calls it the first region-wide automated traffic twin in the UK connected directly to on-street signals. The authority announced it alongside a separate adaptive signal control system, Yutraffic FUSION, and says it has invested more than two million pounds in the two projects together.

Nothing about it is open. It is a government operation built on a vendor platform; the pages read do not mention a public viewer, data download, code or API. One of its inputs, the Bus Open Data Service, is a public source.

Status: the authority said on 14 August 2025 that the twin was fully up and running and would be monitored and evaluated by the UTMC over the following year.
