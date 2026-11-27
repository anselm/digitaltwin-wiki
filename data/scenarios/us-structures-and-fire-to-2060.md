---
about:
  label: Fire and buildings in the United States to 2060
  description: >-
    A 2026 study projects that fire will destroy nearly three times as many
    US buildings a year by mid-century if nothing changes. Which changes, and
    where, would bend that curve?
  tags:
    - wildfire
    - United States
    - housing
    - building codes
    - land use
    - insurance
scenario:
  pace: slow
  role: argument
  place: The contiguous United States, with the West losing most and the central and eastern states rising fastest
  since: '2025'
  scale: world
domains:
  - fire
  - places
  - climate
  - people
relations:
  - predicate: example_of
    target: questions/wildfire
  - predicate: example_of
    target: questions/housing-and-land-use
  - predicate: needs
    target: data-sources/fire/landfire
provenance:
  origin: agent
  sources:
    - title: 'Fire risk to U.S. structures nearly triples by mid-century. Iglesias and others, Nature Communications, published 3 November 2026'
      url: 'https://www.nature.com/articles/s41467-026-78904-z'
  created: '2026-11-21'
  reviewed: '2026-11-21'
  reviewed_by: 'Claude, from the one paper listed, which the wiki describes at articles/fire/fire-risk-to-us-structures-2060. Anselm named the subject as worth simulating. The lists of who needs an answer and what to try are the wiki''s, not the paper''s.'
  status: draft
---
In January 2025 the Eaton and Palisades fires destroyed roughly 16,000 structures in Los Angeles.[^1] A study published in November 2026 sets that against the long run: under present trends, with no change in how and where Americans build, the yearly number of buildings damaged or destroyed by fire in 2051 to 2060 is 1.85 to 3.2 times that of 2011 to 2020.[^1] Area burned doubles nationwide. Building continues in fire-prone country. The loss per area burned is as high in the East as in the West.[^1] The wiki's entry on [the paper](/articles/fire/fire-risk-to-us-structures-2060/) gives its method and three figures in its text that do not reconcile.

The paper is a baseline with no adaptation, and says so.[^1] That is what makes it a scenario for a model. It gives the curve, and leaves open which actions would bend it and by how much.

## Who needs an answer

This list is the wiki's reading of who the result bears on.

- State legislatures and building-code bodies. The paper notes that fire-resistant building standards have recently been proposed or adopted in Colorado and California.[^1]
- County and city planners who decide where subdivisions go. The paper attributes much of the growth in exposure to low- and medium-density building next to vegetation, enabled by lenient land-use rules.[^1]
- Insurers and their regulators. The paper puts the insured losses of the Los Angeles fires in the tens of billions of dollars.[^1]
- Fire agencies in the central and eastern states, where risk is projected to rise fastest from a low base and where the paper says historical perception lags the changing geography.[^1]
- Residents of the western census tracts where the highest projected risk meets poverty or a heavy housing cost burden: 30 per cent of the highest-risk tracts in the West.[^1]

## The domains it chains

Climate sets fuel dryness and the length of the fire season. Vegetation and land management set the fuel. Housing markets and land-use rules set where buildings go. Building materials and the spacing of houses set whether a fire that arrives takes one house or a street. Insurance and public spending set who pays and whether people rebuild in the same place. The paper models the first and third as trends and folds the rest into one index held constant.[^1]

## What a twin should let people try

- A building code: the loss per area burned falls for structures built after a given year, in the states that adopt it, and the national curve is redrawn.
- A different pattern of growth: the same number of new homes placed as infill and not at the edge of vegetation.
- Fuel treatment: area burned reduced near settlements by prescribed fire or thinning, at a stated cost per hectare.
- A different emissions pathway. The paper uses one, RCP 4.5.[^1]
- The rare catastrophe. The paper finds that about 0.17 per cent of fires account for all structure losses and that totals could exceed its projection if large suburban fires become more frequent.[^1] A model should let that frequency be changed.
- Retreat: buildings not rebuilt after a fire, and what that does to exposure over decades.

No tool on this wiki does all of this at national scale. The paper's own method, three quantities multiplied for each ecological region, can take the first four as changed inputs. The last two need a model in which individual fires and individual decisions to rebuild are represented.

## Where to start

The paper's data are public: fire perimeters from Monitoring Trends in Burn Severity, buildings by year from HISDAC-US, and structure losses from ICS-209-PLUS.[^1] Its code was not publicly reachable when the wiki's entry on it was written. [LANDFIRE](/data-sources/fire/landfire/) gives fuels and vegetation, and [NASA FIRMS](/data-sources/fire/nasa-firms/) gives active fires for watching each season against the projection. For one county, the four-step version at the end of the paper's entry is the smallest model that answers the question. Fire-spread tools such as [Technosylva](/engines/wildfire-and-risk/technosylva/) answer the complementary question of which streets burn under which wind.
