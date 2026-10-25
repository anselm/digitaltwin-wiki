---
about:
  depiction: engines/nextstrain.jpg
  label: Nextstrain
  description: >-
    Open-source tracking of how pathogens evolve and spread, rebuilt from
    shared genome sequences as they arrive; live views of H5N1 bird flu,
    measles, mpox, Ebola, SARS-CoV-2 and two dozen others.
  tags:
    - pathogen genomics
    - phylogenetics
    - epidemic surveillance
    - H5N1
    - bird flu
    - public health
tool:
  form: open-source pipelines (Augur), web viewer (Auspice) and a public site
  group: People and populations
  homepage: 'https://nextstrain.org/'
  licence: AGPL-3.0
  cost: free
domains:
  - people
  - ecology
open:
  source: open
  data: open
  participation: open
  licence: AGPL-3.0
provenance:
  origin: agent
  sources:
    - title: 'Nextstrain: real-time tracking of pathogen evolution (home page)'
      url: 'https://nextstrain.org/'
    - title: 'What is Nextstrain? (documentation)'
      url: 'https://docs.nextstrain.org/en/latest/learn/about.html'
    - title: 'Nextstrain-maintained pathogen analyses (team, licences)'
      url: 'https://nextstrain.org/pathogens'
    - title: 'nextstrain/avian-flu (README)'
      url: 'https://github.com/nextstrain/avian-flu'
    - title: 'Full genome analysis of the ongoing influenza A/H5N1 cattle outbreak in North America'
      url: 'https://nextstrain.org/avian-flu/h5n1-cattle-outbreak/genome'
    - title: 'nextstrain/augur and nextstrain/auspice on GitHub'
      url: 'https://github.com/nextstrain/augur'
  created: '2026-10-25'
  reviewed: '2026-10-25'
  reviewed_by: 'Claude, from the sources listed; Anselm pointed to it thinking about bird flu and shocks to a system'
  status: draft
---

Nextstrain takes the genome sequences that labs around the world share for a virus or bacterium and turns them into a family tree and a map, updated as new sequences come in.[^1,2] Each tip of the tree is one sampled infection; branches that share mutations share an ancestor, so the tree shows which outbreaks are connected, roughly when a lineage jumped, and where it travelled.[^2] Its front page lists continually updated views for H5N1 avian influenza, seasonal flu, measles, mpox, Ebola, tuberculosis, West Nile virus, SARS-CoV-2 and many more.[^1]

The picture is the full-genome view of the H5N1 outbreak in North American cattle, coloured by host: cattle in orange, birds in blue, other mammals in yellow and humans in red.[^5] When captured it showed 5,647 genomes sampled between November 2023 and August 2026, maintained by Louise Moncla and the Nextstrain team.[^5] The avian-flu build splits the cattle outbreak (genotype B3.13, from 2024) from the separate D1.1 jumps into cattle in 2025, and builds per-segment trees for H5N1, H5NX, H7N9 and H9N2.[^4]

Augur is the pipeline that filters the sequences, aligns them and builds the trees.[^2,6] Auspice draws them in the browser. Nextclade places a single sequence on a reference tree inside the browser, and Nextstrain Groups lets labs and health agencies publish their own analyses on the site.[^1] The code is under the GNU Affero General Public License, and screenshots may be reused under CC BY 4.0 with credit to nextstrain.org.[^3] The site's copyright line names Trevor Bedford and Richard Neher, who head a core team of ten.[^3]

For someone modelling a place, Nextstrain is the measured side of an epidemic. Simulators such as [OpenABM-Covid19](/engines/openabm-covid19/) and [MATSim EpiSim](/engines/matsim-episim/) run what-ifs on a synthetic population. A tree like this one is what those what-ifs have to answer to. It is also often the first record that a shock from outside the model has arrived, as when a bird virus turned up in dairy herds.
