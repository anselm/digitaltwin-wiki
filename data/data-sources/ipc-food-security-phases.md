---
about:
  label: IPC food security phases
  description: >-
    The Integrated Food Security Phase Classification: a shared five-phase scale, from Minimal to Famine, with country analyses mapped area by area
  tags:
    - food security
    - famine
    - hunger
    - humanitarian
    - early warning
    - thresholds
datasource:
  homepage: 'https://www.ipcinfo.org/'
  coverage: countries with IPC analyses, area level
  cadence: as needed
open:
  source: unknown
  data: open
  api: partly
  participation: partly
  licence: CC0 (HDX datasets)
  note: The global datasets on HDX, at national, first-level and area scale, are CC0; the IPC-CH Public API asks for a key. The IPC's own site could not be opened for this entry.
domains:
  - food
  - people
  - places
relations:
  - predicate: about
    target: terms/tipping-points
    note: a classified threshold in human terms
provenance:
  origin: agent
  sources:
    - title: 'What is the IPC? | FEWS NET'
      url: 'https://fews.net/about/integrated-phase-classification'
    - title: 'Integrated Food Security Phase Classification (IPC) (HDX organisation record)'
      url: 'https://data.humdata.org/api/3/action/organization_show?id=ipc'
    - title: 'Global: Acute Food Insecurity Country Data | Humanitarian Dataset | HDX'
      url: 'https://data.humdata.org/dataset/global-acute-food-insecurity-country-data'
    - title: 'IPC Public API Documentation'
      url: 'https://docs.api.ipcinfo.org/'
    - title: 'Integrated Food Security Phase Classification (IPC) Technical Manual Version 3.1 | Knowledge4Policy'
      url: 'https://knowledge4policy.ec.europa.eu/publication/integrated-food-security-phase-classification-ipc-technical-manual-version-31_en'
    - title: 'About FEWS NET'
      url: 'https://fews.net/about'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
The IPC gives governments and aid agencies one scale for how severe hunger and malnutrition are, so that analysts using different data can state their findings in the same terms and compare countries and years.[^1,2] Its acute food insecurity scale has five phases. An area gets the phase that at least 20 per cent of its people are in or worse.[^1] Its partnership of 19 organisations includes FAO, the World Food Programme and the World Bank, regional bodies in Africa and Central America, and aid groups such as Oxfam.[^2] The technical manual, at version 3.1 since 2021, also has scales for chronic food insecurity and for acute malnutrition.[^1,5]

The five phases, as they describe households:[^1]

- Phase 1, Minimal: households meet essential food and non-food needs without unusual or unsustainable ways of getting food and income.
- Phase 2, Stressed: food is minimally adequate, but some essential non-food spending is out of reach without stress coping.
- Phase 3, Crisis: food gaps show up as high or above-usual acute malnutrition, or minimum food needs are met only by running down essential livelihood assets.
- Phase 4, Emergency: large food gaps show up as very high acute malnutrition and excess deaths, or are held off only by emergency strategies and selling assets.
- Phase 5, Famine: an extreme lack of food or other basic needs even after every coping strategy is used up, with starvation, death and destitution evident.

What moves an area up a phase is the share of its people meeting the description, judged on a convergence of evidence about food consumption, livelihoods, malnutrition and deaths against reference tables of illustrative thresholds.[^1] Famine has three thresholds of its own: at least 20 per cent of people with an extreme lack of food, acute malnutrition at 30 per cent by weight-for-height, and 2 deaths per 10,000 people a day.[^1] It is classified with solid evidence when all three are clearly met, and with reasonable evidence when two are clearly met and the third is likely.[^1] Maps mark areas getting significant food aid, and an exclamation mark flags an area that would likely be at least one phase worse without that aid.[^1] IPC protocols call for each analysis to be done on a consensual basis.[^1]

National IPC Technical Working Groups produce the analyses, and their population estimates by phase are on the Humanitarian Data Exchange (HDX) as CSV files at national, first-level and area scale, with country datasets alongside.[^3] Those files are CC0, public domain, and the global set covers periods from October 2020.[^3] The IPC-CH Public API returns country, area and point data, including GeoJSON, and asks for an API key.[^4]

USAID set up the Famine Early Warning Systems Network (FEWS NET) in 1985 after famines in East and West Africa.[^6] It helped design the IPC and uses version 3.1 for its own current and projected maps, which cover an eight-month outlook.[^1,6] Its analysis is called IPC-compatible: it uses key IPC protocols but is not necessarily built on multi-partner consensus.[^1]
