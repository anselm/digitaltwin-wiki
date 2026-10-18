---
about:
  label: 'arXiv: digital twin'
  description: >-
    Preprints on arXiv that mention digital twins, newest first, through the
    arXiv API.
  tags:
    - papers
    - preprints
website:
  url: 'https://arxiv.org/'
  kind: directory
feed:
  url: >-
    http://export.arxiv.org/api/query?search_query=all:%22digital+twin%22&sortBy=submittedDate&sortOrder=descending&max_results=50
  format: arxiv
  terms: arXiv API terms of use; one request every three seconds
provenance:
  origin: agent
  sources:
    - title: 'arXiv: digital twin (feed)'
      url: >-
        http://export.arxiv.org/api/query?search_query=all:%22digital+twin%22&sortBy=submittedDate&sortOrder=descending&max_results=50
    - title: 'arXiv: digital twin'
      url: 'https://arxiv.org/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: Claude; the feed was fetched and read on 2026-10-17
  status: draft
---
Most new twin papers appear here first. Volume is high and uneven in quality; the title and abstract decide whether a paper deserves an entry.

Polled by `tools/scan.js`; new items land in the inbox for a person to triage.
