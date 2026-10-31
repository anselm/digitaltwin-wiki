---
about:
  label: AISStream.io
  description: >-
    Free service that streams live ship positions and other AIS messages
    over a WebSocket, filtered by area, vessel and message type.
  aliases:
    - aisstream.io
    - AIS Stream
  tags:
    - ships
    - vessels
    - AIS
    - maritime
    - live data
    - WebSocket
datasource:
  coverage: wherever its network of AIS receiving stations hears ships; extent not stated
  resolution: individual AIS messages per vessel or station, as broadcast
  cadence: live stream; messages arrive as ships send them, with no replay
  access: free API key after signing in with GitHub; server-side WebSocket connections only
  format: JSON in binary WebSocket frames, 25 AIS message types
  homepage: 'https://aisstream.io/'
  cost: free
open:
  source: unknown
  data: partly
  api: 'yes'
  participation: unknown
  licence: none stated
  note: >-
    On 30 October 2026 the site published a privacy policy but no terms of
    use or data licence. Its message models and example clients are on
    GitHub.
domains:
  - mobility
  - water
provenance:
  origin: agent
  sources:
    - title: 'AIS Stream, Maritime events via WebSocket'
      url: 'https://aisstream.io/'
    - title: 'Documentation, AIS Stream'
      url: 'https://aisstream.io/documentation'
    - title: 'Privacy policy, AIS Stream'
      url: 'https://aisstream.io/privacypolicy'
    - title: 'aisstream (aisstream.io), GitHub'
      url: 'https://github.com/aisstream'
    - title: 'Our APIs, Global Fishing Watch'
      url: 'https://globalfishingwatch.org/our-apis/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The Automatic Identification System (AIS) is the set of radio messages that ships and shore stations exchange.[^1,2] AISStream.io passes them on free and in real time over a WebSocket, a connection that stays open and pushes each message as it arrives.[^1,4] The messages come from a network of AIS receiving stations it describes as global.[^1] No company or person is named as the operator; the copyright line reads "AIS Stream".[^1]

A position report gives a vessel's identity number (MMSI), its position, its speed and course over ground and its heading.[^2] The other 24 message types include ship and voyage data such as name and destination, safety messages, search-and-rescue aircraft positions, aids to navigation and binary messages between ships.[^1,2] Each arrives as JSON with the ship's name and last known position attached.[^2]

To use it you sign in with GitHub and create an API key.[^1] Within three seconds of connecting, a client sends a subscription with the key and at least one bounding box, and may narrow it to up to 200 vessels by MMSI or to chosen message types.[^2] An account may hold three subscribed connections and an IP address three open ones, and a subscription may change at most once a second.[^2] Browsers may not connect directly, so a key stays on a server that passes on what its users need.[^2] A client that reads too slowly loses messages, and from September 2026 uncompressed connections face per-user bandwidth limits.[^2] There is no uptime guarantee, and missed events are not replayed.[^2] Apart from a privacy policy, the site published no terms of use or data licence on 30 October 2026.[^1,3]

Someone modelling a harbour, strait or stretch of coast can subscribe to a box around it and keep their own record of the traffic, since the stream holds no history to go back to.[^2] For vessel presence and fishing activity worked up from AIS over years, [Global Fishing Watch](/data-sources/global-fishing-watch/) publishes processed data through its APIs.[^5]
