# Shortlist from the coverage run (2026-10-21)

Leads, not entries. Each was checked by a reader against the project's own page (GitHub README or LICENSE, Hugging Face API); no search engines. Anselm picks; entries are then written from the pages.

## From Awesome-Remote-Sensing-Foundation-Models (230 gaps → 11)

1. Satlas (Ai2), github.com/allenai/satlas. Monthly Sentinel-2 map layers ready to download: offshore and onshore wind turbines, solar farms, tree cover, super-resolution. ODC-BY on the GitHub page; the HF pretrain repo is tagged Apache-2.0 (pages disagree).
2. OlmoEarth (Ai2), github.com/allenai/olmoearth_pretrain. Multi-sensor time-series model, weights Nano to Large, plus a platform. Custom licence that bars military, surveillance, policing and extractive uses.
3. TerraMind (IBM, ESA Φ-lab, FAST-EO), github.com/IBM/terramind. Generates one modality from another (radar to optical, imagery to land cover). Apache-2.0. Sibling of Prithvi.
4. Major TOM (ESA Φ-lab), github.com/ESA-PhiLab/Major-TOM. Global Sentinel-1/2 and DEM sets on one grid, plus ready embedding sets from several models. Mostly CC-BY-SA-4.0.
5. Presto (NASA Harvest org), github.com/nasaharvest/presto. Light per-pixel time-series model for crops and land cover. MIT.
6. Galileo (NASA Harvest), github.com/nasaharvest/galileo. Presto's successor. MIT.
7. SatCLIP (Microsoft), github.com/microsoft/satclip. Turns a latitude and longitude into a feature vector for the place. MIT.
8. Copernicus-FM and Copernicus-Embed-025deg (TUM Zhu lab), github.com/zhu-xlab/Copernicus-FM. Covers all Sentinels including S5P atmosphere; a global 0.25° embedding map. CC-BY-4.0 model and data.
9. DOFA (TUM Zhu lab), github.com/zhu-xlab/DOFA. One model for any band combination; in TorchGeo. MIT code, CC-BY-4.0 weights.
10. SSL4EO-S12 (TUM Zhu lab), github.com/zhu-xlab/SSL4EO-S12. The standard Sentinel pretraining set with checkpoints.
11. GEO-Bench (ServiceNow), github.com/ServiceNow/geo-bench. For comparing models; its README points to GEO-Bench-2, which was not opened.

Rejected: RemoteCLIP (maker unclear from its page), PANGAEA (no maker named), and most of the list, which is paper links.

## From satellite-image-deep-learning/techniques (1,721 gaps → 15)

The reader pulled stars, last push, licence and owner for all 1,595 GitHub repos on the list, kept maintained organisation repos with a release, then read each README.

1. Clay Foundation Model, github.com/Clay-foundation/model. Open embedding model; Apache-2.0 code and weights; embeddings on Source Cooperative (ODC-BY). A programme of Renaissance Philanthropy, earlier sponsored by Radiant Earth (per its docs site).
2. Microsoft Road Detections, github.com/microsoft/RoadDetections. 54.2M km of roads from Bing Maps imagery, ODbL, by region. Ready data, no ML needed.
3. High Resolution Canopy Height (Meta FAIR with WRI), github.com/facebookresearch/HighResCanopyHeight. Sub-metre canopy height; Apache-2.0; maps viewable in a WRI Earth Engine app.
4. Tropical Tree Cover (WRI), github.com/wri/sentinel-tree-cover. 10 m trees outside forests across the tropics; GPL-3.0 code; dataset licence not stated.
5. CoastSat, github.com/kvos/CoastSat. Shoreline position since the 1980s from Landsat and Sentinel-2, made for non-experts; GPL-3.0; personal repo (Kilian Vos and others).
6. ML4Floods (SpaceML), github.com/spaceml-org/ml4floods. Flood extent from Sentinel-2; LGPL-3.0 code, CC BY-NC data and models.
7. ai4g-flood (Microsoft), github.com/microsoft/ai4g-flood. Floods from Sentinel-1 radar through cloud; MIT.
8. Tile2Net (NYU VIDA), github.com/VIDA-NYU/tile2net. Sidewalk and crosswalk networks from aerial tiles; BSD-3.
9. CARS (CNES), github.com/CNES/cars. Surface models (terrain and buildings) from satellite stereo; Apache-2.0; release 1.3.0 on 2026-10-14.
10. TerraTorch, github.com/torchgeo/terratorch. Toolkit for fine-tuning Prithvi, TerraMind and others; Apache-2.0. Maybe a cross-link from Prithvi rather than an entry.
11. SatCLIP (Microsoft): also on the first list.
12. SKAI (Google Research with WFP), github.com/google-research/skai. Building damage after disasters; Apache-2.0.
13. building-damage-assessment (Microsoft AI for Good), github.com/microsoft/building-damage-assessment. Damage-map workflows, used on the Turkey/Syria earthquakes; MIT.
14. CyFi (DrivenData), github.com/drivendataorg/cyfi. Algal-bloom levels in small inland waters from Sentinel-2; MIT; v1.2.0 on 2026-10-19.
15. Fmask 5 (GERSL), github.com/GERSL/Fmask. The standard cloud and shadow mask for Landsat and Sentinel-2; MIT.

Close but left out: nasaharvest crop-mask (Kenya only), s2cloudless (Fmask covers it), SEN2SR (licence fields disagree), RAMP (no licence stated). Dropped: google/dynamicworld (archived), BlenderGIS (off topic).
