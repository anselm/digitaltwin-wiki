---
about:
  label: IPaC and critical habitat (US Fish and Wildlife Service)
  description: >-
    US Fish and Wildlife Service planning tool that lists the endangered species, critical habitat, wetlands and refuges on or near a drawn project area, with the critical habitat maps as downloads
  tags:
    - endangered species
    - critical habitat
    - law
    - permits
    - united states
datasource:
  homepage: 'https://ipac.ecosphere.fws.gov/'
  coverage: United States, species and habitat under US Fish and Wildlife Service jurisdiction
  cadence: continuous; critical habitat bulk downloads dated (last Aug 31, 2026)
open:
  source: unknown
  data: open
  api: yes
  participation: closed
  note: The resource list and the critical habitat downloads need no account; an official species list needs a login.gov account. The location API will eventually require a key. Terms of use were not read for this entry.
domains:
  - ecology
  - places
provenance:
  origin: agent
  sources:
    - title: 'IPaC: Home'
      url: 'https://ipac.ecosphere.fws.gov/'
    - title: 'Critical Habitat | U.S. Fish & Wildlife Service'
      url: 'https://www.fws.gov/project/critical-habitat'
    - title: 'USFWS Threatened & Endangered Species Active Critical Habitat Report'
      url: 'https://ecos.fws.gov/ecp/report/critical-habitat'
    - title: 'IPaC Location API'
      url: 'https://ipac.ecosphere.fws.gov/location/api'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
IPaC, short for Information for Planning and Consultation, is a project planning tool run by the US Fish and Wildlife Service, built around a map.[^1] Draw a project area on it and it returns the federally protected wildlife resources known or expected on or near that area.[^1] These include listed and proposed species, critical habitat, migratory birds, certain marine mammals, wetlands, coastal barrier units and National Wildlife Refuge lands.[^1] Anyone can use it, and the printed resource list needs no account.[^1] Species that are solely the responsibility of NOAA Fisheries, mostly marine ones, are left out.[^1]

The legal hook is section 7 of the Endangered Species Act. Federal agencies must ask the Secretary of the Interior whether listed or proposed species may be present in the area of a proposed action.[^1] So a project that a federal agency carries out, funds, permits or licenses must obtain an official species list.[^1] The official list is a letter from the local field office, issued through IPaC after logging in and defining a project, and it is valid for 90 days.[^1] If the agency finds the project "may affect" a species or its critical habitat, it must consult the Service, and IPaC's Consultation Package Builder helps assemble a biological analysis suitable for use as the biological assessment.[^1] A project with no federal nexus, one not funded, carried out or permitted by a federal agency, may use IPaC for information.[^1] In a model of a place, IPaC belongs to the [rules layer](/terms/rules-layer/).

Critical habitat is the specific areas the Service identifies as essential to the conservation of a species proposed for listing as endangered or threatened, published as a rule with boundaries in the Federal Register.[^2] Designations affect only federal agency actions and activities that are federally funded or permitted; they do not affect land ownership or allow government or public access to private land.[^2] Federal agencies may not destroy or adversely modify designated critical habitat.[^2] IPaC finds it by overlaying the drawn area on the Service's maps of species ranges and designated critical habitat.[^1]

The critical habitat maps can be taken away. The ECOS report offers a shapefile per species, two national zip files and ArcGIS feature and tile services, with the bulk files last dated 31 August 2026.[^3] There are 995 critical habitats in it, proposed and final.[^3] Final critical habitat totals about 112 million acres and 35,000 stream miles.[^3] Not every designation is in the portal, and species solely under NOAA Fisheries are mapped elsewhere.[^3] For software, the IPaC Location API takes a line or polygon written as well-known text, a standard notation for shapes, or as GeoJSON.[^4] It returns species, critical habitat, field office, refuges and wetlands for that shape.[^4]
