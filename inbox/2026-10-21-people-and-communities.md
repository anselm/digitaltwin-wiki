# Models of people and communities: a search sweep (2026-10-21)

Anselm asked for a general search on digital twins of people and communities. These are leads from search-result summaries, NOT read pages: every fact below must be confirmed on the maker's own page before it goes in an entry. The wiki already covers the movement side (MATSim, UrbanSim, Replica, GAMA, AnyLogic, MiroFish, the ABM books) and has a privacy guide; it has no entry for any tool below.

## 1. Synthetic populations: a statistically faithful stand-in for every resident

The base layer: households and people generated from census tables so a model can hold "everyone" without holding anyone's data.

- PopulationSim, the synthesiser in the ActivitySim consortium (US MPOs, open source); ActivitySim itself is the activity-based travel model those agencies use. github.com/ActivitySim
- PAM, a population and activity modeller for MATSim users (lead only; maker not yet seen).
- SPGen (Java, github smart-facility/SPGen): New South Wales, about 6 million people.
- simPop (R, World Bank and IHSN): synthetic populations from survey and census microdata. ihsn.org/projects/synthetic-populations
- SynthEco (Amsterdam, postcode level) and an open synthetic population of Canada (Prédhumeau and Manley 2023, PMC10027812).
- GREASYPOP, a generator of geographically realistic US populations, used with Covasim (WSC 2024).

## 2. Whole-population twins for health and policy

- ALMA, PHF Science (New Zealand): a synthetic population from census and government data, used for a measles outbreak and for testing social and climate policy on different groups. phfscience.nz/expertise/data-science-ai/alma and /digital-twin/
- JUNE: an open epidemiological simulation of England and Wales (about 55 million agents), reportedly used by NHS England's COVID response; seen only as a 2021 talk abstract.
- OpenABM-Covid19 and Covasim: open epidemic agent-based models over synthetic populations; BESSIE (Charlottesville); an IISc city simulator for Indian cities (cni.iisc.ac.in/covid-19-modelling).

## 3. Residents simulated with language models

The newest and least settled strand. The evidence is mixed and the wiki should say so.

- Park and colleagues, generative agents built from interviews with 1,052 people: they matched the General Social Survey answers 85% as well as the people matched themselves two weeks later.
- Skeptical papers: LLM respondents get averages right but too little spread (arXiv 2602.18462; 2607.18310; 2607.00910).
- GenWorld (preprint 2606.27650): 196,608 synthetic residents for Higashihiroshima from census and geodata; forecasting not yet calibrated.
- DigitalTurku (Turku, Finland): synthetic personas used to test a planning platform (utupub.fi).
- Tenant responses to energy policy with LLM agents (arXiv 2607.24341).

## 4. Community twins built with residents

- Positive Energy Districts in Vienna, Stuttgart, Rotterdam and Wroclaw, with living labs on CityGML twins (CORP 2025 paper 115).
- Jat Min Chuen estate, Hong Kong: a community game on a 3D twin for residents to co-design (CUHK).
- University of Cincinnati with Ohio DOT: nine immersive twins and a "Future Hub Playbook" for engagement.
- A critical reading of Zurich, Herrenberg and Singapore: twins do not make participation inclusive by themselves (Rivista di Digital Politics, 2025).

## 5. Who bears the risk: equity layers

- Hazard-responsive twin for heat and equity, Oak Ridge with University of Tennessee (arXiv 2510.22941): synthetic district, cooling centres reduce population-weighted heat risk 11 to 13%.
- Nihonbashi, Tokyo: heat risk, resilience-hub occupancy and demographics to route people to cool spaces (ISPRS 2025).
- US DOE grant DE-SC0024793, "Equitable Digital Neighborhood Twin".
- Gap: nothing found that models displacement or gentrification.

## 6. Consent and control

- CARE principles for Indigenous data governance (Research Data Alliance; Data Science Journal 2020): collective benefit, authority to control, responsibility, ethics. Consent can be collective, conditional and revocable. Nothing found applying them to twins directly; that is a question the wiki could raise.

## What this could become (Anselm's call)

- A question page, roughly "who lives here, and how would a change land on them": synthetic population, then behaviour, then who bears the risk, linking the existing movement engines.
- A term entry for synthetic population.
- Entries for the durable, open ones first: ActivitySim with PopulationSim, ALMA, Covasim, OpenABM, simPop.
- An article entry on the LLM-resident evidence, both sides.
- The CARE principles as an ontology or term, linked from the privacy guide.
