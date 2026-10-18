---
about:
  label: 'arXiv'
  description: >-
    Preprints matching the wiki's vocabulary, from digital twins to urban, agent-based, earth-system, flood and fire models; newest first, through the arXiv API.
  tags:
    - papers
    - preprints
website:
  url: 'https://arxiv.org/'
  kind: directory
feed:
  url: 'http://export.arxiv.org/api/query?search_query={query}&sortBy=submittedDate&sortOrder=descending&max_results=50'
  format: arxiv
  terms: arXiv API terms of use; one request every three seconds
provenance:
  origin: agent
  sources:
    - title: 'arXiv (feed)'
      url: 'http://export.arxiv.org/api/query?search_query={query}&sortBy=submittedDate&sortOrder=descending&max_results=50'
    - title: 'arXiv'
      url: 'https://arxiv.org/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Newest fifty across all fields, so the welding-robot and antenna twins come too; the star marks the ones about a place.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
