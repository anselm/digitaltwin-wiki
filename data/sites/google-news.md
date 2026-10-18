---
about:
  label: 'Google News'
  description: >-
    News stories matching the wiki's vocabulary, as Google News aggregates them.
  tags:
    - news
    - press
website:
  url: 'https://news.google.com/'
  kind: news
feed:
  url: 'https://news.google.com/rss/search?q={query}&hl=en-US&gl=US&ceid=US:en'
  format: rss
provenance:
  origin: agent
  sources:
    - title: 'Google News (feed)'
      url: 'https://news.google.com/rss/search?q={query}&hl=en-US&gl=US&ceid=US:en'
    - title: 'Google News'
      url: 'https://news.google.com/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Press releases and trade press; the wide net for announcements of city, utility and agency twins.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
