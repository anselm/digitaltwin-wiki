---
about:
  label: 'GitHub repositories'
  description: >-
    Repositories whose name or description matches the wiki's vocabulary, most recently pushed first, through the GitHub search API.
  tags:
    - code
    - open source
website:
  url: 'https://github.com/'
  kind: directory
feed:
  url: 'https://api.github.com/search/repositories?q={query}+in:name,description&sort=updated&order=desc&per_page=30'
  format: github
  terms: unauthenticated search is limited to ten requests a minute; five OR operators a query, so the vocabulary goes in several requests
provenance:
  origin: agent
  sources:
    - title: 'GitHub repositories (feed)'
      url: 'https://api.github.com/search/repositories?q={query}+in:name,description&sort=updated&order=desc&per_page=30'
    - title: 'GitHub repositories'
      url: 'https://github.com/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Student projects and course work are most of what moves; the ones with stars and a place in the name are worth opening.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
