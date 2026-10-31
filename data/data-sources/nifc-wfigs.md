---
about:
  label: WFIGS wildland fire perimeters and incidents (NIFC)
  description: >-
    The US interagency map of wildfire and prescribed-fire perimeters and
    incident points, with containment and other incident facts, free from
    the National Interagency Fire Center.
  aliases:
    - WFIGS
    - Wildland Fire Interagency Geospatial Services
    - NIFC fire perimeters
  tags:
    - wildfire
    - fire perimeters
    - incidents
    - prescribed fire
    - United States
    - ArcGIS feature service
datasource:
  coverage: United States; wildfires and prescribed fires recorded in the interagency IRWIN system
  resolution: per incident; one best-available perimeter polygon and one point per fire
  cadence: refreshed every 5 minutes; perimeter changes can take up to 15 minutes to appear, certified perimeters up to 4 hours
  access: free and public on the NIFC Open Data site; ArcGIS REST feature services with no key
  format: ArcGIS feature services answering queries in JSON, GeoJSON and PBF
  homepage: 'https://wfigs-nifc.hub.arcgis.com/'
open:
  source: unknown
  data: 'yes'
  api: 'yes'
  participation: 'no'
  licence: none stated
  note: >-
    WFIGS says its public data are freely accessible to anyone. The
    services carry a disclaimer of liability and warranty but no licence.
domains:
  - fire
relations:
  - predicate: answers
    target: questions/wildfire
provenance:
  origin: agent
  sources:
    - title: Wildland Fire Interagency Geospatial Services (WFIGS hub)
      url: 'https://wfigs-nifc.hub.arcgis.com/'
    - title: WFIGS Current Interagency Fire Perimeters (ArcGIS item description)
      url: 'https://www.arcgis.com/home/item.html?id=d1c32af3212341869b3c810f1a215824'
    - title: WFIGS Interagency Fire Perimeters (ArcGIS item description)
      url: 'https://www.arcgis.com/home/item.html?id=5e72b1699bf74eefb3f3aff6f4ba5511'
    - title: Current Wildland Fire Incident Locations (ArcGIS item description)
      url: 'https://www.arcgis.com/home/item.html?id=4181a117dc9e43db8598533e29972015'
    - title: WFIGS Certified Interagency Fire Perimeters (ArcGIS item description)
      url: 'https://www.arcgis.com/home/item.html?id=df60e07e9ba64dddb6bdc99578d5b2a5'
    - title: National Interagency Fire Center Open Data
      url: 'https://data-nifc.opendata.arcgis.com/'
    - title: 'WFIGS_Interagency_Perimeters_Current FeatureServer layer 0 (service metadata and counts, read 30 October 2026)'
      url: 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/WFIGS_Interagency_Perimeters_Current/FeatureServer/0'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; item descriptions read through the ArcGIS REST item API'
  status: draft
---
The Wildland Fire Interagency Geospatial Services (WFIGS) Group provides authoritative geospatial data on wildland fires in the United States under the interagency Wildland Fire Data Management Program.[^1] Its data are hosted in the National Interagency Fire Center's ArcGIS Online organisation and split into public data, free to anyone, and non-public operational data for firefighters that need an account.[^1] The public layers are offered through the NIFC Open Data site, which also carries historical fire, weather, fuels and boundary data.[^1,6] WFIGS says researchers, public safety organisations, insurers and the news media use them.[^1] The records are credited to the federal land and fire agencies of the Interior and Agriculture departments, the National Association of State Foresters, the US Fire Administration and the National Wildfire Coordinating Group.[^2]

Every record is drawn from IRWIN (Integrated Reporting of Wildland Fire Information), an integration service in which each incident is categorised as a wildfire, a prescribed fire or a complex of fires.[^2,4] The main public layers are:

- **Current perimeters**: the best available outline of each wildfire or prescribed fire not yet declared contained, controlled or out.[^2] Not every incident has one.[^2] Stale records fall off by size: fires under 10 acres after 3 days without an update, 10 to 100 acres after 8 days, larger fires after 14 days.[^2]
- **Current incident locations**: a point for every incident that meets the same rules, with or without a perimeter, including incident complexes.[^4]
- **Year-to-date and full-history perimeters**: fires that have dropped out of the current layer.[^2] The full history holds certified perimeters and new perimeters captured since 2021; older years are incomplete and being loaded.[^3]
- **Certified perimeters**: final outlines certified by the local or regional authority.[^5]

Each record joins the polygon to the incident's attributes: size at discovery, reported and final size, containment and control dates, general fire behaviour and estimated cost to date, among others.[^2] Perimeters are drawn from several sources, with rules to choose the most current or most authoritative shape.[^2] The data refresh every five minutes; a changed perimeter can take up to 15 minutes to show, and a certified one up to four hours.[^2,5] On 30 October 2026 the current layer held 105 perimeters and the full-history layer 43,040.[^7]

The layers are ArcGIS feature services that answer queries without a key, up to 2,000 records a request, in JSON, GeoJSON or PBF.[^7] WFIGS asks users not to query the history layer repeatedly with relative dates such as "in the last" or the current timestamp, since that load can take the service down.[^3] The services state no licence; their disclaimer says the data are not legal documents, change over time, are no better than their sources, and carry no warranty of accuracy or completeness.[^2]

For a model of a place in fire country, these are the official outlines of where fires burned and how large they grew, year by year. They give the burn history to set against fuel and vegetation maps such as [LANDFIRE](/data-sources/landfire/), the footprints for checking a spread model against real fires, and a live layer of active incidents. Satellite detections from [NASA FIRMS](/data-sources/nasa-firms/) show heat within hours of an overpass; WFIGS shows the perimeter and status the agencies have recorded.
