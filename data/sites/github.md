---
about:
  label: 'GitHub: digital twin repositories'
  description: >-
    Repositories with “digital twin” in their name or description, most recently
    pushed first, through the GitHub search API.
  tags:
    - code
    - open source
website:
  url: 'https://github.com/'
  kind: directory
feed:
  url: >-
    https://api.github.com/search/repositories?q=%22digital+twin%22+in:name,description&sort=updated&order=desc&per_page=30
  format: github
  terms: unauthenticated search is limited to ten requests a minute
provenance:
  origin: agent
  sources:
    - title: 'GitHub: digital twin repositories (feed)'
      url: >-
        https://api.github.com/search/repositories?q=%22digital+twin%22+in:name,description&sort=updated&order=desc&per_page=30
    - title: 'GitHub: digital twin repositories'
      url: 'https://github.com/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: Claude; the feed was fetched and read on 2026-10-17
  status: draft
---
Noisy, since the term is fashionable; stars and a readme sort it.

Polled by `tools/scan.js`; new items land in the inbox for a person to triage.
