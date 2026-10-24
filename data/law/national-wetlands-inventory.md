---
about:
  label: National Wetlands Inventory
  description: >-
    US Fish and Wildlife Service maps of the nation's wetlands and deepwater habitats by type and extent, viewable in the Wetlands Mapper and downloadable by state or watershed
  tags:
    - wetlands
    - habitat
    - law
    - permits
    - united states
datasource:
  homepage: 'https://www.fws.gov/program/national-wetlands-inventory'
  coverage: United States and territories
  cadence: twice a year, in October and May
open:
  source: unknown
  data: open
  api: yes
  participation: closed
  note: Downloads by state or HUC8 watershed and Web Map Services need no account; larger areas are a custom request to the Wetlands Team. Terms of use were not read for this entry.
domains:
  - water
  - ecology
  - places
provenance:
  origin: agent
  sources:
    - title: 'National Wetlands Inventory | U.S. Fish & Wildlife Service'
      url: 'https://www.fws.gov/program/national-wetlands-inventory'
    - title: 'Wetlands Mapper | U.S. Fish & Wildlife Service'
      url: 'https://www.fws.gov/program/national-wetlands-inventory/wetlands-mapper'
    - title: 'Download Seamless Wetlands Data | U.S. Fish & Wildlife Service'
      url: 'https://www.fws.gov/program/national-wetlands-inventory/data-download'
    - title: 'Wetland Web Mapping Services | U.S. Fish & Wildlife Service'
      url: 'https://www.fws.gov/program/national-wetlands-inventory/web-mapping-services'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Fish and Wildlife Service is the principal federal agency charged with telling the public how much wetland the country has, in what condition, and how that changes.[^1] The Emergency Wetlands Resources Act of 1986 requires the Service to map the nation's wetlands and to report their status and trends to Congress.[^1] Under the Geospatial Data Act of 2018 the Service produces and maintains the Wetlands Layer of the National Spatial Data Infrastructure.[^1] The program has been mapping for over 50 years.[^1]

Wetland types are coded in the Cowardin classification system, and a code definitions table gives the full description behind each code.[^3] Status and trends reports, produced each decade, estimate wetland extent and change for periods from the 1700s to 2019.[^1] The Wetlands Mapper puts the inventory on a web map with other natural resource layers and political boundaries, for viewing, querying, printing and download.[^1,2]

The maps use a biological definition of a wetland. They should not be read as showing the presence, absence or extent of wetlands that may be covered by federal, state, Tribal or local laws, and they make no attempt to set the reach of any agency's regulatory program.[^2] For activities that could affect waters or wetlands, the Service points people to their local US Army Corps of Engineers regulatory office.[^2] In a model of a place, the inventory belongs to the [rules layer](/terms/rules-layer/) as a first look at where wetland rules may come into play, not as their boundary.[^2]

New data arrives twice a year and appears in the mapper and downloads in October and May.[^3] Downloads come by state or territory or by HUC8 watershed, a standard US drainage basin unit, as a file geodatabase, GeoPackage or, for watersheds, a shapefile.[^3] Each zip holds the wetland polygons with project metadata giving image dates, and riparian polygons and historic map information where they exist, in an equal-area Albers projection on NAD83.[^3] For display in other software, the Service runs OGC Web Map Services for wetlands, a wetlands raster, wetlands status, data sources and riparian data, alongside REST services.[^4] Areas larger than a state are a request by email to the Wetlands Team.[^3]
