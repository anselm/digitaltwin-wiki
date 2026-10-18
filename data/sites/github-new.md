---
about:
  label: 'GitHub: new projects'
  description: >-
    Repositories matching the wiki's vocabulary created in the last four months with at least five stars, ordered by stars: what is new and already being used.
  tags:
    - code
    - open source
website:
  url: 'https://github.com/'
  kind: directory
feed:
  url: 'https://api.github.com/search/repositories?q={query}+in:name,description+created:>{since:120}+stars:>=5+fork:false&sort=stars&order=desc&per_page=30'
  format: github
  terms: unauthenticated search is limited to ten requests a minute; five OR operators a query, so the vocabulary goes in several requests
provenance:
  origin: agent
  sources:
    - title: 'GitHub: new projects (feed)'
      url: 'https://api.github.com/search/repositories?q={query}+in:name,description+created:>{since:120}+stars:>=5+fork:false&sort=stars&order=desc&per_page=30'
    - title: GitHub
      url: 'https://github.com/'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
The counterpart to the active-projects search: a project that gathers stars in its first months is the one worth opening, whatever it calls itself. Course work and one-weekend dashboards rarely pass the bar.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
