---
about:
  depiction: engines/agents-jl.jpg
  depiction_credit: 'Zombie outbreak on an OpenStreetMap street network, from the Agents.jl examples. JuliaDynamics, MIT licence.'
  label: Agents.jl
  description: >-
    Open-source Julia library from JuliaDynamics for agent-based models, with
    grids, networks, continuous space and OpenStreetMap road networks, and
    both step-by-step and event-driven time.
  tags:
    - agent-based
    - Julia
    - simulation framework
    - OpenStreetMap
tool:
  form: open-source Julia library
  group: Agents and system dynamics
  homepage: 'https://juliadynamics.github.io/Agents.jl/stable/'
  licence: MIT
  cost: free
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: MIT
domains:
  - people
  - places
relations:
  - predicate: alternative_to
    target: engines/mesa
  - predicate: alternative_to
    target: engines/netlogo
provenance:
  origin: agent
  sources:
    - title: 'Introduction · Agents.jl'
      url: 'https://juliadynamics.github.io/Agents.jl/stable/'
    - title: 'JuliaDynamics/Agents.jl (README)'
      url: 'https://github.com/JuliaDynamics/Agents.jl'
    - title: 'Zombie Outbreak in an Open Street Map City · Agents.jl'
      url: 'https://juliadynamics.github.io/Agents.jl/stable/examples/zombies/'
    - title: 'JuliaDynamics/Agents.jl releases'
      url: 'https://github.com/JuliaDynamics/Agents.jl/releases'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Agents.jl is a library for writing agent-based models in Julia, a programming language.[^1,2] An agent-based model is a simulation of individual agents that each react to their surroundings, including other agents, by a set of rules.[^1] The library supplies the common parts: agents, several kinds of space, schedulers that decide which agent acts when, automatic collection of results into a table (a DataFrame), batch runs and distributed computing.[^1] It belongs to the JuliaDynamics organisation of scientific software projects.[^1,2]

Space can be a network, a regular grid, continuous space or a real road network from OpenStreetMap, with road speed limits, searches for nearby agents and roads, and route finding.[^1] Time can advance in fixed steps or, for continuous-time models, by an event queue.[^1] Version 7 added an experimental layout for faster runs and a model type that links agent-based models with reinforcement learning, in which agents learn by trial and reward.[^1] Plots, videos and interactive apps come through Julia's Makie graphics packages.[^1] The project says its models take much less code than in other open-source frameworks and that it ran faster than every framework it compared itself with.[^1]

It installs from Julia's package manager and is free under the MIT licence.[^1,2] The paper to cite is Datseris, Vahdati and DuBois, "Agents.jl: a performant and feature-full agent-based modeling software of minimal code complexity", in the journal SIMULATION, 2022.[^2] Version 7.1.0 was released in October 2026.[^4]

For someone modelling a place, the OpenStreetMap space lets agents travel real streets. The documentation's example spreads a zombie outbreak through a city's street network, with agents planning random routes and moving along roads, and the project points to a simulation of the whole city of Chicago.[^1,3] The same pattern fits commuters, deliveries or evacuations. [Mesa](/engines/mesa/) does the same job in Python, and [NetLogo](/engines/netlogo/) is a visual, lower-code start.
