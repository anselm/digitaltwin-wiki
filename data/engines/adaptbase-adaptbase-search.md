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
AdaptBase is a research project of the Urban Tech Hub at Cornell Tech (Jacobs Technion-Cornell Institute, New York), led by Anthony Townsend. Its aim is to organise what cities have written about adapting to climate hazards. Agents find adaptation plans, and a team-built ontology of 21 entity types and more than 60 relationship types turns them into structured facts, each linked back to the plan, page and sentence it came from. Heat-action codings from Cornell's Heat Plan Database are folded in.

A practitioner can ask the graph questions such as which cities use cool pavements or how flood defences are being paid for, and get back places, plans, actions, solutions, hazards, outcomes, stakeholders and financing as linked nodes. The site reports 115 plans from 86 cities read in full, 12,580 actions and 236,563 evidence records; the Urban Tech Hub's May 2026 project page describes a wider plan library of more than 1,450 plans from 600 or more cities. The two counts describe different stages of the pipeline.

It runs as a hosted site with a search interface, an ontology viewer, a plan archive of the original PDFs, and an API and MCP endpoint for other tools. The plan-archive pipeline is public on GitHub and uses Supabase, OpenAI embeddings and an Astro static site; no licence is stated for the data or the main project.

In alpha. The site warns of rough edges and thin areas of the graph; the search page showed a last update of 12 October 2026.
