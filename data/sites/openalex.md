---
about:
  label: 'OpenAlex'
  description: >-
    Scholarly works matching the wiki's vocabulary, newest first, with open-access links where they exist; catches journal papers that never reach arXiv.
  tags:
    - papers
    - open access
website:
  url: 'https://openalex.org/'
  kind: directory
feed:
  url: 'https://api.openalex.org/works?search={query}&sort=publication_date:desc&per-page=50&mailto=anselm@gmail.com'
  format: openalex
  terms: CC0 data; polite pool with a mailto
provenance:
  origin: agent
  sources:
    - title: 'OpenAlex (feed)'
      url: 'https://api.openalex.org/works?search={query}&sort=publication_date:desc&per-page=50&mailto=anselm@gmail.com'
    - title: 'OpenAlex'
      url: 'https://openalex.org/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Publication dates run ahead of today for papers already assigned to a future issue.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
