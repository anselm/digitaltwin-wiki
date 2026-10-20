---
about:
  label: HELICS / FMI
  description: >-
    Two ways to connect separate simulators into one run; HELICS is an
    open-source co-simulation framework from US national laboratories, and
    FMI is the Modelica Association's standard for packaging and exchanging
    dynamic models.
  tags:
    - co-simulation
    - interoperability
    - standards
tool:
  form: Co-simulation framework and standard
  group: Research infrastructure
  homepage: 'https://helics.org/'
open:
  source: open
  data: unknown
  api: unknown
  participation: unknown
  licence: 'BSD-3-Clause (HELICS); CC BY-SA 4.0 (FMI specification); BSD-2-Clause (FMI reference code)'
domains:
  - energy
provenance:
  origin: agent
  sources:
    - title: HELICS
      url: 'https://helics.org/'
    - title: HELICS documentation
      url: 'https://docs.helics.org/en/latest/'
    - title: Functional Mock-up Interface
      url: 'https://fmi-standard.org/'
    - title: Functional Mock-up Interface Specification
      url: 'https://fmi-standard.org/docs/main/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
HELICS (Hierarchical Engine for Large-scale Infrastructure Co-Simulation) is an open-source framework for running several existing simulators together as one "federation", each advancing in time and exchanging values and messages through a broker. It began as the core of a US Department of Energy Grid Modernization Laboratory Consortium project on joint transmission, distribution and communication simulation, and its copyright is held by Battelle, Lawrence Livermore National Security and the Alliance for Energy Innovation. Electric power and its communication networks remain the main use; the documentation also lists gas, water, weather and transport models, and a page of tools with built-in support. The stated target is to link a 50,000-node transmission system with millions of distribution nodes. It is written in C++20 with bindings for Python, C, Java, MATLAB and Julia, licensed BSD-3-Clause, and installs by pip, Spack, Docker or prebuilt binaries on Linux, Windows and macOS. The documentation was last updated in September 2026 and a 3.8 release is on the roadmap for late 2026.

FMI (Functional Mock-up Interface) is a standard rather than a program. It defines a ZIP container, the FMU, and a C interface by which one tool exports a dynamic model and another imports and runs it, in three modes: model exchange, co-simulation and scheduled execution. It is free to use, maintained as a Modelica Association Project since 2012 after the MODELISAR consortium (2008-2011), and the site counts more than 290 tools that support it. The specification is licensed CC BY-SA 4.0 and the reference code BSD-2-Clause; the project publishes reference FMUs and a command-line tool, fmusim, for inspecting and simulating them, plus layered standards for network buses, structured data and differential-algebraic equations. The current version is 3.0.2.

The two fit together: FMI packages a single model so any compliant tool can run it, and HELICS orchestrates many running models, including FMUs, in one time-synchronised run. Both are operational.
