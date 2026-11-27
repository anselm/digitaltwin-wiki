---
about:
  label: NetLogo
  description: >-
    Free, open-source environment for agent-based modelling from
    Northwestern University, widely used in teaching and research, with a
    desktop version and NetLogo Web in the browser.
  tags:
    - agent-based
    - teaching
    - simulation framework
    - modelling language
tool:
  tier: 1
  form: open-source modelling language, desktop and browser
  group: People and populations
  homepage: 'https://netlogo.org'
  licence: GPL-2.0
  cost: free
domains:
  - people
  - ecology
open:
  source: open
  data: open
  api: yes
  participation: open
  licence: GPL-2.0
relations:
  - predicate: made_by
    target: people/uri-wilensky
  - predicate: alternative_to
    target: engines/people-and-populations/mesa
  - predicate: alternative_to
    target: engines/agents-and-system-dynamics/gama
provenance:
  origin: agent
  sources:
    - title: 'NetLogo Home Page'
      url: 'https://netlogo.org'
    - title: 'About NetLogo'
      url: 'https://netlogo.org/about/'
    - title: 'NetLogo/NetLogo (README)'
      url: 'https://github.com/NetLogo/NetLogo'
    - title: 'NetLogo Programming Guide'
      url: 'https://docs.netlogo.org/programming.html'
    - title: 'NetLogo Tutorial #1: Models'
      url: 'https://docs.netlogo.org/tutorial1.html'
    - title: 'NetLogo 7.0.4 release (GitHub, published 2026-05-01)'
      url: 'https://github.com/NetLogo/NetLogo/releases/tag/v7.0.4'
    - title: 'HubNet (NetLogo 7.0.4 User Manual)'
      url: 'https://docs.netlogo.org/hubnet.html'
    - title: 'HubNet Web'
      url: 'https://hubnetweb.org/'
  created: '2026-10-23'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the sources listed; of HubNet Web only the front page was read, and no session was joined'
  status: draft
---
NetLogo is a programming language and editor for agent-based models, in which many simple actors follow rules and the interesting behaviour comes from their interaction.[^2] Its vocabulary is its own: agents that move around the world are "turtles", the world is a grid of square "patches" they move over, and "links" are agents that connect two turtles.[^4,5] A model has a Code tab and an Interface tab of buttons, sliders, switches, monitors and plots, so someone can change a setting and watch the result.[^5]

[Uri Wilensky](/people/uri-wilensky/) created it at the Center for Connected Learning, and it is now developed at the NetLogo Center at Northwestern University.[^2] The project says it is used in thousands of classrooms and in over 10,000 scientific publications.[^2] Version 7.0.4 was released in May 2026 and the code is still actively worked on.[^3,6] There is a desktop program and NetLogo Web, which runs in a browser, plus the Modeling Commons for sharing models, a forum, and an introductory textbook by Wilensky, An Introduction to Agent-Based Modeling, from MIT Press.[^1,2,3]

For people modelling a place, NetLogo is a quick way to sketch how something spreads among people and to show the idea to others before building a larger model. [GAMA](/engines/agents-and-system-dynamics/gama/) is built around maps and geography from the start, and [Mesa](/engines/people-and-populations/mesa/) does the same job in Python. The source is on GitHub under GPL-2.0.[^3]

HubNet turns a NetLogo model into a participatory simulation: each person controls one part of the system from their own device, and the group together enacts its behaviour.[^7] In the manual's example, Gridlock, each student controls one traffic light in a simulated city and the class tries to keep traffic moving.[^7] It was made for classrooms, and the same form suits a workshop where residents play the drivers, farmers or water users in a model of their own place. The manual says HubNet is supported only through desktop client programs for now, with phones and tablets hoped for.[^7] A separate site, HubNet Web, offers sessions to join or launch in a browser and a way to convert an existing model.[^8]
