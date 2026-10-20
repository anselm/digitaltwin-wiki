---
about:
  label: BioDT (Biodiversity Digital Twin)
  description: >-
    European research project, coordinated by CSC in Finland, that built ten
    prototype models of biodiversity on the LUMI supercomputer: forests,
    grasslands, honey bees, bird migration, wild boar disease, invasive plants,
    crop wild relatives and genetic diversity; eight open as early-access web
    apps for research use.
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
  created: '2026-10-20'
  reviewed: '2026-10-20'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
BioDT, the Biodiversity Digital Twin project, is a European research project that built prototype models of how species and ecosystems respond to land use, management and climate, and ran them on the LUMI supercomputer in Kajaani, Finland. It is coordinated by CSC, a Finnish non-profit state enterprise that provides IT services for research, and its partners include the biodiversity data infrastructures GBIF and LifeWatch ERIC, the weather centre ECMWF, the IT4Innovations supercomputing centre in Ostrava, research centres such as UFZ, Senckenberg, Naturalis, TNO, the UK Centre for Ecology and Hydrology and Austria's Umweltbundesamt, universities in Helsinki, Jyväskylä, Oslo, Tartu, Halle, Manchester and Swansea, KTH, the company Bayer, and the communication firms Trust-IT and COMMpla. The project also works with the research infrastructures DiSSCo, eLTER, GBIF and LifeWatch for data. The site calls BioDT a Horizon Europe project (in the technical platform page's description); the grant number and the start and end dates are not stated on the pages read.

The ten prototypes fall into four groups. Species response to environmental change: a grassland model that simulates individual plants on a square metre under mowing, fertiliser and weather; a forest model, so far for Finland and its birds, that couples the LANDIS-II landscape simulator with HMSC species-community models and a decision tool for choosing management strategies; a cultural ecosystem services twin that maps recreation potential alongside species distributions; and real-time bird monitoring, where a Finnish phone app ("Muuttolintujen kevät", in a citizen-science campaign run with the broadcaster YLE) classifies bird song uploaded by the public and updates predictions of where birds are and when they sing. Genetically detected biodiversity: crop wild relatives (maps of where stress-tolerant wild relatives of crops grow, from GBIF and other occurrence repositories), a tool for choosing where to sample environmental DNA next, and phylogenetic diversity metrics from GBIF occurrences and the Open Tree of Life. Species interactions: African swine fever spread in European wild boar, and honey bee colonies across Germany using the BEEHAVE model with land-cover and daily weather data. Species of policy concern: projected invasion levels of alien plants across Europe's habitats under current and future climate.

The twins run on a shared platform built from the LEXIS workflow system, Puhuri for login, HEAppE for supercomputer jobs and iRODS for data staging, deployable at LUMI and IT4Innovations, and designed so each twin can be described as a FAIR digital object. Eight of the ten prototypes open in a shared R Shiny web app, each marked early access and for research purposes only, not for decision-making or operational use; the phylogenetic diversity twin opens at GBIF's PhyloNext site, and the DNA sampling twin has no public link. The forest twin is built from three tools that are on GitHub, and eight of the twins have papers in the RIO journal.

Status: the about page says the first prototype, on honey bee performance in Germany, is publicly available. The project's final event, "Biodiversity Digital Twins and the Destination Earth Ecosystem", was held in Rome and online on 3 April 2025, and the project says its prototypes will be integrated into Destination Earth's data lake so that work continues there. The synergies page also names DT-GEO, DTO-BioFlow, FAIRCORE4EOSC and interTwin as related projects.
