---
about:
  label: 'Hacker News'
  description: >-
    Stories on Hacker News matching the wiki's vocabulary, newest first, through the Algolia search API.
  tags:
    - discussion
website:
  url: 'https://news.ycombinator.com/'
  kind: community
feed:
  url: 'https://hn.algolia.com/api/v1/search_by_date?query={query}&tags=story&hitsPerPage=20'
  format: hn
provenance:
  origin: agent
  sources:
    - title: 'Hacker News (feed)'
      url: 'https://hn.algolia.com/api/v1/search_by_date?query={query}&tags=story&hitsPerPage=20'
    - title: 'Hacker News'
      url: 'https://news.ycombinator.com/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Few items, one request a phrase since Algolia has no OR, but the comment threads often name the better tools.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
