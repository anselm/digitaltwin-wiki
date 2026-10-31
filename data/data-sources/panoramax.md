---
about:
  depiction: data-sources/panoramax.jpg
  depiction_credit: 'A street in central Lyon on 4 May 2025, cropped from a 360-degree picture; faces blurred by Panoramax. nuxper_np on Panoramax (OpenStreetMap France instance), CC BY-SA 4.0.'
  label: Panoramax
  description: >-
    Open street-level photos held on many independent servers and searched
    through one catalogue; supported by France's IGN and developed with
    OpenStreetMap France.
  aliases:
    - Panoramax Federation
  tags:
    - street-level imagery
    - photos
    - 360-degree imagery
    - OpenStreetMap
    - France
    - open data
    - STAC
datasource:
  coverage: worldwide wherever contributors have photographed, held on federated instances in several countries
  resolution: individual geolocated pictures, 360-degree or flat, grouped in sequences
  cadence: continuous as pictures are uploaded; catalogue harvested regularly; full exports weekly
  access: free and without an account to view and download; uploading needs an account on an instance
  format: JPEG with EXIF and XMP metadata; STAC and OGC API Features JSON; vector tiles; weekly GeoParquet and PostgreSQL dump of the catalogue
  homepage: 'https://panoramax.fr/'
open:
  source: open
  data: open
  api: 'yes'
  participation: open
  licence: per picture; instances in the federation use Licence Ouverte 2.0 or CC BY-SA 4.0; software MIT
domains:
  - places
relations:
  - predicate: alternative_to
    target: data-sources/mapillary
    note: both hold street-level photos contributed by the public
  - predicate: alternative_to
    target: data-sources/kartaview
    note: both hold street-level photos contributed by the public
  - predicate: contributes_to
    target: data-sources/openstreetmap-osm
    note: the federation's licences are chosen so that the pictures can be used to contribute to OpenStreetMap
provenance:
  origin: agent
  sources:
    - title: 'Panoramax: The free alternative to photo-mapping territories (home page, figures read 30 October 2026)'
      url: 'https://panoramax.fr/'
    - title: Terms and conditions of Panoramax
      url: 'https://panoramax.fr/mentions-legales'
    - title: Panoramax instances (Panoramax FAQ)
      url: 'https://panoramax.fr/foire-aux-questions/les-instances'
    - title: Panoramax & anonymization (Panoramax FAQ, Legal)
      url: 'https://panoramax.fr/foire-aux-questions/juridique'
    - title: What is Panoramax? (Panoramax Docs)
      url: 'https://docs.panoramax.fr/'
    - title: How to be part of it (Panoramax Docs, Panoramax Federation)
      url: 'https://docs.panoramax.fr/federated-catalog/'
    - title: How does it work (Panoramax Docs, federated catalog overview)
      url: 'https://docs.panoramax.fr/federated-catalog/overview/'
    - title: Export (Panoramax Docs, federated catalog data export)
      url: 'https://docs.panoramax.fr/federated-catalog/data_export/'
    - title: Host an instance (Panoramax Docs)
      url: 'https://docs.panoramax.fr/how-to-contribute/hosting-instance/'
    - title: Using the API (Panoramax Docs)
      url: 'https://docs.panoramax.fr/backend/api/api/'
    - title: Share pictures (Panoramax Docs)
      url: 'https://docs.panoramax.fr/how-to-contribute/share-pictures/'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the FAQ on instances is older than the home page and its count of instances open to uploads was not used'
  status: draft
---
Panoramax is an open, shared collection of street-level photos: anyone can photograph places visible from public space and add them, and the pictures are then free for anyone to view and reuse.[^1] The platform is supported by the geo-commons factory (Fabrique des géocommuns) of France's National Institute of Geographic and Forest Information (IGN) and developed with the support of the non-profit OpenStreetMap France.[^2] It brings together pictures from local authorities, OpenStreetMap contributors, IGN and others.[^1] On 30 October 2026 its home page counted 123 million pictures across all Panoramax servers, covering 1.1 million kilometres, from 2,777 contributors.[^1]

Panoramax is decentralised. Pictures are stored on instances, independent servers each run by its own organisation, and the project's view is that no single organisation could host all the pictures of the world.[^9] Among the instances open to contributions are those of IGN, OpenStreetMap France, OpenStreetMap Spain and OSM Croatia, and each instance sets its own rules and licence and can limit the area it accepts.[^1,9,11] An organisation can run a public instance or a private one kept out of the federation.[^9] A federated catalogue, viewable at explore.panoramax.fr, harvests the metadata of every listed instance so that all pictures can be searched and seen in one place; the pictures themselves stay on their instances.[^6,7]

Contributors use a phone or a 360-degree camera, from a car, bike, on foot or by boat; each picture needs a position and capture time, usually from the camera's own EXIF tags.[^11] Public instances accept only pictures of public space.[^11] Faces and vehicle licence plates are blurred automatically before publication, anyone can ask for more blurring, and pictures taken inside French military zones are rejected on upload.[^2,4] Pictures are JPEG files with their position and time in EXIF and XMP metadata.[^3]

The catalogue's API follows the SpatioTemporal Asset Catalog (STAC) and OGC API Features standards and serves vector tiles for maps; it reads and searches but does not take uploads.[^7] Each instance has the same kind of API, with uploads through it or the command-line tool.[^10,11] The whole catalogue is exported every week as a PostgreSQL dump, which runs to several hundred gigabytes once restored, and as a GeoParquet file that can be queried remotely without downloading it all; the GeoParquet format is labelled beta.[^8] The software is mostly Python and is published on GitLab under the MIT licence.[^3]

Only two licences are accepted in the federation: the French government's Licence Ouverte 2.0, which is similar to CC BY, and CC BY-SA 4.0.[^6] The federation's rules say the licences were chosen to keep the pictures a commons, avoid closed derived data, allow their use for OpenStreetMap, and allow any use in the public interest.[^6] Each picture's licence comes with it, and the terms ask anyone sharing a picture to credit its author.[^2]

For someone modelling a town or district, Panoramax is a way to see streets as they were on a given day, under licences that allow derived data, including for [OpenStreetMap](/data-sources/openstreetmap-osm/). Its use cases include managing street furniture and roads and identifying traffic signs.[^1] A local authority or group can also run its own instance to collect and hold its own survey photos while sharing them through the common catalogue.[^9]
