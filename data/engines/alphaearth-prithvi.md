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
domains:
  - places
  - ecology
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
Google DeepMind and Google Earth Engine announced AlphaEarth Foundations on 30 July 2025. The model takes optical satellite imagery, radar, laser mapping, climate simulations and other public sources. From them it computes a 64-number summary, called an embedding, for every 10 by 10 metre square of land and coastal water. One consistent dataset can then stand in for many satellites. Google publishes the annual summaries as the Satellite Embedding dataset in Google Earth Engine, and users train their own classifiers on top of the summaries.

Testers named by DeepMind include the Global Ecosystems Atlas, for classifying unmapped ecosystems, and MapBiomas in Brazil, for agricultural and environmental change. The UN Food and Agriculture Organization is another tester.

Prithvi Geospatial comes from NASA, IBM and Forschungszentrum Jülich. A foundation model is trained once on broad data and then adapted to narrower tasks. Prithvi was first released in August 2023, and a version expanded with global data was announced on 4 December 2024. It is pre-trained on NASA's Harmonized Landsat and Sentinel-2 imagery, for fine-tuning to tasks such as flood mapping, burn-scar mapping, crop classification and filling cloud gaps in image time series. The model is open source and downloadable from Hugging Face.

Neither is a finished tool. A model of a place would use them to produce land-cover, change or hazard layers from satellite data.
