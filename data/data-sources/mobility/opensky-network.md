---
about:
  label: OpenSky Network
  description: >-
    Swiss non-profit that collects aircraft position broadcasts through a
    volunteer network of receivers and offers them to researchers as a live
    API, a historical database and curated datasets.
  aliases:
    - OpenSky
  tags:
    - aircraft
    - flights
    - ADS-B
    - air traffic
    - airports
    - research data
datasource:
  coverage: worldwide where its receivers hear aircraft, best in Europe and the US; nothing before 2013
  resolution: per aircraft; state vectors at 5 seconds for signed-in users and 10 seconds for anonymous ones through the API
  cadence: live; flights with origin and destination derived nightly for the finished day
  access: REST API anonymous or with a free account and daily credits; full history through Trino for approved research institutions, aviation authorities and governments; curated datasets for download
  format: JSON from the REST API; SQL through Trino; datasets in CSV, Avro and JSON
  homepage: 'https://opensky-network.org/'
  cost: free for non-profit research and education; licence required for commercial or operational use
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: open
  licence: non-profit research and non-profit education only; commercial use and operational use of the API need a written licence
  note: >-
    Anyone can feed the network by running a receiver. The full historical
    database is granted to research institutions, aviation authorities and
    government bodies, and to registered non-profits case by case.
domains:
  - mobility
provenance:
  origin: agent
  sources:
    - title: 'OpenSky (home page)'
      url: 'https://opensky-network.org/'
    - title: 'About OpenSky Network'
      url: 'https://opensky-network.org/about'
    - title: 'Frequently Asked Questions'
      url: 'https://opensky-network.org/about/faq'
    - title: 'General Terms of Use & Data License Agreement'
      url: 'https://opensky-network.org/about/terms-of-use'
    - title: 'OpenSky REST API, The OpenSky Network API 1.4.0 documentation'
      url: 'https://openskynetwork.github.io/opensky-api/rest.html'
    - title: 'Scientific Datasets'
      url: 'https://opensky-network.org/data/scientific'
    - title: 'Social Impact'
      url: 'https://opensky-network.org/about/social-impact'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The OpenSky Network is a non-profit association in Burgdorf, Switzerland, that collects air traffic data from receivers run by volunteers, companies, universities and government bodies, and archives the raw data in a historical database used mostly by researchers.[^2,4] It began in 2012 as a research project of armasuisse, the University of Kaiserslautern and the University of Oxford, and became an independent association in 2015.[^2]

Most of the data comes from ADS-B (Automatic Dependent Surveillance-Broadcast): an aircraft works out its position and speed by GPS and broadcasts them on the 1090 MHz radio channel.[^2,3] The network also records Mode S messages on the same channel, and FLARM and ADS-C data.[^2,3] OpenSky keeps both the single transponder messages and tracks of the form "at time T, aircraft A was at position X and altitude Y", and works out each flight's origin and destination airports in a nightly batch from the finished day's tracks.[^3] It holds no schedules, delays, flight numbers or passenger counts, nothing from before 2013, and its coverage is best in Europe and the US.[^3]

The REST API returns state vectors, an aircraft's position, altitudes, speed, heading and callsign at a moment, for the whole world or a bounding box, and flights by time, aircraft or airport for past days; a tracks endpoint is marked experimental.[^3,5] Anonymous callers get only the latest states at 10-second resolution; signed-in users, who authenticate with OAuth2 client credentials, get 5-second resolution.[^5] Calls cost credits, refilled daily and counted separately for states, flights and tracks.[^5] Anonymous use gets 400 a day, a standard user 4,000, and an active feeder whose receiver is up at least 30% of the month 8,000.[^5] The full dataset is reached through a Trino database interface, granted free to research institutions, aviation authorities and government organisations, and to registered non-profits case by case; private individuals are usually pointed to the curated datasets instead.[^3] One holds every Monday's state vectors from 2017 to 2022 at 10-second intervals, in CSV, Avro and JSON.[^6] Others are a COVID-19 flight dataset for 2019 to 2022, an aircraft metadata database in CSV, and a one-day snapshot of all the Trino tables as of 1 March 2026.[^6]

The licence covers use "solely for the purpose of non-profit research and non-profit education".[^4] Any for-profit or commercial entity, including government and military contractors, needs a written licence, and so does "operational use of the REST API in any live product, service, or automated system", whatever the user's non-profit status.[^4] Publications, web pages included, must cite Schäfer, Strohmeier, Lenders, Martinovic and Wilhelm, "Bringing up OpenSky: A large-scale ADS-B sensor network for research" (ACM/IEEE International Conference on Information Processing in Sensor Networks, April 2014), and a copy of or link to the publication must go to OpenSky.[^4] Data may not be passed to anyone outside the user's own institution, and aircraft identifiers in non-anonymised data must be de-identified before publication.[^4]

More than 800 academic papers have used OpenSky data.[^7] Journalists such as Bellingcat and the Financial Times, and institutions such as the IMF, the World Bank and the UN, have had access for non-profit work ranging from the effect of COVID-19 on air traffic to investigative reporting.[^7] For a model of a place, the state vectors over a bounding box show which aircraft pass over it and at what height, and the flight records count arrivals and departures at its airports.[^5]
