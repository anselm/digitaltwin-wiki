---
about:
  label: National Flood Hazard Layer (FEMA)
  description: >-
    FEMA's national GIS layer of official flood zones, including the high-risk areas under floodplain rules and the flood insurance purchase requirement
  tags:
    - flood maps
    - flood insurance
    - floodplain
    - law
    - permits
    - united states
datasource:
  homepage: 'https://www.fema.gov/flood-maps/national-flood-hazard-layer'
  coverage: United States, over 90 per cent of the population
  cadence: continuous, as maps and map changes take effect
open:
  source: unknown
  data: open
  api: yes
  participation: closed
  note: Viewable and downloadable through the NFHL Viewer and the Flood Map Service Center, with GIS web services and a KMZ for Google Earth. Terms of use were not read for this entry.
domains:
  - water
  - climate
  - places
relations:
  - predicate: answers
    target: everyday/will-this-property-flood
provenance:
  origin: agent
  sources:
    - title: 'Flood Data Viewers and Geospatial Data | FEMA.gov'
      url: 'https://www.fema.gov/flood-maps/national-flood-hazard-layer'
    - title: 'Flood Zones | FEMA.gov'
      url: 'https://www.fema.gov/about/glossary/flood-zones'
    - title: 'Special Flood Hazard Area (SFHA) | FEMA.gov'
      url: 'https://www.fema.gov/glossary/special-flood-hazard-area-sfha'
    - title: 'Flood Insurance | FEMA.gov'
      url: 'https://www.fema.gov/flood-insurance'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
FEMA builds the National Flood Hazard Layer (NFHL) from the effective Flood Insurance Rate Maps (FIRMs) delivered to communities and from Letters of Map Change.[^1] The result is one geospatial database of current flood hazard, kept to support the National Flood Insurance Program.[^1] With appropriate care it can be used in place of the FIRM for the program's purposes.[^1] Its digital data covers over 90 per cent of the US population, and new and revised data are added continuously.[^1]

The zones on the map carry legal weight. A Special Flood Hazard Area is land that a flood with a 1 per cent chance of being equalled or exceeded in any year, the "100-year flood", would cover.[^2] It is labelled Zone A or Zone V and their variants, such as AE and VE.[^2,3] Inside it, the program's floodplain management rules must be enforced and the mandatory purchase of flood insurance applies.[^3] FEMA's insurance page says that homes and businesses in high-risk flood areas with mortgages from government-backed lenders are required to have flood insurance.[^4] Zone B or shaded Zone X marks moderate hazard, between the 100-year and the 500-year flood, and Zone C or unshaded Zone X marks minimal hazard.[^2] Where an effective map exists and provides data, that data must be used to set the minimum requirements of the program.[^1]

In a US model of a place the NFHL is part of the [rules layer](/terms/rules-layer/). For [whether a property will flood](/everyday/will-this-property-flood/), FEMA names the NFHL Viewer and the Map Service Center as the best place to start on the official determinations.[^1] Map updates on the way show in the Flood Map Changes Viewer as preliminary or pending data.[^1] The Flood Hazard and Risk Data Viewer adds data beyond the regulatory maps, including current and possible future flooding and sea level rise on the coast.[^1]

The NFHL Viewer finds an address and prints a full FIRM or a FIRMette, a smaller printable extract.[^1] The Flood Map Service Center offers the same address search and downloads of the data for a county or state as shapefiles.[^1] For developers there are GIS web services and a KMZ file for Google Earth.[^1] Official use needs a base map that meets FEMA's accuracy standards, and the viewer and Map Service Center FIRMettes come with a default base map that meets the minimum.[^1]
