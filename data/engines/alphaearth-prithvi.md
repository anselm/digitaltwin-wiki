---
about:
  label: AlphaEarth / Prithvi
  description: >-
    Geospatial foundation models from Google DeepMind (AlphaEarth Foundations,
    released as an embeddings dataset in Google Earth Engine) and from NASA
    with IBM (Prithvi Geospatial, open source on Hugging Face), for mapping
    and land-change tasks.
  tags:
    - satellite
    - foundation model
    - embeddings
tool:
  form: Reusable data and models
  group: Earth observation and AI
  homepage: >-
    https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/
open:
  source: partly
  data: partly
  api: unknown
  participation: unknown
provenance:
  origin: agent
  sources:
    - title: AlphaEarth Foundations helps map our planet in unprecedented detail
      url: >-
        https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/
    - title: Expanded AI Model with Global Data Enhances Earth Science Applications
      url: 'https://science.nasa.gov/science-research/ai-geospatial-model-earth/'
  reviewed: '2026-10-18'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
import:
  source: openai-linkedin-scrape 2026-10-17
  id: DT015
  kind: enabling_model
  family: enabling_technology_and_adjacent_work
  priority: supporting
  verified: false
  posts:
    - P003
  posters:
    - Yossi Matias
---
AlphaEarth Foundations is a model from Google DeepMind and Google Earth Engine, announced 30 July 2025. It takes optical satellite imagery, radar, laser mapping, climate simulations and other public sources and compresses them into a 64-number summary for every 10 by 10 metre square of land and coastal water, so that one consistent dataset can stand in for many satellites. Google publishes the annual summaries as the Satellite Embedding dataset in Google Earth Engine, where users train their own classifiers on top of it. DeepMind names the Global Ecosystems Atlas (classifying unmapped ecosystems), MapBiomas in Brazil (agricultural and environmental change) and the UN Food and Agriculture Organization among the groups testing it.

Prithvi Geospatial is a foundation model from NASA, IBM and Forschungszentrum Jülich, first released in August 2023 and expanded with global data in a version announced 4 December 2024. It is pre-trained on NASA's Harmonized Landsat and Sentinel-2 imagery and is meant to be fine-tuned for tasks such as flood mapping, burn-scar mapping, crop classification and filling cloud gaps in image time series. It is open source and downloadable from Hugging Face.

Both are building blocks rather than finished tools: a place-based model would use them to produce land-cover, change or hazard layers from satellite data.
