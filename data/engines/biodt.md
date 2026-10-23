---
about:
  label: BioDT (Biodiversity Digital Twin)
  description: >-
    European research project, coordinated by CSC in Finland, that built ten
    prototype biodiversity models on the LUMI supercomputer, covering forests,
    grasslands, honey bees, bird migration, wild boar disease, invasive plants,
    crop wild relatives and genetic diversity.
  tags:
    - biodiversity
    - species distribution
    - citizen science
    - supercomputing
    - FAIR data
    - Europe
    - prototype
tool:
  form: research project
  group: Ecosystems and land
  homepage: 'https://biodt.eu/'
open:
  source: unknown
  data: unknown
  api: unknown
  participation: partly
  note: >-
    Eight of the ten prototypes open in a shared R Shiny web app, each marked
    early access and for research only; the phylogenetic diversity twin opens
    at GBIF's PhyloNext site and the DNA sampling twin has no public link. The
    forest twin is built from three tools on GitHub (LANDIS-II, which the page
    calls open source, HMSC and DESDEO), posters sit in a Zenodo community,
    and eight twins have papers in the RIO journal; the pages read do not name
    a licence for BioDT's own code or say whether outputs are published as
    open data. The bird twin takes audio recordings from anyone using its
    phone app, and the grassland page says anyone can run the model with their
    own site data.
domains:
  - ecology
relations:
  - predicate: cites
    target: engines/destination-earth
  - predicate: cites
    target: engines/dt-geo
provenance:
  origin: agent
  sources:
    - title: BioDT
      url: 'https://biodt.eu/'
    - title: About | BioDT
      url: 'https://biodt.eu/about'
    - title: Use cases | BioDT
      url: 'https://biodt.eu/use-cases'
    - title: Grassland Biodiversity Dynamics | BioDT
      url: 'https://biodt.eu/use-cases/grassland-biodiversity-dynamics'
    - title: Forest Biodiversity Dynamics | BioDT
      url: 'https://biodt.eu/use-cases/forest-biodiversity-dynamics'
    - title: Ecosystem Services | BioDT
      url: 'https://biodt.eu/use-cases/ecosystem-services'
    - title: Real-time Bird Monitoring with Citizen-Science Data | BioDT
      url: 'https://biodt.eu/use-cases/real-time-bird-monitoring-citizen-science-data'
    - title: Disease Outbreaks | BioDT
      url: 'https://biodt.eu/use-cases/disease-outbreaks'
    - title: Honey Bees in Agricultural Landscapes | BioDT
      url: 'https://biodt.eu/use-cases/honey-bees-agricultural-landscapes'
    - title: Crop Wild Relatives | BioDT
      url: 'https://biodt.eu/use-cases/crop-wild-relatives'
    - title: Prioritisation of DNA metabarcoding sampling locations | BioDT
      url: 'https://biodt.eu/use-cases/prioritisation-dna-metabarcoding-sampling-locations'
    - title: Phylogenetic Diversity | BioDT
      url: 'https://biodt.eu/use-cases/phylogenetic-diversity'
    - title: Invasive Alien Species | BioDT
      url: 'https://biodt.eu/use-cases/invasive-alien-species'
    - title: Technical platform | BioDT
      url: 'https://biodt.eu/technical-platform'
    - title: LUMI Supercomputer | BioDT
      url: 'https://biodt.eu/lumi-supercomputer'
    - title: Synergies | BioDT
      url: 'https://biodt.eu/synergies'
    - title: Partners | BioDT
      url: 'https://biodt.eu/partners'
    - title: Biodiversity Digital Twins and the Destination Earth Ecosystem
      url: 'https://biodt.eu/news/biodiversity-digital-twins-and-destination-earth-ecosystem'
    - title: BioDT Shiny App - Default
      url: 'https://app.biodt.eu/'
    - title: Biodiversity Digital Twin for Advanced Modelling, Simulation and Prediction Capabilities | BioDT | CORDIS
      url: 'https://cordis.europa.eu/project/id/101057437'
  created: '2026-10-20'
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The models simulate how species and ecosystems respond to land use, management and climate.[^2,4,5] They ran on LUMI, in Kajaani, Finland.[^15] BioDT is a Horizon Europe project.[^20]

CSC is a Finnish non-profit state enterprise that provides IT services for research.[^17] Partners include the biodiversity data infrastructures GBIF and LifeWatch ERIC, the weather centre ECMWF and the IT4Innovations supercomputing centre in Ostrava.[^17] Data also comes through the research infrastructures DiSSCo, eLTER, GBIF and LifeWatch.[^2]

The ten prototypes fall into four groups.[^3]

- **Species response to environmental change.** A grassland model simulates individual plants on a square metre under mowing, fertiliser and weather.[^4] A forest model, so far for Finland and its birds, couples the LANDIS-II landscape simulator with HMSC species-community models and a decision tool for choosing management strategies.[^5] A cultural ecosystem services twin maps recreation potential alongside species distributions.[^6] For real-time bird monitoring, a Finnish phone app ("Muuttolintujen kevät") classifies bird song uploaded by the public and updates predictions of where birds are and when they sing.[^7] The app is part of a citizen-science campaign run with the broadcaster YLE.[^7]
- **Genetically detected biodiversity.** Crop wild relatives maps where stress-tolerant wild relatives of crops grow, from GBIF and other occurrence repositories.[^10] A second tool helps choose where to sample environmental DNA next; environmental DNA is the genetic material organisms shed into soil and water.[^11] A third computes phylogenetic diversity, a measure of how much evolutionary history a set of species spans, from GBIF occurrences and the Open Tree of Life.[^12]
- **Species interactions.** One twin models African swine fever spread in European wild boar.[^8] Another models honey bee colonies across Germany with the BEEHAVE model, land-cover data and daily weather.[^9]
- **Species of policy concern.** Projected invasion levels of alien plants across Europe's habitats under current and future climate.[^13]

The twins run on a shared platform built from the LEXIS workflow system, Puhuri for login, HEAppE for supercomputer jobs and iRODS for data staging. It can be deployed at LUMI and IT4Innovations.[^14] The platform is built so that each twin can be described as a FAIR digital object, FAIR meaning findable, accessible, interoperable and reusable.[^14]

Eight of the ten prototypes open in a shared R Shiny web app, each marked early access and for research purposes only, not for decision-making or operational use.[^4,5,6,7,8,9,10,13] The phylogenetic diversity twin opens at GBIF's PhyloNext site, and the DNA sampling twin has no public link.[^11,12] The forest twin is built from three tools that are on GitHub, and eight of the twins have papers in the RIO journal.[^4,5,7,8,9,10,11,12,13]

The first prototype, on honey bee performance in Germany, is publicly available.[^2] The project's final event, "Biodiversity Digital Twins and the Destination Earth Ecosystem", was held in Rome and online on 3 April 2025.[^18] The project says its prototypes will be integrated into Destination Earth's data lake to continue the work.[^18] Related projects are DT-GEO, DTO-BioFlow, FAIRCORE4EOSC and interTwin.[^16]
