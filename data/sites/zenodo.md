---
about:
  label: 'Zenodo'
  description: >-
    Datasets, software and papers deposited on Zenodo that match the wiki's vocabulary, newest first.
  tags:
    - datasets
    - software
website:
  url: 'https://zenodo.org/'
  kind: directory
feed:
  url: 'https://zenodo.org/api/records?q={query}&sort=newest&size=25'
  format: zenodo
provenance:
  origin: agent
  sources:
    - title: 'Zenodo (feed)'
      url: 'https://zenodo.org/api/records?q={query}&sort=newest&size=25'
    - title: 'Zenodo'
      url: 'https://zenodo.org/'
  created: '2026-10-17'
  reviewed: '2026-10-18'
  reviewed_by: Claude; the search was run with the full vocabulary and read on 2026-10-18
  status: draft
---
Where model code and the data behind papers get deposited with a DOI; twenty-five is the largest page the API allows.

Polled by `tools/scan.js` with the vocabulary on the Sites page; new items land in the inbox for a person to triage.
