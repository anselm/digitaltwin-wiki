---
about:
  label: PAD-US (Protected Areas Database of the United States)
  description: >-
    USGS inventory of US public lands and protected areas, with owner, manager, designation, public access and a code for how strongly each parcel is protected for biodiversity
  tags:
    - protected areas
    - public lands
    - land ownership
    - conservation easements
    - law
    - united states
datasource:
  homepage: 'https://www.usgs.gov/programs/gap-analysis-project/science/pad-us-data-overview'
  coverage: United States and territories, terrestrial and marine
  cadence: versioned releases (4.0 in April 2024, 4.1 in March 2025)
open:
  source: open
  data: open
  api: yes
  participation: partly
  licence: Public domain
  note: National and state downloads and web services need no account; the processing scripts are published in a code repository. Data stewards submit updates through an online form.
domains:
  - ecology
  - places
provenance:
  origin: agent
  sources:
    - title: 'PAD-US Data Overview | U.S. Geological Survey'
      url: 'https://www.usgs.gov/programs/gap-analysis-project/science/pad-us-data-overview'
    - title: 'PAD-US Data Download | U.S. Geological Survey'
      url: 'https://www.usgs.gov/programs/gap-analysis-project/science/pad-us-data-download'
    - title: 'PAD-US Data History | U.S. Geological Survey'
      url: 'https://www.usgs.gov/programs/gap-analysis-project/pad-us-data-history'
    - title: 'Protected Areas Database of the United States (PAD-US) 4 - ScienceBase-Catalog'
      url: 'https://www.sciencebase.gov/catalog/item/65294599d34e44db0e2ed7cf'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
PAD-US is the official national inventory of US land and marine areas set aside for biodiversity, recreation or cultural use and managed for those purposes through legal or other effective means.[^1] It is maintained by the Gap Analysis Project of the US Geological Survey.[^1] Federal agencies supply their own boundaries through the Federal Geographic Data Committee's Federal Lands Working Group, and state, local and nonprofit data stewards add theirs.[^1,3] It holds all federal land and most state and local land, mostly parcels owned outright by agencies and nonprofits, plus conservation easements that can be published.[^1] Private conservation land is included only where it was voluntarily provided.[^1]

Each parcel records its owner, its manager, its designation (a wilderness area, a national forest, a state park), its name, its size and whether the public can get in for recreation.[^1] It also carries a GAP Status Code, a measure of how firmly the land is meant to stay natural:[^1]

- 1: permanent protection with natural disturbance left to run, as in wilderness areas and several national parks[^1]
- 2: permanent protection with some uses that degrade natural communities, as in national wildlife refuges[^1]
- 3: protection from conversion over most of the area, with logging, mining or off-road vehicles allowed, as in national forests and BLM land[^1]
- 4: no known mandate or easement against conversion, as in private, developed or farmed land[^1]

An IUCN category and a World Database on Protected Areas site code link each record to the global inventory behind [Protected Planet](/data-sources/protected-planet/).[^1,3]

For a model of a place, PAD-US says who owns and manages the open land and how strongly it is protected.[^1] Across agency lines it is the public-land part of the [rules layer](/terms/rules-layer/). The overview lists uses from biodiversity planning and climate corridors to siting energy projects and planning parks.[^1] It is a compilation, so for one agency's land, for data that changes often, or for any use with a regulatory outcome, the authoritative agency data and field surveys should be checked.[^1] Comparing two versions to find changes in protection is discouraged, since many differences come from better agency GIS rather than land changing hands.[^2]

The current version, 4.1, came out in March 2025, almost sixteen years after version 1.0 in April 2009.[^3] The national download is one geodatabase holding the fee, designation, easement, proclamation and marine layers, with overlaps.[^2] State and territory downloads come as geodatabases and KMZ files, and separate vector and raster analysis files remove overlaps by GAP status.[^2] Web services, a statistics dashboard and the processing scripts are also published.[^1,2] The data release is in the public domain and is cited through the DOI 10.5066/P96WBCHS.[^1,4]
