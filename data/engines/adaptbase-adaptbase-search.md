---
about:
  label: AdaptBase
  description: >-
    Knowledge graph of urban climate adaptation plans from the Urban Tech Hub
    at Cornell Tech; AI agents read city plans and extract actions, hazards,
    outcomes and costs, each traced to its source sentence.
  tags:
    - adaptation
    - climate
    - cities
    - knowledge graph
    - plans
tool:
  homepage: 'https://www.adaptbase.us/'
  form: hosted knowledge graph with search, ontology viewer, API and MCP
  group: Weather and climate
open:
  source: partly
  data: partly
  api: 'yes'
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: AdaptBase — Climate Adaptation Knowledge Base
      url: 'https://www.adaptbase.us/'
    - title: Search the Graph — AdaptBase
      url: 'https://search.adaptbase.us'
    - title: AdaptBase | Urban Tech Hub Research
      url: 'https://research.urbantech.info/projects/adaptbase/'
    - title: adaptbase-plans
      url: 'https://github.com/Cornell-Tech-Urban-Tech-Hub/adaptbase-plans'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT065
  kind: knowledge_platform
  family: knowledge_and_agents
  priority: high
  verified: true
  posts:
    - P124
  posters:
    - Anthony Townsend
domains:
  - places
  - climate
  - people
---
The Urban Tech Hub at Cornell Tech (Jacobs Technion-Cornell Institute, New York) runs it as a research project led by Anthony Townsend.[^3] The aim is to organise what cities have written about adapting to climate hazards.[^1,3] Agents find adaptation plans and code them as structured facts against a team-built ontology, a defined vocabulary of 21 entity types and more than 60 relationship types.[^1,3] Each fact links back to the plan, page and sentence it came from.[^1] Heat-action codings from Cornell's Heat Plan Database are folded in.[^1,2]

A practitioner can ask which cities use cool pavements, or how flood defences are being paid for.[^2] Answers come back as linked nodes: places, plans, actions, solutions, hazards, outcomes, stakeholders and financing.[^2] In October 2026 the site reported 115 plans from 86 cities read in full, 13,204 actions and 238,142 evidence records.[^1] The Urban Tech Hub's May 2026 project page gives a wider plan library of more than 1,450 plans from 600 or more cities.[^3] The two counts describe different stages of the pipeline.

The hosted site has a search interface, an ontology viewer, a plan archive of the original PDFs, and an API and MCP endpoint for other tools.[^1] (MCP, the Model Context Protocol, is a standard way for AI assistants to call outside tools.) The plan-archive pipeline is public on GitHub.[^4] It uses Supabase, OpenAI embeddings and an Astro static site.[^4] No licence is given for the data or the main project.[^4]

AdaptBase is in alpha, and the site warns of rough edges and thin areas of the graph.[^1]
