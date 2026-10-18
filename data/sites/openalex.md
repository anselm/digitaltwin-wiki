---
about:
  label: 'OpenAlex: digital twin'
  description: >-
    Scholarly works indexed by OpenAlex that match “digital twin”, newest first,
    with open-access links where they exist.
  tags:
    - papers
    - open access
website:
  url: 'https://openalex.org/'
  kind: directory
feed:
  url: >-
    https://api.openalex.org/works?search=%22digital%20twin%22&sort=publication_date:desc&per-page=50&mailto=anselm@gmail.com
  format: openalex
  terms: CC0 data; polite pool with a mailto
provenance:
  origin: agent
  sources:
    - title: 'OpenAlex: digital twin (feed)'
      url: >-
        https://api.openalex.org/works?search=%22digital%20twin%22&sort=publication_date:desc&per-page=50&mailto=anselm@gmail.com
    - title: 'OpenAlex: digital twin'
      url: 'https://openalex.org/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: Claude; the feed was fetched and read on 2026-10-17
  status: draft
---
Catches journal papers that never went to arXiv.

Polled by `tools/scan.js`; new items land in the inbox for a person to triage.
