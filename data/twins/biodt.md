---
about:
  label: BioDT (Biodiversity Digital Twin)
  description: >-
    European research project that built ten prototype biodiversity models on
    the LUMI supercomputer, among them forests, grasslands, honey bees, bird
    monitoring, wild boar disease and invasive plants.
  tags:
    - biodiversity
    - species distribution
    - citizen science
    - supercomputing
    - FAIR data
    - Europe
    - prototype
twin:
  pace: slow
  role: argument
  reach: bioregion
  tier: 4
  place: 'Europe'
  operational: 'research'
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
    target: twins/destination-earth
  - predicate: cites
    target: twins/dt-geo
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
    - title: 'Developing Prototype Digital Twins for biodiversity conservation and management: achievements, challenges and perspectives (Lecarpentier and others, Research Ideas and Outcomes 10: e133474, 2024)'
      url: 'https://doi.org/10.3897/rio.10.e133474'
    - title: 'FAIR digital twins for biodiversity: enabling data, model, and workflow integration (Islam and others, npj Biodiversity, 2026)'
      url: 'https://doi.org/10.1038/s44185-025-00116-3'
  created: '2026-10-20'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the sources listed; the two papers were read in full on 16 November 2026'
  status: draft

---
The models simulate how species and ecosystems respond to land use, management and climate.[^2,4,5] They ran on LUMI, in Kajaani, Finland.[^15] BioDT is a Horizon Europe project.[^20]

CSC is a Finnish non-profit state enterprise that provides IT services for research.[^17] Partners include the biodiversity data infrastructures GBIF and LifeWatch ERIC, the weather centre ECMWF and the IT4Innovations supercomputing centre in Ostrava.[^17] Data also comes through the research infrastructures DiSSCo, eLTER, GBIF and LifeWatch.[^2]

The ten prototypes fall into four groups.[^3]

- **Species response to environmental change.** A grassland model simulates individual plants on a square metre under mowing, fertiliser and weather.[^4] A forest model, so far for Finland and its birds, couples the LANDIS-II landscape simulator with HMSC species-community models and a decision tool for choosing management strategies.[^5] A cultural ecosystem services twin maps recreation potential alongside species distributions.[^6] For real-time bird monitoring, a Finnish phone app ("Muuttolintujen kevät") classifies bird song uploaded by the public and updates predictions of where birds are and when they sing.[^7] The app is part of a citizen-science campaign run with the broadcaster YLE.[^7]
- **Genetically detected biodiversity.** Crop wild relatives maps where stress-tolerant wild relatives of crops grow, from GBIF and other occurrence repositories.[^10] A second tool helps choose where to sample environmental DNA next; environmental DNA is the genetic material organisms shed into soil and water.[^11] A third computes phylogenetic diversity, a measure of how much evolutionary history a set of species spans, from GBIF occurrences and the Open Tree of Life.[^12]
- **Species interactions.** One twin models African swine fever spread in European wild boar.[^8] Another models honey bee colonies across Germany with the BEEHAVE model, land-cover data and daily weather.[^9]
- **Species of policy concern.** Projected invasion levels of alien plants across Europe's habitats under current and future climate.[^13]

Four of the ten prototypes rest on mechanistic models, which simulate the processes themselves: grassland, forest, wildlife disease and honey bees. The project's own overview says each of those models took at least a decade to develop.[^21] The others use correlative methods such as species distribution models, which relate where a species has been recorded to the conditions there.[^21] The overview is plain about what the mechanistic models can do. Because ecological systems are only partly understood and controlled experiments are usually not possible, the models "remain uncertain, making absolute predictions impossible", and are used "to rank scenarios or gradually improve understanding".[^21] It also says the hybrid of statistical and process-based models that the project had hoped for "will not be possible in BioDT".[^21]

A later paper by project members describes the grassland prototype as built on the GRASSMIND model and calibrated against observations from 17 long-term research sites across Europe, and the forest prototype as giving long-term projections of forest biodiversity under alternative management and climate scenarios.[^22] It reports that the crop wild relatives prototype was chosen for a pilot inside Destination Earth, and that the web interfaces are now hosted by LifeWatch ERIC.[^22] Among the difficulties it lists are data that had to be joined by hand, terms that different fields define differently, and the work of keeping a twin running, which it says often takes more effort than building it.[^22]

The twins run on a shared platform built from the LEXIS workflow system, Puhuri for login, HEAppE for supercomputer jobs and iRODS for data staging. It can be deployed at LUMI and IT4Innovations.[^14] The platform is built so that each twin can be described as a FAIR digital object, FAIR meaning findable, accessible, interoperable and reusable.[^14]

Eight of the ten prototypes open in a shared R Shiny web app, each marked early access and for research purposes only, not for decision-making or operational use.[^4,5,6,7,8,9,10,13] The phylogenetic diversity twin opens at GBIF's PhyloNext site, and the DNA sampling twin has no public link.[^11,12] The forest twin is built from three tools that are on GitHub, and eight of the twins have papers in the RIO journal.[^4,5,7,8,9,10,11,12,13]

The first prototype, on honey bee performance in Germany, is publicly available.[^2] The project's final event, "Biodiversity Digital Twins and the Destination Earth Ecosystem", was held in Rome and online on 3 April 2025.[^18] The project says its prototypes will be integrated into Destination Earth's data lake to continue the work.[^18] Related projects are DT-GEO, DTO-BioFlow, FAIRCORE4EOSC and interTwin.[^16]
