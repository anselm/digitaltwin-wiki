---
about:
  label: GDELT Project
  description: >-
    Free database built by machine-reading the world's news in over 100
    languages: events since 1979, the people, places, themes and tone in
    each article, and search and map APIs.
  aliases:
    - GDELT
  tags:
    - news
    - events
    - media monitoring
    - sentiment
    - geocoded
    - global
datasource:
  coverage: global; news in print, broadcast and web from nearly every country
  resolution: individual events and articles, geocoded to the places they mention
  cadence: GDELT 2.0 every 15 minutes; GDELT 1.0 daily files
  access: free; raw files to download, Google BigQuery tables, a browser analysis service and JSON APIs
  format: tab-delimited files with a .CSV extension, zipped; BigQuery tables; JSON, GeoJSON, RSS and embeddable HTML from the APIs
  homepage: 'https://www.gdeltproject.org/'
open:
  source: unknown
  data: open
  api: 'yes'
  participation: none
  licence: GDELT terms of use; any academic, commercial or governmental use without fee, with a citation to the GDELT Project and a link to its website
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'The GDELT Story: About the GDELT Project'
      url: 'https://www.gdeltproject.org/about.html'
    - title: 'Data: Querying, Analyzing and Downloading: The GDELT Project'
      url: 'https://www.gdeltproject.org/data.html'
    - title: 'GDELT DOC 2.0 API Debuts! (The GDELT Project blog, 20 June 2017)'
      url: 'https://blog.gdeltproject.org/gdelt-doc-2-0-api-debuts/'
    - title: 'GDELT GEO 2.0 API Debuts! (The GDELT Project blog, 26 April 2017)'
      url: 'https://blog.gdeltproject.org/gdelt-geo-2-0-api-debuts/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the API details come from the 2017 announcements and may have changed since'
  status: draft
---
The GDELT Project monitors news media in print, broadcast and web formats from nearly every country, in over 100 languages, and turns it into open data.[^1] Its creator is Kalev H. Leetaru; the project acknowledges support from Google, Georgetown University's Yahoo! Fellowship, BBC Monitoring and others.[^1] It feeds on hundreds of thousands of news sources, and its historical file back to 1979 draws on news agencies and papers including Agence France Presse, Associated Press, BBC Monitoring and The New York Times.[^1]

The Event Database holds over a quarter of a billion records of events, in over 300 categories, from 1979 to the present.[^1] Since April 2013 events are filed by the date they were found in the news rather than the date they happened, and an event already seen is not added again.[^2] The Global Knowledge Graph links the people, organisations, locations, themes, counts and emotions found in each article; a counts file records figures such as the number of people killed, displaced or sickened.[^2] GDELT 2.0 adds events from articles in 65 languages that it machine-translates as they come in, and updates every 15 minutes.[^2] Other collections include a Visual Global Knowledge Graph of news images, the Frontpage Graph, which scans the home pages of 50,000 news outlets every hour, and special collections from academic literature to books.[^2]

All of it is free.[^2] The raw files can be downloaded as zipped tab-delimited files; the full Global Knowledge Graph for 2015 alone is over 2.5 terabytes.[^2] Every dataset is also in Google BigQuery, where the live tables update every 15 minutes and can be queried with SQL.[^2] A free browser-based Analysis Service makes maps, timelines and network files from the data without code, though it searches only GDELT 1.0.[^2] JSON APIs give full-text search and more, with a web front end called GDELT Summary.[^2] The DOC 2.0 API searches news articles across the 65 translated languages using English keywords, over a rolling window of the last three months, and can return article lists, volume timelines and charts of tone, how positive or negative the coverage is.[^3] The GEO 2.0 API maps the places mentioned within a sentence or two of a keyword over the last seven days, as points or by country or first-level region, and returns GeoJSON.[^4]

The terms allow unlimited and unrestricted academic, commercial or governmental use of all GDELT datasets without fee, and allow them to be redistributed, rehosted and mirrored, but any use must cite the GDELT Project and link to its website.[^1] The GDELT 1.0 Global Knowledge Graph is labelled an alpha release that may change.[^2]

For someone modelling a place, GDELT is a record of what the news has said happened there and how it was covered: protests, disasters, closures, the themes and tone of reporting over months or decades. Its locations are the places named in the coverage, so it records where events were reported.
