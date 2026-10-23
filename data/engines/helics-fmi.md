---
about:
  label: HELICS / FMI
  description: >-
    Two ways to connect separate simulators into one run: HELICS, an
    open-source co-simulation framework from US national laboratories, and
    FMI, the Modelica Association's standard for packaging and exchanging
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
Co-simulation means running separate simulators in step so they exchange results as they go. HELICS (Hierarchical Engine for Large-scale Infrastructure Co-Simulation) runs several existing simulators together as one "federation".[^2] Each advances in time and exchanges values and messages through a broker.[^2] HELICS began as the core of a US Department of Energy Grid Modernization Laboratory Consortium project on joint transmission, distribution and communication simulation.[^2] Battelle, Lawrence Livermore National Security and the Alliance for Energy Innovation hold the copyright.[^2]

Electric power and its communication networks remain the main use.[^1,2] The documentation also lists gas, water, weather and transport models, and a page of tools with built-in support.[^2] The project's target is to link a 50,000-node transmission system with millions of distribution nodes.[^1] HELICS is written in C++20 with bindings for Python, C, Java, MATLAB and Julia, and is licensed BSD-3-Clause.[^2] It installs by pip, Spack, Docker or prebuilt binaries on Linux, Windows and macOS.[^2] A 3.8 release is on the roadmap for late 2026.[^2]

FMI (Functional Mock-up Interface) is a standard. It defines a ZIP container, the FMU, and a C interface by which one tool exports a dynamic model and another tool imports and runs the model.[^3,4] There are three modes: model exchange, co-simulation and scheduled execution.[^4] FMI is free to use.[^3] It has been a Modelica Association Project since 2012, following the MODELISAR consortium (2008-2011), and its site lists more than 290 tools that support the standard.[^3,4] The specification is licensed CC BY-SA 4.0 and the reference code BSD-2-Clause.[^4] The project publishes reference FMUs and fmusim, a command-line tool that inspects and simulates FMUs.[^3] Layered standards cover network buses, structured data and differential-algebraic equations.[^3] The current version is 3.0.2.[^3]

FMI packages a single model for any compliant tool to run.[^3] HELICS orchestrates many running models, including FMUs, in one time-synchronised run.[^2]
