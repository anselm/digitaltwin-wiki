---
about:
  label: 'Clay v1.5: the technical report'
  description: >-
    Two years after release, Clay's makers publish what their open satellite
    imagery model is, test it on 43 benchmarks, and say where newer models
    beat it. Every number traces to a file.
  depiction: articles/places/clay-v1-5-technical-report.jpg
  depiction_credit: 'Figure 1 of the Clay v1.5 technical report (Sánchez-Andrade Nuño and others, 2026), CC BY 4.0, reduced in size. The small satellite thumbnails in it derive from Copernicus Sentinel data. Band wavelengths generate the first layer of the network (1); the encoder reads a quarter of the image patches and a summary token (2); a decoder rebuilds the hidden patches (3).'
  tags:
    - satellite
    - foundation model
    - embeddings
    - benchmark
    - reproducibility
    - Earth observation
    - preprint
article:
  tier: 2
  url: 'https://github.com/Clay-foundation/clay-v1.5-paper'
  published: '2026-11-26'
  publisher: 'Clay, on GitHub (a preprint under open review)'
  authors:
    - Bruno Sánchez-Andrade Nuño
    - Soumya Ranjan Mohanty
    - Daniel Wiesmann
    - Mason Grimshaw
    - Dan Hammer
    - Samuel Barrett
    - Konstantin Klemmer
    - Avery Cohn
    - Laura Chen
domains:
  - places
  - ecology
open:
  source: open
  data: open
  api: unknown
  participation: open
  licence: Apache-2.0 (code); CC BY 4.0 (text, figures and result files)
  note: The repository holds the manuscript, the evaluation code and the result files. Third-party datasets and model weights keep their own licences and are not redistributed in it. Errors are reported as GitHub issues.
relations:
  - predicate: about
    target: engines/earth-observation-and-ai/clay
  - predicate: about
    target: articles/places/earth-embeddings-compared
  - predicate: cites
    target: engines/earth-observation-and-ai/olmoearth
  - predicate: cites
    target: engines/earth-observation-and-ai/tessera
  - predicate: cites
    target: engines/earth-observation-and-ai/alphaearth-prithvi
provenance:
  origin: agent
  sources:
    - title: 'Clay v1.5: An Open Sensor-Agnostic Earth Observation Foundation Model. Sánchez-Andrade Nuño and others, the manuscript in Markdown (DRAFT.md) at commit 371c5ea, 26 November 2026'
      url: 'https://github.com/Clay-foundation/clay-v1.5-paper/blob/371c5eaaa32aeecefbbb44db51418b1bc5a334c7/DRAFT.md'
    - title: 'Clay-foundation/clay-v1.5-paper. GitHub repository: README, CITATION.cff and NOTICE'
      url: 'https://github.com/Clay-foundation/clay-v1.5-paper'
  created: '2026-11-26'
  reviewed: '2026-11-26'
  reviewed_by: 'Claude, from the manuscript in the repository at commit 371c5ea: all five sections, Tables 1 and 2 and their notes, and the funding statement. The reference list, REPRODUCING.md, the fact-source ledger and the experiment folders were not read, and nothing was re-run. Anselm sent the repository.'
  status: draft
---
[Clay](/engines/earth-observation-and-ai/clay/) is an open model that turns a square of satellite or aerial imagery into a list of 1,024 numbers, an embedding, that can be searched or fed to a small classifier. Version 1.5 was released in November 2024 with no paper describing it.[^1] This report, posted two years later by nine of the people who built and used it, is that paper. It says how the model was made and tests it against the models that have appeared since. On most of the tests it does not come first, and the report says so.[^1]

It is worth reading for two reasons beyond Clay itself. It ends with practical advice on using embeddings from any such model. And the repository carries the code and the result file behind every number, with a ledger that maps each claim to its source.[^2]

## What the model is

Most satellite models are built for a fixed set of sensor bands. Clay is told the wavelength of each band and the ground size of a pixel, and generates the first layer of its network from them. One set of weights can then read imagery from sensors it was never trained on, at resolutions from half a metre to half a kilometre.[^1]

It was trained on 72.1 million image chips of 256 by 256 pixels, 33.8 terabytes in all, from seven public collections: LINZ aerial photographs of New Zealand, NAIP aerial photographs of the United States, Sentinel-2, Sentinel-1 radar, Landsat 8 and 9 at two processing levels, and MODIS.[^1] The sampling favoured places people have changed. Built-up land was drawn about forty times as often as its share of the world's land, which is under one per cent.[^1]

Training hides three quarters of each image and asks the model to rebuild it. A second objective pulls the model's one-vector summary of each chip towards that of an existing general-purpose vision model.[^1] The encoder has 311 million parameters.[^1]

The report also gives the cost. From August to November 2024 the project logged 42,031 hours of eight-GPU cloud machines. The cloud provider's own accounting put the emissions at 33.56 tonnes of carbon dioxide equivalent by where the electricity was generated, and 0.047 tonnes after the provider's purchases of renewable energy are counted.[^1] Those totals cover training, tests and the computing of the published embeddings together.

In May 2025 the weights were relicensed from a licence with restrictions on use to Apache 2.0.[^1]

## How it was tested

The report compares the one frozen model with others on 43 benchmarks. Fifteen classification tasks come from an independent leaderboard that runs about 150 models under one protocol. The authors ran Clay through the same harness for three segmentation tasks, and ran the remaining 25 tasks themselves.[^1] In each row the table names the best other satellite model and the best general-purpose vision model, and gives Clay's score as a percentage of the best in the row. The median over all 43 rows is 94 per cent.[^1]

The pattern, in the report's own account:[^1]

- **Where Clay leads.** Two segmentation tasks on aerial imagery at 0.1 and 1 metre, under the simplest kind of readout. With heavier decoders attached, two other models score higher on the same tasks.
- **Sensors it never saw.** On two tasks using a 21-band instrument absent from its training, it reaches 91 to 94 per cent of the best satellite model.
- **Ordinary colour photographs from the air.** General-purpose vision models do better. Clay reaches 92 to 98 per cent of the best.
- **Anything that depends on the seasons.** Models that read a year of passes do clearly better at telling crops and land cover apart. On Canadian crop types Clay reaches 65 to 68 per cent of the best, and on European land cover 55 per cent. The report's explanation is that one overpass cannot separate cover types that differ only in how they change through a growing season.

Its recommendation follows from that. Use Clay when the work needs one permissively licensed model, or inputs the others cannot take: an unfamiliar instrument, sub-metre imagery with bands beyond red, green and blue, or an incomplete set of bands. For crops and seasonal change, use a model built on many dates or a set of annual embeddings such as [TESSERA](/engines/earth-observation-and-ai/tessera/) or [AlphaEarth](/engines/earth-observation-and-ai/alphaearth-prithvi/). For colour scenes, use a general vision model.[^1]

## Four lessons on using embeddings

These come from the authors' work with embeddings on more than twenty projects with partners.[^1]

1. **Keep the big model frozen and train a small decoder.** On flood mapping, a decoder of 8.9 million parameters on the frozen model came within half a point of retraining all 320 million. Neither clearly beat a conventional network trained from nothing on the full set of labels. Studies by others cited in the report find larger gains when labels are few.
2. **The summary vector and the patch vectors do different jobs.** The summary describes the scene and suits search. The vectors for each patch keep the layout: they located which quarter of a chip a feature was in 99 times in 100, against 42 for the summary. A classifier trained on embeddings from one sensor did not carry over to another: scores fell by 41 to 57 points.
3. **Do not truncate the vector.** The first 64 numbers carry no more information than any 64 chosen at random. An earlier stage of training had arranged them so that a prefix could be used alone, and the final stage undid it.
4. **Start with a simple regularised classifier.** A linear classifier or small neural network on the embeddings beat nearest-neighbour methods, decision trees and classifying on a two-dimensional projection, by 3 to 13 points.

The report also names what the model cannot do. It treats each image as a single moment, so change has to be computed afterwards from embeddings at several dates. And it has no link to language, so searching by a written description needs something added.[^1]

## How far to trust it

The authors made the model, and some have commercial interests in it. The funding statement says one company "builds commercial products on Earth embeddings, including those produced from Clay models" and paid for its authors' work on the evaluation.[^1] The report says which numbers come from an independent leaderboard and which from the authors' own runs, and marks the cells that rest on a single run.[^1]

It is a preprint. The repository calls it "under open review" and asks readers to report errors as issues.[^2] It existed as a single commit dated 26 November 2026 when this entry was written, and no arXiv number had been assigned.[^2] Nothing in it was re-run for this entry.

One sentence in it bears on how such reports are now written: the authors disclose that they used four AI systems "for research, drafting, and adversarial review" and take responsibility for the result.[^1]

The wiki's [comparison of Earth embeddings](/articles/places/earth-embeddings-compared/) sets Clay beside the alternatives by what each embedding describes and what its licence allows.
