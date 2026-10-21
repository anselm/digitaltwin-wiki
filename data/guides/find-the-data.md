---
about:
  label: Find the data
  description: >-
    Every model of a place starts from the same few layers. Find them, check
    them, and record each one's source and date.
guide:
  stage: 3
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
A model of a place is a set of layers and some rules about how they interact. The layers come first, and most of them already exist somewhere.

## The layers almost every model needs

- **The ground.** Heights, from lidar (laser scanning, usually from aircraft) or a national terrain dataset. Your national mapping agency or geological survey usually publishes one.
- **What is on it.** Roads, buildings, land use, water. [OpenStreetMap](/data-sources/openstreetmap-osm/) is the open base most models start from; check it block by block where it matters.
- **Who is there.** Population and households. In the United States, the [Census APIs](/data-sources/census-apis/); elsewhere, the national statistics office.
- **What is happening.** Observations over time: river gauges such as the [USGS water data](/data-sources/usgs-water-data/), weather stations, traffic counts, satellite imagery from [Copernicus](/data-sources/copernicus-data-space/).
- **What people have seen.** Species records such as [iNaturalist](/data-sources/inaturalist/), photographs, logbooks, complaints.

The [data](/data-sources/) section on this site lists sources with what they cover and how to get them, and each [question page](/questions/) says which layers its question needs.

## The data you will have to ask for

The most useful layer is often the one that is not published: the drainage network, the substation ratings, the parcel-level zoning, the smart-meter loads. It belongs to a utility or an office, and it is released to a person who has asked clearly and said what it is for. [Talking to the people affected](/guides/talk-to-the-people-affected/) is how you find who holds the layer.

## Check it before you use it

For each layer, answer: when was it made, by whom, at what resolution, and what does it leave out? Open it over a satellite image and look at three places you know. If it is wrong in the places you know, assume it is wrong elsewhere too.

## Write it down

A table with one row per layer: what it is, where it came from, the date, the licence, who to ask. This table is the first thing the next person needs, and the thing you will need when the model disagrees with reality. The entries on this site carry a sources list for the same reason.

## Privacy

Some layers are about people. [Protect people's privacy](/guides/protect-people-s-privacy/) before any of it leaves your machine.

## Next

[Choose the kind of model](/guides/choose-the-kind-of-model/).
