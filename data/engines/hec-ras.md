---
about:
  label: HEC-RAS
  description: >-
    The US Army Corps of Engineers' free desktop software for 1D and 2D
    river hydraulics, rain on a 2D grid, sediment, pipe networks and flood
    inundation maps; version 7.0.2 of October 2026.
  aliases:
    - River Analysis System
    - HEC River Analysis System
  tags:
    - flood
    - hydraulics
    - river
    - inundation
    - 2D
    - dam break
    - sediment
tool:
  homepage: 'https://www.hec.usace.army.mil/software/hec-ras/'
  form: free desktop software
  group: Water and flooding
  cost: free
  licence: HEC Terms and Conditions of Use; copying and redistribution allowed, modification and reverse engineering not
open:
  source: closed
  data: unknown
  api: unknown
  participation: 'no'
  note: >-
    Not open source: HEC's distribution policy generally discourages
    releasing source code and does so case by case.
domains:
  - water
relations:
  - predicate: answers
    target: questions/flooding
    note: where river or rain water goes over a terrain, and how deep and fast
  - predicate: needs
    target: data-sources/fabdem
    note: a bare-earth terrain model is the first input to a 2D model; FABDEM is one where no lidar exists
  - predicate: needs
    target: data-sources/copernicus-dem
    note: a global terrain alternative, as a surface model
  - predicate: needs
    target: data-sources/dynamic-world
    note: a land cover layer to map to Manning's n and percent impervious
  - predicate: alternative_to
    target: engines/noaa-national-water-model
    note: an engineer's model of one reach or basin, against NOAA's operational model of every reach in the US
provenance:
  origin: agent
  sources:
    - title: HEC-RAS
      url: 'https://www.hec.usace.army.mil/software/hec-ras/'
    - title: HEC-RAS Downloads
      url: 'https://www.hec.usace.army.mil/software/hec-ras/download.aspx'
    - title: HEC-RAS Release Notes
      url: 'https://www.hec.usace.army.mil/confluence/rasdocs/rasrn/latest'
    - title: HEC-RAS Features
      url: 'https://www.hec.usace.army.mil/software/hec-ras/features.aspx'
    - title: Terms and Conditions for Use of HEC Software
      url: 'https://www.hec.usace.army.mil/software/terms_and_conditions.aspx'
    - title: HEC Software Distribution Policy
      url: 'https://www.hec.usace.army.mil/software/distribution_policy.aspx'
    - title: 'Modeling Precipitation and Infiltration (HEC-RAS Hydraulic Reference Manual)'
      url: 'https://www.hec.usace.army.mil/confluence/rasdocs/ras1dtechref/latest/overview-of-optional-capabilities/modeling-precipitation-and-infiltration'
    - title: "HEC-RAS 2D User's Manual"
      url: 'https://www.hec.usace.army.mil/confluence/rasdocs/r2dum/latest'
    - title: HEC-RAS 2025 Beta
      url: 'https://www.hec.usace.army.mil/software/hec-ras/2025/'
    - title: HEC-HMS
      url: 'https://www.hec.usace.army.mil/software/hec-hms/'
    - title: 'New Features (HEC-RAS Release Notes)'
      url: 'https://www.hec.usace.army.mil/confluence/rasdocs/rasrn/latest/new-features'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: >-
    Claude, from the sources listed; the 2D User's Manual was read only as
    its table of contents, and the boundary condition pages returned errors
  status: draft
---
HEC-RAS is the River Analysis System of the Hydrologic Engineering Center (CEIWR-HEC) of the US Army Corps of Engineers.[^1] It computes one-dimensional steady flow, one- and two-dimensional unsteady flow, sediment transport and mobile beds, stormwater pipe networks, and water temperature and quality.[^1] The first version was designed in 1993 and the current software is still built on that code.[^9]

The steady flow component computes water surface profiles along a single reach, a branching system or a full network of channels by solving the one-dimensional energy equation, with Manning's equation for friction and the momentum equation where the profile changes abruptly, at hydraulic jumps, bridges and confluences.[^4] The unsteady flow component simulates one-dimensional, two-dimensional and combined flow through channels, floodplains and alluvial fans, with dam breaks, levee breaching and overtopping, pumping stations, pressurised pipes, user-defined rules and automated calibration.[^4] Rain can fall directly on the model: precipitation grids or point gauge data, interpolated to a grid, can be applied over 1D reaches, storage areas and 2D flow areas, with infiltration subtracted by the deficit and constant loss, curve number or Green and Ampt methods.[^7] Sediment transport is computed by grain size fraction for scour and deposition over years or single floods, and the water quality module handles temperature, nitrogen and phosphorus species, algae, dissolved oxygen and CBOD.[^4]

Inundation mapping is done in RAS Mapper, which derives depth grids and floodplain boundaries from the computed water surfaces and the terrain, plus velocity, shear stress, stream power and floodway encroachment layers; the terrain must be supplied as a floating-point raster (.flt), the depth grid comes out in the same format and the boundary as a shapefile.[^4] The 2D User's Manual walks through building the terrain model, including correcting it with surveyed cross sections, making land cover, Manning's n and percent impervious layers, soils and infiltration layers, and porosity and flow drag layers.[^8] Project data live in flat files, HEC-DSS and HDF5, and HEC-DSS is the route for exchanging time series with other programs.[^4] The companion for the hydrology is HEC-HMS, the Hydrologic Modeling System, which computes the flows from rain over a branching watershed by infiltration, unit hydrograph and routing methods, with continuous simulation, snowmelt and gridded runoff, and writes its results to HEC-DSS for use by other software.[^10]

Version 7.0.2 was released on 20 October 2026 as a bug-fix release for 7.0 and 7.0.1, correcting among other things a slowdown of about 15% in 2D runs.[^3,11] It runs on 64-bit Windows, and a second installer adds Linux-compiled compute engines that run under the Windows Subsystem for Linux, more slowly than the native engines.[^2,3] Projects from any earlier version open in it, and earlier versions can stay installed beside it.[^3] A rewrite, HEC-RAS 2025, entered beta in April 2026 with a new interface, in-app updates without administrator rights, a face-centred mesh generator with quadrilateral, cartesian and triangular meshes, base maps from OpenStreetMap and USGS hillshade, and export of its meshes to version 6.6.[^9]

Anyone may download and use the software without charge; HEC gives no user support outside the Corps but responds to documented program errors.[^2,6] Its terms grant the right to install, use, copy and distribute the software, while all copies remain HEC's property and may not be modified, decompiled or reverse engineered; it is supplied as is.[^5] HEC's policy generally discourages distributing source code and decides case by case, so HEC-RAS is free rather than open source.[^6]

For someone modelling a place, HEC-RAS is the engineer's standard route from a terrain model, a land cover layer and inflows or rain to a map of where water goes and how deep.[^4,7,8] Where lidar is missing, [FABDEM](/data-sources/fabdem/) supplies a bare-earth terrain at 30 m and [Dynamic World](/data-sources/dynamic-world/) a land cover layer to map to roughness; HEC-HMS or a forecast such as the [National Water Model](/engines/noaa-national-water-model/) gives the flows at the upstream edge.
