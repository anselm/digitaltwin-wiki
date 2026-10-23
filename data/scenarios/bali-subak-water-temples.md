---
about:
  label: "Bali's subak rice terraces under tourism and housing"
  description: >-
    Bali's rice terraces are watered by about 1,200 farmer collectives
    coordinated through water temples, a World Heritage landscape since
    2012. Rice fields shrank from 70,996 to 64,474 hectares between 2019
    and 2024 as land goes to hotels and housing. What keeps the system
    working?
  tags:
    - Bali
    - subak
    - irrigation
    - rice
    - water temples
    - land conversion
    - tourism
    - World Heritage
scenario:
  place: Bali, Indonesia, the island's irrigated rice terraces and the watersheds that feed them
  since: '2012'
  scale: bioregion
domains:
  - water
  - food
  - places
  - people
  - ecology
relations:
  - predicate: example_of
    target: questions/land-use-change
  - predicate: cites
    target: articles/lansing-kremer-balinese-water-temple-networks
  - predicate: needs
    target: data-sources/copernicus-data-space
  - predicate: needs
    target: engines/netlogo
provenance:
  origin: agent
  sources:
    - title: 'Cultural Landscape of Bali Province: the Subak System as a Manifestation of the Tri Hita Karana Philosophy (UNESCO World Heritage List, archived 28 January 2026)'
      url: 'https://web.archive.org/web/20260128080558/https://whc.unesco.org/en/list/1194/'
    - title: 'State of Conservation 2023, Cultural Landscape of Bali Province (UNESCO, archived)'
      url: 'https://web.archive.org/web/20250210105708/https://whc.unesco.org/en/soc/4424'
    - title: 'State of Conservation 2021, Cultural Landscape of Bali Province (UNESCO, archived)'
      url: 'https://web.archive.org/web/20220407230834/http://whc.unesco.org/en/soc/4192/'
    - title: 'Sawah di Bali berkurang 6.522 hektare dalam 5 tahun (detikBali, 3 November 2025)'
      url: 'https://www.detik.com/bali/berita/d-8192611/sawah-di-bali-berkurang-6-522-hektare-dalam-5-tahun'
    - title: 'Lahan di Bali makin sempit, produksi padi menurun pada 2025 (ANTARA Bali, 3 February 2026)'
      url: 'https://bali.antaranews.com/berita/397578/lahan-di-bali-makin-sempit-produksi-padi-menurun-pada-2025'
    - title: 'Bali to draft bylaw banning land conversion this year (ANTARA, 15 September 2025)'
      url: 'https://mataram.antaranews.com/berita/487333/bali-to-draft-bylaw-banning-land-conversion-this-year'
    - title: 'Bali to Freeze New Hotel Permits as Farmland Loss Surges to 700 Hectares Annually (InvestorTrust, 28 November 2025)'
      url: 'https://investortrust.id/market/86862/bali-to-freeze-new-hotel-permits-as-farmland-loss-surges-to-700-hectares-annually'
    - title: 'HotSpots H2O: Rivers Run Dry in Bali as Tourism, Drought Overwhelm Water Supply (Circle of Blue, 9 December 2019)'
      url: 'https://www.circleofblue.org/2019/hotspots/hotspots-h2o-rivers-run-dry-in-bali-as-tourism-drought-overwhelm-water-supply/'
    - title: 'Adaptive self-organization of Bali’s ancient rice terraces (PNAS 2017)'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5488911/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed; the UNESCO pages were read in archived copies because whc.unesco.org refused direct requests, and the 2025 state of conservation report was not available to read'
  status: draft
---
Bali's rice terraces are watered by subaks: cooperative groups of farmers who share the water from one source by way of canals, tunnels and weirs. UNESCO counts about 1,200 of them, each with 50 to 400 farmers, and says the water temples where they meet have managed the terraces at the scale of whole watersheds since the 11th century. Five sites covering 19,520 hectares became a World Heritage cultural landscape in 2012. Even then UNESCO judged the terraces highly vulnerable to changes in farming and to tourism, and noted that some harmful development had already happened around the sites. Across the island, the land under rice fell from 70,996 hectares in 2019 to 64,474 in 2024, in figures from the land ministry published by BPS Bali, the provincial statistics office. BPS sets the loss against Bali's reliance on tourism and suspects it is one reason unhusked rice production fell 7.49% in 2025, to 587,870 tonnes.

## Who needs an answer

- Bali's provincial government. After floods on 10 September 2025, Governor Wayan Koster said a bylaw would end permits for hotels and restaurants on productive land, especially rice fields. In November he put the loss at 600 to 700 hectares a year, less than the BPS figures imply.
- Indonesia's national government, which the World Heritage Committee encouraged in 2021 and again in 2023 to finish designating the property a National Strategic Area. In 2023 UNESCO's advisers found the earlier timeframe had been missed, and the Committee repeated its request for heritage impact assessments of all development projects within the property and its buffer zones.
- The subaks themselves, which decide planting schedules and hold written customary codes (awig-awig) setting their members' rights and duties, and the farmers deciding whether to stay on the land.
- Hotels and households drawing groundwater. In 2019 Circle of Blue quoted an IDEP Foundation coordinator saying hotels were drawing too much water from their wells, and reported salt water encroaching underground from the sea.

## The domains it chains

Rain on the volcanoes and their crater lakes feeds springs and rivers. Canals divide that water among the subaks. Planting and flooding in step keep rice pests down. The harvests feed the island. Tourism and housing compete for the same land and water. Temples, rituals and customary law hold the schedule together.

## What a twin should let people try

- Loss in the middle: if a block of terraces in a subak is sold for villas, what happens to the water and pest timing for the subaks downstream?
- The upstream forest: how much does clearing in the catchment change the flow the subaks share, and the floods below?
- Planting schedules: in the 1970s, when farmers were told to plant Green Revolution rice as often as they could, agricultural and irrigation workers reported chaos in water scheduling and surging pests within two years. Would coordination break down again as farmers leave?
- Rules: what would the governor's ban on converting productive land, or a stricter one inside the heritage sites, keep in rice by 2035?

## Where to start

The classic model of the problem is [Lansing and Kremer's simulation](/articles/lansing-kremer-balinese-water-temple-networks/) of 172 subaks between two rivers, coupling water, crops and pests. It could be rebuilt in an agent-based tool such as [NetLogo](/engines/netlogo/). The 2017 PNAS follow-up matched the subaks' planting patterns against multispectral satellite images, donated by DigitalGlobe; [Copernicus Data Space](/data-sources/copernicus-data-space/) is a free source of such images. BPS Bali publishes rice field area, harvested area and production each year. UNESCO's state of conservation reports, issued in 2014, 2015 and every two years since, track what the province and Indonesia have done. The general question is under [land use change](/questions/land-use-change/).
