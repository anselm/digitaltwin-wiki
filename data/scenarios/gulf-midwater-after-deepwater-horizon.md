---
about:
  label: "The Gulf of Mexico's midwater after Deepwater Horizon"
  description: >-
    Sixteen years after the spill, the fish, krill and squid of the Gulf's
    open water are still 60 to 85% below their 2011 numbers, and the whales
    that eat them are down too. Is it recovering, and what would help?
  tags:
    - Deepwater Horizon
    - oil spill
    - deep sea
    - whales
    - fisheries
scenario:
  place: Gulf of Mexico, open water of the northern and eastern Gulf
  since: '2010'
  scale: bioregion
domains:
  - water
  - ecology
  - food
relations:
  - predicate: example_of
    target: questions/after-an-oil-spill
  - predicate: cites
    target: articles/immense-but-not-immutable-deep-pelagic-decline
  - predicate: needs
    target: data-sources/griidc
provenance:
  origin: agent
  sources:
    - title: 'Immense but not immutable (PNAS, 19 October 2026)'
      url: 'https://www.pnas.org/doi/10.1073/pnas.2616554123'
    - title: '16 Years After Deepwater Horizon Spill, Deep Sea Life in The Gulf of Mexico Shows No Sign of Recovery (ScienceAlert, Jess Cockerill, 23 October 2026)'
      url: 'https://www.sciencealert.com/16-years-after-deepwater-horizon-spill-deep-sea-life-in-the-gulf-of-mexico-shows-no-sign-of-recovery'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the entries linked here and the paper they rest on'
  status: draft
---
In 2010 the Deepwater Horizon well released 4.0 to 4.9 million barrels of oil into the Gulf of Mexico over 87 days, 1,500 metres down, and 770,000 gallons of dispersant were injected at the wellhead.[^1,2] A [thirteen-year study](/articles/immense-but-not-immutable-deep-pelagic-decline/) of the open water below the surface found its fishes, krill, shrimps and small squid fell 60 to 85% within three and a half years and have stayed down.[^1] The Gulf's deep-diving whales have fallen too, by more than the models of the spill's damage predicted.[^1]

## Who needs an answer

- Fisheries managers, because tunas, swordfish and other caught species feed on these animals.
- The agencies responsible for endangered whales, Rice's whale among them, which are now seen failing to feed.[^1]
- Whoever spends restoration money, deciding whether anything can be done offshore at all.
- Anyone weighing the next deep-water well, or deep-sea mining, in open water elsewhere.

## The domains it chains

Oil and dispersant moving with deep currents and resettling from the sea floor; exposure of eggs and adults at depth; a food web that lost its middle; whales, fish and seabirds above it; the carbon these animals carry down each night; fisheries and the towns that depend on them.

## What a twin should let people try

- Recovery: under what conditions does a population knocked this low climb back, given that sparse animals find mates less often?
- Attribution: how much of the whale decline does the loss of prey explain?
- The next spill: how would a different response, less dispersant at depth for instance, change what reaches the midwater?

## Where to start

The study's counts, net sensor logs, echosounder files and genetic data are public in [GRIIDC](/data-sources/griidc/).[^1] A food-web model such as [Ecopath with Ecosim](/engines/ecopath-with-ecosim/) can take them; the [use case on oil spills](/questions/after-an-oil-spill/) lists the rest.
