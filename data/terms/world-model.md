---
about:
  label: World model
  description: >-
    A phrase with three unrelated meanings: a system dynamics model of the globe, a neural network's learned simulation of an environment, and loosely any model of the Earth.
  tags:
    - world model
    - world simulator
    - machine learning
    - system dynamics
    - video generation
term:
  aka:
    - world models
    - world simulator
    - world foundation model
    - general world model
relations:
  - predicate: cites
    target: media/world-dynamics
  - predicate: cites
    target: media/the-limits-to-growth
  - predicate: cites
    target: people/jay-forrester
  - predicate: cites
    target: engines/3d-cities-and-mapping/nvidia-cosmos
  - predicate: cites
    target: engines/3d-cities-and-mapping/odyssey-3
  - predicate: cites
    target: engines/3d-cities-and-mapping/world-labs-atlas
  - predicate: cites
    target: terms/earth-system-model
  - predicate: cites
    target: terms/natural-general-intelligence-ngi
  - predicate: cites
    target: articles/climate/learned-models-of-the-earth
domains:
  - places
  - climate
provenance:
  origin: agent
  sources:
    - title: 'World Models (Ha and Schmidhuber, arXiv:1803.10122, 2018)'
      url: 'https://arxiv.org/abs/1803.10122'
    - title: 'World Models, interactive version of the paper'
      url: 'https://worldmodels.github.io/'
    - title: 'Genie 3: A new frontier for world models (Google DeepMind, 5 August 2025)'
      url: 'https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/'
    - title: 'Universal World Simulator (Runway, December 2025)'
      url: 'https://runway.com/world-simulator.html'
  created: '2026-11-15'
  reviewed: '2026-11-15'
  reviewed_by: 'Claude, from the sources listed and from the linked entries on this site; not yet read by Anselm'
  status: draft
---
"World model" is used for three different things. A reader who meets the phrase needs to know which is meant, because the three are built from different materials and can be tested in different ways.

## A system dynamics model of the globe

In 1971 [Jay Forrester](/people/jay-forrester/) published [World Dynamics](/media/world-dynamics/), which set out a "world model": the world's population, resources and economy treated as one system of quantities linked by feedback. The World3 model of [The Limits to Growth](/media/the-limits-to-growth/) followed in 1972, with population, industrial output, food, non-renewable resources and pollution as its main quantities. A model of this kind is written by people, as a statement of how they think the parts affect one another. It describes the world in aggregate, with no geography, and it can be tested by comparing its curves with what later happened.

## A neural network's learned simulation of an environment

In machine learning the phrase dates from a 2018 paper of that title by David Ha and Jürgen Schmidhuber.[^1] They trained a neural network to predict what a simple video game would show next, and then trained a second, small network to play the game entirely inside the first network's predictions, which they called its "dream".[^1] The paper opens with a sentence from Forrester, "The image of the world around us, which we carry in our head, is just a model", so the borrowing of the phrase was deliberate.[^2] The "world" in this sense is whatever environment the software agent acts in. In the paper it was a car-racing game and a level of the game Doom.[^2]

The current products that carry the name descend from this. Google DeepMind describes world models as "AI systems that can use their understanding of the world to simulate aspects of it", and its Genie 3 generates an explorable scene from a written prompt, at 24 frames per second, that stays consistent for a few minutes.[^3] [NVIDIA Cosmos](/engines/3d-cities-and-mapping/nvidia-cosmos/), [Odyssey-3](/engines/3d-cities-and-mapping/odyssey-3/) and [World Labs' Atlas](/engines/3d-cities-and-mapping/world-labs-atlas/) are of this kind. Runway's essay on the subject holds that "video models trained at sufficient scale become world models", and calls them "learned approximators of physics".[^4]

Three features distinguish a model of this kind:

- It is learned from recordings, mostly video, and nobody writes its rules down.
- What it produces is imagery, or a three-dimensional scene. It does not report physical quantities such as flow, temperature or load.
- The scene is plausible in general and is not a particular real place. DeepMind lists as a limitation that Genie 3 is "currently unable to simulate real-world locations with perfect geographic accuracy".[^3]

Their main stated use is as practice environments for robots and software agents.[^3]

## Loosely, any model of the world

The phrase is also used informally for a model of the actual Earth or of a real place: an [Earth system model](/terms/earth-system-model/), a digital twin of a city, or the "nature model" proposed under [Natural General Intelligence](/terms/natural-general-intelligence-ngi/). Models learned from data do exist in this sense, most successfully for weather. They are trained on decades of measured and reconstructed states of the atmosphere, they are tied to real coordinates, and they report physical quantities that can be scored against what happened. [Learned models of the Earth, and what they are trained on](/articles/climate/learned-models-of-the-earth/) describes how they are built and where they fail.

## Telling them apart

Three questions settle which kind is in front of you:

- Is the world in question the real Earth at real coordinates, or an environment that was generated?
- Was the model written down as rules and equations, or learned from recordings, and recordings of what?
- Does it report quantities that can be checked against measurements, or pictures that can only be judged by how convincing they look?

This site is concerned with models of real places, which is the third sense.
