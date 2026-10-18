---
about:
  label: 'Hacker News: digital twin'
  description: >-
    Stories on Hacker News mentioning digital twins, newest first, through the
    Algolia search API.
  tags:
    - discussion
website:
  url: 'https://news.ycombinator.com/'
  kind: community
feed:
  url: >-
    https://hn.algolia.com/api/v1/search_by_date?query=%22digital%20twin%22&tags=story&hitsPerPage=30
  format: hn
provenance:
  origin: agent
  sources:
    - title: 'Hacker News: digital twin (feed)'
      url: >-
        https://hn.algolia.com/api/v1/search_by_date?query=%22digital%20twin%22&tags=story&hitsPerPage=30
    - title: 'Hacker News: digital twin'
      url: 'https://news.ycombinator.com/'
  created: '2026-10-17'
  reviewed: '2026-10-17'
  reviewed_by: Claude; the feed was fetched and read on 2026-10-17
  status: draft
---
Few items, but the comment threads often name the better tools.

Polled by `tools/scan.js`; new items land in the inbox for a person to triage.
