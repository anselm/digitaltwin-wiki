---
about:
  label: Living Planet Index
  description: >-
    ZSL and WWF's measure of how monitored wildlife has changed since 1970,
    averaged over tens of thousands of animal population counts; the 2026
    edition reports an average fall of 73%.
  aliases:
    - LPI
    - Living Planet Database
    - LPD
  tags:
    - biodiversity
    - wildlife
    - populations
    - indicators
    - vertebrates
    - time series
datasource:
  coverage: global; vertebrate populations on land, in fresh water and in the sea
  resolution: individual monitored populations with location; trends globally, by system and by IPBES region
  cadence: index and database published every two years with WWF's Living Planet Report (2026 the latest)
  access: free download of the public database after stating intended use and accepting the data-use policy; published trends CC BY-SA 4.0; R package rlpi on GitHub
  homepage: 'https://www.livingplanetindex.org/'
open:
  source: unknown
  data: restricted
  api: unknown
  participation: open
  licence: >-
    Living Planet Database: ZSL/WWF data-use policy (conservation, scientific
    analysis or research only; no financial gain; no passing on);
    published LPI trends CC BY-SA 4.0
domains:
  - ecology
provenance:
  origin: agent
  sources:
    - title: Living Planet Index
      url: 'https://www.livingplanetindex.org/'
    - title: About the Index
      url: 'https://www.livingplanetindex.org/about_index'
    - title: The Living Planet Database
      url: 'https://www.livingplanetindex.org/LPD_page'
    - title: Data Bias
      url: 'https://www.livingplanetindex.org/data_bias_page'
    - title: Download the data behind the Living Planet Index
      url: 'https://www.livingplanetindex.org/data_portal'
    - title: 'Data Use Policy: Living Planet Index'
      url: 'https://www.livingplanetindex.org/documents/LPI_Data_Use_Policy_2026.pdf'
    - title: Latest Results
      url: 'https://www.livingplanetindex.org/latest_results'
    - title: Clustered versus catastrophic global vertebrate declines
      url: 'https://doi.org/10.1038/s41586-020-2920-6'
    - title: Random population fluctuations bias the Living Planet Index
      url: 'https://doi.org/10.1038/s41559-021-01494-0'
    - title: Mathematical biases in the calculation of the Living Planet Index lead to overestimation of vertebrate population decline
      url: 'https://doi.org/10.1038/s41467-024-49070-x'
  created: '2026-10-26'
  reviewed: '2026-10-26'
  reviewed_by: >-
    Claude, from the sources listed; the three papers were read for their
    abstracts only, and the 2026 Technical Supplement was not read
  status: draft
---
The Living Planet Index (LPI) tracks wild populations of vertebrates, the animals with backbones, on land, in fresh water and in the sea.[^1,2] It reports the average change in their size over time.[^2] It is run by the Zoological Society of London (ZSL) and WWF, and its results are published every two years in WWF's Living Planet Report, together with an updated version of the data behind it, the Living Planet Database.[^1,3] The Convention on Biological Diversity has adopted it as an indicator of progress towards the Kunming-Montreal Global Biodiversity Framework.[^7]

Each record in the database is a time series for one population: counts of its size, its density, its abundance per sample, or a stand-in such as the number of nests.[^2] The records are gathered from scientific journals, online databases and government reports, along with where each population was monitored and the local threats it faces.[^2,3] The 2026 index draws on 35,803 populations of 5,790 species, while the database holds almost 41,994 populations of 5,570 species; the site gives both figures on different pages.[^1,3] The 2026 index shows an average fall of 73%, dated 1970 to 2020 on the About page and 1970 to 2022 on the download page.[^2,5] Roughly half the populations are stable or increasing and half declining, and the average falls because the declines are larger than the increases.[^2] An overview of the 2026 figures and what they do not mean is on this site as [A 73% average decline in wildlife populations](/articles/living-planet-index-explained/).

ZSL and WWF set out the limits themselves. The data lean towards well-studied species and regions, such as charismatic or easily seen species and North America and Europe.[^4] The larger gaps are in remote tropical areas.[^4] There are fewer data for the early decades and the latest years, and most sources are in English.[^4] Depending on the vertebrate group, the index includes between 2% and 18% of known species, with mammals and birds best covered and amphibians and reptiles least.[^3] The global index is weighted by the estimated diversity of vertebrate species worldwide to offset part of this.[^3] Trends are also published separately for each IPBES region (the regions used by the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services).[^4]

Researchers outside the team have questioned the method. Leung and colleagues, in Nature in 2020, found the global decline then reported (more than 50% since 1970) was driven by fewer than 3% of populations, and that without those the trend became an increase.[^8] Buschke and colleagues, in Nature Ecology & Evolution in 2021, found that random year-to-year fluctuations in populations exaggerate the global decline by 9.6%, while confirming a substantial decline.[^9] Tószögyová and colleagues, in Nature Communications in 2024, found that mathematical issues in how the index is calculated overestimate declines, and proposed changes.[^10]

The public version of the database, with confidential records removed, can be downloaded free after giving a name, email address and intended use and agreeing to the data-use policy.[^5] That policy allows the data to be used only for conservation, scientific analysis or research.[^6] The data, or products derived from them, may not be reproduced for financial gain, passed to third parties or republished in their original form.[^6] Derived datasets may be shared only under the same terms, and users must cite the database version and send the team a copy of what they publish.[^6] The published trend lines may be reproduced under CC BY-SA 4.0.[^6] The code that calculates the index is the R package rlpi, published on GitHub.[^5]

For someone modelling a place, the database holds monitored population records with their locations and threats, so it can show which vertebrate populations have been counted in a region and how they changed.[^3] Its regional trends give a published backdrop for nature in that part of the world.[^4,7]
