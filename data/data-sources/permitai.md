---
about:
  label: PermitAI
  description: >-
    Pacific Northwest National Laboratory's public data for US federal
    environmental review: a corpus of 188,000 NEPA documents with maps, and
    open-source tools that query live agency data
  tags:
    - law
    - permits
    - environmental review
    - NEPA
    - federal data
    - geospatial
datasource:
  homepage: 'https://www.pnnl.gov/projects/permitai'
  coverage: United States, federal environmental reviews from seven agencies
  cadence: versioned releases (June 2024, August 2025, August 2026)
  access: >-
    NEPATEC3.0 on Hugging Face after accepting its access conditions; NEPA-MCP
    installed from PyPI or GitHub
  format: JSONL metadata and page text, PNG map images and GeoTIFFs; MCP servers
open:
  source: open
  data: open
  api: yes
  participation: partly
  licence: CC0 (NEPATEC3.0); BSD 3-Clause (NEPA-MCP code)
  note: >-
    The original agency documents keep their own terms of use, and the live
    data NEPA-MCP reaches stays under each agency's terms.
domains:
  - places
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'PermitAI Team Delivers a One-Stop-Shop for Federal Permitting Data'
      url: 'https://www.pnnl.gov/news-media/permitai-team-delivers-one-stop-shop-federal-permitting-data'
    - title: 'PNNL/NEPATEC3.0 · Datasets at Hugging Face'
      url: 'https://huggingface.co/datasets/PNNL/NEPATEC3.0'
    - title: 'NEPA MCP Toolkit | Federal Environmental Data for AI Agents'
      url: 'https://pnnl.github.io/nepa-mcp/'
    - title: 'pnnl/nepa-mcp (README)'
      url: 'https://github.com/pnnl/nepa-mcp'
    - title: 'PermitAI | PNNL'
      url: 'https://www.pnnl.gov/projects/permitai'
    - title: 'What is the National Environmental Policy Act? | US EPA'
      url: 'https://www.epa.gov/nepa/what-national-environmental-policy-act'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Since 1970 the National Environmental Policy Act (NEPA) has required US federal agencies to assess the environmental effects of what they propose before they decide, including when they rule on a permit application or build a highway.[^6] The results are written up as documents of three main kinds: environmental impact statements, environmental assessments and categorical exclusions.[^2,6] Each agency stores its own in its own format, so past reviews are hard to search together.[^2]

PermitAI is a project at Pacific Northwest National Laboratory (PNNL), a Department of Energy laboratory, that gathers those reviews into public data and builds AI tools on top of them for agencies and other users.[^1,5] It began as a pilot sponsored by DOE's Office of Policy to centralise NEPA decisions for DOE, and is funded by that office, two other DOE offices and the federal Permitting Council.[^1,5] PNNL announced its two newest public resources on 19 October 2026.[^1]

The first is NEPATEC3.0, a corpus on Hugging Face.[^2] Its 188,330 files from 81,347 projects, about ten million pages in all, come from EPA, DOE, USDA, BLM, BOEM, the Army Corps of Engineers and DHS.[^2] Its 42 metadata attributes include each project's title, sector and sponsor, the agencies and tribes involved, the type of review and the place, down to county and a mapped point.[^2] Earlier versions held only text; this one adds about 637,000 map images cut from the documents and some 137,000 GeoTIFFs, so a reader can find reviews by where they are as well as by what they say.[^1,2] The metadata alone is 1.8 GB, the metadata with full text 25.6 GB, and the maps about 2.3 TB.[^2] It is released under CC0, the public domain dedication, after a user accepts the access conditions on Hugging Face, and the original agency documents keep their own terms.[^2]

The second is NEPA-MCP, open-source software under the BSD 3-Clause licence that lets an AI assistant query live federal data about a project area through the Model Context Protocol, a standard way of connecting assistants to tools.[^3,4] Version 0.1.6 has 23 servers and 56 tools, drawing on 13 federal agencies along with other sources.[^3,4] Among them are BLM land-use plans, the FEMA flood hazard layer, Fish and Wildlife Service species and critical habitat, Army Corps regulatory boundaries, PAD-US protected areas, tribal areas from the Census Bureau, and the eCFR and Federal Register for the text of regulations.[^4] One server, Map Composer, assembles up to 32 overlays from eight federal data publishers into an interactive map or GeoJSON file for a chosen area.[^3,4] It is a screening and research aid that makes no legal or agency determination and cannot guarantee that an upstream dataset is complete or current.[^4]

For a model of a place, NEPATEC holds what federal reviewers have already found about nearby projects: the alternatives they weighed, the affected environment, the mitigation described.[^2] NEPA-MCP gathers the federal rules laid over a site, such as [flood zones](/data-sources/fema-national-flood-hazard-layer/), [species habitat](/data-sources/usfws-ipac/) and protected land, in one place. Both are built around federal review; state and local permits are mostly outside them, apart from a targeted expansion to other federal and state permitting for geothermal and critical mineral projects, with Nevada as the blueprint.[^5] See also the [rules layer](/terms/rules-layer/).
