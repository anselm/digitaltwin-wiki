---
about:
  depiction: engines/walk-score.jpg
  label: Walk Score
  description: >-
    A hosted service that rates the walkability of any address from 0 to 100
    from the walking distance to nearby amenities and from street measures;
    its companions Transit Score and Bike Score rate public transport and
    cycling. Scores are served through a widget and an API.
  tags:
    - walkability
    - transit
    - cycling
    - amenities
    - scoring
tool:
  form: Hosted scoring service
  group: Sensory landscape
  homepage: 'https://www.walkscore.com/how-it-works/'
open:
  source: closed
  data: closed
  api: 'yes'
  participation: partly
  note: >-
    Scores come through a keyed API and a widget, with branding requirements
    and a free trial; the method is patented; members of the public can add
    places that feed the scores.
domains:
  - mobility
  - people
relations:
  - predicate: answers
    target: questions/sensory-landscape
provenance:
  origin: agent
  sources:
    - title: How Walk Score Works
      url: 'https://www.walkscore.com/how-it-works/'
    - title: Walk Score Methodology
      url: 'https://www.walkscore.com/methodology.shtml'
    - title: Walk Score API for web and mobile developers
      url: 'https://www.walkscore.com/professional/api.php'
  created: '2026-10-18'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Walk Score is a number from 0 to 100 for any address. For each address the service analyses walking routes to nearby amenities and awards points by distance in each category: full points within a five-minute walk (a quarter mile), fewer with distance, none beyond a thirty-minute walk. It also measures pedestrian friendliness from population density and road measures such as block length and intersection density. Data comes from Google, Factual, Great Schools, OpenStreetMap, the US Census, Localeze and places added by users. Transit Score sums the usefulness of nearby transit routes from frequency, type and distance to the nearest stop, using data that transit agencies publish in a standard format. Bike Score combines bike lanes and trails, hills, destinations, road connectivity and the number of bike commuters, from USGS, OpenStreetMap and Census data.

The site is aimed at people choosing where to live and at property marketing, and the methodology page says the method has been validated by academic researchers and that planners and analysts can use the data in research. City and neighbourhood rankings are built by scoring a grid of points about 500 feet apart and weighting each by population density.

It is a hosted commercial service, not something to install. The method is patented. Developers get scores through a server-side API at api.walkscore.com with an API key, a free trial and paid tiers, subject to branding requirements; the API is supported in the United States and Canada. A widget shows the three scores on another site, and custom data is sold as a data service.

Status: in operation; the pages carry a 2026 copyright and no other dates.
