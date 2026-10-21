---
about:
  depiction: engines/emergentbiome.jpg
  label: EmergentBiome Molecular Atlas
  description: >-
    Molecular atlas that links microbial genes and transcripts from wetland and
    coastal sediments to field measurements of methane, nitrous oxide and
    sulfur, as evidence for blue-carbon projects.
  tags:
    - methane
    - blue carbon
    - microbial
    - genomics
    - wetlands
    - mrv
tool:
  form: research platform
  group: Ecosystems and land
  homepage: 'https://emergentbiome.earth/'
open:
  source: unknown
  data: partly
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: EmergentBiome Molecular Atlas | Blue-carbon methane evidence
      url: 'https://emergentbiome.earth/'
    - title: Ecosphere Blue
      url: 'https://www.ecosphereblue.earth/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT060
  kind: research_platform
  family: knowledge_and_agents
  priority: high
  verified: false
  posts:
    - P024
  posters:
    - 'Jay Gutierrez, Ph.D.'
domains:
  - ecology
  - water
  - climate
---
Blue carbon is the carbon held in coastal and marine ecosystems such as salt marshes and seagrass. The atlas draws its genes and transcripts (RNA copies that show which genes are switched on) from deposited genome records. These include a freshwater wetland, Old Woman Creek, and coastal mudflats. Each gene and transcript is linked to its sample and depth, and to the field measurements that could test it.

The atlas page names no organisation or person. Its contact addresses are at Ecosphere Blue, a company whose MethaNet product, for assessing blue-carbon projects, is said to be built on EmergentBiome.

The atlas sets out what a gene can and cannot show, and which field test would settle a question. Its output is an evidence-readiness dossier, not a credit or a tonnage estimate. Detecting a gene shows presence, not how active a pathway is, and flux estimates (how much gas a site releases) need paired field validation. Underneath is a Molecular Verification Ontology (version 0.2.0), a formal vocabulary of terms and their relations. It is written in RDF, OWL and SHACL and comes with eighteen fixed review queries. The sampling design has 144 sample-events across 36 plots.

The public atlas shows three curated cases, each with an evidence explorer and a full report. The internal model holds evidence for 145 genome records and has not had independent scientific review. The page dates its snapshots to August and September 2026. Ecosphere Blue's own site is marked coming soon.
