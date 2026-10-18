---
about:
  label: 'GitHub: active projects'
  description: >-
    Repositories matching the wiki's vocabulary with at least twenty stars, not forks, not archived, most recently pushed first: the established tools as they move.
  tags:
    - code
    - open source
website:
  url: 'https://github.com/'
  kind: directory
feed:
  url: 'https://api.github.com/search/repositories?q={query}+in:name,description+stars:>=20+fork:false+archived:false&sort=updated&order=desc&per_page=30'
  format: github
  terms: unauthenticated search is limited to ten requests a minute; five OR operators a query, so the vocabulary goes in several requests
provenance:
  origin: agent
  sources:
    - title: 'GitHub: active projects (feed)'
      url: 'https://api.github.com/search/repositories?q={query}+in:name,description+stars:>=20+fork:false+archived:false&sort=updated&order=desc&per_page=30'
    - title: GitHub
      url: 'https://github.com/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Mesa, SUMO, legoESM and Valdrada come through this way. Forks, archived repositories and ones without a description are dropped before the inbox, and the listing is ordered by stars.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
